const re = /PROPOSITION (([A-Z.-]+)([0-9.]+)) : (.*)/

let statutsCompte = {
    "joker": 0,
    "attention": 0,
    "bien": 0,
    "fait" : 0,
    "": 0
}

for (const i in propositions) {
    // Regex
    let resultats = re.exec(propositions[i])

    // Propositions de la thématique
    let parent = document.getElementsByClassName(resultats[2])[0]

    // Création de l'élément button.proposition
    let proposition = document.createElement("button")
    proposition.classList.add("proposition")
    proposition.appendChild(document.createTextNode(resultats[2]))
    proposition.appendChild(document.createElement("br"))
    proposition.appendChild(document.createTextNode(resultats[3]))

    proposition.addEventListener("focus", () => {
        proposition.title = ""

        // MAJ élément sélectionné
        Array.prototype.forEach.call(
            document.getElementsByClassName("proposition"),
            pr => pr.classList.remove("proposition--selectionne")
        )
        proposition.classList.add("proposition--selectionne")

        // MAJ des détails de la proposition
        let details = proposition.parentElement.previousSibling.previousSibling
        Array.prototype.forEach.call(
            document.getElementsByClassName("details"),
            dt => {
                if (dt !== details) dt.classList.remove("show")
            }
        )
        details.classList.add("show")

        // RAZ de l'encart
        while (details.firstChild) {
            details.removeChild(details.firstChild);
        }

        // Détails : titre
        let detailsTitre = document.createElement("div")
        detailsTitre.classList.add("nom-proposition")
        detailsTitre.textContent = resultats[0]
        details.appendChild(detailsTitre)
        proposition.title += resultats[0] + "\n"

        // Détails : actus
        let actus = actualites[resultats[1]]
        actus.forEach(actu => {
            let detailsActu = document.createElement("div")
            detailsActu.classList.add("actualite", actu[0])
            detailsActu.textContent = actu[1]
            proposition.title += actu[1]
            let detailsActuSource = document.createElement("a")
            detailsActuSource.href = actu[2]
            detailsActuSource.target = "_blank"
            detailsActuSource.rel = "noopener"
            detailsActuSource.textContent = "[source]"
            detailsActu.appendChild(detailsActuSource)
            details.appendChild(detailsActu)
        })
    })

    // État
    let actu = actualites[resultats[1]]
    let statut = etatProposition(actu)
    if (statut !== "") proposition.classList.add('proposition--' + statut)
    statutsCompte[statut] += 1

    parent.appendChild(proposition)
}

document.getElementById("fait").textContent = statutsCompte["fait"]
document.getElementById("bien").textContent = statutsCompte["bien"]
document.getElementById("attente").textContent = statutsCompte[""]
document.getElementById("attention").textContent = statutsCompte["attention"]
document.getElementById("joker").textContent = statutsCompte["joker"]

function etatProposition(listeEtats) {
    let attention = false
    for (const i in listeEtats) {
        if (listeEtats[i][0] === Etats.FAIT) return Etats.FAIT;
        if (listeEtats[i][0] === Etats.JOKER) return Etats.JOKER;
        if (listeEtats[i][0] === Etats.AVANCEE) return Etats.AVANCEE;
        if (listeEtats[i][0] === Etats.ATTENTION) attention = true;
    }
    return attention ? Etats.ATTENTION : Etats.ATTENTE
}

