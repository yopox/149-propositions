const Etats = {JOKER: "joker", ATTENTION: "attention", AVANCEE: "bien", FAIT: "fait", ATTENTE: ""}
Object.freeze(Etats)

const actualites = {

    // —————————————————————
    //      CONSOMMER
    // —————————————————————

    "C2.1": [
        [Etats.ATTENTION, "30/06/2020 - Bruno Le Maire se positionne contre la mesure.", "https://www.huffingtonpost.fr/entry/macron-bruno-le-maire-joker-convention-climat_fr_5efb7570c5b612083c53aa75"],
    ],

    // —————————————————————
    // PRODUIRE & TRAVAILLER
    // —————————————————————

    "PT3.2": [
        [Etats.JOKER, "29/06/2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=1277"],
    ],
    "PT6.3": [
        [Etats.ATTENTION, "09/07/2020 - Les engagements climatiques des entreprises relèvent du volontariat.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "PT12.1": [
        [Etats.ATTENTION, "30/06/2020 - Mme. Pannier-Runacher refuse le moratoire sur la 5G.", "https://youtu.be/2FW83wwuNZE?t=26"],
        [Etats.AVANCEE, "02/07/2020 - Le gouvernement a été contraint de demander un rapport sur la 5G (qui ne conditionne rien cependant).", "https://www.lesechos.fr/tech-medias/hightech/5g-le-gouvernement-tente-dapaiser-les-craintes-sanitaires-1220725"],
    ],

    // —————————————————————
    //     SE DÉPLACER
    // —————————————————————

    "SD-A2.3": [
        [Etats.ATTENTION, "09/07/2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SD-A3.1": [
        [Etats.JOKER, "29/06/2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=1751"],
    ],
    "SD-A4.1": [
        [Etats.ATTENTION, "30/06/2020 - Bruno Le Maire se positionne contre la mesure.", "https://www.huffingtonpost.fr/entry/macron-bruno-le-maire-joker-convention-climat_fr_5efb7570c5b612083c53aa75"],
        [Etats.ATTENTION, "09/07/2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SD-C1.2": [
        [Etats.ATTENTION, "09/07/2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SD-C1.6": [
        [Etats.ATTENTION, "09/07/2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SD-E2": [
        [Etats.ATTENTION, "29/06/2020 - Discours du PR : il en reste aux annonces déjà faites sur les trajets de moins de 2h30.", "https://youtu.be/m0F-uslFshA?t=1675"],
    ],

    // —————————————————————
    //       SE LOGER
    // —————————————————————

    "SL1.1": [
        [Etats.AVANCEE, "27/07/2020 - Le gouvernement va introduire, par décret, la performance énergétique parmi les critères de la \"décence\" d'un logement dès le 1er janvier 2023.", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
    ],
    "SL1.2": [
        [Etats.AVANCEE, "27/07/2020 - Les chaudières au fuel ou au charbon qui sont en panne devront être changées par une chaudière plus vertueuse à partir de janvier 2022.", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
    ],
    "SL1.4": [
        [Etats.ATTENTION, "09/07/2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
    ],
    "SL2.3": [
        [Etats.AVANCEE, "27/07/2020 - En 2021 les terrasses chauffées seront interdites, et les portes des bâtiments publics chauffés ou aérés devront être fermées.", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
    ],
    "SL3.4": [
        [Etats.AVANCEE, "27/07/2020 - Création de deux PNR et d'un espace protégé (projets déjà engagés).", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
    ],

    // —————————————————————
    //      SE NOURRIR
    // —————————————————————

    "SN4.1.1": [
        [Etats.ATTENTION, "29/06/2020 - Discours du PR : il ne propose que de continuer à évaluer le CETA.", "https://youtu.be/m0F-uslFshA?t=768"]
    ],

    // —————————————————————
    //    RÉFORME CONST.
    // —————————————————————

    "RC3": [
        [Etats.JOKER, "29/06/2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=2256"]
    ],
}