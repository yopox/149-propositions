const re = /(([A-Z.-]+)([0-9.]+))/;

let statutsCompte = {
    "joker": 0,
    "attention": 0,
    "bien": 0,
    "fait": 0,
    "": 0
};

let propositionsId = [];
propositions.forEach((contenu, id) => {
    // Regex
    let resultats = re.exec(id);
    propositionsId.push(id);

    // Propositions de la thématique
    let parent = document.getElementsByClassName(resultats[2])[0];

    // Création de l'élément button.proposition
    let proposition = document.createElement("button");
    proposition.classList.add("proposition");
    proposition.setAttribute("data-id", id);
    proposition.appendChild(document.createTextNode(resultats[2]));
    proposition.appendChild(document.createElement("br"));
    proposition.appendChild(document.createTextNode(resultats[3]));

    // Pastilles
    let infos = informations[id];
    if (infos) {
        let ambition = infos.ambition;
        console.log(ambition);
        let vehicule = infos.vehicule;

        let pastille = null;
        if (ambition || vehicule) {
            pastille = document.createElement("div");
            pastille.classList.add("pastille");
            proposition.appendChild(pastille);
        }

        if (pastille && ambition) {
            switch (ambition) {
                case Ambition.BONNE:
                    pastille.classList.add("pastille--bonne");
                    break;
                case Ambition.DECEVANTE:
                    pastille.classList.add("pastille--decevante");
                    break;
                case Ambition.INCONNUE:
                    pastille.classList.add("pastille--inconnue");
                    break;
            }
        }

        if (pastille && vehicule) {
            switch (vehicule) {
                case Vehicule.DECRET:
                    pastille.appendChild(document.createTextNode("D"));
                    break;
                case Vehicule.LOI:
                    pastille.appendChild(document.createTextNode("L"));
                    break;
                case Vehicule.ORDONNANCE:
                    pastille.appendChild(document.createTextNode("O"));
                    break;
                case Vehicule.EUROPE:
                    pastille.appendChild(document.createTextNode("E"));
                    break;
                case Vehicule.INCONNU:
                    pastille.appendChild(document.createTextNode("?"));
                    break;
            }
        }

    }

    proposition.onclick = () => {
        history.pushState("", document.title, window.location.pathname + '#' + id);
        proposition.title = "";

        // MAJ élément sélectionné
        Array.prototype.forEach.call(
            document.getElementsByClassName("proposition"),
            pr => pr.classList.remove("proposition--selectionne")
        );
        proposition.classList.add("proposition--selectionne");

        // MAJ des détails de la proposition
        let details = proposition.parentElement.previousSibling.previousSibling;
        Array.prototype.forEach.call(
            document.getElementsByClassName("details"),
            dt => {
                if (dt !== details) dt.classList.remove("show");
            }
        );
        details.classList.add("show");

        // RAZ de l'encart
        while (details.firstChild) {
            details.removeChild(details.firstChild);
        }

        // Détails : titre
        let detailsTitre = document.createElement("div");
        detailsTitre.classList.add("nom-proposition");
        detailsTitre.textContent = `PROPOSITION ${id} : ${contenu}`;
        details.appendChild(detailsTitre);
        proposition.title += resultats[0] + "\n";

        // Détails : actus
        if (infos) {
            infos.actus?.forEach(actu => {
                let detailsActu = document.createElement("div");
                detailsActu.textContent = actu[0];
                proposition.title += actu[0];
                let detailsActuSource = document.createElement("a");
                detailsActuSource.href = actu[1];
                detailsActuSource.target = "_blank";
                detailsActuSource.rel = "noopener";
                detailsActuSource.textContent = "[source]";
                detailsActu.appendChild(detailsActuSource);
                details.appendChild(detailsActu);
            });
        }
    };

    // État
    let etat = Etat.ATTENTE;
    if (infos) etat = infos.etat || Etat.ATTENTE;
    proposition.classList.add('proposition--etat--' + etat);
    statutsCompte[etat] += 1;

    parent.appendChild(proposition);
});

document.getElementById("fait").textContent = statutsCompte["fait"];
document.getElementById("bien").textContent = statutsCompte["bien"];
document.getElementById("attente").textContent = statutsCompte[""];
document.getElementById("attention").textContent = statutsCompte["attention"];
document.getElementById("joker").textContent = statutsCompte["joker"];

let hash = window.location.hash.substr(1);

setTimeout(
    () => {

        if (hash.length && propositions.get(hash)) {
            const re = /([A-Z]+)/;

            let thematique = document.querySelector(`#${re.exec(hash)[0]}`);
            document.documentElement.scrollTo(0, thematique.getBoundingClientRect().y + document.documentElement.scrollTop);

            let element = document.querySelector(`[data-id="${hash}"]`);
            element.click();
        } else {
            history.pushState("", document.title, window.location.pathname + '');
        }
    }, 300
);