const createPersonnage = require("../commands/createPersonnage");
const Personnage = require("../models/Personnage"); //j'importe mon modèle

function randomStat(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  name: "createpersonnage",
  async execute(message, args) {
    if (!args[0]) {
      return message.reply(
        "tu dois entrer un nom! Exemple: !createPersonnage Lucas"
      );
    }

    const nom = args[0];
    const userId = message.author.id;
    try {
      const existing = await Personnage.findOne({ userId });

      if (existing) {
        return message.reply("tu as déja un personnage !");
      }
      //crée un nouveau personnage avec les stats par défaut
      const nouveauPerso = new Personnage({
        userId,
        nom,
        stats: {
          bonheur: randomStat(30, 70),
          energie: randomStat(30, 70),
          sport: randomStat(5, 20),
          intelligence: randomStat(5, 20),
        },
      });
      await nouveauPerso.save();
      message.reply(
        `Le nouveau personnage ${nom} a été invoqué et enregistré avec succès`
      );
    } catch (error) {
      console.error("Erreur MongoDb :", error);
      message.reply(
        "une erreur est survenue lors de la création du personnage."
      );
    }
  },
};
