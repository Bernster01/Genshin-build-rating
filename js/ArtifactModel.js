function Artifact(type,mainstat,substat1,substat2,substat3,substat4,set){
    this.Type = type;
    this.Mainstat = mainstat;
    this.Substats = [substat1,substat2,substat3,substat4];
    this.Set = set;
}
const sets ={
    [0]:"Archaic Petra",
    [1]:"Blizzard Strayer",
    [2]:"Bloodstained Chivalry",
    [3]:"Crimson Witch of Flames",
    [4]:"Emblem of Severed Fate",
    [5]:"Gladiator's Finale",
    [6]:"Heart of Depth",
    [7]:"Lavawalker",
    [8]:"Maiden Beloved",
    [9]:"Noblesse Oblige",
    [10]:"Pale Flame",
    [11]:"Retracing Bolide",
    [12]:"Shimenawa's Reminiscence",
    [13]:"Tenacity of the Millelith",
    [14]:"Thundering Fury",
    [15]:"Thundersoother",
    [16]:"Viridescent Venerer",
    [17]:"Wanderer's Troupe"
}
const artifactSets ={
    ["Archaic Petra"]:{
        Type: "Archaic Petra",
        twoPiece:{Type:"GeoDMGBonus",Value:15},
        fourPiece:{Type:"BonusDMG%",Value:35}
    },
    ["Blizzard Strayer"]:{
        Type: "Blizzard Strayer",
        twoPiece:{Type:"CryoBonusDMG",Value:15},
        fourPiece:{Type:"CritRate",Value:20}
    },
    ["Bloodstained Chivalry"]:{
        Type: "Bloodstained Chivalry",
        twoPiece:{Type:"PhysicalDMGBonus",Value:25},
        fourPiece:{Type:"ChargedAttack",Value:50}
    },
    ["Crimson Witch of Flames"]:{
        Type: "Crimson Witch of Flames",
        twoPiece:{Type:"PyroDMGBonus",Value:15}
        
    },
    ["Emblem of Severed Fate"]:{
        Type: "Emblem of Severed Fate",
        twoPiece:{Type:"EnergyRecharge",Value:20},
        fourPiece:{Type:"Emblem"}
        
    },
    ["Gladiator's Finale"]:{
        Type: "Gladiator's Finale",
        twoPiece:{Type:"ATK%",Value:18},
        fourPiece:{Type:"NormalAttack",Value:35},
        
    },
    ["Heart of Depth"]:{
        Type: "Heart of Depth",
        twoPiece:{Type:"HydroDMGBonus",Value:15},
        
    },
    ["Lavawalker"]:{
        Type: "Lavawalker",
        twoPiece:{Type:"",Value:null},
        fourPiece:{Type:"BonusDMG%",Value:0.35},
        
    },
    ["Maiden Beloved"]:{
        Type: "Maiden Beloved",
        twoPiece:{Type:"HealingBonus",Value:15},
        
    },
    ["Noblesse Oblige"]:{
        Type: "Noblesse Oblige",
        twoPiece:{Type:"BurstDMG%",Value:20},
        
    },
    ["Pale Flame"]:{
        Type: "Pale Flame",
        twoPiece:{Type:"PhysicalDMGBonus",Value:25}
    },
    ["Retracing Bolide"]:{
        Type: "Retracing Bolide",
        twoPiece:{Type:"ShieldStrength",Value:35},
        fourPiece:[
            {Type:"ChargedAttack",Value:40},
            {Type:"NormalAttack",Value:40}
        ]
    },
    ["Shimenawa's Reminiscence"]:{
        Type: "Shimenawa's Reminiscence",
        twoPiece:{Type:"ATK%",Value:18},
        fourPiece:[
            {Type:"ChargedAttack",Value:50},
            {Type:"NormalAttack",Value:50},
            {Type:"PlungeAttack",Value:50},
            {Type:"EnergyRecharge",Value:-20}
        ]
    },
    ["Tenacity of the Millelith"]:{
        Type: "Tenacity of the Millelith",
        twoPiece:{Type:"HP%",Value:20}
        
    },
    ["Thundering Fury"]:{
        Type: "Thundering Fury",
        twoPiece:{Type:"ElectroDMGBonus",Value:15}
        
    },
    ["Thundersoother"]:{
        Type: "Thundersoother",
        twoPiece:{Type:"",Value:null},
        fourPiece:{Type:"",Value:35}
        
    },
    ["Viridescent Venerer"]:{
        Type: "Viridescent Venerer",
        twoPiece:{Type:"AnemoDMGBonus",Value:15},
        fourPiece:{Type:"VV",Value:null}
        
    },
    ["Wanderer's Troupe"]:{
        Type: "Wanderer's Troupe",
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