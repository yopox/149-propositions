import {animateCountUp} from "./utils/animateCountUp.js";

let statutsMap = new Map([
    [Etat.FAIT, 0],
    [Etat.ATTENTE, 0],
    [Etat.JOKER, 0],
]);
let ambitionsMap = new Map([
    [Ambition.BONNE, 0],
    [Ambition.INCERTAINE, 0],
    [Ambition.INSUFFISANTE, 0],
]);
let vehiculesMap = new Map([
    [Vehicule.LOI, 0],
    [Vehicule.DECRET, 0],
    [Vehicule.ORDONNANCE, 0],
    [Vehicule.EUROPE, 0],
    [Vehicule.INCONNU, 0],
]);

propositions.forEach((_, id) => {
    let info = informations[id];
    let etat = info?.etat ? info.etat : Etat.ATTENTE;
    let ambition = info?.ambition ? info.ambition : Ambition.INCERTAINE;
    let vehicule = info?.vehicule ? info.vehicule : Vehicule.INCONNU;

    statutsMap.set(etat, statutsMap.get(etat) + 1);
    ambitionsMap.set(ambition, ambitionsMap.get(ambition) + 1);
    vehiculesMap.set(vehicule, vehiculesMap.get(vehicule) + 1);
})

const getProgessionBarWidth = (map, count) => {
    return count * 100 / Array.from(map.values()).reduce((x1, x2) => x1 + x2);
};

const setProgressionBars = (maps) => {
    maps.forEach(map => {
        map.forEach((count, id) => {
            console.log(count)
            document.querySelector(`.progression .progression-bar.is-${id}`).style.width = getProgessionBarWidth(map, count) + '%';
            animateCountUp(count, document.querySelector(`.progression .legend-item.is-${id} .value`));
        })
    });
};
setProgressionBars([statutsMap, ambitionsMap, vehiculesMap]);