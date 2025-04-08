const actionsSanté = [
  {
    texte: "ajuste ses habitudes en bu un thé vert riche en antioxydants",
    effets: {
      bonheur: 2,
      energie: 4,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "ajuste ses habitudes en choisi de cuisiner maison",
    effets: {
      bonheur: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "ajuste ses habitudes en fait une promenade au soleil",
    effets: {
      bonheur: 1,
      energie: 2,
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "ajuste ses habitudes en fait une séance de respiration profonde",
    effets: {
      bonheur: 0,
      energie: 3,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "ajuste ses habitudes en opté pour des produits naturels",
    effets: {
      energie: 4,
      sport: 2,
    },
  },
  {
    texte: "ajuste ses habitudes en préparé un smoothie sain",
    effets: {
      energie: 3,
      sport: 1,
    },
  },
  {
    texte: "ajuste ses habitudes en remplacé une boisson sucrée par de l’eau",
    effets: {
      bonheur: 4,
      energie: 4,
      sport: 0,
    },
  },
  {
    texte: "ajuste ses habitudes en reposé ses yeux après une longue journée",
    effets: {
      bonheur: 0,
      energie: 3,
      sport: 1,
    },
  },
  {
    texte: "ajuste ses habitudes en réglé son cycle de sommeil",
    effets: {
      bonheur: 1,
    },
  },
  {
    texte: "améliore sa santé en choisi de cuisiner maison",
    effets: {
      bonheur: 2,
      intelligence: 2,
    },
  },
  {
    texte: "améliore sa santé en consulté un professionnel de santé",
    effets: {
      bonheur: 1,
      energie: 5,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "améliore sa santé en dormi huit heures d'affilée",
    effets: {
      intelligence: 2,
      sport: 2,
    },
  },
  {
    texte: "améliore sa santé en fait un automassage relaxant",
    effets: {
      energie: 2,
    },
  },
  {
    texte: "améliore sa santé en fait une séance de respiration profonde",
    effets: {
      bonheur: 2,
    },
  },
  {
    texte: "améliore sa santé en marché pieds nus dans l’herbe",
    effets: {
      intelligence: 0,
    },
  },
  {
    texte: "améliore sa santé en médité pendant quelques minutes",
    effets: {
      bonheur: 4,
      energie: 5,
      sport: 2,
    },
  },
  {
    texte: "améliore sa santé en planifié ses repas de la semaine",
    effets: {
      bonheur: 0,
      energie: 1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "améliore sa santé en préparé un smoothie sain",
    effets: {
      energie: 1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "améliore sa santé en remplacé une boisson sucrée par de l’eau",
    effets: {
      energie: 3,
    },
  },
  {
    texte: "améliore sa santé en réalisé un jeûne intermittent",
    effets: {
      bonheur: 2,
      energie: 3,
      sport: 0,
    },
  },
  {
    texte: "améliore sa santé en testé une recette saine",
    effets: {
      bonheur: 1,
      energie: 1,
      sport: 1,
    },
  },
  {
    texte: "commence la journée en bu un thé vert riche en antioxydants",
    effets: {
      energie: 4,
    },
  },
  {
    texte: "commence la journée en bu une tisane digestive",
    effets: {
      bonheur: 4,
      energie: 4,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "commence la journée en choisi de cuisiner maison",
    effets: {
      bonheur: 4,
      energie: 5,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "commence la journée en consulté un professionnel de santé",
    effets: {
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "commence la journée en fait une pause loin des écrans",
    effets: {
      bonheur: 3,
      energie: 4,
    },
  },
  {
    texte: "commence la journée en fait une promenade au soleil",
    effets: {
      bonheur: 1,
      energie: 4,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "commence la journée en fait une séance de respiration profonde",
    effets: {
      energie: 1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "commence la journée en lu sur les bienfaits de l'alimentation",
    effets: {
      bonheur: 2,
      energie: 3,
      intelligence: 0,
    },
  },
  {
    texte: "commence la journée en marché pieds nus dans l’herbe",
    effets: {
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte: "commence la journée en médité pendant quelques minutes",
    effets: {
      bonheur: 0,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "commence la journée en pris ses vitamines",
    effets: {
      bonheur: 0,
      energie: 3,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "commence la journée en préparé un repas riche en fibres",
    effets: {
      bonheur: 2,
      sport: 1,
    },
  },
  {
    texte: "commence la journée en remplacé une boisson sucrée par de l’eau",
    effets: {
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "commence la journée en réalisé un jeûne intermittent",
    effets: {
      bonheur: 3,
      energie: 2,
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "fait attention à sa forme en marché pieds nus dans l’herbe",
    effets: {
      bonheur: 1,
      energie: 3,
      intelligence: 2,
    },
  },
  {
    texte: "fait attention à sa forme en médité pendant quelques minutes",
    effets: {
      energie: 2,
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte: "fait attention à sa forme en planifié ses repas de la semaine",
    effets: {
      bonheur: 4,
      energie: 3,
      sport: 0,
    },
  },
  {
    texte: "fait attention à sa forme en réglé son cycle de sommeil",
    effets: {
      bonheur: 2,
      energie: 5,
      intelligence: 1,
    },
  },
  {
    texte: "fait attention à sa forme en étiré doucement ses muscles",
    effets: {
      energie: 3,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "fait attention à sa forme en évitée une habitude néfaste",
    effets: {
      bonheur: 4,
      sport: 1,
    },
  },
  {
    texte: "prend soin de son corps en bu une tisane digestive",
    effets: {
      bonheur: 2,
      energie: 2,
    },
  },
  {
    texte: "prend soin de son corps en choisi une infusion relaxante",
    effets: {
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "prend soin de son corps en consulté un professionnel de santé",
    effets: {
      intelligence: 2,
    },
  },
  {
    texte: "prend soin de son corps en lu sur les bienfaits de l'alimentation",
    effets: {
      bonheur: 1,
      energie: 5,
    },
  },
  {
    texte: "prend soin de son corps en mangé un repas équilibré",
    effets: {
      energie: 2,
      intelligence: 0,
    },
  },
  {
    texte: "prend soin de son corps en marché pieds nus dans l’herbe",
    effets: {
      bonheur: 0,
      energie: 4,
      sport: 1,
    },
  },
  {
    texte: "prend soin de son corps en planifié ses repas de la semaine",
    effets: {
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte:
      "prend soin de son corps en reposé ses yeux après une longue journée",
    effets: {
      intelligence: 0,
    },
  },
  {
    texte: "prend soin de son corps en réglé son cycle de sommeil",
    effets: {
      bonheur: 0,
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "prend soin de son corps en évitée une habitude néfaste",
    effets: {
      bonheur: 0,
      energie: 5,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte:
      "renforce son système immunitaire en fait des exercices de relaxation",
    effets: {
      bonheur: 2,
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "renforce son système immunitaire en fait une pause loin des écrans",
    effets: {
      bonheur: 2,
      energie: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "renforce son système immunitaire en fait une promenade au soleil",
    effets: {
      bonheur: 0,
      energie: 2,
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte:
      "renforce son système immunitaire en fait une séance de respiration profonde",
    effets: {
      energie: 5,
      intelligence: 2,
    },
  },
  {
    texte: "renforce son système immunitaire en mangé un repas équilibré",
    effets: {
      bonheur: 1,
      energie: 5,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte:
      "renforce son système immunitaire en opté pour des produits naturels",
    effets: {
      bonheur: 0,
      energie: 1,
      sport: 2,
    },
  },
  {
    texte: "renforce son système immunitaire en étiré doucement ses muscles",
    effets: {
      bonheur: 3,
      energie: 5,
      intelligence: 2,
    },
  },
  {
    texte: "se détend tout en fait une promenade au soleil",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "se détend tout en mangé un repas équilibré",
    effets: {
      bonheur: 3,
      energie: 2,
      intelligence: 0,
    },
  },
  {
    texte: "se détend tout en marché pieds nus dans l’herbe",
    effets: {
      bonheur: 4,
      energie: 4,
    },
  },
  {
    texte: "se détend tout en médité pendant quelques minutes",
    effets: {
      intelligence: 1,
    },
  },
  {
    texte: "se détend tout en planifié ses repas de la semaine",
    effets: {
      bonheur: 3,
      energie: 3,
      intelligence: 1,
    },
  },
  {
    texte: "se détend tout en pris ses vitamines",
    effets: {
      bonheur: 3,
      energie: 1,
      intelligence: 2,
    },
  },
  {
    texte: "se détend tout en réalisé un jeûne intermittent",
    effets: {
      bonheur: 2,
      sport: 1,
    },
  },
  {
    texte: "se détend tout en réduit sa consommation de sucre",
    effets: {
      bonheur: 3,
      energie: 5,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "se détend tout en réduit son stress par la pleine conscience",
    effets: {
      energie: 4,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "se détend tout en testé une recette saine",
    effets: {
      energie: 4,
      intelligence: 2,
    },
  },
  {
    texte: "se détend tout en étiré doucement ses muscles",
    effets: {
      energie: 4,
      sport: 2,
    },
  },
  {
    texte:
      "se reconnecte à son bien-être en consulté un professionnel de santé",
    effets: {
      bonheur: 4,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "se reconnecte à son bien-être en dormi huit heures d'affilée",
    effets: {
      bonheur: 1,
      energie: 4,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se reconnecte à son bien-être en fait une promenade au soleil",
    effets: {
      bonheur: 0,
      energie: 3,
      intelligence: 0,
    },
  },
  {
    texte:
      "se reconnecte à son bien-être en fait une séance de respiration profonde",
    effets: {
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "se reconnecte à son bien-être en marché pieds nus dans l’herbe",
    effets: {
      bonheur: 3,
      energie: 2,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se reconnecte à son bien-être en médité pendant quelques minutes",
    effets: {
      bonheur: 2,
      energie: 4,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "se reconnecte à son bien-être en opté pour des produits naturels",
    effets: {
      bonheur: 3,
      energie: 3,
    },
  },
  {
    texte:
      "se reconnecte à son bien-être en reposé ses yeux après une longue journée",
    effets: {
      energie: 2,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se reconnecte à son bien-être en réglé son cycle de sommeil",
    effets: {
      bonheur: 4,
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte: "se revitalise en bu un grand verre d’eau citronnée",
    effets: {
      bonheur: 2,
      energie: 5,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "se revitalise en bu un thé vert riche en antioxydants",
    effets: {
      energie: 2,
      sport: 2,
    },
  },
  {
    texte: "se revitalise en bu une tisane digestive",
    effets: {
      bonheur: 0,
      energie: 3,
      intelligence: 1,
    },
  },
  {
    texte: "se revitalise en choisi de cuisiner maison",
    effets: {
      bonheur: 0,
      energie: 4,
    },
  },
  {
    texte: "se revitalise en choisi une infusion relaxante",
    effets: {
      bonheur: 4,
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "se revitalise en dormi huit heures d'affilée",
    effets: {
      bonheur: 2,
      energie: 4,
    },
  },
  {
    texte: "se revitalise en fait des exercices de relaxation",
    effets: {
      bonheur: 2,
      intelligence: 1,
    },
  },
  {
    texte: "se revitalise en fait une pause loin des écrans",
    effets: {
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "se revitalise en lu sur les bienfaits de l'alimentation",
    effets: {
      energie: 5,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "se revitalise en marché pieds nus dans l’herbe",
    effets: {},
  },
  {
    texte: "se revitalise en planifié ses repas de la semaine",
    effets: {
      energie: 3,
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte: "se revitalise en remplacé une boisson sucrée par de l’eau",
    effets: {
      bonheur: 3,
      energie: 3,
      sport: 2,
    },
  },
  {
    texte: "se revitalise en réalisé un jeûne intermittent",
    effets: {
      energie: 3,
      sport: 2,
    },
  },
  {
    texte: "se revitalise en réglé son cycle de sommeil",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: 1,
      sport: 2,
    },
  },
  {
    texte: "se sent mieux après avoir bu un thé vert riche en antioxydants",
    effets: {
      bonheur: 3,
      energie: 4,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se sent mieux après avoir consulté un professionnel de santé",
    effets: {
      bonheur: 1,
      energie: 4,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se sent mieux après avoir fait un automassage relaxant",
    effets: {
      energie: 1,
      intelligence: 1,
    },
  },
  {
    texte: "se sent mieux après avoir fait une séance de respiration profonde",
    effets: {
      bonheur: 2,
      energie: 5,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "se sent mieux après avoir opté pour des produits naturels",
    effets: {
      bonheur: 2,
      energie: 5,
      intelligence: 0,
    },
  },
  {
    texte: "se sent mieux après avoir planifié ses repas de la semaine",
    effets: {
      bonheur: 2,
      energie: 4,
      intelligence: 0,
      sport: 2,
    },
  },
  {
    texte: "se sent mieux après avoir préparé un repas riche en fibres",
    effets: {
      bonheur: 3,
      energie: 5,
      intelligence: 0,
    },
  },
  {
    texte: "se sent mieux après avoir préparé un smoothie sain",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 0,
    },
  },
];

module.exports = actionsSanté;
