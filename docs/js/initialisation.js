const re = /PROPOSITION (([A-Z.-]+)([0-9.]+)) : (.*)/
for (const i in propositions) {
    // Regex
    let resultats = re.exec(propositions[i])

    // Propositions de la thématique
    let parent = document.getElementsByClassName(resultats[2])[0]

    // Création de l'élément div.proposition
    let proposition = document.createElement("div")
    proposition.classList.add("proposition")
    proposition.appendChild(document.createTextNode(resultats[2]))
    proposition.appendChild(document.createElement("br"))
    proposition.appendChild(document.createTextNode(resultats[3]))

    proposition.addEventListener("click", () => {
        // MAJ élément sélectionné
        Array.prototype.forEach.call(
            document.getElementsByClassName("proposition"),
            pr => pr.classList.remove("selectionne")
        )
        proposition.classList.add("selectionne")

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

        // Détails : actus
        let actus = actualites[resultats[1]]
        actus.forEach(actu => {
            let detailsActu = document.createElement("div")
            detailsActu.classList.add("actualite", actu[0])
            detailsActu.textContent = actu[1]
            let detailsActuSource = document.createElement("a")
            detailsActuSource.href = actu[2]
            detailsActuSource.textContent = "[source]"
            detailsActu.appendChild(detailsActuSource)
            details.appendChild(detailsActu)
        })

    })


    // État
    let actu = actualites[resultats[1]]
    for (const j in actu) {
        if (actu[j][0] !== "") proposition.classList.add(actu[j][0])
    }

    parent.appendChild(proposition)
}