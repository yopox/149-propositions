# Permet de récupérer les propositions du rapport. Il y a des erreurs dans la mise en page du rapport (par ex p.120)…
from enum import Enum

class Etat(Enum):
    PASSER = 1
    LIRE = 2
    PROPOSITION = 3

with open("ccc-rapport-final-scrap.txt", "w") as resultat:
    
    # https://pdftotext.com/ pour obtenir un .txt
    with open("ccc-rapport-final.txt", "r") as rapport:
        lignes = rapport.readlines()
        propositions = []
        proposition = ""
        etat = Etat.PASSER
        for ligne in lignes:
            if etat == Etat.PASSER and "SYNTHÉTIQUE" in ligne[14:26]:
                # Début de bloc propositions
                etat = Etat.LIRE

            elif etat != Etat.PASSER and "PROPOSITION" in ligne[:11].upper():
                if etat == Etat.LIRE:
                    # Lecture de la première proposition
                    etat = Etat.PROPOSITION
                    proposition = ligne[:-1]
                elif etat == Etat.PROPOSITION:
                    # Lecture d'une nouvelle proposition
                    propositions.append(proposition + "\n")
                    proposition = ligne[:-1]

            elif etat == Etat.PROPOSITION:
                if len(ligne) < 2:
                    # Fin du bloc propositions
                    propositions.append(proposition + "\n")
                    proposition = ""
                    etat = Etat.PASSER
                else:
                    # Suite d'une proposition
                    proposition = proposition + " " + ligne[:-1]

    # Proposition non votée
    propositions = propositions[:-1]
    
    resultat.writelines(propositions)
    