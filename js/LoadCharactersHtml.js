function LoadCharacters(){
    var doc = document.getElementById('CharacterBox');
    for(let index = 0; index < AllCharacters.length; index++) {
        
       let htmlCode = "<div class='Character' title='"+AllCharacters[index].name+"' onmouseup='selectCharacter(this)'> <img src='"+AllCharacters[index].src+"' alt='"+AllCharacters[index].name+"'> <div class='"+AllCharacters[index].element+"'><span>"+AllCharacters[index].name+"</span></div></div>";
        doc.insertAdjacentHTML("beforeend",htmlCode);
      
    }
    loadMockArtifacts();
}
function loadMockArtifacts(){
    let procent = 40;
    document.getElementById("Circlet_mainstat").value = "CritDMG";
    document.getElementById("Circlet_mainstat_value").value = 46.6;
    document.getElementById("Circlet_substat_1").value = "CritRate";
    document.getElementById("Circlet_substat_1_value").value = 12.4;
    document.getElementById("Circlet_substat_2").value = "DEFflat";
    document.getElementById("Circlet_substat_2_value").value = 39;
    document.getElementById("Circlet_substat_3").value = "ATK%";
    document.getElementById("Circlet_substat_3_value").value = 4.7; 
    document.getElementById("Circlet_substat_4").value = "HP%";
    document.getElementById("Circlet_substat_4_value").value = 4.7;
    document.getElementById("Circlet_set").value = "Blizzard Strayer";
    document.getElementById("Circlet").src = "Artifacts/Blizzard Strayer Circlet.png";

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
    document.getElementById("Sands_substat_1").value = "DEFflat";
    document.getElementById("Sands_substat_1_value").value = 16;
    document.getElementById("Sands_substat_2").value = "CritDMG";
    document.getElementById("Sands_substat_2_value").value = 29.5;
    document.getElementById("Sands_substat_3").value = "ATKflat";
    document.getElementById("Sands_substat_3_value").value = 19;
    document.getElementById("Sands_substat_4").value = "CritRate";
    document.getElementById("Sands_substat_4_value").value = 10.9;
    document.getElementById("Sands_set").value = "Blizzard Strayer";
    document.getElementById("Sands").src = "Artifacts/Blizzard Strayer Sands.png";

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
    document.getElementById("Goblet_set").value = "Viridescent Venerer's";
    document.getElementById("Goblet").src = "Artifacts/Viridescent Venerer's.png";
}
function loadMockArtifacts2(){
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



