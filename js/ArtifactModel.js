function Artifact(type,mainstat,substat1,substat2,substat3,substat4,set){
    this.Type = type;
    this.Mainstat = mainstat;
    this.Substats = [substat1,substat2,substat3,substat4];
    this.Set = set;
}
function getArtifactSetsAsHtmlOption(){
    let htmlCode = "<option value='None'>None</option>";
    for(let i = 0; i < setsList.length; i++){
        htmlCode += `<option value="${setsList[i]}">${setsList[i]}</option>`;
    }
    return htmlCode;
}
const sets ={
    [0]:"Archaic_Petra",
    [1]:"Blizzard_Strayer",
    [2]:"Bloodstained_Chivalry",
    [3]:"Crimson_Witch_of_Flames",
    [4]:"Echoes_of_an_Offering",
    [5]:"Emblem_of_Severed_Fate",  
    [6]:"Gladiators_Finale",
    [7]:"Heart_of_Depth",
    [8]:"Husk_of_Opulent_Dreams",
    [9]:"Lavawalker",
    [10]:"Maiden_Beloved",
    [11]:"Noblesse_Oblige",
    [12]:"Ocean-Hued_Clam",
    [13]:"Pale_Flame",
    [14]:"Retracing_Bolide",
    [15]:"Shimenawas_Reminiscence",
    [16]:"Tenacity_of_the_Millelith",
    [17]:"Thundering_Fury",
    [18]:"Thundersoother",
    [19]:"Vermillion_Hereafter",
    [20]:"Viridescent_Venerer",
    [21]:"Wanderers_Troupe"
}
const setsList = [
"Archaic_Petra",
"Blizzard_Strayer",
"Bloodstained_Chivalry",
"Crimson_Witch_of_Flames",
"Echoes_of_an_Offering",
"Emblem_of_Severed_Fate",
"Gladiators_Finale",
"Heart_of_Depth",
"Husk_of_Opulent_Dreams",
"Lavawalker",
"Maiden_Beloved",
"Noblesse_Oblige",
"Ocean-Hued_Clam",
"Pale_Flame",
"Retracing_Bolide",
"Shimenawas_Reminiscence",
"Tenacity_of_the_Millelith",
"Thundering_Fury",
"Thundersoother",
"Vermillion_Hereafter",
"Viridescent_Venerer",
"Wanderers_Troupe"
];

const artifactSets ={
    ["Archaic_Petra"]:{
        Type: "Archaic Petra",
        twoPiece:{Type:"GeoDMGBonus",Value:15},
        fourPiece:{Type:"BonusDMG%",Value:35}
    },
    ["Blizzard_Strayer"]:{
        Type: "Blizzard Strayer",
        twoPiece:{Type:"CryoBonusDMG",Value:15},
        fourPiece:{Type:"CritRate",Value:20}
    },
    ["Bloodstained_Chivalry"]:{
        Type: "Bloodstained Chivalry",
        twoPiece:{Type:"PhysicalDMGBonus",Value:25},
        fourPiece:{Type:"ChargedAttack",Value:50}
    },
    ["Crimson_Witch_of_Flames"]:{
        Type: "Crimson Witch of Flames",
        twoPiece:{Type:"PyroDMGBonus",Value:15}
        
    },
    ["Echoes_of_an_Offering"]:{
        Type: "Echoes of an Offering",
        twoPiece:{Type:"ATK%",Value:18},
        fourPiece:{Type:"Echoes"}
        
    },
    ["Emblem_of_Severed_Fate"]:{
        Type: "Emblem of Severed Fate",
        twoPiece:{Type:"EnergyRecharge",Value:20},
        fourPiece:{Type:"Emblem"}
        
    },
    ["Gladiators_Finale"]:{
        Type: "Gladiators Finale",
        twoPiece:{Type:"ATK%",Value:18},
        fourPiece:{Type:"NormalAttack",Value:35},
        
    },
    ["Heart_of_Depth"]:{
        Type: "Heart of Depth",
        twoPiece:{Type:"HydroDMGBonus",Value:15},
        fourPiece:{Type:"Heart of Depth",Value:null}
        
    },
    ["Husk_of_Opulent_Dreams"]:{
        Type: "Husk of Opulent Dreams",
        twoPiece:{Type:"DEF%",Value:30},
        fourPiece:[{Type:"DEF%",Value:24},{Type:"GeoDMGBonus",Value:24}]
        
    },
    ["Lavawalker"]:{
        Type: "Lavawalker",
        twoPiece:{Type:"",Value:null},
        fourPiece:{Type:"BonusDMG%",Value:0.35},
        
    },
    ["Maiden_Beloved"]:{
        Type: "Maiden Beloved",
        twoPiece:{Type:"HealingBonus",Value:15},
        
    },
    ["Noblesse_Oblige"]:{
        Type: "Noblesse Oblige",
        twoPiece:{Type:"BurstDMG%",Value:20},
        
    },
    ["Ocean-Hued_Clam"]:{
        Type: "Ocean-Hued Clam",
        twoPiece:{Type:"HealingBonus",Value:15},
        fourPiece:{Type:"Ocean-Hued Clam",Value:null}
        
    },
    ["Pale_Flame"]:{
        Type: "Pale Flame",
        twoPiece:{Type:"PhysicalDMGBonus",Value:25}
    },
    ["Retracing_Bolide"]:{
        Type: "Retracing Bolide",
        twoPiece:{Type:"ShieldStrength",Value:35},
        fourPiece:[
            {Type:"ChargedAttack",Value:40},
            {Type:"NormalAttack",Value:40}
        ]
    },
    ["Shimenawas_Reminiscence"]:{
        Type: "Shimenawas Reminiscence",
        twoPiece:{Type:"ATK%",Value:18},
        fourPiece:[
            {Type:"ChargedAttack",Value:50},
            {Type:"NormalAttack",Value:50},
            {Type:"PlungeAttack",Value:50},
            {Type:"EnergyRecharge",Value:-20}
        ]
    },
    ["Tenacity_of_the_Millelith"]:{
        Type: "Tenacity of the Millelith",
        twoPiece:{Type:"HP%",Value:20}
        
    },
    ["Thundering_Fury"]:{
        Type: "Thundering Fury",
        twoPiece:{Type:"ElectroDMGBonus",Value:15}
        
    },
    ["Thundersoother"]:{
        Type: "Thundersoother",
        twoPiece:{Type:"",Value:null},
        fourPiece:{Type:"",Value:35}
        
    },
    ["Vermillion_Hereafter"]:{
        Type: "Vermillion Hereafter",
        twoPiece:{Type:"ATK%",Value:18},
        fourPiece:{Type:"Vermillion Hereafter",Value:null}
        
    },
    ["Viridescent_Venerer"]:{
        Type: "Viridescent Venerer",
        twoPiece:{Type:"AnemoDMGBonus",Value:15},
        fourPiece:{Type:"VV",Value:null}
        
    },
    ["Wanderers_Troupe"]:{
        Type: "Wanderers Troupe",
        twoPiece:{Type:"ElementalMastery",Value:80},
        fourPiece:{Type:"ChargedAttack",Value:35},
    }
}
let artifactPieces ={
    [0]: "Circlet",
    [1]: "Flower",
    [2]: "Plume",
    [3]: "Sands",
    [4]: "Goblet"
};
let mainStatCircletOptions={
    [0]:"HP%",
    [1]:"ATK%",
    [2]:"DEF%",
    [3]:"ElementalMastery",
    [4]:"CritRate",
    [5]:"CritDMG",
    [6]:"HealingBonus"
};
let mainStatFlowerOptions={[0]:"HPflat"};
let mainStatPlumeOptions={[0]:"ATKflat"};
let mainStatSandsOptions={
    [0]:"HP%",
    [1]:"ATK%",
    [2]:"DEF%",
    [3]:"ElementalMastery",
    [4]:"EnergyRecharge"
};
let mainStatGobletOptions={
    [0]:"HP%",
    [1]:"ATK%",
    [2]:"DEF%",
    [3]:"ElementalMastery",
    [4]:"PyroDMGBonus",
    [5]:"HydroDMGBonus",
    [6]:"AnemoDMGBonus",
    [7]:"ElectroDMGBonus",
    [8]:"CryoDMGBonus",
    [9]:"GeoDMGBonus",
    [10]:"PhysicalDMGBonus"
    
};
let mainStatValues = {
    ["HP%"]:46.6,
    ["HPflat"]:4780,
    ["ATK%"]:46.6,
    ["ATKflat"]:311,
    ["DEF%"]:58.3,
    ["ElementalMastery"]:187,
    ["EnergyRecharge"]:51.8,
    ["CritRate"]:31.1,
    ["CritDMG"]:62.2,
    ["HealingBonus"]:35.9,
    ["PhysicalDMGBonus"]: 58.3,
    ["PyroDMGBonus"]:46.6,
    ["HydroDMGBonus"]:46.6,
    ["AnemoDMGBonus"]:46.6,
    ["ElectroDMGBonus"]:46.6,
    ["CryoDMGBonus"]:46.6,
    ["GeoDMGBonus"]:46.6

}
let subStatOptions={
    [0]:"HP%",
    [1]:"HPflat",
    [2]:"ATK%",
    [3]:"ATKflat",
    [4]:"DEF%",
    [5]:"DEFflat",
    [6]:"ElementalMastery",
    [7]:"CritRate",
    [8]:"CritDMG",
    [9]:"EnergyRecharge"
};
let subStatValues={
    ["HP%"]:5.8,
    ["HPflat"]:299,
    ["ATK%"]:5.8,
    ["ATKflat"]:19,
    ["DEF%"]:7.3,
    ["DEFflat"]:23,
    ["ElementalMastery"]:23,
    ["CritRate"]:3.9,
    ["CritDMG"]:7.8,
    ["EnergyRecharge"]:6.5
}