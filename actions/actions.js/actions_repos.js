const actionsRepos = [
  {
    texte: "fait une sieste de 20 minutes",
    effets: {
      bonheur: 2,
      energie: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "regarde un film romantique",
    effets: {
      energie: 1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "boit une tisane à la camomille",
    effets: {
      bonheur: 5,
      sport: 0,
    },
  },
  {
    texte: "écoute une playlist lo-fi",
    effets: {
      energie: 3,
      intelligence: 0,
    },
  },
  {
    texte: "lit un roman de science-fiction",
    effets: {
      bonheur: 2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "prend un bain moussant chaud",
    effets: {
      intelligence: 0,
      sport: -1,
    },
  },
  {
    texte: "observe les nuages en silence",
    effets: {
      bonheur: 1,
      energie: 1,
    },
  },
  {
    texte: "s’allonge sur le canapé sans bouger",
    effets: {
      bonheur: 4,
      sport: 1,
    },
  },
  {
    texte: "regarde les étoiles depuis sa fenêtre",
    effets: {
      bonheur: -4,
      sport: 1,
    },
  },
  {
    texte: "fait brûler une bougie parfumée à la lavande",
    effets: {
      bonheur: 5,
      energie: -3,
      intelligence: -2,
      sport: 0,
    },
  },
  {
    texte: "écoute un podcast apaisant sur le sommeil",
    effets: {
      bonheur: 2,
      energie: 4,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "joue à un jeu de puzzle relaxant",
    effets: {
      bonheur: 5,
      intelligence: 0,
    },
  },
  {
    texte: "dessine dans un carnet de croquis",
    effets: {
      energie: -4,
      intelligence: -1,
    },
  },
  {
    texte: "fait quelques étirements doux",
    effets: {
      energie: 6,
      sport: 1,
    },
  },
  {
    texte: "s’endort dans un hamac au soleil",
    effets: {
      bonheur: -1,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "regarde des vidéos de chatons",
    effets: {
      bonheur: 3,
      energie: -4,
      sport: 1,
    },
  },
  {
    texte: "s'étire doucement en respirant profondément",
    effets: {
      bonheur: 4,
      energie: 5,
      intelligence: 2,
    },
  },
  {
    texte: "plie des origamis en papier coloré",
    effets: {
      bonheur: -4,
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "s’asseoit dans un fauteuil confortable",
    effets: {
      energie: 4,
      sport: 0,
    },
  },
  {
    texte: "ferme les yeux et écoute le silence",
    effets: {
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "se fait un masque au concombre",
    effets: {
      bonheur: -5,
      energie: 1,
    },
  },
  {
    texte: "boit un smoothie à la banane",
    effets: {
      bonheur: 5,
      energie: 5,
      intelligence: 1,
    },
  },
  {
    texte: "regarde la pluie tomber depuis le salon",
    effets: {
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "écoute des sons de la nature",
    effets: {
      bonheur: 2,
      energie: 6,
      sport: -1,
    },
  },
  {
    texte: "lit un magazine de voyage",
    effets: {
      bonheur: 4,
      energie: 5,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "prend un bain de pieds",
    effets: {
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "allume de l'encens",
    effets: {
      bonheur: -5,
      energie: 5,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "fait une séance de méditation guidée",
    effets: {
      bonheur: 3,
      energie: 2,
      sport: 0,
    },
  },
  {
    texte: "dessine des mandalas",
    effets: {
      energie: 3,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "fait des câlins à son chat",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: -2,
      sport: 0,
    },
  },
  {
    texte: "écoute une conférence TED allongé",
    effets: {
      bonheur: -3,
      energie: 1,
      intelligence: 0,
    },
  },
  {
    texte: "regarde un documentaire animalier",
    effets: {
      bonheur: -2,
      energie: -2,
      sport: 0,
    },
  },
  {
    texte: "se fait une manucure",
    effets: {
      energie: 4,
      sport: 0,
    },
  },
  {
    texte: "fait une pause sans écran",
    effets: {
      bonheur: 1,
      energie: -4,
    },
  },
  {
    texte: "fait une promenade en pyjama dans son jardin",
    effets: {
      sport: 1,
    },
  },
  {
    texte: "joue à un jeu calme sur son téléphone",
    effets: {
      energie: 4,
      intelligence: -1,
      sport: 1,
    },
  },
  {
    texte: "s'allonge dans l'herbe",
    effets: {
      bonheur: 4,
      sport: 1,
    },
  },
  {
    texte: "s'étend sur un tapis moelleux",
    effets: {
      bonheur: 5,
      energie: 3,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "regarde des souvenirs photos",
    effets: {
      bonheur: 4,
      energie: 1,
      sport: 0,
    },
  },
  {
    texte: "fait une micro-sieste de 5 minutes",
    effets: {
      bonheur: 3,
      energie: 5,
      intelligence: 0,
    },
  },
  {
    texte: "boit un chocolat chaud devant un feu virtuel",
    effets: {
      bonheur: -1,
      energie: 6,
      sport: 0,
    },
  },
  {
    texte: "écoute une playlist nostalgique",
    effets: {
      bonheur: 2,
      energie: 1,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "gribouille sans réfléchir",
    effets: {},
  },
  {
    texte: "essaye une appli de relaxation",
    effets: {
      bonheur: -5,
      intelligence: 0,
    },
  },
  {
    texte: "colorie un livre pour adulte",
    effets: {
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "lit quelques pages d'un livre préféré",
    effets: {
      bonheur: 2,
      energie: -5,
    },
  },
  {
    texte: "écoute un audio-livre de fantasy",
    effets: {
      bonheur: 2,
      energie: 5,
      intelligence: -2,
      sport: 0,
    },
  },
  {
    texte: "fait une pause pour admirer un coucher de soleil",
    effets: {
      bonheur: 2,
      intelligence: 2,
    },
  },
  {
    texte: "écoute un morceau de piano classique",
    effets: {
      bonheur: 3,
      energie: -6,
      intelligence: 0,
    },
  },
  {
    texte: "tire les rideaux et s’isole du monde",
    effets: {
      energie: 2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "fait du journaling introspectif",
    effets: {
      bonheur: 4,
      energie: -1,
      sport: 0,
    },
  },
  {
    texte: "prend du temps pour lui-même au lever du soleil",
    effets: {
      sport: 0,
    },
  },
  {
    texte: "se détend profondément en écoutant le vent",
    effets: {
      energie: 1,
      intelligence: -2,
    },
  },
  {
    texte: "s’évade mentalement dans une pièce calme",
    effets: {
      energie: -1,
      intelligence: 2,
    },
  },
  {
    texte: "respire lentement et profondément dans un coin douillet",
    effets: {
      bonheur: 3,
      energie: 6,
      intelligence: 1,
    },
  },
  {
    texte: "ferme les yeux quelques instants après avoir rangé sa chambre",
    effets: {
      bonheur: -2,
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "prend du temps pour lui-même sur son lit",
    effets: {
      bonheur: -4,
      energie: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "s’installe confortablement sur son lit",
    effets: {
      intelligence: -1,
      sport: 0,
    },
  },
  {
    texte: "s’installe confortablement dans une pièce calme",
    effets: {
      intelligence: 2,
    },
  },
  {
    texte: "ferme les yeux quelques instants en écoutant le vent",
    effets: {
      sport: 0,
    },
  },
  {
    texte: "respire lentement et profondément en silence total",
    effets: {
      energie: 2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "respire lentement et profondément en regardant les oiseaux",
    effets: {
      bonheur: 5,
      energie: 2,
      sport: -1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder en pyjama",
    effets: {
      bonheur: 4,
      intelligence: 0,
    },
  },
  {
    texte: "ferme les yeux quelques instants au lever du soleil",
    effets: {
      bonheur: 2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "s’évade mentalement après avoir rangé sa chambre",
    effets: {
      energie: -1,
      sport: 0,
    },
  },
  {
    texte: "s’accorde un instant de répit en écoutant le vent",
    effets: {
      energie: 2,
      intelligence: 0,
    },
  },
  {
    texte: "s’installe confortablement avec une lumière tamisée",
    effets: {
      bonheur: 2,
      sport: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser en regardant les oiseaux",
    effets: {
      bonheur: 5,
      energie: 6,
      intelligence: -1,
      sport: 0,
    },
  },
  {
    texte: "s’installe confortablement juste avant de dormir",
    effets: {
      bonheur: 1,
      energie: -3,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se détend profondément en regardant les oiseaux",
    effets: {
      bonheur: 5,
      sport: 1,
    },
  },
  {
    texte: "se détend profondément en silence total",
    effets: {
      bonheur: 4,
    },
  },
  {
    texte: "profite d’un moment de calme sous un plaid",
    effets: {
      bonheur: 5,
      intelligence: 2,
    },
  },
  {
    texte: "ferme les yeux quelques instants juste avant de dormir",
    effets: {
      bonheur: 2,
      energie: 4,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "profite d’un moment de calme après avoir rangé sa chambre",
    effets: {
      energie: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "laisse ses pensées vagabonder en silence total",
    effets: {
      bonheur: 5,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "ferme les yeux quelques instants en fermant les yeux",
    effets: {
      bonheur: 3,
    },
  },
  {
    texte: "s’évade mentalement sur son lit",
    effets: {
      bonheur: 5,
      energie: 1,
      intelligence: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser au lever du soleil",
    effets: {
      bonheur: -3,
      sport: 0,
    },
  },
  {
    texte: "profite d’un moment de calme dans un coin douillet",
    effets: {
      intelligence: 2,
    },
  },
  {
    texte: "prend du temps pour lui-même en écoutant le vent",
    effets: {
      bonheur: 4,
      energie: -5,
      sport: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser près d'une fenêtre ouverte",
    effets: {
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "respire lentement et profondément juste avant de dormir",
    effets: {
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "s’accorde un instant de répit en silence total",
    effets: {
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "s’évade mentalement avec une couverture douce",
    effets: {
      bonheur: 4,
      energie: 5,
      sport: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser pendant une soirée pluvieuse",
    effets: {
      bonheur: 2,
      intelligence: -2,
    },
  },
  {
    texte: "se détend profondément les pieds dans des chaussettes pilou",
    effets: {
      bonheur: -5,
      energie: -6,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "ferme les yeux quelques instants dans un coin douillet",
    effets: {
      energie: 1,
    },
  },
  {
    texte: "ferme les yeux quelques instants sur son lit",
    effets: {
      sport: 1,
    },
  },
  {
    texte: "s’installe confortablement sous un plaid",
    effets: {
      bonheur: 3,
      sport: 0,
    },
  },
  {
    texte: "respire lentement et profondément avec une couverture douce",
    effets: {
      energie: 1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder près d'une fenêtre ouverte",
    effets: {},
  },
  {
    texte: "se détend profondément près d'une fenêtre ouverte",
    effets: {
      energie: 1,
      intelligence: 1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder sur son lit",
    effets: {
      energie: 2,
    },
  },
  {
    texte: "s’accorde un instant de répit dans une pièce calme",
    effets: {
      bonheur: 3,
      energie: 6,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "laisse son esprit s’apaiser en écoutant le vent",
    effets: {
      intelligence: 2,
    },
  },
  {
    texte: "s’installe confortablement en écoutant le vent",
    effets: {
      bonheur: -3,
      energie: 1,
      sport: 0,
    },
  },
  {
    texte: "s’installe confortablement avec une couverture douce",
    effets: {
      bonheur: 5,
      energie: 5,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "se détend profondément avec une lumière tamisée",
    effets: {
      bonheur: 3,
      energie: -2,
      intelligence: -1,
      sport: -1,
    },
  },
  {
    texte: "prend du temps pour lui-même en pyjama",
    effets: {
      bonheur: 4,
      intelligence: 1,
    },
  },
  {
    texte: "s’accorde un instant de répit avec une lumière tamisée",
    effets: {
      bonheur: 4,
      intelligence: 0,
    },
  },
  {
    texte: "prend du temps pour lui-même pendant une soirée pluvieuse",
    effets: {
      energie: 6,
      intelligence: -1,
      sport: 0,
    },
  },
  {
    texte: "laisse ses pensées vagabonder au lever du soleil",
    effets: {
      bonheur: -4,
      energie: 3,
    },
  },
  {
    texte: "profite d’un moment de calme près d'une fenêtre ouverte",
    effets: {
      bonheur: -4,
      energie: -5,
      sport: 0,
    },
  },
  {
    texte: "prend du temps pour lui-même avec une infusion à la main",
    effets: {
      bonheur: -4,
      energie: 6,
      intelligence: -2,
      sport: 0,
    },
  },
  {
    texte: "profite d’un moment de calme pendant une soirée pluvieuse",
    effets: {
      energie: -5,
      intelligence: 0,
    },
  },
  {
    texte: "s’évade mentalement en pyjama",
    effets: {
      energie: -2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser en fermant les yeux",
    effets: {
      energie: 1,
      sport: -1,
    },
  },
  {
    texte: "laisse son esprit s’apaiser en silence total",
    effets: {
      bonheur: 5,
      energie: -6,
      sport: -1,
    },
  },
  {
    texte: "respire lentement et profondément avec une infusion à la main",
    effets: {
      bonheur: 5,
      energie: 5,
    },
  },
  {
    texte: "respire lentement et profondément allongé sur le sol",
    effets: {
      bonheur: 5,
      sport: 0,
    },
  },
  {
    texte: "profite d’un moment de calme juste avant de dormir",
    effets: {
      bonheur: 1,
      energie: 3,
    },
  },
  {
    texte: "laisse ses pensées vagabonder avec une infusion à la main",
    effets: {
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "s’accorde un instant de répit sur son lit",
    effets: {
      intelligence: 1,
    },
  },
  {
    texte: "s’accorde un instant de répit avec une infusion à la main",
    effets: {
      energie: 6,
      intelligence: -2,
      sport: -1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder juste avant de dormir",
    effets: {
      energie: 3,
      sport: 0,
    },
  },
  {
    texte:
      "ferme les yeux quelques instants les pieds dans des chaussettes pilou",
    effets: {
      sport: 1,
    },
  },
  {
    texte: "profite d’un moment de calme en fermant les yeux",
    effets: {
      bonheur: -5,
      energie: 1,
      sport: -1,
    },
  },
  {
    texte: "s’évade mentalement en fermant les yeux",
    effets: {
      bonheur: 5,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "laisse ses pensées vagabonder avec une couverture douce",
    effets: {
      sport: 1,
    },
  },
  {
    texte: "s’évade mentalement après le déjeuner",
    effets: {
      sport: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser après avoir rangé sa chambre",
    effets: {
      energie: 2,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "prend du temps pour lui-même avec une couverture douce",
    effets: {
      bonheur: -5,
      intelligence: 0,
    },
  },
  {
    texte: "s’accorde un instant de répit après avoir rangé sa chambre",
    effets: {},
  },
  {
    texte: "prend du temps pour lui-même avec une lumière tamisée",
    effets: {
      bonheur: 3,
      energie: 2,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "respire lentement et profondément en fermant les yeux",
    effets: {
      energie: 4,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "s’accorde un instant de répit juste avant de dormir",
    effets: {
      energie: -2,
    },
  },
  {
    texte: "laisse son esprit s’apaiser allongé sur le sol",
    effets: {
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "laisse son esprit s’apaiser sur son lit",
    effets: {
      energie: 4,
      intelligence: -2,
      sport: -1,
    },
  },
  {
    texte: "se détend profondément dans une pièce calme",
    effets: {
      bonheur: 5,
      energie: 5,
      intelligence: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser avec une infusion à la main",
    effets: {
      bonheur: 1,
      energie: 5,
      intelligence: 0,
    },
  },
  {
    texte: "respire lentement et profondément après avoir rangé sa chambre",
    effets: {
      bonheur: 2,
      energie: 5,
      sport: 1,
    },
  },
  {
    texte: "s’installe confortablement en regardant les oiseaux",
    effets: {
      bonheur: 3,
      sport: 0,
    },
  },
  {
    texte: "prend du temps pour lui-même les pieds dans des chaussettes pilou",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "prend du temps pour lui-même après le déjeuner",
    effets: {
      energie: 5,
      sport: 1,
    },
  },
  {
    texte: "profite d’un moment de calme avec une couverture douce",
    effets: {
      bonheur: -2,
      sport: 0,
    },
  },
  {
    texte: "laisse ses pensées vagabonder après avoir rangé sa chambre",
    effets: {
      bonheur: 3,
      intelligence: -1,
      sport: 0,
    },
  },
  {
    texte: "se détend profondément après avoir rangé sa chambre",
    effets: {
      sport: 1,
    },
  },
  {
    texte: "ferme les yeux quelques instants sous un plaid",
    effets: {
      energie: 4,
      sport: 0,
    },
  },
  {
    texte: "s’évade mentalement en silence total",
    effets: {
      energie: 1,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se détend profondément avec une infusion à la main",
    effets: {
      energie: -4,
    },
  },
  {
    texte: "s’installe confortablement allongé sur le sol",
    effets: {
      energie: -3,
      intelligence: 2,
    },
  },
  {
    texte: "prend du temps pour lui-même juste avant de dormir",
    effets: {
      bonheur: 5,
      energie: 1,
      intelligence: 2,
      sport: -1,
    },
  },
  {
    texte: "s’évade mentalement dans un coin douillet",
    effets: {
      intelligence: 0,
    },
  },
  {
    texte: "se détend profondément en fermant les yeux",
    effets: {
      bonheur: -4,
      energie: 4,
      intelligence: 2,
    },
  },
  {
    texte: "prend du temps pour lui-même allongé sur le sol",
    effets: {
      bonheur: 2,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "s’évade mentalement sous un plaid",
    effets: {
      bonheur: 2,
      intelligence: -2,
    },
  },
  {
    texte: "profite d’un moment de calme en pyjama",
    effets: {
      energie: -2,
    },
  },
  {
    texte: "laisse ses pensées vagabonder les pieds dans des chaussettes pilou",
    effets: {
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se détend profondément en pyjama",
    effets: {
      bonheur: 5,
      energie: 3,
      sport: 0,
    },
  },
  {
    texte: "prend du temps pour lui-même en regardant les oiseaux",
    effets: {
      bonheur: 4,
      energie: 3,
    },
  },
  {
    texte: "prend du temps pour lui-même en silence total",
    effets: {
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder avec une lumière tamisée",
    effets: {
      bonheur: 2,
      energie: -5,
      intelligence: 0,
    },
  },
  {
    texte: "ferme les yeux quelques instants en regardant les oiseaux",
    effets: {
      bonheur: 5,
      intelligence: 2,
    },
  },
  {
    texte: "ferme les yeux quelques instants près d'une fenêtre ouverte",
    effets: {
      bonheur: 2,
      energie: 6,
      sport: 1,
    },
  },
  {
    texte: "ferme les yeux quelques instants dans une pièce calme",
    effets: {
      bonheur: 2,
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "respire lentement et profondément sous un plaid",
    effets: {
      energie: -4,
      sport: 0,
    },
  },
  {
    texte: "s’installe confortablement près d'une fenêtre ouverte",
    effets: {
      bonheur: 4,
      energie: 6,
      intelligence: 0,
    },
  },
  {
    texte: "s’accorde un instant de répit en regardant les oiseaux",
    effets: {
      bonheur: 3,
      energie: 1,
      intelligence: 2,
    },
  },
  {
    texte: "s’évade mentalement en écoutant le vent",
    effets: {
      bonheur: 1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "profite d’un moment de calme les pieds dans des chaussettes pilou",
    effets: {
      energie: 5,
      intelligence: 2,
      sport: -1,
    },
  },
  {
    texte: "ferme les yeux quelques instants allongé sur le sol",
    effets: {
      bonheur: -5,
      energie: 4,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder allongé sur le sol",
    effets: {
      bonheur: 2,
    },
  },
  {
    texte: "s’accorde un instant de répit allongé sur le sol",
    effets: {
      energie: 6,
      intelligence: 0,
    },
  },
  {
    texte: "s’installe confortablement après avoir rangé sa chambre",
    effets: {
      bonheur: 5,
      sport: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser sous un plaid",
    effets: {
      bonheur: 3,
      intelligence: 1,
    },
  },
  {
    texte: "prend du temps pour lui-même sous un plaid",
    effets: {
      bonheur: 4,
      energie: 5,
      sport: 0,
    },
  },
  {
    texte: "laisse ses pensées vagabonder après le déjeuner",
    effets: {
      energie: 5,
    },
  },
  {
    texte: "respire lentement et profondément près d'une fenêtre ouverte",
    effets: {
      bonheur: -4,
      intelligence: 1,
    },
  },
  {
    texte: "prend du temps pour lui-même en fermant les yeux",
    effets: {
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "profite d’un moment de calme après le déjeuner",
    effets: {
      bonheur: 2,
      energie: -4,
      intelligence: 2,
      sport: -1,
    },
  },
  {
    texte: "ferme les yeux quelques instants en pyjama",
    effets: {
      energie: 4,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "laisse son esprit s’apaiser dans une pièce calme",
    effets: {
      intelligence: 1,
    },
  },
  {
    texte: "s’accorde un instant de répit au lever du soleil",
    effets: {
      intelligence: 0,
    },
  },
  {
    texte: "s’accorde un instant de répit les pieds dans des chaussettes pilou",
    effets: {},
  },
  {
    texte: "profite d’un moment de calme au lever du soleil",
    effets: {
      bonheur: 2,
      energie: 6,
      intelligence: 0,
    },
  },
  {
    texte: "s’installe confortablement en silence total",
    effets: {
      energie: -4,
    },
  },
  {
    texte: "respire lentement et profondément en pyjama",
    effets: {
      bonheur: 1,
      sport: 1,
    },
  },
  {
    texte: "laisse son esprit s’apaiser les pieds dans des chaussettes pilou",
    effets: {
      bonheur: 5,
      energie: 6,
      intelligence: 1,
    },
  },
  {
    texte: "profite d’un moment de calme avec une lumière tamisée",
    effets: {
      bonheur: 2,
      energie: 6,
      intelligence: 1,
    },
  },
  {
    texte: "ferme les yeux quelques instants avec une couverture douce",
    effets: {
      bonheur: 2,
      energie: 5,
      sport: 1,
    },
  },
  {
    texte: "respire lentement et profondément dans une pièce calme",
    effets: {
      intelligence: 2,
    },
  },
  {
    texte: "respire lentement et profondément avec une lumière tamisée",
    effets: {
      bonheur: 3,
      energie: 3,
      sport: 1,
    },
  },
  {
    texte: "respire lentement et profondément au lever du soleil",
    effets: {
      bonheur: 4,
      intelligence: 2,
    },
  },
  {
    texte: "laisse son esprit s’apaiser en pyjama",
    effets: {
      energie: 6,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "prend du temps pour lui-même dans une pièce calme",
    effets: {
      bonheur: 1,
      energie: 3,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "laisse ses pensées vagabonder dans un coin douillet",
    effets: {
      bonheur: 4,
      intelligence: 0,
      sport: -1,
    },
  },
  {
    texte: "laisse son esprit s’apaiser dans un coin douillet",
    effets: {
      bonheur: 2,
      energie: 1,
      intelligence: 2,
    },
  },
  {
    texte: "laisse ses pensées vagabonder pendant une soirée pluvieuse",
    effets: {
      bonheur: -2,
      energie: 3,
    },
  },
  {
    texte: "ferme les yeux quelques instants avec une infusion à la main",
    effets: {
      energie: -3,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "ferme les yeux quelques instants après le déjeuner",
    effets: {
      energie: 5,
      intelligence: -1,
    },
  },
  {
    texte: "prend du temps pour lui-même dans un coin douillet",
    effets: {
      bonheur: 5,
      energie: 3,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder en fermant les yeux",
    effets: {
      bonheur: 3,
    },
  },
  {
    texte: "s’évade mentalement allongé sur le sol",
    effets: {
      bonheur: 2,
      intelligence: 1,
    },
  },
  {
    texte: "laisse ses pensées vagabonder dans une pièce calme",
    effets: {
      bonheur: 4,
      energie: 3,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "s’installe confortablement en fermant les yeux",
    effets: {
      bonheur: 1,
      energie: 4,
      sport: 1,
    },
  },
  {
    texte: "profite d’un moment de calme dans une pièce calme",
    effets: {
      bonheur: -2,
      energie: -4,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "se détend profondément avec une couverture douce",
    effets: {
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "profite d’un moment de calme en écoutant le vent",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte:
      "respire lentement et profondément les pieds dans des chaussettes pilou",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: -1,
    },
  },
  {
    texte: "s’accorde un instant de répit dans un coin douillet",
    effets: {
      bonheur: 3,
    },
  },
];

module.exports = actionsRepos;
