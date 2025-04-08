const actionsDomestiques = [
  {
    texte: "arrose les plantes",
    effets: {
      bonheur: -2,
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "astique la poubelle de tri",
    effets: {
      bonheur: 2,
      energie: 0,
      intelligence: 2,
      sport: 2,
    },
  },
  {
    texte: "astique le coin du salon",
    effets: {
      sport: 3,
    },
  },
  {
    texte: "astique le meuble TV",
    effets: {
      bonheur: 0,
      intelligence: 1,
    },
  },
  {
    texte: "astique le panier à linge",
    effets: {
      bonheur: 3,
      energie: -3,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "astique le robinet",
    effets: {
      bonheur: -1,
      energie: 2,
      intelligence: 0,
    },
  },
  {
    texte: "astique le tapis du salon",
    effets: {
      bonheur: 2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "astique les coussins",
    effets: {
      energie: 1,
      sport: 1,
    },
  },
  {
    texte: "astique les couverts",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "astique les placards de cuisine",
    effets: {
      energie: 3,
      sport: 3,
    },
  },
  {
    texte: "astique les tiroirs de la salle de bain",
    effets: {
      energie: 2,
      intelligence: 2,
    },
  },
  {
    texte: "astique les ustensiles",
    effets: {
      bonheur: -1,
      energie: -1,
      sport: 2,
    },
  },
  {
    texte: "astique les verres",
    effets: {
      bonheur: 1,
      intelligence: 2,
      sport: 2,
    },
  },
  {
    texte: "aère la pièce",
    effets: {
      bonheur: 2,
      sport: 2,
    },
  },
  {
    texte: "change les draps du lit",
    effets: {
      sport: 3,
    },
  },
  {
    texte: "désencombre son bureau",
    effets: {
      bonheur: -2,
      intelligence: 2,
      sport: 2,
    },
  },
  {
    texte: "désinfecte les poignées de porte",
    effets: {
      bonheur: 0,
      energie: -3,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "désinfecte son téléphone",
    effets: {},
  },
  {
    texte: "désodorise le frigo",
    effets: {
      energie: 1,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "fait la poussière",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "fait la vaisselle",
    effets: {
      energie: 3,
      sport: 2,
    },
  },
  {
    texte: "frotte le carrelage de la cuisine",
    effets: {
      bonheur: -1,
      energie: 2,
      sport: 2,
    },
  },
  {
    texte: "jette les poubelles",
    effets: {
      bonheur: -2,
      energie: -3,
      intelligence: 1,
    },
  },
  {
    texte: "lave le sol",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: 3,
    },
  },
  {
    texte: "lave les rideaux",
    effets: {
      intelligence: 2,
    },
  },
  {
    texte: "lave les serviettes",
    effets: {
      bonheur: 1,
      energie: -1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "nettoie la hotte",
    effets: {
      bonheur: 1,
      energie: 2,
      intelligence: 2,
      sport: 3,
    },
  },
  {
    texte: "nettoie la poubelle",
    effets: {
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "nettoie la poubelle de tri",
    effets: {
      bonheur: 1,
      energie: 0,
      intelligence: 2,
      sport: 2,
    },
  },
  {
    texte: "nettoie la salle de bain",
    effets: {
      intelligence: 0,
    },
  },
  {
    texte: "nettoie le coin du salon",
    effets: {
      bonheur: 3,
      energie: 3,
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte: "nettoie le frigo",
    effets: {
      bonheur: -1,
      energie: 2,
      intelligence: 2,
    },
  },
  {
    texte: "nettoie le meuble TV",
    effets: {
      energie: -3,
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "nettoie le micro-ondes",
    effets: {
      bonheur: 1,
      energie: 0,
      intelligence: 2,
      sport: 3,
    },
  },
  {
    texte: "nettoie le panier à linge",
    effets: {
      intelligence: 0,
      sport: 3,
    },
  },
  {
    texte: "nettoie le tapis du salon",
    effets: {
      bonheur: -1,
      energie: -3,
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "nettoie les coins oubliés",
    effets: {
      bonheur: -2,
      intelligence: 2,
      sport: 2,
    },
  },
  {
    texte: "nettoie les coussins",
    effets: {
      bonheur: 3,
      energie: 3,
      intelligence: 1,
    },
  },
  {
    texte: "nettoie les interrupteurs",
    effets: {
      bonheur: -2,
      sport: 1,
    },
  },
  {
    texte: "nettoie les joints de carrelage",
    effets: {
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "nettoie les murs",
    effets: {
      bonheur: -2,
      energie: -2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "nettoie les placards de cuisine",
    effets: {
      bonheur: -2,
      sport: 2,
    },
  },
  {
    texte: "nettoie les plinthes",
    effets: {
      energie: 2,
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "nettoie les tiroirs de la salle de bain",
    effets: {
      bonheur: 2,
      energie: -2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "nettoie les ustensiles",
    effets: {
      bonheur: -2,
      energie: -2,
      intelligence: 2,
    },
  },
  {
    texte: "nettoie les verres",
    effets: {
      bonheur: 3,
      energie: -1,
      intelligence: 1,
    },
  },
  {
    texte: "nettoie les vitres",
    effets: {
      bonheur: 3,
      energie: 0,
      intelligence: 1,
    },
  },
  {
    texte: "nettoie son clavier",
    effets: {
      bonheur: 3,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "nettoie sous le canapé",
    effets: {
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "organise le placard",
    effets: {
      bonheur: -1,
      energie: -2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "organise les câbles électriques",
    effets: {
      energie: -3,
      intelligence: 1,
    },
  },
  {
    texte: "organise ses tiroirs",
    effets: {
      bonheur: 0,
      energie: -2,
      intelligence: 1,
    },
  },
  {
    texte: "passe la poubelle de tri",
    effets: {
      energie: -2,
      intelligence: 0,
    },
  },
  {
    texte: "passe la serpillière",
    effets: {
      energie: 3,
      sport: 1,
    },
  },
  {
    texte: "passe le coin du salon",
    effets: {
      bonheur: 2,
      intelligence: 2,
      sport: 2,
    },
  },
  {
    texte: "passe le meuble TV",
    effets: {
      intelligence: 0,
    },
  },
  {
    texte: "passe le panier à linge",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "passe le tapis du salon",
    effets: {
      energie: -3,
      sport: 3,
    },
  },
  {
    texte: "passe les coussins",
    effets: {
      bonheur: 3,
      energie: -3,
      intelligence: 2,
      sport: 3,
    },
  },
  {
    texte: "passe les placards de cuisine",
    effets: {
      energie: -2,
      sport: 1,
    },
  },
  {
    texte: "passe les tiroirs de la salle de bain",
    effets: {
      energie: -2,
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "passe les ustensiles",
    effets: {
      bonheur: 0,
      energie: -3,
      intelligence: 0,
      sport: 3,
    },
  },
  {
    texte: "passe les verres",
    effets: {
      bonheur: 2,
      energie: 2,
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "passe l’aspirateur",
    effets: {
      energie: -1,
    },
  },
  {
    texte: "passe un chiffon sur les écrans",
    effets: {
      bonheur: -1,
      energie: 3,
    },
  },
  {
    texte: "passe un coup de balai",
    effets: {
      bonheur: 3,
      sport: 3,
    },
  },
  {
    texte: "plie les vêtements",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 3,
    },
  },
  {
    texte: "prépare un repas maison",
    effets: {
      sport: 3,
    },
  },
  {
    texte: "range la poubelle de tri",
    effets: {
      energie: -2,
      intelligence: 2,
      sport: 3,
    },
  },
  {
    texte: "range le coin du salon",
    effets: {
      energie: 0,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "range le meuble TV",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 3,
    },
  },
  {
    texte: "range le panier à linge",
    effets: {
      energie: -3,
    },
  },
  {
    texte: "range le tapis du salon",
    effets: {
      intelligence: 1,
    },
  },
  {
    texte: "range les chaussures",
    effets: {
      energie: 3,
      intelligence: 0,
    },
  },
  {
    texte: "range les coussins",
    effets: {
      energie: -2,
      sport: 2,
    },
  },
  {
    texte: "range les livres",
    effets: {
      bonheur: 0,
      energie: -1,
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte: "range les placards de cuisine",
    effets: {
      bonheur: -2,
      energie: -2,
      sport: 1,
    },
  },
  {
    texte: "range les tiroirs de la salle de bain",
    effets: {
      bonheur: 3,
      energie: -2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "range les ustensiles",
    effets: {
      bonheur: -2,
      energie: 2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "range les verres",
    effets: {
      bonheur: -2,
      energie: -1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "range sa chambre",
    effets: {
      bonheur: 2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "replie une couverture",
    effets: {
      bonheur: 3,
      energie: 2,
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "récure la baignoire",
    effets: {
      bonheur: -1,
      energie: 1,
      intelligence: 0,
    },
  },
  {
    texte: "réorganise la poubelle de tri",
    effets: {
      bonheur: 0,
      energie: -2,
      sport: 1,
    },
  },
  {
    texte: "réorganise le coin du salon",
    effets: {
      bonheur: -1,
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "réorganise le garde-manger",
    effets: {
      sport: 1,
    },
  },
  {
    texte: "réorganise le meuble TV",
    effets: {
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "réorganise le panier à linge",
    effets: {
      bonheur: 2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "réorganise le tapis du salon",
    effets: {
      bonheur: -2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "réorganise les coussins",
    effets: {
      bonheur: 1,
      energie: 0,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "réorganise les placards de cuisine",
    effets: {
      sport: 2,
    },
  },
  {
    texte: "réorganise les tiroirs de la salle de bain",
    effets: {
      bonheur: -1,
      energie: -3,
      intelligence: 2,
      sport: 3,
    },
  },
  {
    texte: "réorganise les ustensiles",
    effets: {
      bonheur: 0,
      energie: -2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "réorganise les verres",
    effets: {
      energie: 0,
      intelligence: 0,
    },
  },
  {
    texte: "réorganise les étagères",
    effets: {
      energie: 0,
      intelligence: 1,
      sport: 3,
    },
  },
  {
    texte: "répare un objet cassé",
    effets: {
      bonheur: 1,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "trie les papiers",
    effets: {
      bonheur: -1,
      energie: 2,
    },
  },
  {
    texte: "trie ses habits",
    effets: {
      bonheur: -1,
      energie: 3,
      sport: 1,
    },
  },
  {
    texte: "vide les poches des vêtements",
    effets: {
      bonheur: 1,
      energie: -3,
      intelligence: 2,
    },
  },
  {
    texte: "étend le linge",
    effets: {
      bonheur: 2,
      intelligence: 2,
      sport: 1,
    },
  },
];

module.exports = actionsDomestiques;
