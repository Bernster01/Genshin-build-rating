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
    document.getElementById("Circlet_mainstat_value").value = procent;
    document.getElementById("Circlet_substat_1").value = "ATK%";
    document.getElementById("Circlet_substat_1_value").value = procent;
    document.getElementById("Circlet_substat_2").value = "CritRate";
    document.getElementById("Circlet_substat_2_value").value = procent;
    document.getElementById("Circlet_substat_3").value = "ATKflat";
    document.getElementById("Circlet_substat_3_value").value = procent; 
    document.getElementById("Circlet_substat_4").value = "EnergyRecharge";
    document.getElementById("Circlet_substat_4_value").value = procent;

    document.getElementById("Flower_mainstat").value = "HPflat";
    document.getElementById("Flower_mainstat_value").value = procent;
    document.getElementById("Flower_substat_1").value = "ATK%";
    document.getElementById("Flower_substat_1_value").value = procent;
    document.getElementById("Flower_substat_2").value = "CritRate";
    document.getElementById("Flower_substat_2_value").value = procent;
    document.getElementById("Flower_substat_3").value = "ATKflat";
    document.getElementById("Flower_substat_3_value").value = procent;
    document.getElementById("Flower_substat_4").value = "EnergyRecharge";
    document.getElementById("Flower_substat_4_value").value = procent;

    document.getElementById("Plume_mainstat").value = "ATKflat";
    document.getElementById("Plume_mainstat_value").value = procent;
    document.getElementById("Plume_substat_1").value = "ATK%";
    document.getElementById("Plume_substat_1_value").value = procent;
    document.getElementById("Plume_substat_2").value = "CritRate";
    document.getElementById("Plume_substat_2_value").value = procent;
    document.getElementById("Plume_substat_3").value = "CriteDMG";
    document.getElementById("Plume_substat_3_value").value = procent;
    document.getElementById("Plume_substat_4").value = "EnergyRecharge";
    document.getElementById("Plume_substat_4_value").value = procent;

    document.getElementById("Sands_mainstat").value = "ATK%";
    document.getElementById("Sands_mainstat_value").value = procent;
    document.getElementById("Sands_substat_1").value = "CritDMG";
    document.getElementById("Sands_substat_1_value").value = procent;
    document.getElementById("Sands_substat_2").value = "CritRate";
    document.getElementById("Sands_substat_2_value").value = procent;
    document.getElementById("Sands_substat_3").value = "ATKflat";
    document.getElementById("Sands_substat_3_value").value = procent;
    document.getElementById("Sands_substat_4").value = "EnergyRecharge";
    document.getElementById("Sands_substat_4_value").value = procent;

    document.getElementById("Goblet_mainstat").value = "CryoDMGBonus";
    document.getElementById("Goblet_mainstat_value").value = procent;
    document.getElementById("Goblet_substat_1").value = "ATK%";
    document.getElementById("Goblet_substat_1_value").value = procent;
    document.getElementById("Goblet_substat_2").value = "CritRate";
    document.getElementById("Goblet_substat_2_value").value = procent;
    document.getElementById("Goblet_substat_3").value = "ATKflat";
    document.getElementById("Goblet_substat_3_value").value = procent;
    document.getElementById("Goblet_substat_4").value = "EnergyRecharge";
    document.getElementById("Goblet_substat_4_value").value = procent;
}



