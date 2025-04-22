const actionSportives = require("./actions_sportives");
const actionRelationelles = require("./actions_relationelles");
const actionSanté = require("./actions_santé");
const actionRepos = require("./actions_repos");
const actionSociales = require("./actions_sociales");
const actionIntellectuelles = require("./actions_intellectuelles");
const actionDomestiques = require("./actions_domestiques");
const actions_interactions = require("./actions_interactions");

const allActions = [
  ...actionSportives,
  ...actionRelationelles,
  ...actionSanté,
  ...actionRepos,
  ...actionSociales,
  ...actionIntellectuelles,
  ...actionDomestiques,
];
const allInteractions = [...actions_interactions];
module.exports = { allActions, allInteractions };
