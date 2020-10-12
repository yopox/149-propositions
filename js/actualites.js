const Etats = {JOKER: "joker", ATTENTION: "attention", AVANCEE: "bien", FAIT: "fait", ATTENTE: ""}
Object.freeze(Etats)

const actualites = {

    // —————————————————————
    //      CONSOMMER
    // —————————————————————

    "C2.1": [
        [Etats.ATTENTION, "Le 30 juin 2020 - Bruno Le Maire se positionne contre la mesure.", "https://www.huffingtonpost.fr/entry/macron-bruno-le-maire-joker-convention-climat_fr_5efb7570c5b612083c53aa75"],
    ],

    // —————————————————————
    // PRODUIRE & TRAVAILLER
    // —————————————————————

    "PT1.2": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "PT3.2": [
        [Etats.JOKER, "Le 29 juin 2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=1277"],
    ],
    "PT6.3": [
        [Etats.ATTENTION, "Le 09 juillet 2020 - Les engagements climatiques des entreprises relèvent du volontariat.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "PT12.1": [
        [Etats.ATTENTION, "Le 30 juin 2020 - Mme. Pannier-Runacher refuse le moratoire sur la 5G.", "https://youtu.be/2FW83wwuNZE?t=26"],
        [Etats.AVANCEE, "Le 02 juillet 2020 - Le gouvernement a été contraint de demander un rapport sur la 5G (qui ne conditionne rien cependant).", "https://www.lesechos.fr/tech-medias/hightech/5g-le-gouvernement-tente-dapaiser-les-craintes-sanitaires-1220725"],
        [Etats.JOKER, "Le 15 septembre 2020 - Le président se moque de ceux qui demandent un moratoire sur la 5G.", "https://www.liberation.fr/france/2020/09/15/amish-et-5g-macron-toujours-plus-innovant-dans-la-ringardisation_1799560"],
    ],

    // —————————————————————
    //     SE DÉPLACER
    // —————————————————————

    "SD-A2.2": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SD-A2.3": [
        [Etats.ATTENTION, "Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SD-A3.1": [
        [Etats.JOKER, "Le 29 juin 2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=1751"],
    ],
    "SD-A4.1": [
        [Etats.ATTENTION, "Le 30 juin 2020 - Bruno Le Maire se positionne contre la mesure.", "https://www.huffingtonpost.fr/entry/macron-bruno-le-maire-joker-convention-climat_fr_5efb7570c5b612083c53aa75"],
        [Etats.ATTENTION, "Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SD-B2.1": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SD-C1.2": [
        [Etats.ATTENTION, "Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
        [Etats.ATTENTION, "Le 28 septembre 2020 - La proposition de figure pas dans le projet de budget.", "https://mobile.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/climat-sept-propositions-de-la-convention-citoyenne-ecartees-par-le-gouvernement-malgre-la-promesse-d-emmanuel-macron_4123179.amp?s=09"],
    ],
    "SD-C1.3": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SD-C1.6": [
        [Etats.ATTENTION, "Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SD-E1": [
        [Etats.JOKER, "Le 21 septembre 2020 - Jean-Baptiste Djebbari réfute la proposition.", "https://www.lci.fr/politique/aviation-taxation-de-l-aerien-jean-baptiste-djebbari-s-attaque-aux-thuriferaires-de-la-decroissance-2165136.html"],
    ],
    "SD-E2": [
        [Etats.ATTENTION, "Le 29 juin 2020 - Discours du PR : il en reste aux annonces déjà faites sur les trajets de moins de 2h30.", "https://youtu.be/m0F-uslFshA?t=1675"],
    ],
    "SD-E3": [
        [Etats.JOKER, "Le 01 juillet 2020 - Jean-Baptiste Djebbari annonce qu'il pourra y avoir des extensions d'aéroports.", "https://rmc.bfmtv.com/mediaplayer/video/jean-baptiste-djebbari-etait-l-invite-de-jean-jacques-bourdin-ce-mercredi-1er-jullet-2020-1259424.html"]
    ],

    // —————————————————————
    //       SE LOGER
    // —————————————————————

    "SL1.1": [
        [Etats.ATTENTION, "Le 27 juillet 2020 - Le gouvernement va introduire, par décret, la performance énergétique parmi les critères de la \"décence\" d'un logement dès le 1er janvier 2023, mais le seuil choisi est beaucoup trop élevé.", "https://www.mediapart.fr/journal/france/280720/relance-ecologique-derriere-les-chiffres-un-grand-vide"],
    ],
    "SL1.2": [
        [Etats.AVANCEE, "Le 27 juillet 2020 - Les chaudières au fuel ou au charbon qui sont en panne devront être changées par une chaudière plus vertueuse à partir de janvier 2022.", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
    ],
    "SL1.4": [
        [Etats.ATTENTION, "Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SL2.3": [
        [Etats.AVANCEE, "Le 27 juillet 2020 - En 2021 les terrasses chauffées seront interdites, et les portes des bâtiments publics chauffés ou aérés devront être fermées.", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
    ],
    "SL3.2": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SL3.4": [
        [Etats.AVANCEE, "Le 27 juillet 2020 - Création de deux PNR et d'un espace protégé (projets déjà engagés).", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
    ],

    // —————————————————————
    //      SE NOURRIR
    // —————————————————————

    "SN2.1.4": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SN2.1.7": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SN4.1.1": [
        [Etats.ATTENTION, "Le 29 juin 2020 - Discours du PR : il ne propose que de continuer à évaluer le CETA.", "https://youtu.be/m0F-uslFshA?t=768"]
    ],
    "SN5.2.2": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SN6.1.2": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SN6.1.3": [
        [Etats.ATTENTION, "Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
    ],
    "SN7.1": [
        [Etats.JOKER, "Le 30 juin 2020 - Nicole Belloubet rejette la mesure.", "https://www.franceinter.fr/emissions/l-invite-de-8h20-le-grand-entretien/l-invite-de-8h20-le-grand-entretien-30-juin-2020"]
    ],

    // —————————————————————
    //    RÉFORME CONST.
    // —————————————————————

    "RC3": [
        [Etats.JOKER, "Le 29 juin 2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=2256"]
    ],
}
