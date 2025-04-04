const createPersonnage = require("../commands/createPersonnage");

module.exports = {
  name: "createPersonnage",
  execute(message, args) {
    if (!args[0] === undefined) {
      message.reply("tu dois entrer un nom! Exemple: !createPersonnage Lucas");
    } else {
      const nom = args[0];
      message.reply(`Un nouveau personnage ${nom} a été invoqué`);
    }
  },
};
