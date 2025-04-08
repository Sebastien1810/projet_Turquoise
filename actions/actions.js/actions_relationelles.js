const actionsRelationelles = [
  {
    texte: "a un crush inavoué",
    effets: {
      bonheur: 4,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "accueille quelqu’un chez lui",
    effets: {
      bonheur: 5,
      energie: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "aide un proche à réviser",
    effets: {
      bonheur: 1,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "aide un voisin à porter ses courses",
    effets: {
      bonheur: 4,
      energie: 2,
    },
  },
  {
    texte: "appelle un ami pour discuter",
    effets: {
      bonheur: 1,
      energie: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "avoue avoir des sentiments pour un(e) ami(e)",
    effets: {
      bonheur: 4,
      energie: -1,
      sport: 1,
    },
  },
  {
    texte: "complimente un baiser rapide",
    effets: {
      bonheur: 3,
      energie: 1,
      intelligence: 2,
    },
  },
  {
    texte: "complimente un collègue",
    effets: {
      bonheur: 1,
      energie: -1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "complimente un geste affectueux",
    effets: {
      bonheur: 1,
      energie: -1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "complimente un message ambigu",
    effets: {
      bonheur: 3,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "complimente un message codé",
    effets: {
      bonheur: 5,
      energie: 2,
      intelligence: 2,
    },
  },
  {
    texte: "complimente un moment tendre",
    effets: {
      energie: 0,
      sport: 1,
    },
  },
  {
    texte: "complimente un regard intense",
    effets: {
      bonheur: 4,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "complimente un secret brûlant",
    effets: {
      bonheur: 1,
      energie: 0,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "complimente un silence complice",
    effets: {
      bonheur: 5,
      intelligence: 1,
    },
  },
  {
    texte: "complimente un souvenir ému",
    effets: {
      bonheur: 3,
      energie: -1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "complimente une caresse discrète",
    effets: {
      bonheur: 3,
      energie: 1,
      intelligence: 2,
    },
  },
  {
    texte: "couche avec un(e) inconnu(e)",
    effets: {
      bonheur: 5,
      energie: 2,
      intelligence: 1,
    },
  },
  {
    texte: "cède à une pulsion avec un(e) inconnu(e)",
    effets: {
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "demande un avis sincère",
    effets: {
      bonheur: 1,
      energie: 0,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "discute d’un souvenir d’enfance",
    effets: {
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "discute longuement avec un proche",
    effets: {
      bonheur: 1,
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "discute un baiser rapide",
    effets: {
      bonheur: 1,
      energie: -1,
      intelligence: 2,
    },
  },
  {
    texte: "discute un geste affectueux",
    effets: {
      energie: 1,
      sport: 1,
    },
  },
  {
    texte: "discute un message ambigu",
    effets: {
      energie: 1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "discute un message codé",
    effets: {
      bonheur: 2,
      energie: -1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "discute un moment tendre",
    effets: {
      bonheur: 5,
      energie: 2,
    },
  },
  {
    texte: "discute un regard intense",
    effets: {
      energie: 1,
      intelligence: 0,
    },
  },
  {
    texte: "discute un secret brûlant",
    effets: {
      bonheur: 4,
      energie: -1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "discute un silence complice",
    effets: {
      bonheur: 2,
      energie: 0,
      sport: 0,
    },
  },
  {
    texte: "discute un souvenir ému",
    effets: {
      bonheur: 4,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "discute une caresse discrète",
    effets: {
      bonheur: 5,
      energie: 1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "donne un conseil utile",
    effets: {
      bonheur: 4,
      energie: 1,
      sport: 1,
    },
  },
  {
    texte: "découvre que son/sa partenaire le/la trompe",
    effets: {
      energie: 1,
      sport: 1,
    },
  },
  {
    texte: "embrasse quelqu’un qu’il ne connaît pas",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "entame une relation secrète",
    effets: {
      bonheur: 2,
    },
  },
  {
    texte: "entame une relation sérieuse",
    effets: {
      bonheur: 1,
      energie: -1,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "envoie un baiser rapide",
    effets: {
      bonheur: 5,
      energie: -1,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "envoie un geste affectueux",
    effets: {
      bonheur: 3,
      energie: 0,
      sport: 1,
    },
  },
  {
    texte: "envoie un message ambigu",
    effets: {
      energie: 0,
      intelligence: 2,
    },
  },
  {
    texte: "envoie un message bienveillant",
    effets: {
      bonheur: 3,
      energie: 0,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "envoie un message codé",
    effets: {
      bonheur: 5,
      energie: -1,
      intelligence: 2,
    },
  },
  {
    texte: "envoie un moment tendre",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "envoie un regard intense",
    effets: {
      energie: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "envoie un secret brûlant",
    effets: {
      bonheur: 4,
      energie: 0,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "envoie un silence complice",
    effets: {
      bonheur: 1,
      energie: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "envoie un souvenir ému",
    effets: {
      bonheur: 1,
      intelligence: 1,
    },
  },
  {
    texte: "envoie une caresse discrète",
    effets: {
      bonheur: 4,
      sport: 1,
    },
  },
  {
    texte: "envoie une carte postale",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "est pris(e) de passion soudaine",
    effets: {
      bonheur: 2,
      energie: -1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "fait un appel surprise",
    effets: {
      energie: 0,
      intelligence: 0,
    },
  },
  {
    texte: "fait une accolade chaleureuse",
    effets: {},
  },
  {
    texte: "fait une blague à un proche",
    effets: {
      bonheur: 5,
      energie: -1,
    },
  },
  {
    texte: "fait une déclaration d’amour inattendue",
    effets: {
      bonheur: 2,
      energie: 1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "fait une sieste enlacé(e) contre son/sa partenaire",
    effets: {
      energie: 0,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "flirte discrètement avec un ami",
    effets: {
      energie: 0,
      intelligence: 2,
    },
  },
  {
    texte: "frôle une trahison sentimentale",
    effets: {
      bonheur: 2,
      energie: 1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "félicite un ami pour un succès",
    effets: {
      bonheur: 5,
      energie: 1,
    },
  },
  {
    texte: "invite quelqu’un à prendre un café",
    effets: {
      bonheur: 3,
    },
  },
  {
    texte: "invite un ami à une sortie",
    effets: {
      bonheur: 3,
      intelligence: 0,
    },
  },
  {
    texte: "joue à un jeu en ligne avec un ami",
    effets: {
      bonheur: 3,
      energie: 0,
    },
  },
  {
    texte: "offre un baiser rapide",
    effets: {
      bonheur: 3,
      energie: 1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "offre un café à un collègue",
    effets: {
      bonheur: 3,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "offre un geste affectueux",
    effets: {
      bonheur: 2,
      energie: -1,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "offre un message ambigu",
    effets: {
      intelligence: 0,
    },
  },
  {
    texte: "offre un message codé",
    effets: {
      bonheur: 5,
      energie: 0,
      intelligence: 1,
    },
  },
  {
    texte: "offre un moment tendre",
    effets: {
      bonheur: 1,
      energie: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "offre un petit cadeau à un proche",
    effets: {
      bonheur: 3,
      energie: 2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "offre un regard intense",
    effets: {
      sport: 1,
    },
  },
  {
    texte: "offre un secret brûlant",
    effets: {
      bonheur: 5,
      energie: -1,
      sport: 0,
    },
  },
  {
    texte: "offre un silence complice",
    effets: {
      bonheur: 4,
      energie: 0,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "offre un souvenir ému",
    effets: {
      bonheur: 5,
      energie: 1,
      intelligence: 2,
    },
  },
  {
    texte: "offre une caresse discrète",
    effets: {
      bonheur: 2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "organise un baiser rapide",
    effets: {
      energie: 2,
      intelligence: 0,
    },
  },
  {
    texte: "organise un geste affectueux",
    effets: {
      bonheur: 3,
      energie: 0,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "organise un message ambigu",
    effets: {
      energie: 1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "organise un message codé",
    effets: {
      bonheur: 4,
      energie: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "organise un moment tendre",
    effets: {
      bonheur: 5,
      intelligence: 2,
    },
  },
  {
    texte: "organise un regard intense",
    effets: {
      bonheur: 2,
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "organise un secret brûlant",
    effets: {
      bonheur: 3,
      energie: -1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "organise un silence complice",
    effets: {
      bonheur: 5,
      energie: 0,
      sport: 0,
    },
  },
  {
    texte: "organise un souvenir ému",
    effets: {
      energie: 0,
      intelligence: 2,
    },
  },
  {
    texte: "organise une caresse discrète",
    effets: {
      bonheur: 3,
      energie: 0,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "organise une rencontre entre amis",
    effets: {
      bonheur: 2,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "organise une soirée pyjama",
    effets: {
      energie: -1,
      sport: 1,
    },
  },
  {
    texte: "partage ses émotions",
    effets: {
      energie: 0,
      sport: 1,
    },
  },
  {
    texte: "partage son lit avec quelqu’un pour la première fois",
    effets: {
      bonheur: 4,
      energie: 0,
      sport: 1,
    },
  },
  {
    texte: "partage un baiser rapide",
    effets: {
      bonheur: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "partage un geste affectueux",
    effets: {
      bonheur: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "partage un message ambigu",
    effets: {
      energie: 1,
      sport: 0,
    },
  },
  {
    texte: "partage un message codé",
    effets: {
      bonheur: 3,
      energie: 1,
      sport: 0,
    },
  },
  {
    texte: "partage un moment tendre",
    effets: {
      bonheur: 3,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "partage un moment torride",
    effets: {
      bonheur: 3,
      energie: 1,
      sport: 1,
    },
  },
  {
    texte: "partage un regard intense",
    effets: {
      bonheur: 2,
      energie: 0,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "partage un repas avec un ami",
    effets: {
      bonheur: 5,
      energie: -1,
    },
  },
  {
    texte: "partage un secret brûlant",
    effets: {
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "partage un silence complice",
    effets: {
      bonheur: 2,
      energie: 2,
      intelligence: 2,
    },
  },
  {
    texte: "partage un souvenir ému",
    effets: {},
  },
  {
    texte: "partage une anecdote marrante",
    effets: {
      bonheur: 4,
      intelligence: 1,
    },
  },
  {
    texte: "partage une caresse discrète",
    effets: {
      bonheur: 3,
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "partage une playlist",
    effets: {
      energie: 0,
    },
  },
  {
    texte: "participe à un appel de groupe",
    effets: {
      bonheur: 5,
      energie: 0,
      sport: 0,
    },
  },
  {
    texte: "participe à une discussion de groupe",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "participe à une expérience romantique imprévue",
    effets: {
      bonheur: 3,
      energie: 1,
    },
  },
  {
    texte: "passe du temps avec sa famille",
    effets: {
      bonheur: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "passe une nuit romantique avec un(e) partenaire",
    effets: {
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "prend des nouvelles d’un ancien camarade",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "prend une décision affective difficile",
    effets: {
      bonheur: 5,
      energie: 2,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "raconte une histoire drôle",
    effets: {
      bonheur: 3,
      energie: -1,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "regarde un film avec un proche",
    effets: {
      bonheur: 5,
      energie: 0,
      intelligence: 0,
    },
  },
  {
    texte: "regrette une nuit de passion",
    effets: {
      bonheur: 5,
      energie: 2,
      sport: 1,
    },
  },
  {
    texte: "relit un ancien message d’amour",
    effets: {
      bonheur: 2,
      intelligence: 0,
    },
  },
  {
    texte: "remercie quelqu’un avec le cœur",
    effets: {
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "revit un baiser rapide",
    effets: {
      bonheur: 5,
      energie: 1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "revit un geste affectueux",
    effets: {
      bonheur: 4,
      intelligence: 0,
    },
  },
  {
    texte: "revit un message ambigu",
    effets: {
      bonheur: 2,
      energie: 0,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "revit un message codé",
    effets: {
      bonheur: 2,
      energie: 2,
      intelligence: 0,
    },
  },
  {
    texte: "revit un moment tendre",
    effets: {
      bonheur: 2,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "revit un regard intense",
    effets: {
      bonheur: 4,
      energie: 0,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "revit un secret brûlant",
    effets: {
      bonheur: 5,
      energie: -1,
    },
  },
  {
    texte: "revit un silence complice",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "revit un souvenir ému",
    effets: {
      energie: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "revit une caresse discrète",
    effets: {
      bonheur: 4,
      intelligence: 2,
    },
  },
  {
    texte: "revoit son premier amour",
    effets: {
      energie: 2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "rompt brutalement avec son/sa partenaire",
    effets: {
      bonheur: 2,
      energie: -1,
      sport: 1,
    },
  },
  {
    texte: "réagit à une story Instagram",
    effets: {
      bonheur: 3,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "réalise qu’il/elle est tombé(e) amoureux(se)",
    effets: {
      bonheur: 1,
      energie: -1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "réconforte un baiser rapide",
    effets: {
      bonheur: 3,
      energie: 1,
      sport: 1,
    },
  },
  {
    texte: "réconforte un geste affectueux",
    effets: {
      bonheur: 5,
      energie: 0,
      intelligence: 2,
    },
  },
  {
    texte: "réconforte un message ambigu",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "réconforte un message codé",
    effets: {
      bonheur: 1,
      energie: 0,
      intelligence: 1,
    },
  },
  {
    texte: "réconforte un moment tendre",
    effets: {},
  },
  {
    texte: "réconforte un proche triste",
    effets: {
      bonheur: 4,
      energie: -1,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "réconforte un regard intense",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "réconforte un secret brûlant",
    effets: {
      bonheur: 1,
      intelligence: 0,
    },
  },
  {
    texte: "réconforte un silence complice",
    effets: {
      bonheur: 5,
      sport: 1,
    },
  },
  {
    texte: "réconforte un souvenir ému",
    effets: {
      bonheur: 2,
      energie: 0,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "réconforte une caresse discrète",
    effets: {
      bonheur: 3,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "rêve d’une vie avec quelqu’un rencontré récemment",
    effets: {
      bonheur: 4,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "se confesse à quelqu’un qu’il aime",
    effets: {
      bonheur: 3,
      energie: -1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "se fait draguer par surprise",
    effets: {
      bonheur: 4,
      intelligence: 1,
      sport: 1,
    },
  },
  {
    texte: "se fait surprendre dans une situation intime",
    effets: {
      bonheur: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "se rapproche dangereusement d’un(e) ex",
    effets: {
      bonheur: 4,
      energie: 1,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "se réconcilie après une dispute intense",
    effets: {
      energie: 0,
      sport: 0,
    },
  },
  {
    texte: "s’enfuit au petit matin sans un mot",
    effets: {
      bonheur: 5,
      intelligence: 0,
      sport: 1,
    },
  },
  {
    texte: "s’excuse après une dispute",
    effets: {
      bonheur: 4,
      energie: 2,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "trompe son/sa partenaire sans remords",
    effets: {
      bonheur: 5,
      energie: 2,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "vit un chagrin d’amour en silence",
    effets: {
      energie: 0,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "vit une aventure d’un soir",
    effets: {
      bonheur: 3,
      energie: -1,
      intelligence: 2,
    },
  },
  {
    texte: "échange un baiser passionné sous la pluie",
    effets: {
      bonheur: 5,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "échappe à une situation gênante avec un(e) partenaire",
    effets: {
      bonheur: 5,
      sport: 0,
    },
  },
  {
    texte: "écoute quelqu’un avec attention",
    effets: {
      bonheur: 2,
    },
  },
  {
    texte: "écoute un baiser rapide",
    effets: {
      energie: -1,
    },
  },
  {
    texte: "écoute un geste affectueux",
    effets: {
      bonheur: 4,
      energie: 0,
      sport: 1,
    },
  },
  {
    texte: "écoute un message ambigu",
    effets: {
      bonheur: 3,
      energie: 2,
      intelligence: 2,
      sport: 0,
    },
  },
  {
    texte: "écoute un message codé",
    effets: {
      energie: -1,
      intelligence: 2,
    },
  },
  {
    texte: "écoute un moment tendre",
    effets: {
      bonheur: 1,
      intelligence: 2,
      sport: 1,
    },
  },
  {
    texte: "écoute un regard intense",
    effets: {
      bonheur: 4,
      energie: 0,
      sport: 0,
    },
  },
  {
    texte: "écoute un secret brûlant",
    effets: {
      energie: 2,
    },
  },
  {
    texte: "écoute un silence complice",
    effets: {
      bonheur: 1,
      energie: 1,
      intelligence: 1,
      sport: 0,
    },
  },
  {
    texte: "écoute un souvenir ému",
    effets: {
      bonheur: 5,
      energie: 2,
      intelligence: 0,
      sport: 0,
    },
  },
  {
    texte: "écoute une caresse discrète",
    effets: {
      energie: -1,
    },
  },
];

module.exports = actionsRelationelles;
