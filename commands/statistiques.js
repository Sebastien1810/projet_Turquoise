const Personnage = require("../models/Personnage");

module.exports = {
  name: "statistiques",
  async execute(message) {
    const userId = message.author.id;

    try {
      const existing = await Personnage.findOne({ userId });

      if (existing) {
        return message.reply(
          `📊 Voici les stats de ton personnage **${existing.nom}** :\n` +
            `💖 Bonheur : ${existing.stats.bonheur}\n` +
            `⚡ Énergie : ${existing.stats.energie}\n` +
            `🧠 Intelligence : ${existing.stats.intelligence}\n` +
            `💪 Sport : ${existing.stats.sport}`
        );
      } else {
        return message.reply(
          "Tu n'as pas encore de personnage. Utilise : `!createpersonnage` pour en créer un !"
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques :", error);
      return message.reply(
        "Une erreur est survenue lors de l'affichage des statistiques."
      );
    }
  },
};
