function Artifact(type, mainstat, substat1, substat2, substat3, substat4, set) {
    this.Type = type;
    this.Mainstat = mainstat;
    this.Substats = [substat1, substat2, substat3, substat4];
    this.Set = set;
}
function getArtifactSetsAsHtmlOption() {
    let htmlCode = "<option value='None'>None</option>";
    for (let i = 0; i < setsList.length; i++) {
        htmlCode += `<option value="${setsList[i]}">${setsList[i]}</option>`;
    }
    return htmlCode;
}
const sets = {
    [0]:"Archaic_Petra",
    [1]:"Blizzard_Strayer",
    [2]:"Bloodstained_Chivalry",
    [3]:"Crimson_Witch_of_Flames",
    [4]:"Deepwood_Memories",
    [5]:"Desert_Pavilion_Chronicle",
    [6]:"Echoes_of_an_Offering",
    [7]:"Emblem_of_Severed_Fate",
    [8]:"Flower_of_Paradise_Lost",
    [9]:"Fragment_of_Harmonic_Whimsy",
    [10]:"Gilded_Dreams",
    [11]:"Gladiators_Finale",
    [12]:"Golden_Troupe",
    [13]:"Heart_of_Depth",
    [14]:"Husk_of_Opulent_Dreams",
    [15]:"Lavawalker",
    [16]:"Maiden_Beloved",
    [17]:"Marechaussee_Hunter",
    [18]:"Nighttime_Whispers_in_the_Echoing_Woods",
    [19]:"Noblesse_Oblige",
    [20]:"Nymphs_Dream",
    [21]:"Obsidian_Codex",
    [22]:"Ocean-Hued_Clam",
    [23]:"Pale_Flame",
    [24]:"Retracing_Bolide",
    [25]:"Shimenawas_Reminiscence",
    [26]:"Song_of_Days_Past",
    [27]:"Tenacity_of_the_Millelith",
    [28]:"Thundering_Fury",
    [29]:"Thundersoother",
    [30]:"Unfinished_Reverie",
    [31]:"Vermillion_Hereafter",
    [32]:"Viridescent_Venerer",
    [33]:"Vourukashas_Glow",
    [34]:"Wanderers_Troupe"
}
const setsList = [
    "Archaic_Petra",
    "Blizzard_Strayer",
    "Bloodstained_Chivalry",
    "Crimson_Witch_of_Flames",
    "Deepwood_Memories",
    "Desert_Pavilion_Chronicle",
    "Echoes_of_an_Offering",
    "Emblem_of_Severed_Fate",
    "Flower_of_Paradise_Lost",
    "Fragment_of_Harmonic_Whimsy",
    "Gilded_Dreams",
    "Gladiators_Finale",
    "Golden_Troupe",
    "Heart_of_Depth",
    "Husk_of_Opulent_Dreams",
    "Lavawalker",
    "Maiden_Beloved",
    "Marechaussee_Hunter",
    "Nighttime_Whispers_in_the_Echoing_Woods",
    "Noblesse_Oblige",
    "Nymphs_Dream",
    "Obsidian_Codex",
    "Ocean-Hued_Clam",
    "Pale_Flame",
    "Retracing_Bolide",
    "Shimenawas_Reminiscence",
    "Song_of_Days_Past",
    "Tenacity_of_the_Millelith",
    "Thundering_Fury",
    "Thundersoother",
    "Unfinished_Reverie",
    "Vermillion_Hereafter",
    "Viridescent_Venerer",
    "Vourukashas_Glow",
    "Wanderers_Troupe"
];

const artifactSets = {
    ["Archaic_Petra"]: {
        Type: "Archaic Petra",
        twoPiece: { Type: "GeoDMGBonus", Value: 15 },
        fourPiece: { Type: "Archaic Petra", Value: null }
    },
    ["Blizzard_Strayer"]: {
        Type: "Blizzard Strayer",
        twoPiece: { Type: "CryoBonusDMG", Value: 15 },
        fourPiece: { Type: "Blizzard Strayer", Value: null }
    },
    ["Bloodstained_Chivalry"]: {
        Type: "Bloodstained Chivalry",
        twoPiece: { Type: "PhysicalDMGBonus", Value: 25 },
        fourPiece: { Type: "Bloodstained Chivalry", Value: null }
    },
    ["Crimson_Witch_of_Flames"]: {
        Type: "Crimson Witch of Flames",
        twoPiece: { Type: "PyroDMGBonus", Value: 15 },
        fourPiece: { Type: "Crimson Witch of Flames", Value: null }

    },
    ["Deepwood_Memories"]: {
        Type: "Deepwood Memories",
        twoPiece: { Type: "DendroDMGBonus", Value: 15 },
        fourPiece: { Type: "Deepwood Memories", Value: null }
    },
    ["Desert_Pavilion_Chronicle"]: {
        Type: "Desert Pavilion Chronicle",
        twoPiece: { Type: "AnemoDMGBonus", Value: 15 },
        fourPiece: { Type: "Deset Pavilion Chronicle", Value: null }
    },
    ["Echoes_of_an_Offering"]: {
        Type: "Echoes of an Offering",
        twoPiece: { Type: "ATK%", Value: 18 },
        fourPiece: { Type: "Echoes" }

    },
    ["Emblem_of_Severed_Fate"]: {
        Type: "Emblem of Severed Fate",
        twoPiece: { Type: "EnergyRecharge", Value: 20 },
        fourPiece: { Type: "Emblem" }

    },
    ["Flower_of_Paradise_Lost"]: {
        Type: "Flower of Paradise Lost",
        twoPiece: { Type: "ElementalMastery", Value: 80 },
        fourPiece: { Type: "Flower of Paradise Lost", Value: 40 }
    },
    ["Fragment_of_Harmonic_Whimsy"]: {
        Type: "Fragment of Harmonic Whimsy",
        twoPiece: { Type: "ATK%", Value: 18 },
        fourPiece: { Type: "Fragment of Harmonic Whimsy", Value: null }
    },
    ["Gilded_Dreams"]: {
        Type: "Gilded Dreams",
        twoPiece: { Type: "ElementalMastery", Value: 80 },
        fourPiece: { Type: "Gilded Dreams", Value: null }
    },
    ["Gladiators_Finale"]: {
        Type: "Gladiators Finale",
        twoPiece: { Type: "ATK%", Value: 18 },
        fourPiece: { Type: "Gladiators Finale", Value: null }

    },
    ["Golden_Troupe"]: {
        Type: "Golden Troupe",
        twoPiece: { Type: "ElementalSkill", Value: 20 },
        fourPiece: { Type: "Golden Troupe", Value: 25 },

    },
    ["Heart_of_Depth"]: {
        Type: "Heart of Depth",
        twoPiece: { Type: "HydroDMGBonus", Value: 15 },
        fourPiece: { Type: "Heart of Depth", Value: null }

    },
    ["Husk_of_Opulent_Dreams"]: {
        Type: "Husk of Opulent Dreams",
        twoPiece: { Type: "DEF%", Value: 30 },
        fourPiece: [{ Type: "DEF%", Value: 24 }, { Type: "GeoDMGBonus", Value: 24 }]

    },
    ["Lavawalker"]: {
        Type: "Lavawalker",
        twoPiece: { Type: "", Value: null },
        fourPiece: { Type: "Lavawalker", Value: null }

    },
    ["Maiden_Beloved"]: {
        Type: "Maiden Beloved",
        twoPiece: { Type: "HealingBonus", Value: 15 },
        fourPiece: { Type: "Maiden Beloved", Value: null }

    },
    ["Marechaussee_Hunter"]: {
        Type: "Marechaussee Hunter",
        twoPiece: [{ Type: "NormalAttack", Value: 15 }, { Type: "ChargedAttack", Value: 15 }],
        fourPiece: { Type: "Marechaussee Hunter", Value: 12 }

    },
    ["Nighttime_Whispers_in_the_Echoing_Woods"]: {
        Type: "Nighttime Whispers in the Echoing Woods",
        twoPiece: { Type: "ATK%", Value: 18 },
        fourPiece: { Type: "Nighttime Whispers in the Echoing Woods", Value: null }

    },
    ["Noblesse_Oblige"]: {
        Type: "Noblesse Oblige",
        twoPiece: { Type: "BurstDMG%", Value: 20 },
        fourPiece: { Type: "Noblesse Oblige", Value: null }

    },
    ["Nymphs_Dream"]: {
        Type: "Nymphs Dream",
        twoPiece: { Type: "HydroDMGBonus", Value: 15 },
        fourPiece: { Type: "Nymphs Dream", Value: null }

    }, 
    ["Obsidian_Codex"]: {
        Type: "Obsidian Codex",
        twoPiece: { Type: "AddativeBonusDMG", Value: 15 },
        fourPiece: { Type: "Obsidian_Codex", Value: null }

    },
    ["Ocean-Hued_Clam"]: {
        Type: "Ocean-Hued Clam",
        twoPiece: { Type: "HealingBonus", Value: 15 },
        fourPiece: { Type: "Ocean-Hued Clam", Value: null }

    },
    ["Pale_Flame"]: {
        Type: "Pale Flame",
        twoPiece: { Type: "PhysicalDMGBonus", Value: 25 },
        fourPiece: { Type: "Pale Flame", Value: null }
    },
    ["Retracing_Bolide"]: {
        Type: "Retracing Bolide",
        twoPiece: { Type: "ShieldStrength", Value: 35 },
        fourPiece: { Type: "Retracing Bolide", Value: null }
       
    },
    ["Shimenawas_Reminiscence"]: {
        Type: "Shimenawas Reminiscence",
        twoPiece: { Type: "ATK%", Value: 18 },
        fourPiece: { Type: "Shimenawas Reminiscence", Value: null }
    },
    ["Song_of_Days_Past"]: {
        Type: "Song of Days Past",
        twoPiece: { Type: "HealingBonus", Value: 15 },
        fourPiece: { Type: "Ocean-Hued Clam", Value: null }

    },
    ["Tenacity_of_the_Millelith"]: {
        Type: "Tenacity of the Millelith",
        twoPiece: { Type: "HP%", Value: 20 },
        fourPiece: { Type: "Tenacity of the Millelith", Value: null }
        

    },
    ["Thundering_Fury"]: {
        Type: "Thundering Fury",
        twoPiece: { Type: "ElectroDMGBonus", Value: 15 },
        fourPiece: { Type: "Thundersoother", Value: null }
        

    },
    ["Thundersoother"]: {
        Type: "Thundersoother",
        twoPiece: { Type: "", Value: null },
        fourPiece: { Type: "Thundersoother", Value: null }

    },
    ["Unfinished_Reverie"]: {
        Type: "Unfinished Reverie",
        twoPiece: { Type: "ATK%", Value: 18 },
        fourPiece: { Type: "Unfinished Reverie", Value: null }

    },
    ["Vermillion_Hereafter"]: {
        Type: "Vermillion Hereafter",
        twoPiece: { Type: "ATK%", Value: 18 },
        fourPiece: { Type: "Vermillion Hereafter", Value: null }

    },
    ["Viridescent_Venerer"]: {
        Type: "Viridescent Venerer",
        twoPiece: { Type: "AnemoDMGBonus", Value: 15 },
        fourPiece: { Type: "VV", Value: null }

    },
    ["Vourukashas_Glow"]: {
        Type: "Vourukashas Glow",
        twoPiece: { Type: "HP%", Value: 20 },
        fourPiece: [{ Type: "ElementalSkill", Value: 10 }, { Type: "ElementalBurst", Value: 10 }]

    },
    ["Wanderers_Troupe"]: {
        Type: "Wanderers Troupe",
        twoPiece: { Type: "ElementalMastery", Value: 80 },
       
    }
}
let artifactPieces = {
    [0]: "Circlet",
    [1]: "Flower",
    [2]: "Plume",
    [3]: "Sands",
    [4]: "Goblet"
};
let mainStatCircletOptions = {
    [0]: "HP%",
    [1]: "ATK%",
    [2]: "DEF%",
    [3]: "ElementalMastery",
    [4]: "CritRate",
    [5]: "CritDMG",
    [6]: "HealingBonus"
};
let mainStatFlowerOptions = { [0]: "HPflat" };
let mainStatPlumeOptions = { [0]: "ATKflat" };
let mainStatSandsOptions = {
    [0]: "HP%",
    [1]: "ATK%",
    [2]: "DEF%",
    [3]: "ElementalMastery",
    [4]: "EnergyRecharge"
};
let mainStatGobletOptions = {
    [0]: "HP%",
    [1]: "ATK%",
    [2]: "DEF%",
    [3]: "ElementalMastery",
    [4]: "PyroDMGBonus",
    [5]: "HydroDMGBonus",
    [6]: "AnemoDMGBonus",
    [7]: "ElectroDMGBonus",
    [8]: "CryoDMGBonus",
    [9]: "GeoDMGBonus",
    [10]: "PhysicalDMGBonus"

};
let mainStatValues = {
    ["HP%"]: 46.6,
    ["HPflat"]: 4780,
    ["ATK%"]: 46.6,
    ["ATKflat"]: 311,
    ["DEF%"]: 58.3,
    ["ElementalMastery"]: 187,
    ["EnergyRecharge"]: 51.8,
    ["CritRate"]: 31.1,
    ["CritDMG"]: 62.2,
    ["HealingBonus"]: 35.9,
    ["PhysicalDMGBonus"]: 58.3,
    ["PyroDMGBonus"]: 46.6,
    ["HydroDMGBonus"]: 46.6,
    ["AnemoDMGBonus"]: 46.6,
    ["ElectroDMGBonus"]: 46.6,
    ["CryoDMGBonus"]: 46.6,
    ["GeoDMGBonus"]: 46.6

}
let subStatOptions = {
    [0]: "HP%",
    [1]: "HPflat",
    [2]: "ATK%",
    [3]: "ATKflat",
    [4]: "DEF%",
    [5]: "DEFflat",
    [6]: "ElementalMastery",
    [7]: "CritRate",
    [8]: "CritDMG",
    [9]: "EnergyRecharge"
};
let subStatValues = {
    ["HP%"]: 5.8,
    ["HPflat"]: 299,
    ["ATK%"]: 5.8,
    ["ATKflat"]: 19,
    ["DEF%"]: 7.3,
    ["DEFflat"]: 23,
    ["ElementalMastery"]: 23,
    ["CritRate"]: 3.9,
    ["CritDMG"]: 7.8,
    ["EnergyRecharge"]: 6.5
}