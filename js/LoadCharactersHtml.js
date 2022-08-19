function LoadCharacters() {
    let doc = document.getElementById('characterIcons');

    AllCharacters.index.forEach(character => {
        let htmlCode = "";
        if(AllCharacters[character].name == "Traveler (Anemo)" || AllCharacters[character].name =="Traveler (Geo)" || AllCharacters[character].name == "Traveler (Electro)"){
            htmlCode = "<div class='Character' title='" + AllCharacters[character].name + "' onmouseup='selectCharacter(this)'> <img src='" + AllCharacters[character].src + "' alt='" + AllCharacters[character].name + "'> <div class='" + AllCharacters[character].element + "'><span>Traveler</span></div></div>";
        }else{
            htmlCode = "<div class='Character' title='" + AllCharacters[character].name + "' onmouseup='selectCharacter(this)'> <img src='" + AllCharacters[character].src + "' alt='" + AllCharacters[character].name + "'> <div class='" + AllCharacters[character].element + "'><span>" + AllCharacters[character].name + "</span></div></div>";
        }
         doc.insertAdjacentHTML("beforeend", htmlCode);

    });


   

    loadArtifactLists();
    // loadMockArtifacts();
    // loadBackground();
    loadArtifactCookie();

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
    let weapon = document.getElementById('WeaponsContainer');
    weapon.innerHTML = "";
    console.log(character)
    AllWeapons[AllCharacters[character].weaponType].forEach(Weapon => {
        let htmlCode = "<div class='Weapons' title='" + AllWeapons[Weapon].name + "' onmouseup='selectWeapon(this)'> <img src='" + AllWeapons[Weapon].src + "' alt='" + AllWeapons[Weapon].name + "'> <div class='WeaponsText'><span>" + AllWeapons[Weapon].name + "</span></div></div>";
        weapon.insertAdjacentHTML("beforeend", htmlCode);
    });


}
function loadMockArtifacts() {

    document.getElementById("Circlet_mainstat").value = "CritDMG";
    document.getElementById("Circlet_mainstat_value").value = 62.2;
    document.getElementById("Circlet_substat_1").value = "CritRate";
    document.getElementById("Circlet_substat_1_value").value = 12.4;
    document.getElementById("Circlet_substat_2").value = "DEFflat";
    document.getElementById("Circlet_substat_2_value").value = 39;
    document.getElementById("Circlet_substat_3").value = "ATK%";
    document.getElementById("Circlet_substat_3_value").value = 4.7;
    document.getElementById("Circlet_substat_4").value = "HP%";
    document.getElementById("Circlet_substat_4_value").value = 4.7;
    document.getElementById("Circlet_set").value = "Blizzard Strayer";
    document.getElementById("Circlet").src = "Artifacts/Blizzard Strayer Circlet.webp";

    document.getElementById("Flower_mainstat").value = "HPflat";
    document.getElementById("Flower_mainstat_value").value = 4780;
    document.getElementById("Flower_substat_1").value = "CritRate";
    document.getElementById("Flower_substat_1_value").value = 8.6;
    document.getElementById("Flower_substat_2").value = "CritDMG";
    document.getElementById("Flower_substat_2_value").value = 18.7;
    document.getElementById("Flower_substat_3").value = "HP%";
    document.getElementById("Flower_substat_3_value").value = 10.5;
    document.getElementById("Flower_substat_4").value = "DEF%";
    document.getElementById("Flower_substat_4_value").value = 7.3;
    document.getElementById("Flower_set").value = "Blizzard Strayer";
    document.getElementById("Flower").src = "Artifacts/Blizzard Strayer Flower.webp";

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
    document.getElementById("Plume").src = "Artifacts/Blizzard Strayer Plume.webp";

    document.getElementById("Sands_mainstat").value = "ATK%";
    document.getElementById("Sands_mainstat_value").value = 46.6;
    document.getElementById("Sands_substat_1").value = "DEFflat";
    document.getElementById("Sands_substat_1_value").value = 16;
    document.getElementById("Sands_substat_2").value = "CritDMG";
    document.getElementById("Sands_substat_2_value").value = 29.5;
    document.getElementById("Sands_substat_3").value = "ATKflat";
    document.getElementById("Sands_substat_3_value").value = 19;
    document.getElementById("Sands_substat_4").value = "CritRate";
    document.getElementById("Sands_substat_4_value").value = 10.9;
    document.getElementById("Sands_set").value = "Blizzard Strayer";
    document.getElementById("Sands").src = "Artifacts/Blizzard Strayer Sands.webp";

    document.getElementById("Goblet_mainstat").value = "CryoDMGBonus";
    document.getElementById("Goblet_mainstat_value").value = 46.6;
    document.getElementById("Goblet_substat_1").value = "HPflat";
    document.getElementById("Goblet_substat_1_value").value = 239;
    document.getElementById("Goblet_substat_2").value = "ElementalMastery";
    document.getElementById("Goblet_substat_2_value").value = 37;
    document.getElementById("Goblet_substat_3").value = "CritDMG";
    document.getElementById("Goblet_substat_3_value").value = 25.6;
    document.getElementById("Goblet_substat_4").value = "EnergyRecharge";
    document.getElementById("Goblet_substat_4_value").value = 5.8;
    document.getElementById("Goblet_set").value = "Viridescent Venerer";
    document.getElementById("Goblet").src = "Artifacts/Viridescent Venerer Goblet.webp";
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


