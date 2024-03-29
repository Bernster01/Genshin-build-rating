function prepare(button) {
    button.isDisabled = true;
    //Prepare the character for the simulation
    let baseCharacter = AllCharacters[document.getElementById("SelectCharcterImg").title];
    let weapon = AllWeapons[document.getElementById("SelectWeaponImg").title];
    console.log(baseCharacter);
    console.log(weapon);
    //Set levels
    baseCharacter.level = document.getElementById("character_level").value;
    weapon.level = document.getElementById("weapon_level").value;
    //Set constellation
    /*TODO: Add constellation*/
    //Set weapon refinement
    /*TODO: Add weapon refinement*/
    //Set talents
    baseCharacter.normalAttackLevel = Number.parseInt(document.getElementById("normal_attack").value);
    baseCharacter.elementalSkill.Level = Number.parseInt(document.getElementById("talent_skill").value);
    baseCharacter.elementalBurst.Level = Number.parseInt(document.getElementById("talent_burst").value);
    //Set artifacts
    let artifacts = getArtifacts();    console.log(artifacts);
    //run simulation
    runSimulation(baseCharacter, weapon, artifacts);
}
function getArtifacts() {
    const circletMainstat = { Type: document.getElementById("circlet_mainstat_type").dataset.type, Value: Number.parseFloat(document.getElementById("circlet_mainstat_value").innerText) };
    const circletSubstat1 = { Type: document.getElementById("circlet_substat_1_type").dataset.type, Value: Number.parseFloat(document.getElementById("circlet_substat_1_value").innerText) };
    const circletSubstat2 = { Type: document.getElementById("circlet_substat_2_type").dataset.type, Value: Number.parseFloat(document.getElementById("circlet_substat_2_value").innerText) };
    const circletSubstat3 = { Type: document.getElementById("circlet_substat_3_type").dataset.type, Value: Number.parseFloat(document.getElementById("circlet_substat_3_value").innerText) };
    const circletSubstat4 = { Type: document.getElementById("circlet_substat_4_type").dataset.type, Value: Number.parseFloat(document.getElementById("circlet_substat_4_value").innerText) };
    const circletSet = document.getElementById("circlet_set").dataset.set;

    const flowerMainstat = { Type: document.getElementById("flower_mainstat_type").dataset.type, Value: Number.parseFloat(document.getElementById("flower_mainstat_value").innerText) };
    const flowerSubstat1 = { Type: document.getElementById("flower_substat_1_type").dataset.type, Value: Number.parseFloat(document.getElementById("flower_substat_1_value").innerText) };
    const flowerSubstat2 = { Type: document.getElementById("flower_substat_2_type").dataset.type, Value: Number.parseFloat(document.getElementById("flower_substat_2_value").innerText) };
    const flowerSubstat3 = { Type: document.getElementById("flower_substat_3_type").dataset.type, Value: Number.parseFloat(document.getElementById("flower_substat_3_value").innerText) };
    const flowerSubstat4 = { Type: document.getElementById("flower_substat_4_type").dataset.type, Value: Number.parseFloat(document.getElementById("flower_substat_4_value").innerText) };
    const flowerSet = document.getElementById("flower_set").dataset.set;

    const plumeMainstat = { Type: document.getElementById("plume_mainstat_type").dataset.type, Value: Number.parseFloat(document.getElementById("plume_mainstat_value").innerText) };
    const plumeSubstat1 = { Type: document.getElementById("plume_substat_1_type").dataset.type, Value: Number.parseFloat(document.getElementById("plume_substat_1_value").innerText) };
    const plumeSubstat2 = { Type: document.getElementById("plume_substat_2_type").dataset.type, Value: Number.parseFloat(document.getElementById("plume_substat_2_value").innerText) };
    const plumeSubstat3 = { Type: document.getElementById("plume_substat_3_type").dataset.type, Value: Number.parseFloat(document.getElementById("plume_substat_3_value").innerText) };
    const plumeSubstat4 = { Type: document.getElementById("plume_substat_4_type").dataset.type, Value: Number.parseFloat(document.getElementById("plume_substat_4_value").innerText) };
    const plumeSet = document.getElementById("plume_set").dataset.set;

    const sandsMainstat = { Type: document.getElementById("sands_mainstat_type").dataset.type, Value: Number.parseFloat(document.getElementById("sands_mainstat_value").innerText) };
    const sandsSubstat1 = { Type: document.getElementById("sands_substat_1_type").dataset.type, Value: Number.parseFloat(document.getElementById("sands_substat_1_value").innerText) };
    const sandsSubstat2 = { Type: document.getElementById("sands_substat_2_type").dataset.type, Value: Number.parseFloat(document.getElementById("sands_substat_2_value").innerText) };
    const sandsSubstat3 = { Type: document.getElementById("sands_substat_3_type").dataset.type, Value: Number.parseFloat(document.getElementById("sands_substat_3_value").innerText) };
    const sandsSubstat4 = { Type: document.getElementById("sands_substat_4_type").dataset.type, Value: Number.parseFloat(document.getElementById("sands_substat_4_value").innerText) };
    const sandsSet = document.getElementById("sands_set").dataset.set;

    const gobletMainstat = { Type: document.getElementById("goblet_mainstat_type").dataset.type, Value: Number.parseFloat(document.getElementById("goblet_mainstat_value").innerText) };
    const gobletSubstat1 = { Type: document.getElementById("goblet_substat_1_type").dataset.type, Value: Number.parseFloat(document.getElementById("goblet_substat_1_value").innerText) };
    const gobletSubstat2 = { Type: document.getElementById("goblet_substat_2_type").dataset.type, Value: Number.parseFloat(document.getElementById("goblet_substat_2_value").innerText) };
    const gobletSubstat3 = { Type: document.getElementById("goblet_substat_3_type").dataset.type, Value: Number.parseFloat(document.getElementById("goblet_substat_3_value").innerText) };
    const gobletSubstat4 = { Type: document.getElementById("goblet_substat_4_type").dataset.type, Value: Number.parseFloat(document.getElementById("goblet_substat_4_value").innerText) };
    const gobletSet = document.getElementById("goblet_set").dataset.set;
    //#endregion

    const circlet = {
        Type: "Circlet",
        Mainstat: {
            Type: circletMainstat.Type,
            Value: circletMainstat.Value
        },
        Substats:
            [
                { Type: circletSubstat1.Type, Value: circletSubstat1.Value },
                { Type: circletSubstat2.Type, Value: circletSubstat2.Value },
                { Type: circletSubstat3.Type, Value: circletSubstat3.Value },
                { Type: circletSubstat4.Type, Value: circletSubstat4.Value }
            ],
        Set: circletSet
    };
    const flower = {
        Type: "Flower",
        Mainstat: {
            Type: flowerMainstat.Type,
            Value: flowerMainstat.Value
        },
        Substats:
            [
                { Type: flowerSubstat1.Type, Value: flowerSubstat1.Value },
                { Type: flowerSubstat2.Type, Value: flowerSubstat2.Value },
                { Type: flowerSubstat3.Type, Value: flowerSubstat3.Value },
                { Type: flowerSubstat4.Type, Value: flowerSubstat4.Value }
            ],
        Set: flowerSet
    };
    const plume = {
        Type: "Plume",
        Mainstat: {
            Type: plumeMainstat.Type,
            Value: plumeMainstat.Value
        },
        Substats:
            [
                { Type: plumeSubstat1.Type, Value: plumeSubstat1.Value },
                { Type: plumeSubstat2.Type, Value: plumeSubstat2.Value },
                { Type: plumeSubstat3.Type, Value: plumeSubstat3.Value },
                { Type: plumeSubstat4.Type, Value: plumeSubstat4.Value }
            ],
        Set: plumeSet
    };
    const sands = {
        Type: "Sands",
        Mainstat: {
            Type: sandsMainstat.Type,
            Value: sandsMainstat.Value
        },
        Substats:
            [
                { Type: sandsSubstat1.Type, Value: sandsSubstat1.Value },
                { Type: sandsSubstat2.Type, Value: sandsSubstat2.Value },
                { Type: sandsSubstat3.Type, Value: sandsSubstat3.Value },
                { Type: sandsSubstat4.Type, Value: sandsSubstat4.Value }
            ],
        Set: sandsSet
    };
    const goblet = {
        Type: "Goblet",
        Mainstat: {
            Type: gobletMainstat.Type,
            Value: gobletMainstat.Value
        },
        Substats:
            [
                { Type: gobletSubstat1.Type, Value: gobletSubstat1.Value },
                { Type: gobletSubstat2.Type, Value: gobletSubstat2.Value },
                { Type: gobletSubstat3.Type, Value: gobletSubstat3.Value },
                { Type: gobletSubstat4.Type, Value: gobletSubstat4.Value }
            ],
        Set: gobletSet
    };

    return [circlet, flower, plume, sands, goblet];
}
function runSimulation(character, weapon, artifacts){
    console.log("Running simulation");
    console.log(character);
    console.log(weapon);
    console.log(artifacts);
    bestSupportScore = 0;
    bestDMG = 0;
    // validateAllCharacters();
    runSim(character, weapon, artifacts);
}
function getBestBuild(){

}