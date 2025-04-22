require("dotenv").config();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const Personnage = require("./models/Personnage");
const { allActions, allInteractions } = require("./actions/actions");

const token = process.env.DISCORD_TOKEN; // récupère le token depuis .env
const mongoUri = process.env.MONGO_URI; // URI MongoDB

// Crée une instance du client Discord avec les intents nécessaires
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // accès aux guilds
    GatewayIntentBits.GuildMessages, // recevoir les messages
    GatewayIntentBits.MessageContent, // lire le contenu des messages
  ],
});

// Chargement dynamique des commandes depuis le dossier "commands"
const commands = new Map();
const commandsPath = path.join(__dirname, "commands");
if (fs.existsSync(commandsPath)) {
  fs.readdirSync(commandsPath).forEach((file) => {
    if (file.endsWith(".js")) {
      const command = require(path.join(commandsPath, file));
      if (command.name && typeof command.execute === "function") {
        commands.set(command.name, command.execute);
        console.log(`Commande "${command.name}" chargée depuis ${file}`);
      }
    }
  });
}

// Connexion à MongoDB
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("🟢 Connecté à MongoDB"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Lorsqu'on est prêt, on initialise la planification des actions
client.once(Events.ClientReady, async () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
  // Planifie une action pour chaque personnage existant
  const personnages = await Personnage.find();
  personnages.forEach((p) => scheduleActionFor(p));
});

// Gestion des messages et exécution des commandes
client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.content.startsWith("!")) return; // ignore les bots et les messages sans préfixe

  const args = message.content.slice(1).trim().split(/\s+/); // sépare la commande et les arguments
  const commandName = args.shift().toLowerCase();
  const command = commands.get(commandName);

  if (!command) {
    return message.reply("Commande inconnue.");
  }

  try {
    await command(message, args); // exécute la commande
  } catch (error) {
    console.error(
      `Erreur lors de l'exécution de la commande ${commandName}:`,
      error
    );
    message.reply(
      "Une erreur est survenue lors de l'exécution de la commande."
    );
  }
});

// Fonction récursive pour planifier et exécuter des actions ou interactions
async function scheduleActionFor(perso) {
  if (!perso.stats) return;
  const delay = Math.floor(Math.random() * 7200000); // délai aléatoire jusqu'à 2h

  setTimeout(async () => {
    try {
      const personnages = await Personnage.find();
      const others = personnages.filter((p) => !p._id.equals(perso._id)); // exclut soi-même
      if (!others.length) return scheduleActionFor(perso);

      let texte, effets;
      if (Math.random() < 0.2 && allInteractions.length) {
        // cas d'une interaction (20% de chance)
        const interaction =
          allInteractions[Math.floor(Math.random() * allInteractions.length)];
        const target = others[Math.floor(Math.random() * others.length)];
        texte = interaction.texte.replace("{cible}", target.nom);
        effets = interaction.effets;
      } else {
        // cas d'une action simple
        const action =
          allActions[Math.floor(Math.random() * allActions.length)];
        texte = action.texte;
        effets = action.effets;
      }

      // application des effets sur les stats
      for (const [key, val] of Object.entries(effets)) {
        perso.stats[key] = (perso.stats[key] || 0) + val;
      }
      await perso.save(); // enregistre dans la base

      // envoi du message dans le salon dédié
      const channel = client.channels.cache.find(
        (c) => c.name === "safeplace_city" && c.isTextBased()
      );
      if (!channel) {
        console.error("Salon safeplace_city introuvable.");
      } else {
        const emojiMap = {
          bonheur: "💖",
          energie: "⚡",
          sport: "💪",
          intelligence: "🧠",
        };
        const effetsMsg = Object.entries(effets)
          .map(
            ([k, v]) => `${emojiMap[k] || ""} ${k} : ${v > 0 ? "+" : ""}${v}`
          )
          .join(" | ");
        channel.send(`📝 **${perso.nom}** ${texte}\n${effetsMsg}`);
      }
    } catch (err) {
      console.error(
        "Erreur lors du traitement de l'action du personnage:",
        err
      );
    } finally {
      // replanifie l'action suivante
      scheduleActionFor(perso);
    }
  }, delay);
}

client.login(token);
