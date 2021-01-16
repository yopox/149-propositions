const Etat = { FAIT: "fait", JOKER: "joker", ATTENTE: "attente" };
Object.freeze(Etat);
const Ambition = { BONNE: "bonne", INSUFFISANTE: "insuffisante", INCERTAINE: "incertaine" };
Object.freeze(Ambition);
const Vehicule = { LOI: "loi", DECRET: "decret", ORDONNANCE: "ordonnance", EUROPE: "europe", INCONNU: "inconnu" };
Object.freeze(Vehicule);


const informations = {

    // —————————————————————
    //      CONSOMMER
    // —————————————————————

    "C1.1": {
        vehicule: Vehicule.DECRET,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 11 octobre 2020 - La mesure semble convaincre le gouvernement.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
            ["Le 8 janvier 2021 - Projet de loi (article 1) : L'affichage ne concerne pas tous les produits de consommation et les services.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C2.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 30 juin 2020 - Bruno Le Maire se positionne contre la mesure.", "https://www.huffingtonpost.fr/entry/macron-bruno-le-maire-joker-convention-climat_fr_5efb7570c5b612083c53aa75"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 4) : L'interdiction concerne uniquement les publicités pour les \"énergies fossiles\". Pour les produits les plus émetteurs de GES (article 5), il faudra compter sur des \"conclusions de codes de bonne conduite\" volontaires du CSA.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C2.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 6) : Le pouvoir de police de la publicité sera effecté par le maire. + articles 7 à 10", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C2.3": {
        etat: Etat.JOKER,
        actus: [
            ["Le 8 janvier 2021 - Proposition d'ordre législatif absente du projet de loi climat.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C3.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 11) : Objectif 20% de la surface de vente consacrée à la vente au vrac en 2030 pour les commerces de plus de 400m2.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C3.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 12) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C3.4": {
        etat: Etat.JOKER,
        actus: [
            ["Le 8 janvier 2021 - Proposition d'ordre législatif absente du projet de loi climat.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C5.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 2) : la proposition est reprise dans le code de l'éducation.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "C5.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 3) : l'éducation à l'environnement et au développement durable concerne \"l'ensemble des disciplines\".", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },

    // —————————————————————
    // PRODUIRE & TRAVAILLER
    // —————————————————————

    "PT1.3": {
        vehicule: Vehicule.DECRET,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 13) : Le point (2) est repris : La disponibilité des pièces détachées est définie par un décret du Conseil d'État.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT2.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 14) : Articulation entre la stratégie nationale bas carbone et la stratégie nationale de recherche.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT3.2": {
        etat: Etat.JOKER,
        actus: [
            ["Le 29 juin 2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=1277"],
        ]
    },
    "PT4.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 18) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT4.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 16 et 17) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT6.1": {
        etat: Etat.JOKER,
        actus: [
            ["Le 8 janvier 2021 - Proposition d'ordre législatif absente du projet de loi climat.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT6.3": {
        actus: [
            ["Le 09 juillet 2020 - Les engagements climatiques des entreprises relèvent du volontariat.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
        ]
    },
    "PT7.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 15) : Les acheteurs publics devront prendre en compte des considérations environnementales.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT8.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 54) : Aires protégées.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT8.3": {
        vehicule: Vehicule.ORDONNANCE,
        ambition: Ambition.INCERTAINE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 20) : Le gouvernement va réformer le code minier par ordonnances.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT8.4": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 19) : Ajout dans la loi sur l'eau de l'importance du cycle de l'eau.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT11.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 21) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT11.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 22) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT11.3": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 23) : La proposition est reprise (option seuil abaissé de 1000 à 500m2).", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "PT12.1": {
        etat: Etat.JOKER,
        actus: [
            ["Le 30 juin 2020 - Mme. Pannier-Runacher refuse le moratoire sur la 5G.", "https://youtu.be/2FW83wwuNZE?t=26"],
            ["Le 02 juillet 2020 - Le gouvernement a été contraint de demander un rapport sur la 5G (qui ne conditionne rien cependant).", "https://www.lesechos.fr/tech-medias/hightech/5g-le-gouvernement-tente-dapaiser-les-craintes-sanitaires-1220725"],
            ["Le 15 septembre 2020 - Le président se moque de ceux qui demandent un moratoire sur la 5G.", "https://www.liberation.fr/france/2020/09/15/amish-et-5g-macron-toujours-plus-innovant-dans-la-ringardisation_1799560"],
        ]
    },

    // —————————————————————
    //     SE DÉPLACER
    // —————————————————————

    "SD-A2.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 24) : Développement des parkings-relais.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-A2.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 25) : Extension des zones à faibles émissions mobilités aux agglomérations de plus de 150 000 habitants.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-A2.3": {
        actus: [
            ["Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
        ]
    },
    "SD-A2.4": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 26) : La proposition est reprise sous forme d'une expérimentation de 3 ans.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-A3.1": {
        etat: Etat.JOKER,
        actus: [
            ["Le 29 juin 2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=1751"],
        ]
    },
    "SD-A4.1": {
        etat: Etat.JOKER,
        actus: [
            ["Le 30 juin 2020 - Bruno Le Maire se positionne contre la mesure.", "https://www.huffingtonpost.fr/entry/macron-bruno-le-maire-joker-convention-climat_fr_5efb7570c5b612083c53aa75"],
            ["Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
        ]
    },
    "SD-A4.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 27) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-B1.2": {
        ambition: Ambition.BONNE,
        vehicule: Vehicule.LOI,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 29) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-B1.4": {
        ambition: Ambition.BONNE,
        vehicule: Vehicule.LOI,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 30) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-B1.5": {
        ambition: Ambition.BONNE,
        vehicule: Vehicule.ORDONNANCE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 31) : Le gouvernement légiférera par ordonnances pour permettre aux régions de créer une contribution sur le transport routier de marchandises.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-B1.6": {
        ambition: Ambition.BONNE,
        vehicule: Vehicule.LOI,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 32) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-B2.1": {
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
        ]
    },
    "SD-C1.2": {
        etat: Etat.FAIT,
        ambition: Ambition.INSUFFISANTE,
        vehicule: Vehicule.LOI,
        actus: [
            ["Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
            ["Le 28 septembre 2020 - La proposition de figure pas dans le projet de budget.", "https://mobile.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/climat-sept-propositions-de-la-convention-citoyenne-ecartees-par-le-gouvernement-malgre-la-promesse-d-emmanuel-macron_4123179.amp?s=09"],
            ["Le 15 octobre 2020 - Un amendement au projet de finance introduit une taxe sur les véhicules de plus de 1800kg. (Ambition CCC: 1400kg).", "https://www.lesechos.fr/economie-france/budget-fiscalite/le-gouvernement-va-instaurer-un-nouveau-malus-automobile-lie-au-poids-1255765"],
        ]
    },
    "SD-C1.3": {
        ambition: Ambition.INSUFFISANTE,
        vehicule: Vehicule.LOI,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 28) : La deuxième étape de la proposition est retenue (fin de la vente des voitures neuves > 95 gCO2/km en 2030), avec une exception.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-C1.6": {
        actus: [
            ["Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
        ]
    },
    "SD-D3.1": {
        ambition: Ambition.BONNE,
        vehicule: Vehicule.LOI,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 33) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-E1": {
        etat: Etat.JOKER,
        actus: [
            ["Le 21 septembre 2020 - Jean-Baptiste Djebbari réfute la proposition.", "https://www.lci.fr/politique/aviation-taxation-de-l-aerien-jean-baptiste-djebbari-s-attaque-aux-thuriferaires-de-la-decroissance-2165136.html"],
        ]
    },
    "SD-E2": {
        vehicule: Vehicule.DECRET,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 29 juin 2020 - Discours du PR : il en reste aux annonces déjà faites sur les trajets de moins de 2h30.", "https://youtu.be/m0F-uslFshA?t=1675"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 35) : La proposition est reprise (trajets de moins de 2h30).", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-E3": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 01 juillet 2020 - Jean-Baptiste Djebbari annonce qu'il pourra y avoir des extensions d'aéroports.", "https://rmc.bfmtv.com/mediaplayer/video/jean-baptiste-djebbari-etait-l-invite-de-jean-jacques-bourdin-ce-mercredi-1er-jullet-2020-1259424.html"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 36) : Les extensions seront encadrées.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-E4": {
        etat: Etat.JOKER,
        actus: [
            ["Le 08 octobre 2020 - Un amendement au projet de loi de finances reprenant la proposition est rejeté.", "https://www.assemblee-nationale.fr/dyn/15/amendements/3360A/AN/2070"],
        ]
    },
    "SD-E5": {
        vehicule: Vehicule.EUROPE,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 34) : La proposition est reprise (incitation du gouvernement à négocier à l'échelle européenne).", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SD-E6": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 37) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },

    // —————————————————————
    //       SE LOGER
    // —————————————————————

    "SL1.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 27 juillet 2020 - Le gouvernement va introduire, par décret, la performance énergétique parmi les critères de la \"décence\" d'un logement dès le 1er janvier 2023, mais le seuil choisi est beaucoup trop élevé.", "https://www.mediapart.fr/journal/france/280720/relance-ecologique-derriere-les-chiffres-un-grand-vide"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 38 à 43) : La proposition est déclinée en articles avec des contraintes pour les passoires thermiques (seuils F et G).", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL1.2": {
        actus: [
            ["Le 27 juillet 2020 - Les chaudières au fuel ou au charbon qui sont en panne devront être changées par une chaudière plus vertueuse à partir de janvier 2022.", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
        ]
    },
    "SL1.4": {
        actus: [
            ["Le 09 juillet 2020 - Proposé lors du projet de loi de finances mais rejeté par la majorité.", "https://reporterre.net/Budget-les-deputes-ne-prennent-pas-en-compte-les-mesures-de-la-Convention-climat"],
        ]
    },
    "SL2.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 27 juillet 2020 - En 2021 les terrasses chauffées seront interdites, et les portes des bâtiments publics chauffés ou aérés devront être fermées.", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 45) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 46, 47, 48 et 49) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.2": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 51) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.3": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 48 et 50) : La proposition est reprise (avec une exception conditionnée pour des surfaces inférieures à 10 000m2).", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.4": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 27 juillet 2020 - Création de deux PNR et d'un espace protégé (projets déjà engagés).", "https://www.francetvinfo.fr/monde/environnement/convention-citoyenne-sur-le-climat/lutte-contre-les-passoires-thermiques-fin-des-terrasses-chauffees-voici-les-premieres-mesures-de-la-convention-citoyenne-pour-le-climat-retenues-par-le-gouvernement_4057589.html"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 54 et 55) : Fixation dans la loi des aires protégées.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.5": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 51) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.6": {
        etat: Etat.JOKER,
        actus: [
            ["Le 8 janvier 2021 - Proposition d'ordre législatif absente du projet de loi climat.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.7": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 51) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.8": {
        vehicule: Vehicule.DECRET,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 52) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SL3.11": {
        vehicule: Vehicule.ORDONNANCE,
        ambition: Ambition.INCERTAINE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 53) : Le gouvernement prendra par voie d'ordonnances des mesures pour entre autres lutter contre l'étalement urbain et l'artificialisation des sols.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },

    // —————————————————————
    //      SE NOURRIR
    // —————————————————————

    "SN1.1.6": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 7 décembre 2020 - L'option végétarienne dans les cantines sera une expérimentation facultative.", "https://www.l214.com/communications/20201208-mesures-convention-citoyenne-climat-repas-viande-vegetarien"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 56) : L'option végétarienne est une expérimentation volontaire.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SN1.1.8": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 57) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SN2.1.3": {
        vehicule: Vehicule.DECRET,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 59) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SN2.1.4": {
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
        ]
    },
    "SN2.1.5": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.INSUFFISANTE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 60 et 61) : Le Plan Protéines Végétales n'est pas repris.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SN2.1.7": {
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
        ]
    },
    "SN4.1.1": {
        etat: Etat.JOKER,
        actus: [
            ["Le 29 juin 2020 - Discours du PR : il ne propose que de continuer à évaluer le CETA.", "https://youtu.be/m0F-uslFshA?t=768"],
        ]
    },
    "SN5.2.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 8 janvier 2021 - Projet de loi climat (article 58 et 61) : La proposition est reprise.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SN5.2.2": {
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
        ]
    },
    "SN6.1.2": {
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
        ]
    },
    "SN6.1.3": {
        actus: [
            ["Le 11 octobre 2020 - Le gouvernement se prononce contre les interdictions en principe, favorisant l'information.", "https://www.latribune.fr/economie/france/climat-le-gouvernement-compte-sur-le-score-carbone-859481.html"],
        ]
    },
    "SN6.1.4": {
        etat: Etat.JOKER,
        actus: [
            ["Le 8 janvier 2021 - Proposition d'ordre législatif absente du projet de loi climat.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },
    "SN7.1": {
        vehicule: Vehicule.LOI,
        ambition: Ambition.BONNE,
        actus: [
            ["Le 30 juin 2020 - Nicole Belloubet rejette la mesure.", "https://www.franceinter.fr/emissions/l-invite-de-8h20-le-grand-entretien/l-invite-de-8h20-le-grand-entretien-30-juin-2020"],
            ["Le 8 janvier 2021 - Projet de loi climat (article 63) : Création du délit d'écocide.", "https://www.contexte.com/article/pouvoirs/info-contexte-le-projet-de-loi-convention-citoyenne_125110.html"],
        ]
    },

    // —————————————————————
    //    RÉFORME CONST.
    // —————————————————————

    "RC3": {
        etat: Etat.JOKER,
        actus: [
            ["Le 29 juin 2020 - Joker du président de la République.", "https://youtu.be/m0F-uslFshA?t=2256"],
        ]
    },
};

export { Vehicule, Ambition, Etat, informations };
export default informations;
