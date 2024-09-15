function LoadCharacters() {
    let doc = document.getElementById('characterIcons');

    AllCharacters.index.forEach(character => {
        let htmlCode = "";
        if(AllCharacters[character].name == "Traveler (Anemo)" || AllCharacters[character].name =="Traveler (Geo)" || AllCharacters[character].name == "Traveler (Electro)" || AllCharacters[character].name == "Traveler (Dendro)"|| AllCharacters[character].name == "Traveler (Cryo)"|| AllCharacters[character].name == "Traveler (Pyro)"|| AllCharacters[character].name == "Traveler (Hydro)"){
            htmlCode = "<div class='Character' title='" + AllCharacters[character].name + "' onmouseup='selectCharacter(this)'> <img src='" + AllCharacters[character].src + "' alt='" + AllCharacters[character].name + "'> <div class='" + AllCharacters[character].element + "'><span>Traveler</span></div></div>";
        }else{
            htmlCode = "<div class='Character' title='" + AllCharacters[character].name + "' onmouseup='selectCharacter(this)'> <img src='" + AllCharacters[character].src + "' alt='" + AllCharacters[character].name + "'> <div class='" + AllCharacters[character].element + "'><span>" + AllCharacters[character].name + "</span></div></div>";
        }
         doc.insertAdjacentHTML("beforeend", htmlCode);

    });


   

    loadArtifactLists();
    // loadMockArtifacts();
    // devloadCharacter();
    loadLastBuildFromSessionStorage();

}
function devloadCharacter(){
    document.getElementById("character_level").value = "90b";
    document.getElementById("weapon_level").value = "90b";
    document.getElementById("normal_attack").value = 10;
    document.getElementById("talent_skill").value = 10;
    document.getElementById("talent_burst").value = 10;
    let character = document.createElement("div");
    character.title = "Ganyu";
    character.innerHTML = `<img src="Assets/Characters/Ganyu/Ganyu.webp" alt="Ganyu"><div class="CryoCharacter"><span>Ganyu</span></div>`;
    selectCharacter(character);
    let weapon = document.createElement("div");
    weapon.title = "Amos Bow";
    weapon.innerHTML = `
    <img src="Assets/Weapons/Weapon_Amos_Bow.webp" alt="Amos Bow"><div class="WeaponsText"><span>Amos Bow</span></div>`;
    selectWeapon(weapon);
    console.log(weapon);
}
function loadArtifactLists(){
    document.getElementById("flowerSetList").innerHTML = getArtifactSetList("Flower");
    document.getElementById("flowerMainstatList").innerHTML = getArtifactStatsList("Flower","mainstat");
    document.getElementById("flowerSubstat1List").innerHTML = getArtifactStatsList("Flower","substats");
    document.getElementById("flowerSubstat2List").innerHTML = getArtifactStatsList("Flower","substats");
    document.getElementById("flowerSubstat3List").innerHTML = getArtifactStatsList("Flower","substats");
    document.getElementById("flowerSubstat4List").innerHTML = getArtifactStatsList("Flower","substats");

    document.getElementById("plumeSetList").innerHTML = getArtifactSetList("Plume");
    document.getElementById("plumeMainstatList").innerHTML = getArtifactStatsList("Plume","mainstat");
    document.getElementById("plumeSubstat1List").innerHTML = getArtifactStatsList("Plume","substats");
    document.getElementById("plumeSubstat2List").innerHTML = getArtifactStatsList("Plume","substats");
    document.getElementById("plumeSubstat3List").innerHTML = getArtifactStatsList("Plume","substats");
    document.getElementById("plumeSubstat4List").innerHTML = getArtifactStatsList("Plume","substats");

    document.getElementById("sandsSetList").innerHTML = getArtifactSetList("Sands");
    document.getElementById("sandsMainstatList").innerHTML = getArtifactStatsList("Sands","mainstat");
    document.getElementById("sandsSubstat1List").innerHTML = getArtifactStatsList("Sands","substats");
    document.getElementById("sandsSubstat2List").innerHTML = getArtifactStatsList("Sands","substats");
    document.getElementById("sandsSubstat3List").innerHTML = getArtifactStatsList("Sands","substats");
    document.getElementById("sandsSubstat4List").innerHTML = getArtifactStatsList("Sands","substats");
    
    document.getElementById("gobletSetList").innerHTML = getArtifactSetList("Goblet");
    document.getElementById("gobletMainstatList").innerHTML = getArtifactStatsList("Goblet","mainstat");
    document.getElementById("gobletSubstat1List").innerHTML = getArtifactStatsList("Goblet","substats");
    document.getElementById("gobletSubstat2List").innerHTML = getArtifactStatsList("Goblet","substats");
    document.getElementById("gobletSubstat3List").innerHTML = getArtifactStatsList("Goblet","substats");
    document.getElementById("gobletSubstat4List").innerHTML = getArtifactStatsList("Goblet","substats");

    document.getElementById("circletSetList").innerHTML = getArtifactSetList("Circlet");
    document.getElementById("circletMainstatList").innerHTML = getArtifactStatsList("Circlet","mainstat");
    document.getElementById("circletSubstat1List").innerHTML = getArtifactStatsList("Circlet","substats");
    document.getElementById("circletSubstat2List").innerHTML = getArtifactStatsList("Circlet","substats");
    document.getElementById("circletSubstat3List").innerHTML = getArtifactStatsList("Circlet","substats");
    document.getElementById("circletSubstat4List").innerHTML = getArtifactStatsList("Circlet","substats");
}
function loadWeapons(character) {
    let weapon = document.getElementById('weaponIcons');
    weapon.innerHTML = "";
    console.log(character)
    AllWeapons[AllCharacters[character].weaponType].forEach(Weapon => {
        let htmlCode = `<div class='Weapons' style='background-image:url(Assets/Rarity_Backgrounds/Background_Item_${AllWeapons[Weapon].rarity}_Star.webp)' title='${AllWeapons[Weapon].name}' onmouseup='selectWeapon(this)'> <img src='Assets/${AllWeapons[Weapon].src}' alt='${AllWeapons[Weapon].name}'> <div class='WeaponsText'><span>${AllWeapons[Weapon].name}</span></div></div>`;
        weapon.insertAdjacentHTML("beforeend", htmlCode);
    });
 

}
function loadMockArtifacts() {

    document.getElementById("circlet_mainstat_type").dataset.type = "CritDMG";
    document.getElementById("circlet_mainstat_type").title = "CritDMG";
    document.getElementById("circlet_mainstat_type").src = "Assets/Icons/Icon_Attribute_Critical_Damage.webp";
    document.getElementById("circlet_mainstat_value").innerText = 62.2;

    document.getElementById("circlet_substat_1_type").dataset.type = "CritRate";
    document.getElementById("circlet_substat_1_type").title = "CritRate";
    document.getElementById("circlet_substat_1_type").src = "Assets/Icons/Icon_Attribute_Critical_Hit.webp";
    document.getElementById("circlet_substat_1_value").innerText = 12.4;

    document.getElementById("circlet_substat_2_type").dataset.type = "DEFflat";
    document.getElementById("circlet_substat_2_type").title = "DEFflat";
    document.getElementById("circlet_substat_2_type").src = "Assets/Icons/Icon_Attribute_Defense.webp";
    document.getElementById("circlet_substat_2_value").innerText = 39;

    document.getElementById("circlet_substat_3_type").dataset.type = "ATK%";
    document.getElementById("circlet_substat_3_type").title = "ATK%";
    document.getElementById("circlet_substat_3_type").src = "Assets/Icons/Icon_Attribute_Attack.webp";
    document.getElementById("circlet_substat_3_value").innerText = 4.7;

    document.getElementById("circlet_substat_4_type").dataset.type = "HP%";
    document.getElementById("circlet_substat_4_type").title = "HP%";
    document.getElementById("circlet_substat_4_type").src = "Assets/Icons/Icon_Attribute_Health.webp";
    document.getElementById("circlet_substat_4_value").innerText = 4.7;

    document.getElementById("circlet_set").dataset.set = "Blizzard_Strayer";
    document.getElementById("circlet_set").style.backgroundImage = "url('Assets/Artifacts/Blizzard_Strayer_Circlet.webp')";

    document.getElementById("flower_mainstat_type").dataset.type = "HPflat";
    document.getElementById("flower_mainstat_type").title = "HPflat";
    document.getElementById("flower_mainstat_type").src = "Assets/Icons/Icon_Attribute_Health.webp";
    document.getElementById("flower_mainstat_value").innerText = 4680;

    document.getElementById("flower_substat_1_type").dataset.type = "CritRate";
    document.getElementById("flower_substat_1_type").title = "CritRate";
    document.getElementById("flower_substat_1_type").src = "Assets/Icons/Icon_Attribute_Critical_Hit.webp";
    document.getElementById("flower_substat_1_value").innerText = 8.6;

    document.getElementById("flower_substat_2_type").dataset.type = "CritDMG";
    document.getElementById("flower_substat_2_type").title = "CritDMG";
    document.getElementById("flower_substat_2_type").src = "Assets/Icons/Icon_Attribute_Critical_Damage.webp";
    document.getElementById("flower_substat_2_value").innerText = 18.7;

    document.getElementById("flower_substat_3_type").dataset.type = "HP%";
    document.getElementById("flower_substat_3_type").title = "HP%";
    document.getElementById("flower_substat_3_type").src = "Assets/Icons/Icon_Attribute_Health.webp";
    document.getElementById("flower_substat_3_value").innerText = 10.5;

    document.getElementById("flower_substat_4_type").dataset.type = "DEF%";
    document.getElementById("flower_substat_4_type").title = "DEF%";
    document.getElementById("flower_substat_4_type").src = "Assets/Icons/Icon_Attribute_Defense.webp";
    document.getElementById("flower_substat_4_value").innerText = 7.3;

    document.getElementById("flower_set").dataset.set = "Blizzard_Strayer";
    document.getElementById("flower_set").style.backgroundImage = "url('Assets/Artifacts/Blizzard_Strayer_Flower.webp')";

    document.getElementById("plume_mainstat_type").dataset.type = "ATKflat";
    document.getElementById("plume_mainstat_type").title = "ATKflat";
    document.getElementById("plume_mainstat_type").src = "Assets/Icons/Icon_Attribute_Attack.webp";
    document.getElementById("plume_mainstat_value").innerText = 311;

    document.getElementById("plume_substat_1_type").dataset.type = "CritDMG";
    document.getElementById("plume_substat_1_type").title = "CritDMG";
    document.getElementById("plume_substat_1_type").src = "Assets/Icons/Icon_Attribute_Critical_Damage.webp";
    document.getElementById("plume_substat_1_value").innerText = 6.2;

    document.getElementById("plume_substat_2_type").dataset.type = "EnergyRecharge";
    document.getElementById("plume_substat_2_type").title = "EnergyRecharge";
    document.getElementById("plume_substat_2_type").src = "Assets/Icons/Icon_Attribute_Energy_Recharge.webp";
    document.getElementById("plume_substat_2_value").innerText = 10.4;

    document.getElementById("plume_substat_3_type").dataset.type = "DEFflat";
    document.getElementById("plume_substat_3_type").title = "DEFflat";
    document.getElementById("plume_substat_3_type").src = "Assets/Icons/Icon_Attribute_Defense.webp";
    document.getElementById("plume_substat_3_value").innerText = 60;

    document.getElementById("plume_substat_4_type").dataset.type = "DEF%";
    document.getElementById("plume_substat_4_type").title = "DEF%";
    document.getElementById("plume_substat_4_type").src = "Assets/Icons/Icon_Attribute_Defense.webp";
    document.getElementById("plume_substat_4_value").innerText = 12.4;

    document.getElementById("plume_set").dataset.set = "Blizzard_Strayer";
    document.getElementById("plume_set").style.backgroundImage = "url('Assets/Artifacts/Blizzard_Strayer_Plume.webp')";

    document.getElementById("sands_mainstat_type").dataset.type = "ATK%";
    document.getElementById("sands_mainstat_type").title = "ATK%";
    document.getElementById("sands_mainstat_type").src = "Assets/Icons/Icon_Attribute_Attack.webp";
    document.getElementById("sands_mainstat_value").innerText = 46.6;

    document.getElementById("sands_substat_1_type").dataset.type = "ATKflat";
    document.getElementById("sands_substat_1_type").title = "ATKflat";
    document.getElementById("sands_substat_1_type").src = "Assets/Icons/Icon_Attribute_Attack.webp";
    document.getElementById("sands_substat_1_value").innerText = 16;

    document.getElementById("sands_substat_2_type").dataset.type = "CritDMG";
    document.getElementById("sands_substat_2_type").title = "CritDMG";
    document.getElementById("sands_substat_2_type").src = "Assets/Icons/Icon_Attribute_Critical_Damage.webp";
    document.getElementById("sands_substat_2_value").innerText = 29.5;

    document.getElementById("sands_substat_3_type").dataset.type = "DEFflat";
    document.getElementById("sands_substat_3_type").title = "DEFflat";
    document.getElementById("sands_substat_3_type").src = "Assets/Icons/Icon_Attribute_Defense.webp";
    document.getElementById("sands_substat_3_value").innerText = 19;

    document.getElementById("sands_substat_4_type").dataset.type = "CritRate";
    document.getElementById("sands_substat_4_type").title = "CritRate";
    document.getElementById("sands_substat_4_type").src = "Assets/Icons/Icon_Attribute_Critical_Hit.webp";
    document.getElementById("sands_substat_4_value").innerText = 10.9;

    document.getElementById("sands_set").dataset.set = "Blizzard_Strayer";
    document.getElementById("sands_set").style.backgroundImage = "url('Assets/Artifacts/Blizzard_Strayer_Sands.webp')";

    document.getElementById("goblet_mainstat_type").dataset.type = "CryoDMGBonus";
    document.getElementById("goblet_mainstat_type").title = "CryoDMGBonus";
    document.getElementById("goblet_mainstat_type").src = "Assets/Icons/Element_Cryo.svg";
    document.getElementById("goblet_mainstat_value").innerText = 46.6;

    document.getElementById("goblet_substat_1_type").dataset.type = "HPflat";
    document.getElementById("goblet_substat_1_type").title = "HPflat";
    document.getElementById("goblet_substat_1_type").src = "Assets/Icons/Icon_Attribute_Health.webp";
    document.getElementById("goblet_substat_1_value").innerText = 239;

    document.getElementById("goblet_substat_2_type").dataset.type = "ElementalMastery";
    document.getElementById("goblet_substat_2_type").title = "ElementalMastery";
    document.getElementById("goblet_substat_2_type").src = "Assets/Icons/Icon_Attribute_Elemental_Mastery.webp";
    document.getElementById("goblet_substat_2_value").innerText = 37;

    document.getElementById("goblet_substat_3_type").dataset.type = "CritDMG";
    document.getElementById("goblet_substat_3_type").title = "CritDMG";
    document.getElementById("goblet_substat_3_type").src = "Assets/Icons/Icon_Attribute_Critical_Damage.webp";
    document.getElementById("goblet_substat_3_value").innerText = 25.6;

    document.getElementById("goblet_substat_4_type").dataset.type = "EnergyRecharge";
    document.getElementById("goblet_substat_4_type").title = "EnergyRecharge";
    document.getElementById("goblet_substat_4_value").innerText = 5.8;

    document.getElementById("goblet_set").dataset.set = "Viridescent_Venerer";
    document.getElementById("goblet_set").style.backgroundImage = "url('Assets/Artifacts/Viridescent_Venerer_Goblet.webp')";
}
function loadMockArtifacts2() {
    let procent = 40;
    document.getElementById("Circlet_mainstat").value = "ATK%";
    document.getElementById("Circlet_mainstat_value").value = 46.6;
    document.getElementById("Circlet_substat_1").value = "ATKflat";
    document.getElementById("Circlet_substat_1_value").value = 14;
    document.getElementById("Circlet_substat_2").value = "ElementalMastery";
    document.getElementById("Circlet_substat_2_value").value = 83;
    document.getElementById("Circlet_substat_3").value = "EnergyRecharge";
    document.getElementById("Circlet_substat_3_value").value = 6.5;
    document.getElementById("Circlet_substat_4").value = "HPflat";
    document.getElementById("Circlet_substat_4_value").value = 508;
    document.getElementById("Circlet_set").value = "Blizzard Strayer";
    document.getElementById("Circlet").src = "Artifacts/Blizzard Strayer Circlet.png";

    document.getElementById("Flower_mainstat").value = "HPflat";
    document.getElementById("Flower_mainstat_value").value = 4780;
    document.getElementById("Flower_substat_1").value = "CritRate";
    document.getElementById("Flower_substat_1_value").value = 6.2;
    document.getElementById("Flower_substat_2").value = "EnergyRecharge";
    document.getElementById("Flower_substat_2_value").value = 14.2;
    document.getElementById("Flower_substat_3").value = "ElementalMastery";
    document.getElementById("Flower_substat_3_value").value = 23;
    document.getElementById("Flower_substat_4").value = "DEF%";
    document.getElementById("Flower_substat_4_value").value = 12.4;
    document.getElementById("Flower_set").value = "Blizzard Strayer";
    document.getElementById("Flower").src = "Artifacts/Blizzard Strayer Flower.png";

    document.getElementById("Plume_mainstat").value = "ATKflat";
    document.getElementById("Plume_mainstat_value").value = 311;
    document.getElementById("Plume_substat_1").value = "CritDMG";
    document.getElementById("Plume_substat_1_value").value = 6.2;
    document.getElementById("Plume_substat_2").value = "EnergyRecharge";
    document.getElementById("Plume_substat_2_value").value = 10.4;
    document.getElementById("Plume_substat_3").value = "DEFflat";
    document.getElementById("Plume_substat_3_value").value = 60;
    document.getElementById("Plume_substat_4").value = "DEF%";
    document.getElementById("Plume_substat_4_value").value = 12.4;
    document.getElementById("Plume_set").value = "Blizzard Strayer";
    document.getElementById("Plume").src = "Artifacts/Blizzard Strayer Plume.png";

    document.getElementById("Sands_mainstat").value = "ATK%";
    document.getElementById("Sands_mainstat_value").value = 46.6;
    document.getElementById("Sands_substat_1").value = "ATKflat";
    document.getElementById("Sands_substat_1_value").value = 31;
    document.getElementById("Sands_substat_2").value = "CritRate";
    document.getElementById("Sands_substat_2_value").value = 6.2;
    document.getElementById("Sands_substat_3").value = "DEFflat";
    document.getElementById("Sands_substat_3_value").value = 56;
    document.getElementById("Sands_substat_4").value = "CritDMG";
    document.getElementById("Sands_substat_4_value").value = 7;
    document.getElementById("Sands_set").value = "Blizzard Strayer";
    document.getElementById("Sands").src = "Artifacts/Blizzard Strayer Sands.png";

    document.getElementById("Goblet_mainstat").value = "CryoDMGBonus";
    document.getElementById("Goblet_mainstat_value").value = 46.6;
    document.getElementById("Goblet_substat_1").value = "HP%";
    document.getElementById("Goblet_substat_1_value").value = 9.3;
    document.getElementById("Goblet_substat_2").value = "ATK%";
    document.getElementById("Goblet_substat_2_value").value = 14.6;
    document.getElementById("Goblet_substat_3").value = "ElementalMastery";
    document.getElementById("Goblet_substat_3_value").value = 65;
    document.getElementById("Goblet_substat_4").value = "ATKflat";
    document.getElementById("Goblet_substat_4_value").value = 18;
    document.getElementById("Goblet_set").value = "Gladiator's Finale";
    document.getElementById("Goblet").src = "Artifacts/Gladiator's Finale Goblet.png";
}
function loadBackground(){
    let number = GetRandomNumber(1, 1);
    
    
    document.getElementById("containerHelper").style.backgroundImage = "url('/assets/Backgrounds/Background" + number + ".jpg')";
    
}

function loadLastBuildFromSessionStorage(){
    //Check if there is a build in the session storage
    let build = sessionStorage.getItem("user");
    if (build === null) {
        return;
    }
    else {
        build = JSON.parse(build);
    }
    //If there is a build in the session storage, load it
    if (build != null && build != undefined && build != []) {
        // console.log(build);
        let character = document.createElement("div");
        character.title = build.character.name;
        character.innerHTML = `<img src="" alt="${build.character.name}"><div class="${build.character.element}"><span>${build.character.name}</span></div>`;
        selectCharacter(character);
        let weapon = document.createElement("div");
        weapon.title = build.weapon.name;
        build.weapon.name = build.weapon.name.replace("&#39", "'");
        weapon.innerHTML = `<img src="Assets/${AllWeapons[build.weapon.name].src}" alt="${build.weapon.name}"><div class="WeaponsText"><span>${build.weapon.name}</span></div>`;
        selectWeapon(weapon);
        document.getElementById("character_level").value = build.character.level;
        document.getElementById("weapon_level").value = build.weapon.level;
        document.getElementById("normal_attack").value = build.character.normalAttackLevel;
        document.getElementById("talent_skill").value = build.character.elementalSkillLevel.Level;
        document.getElementById("talent_burst").value = build.character.elementalBurstLevel.Level;
        loadArtifacts(build.artifacts);
    }


}


function loadArtifacts(artifacts){
   
    const artifactImgTranslation = {
        "HP%": "Icon_Attribute_Health.webp",
        "ATK%": "Icon_Attribute_Attack.webp",
        "DEF%": "Icon_Attribute_Defense.webp",
        "ATKflat": "Icon_Attribute_Attack.webp",
        "HPflat": "Icon_Attribute_Health.webp",
        "DEFflat": "Icon_Attribute_Defense.webp",
        "ElementalMastery": "Icon_Attribute_Elemental_Mastery.webp",
        "EnergyRecharge": "Icon_Attribute_Energy_Recharge.webp",
        "CritRate": "Icon_Attribute_Critical_Hit.webp",
        "CritDMG": "Icon_Attribute_Critical_Damage.webp",
        "HealingBonus": "Icon_Attribute_Healing.webp",
        "PyroDMGBonus": "Element_Pyro.svg",
        "HydroDMGBonus": "Element_Hydro.svg",
        "DendroDMGBonus": "Element_Dendro.svg",
        "ElectroDMGBonus": "Element_Electro.svg",
        "AnemoDMGBonus": "Element_Anemo.svg",
        "CryoDMGBonus": "Element_Cryo.svg",
        "GeoDMGBonus": "Element_Geo.svg",
        "PhysicalDMGBonus": "Icon_Attribute_Physical.svg",
    }
    for (let i = 0; i < artifacts.length; i++) {
        document.getElementById(artifacts[i].Type.toLowerCase() + "_mainstat_type").dataset.type = artifacts[i].Mainstat.Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_mainstat_type").title = artifacts[i].Mainstat.Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_mainstat_type").src = "Assets/Icons/"+artifactImgTranslation[artifacts[i].Mainstat.Type];
        document.getElementById(artifacts[i].Type.toLowerCase() + "_mainstat_value").innerText = artifacts[i].Mainstat.Value;

        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_1_type").dataset.type = artifacts[i].Substats[0].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_1_type").title = artifacts[i].Substats[0].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_1_type").src = "Assets/Icons/"+artifactImgTranslation[artifacts[i].Substats[0].Type];
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_1_value").innerText = artifacts[i].Substats[0].Value;

        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_2_type").dataset.type = artifacts[i].Substats[1].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_2_type").title = artifacts[i].Substats[1].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_2_type").src = "Assets/Icons/"+artifactImgTranslation[artifacts[i].Substats[1].Type];
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_2_value").innerText = artifacts[i].Substats[1].Value;

        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_3_type").dataset.type = artifacts[i].Substats[2].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_3_type").title = artifacts[i].Substats[2].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_3_type").src = "Assets/Icons/"+artifactImgTranslation[artifacts[i].Substats[2].Type];
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_3_value").innerText = artifacts[i].Substats[2].Value;

        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_4_type").dataset.type = artifacts[i].Substats[3].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_4_type").title = artifacts[i].Substats[3].Type;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_4_type").src = "Assets/Icons/"+artifactImgTranslation[artifacts[i].Substats[3].Type];
        document.getElementById(artifacts[i].Type.toLowerCase() + "_substat_4_value").innerText = artifacts[i].Substats[3].Value;      
        
        document.getElementById(artifacts[i].Type.toLowerCase() + "_set").dataset.set = artifacts[i].Set;
        document.getElementById(artifacts[i].Type.toLowerCase() + "_set").style.backgroundImage = "url('Assets/Artifacts/"+artifacts[i].Set+"_"+artifacts[i].Type+".webp')";


    }

    
}