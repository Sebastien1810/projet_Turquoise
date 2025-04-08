require(`dotenv`).config();
const Personnage = require("./models/Personnage");
const allActions = require("./actions/actions.js/actions");
const mongoose = require("mongoose");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const token = process.env.DISCORD_TOKEN; //j'ai utiliser un.env donc je le recup depuis process.env
const fs = require("fs");
const path = require("path");
const commands = new Map();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages, //permets l'acces géneral au serveur
    GatewayIntentBits.MessageContent, // recevoir les messages
    GatewayIntentBits.Guilds, // lire le texte des messages
  ],
}); //Creer une nouvelle instance
// (Les intents sont des autorisations que je donne au bot pour lui dire "voici les types d’événements que je veux recevoir depuis Discord)

const commandFiles = fs.readdirSync(path.join(__dirname, "commands"));
// ↑ __dirname = dossier actuel (là où se trouve index.js)
// ↑ path.join(...) = construit un chemin complet vers le dossier "commands"
// ↑ fs.readdirSync(...) = lit tous les fichiers de ce dossier (ex: ["createPersonnage.js", "stats.js"])

for (const file of commandFiles) {
  const filePath = path.join(__dirname, "commands", file);
  //  Importer le fichier commande (chaque fichier doit exporter { name, execute })
  const command = require(filePath);
  console.log(`Commande "${command.name}" chargée depuis ${file}`);
  commands.set(command.name, command.execute);
}

//Quand le client est prêt, run le code (uniquement une fois)
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready!Logged in as ${readyClient.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return; // On ignore les messages des bots
  if (!message.content.startsWith("!")) return; // On ignore les messages sans "!"

  const args = message.content.slice(1).trim().split(/ +/); // ["createPersonnage", "Lucas"]
  const commandName = args.shift().toLowerCase(); // "createPersonnage"
  const command = commands.get(commandName);

  if (command) {
    command(message, args); // Exécute la commande
  } else {
    message.reply("Commande inconnue.");
  }
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🟢 Connecté à MongoDB"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

//on se connecte avec le token client
client.login(token);

async function eventPersonnage(client) {
  const personnages = await Personnage.find();
  for (const perso of personnages) {
    if (!perso.stats) continue;
    const index = Math.floor(Math.random() * allActions.length);
    const action = allActions[index];
    console.log(`${perso.nom} fait : ${action.texte}`);
    for (const clé in action.effets) {
      perso.stats[clé] += action.effets[clé];
    }
    await perso.save(); // enregistre les modifs dans ma base de données

    const channel = client.channels.cache.find(
      (c) => c.name === "safeplace_city" && c.isTextBased()
    );
    if (!channel) return console.error("Salon safeplace_city introuvable.");

    let effetsMsg = Object.entries(action.effets)
      .map(([cle, valeur]) => {
        const emoji =
          cle === "bonheur"
            ? "💖"
            : cle === "energie"
            ? "⚡"
            : cle === "sport"
            ? "💪"
            : cle === "intelligence"
            ? "🧠"
            : "";
        return `${emoji} ${cle} : ${valeur > 0 ? "+" : ""}${valeur}`;
      })
      .join(" | ");

    channel.send(`📝 **${perso.nom}** ${action.texte}\n${effetsMsg}`);
  }

  console.log("Une action sera appliquée à chaque personnage ici.");
}
setInterval(() => eventPersonnage(client), 60000);
