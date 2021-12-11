function userCharacter(){
    let baseCharacter = AllCharacters[document.getElementById("SelectCharcterText").innerText];
    let weapon = AllWeapons[document.getElementById("SelectWeaponText").innerText];
    

    //#region import artifact values
    const circletMainstat = {Type:document.getElementById("Circlet_mainstat").value, Value: Number.parseFloat(document.getElementById("Circlet_mainstat_value").value)};
    const circletSubstat1 = {Type:document.getElementById("Circlet_substat_1").value, Value: Number.parseFloat(document.getElementById("Circlet_substat_1_value").value)};
    const circletSubstat2 = {Type:document.getElementById("Circlet_substat_2").value, Value: Number.parseFloat(document.getElementById("Circlet_substat_2_value").value)};
    const circletSubstat3 = {Type:document.getElementById("Circlet_substat_3").value, Value: Number.parseFloat(document.getElementById("Circlet_substat_3_value").value)};
    const circletSubstat4 = {Type:document.getElementById("Circlet_substat_4").value, Value: Number.parseFloat(document.getElementById("Circlet_substat_4_value").value)};
    const circletSet = document.getElementById("Circlet_set").value;

    const flowerMainstat = {Type:document.getElementById("Flower_mainstat").value, Value: Number.parseFloat(document.getElementById("Flower_mainstat_value").value)};
    const flowerSubstat1 = {Type:document.getElementById("Flower_substat_1").value, Value: Number.parseFloat(document.getElementById("Flower_substat_1_value").value)};
    const flowerSubstat2 = {Type:document.getElementById("Flower_substat_2").value, Value: Number.parseFloat(document.getElementById("Flower_substat_2_value").value)};
    const flowerSubstat3 = {Type:document.getElementById("Flower_substat_3").value, Value: Number.parseFloat(document.getElementById("Flower_substat_3_value").value)};
    const flowerSubstat4 = {Type:document.getElementById("Flower_substat_4").value, Value: Number.parseFloat(document.getElementById("Flower_substat_4_value").value)};
    const flowerSet = document.getElementById("Flower_set").value;

    const plumeMainstat = {Type:document.getElementById("Plume_mainstat").value, Value: Number.parseFloat(document.getElementById("Plume_mainstat_value").value)};
    const plumeSubstat1 = {Type:document.getElementById("Plume_substat_1").value, Value: Number.parseFloat(document.getElementById("Plume_substat_1_value").value)};
    const plumeSubstat2 = {Type:document.getElementById("Plume_substat_2").value, Value: Number.parseFloat(document.getElementById("Plume_substat_2_value").value)};
    const plumeSubstat3 = {Type:document.getElementById("Plume_substat_3").value, Value: Number.parseFloat(document.getElementById("Plume_substat_3_value").value)};
    const plumeSubstat4 = {Type:document.getElementById("Plume_substat_4").value, Value: Number.parseFloat(document.getElementById("Plume_substat_4_value").value)};
    const plumeSet = document.getElementById("Plume_set").value;

    const sandsMainstat = {Type:document.getElementById("Sands_mainstat").value, Value: Number.parseFloat(document.getElementById("Sands_mainstat_value").value)};
    const sandsSubstat1 = {Type:document.getElementById("Sands_substat_1").value, Value: Number.parseFloat(document.getElementById("Sands_substat_1_value").value)};
    const sandsSubstat2 = {Type:document.getElementById("Sands_substat_2").value, Value: Number.parseFloat(document.getElementById("Sands_substat_2_value").value)};
    const sandsSubstat3 = {Type:document.getElementById("Sands_substat_3").value, Value: Number.parseFloat(document.getElementById("Sands_substat_3_value").value)};
    const sandsSubstat4 = {Type:document.getElementById("Sands_substat_4").value, Value: Number.parseFloat(document.getElementById("Sands_substat_4_value").value)};
    const sandsSet = document.getElementById("Sands_set").value;

    const gobletMainstat = {Type:document.getElementById("Goblet_mainstat").value, Value: Number.parseFloat(document.getElementById("Goblet_mainstat_value").value)};
    const gobletSubstat1 = {Type:document.getElementById("Goblet_substat_1").value, Value: Number.parseFloat(document.getElementById("Goblet_substat_1_value").value)};
    const gobletSubstat2 = {Type:document.getElementById("Goblet_substat_2").value, Value: Number.parseFloat(document.getElementById("Goblet_substat_2_value").value)};
    const gobletSubstat3 = {Type:document.getElementById("Goblet_substat_3").value, Value: Number.parseFloat(document.getElementById("Goblet_substat_3_value").value)};
    const gobletSubstat4 = {Type:document.getElementById("Goblet_substat_4").value, Value: Number.parseFloat(document.getElementById("Goblet_substat_4_value").value)};
    const gobletSet = document.getElementById("Goblet_set").value;
    //#endregion
    
    const circlet = {
        Type:"Circlet", 
        Mainstat:{
            Type:circletMainstat.Type,
            Value:circletMainstat.Value
        },
        Substats:
            [
                {Type: circletSubstat1.Type, Value: circletSubstat1.Value},
                {Type: circletSubstat2.Type, Value: circletSubstat2.Value},
                {Type: circletSubstat3.Type, Value: circletSubstat3.Value},
                {Type: circletSubstat4.Type, Value: circletSubstat4.Value}
            ],
        Set:circletSet
    };
    const flower = {
        Type:"Flower", 
        Mainstat:{
            Type:flowerMainstat.Type,
            Value:flowerMainstat.Value
        },
        Substats:
            [
                {Type: flowerSubstat1.Type, Value: flowerSubstat1.Value},
                {Type: flowerSubstat2.Type, Value: flowerSubstat2.Value},
                {Type: flowerSubstat3.Type, Value: flowerSubstat3.Value},
                {Type: flowerSubstat4.Type, Value: flowerSubstat4.Value}
            ],
        Set:flowerSet
    };
    const plume = {
        Type:"Plume", 
        Mainstat:{
            Type:plumeMainstat.Type,
            Value:plumeMainstat.Value
        },
        Substats:
            [
                {Type: plumeSubstat1.Type, Value: plumeSubstat1.Value},
                {Type: plumeSubstat2.Type, Value: plumeSubstat2.Value},
                {Type: plumeSubstat3.Type, Value: plumeSubstat3.Value},
                {Type: plumeSubstat4.Type, Value: plumeSubstat4.Value}
            ],
        Set:plumeSet
    };
    const sands = {
        Type:"Sands", 
        Mainstat:{
            Type:sandsMainstat.Type,
            Value:sandsMainstat.Value
        },
        Substats:
            [
                {Type: sandsSubstat1.Type, Value: sandsSubstat1.Value},
                {Type: sandsSubstat2.Type, Value: sandsSubstat2.Value},
                {Type: sandsSubstat3.Type, Value: sandsSubstat3.Value},
                {Type: sandsSubstat4.Type, Value: sandsSubstat4.Value}
            ],
        Set:sandsSet
    };
    const goblet = {
        Type:"Goblet", 
        Mainstat:{
            Type:gobletMainstat.Type,
            Value:gobletMainstat.Value
        },
        Substats:
            [
                {Type: gobletSubstat1.Type, Value: gobletSubstat1.Value},
                {Type: gobletSubstat2.Type, Value: gobletSubstat2.Value},
                {Type: gobletSubstat3.Type, Value: gobletSubstat3.Value},
                {Type: gobletSubstat4.Type, Value: gobletSubstat4.Value}
            ],
        Set:gobletSet
    };

    let artifacts = [circlet, flower, plume, sands, goblet];
    console.log(artifacts);
    baseCharacter = _.cloneDeep(baseCharacter);
    let baseWeapon = _.cloneDeep(weapon);
    console.log(baseWeapon);
    baseWeapon.level = document.getElementById("WeaponLevels").value;
    baseCharacter.level = document.getElementById("Level").value;
    baseCharacter.normalAttackLevel = Number.parseInt(document.getElementById("Talent_1").value);
    baseCharacter.elementalSkill.Level = Number.parseInt(document.getElementById("Talent_2").value);
    baseCharacter.elementalBurst.Level = Number.parseInt(document.getElementById("Talent_3").value);
    console.log(baseCharacter.elementalSkill)
    let character = new Createcharacter(baseCharacter,baseWeapon,artifacts);
    applyBonuses(character);
    alert(compareCharacters(character));
}
    