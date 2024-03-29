const Albedo = {
    name: "Albedo",
    src: "Assets/Characters/Albedo/Albedo.png",
    card: "Assets/Characters/Albedo/Character_Albedo_Portrait.webp",
    element: "GeoCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 51,
            ["20a"]: 68,
            ["40b"]: 101,
            ["40a"]: 113,
            ["50b"]: 130,
            ["50a"]: 146,
            ["60b"]: 163,
            ["60a"]: 175,
            ["70b"]: 192,
            ["70a"]: 204,
            ["80b"]: 222,
            ["80a"]: 233,
            ["90b"]: 251
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1030,
            ["20b"]: 2671,
            ["20a"]: 3554,
            ["40b"]: 5317,
            ["40a"]: 5944,
            ["50b"]: 6839,
            ["50a"]: 7675,
            ["60b"]: 8579,
            ["60a"]: 9207,
            ["70b"]: 10119,
            ["70a"]: 10746,
            ["80b"]: 11669,
            ["80a"]: 12296,
            ["90b"]: 13226
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 68,
            ["20b"]: 177,
            ["20a"]: 235,
            ["40b"]: 352,
            ["40a"]: 394,
            ["50b"]: 453,
            ["50a"]: 508,
            ["60b"]: 568,
            ["60a"]: 610,
            ["70b"]: 670,
            ["70a"]: 712,
            ["80b"]: 773,
            ["80a"]: 815,
            ["90b"]: 876
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N5", "C"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36.74 / 100
                case 2:
                    return 39.73 / 100
                case 3:
                    return 42.72 / 100
                case 4:
                    return 46.99 / 100
                case 5:
                    return 49.98 / 100
                case 6:
                    return 53.4 / 100
                case 7:
                    return 58.1 / 100
                case 8:
                    return 62.8 / 100
                case 9:
                    return 67.5 / 100
                case 10:
                    return 72.62 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36.74 / 100
                case 2:
                    return 39.73 / 100
                case 3:
                    return 42.72 / 100
                case 4:
                    return 46.99 / 100
                case 5:
                    return 49.98 / 100
                case 6:
                    return 53.4 / 100
                case 7:
                    return 58.1 / 100
                case 8:
                    return 62.8 / 100
                case 9:
                    return 67.5 / 100
                case 10:
                    return 72.62 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.45 / 100
                case 2:
                    return 51.32 / 100
                case 3:
                    return 55.18 / 100
                case 4:
                    return 60.17 / 100
                case 5:
                    return 64.56 / 100
                case 6:
                    return 68.97 / 100
                case 7:
                    return 75.04 / 100
                case 8:
                    return 81.11 / 100
                case 9:
                    return 87.18 / 100
                case 10:
                    return 93.81 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 49.75 / 100
                case 2:
                    return 53.8 / 100
                case 3:
                    return 57.85 / 100
                case 4:
                    return 63.63 / 100
                case 5:
                    return 67.68 / 100
                case 6:
                    return 72.31 / 100
                case 7:
                    return 78.68 / 100
                case 8:
                    return 85.04 / 100
                case 9:
                    return 91.4 / 100
                case 10:
                    return 98.34 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 62.07 / 100
                case 2:
                    return 67.13 / 100
                case 3:
                    return 72.18 / 100
                case 4:
                    return 79.4 / 100
                case 5:
                    return 84.45 / 100
                case 6:
                    return 90.22 / 100
                case 7:
                    return 98.16 / 100
                case 8:
                    return 106.1 / 100
                case 9:
                    return 114.04 / 100
                case 10:
                    return 122.7 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 107.5 / 100
                case 2:
                    return 116.25 / 100
                case 3:
                    return 125 / 100
                case 4:
                    return 137.5 / 100
                case 5:
                    return 146.25 / 100
                case 6:
                    return 156.25 / 100
                case 7:
                    return 170 / 100
                case 8:
                    return 183.75 / 100
                case 9:
                    return 197.5 / 100
                case 10:
                    return 212.5 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.2,
            ["50b"]: 7.2,
            ["50a"]: 14.4,
            ["60b"]: 14.4,
            ["60a"]: 14.4,
            ["70b"]: 14.4,
            ["70a"]: 21.6,
            ["80b"]: 21.6,
            ["80a"]: 28.8,
            ["90b"]: 28.8
        }

        return { Type: "GeoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: solarIsotoma,
        Level: 1
    },
    elementalBurst: {
        Skill: tectonicTide,
        Level: 1
    },
    passive1: {
        Type: "BonusDMG%",
        Value: 12
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Aloy = {
    name: "Aloy",
    src: "Assets/Characters/Aloy/Aloy.png",
    card: "Assets/Characters/Aloy/Character_Aloy_Portrait.webp",
    element: "CryoCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 47,
            ["20a"]: 63,
            ["40b"]: 94,
            ["40a"]: 105,
            ["50b"]: 121,
            ["50a"]: 136,
            ["60b"]: 152,
            ["60a"]: 163,
            ["70b"]: 179,
            ["70a"]: 190,
            ["80b"]: 206,
            ["80a"]: 217,
            ["90b"]: 234
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 848,
            ["20b"]: 2201,
            ["20a"]: 2928,
            ["40b"]: 4382,
            ["40a"]: 4899,
            ["50b"]: 5636,
            ["50a"]: 6325,
            ["60b"]: 7070,
            ["60a"]: 7587,
            ["70b"]: 8339,
            ["70a"]: 8856,
            ["80b"]: 9616,
            ["80a"]: 10133,
            ["90b"]: 10899
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 53,
            ["20b"]: 137,
            ["20a"]: 182,
            ["40b"]: 272,
            ["40a"]: 304,
            ["50b"]: 350,
            ["50a"]: 393,
            ["60b"]: 439,
            ["60a"]: 471,
            ["70b"]: 517,
            ["70a"]: 550,
            ["80b"]: 597,
            ["80a"]: 629,
            ["90b"]: 676
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "Q"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.88 / 100
                case 2:
                    return 47.94 / 100
                case 3:
                    return 51 / 100
                case 4:
                    return 55.08 / 100
                case 5:
                    return 58.14 / 100
                case 6:
                    return 61.71 / 100
                case 7:
                    return 66.3 / 100
                case 8:
                    return 70.89 / 100
                case 9:
                    return 75.48 / 100
                case 10:
                    return 80.07 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.12 / 100
                case 2:
                    return 46.06 / 100
                case 3:
                    return 49 / 100
                case 4:
                    return 52.92 / 100
                case 5:
                    return 55.86 / 100
                case 6:
                    return 59.29 / 100
                case 7:
                    return 63.7 / 100
                case 8:
                    return 68.11 / 100
                case 9:
                    return 72.52 / 100
                case 10:
                    return 76.93 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 52.8 / 100
                case 2:
                    return 56.4 / 100
                case 3:
                    return 60 / 100
                case 4:
                    return 64.8 / 100
                case 5:
                    return 68.4 / 100
                case 6:
                    return 72.6 / 100
                case 7:
                    return 78 / 100
                case 8:
                    return 83.4 / 100
                case 9:
                    return 88.8 / 100
                case 10:
                    return 94.2 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 65.65 / 100
                case 2:
                    return 70.12 / 100
                case 3:
                    return 74.6 / 100
                case 4:
                    return 80.57 / 100
                case 5:
                    return 85.04 / 100
                case 6:
                    return 90.27 / 100
                case 7:
                    return 96.98 / 100
                case 8:
                    return 103.69 / 100
                case 9:
                    return 110.41 / 100
                case 10:
                    return 117.12 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.2,
            ["50b"]: 7.2,
            ["50a"]: 14.4,
            ["60b"]: 14.4,
            ["60a"]: 14.4,
            ["70b"]: 14.4,
            ["70a"]: 21.6,
            ["80b"]: 21.6,
            ["80a"]: 28.8,
            ["90b"]: 28.8
        }

        return { Type: "CryoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: frozenWilds,
        Level: 1
    },
    elementalBurst: {
        Skill: propheciesofDawn,
        Level: 1
    },
    passive1: {
        Type: "CombatOverride",
        Value: null
    },
    passive2: {
        Type: "CryoDMGBonus",
        Value: 23.67
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Amber = {
    name: "Amber",
    src: "Assets/Characters/Amber/Amber.png",
    card: "Assets/Characters/Amber/Character_Amber_Portrait.webp",
    element: "PyroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19,
            ["20b"]: 48,
            ["20a"]: 62,
            ["40b"]: 93,
            ["40a"]: 103,
            ["50b"]: 118,
            ["50a"]: 131,
            ["60b"]: 147,
            ["60a"]: 157,
            ["70b"]: 172,
            ["70a"]: 182,
            ["80b"]: 198,
            ["80a"]: 208,
            ["90b"]: 223
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 793,
            ["20b"]: 2038,
            ["20a"]: 2630,
            ["40b"]: 3940,
            ["40a"]: 4361,
            ["50b"]: 5016,
            ["50a"]: 5578,
            ["60b"]: 6233,
            ["60a"]: 6654,
            ["70b"]: 7309,
            ["70a"]: 7730,
            ["80b"]: 8385,
            ["80a"]: 8806,
            ["90b"]: 9461
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 50,
            ["20b"]: 129,
            ["20a"]: 167,
            ["40b"]: 250,
            ["40a"]: 277,
            ["50b"]: 318,
            ["50a"]: 354,
            ["60b"]: 396,
            ["60a"]: 422,
            ["70b"]: 464,
            ["70a"]: 491,
            ["80b"]: 532,
            ["80a"]: 559,
            ["90b"]: 601
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "C", "C", "C", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["E", "Q"]
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36.12 / 100
                case 2:
                    return 39.06 / 100
                case 3:
                    return 42 / 100
                case 4:
                    return 46.2 / 100
                case 5:
                    return 49.14 / 100
                case 6:
                    return 52.5 / 100
                case 7:
                    return 57.12 / 100
                case 8:
                    return 61.74 / 100
                case 9:
                    return 66.36 / 100
                case 10:
                    return 71.4 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36.12 / 100
                case 2:
                    return 39.06 / 100
                case 3:
                    return 42 / 100
                case 4:
                    return 46.2 / 100
                case 5:
                    return 49.14 / 100
                case 6:
                    return 52.5 / 100
                case 7:
                    return 57.12 / 100
                case 8:
                    return 61.74 / 100
                case 9:
                    return 66.36 / 100
                case 10:
                    return 71.4 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 46.86 / 100
                case 2:
                    return 50.22 / 100
                case 3:
                    return 54 / 100
                case 4:
                    return 59.4 / 100
                case 5:
                    return 63.18 / 100
                case 6:
                    return 67.5 / 100
                case 7:
                    return 73.44 / 100
                case 8:
                    return 79.38 / 100
                case 9:
                    return 85.32 / 100
                case 10:
                    return 91.8 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.3 / 100
                case 2:
                    return 51.15 / 100
                case 3:
                    return 55 / 100
                case 4:
                    return 60.5 / 100
                case 5:
                    return 64.35 / 100
                case 6:
                    return 68.75 / 100
                case 7:
                    return 74.8 / 100
                case 8:
                    return 80.85 / 100
                case 9:
                    return 86.9 / 100
                case 10:
                    return 93.5 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 59.34 / 100
                case 2:
                    return 64.17 / 100
                case 3:
                    return 69 / 100
                case 4:
                    return 75.9 / 100
                case 5:
                    return 80.73 / 100
                case 6:
                    return 86.25 / 100
                case 7:
                    return 93.84 / 100
                case 8:
                    return 101.43 / 100
                case 9:
                    return 109.02 / 100
                case 10:
                    return 117.3 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 124 / 100
                case 2:
                    return 133.3 / 100
                case 3:
                    return 142.6 / 100
                case 4:
                    return 155 / 100
                case 5:
                    return 164.3 / 100
                case 6:
                    return 173.6 / 100
                case 7:
                    return 186 / 100
                case 8:
                    return 198.4 / 100
                case 9:
                    return 210.8 / 100
                case 10:
                    return 223.2 / 100
            }
        },
        Element: "PyroDMGBonus",
        isReaction: true
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: explosivePuppet,
        Level: 1
    },
    elementalBurst: {
        Skill: fieryRain,
        Level: 1
    },
    passive1: {
        Type: "BurstBuff",
        Buff: {
            Type: "CritRate",
            Value: "10"
        }
    },
    passive2: {
        Type: "ATK",
        Value: 15
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Ayaka = {
    name: "Ayaka",
    src: "Assets/Characters/Ayaka/Ayaka.png",
    card: "Assets/Characters/Ayaka/Character_Kamisato_Ayaka_Portrait.webp",
    element: "CryoCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 27,
            ["20b"]: 69,
            ["20a"]: 92,
            ["40b"]: 138,
            ["40a"]: 154,
            ["50b"]: 177,
            ["50a"]: 198,
            ["60b"]: 222,
            ["60a"]: 238,
            ["70b"]: 262,
            ["70a"]: 278,
            ["80b"]: 302,
            ["80a"]: 318,
            ["90b"]: 342
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1001,
            ["20b"]: 2597,
            ["20a"]: 3455,
            ["40b"]: 5170,
            ["40a"]: 5779,
            ["50b"]: 6649,
            ["50a"]: 7462,
            ["60b"]: 8341,
            ["60a"]: 8951,
            ["70b"]: 9838,
            ["70a"]: 10448,
            ["80b"]: 11345,
            ["80a"]: 11954,
            ["90b"]: 12858
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 61,
            ["20b"]: 158,
            ["20a"]: 211,
            ["40b"]: 315,
            ["40a"]: 352,
            ["50b"]: 405,
            ["50a"]: 455,
            ["60b"]: 509,
            ["60a"]: 546,
            ["70b"]: 600,
            ["70a"]: 637,
            ["80b"]: 692,
            ["80a"]: 729,
            ["90b"]: 784
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["N1", "Q", "E", "N1", "N2", "N3", "N4", "C"],
        ["Support"]: ["N1", "Q", "E"]
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1: case 2: case 3:
                    return (45.73 * (3.72 * level)) / 100
                case 4:
                    return 58.49 / 100
                case 5:
                    return 62.21 / 100
                case 6:
                    return 66.46 / 100
                case 7:
                    return 72.31 / 100
                case 8:
                    return 78.16 / 100
                case 9:
                    return 84.01 / 100
                case 10:
                    return 90.39 / 100
            }
        },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 48.68 / 100
                case 2:
                    return 52.65 / 100
                case 3:
                    return 56.61 / 100
                case 4:
                    return 62.27 / 100
                case 5:
                    return 66.23 / 100
                case 6:
                    return 70.76 / 100
                case 7:
                    return 76.99 / 100
                case 8:
                    return 83.22 / 100
                case 9:
                    return 89.44 / 100
                case 10:
                    return 96.24 / 100
            }
        },
        Element: "CryoDMGBonus",
        isReaction: false,
        scaling: "ATK"


    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 62.62 / 100
                case 2:
                    return 67.72 / 100
                case 3:
                    return 72.82 / 100
                case 4:
                    return 80.1 / 100
                case 5:
                    return 85.19 / 100
                case 6:
                    return 91.02 / 100
                case 7:
                    return 99.03 / 100
                case 8:
                    return 107.04 / 100
                case 9:
                    return 115.05 / 100
                case 10:
                    return 123.79 / 100
            }
        },
        Element: "CryoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (22.65 * 3) / 100
                case 2:
                    return (24.49 * 3) / 100
                case 3:
                    return (26.33 * 3) / 100
                case 4:
                    return (28.97 * 3) / 100
                case 5:
                    return (30.81 * 3) / 100
                case 6:
                    return (32.92 * 3) / 100
                case 7:
                    return (35.81 * 3) / 100
                case 8:
                    return (38.71 * 3) / 100
                case 9:
                    return (41.61 * 3) / 100
                case 10:
                    return (44.77 * 3) / 100
            }
        },
        Element: "CryoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 78.18 / 100
                case 2:
                    return 84.55 / 100
                case 3:
                    return 90.91 / 100
                case 4:
                    return 100 / 100
                case 5:
                    return 106.36 / 100
                case 6:
                    return 113.64 / 100
                case 7:
                    return 123.64 / 100
                case 8:
                    return 133.64 / 100
                case 9:
                    return 143.64 / 100
                case 10:
                    return 154.55 / 100
            }
        },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (55.13 * 3) / 100
                case 2:
                    return (59.61 * 3) / 100
                case 3:
                    return (64.1 * 3) / 100
                case 4:
                    return (70.51 * 3) / 100
                case 5:
                    return (75 * 3) / 100
                case 6:
                    return (80.13 * 3) / 100
                case 7:
                    return (87.18 * 3) / 100
                case 8:
                    return (94.23 * 3) / 100
                case 9:
                    return (101.28 * 3) / 100
                case 10:
                    return (108.97 * 3) / 100
            }
        },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 9.6,
            ["50b"]: 9.6,
            ["50a"]: 19.2,
            ["60b"]: 19.2,
            ["60a"]: 19.2,
            ["70b"]: 19.2,
            ["70a"]: 28.8,
            ["80b"]: 28.8,
            ["80a"]: 38.4,
            ["90b"]: 38.4
        }

        return { Type: "critDMG", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: hyouka,
        Level: 1
    },
    elementalBurst: {
        Skill: soumetsu,
        Level: 1
    },
    passive1: {
        Type: "ChargedAttack",
        Value: 30
    },
    passive2: {
        Type: "CryoDMGBonus",
        Value: 18
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }

};
const Ayato = {
    name: "Ayato",
    src: "Assets/Characters/Ayato/Ayato.png",
    card: "Assets/Characters/Ayato/Character_Kamisato_Ayato_Portrait.webp",
    element: "HydroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 24,
            ["20b"]: 61,
            ["20a"]: 81,
            ["40b"]: 120,
            ["40a"]: 135,
            ["50b"]: 155,
            ["50a"]: 174,
            ["60b"]: 194,
            ["60a"]: 208,
            ["70b"]: 229,
            ["70a"]: 243,
            ["80b"]: 264,
            ["80a"]: 278,
            ["90b"]: 299
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1068,
            ["20b"]: 2770,
            ["20a"]: 3685,
            ["40b"]: 5514,
            ["40a"]: 6165,
            ["50b"]: 7092,
            ["50a"]: 7960,
            ["60b"]: 8897,
            ["60a"]: 9548,
            ["70b"]: 10494,
            ["70a"]: 11144,
            ["80b"]: 12101,
            ["80a"]: 12751,
            ["90b"]: 13715
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 60,
            ["20b"]: 155,
            ["20a"]: 206,
            ["40b"]: 309,
            ["40a"]: 345,
            ["50b"]: 397,
            ["50a"]: 446,
            ["60b"]: 499,
            ["60a"]: 535,
            ["70b"]: 588,
            ["70a"]: 624,
            ["80b"]: 678,
            ["80a"]: 715,
            ["90b"]: 769
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.96 / 100
                case 2:
                    return 48.62 / 100
                case 3:
                    return 52.28 / 100
                case 4:
                    return 57.51 / 100
                case 5:
                    return 61.17 / 100
                case 6:
                    return 65.35 / 100
                case 7:
                    return 71.1 / 100
                case 8:
                    return 76.85 / 100
                case 9:
                    return 82.6 / 100
                case 10:
                    return 88.88 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.16 / 100
                case 2:
                    return 51 / 100
                case 3:
                    return 54.83 / 100
                case 4:
                    return 60.32 / 100
                case 5:
                    return 64.16 / 100
                case 6:
                    return 68.54 / 100
                case 7:
                    return 74.57 / 100
                case 8:
                    return 80.61 / 100
                case 9:
                    return 86.64 / 100
                case 10:
                    return 93.22 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 58.61 / 100
                case 2:
                    return 63.38 / 100
                case 3:
                    return 68.15 / 100
                case 4:
                    return 74.97 / 100
                case 5:
                    return 79.74 / 100
                case 6:
                    return 85.19 / 100
                case 7:
                    return 92.69 / 100
                case 8:
                    return 100.19 / 100
                case 9:
                    return 107.68 / 100
                case 10:
                    return 115.86 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (29.45 * 2) / 100
                case 2:
                    return (31.85 * 2) / 100
                case 3:
                    return (34.24 * 2) / 100
                case 4:
                    return (37.67 * 2) / 100
                case 5:
                    return (40.06 * 2) / 100
                case 6:
                    return (42.8 * 2) / 100
                case 7:
                    return (46.57 * 2) / 100
                case 8:
                    return (50.34 * 2) / 100
                case 9:
                    return (54.1 * 2) / 100
                case 10:
                    return (58.21 * 2) / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 75.6 / 100
                case 2:
                    return 81.76 / 100
                case 3:
                    return 87.91 / 100
                case 4:
                    return 96.7 / 100
                case 5:
                    return 102.86 / 100
                case 6:
                    return 109.89 / 100
                case 7:
                    return 119.56 / 100
                case 8:
                    return 129.23 / 100
                case 9:
                    return 138.9 / 100
                case 10:
                    return 249.45 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 9.6,
            ["50b"]: 9.6,
            ["50a"]: 19.2,
            ["60b"]: 19.2,
            ["60a"]: 19.2,
            ["70b"]: 19.2,
            ["70a"]: 28.8,
            ["80b"]: 28.8,
            ["80a"]: 38.4,
            ["90b"]: 38.4
        }

        return { Type: "CritDMG", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: kyouka,
        Level: 1
    },
    elementalBurst: {
        Skill: suiyuu,
        Level: 1
    },
    passive1: {
        Type: "Mine Wo Matioshi Kiyotaki",
        Value: null
    },
    passive2: {
        Type: "EnergyRecharge",
        Value: 20
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Barbara = {
    name: "Barbara",
    src: "Assets/Characters/Barbara/Barbara.png",
    card: "Assets/Characters/Barbara/Character_Barbara_Portrait.webp",
    element: "HydroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 13,
            ["20b"]: 34,
            ["20a"]: 44,
            ["40b"]: 66,
            ["40a"]: 73,
            ["50b"]: 84,
            ["50a"]: 94,
            ["60b"]: 105,
            ["60a"]: 112,
            ["70b"]: 123,
            ["70a"]: 130,
            ["80b"]: 141,
            ["80a"]: 148,
            ["90b"]: 159
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 821,
            ["20b"]: 2108,
            ["20a"]: 2721,
            ["40b"]: 4076,
            ["40a"]: 4512,
            ["50b"]: 5189,
            ["50a"]: 5770,
            ["60b"]: 6448,
            ["60a"]: 6884,
            ["70b"]: 7561,
            ["70a"]: 7996,
            ["80b"]: 8674,
            ["80a"]: 9110,
            ["90b"]: 9787
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 56,
            ["20b"]: 144,
            ["20a"]: 186,
            ["40b"]: 279,
            ["40a"]: 308,
            ["50b"]: 355,
            ["50a"]: 394,
            ["60b"]: 441,
            ["60a"]: 470,
            ["70b"]: 517,
            ["70a"]: 546,
            ["80b"]: 593,
            ["80a"]: 623,
            ["90b"]: 669
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Healer",
    sequence: {
        ["Dps"]: ["N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C"],
        ["Support"]: ["Q", "E", "C", "C", "C"]
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 37.84 / 100
                case 2:
                    return 40.68 / 100
                case 3:
                    return 43.52 / 100
                case 4:
                    return 47.3 / 100
                case 5:
                    return 50.14 / 100
                case 6:
                    return 52.98 / 100
                case 7:
                    return 56.76 / 100
                case 8:
                    return 60.54 / 100
                case 9:
                    return 64.33 / 100
                case 10:
                    return 68.11 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 35.52 / 100
                case 2:
                    return 38.18 / 100
                case 3:
                    return 40.85 / 100
                case 4:
                    return 44.4 / 100
                case 5:
                    return 47.06 / 100
                case 6:
                    return 49.73 / 100
                case 7:
                    return 53.28 / 100
                case 8:
                    return 56.83 / 100
                case 9:
                    return 60.38 / 100
                case 10:
                    return 63.94 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 41.04 / 100
                case 2:
                    return 44.12 / 100
                case 3:
                    return 47.2 / 100
                case 4:
                    return 51.3 / 100
                case 5:
                    return 54.38 / 100
                case 6:
                    return 57.46 / 100
                case 7:
                    return 61.56 / 100
                case 8:
                    return 65.66 / 100
                case 9:
                    return 69.77 / 100
                case 10:
                    return 73.87 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 55.2 / 100
                case 2:
                    return 59.34 / 100
                case 3:
                    return 63.48 / 100
                case 4:
                    return 69 / 100
                case 5:
                    return 73.14 / 100
                case 6:
                    return 77.28 / 100
                case 7:
                    return 82.8 / 100
                case 8:
                    return 88.32 / 100
                case 9:
                    return 93.84 / 100
                case 10:
                    return 99.36 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0
        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 166.24 / 100
                case 2:
                    return 178.71 / 100
                case 3:
                    return 191.18 / 100
                case 4:
                    return 207.8 / 100
                case 5:
                    return 220.27 / 100
                case 6:
                    return 232.74 / 100
                case 7:
                    return 249.36 / 100
                case 8:
                    return 265.98 / 100
                case 9:
                    return 282.61 / 100
                case 10:
                    return 299.23 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "HP%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: letTheShowBegin,
        Level: 1
    },
    elementalBurst: {
        Skill: shiningMiracle,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Encore",
        Value: 0.2
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Beidou = {
    name: "Beidou",
    src: "Assets/Characters/Beidou/Beidou.png",
    card: "Assets/Characters/Beidou/Character_Beidou_Portrait.webp",
    element: "ElectroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19,
            ["20b"]: 48,
            ["20a"]: 63,
            ["40b"]: 94,
            ["40a"]: 104,
            ["50b"]: 119,
            ["50a"]: 133,
            ["60b"]: 148,
            ["60a"]: 158,
            ["70b"]: 174,
            ["70a"]: 184,
            ["80b"]: 200,
            ["80a"]: 210,
            ["90b"]: 225
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1094,
            ["20b"]: 2811,
            ["20a"]: 3628,
            ["40b"]: 5435,
            ["40a"]: 6015,
            ["50b"]: 6919,
            ["50a"]: 7694,
            ["60b"]: 8597,
            ["60a"]: 9178,
            ["70b"]: 10081,
            ["70a"]: 10662,
            ["80b"]: 11565,
            ["80a"]: 12146,
            ["90b"]: 13050
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 54,
            ["20b"]: 140,
            ["20a"]: 180,
            ["40b"]: 270,
            ["40a"]: 299,
            ["50b"]: 344,
            ["50a"]: 382,
            ["60b"]: 427,
            ["60a"]: 456,
            ["70b"]: 501,
            ["70a"]: 530,
            ["80b"]: 575,
            ["80a"]: 603,
            ["90b"]: 648
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 180,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["N1", "N2", "E", "N1", "N2", "Q", "N1", "N2", "E"],
        ["Support"]: ["E", "Q",]
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 71.12 / 100
                case 2:
                    return 76.91 / 100
                case 3:
                    return 82.7 / 100
                case 4:
                    return 90.97 / 100
                case 5:
                    return 96.76 / 100
                case 6:
                    return 103.38 / 100
                case 7:
                    return 112.47 / 100
                case 8:
                    return 121.57 / 100
                case 9:
                    return 130.67 / 100
                case 10:
                    return 140.59 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 70.86 / 100
                case 2:
                    return 76.63 / 100
                case 3:
                    return 82.4 / 100
                case 4:
                    return 90.64 / 100
                case 5:
                    return 96.41 / 100
                case 6:
                    return 103 / 100
                case 7:
                    return 112.06 / 100
                case 8:
                    return 121.13 / 100
                case 9:
                    return 130.19 / 100
                case 10:
                    return 140.08 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 88.32 / 100
                case 2:
                    return 95.51 / 100
                case 3:
                    return 102.7 / 100
                case 4:
                    return 112.97 / 100
                case 5:
                    return 120.16 / 100
                case 6:
                    return 128.38 / 100
                case 7:
                    return 139.67 / 100
                case 8:
                    return 150.97 / 100
                case 9:
                    return 162.27 / 100
                case 10:
                    return 174.59 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 86.52 / 100
                case 2:
                    return 93.56 / 100
                case 3:
                    return 100.6 / 100
                case 4:
                    return 110.66 / 100
                case 5:
                    return 117.7 / 100
                case 6:
                    return 125.75 / 100
                case 7:
                    return 136.82 / 100
                case 8:
                    return 147.88 / 100
                case 9:
                    return 158.95 / 100
                case 10:
                    return 171.02 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 112.14 / 100
                case 2:
                    return 121.27 / 100
                case 3:
                    return 130.4 / 100
                case 4:
                    return 143.44 / 100
                case 5:
                    return 152.57 / 100
                case 6:
                    return 163 / 100
                case 7:
                    return 177.34 / 100
                case 8:
                    return 191.69 / 100
                case 9:
                    return 206.03 / 100
                case 10:
                    return 221.68 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ElectroDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: tidecaller,
        Level: 1
    },
    elementalBurst: {
        Skill: stormbreaker,
        Level: 1
    },
    passive1: {
        Type: "Lightning Storm",
        Value: null
    },
    passive2: {
        Type: "NormalAttack",
        Value: 30
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Bennett = {
    name: "Bennett",
    src: "Assets/Characters/Bennet/Bennett.png",
    card: "Assets/Characters/Bennet/Character_Bennett_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16,
            ["20b"]: 41,
            ["20a"]: 53,
            ["40b"]: 80,
            ["40a"]: 88,
            ["50b"]: 101,
            ["50a"]: 113,
            ["60b"]: 126,
            ["60a"]: 134,
            ["70b"]: 148,
            ["70a"]: 156,
            ["80b"]: 169,
            ["80a"]: 178,
            ["90b"]: 191
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1039,
            ["20b"]: 2670,
            ["20a"]: 3447,
            ["40b"]: 5163,
            ["40a"]: 5715,
            ["50b"]: 6573,
            ["50a"]: 7309,
            ["60b"]: 8168,
            ["60a"]: 8719,
            ["70b"]: 9577,
            ["70a"]: 10129,
            ["80b"]: 10987,
            ["80a"]: 11539,
            ["90b"]: 12397
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 65,
            ["20b"]: 166,
            ["20a"]: 214,
            ["40b"]: 321,
            ["40a"]: 356,
            ["50b"]: 409,
            ["50a"]: 455,
            ["60b"]: 508,
            ["60a"]: 542,
            ["70b"]: 596,
            ["70a"]: 630,
            ["80b"]: 684,
            ["80a"]: 718,
            ["90b"]: 771
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 160,
    supportType: "ATKBooster",
    supportType2: "Healer",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "E", "N1", "N2", "N3"],
        ["Support"]: ["Q", "E",]
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.55 / 100
                case 2:
                    return 48.17 / 100
                case 3:
                    return 51.8 / 100
                case 4:
                    return 56.98 / 100
                case 5:
                    return 60.61 / 100
                case 6:
                    return 64.75 / 100
                case 7:
                    return 70.45 / 100
                case 8:
                    return 76.15 / 100
                case 9:
                    return 81.84 / 100
                case 10:
                    return 88.06 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 42.74 / 100
                case 2:
                    return 46.22 / 100
                case 3:
                    return 49.7 / 100
                case 4:
                    return 54.67 / 100
                case 5:
                    return 58.15 / 100
                case 6:
                    return 62.13 / 100
                case 7:
                    return 67.59 / 100
                case 8:
                    return 73.06 / 100
                case 9:
                    return 78.53 / 100
                case 10:
                    return 84.49 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 54.61 / 100
                case 2:
                    return 59.05 / 100
                case 3:
                    return 63.5 / 100
                case 4:
                    return 69.85 / 100
                case 5:
                    return 74.3 / 100
                case 6:
                    return 79.38 / 100
                case 7:
                    return 86.36 / 100
                case 8:
                    return 93.34 / 100
                case 9:
                    return 100.33 / 100
                case 10:
                    return 107.95 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 59.68 / 100
                case 2:
                    return 64.54 / 100
                case 3:
                    return 69.4 / 100
                case 4:
                    return 76.34 / 100
                case 5:
                    return 81.2 / 100
                case 6:
                    return 86.75 / 100
                case 7:
                    return 94.38 / 100
                case 8:
                    return 102.02 / 100
                case 9:
                    return 109.65 / 100
                case 10:
                    return 117.98 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 71.9 / 100
                case 2:
                    return 77.75 / 100
                case 3:
                    return 83.6 / 100
                case 4:
                    return 91.96 / 100
                case 5:
                    return 97.81 / 100
                case 6:
                    return 104.5 / 100
                case 7:
                    return 113.7 / 100
                case 8:
                    return 122.89 / 100
                case 9:
                    return 132.09 / 100
                case 10:
                    return 142.12 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6.7,
            ["50b"]: 6.7,
            ["50a"]: 13.3,
            ["60b"]: 13.3,
            ["60a"]: 13.3,
            ["70b"]: 13.3,
            ["70a"]: 20,
            ["80b"]: 20,
            ["80a"]: 26.7,
            ["90b"]: 26.7
        }

        return { Type: "EnergyRecharge", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: passionOverload,
        Level: 1
    },
    elementalBurst: {
        Skill: fantasticVoyage,
        Level: 1
    },
    passive1: {
        Type: "ElementalSkill",
        Value: 20
    },
    passive2: {
        Type: "ElementalSkill",
        Value: 30
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Chongyun = {
    name: "Chongyun",
    src: "Assets/Characters/Chongyun/Chongyun.png",
    card: "Assets/Characters/Chongyun/Character_Chongyun_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19,
            ["20b"]: 48,
            ["20a"]: 62,
            ["40b"]: 93,
            ["40a"]: 103,
            ["50b"]: 118,
            ["50a"]: 131,
            ["60b"]: 147,
            ["60a"]: 157,
            ["70b"]: 172,
            ["70a"]: 182,
            ["80b"]: 198,
            ["80a"]: 208,
            ["90b"]: 223
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1003,
            ["20b"]: 2366,
            ["20a"]: 3054,
            ["40b"]: 4574,
            ["40a"]: 5063,
            ["50b"]: 5824,
            ["50a"]: 6475,
            ["60b"]: 7236,
            ["60a"]: 7725,
            ["70b"]: 8485,
            ["70a"]: 8974,
            ["80b"]: 9734,
            ["80a"]: 10223,
            ["90b"]: 10984
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 54,
            ["20b"]: 140,
            ["20a"]: 180,
            ["40b"]: 270,
            ["40a"]: 299,
            ["50b"]: 344,
            ["50a"]: 382,
            ["60b"]: 427,
            ["60a"]: 456,
            ["70b"]: 501,
            ["70a"]: 530,
            ["80b"]: 575,
            ["80a"]: 603,
            ["90b"]: 648
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "Q", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q",]
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 70 / 100
                case 2:
                    return 75.7 / 100
                case 3:
                    return 81.4 / 100
                case 4:
                    return 89.54 / 100
                case 5:
                    return 95.24 / 100
                case 6:
                    return 101.75 / 100
                case 7:
                    return 110.7 / 100
                case 8:
                    return 119.66 / 100
                case 9:
                    return 128.61 / 100
                case 10:
                    return 138.38 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 63.12 / 100
                case 2:
                    return 68.26 / 100
                case 3:
                    return 73.4 / 100
                case 4:
                    return 80.74 / 100
                case 5:
                    return 85.88 / 100
                case 6:
                    return 91.75 / 100
                case 7:
                    return 99.82 / 100
                case 8:
                    return 107.9 / 100
                case 9:
                    return 115.97 / 100
                case 10:
                    return 124.78 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 80.32 / 100
                case 2:
                    return 86.86 / 100
                case 3:
                    return 93.4 / 100
                case 4:
                    return 102.74 / 100
                case 5:
                    return 109.28 / 100
                case 6:
                    return 116.75 / 100
                case 7:
                    return 127.02 / 100
                case 8:
                    return 137.3 / 100
                case 9:
                    return 147.57 / 100
                case 10:
                    return 158.78 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 101.22 / 100
                case 2:
                    return 109.46 / 100
                case 3:
                    return 117.7 / 100
                case 4:
                    return 129.47 / 100
                case 5:
                    return 137.71 / 100
                case 6:
                    return 147.13 / 100
                case 7:
                    return 160.07 / 100
                case 8:
                    return 173.02 / 100
                case 9:
                    return 185.97 / 100
                case 10:
                    return 200.09 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {

            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: chounghuasLayerdFrost,
        Level: 1
    },
    elementalBurst: {
        Skill: cloudPartingStar,
        Level: 1
    },
    passive1: {
        Type: "NormalAttack",
        Value: 20
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Diluc = {
    name: "Diluc",
    src: "Assets/Characters/Diluc/Diluc.png",
    card: "Assets/Characters/Diluc/Character_Diluc_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26,
            ["20b"]: 68,
            ["20a"]: 90,
            ["40b"]: 135,
            ["40a"]: 151,
            ["50b"]: 173,
            ["50a"]: 194,
            ["60b"]: 217,
            ["60a"]: 233,
            ["70b"]: 256,
            ["70a"]: 272,
            ["80b"]: 295,
            ["80a"]: 311,
            ["90b"]: 335
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1011,
            ["20b"]: 2621,
            ["20a"]: 3488,
            ["40b"]: 5219,
            ["40a"]: 5834,
            ["50b"]: 6712,
            ["50a"]: 7533,
            ["60b"]: 8421,
            ["60a"]: 9036,
            ["70b"]: 9932,
            ["70a"]: 10547,
            ["80b"]: 11453,
            ["80a"]: 12068,
            ["90b"]: 12981
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 61,
            ["20b"]: 158,
            ["20a"]: 211,
            ["40b"]: 315,
            ["40a"]: 352,
            ["50b"]: 405,
            ["50a"]: 455,
            ["60b"]: 509,
            ["60a"]: 546,
            ["70b"]: 600,
            ["70a"]: 637,
            ["80b"]: 692,
            ["80a"]: 729,
            ["90b"]: 784
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 120,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "Q", "E", "N1", "N2", "N3"],
        ["Support"]: ["E", "Q",]
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 89.7 / 100
                case 2:
                    return 97 / 100
                case 3:
                    return 104.3 / 100
                case 4:
                    return 114.73 / 100
                case 5:
                    return 122.03 / 100
                case 6:
                    return 130.38 / 100
                case 7:
                    return 141.85 / 100
                case 8:
                    return 153.32 / 100
                case 9:
                    return 164.79 / 100
                case 10:
                    return 177.31 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 87.63 / 100
                case 2:
                    return 94.77 / 100
                case 3:
                    return 101.9 / 100
                case 4:
                    return 112.09 / 100
                case 5:
                    return 119.22 / 100
                case 6:
                    return 127.38 / 100
                case 7:
                    return 138.58 / 100
                case 8:
                    return 149.79 / 100
                case 9:
                    return 161 / 100
                case 10:
                    return 173.23 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 98.81 / 100
                case 2:
                    return 106.86 / 100
                case 3:
                    return 114.9 / 100
                case 4:
                    return 126.39 / 100
                case 5:
                    return 134.43 / 100
                case 6:
                    return 143.63 / 100
                case 7:
                    return 156.26 / 100
                case 8:
                    return 168.9 / 100
                case 9:
                    return 181.54 / 100
                case 10:
                    return 195.33 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 133.99 / 100
                case 2:
                    return 144.89 / 100
                case 3:
                    return 155.8 / 100
                case 4:
                    return 171.38 / 100
                case 5:
                    return 182.29 / 100
                case 6:
                    return 194.75 / 100
                case 7:
                    return 211.89 / 100
                case 8:
                    return 229.03 / 100
                case 9:
                    return 246.16 / 100
                case 10:
                    return 264.86 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {

            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 4.8,
            ["50b"]: 4.8,
            ["50a"]: 9.6,
            ["60b"]: 9.6,
            ["60a"]: 9.6,
            ["70b"]: 9.6,
            ["70a"]: 14.4,
            ["80b"]: 14.4,
            ["80a"]: 19.2,
            ["90b"]: 19.2
        }

        return { Type: "CritRate", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: searingOnslaught,
        Level: 1
    },
    elementalBurst: {
        Skill: dawn,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Diona = {
    name: "Diona",
    src: "Assets/Characters/Diona/Diona.png",
    card: "Assets/Characters/Diona/Character_Diona_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 46,
            ["20a"]: 59,
            ["40b"]: 88,
            ["40a"]: 98,
            ["50b"]: 113,
            ["50a"]: 125,
            ["60b"]: 140,
            ["60a"]: 149,
            ["70b"]: 164,
            ["70a"]: 174,
            ["80b"]: 188,
            ["80a"]: 198,
            ["90b"]: 212
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 802,
            ["20b"]: 2061,
            ["20a"]: 2661,
            ["40b"]: 3985,
            ["40a"]: 4411,
            ["50b"]: 5074,
            ["50a"]: 5642,
            ["60b"]: 6305,
            ["60a"]: 6731,
            ["70b"]: 7393,
            ["70a"]: 7818,
            ["80b"]: 8481,
            ["80a"]: 8907,
            ["90b"]: 9570
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 50,
            ["20b"]: 129,
            ["20a"]: 167,
            ["40b"]: 250,
            ["40a"]: 277,
            ["50b"]: 318,
            ["50a"]: 354,
            ["60b"]: 396,
            ["60a"]: 422,
            ["70b"]: 464,
            ["70a"]: 491,
            ["80b"]: 532,
            ["80a"]: 559,
            ["90b"]: 601
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 160,
    supportType: "Shield",
    supportType2: "Healer",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N4", "N5", "C", "N1", "N2", "N3", "N4", "N5", "C", "E"],
        ["Support"]: ["Q", "E",]
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36.12 / 100
                case 2:
                    return 39.06 / 100
                case 3:
                    return 42 / 100
                case 4:
                    return 46.2 / 100
                case 5:
                    return 49.14 / 100
                case 6:
                    return 52.5 / 100
                case 7:
                    return 57.12 / 100
                case 8:
                    return 61.74 / 100
                case 9:
                    return 66.36 / 100
                case 10:
                    return 71.4 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 33.54 / 100
                case 2:
                    return 36.27 / 100
                case 3:
                    return 39 / 100
                case 4:
                    return 42.9 / 100
                case 5:
                    return 45.63 / 100
                case 6:
                    return 48.75 / 100
                case 7:
                    return 53.04 / 100
                case 8:
                    return 57.33 / 100
                case 9:
                    return 61.62 / 100
                case 10:
                    return 66.3 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 45.58 / 100
                case 2:
                    return 49.29 / 100
                case 3:
                    return 53 / 100
                case 4:
                    return 58.3 / 100
                case 5:
                    return 62.01 / 100
                case 6:
                    return 66.25 / 100
                case 7:
                    return 72.08 / 100
                case 8:
                    return 77.91 / 100
                case 9:
                    return 83.74 / 100
                case 10:
                    return 90.1 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43 / 100
                case 2:
                    return 46.5 / 100
                case 3:
                    return 50 / 100
                case 4:
                    return 55 / 100
                case 5:
                    return 58.5 / 100
                case 6:
                    return 62.5 / 100
                case 7:
                    return 68 / 100
                case 8:
                    return 73.5 / 100
                case 9:
                    return 79 / 100
                case 10:
                    return 85 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 53.75 / 100
                case 2:
                    return 58.13 / 100
                case 3:
                    return 62.5 / 100
                case 4:
                    return 68.75 / 100
                case 5:
                    return 73.13 / 100
                case 6:
                    return 78.13 / 100
                case 7:
                    return 85 / 100
                case 8:
                    return 91.88 / 100
                case 9:
                    return 98.75 / 100
                case 10:
                    return 106.25 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 124 / 100
                case 2:
                    return 133.3 / 100
                case 3:
                    return 142.6 / 100
                case 4:
                    return 155 / 100
                case 5:
                    return 164.3 / 100
                case 6:
                    return 173.6 / 100
                case 7:
                    return 186 / 100
                case 8:
                    return 198.4 / 100
                case 9:
                    return 210.8 / 100
                case 10:
                    return 223.2 / 100
            }
        },
        Element: "CryoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "CryoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: icyPaws,
        Level: 1
    },
    elementalBurst: {
        Skill: signatureMix,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Eula = {
    name: "Eula",
    src: "Assets/Characters/Eula/Eula.png",
    card: "Assets/Characters/Eula/Character_Eula_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 27,
            ["20b"]: 69,
            ["20a"]: 92,
            ["40b"]: 138,
            ["40a"]: 154,
            ["50b"]: 177,
            ["50a"]: 199,
            ["60b"]: 222,
            ["60a"]: 238,
            ["70b"]: 262,
            ["70a"]: 278,
            ["80b"]: 302,
            ["80a"]: 318,
            ["90b"]: 342
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1030,
            ["20b"]: 2671,
            ["20a"]: 3554,
            ["40b"]: 5317,
            ["40a"]: 5944,
            ["50b"]: 6839,
            ["50a"]: 7675,
            ["60b"]: 8579,
            ["60a"]: 9207,
            ["70b"]: 10119,
            ["70a"]: 10746,
            ["80b"]: 11669,
            ["80a"]: 12296,
            ["90b"]: 13226
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 58,
            ["20b"]: 152,
            ["20a"]: 202,
            ["40b"]: 302,
            ["40a"]: 337,
            ["50b"]: 388,
            ["50a"]: 436,
            ["60b"]: 487,
            ["60a"]: 523,
            ["70b"]: 574,
            ["70a"]: 610,
            ["80b"]: 662,
            ["80a"]: 698,
            ["90b"]: 751
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 160,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "E", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5", "E"],
        ["Support"]: ["E", "E", "E"]
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 89.73 / 100
                case 2:
                    return 97.04 / 100
                case 3:
                    return 104.34 / 100
                case 4:
                    return 114.77 / 100
                case 5:
                    return 122.08 / 100
                case 6:
                    return 130.42 / 100
                case 7:
                    return 141.9 / 100
                case 8:
                    return 153.38 / 100
                case 9:
                    return 164.86 / 100
                case 10:
                    return 177.38 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 93.55 / 100
                case 2:
                    return 101.17 / 100
                case 3:
                    return 108.78 / 100
                case 4:
                    return 119.66 / 100
                case 5:
                    return 127.27 / 100
                case 6:
                    return 135.97 / 100
                case 7:
                    return 147.94 / 100
                case 8:
                    return 159.91 / 100
                case 9:
                    return 171.87 / 100
                case 10:
                    return 184.93 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (2 * 56.8) / 100
                case 2:
                    return (2 * 61.42) / 100
                case 3:
                    return (2 * 66.05) / 100
                case 4:
                    return (2 * 72.65) / 100
                case 5:
                    return (2 * 77.27) / 100
                case 6:
                    return (2 * 82.56) / 100
                case 7:
                    return (2 * 89.82) / 100
                case 8:
                    return (2 * 97.09) / 100
                case 9:
                    return (2 * 104.35) / 100
                case 10:
                    return (2 * 112.28) / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 112.64 / 100
                case 2:
                    return 121.81 / 100
                case 3:
                    return 130.98 / 100
                case 4:
                    return 144.08 / 100
                case 5:
                    return 153.25 / 100
                case 6:
                    return 163.73 / 100
                case 7:
                    return 178.13 / 100
                case 8:
                    return 192.54 / 100
                case 9:
                    return 206.95 / 100
                case 10:
                    return 222.67 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (2 * 71.83) / 100
                case 2:
                    return (2 * 77.68) / 100
                case 3:
                    return (2 * 83.53) / 100
                case 4:
                    return (2 * 91.88) / 100
                case 5:
                    return (2 * 97.73) / 100
                case 6:
                    return (2 * 104.41) / 100
                case 7:
                    return (2 * 113.6) / 100
                case 8:
                    return (2 * 122.79) / 100
                case 9:
                    return (2 * 131.97) / 100
                case 10:
                    return (2 * 142) / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 9.6,
            ["50b"]: 9.6,
            ["50a"]: 19.2,
            ["60b"]: 19.2,
            ["60a"]: 19.2,
            ["70b"]: 19.2,
            ["70a"]: 28.8,
            ["80b"]: 28.8,
            ["80a"]: 38.4,
            ["90b"]: 38.4
        }

        return { Type: "CritDMG", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: icetideVortex,
        Level: 1
    },
    elementalBurst: {
        Skill: glacialIllumination,
        Level: 1
    },
    passive1: {
        Type: "Roiling Rime",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Fischl = {
    name: "Fischl",
    src: "Assets/Characters/Fischl/Fischl.png",
    card: "Assets/Characters/Fischl/Character_Fischl_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 53,
            ["20a"]: 68,
            ["40b"]: 102,
            ["40a"]: 113,
            ["50b"]: 130,
            ["50a"]: 144,
            ["60b"]: 161,
            ["60a"]: 172,
            ["70b"]: 189,
            ["70a"]: 200,
            ["80b"]: 216,
            ["80a"]: 227,
            ["90b"]: 244
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 770,
            ["20b"]: 1979,
            ["20a"]: 2555,
            ["40b"]: 3827,
            ["40a"]: 4236,
            ["50b"]: 4872,
            ["50a"]: 5418,
            ["60b"]: 6054,
            ["60a"]: 6463,
            ["70b"]: 7099,
            ["70a"]: 7508,
            ["80b"]: 8144,
            ["80a"]: 8553,
            ["90b"]: 9189
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 50,
            ["20b"]: 128,
            ["20a"]: 165,
            ["40b"]: 247,
            ["40a"]: 274,
            ["50b"]: 315,
            ["50a"]: 350,
            ["60b"]: 391,
            ["60a"]: 418,
            ["70b"]: 459,
            ["70a"]: 485,
            ["80b"]: 526,
            ["80a"]: 553,
            ["90b"]: 594
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5", "Q", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["E", "Q",]
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.12 / 100
                case 2:
                    return 47.71 / 100
                case 3:
                    return 51.3 / 100
                case 4:
                    return 56.43 / 100
                case 5:
                    return 60.02 / 100
                case 6:
                    return 64.13 / 100
                case 7:
                    return 69.77 / 100
                case 8:
                    return 75.41 / 100
                case 9:
                    return 81.05 / 100
                case 10:
                    return 87.21 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 46.78 / 100
                case 2:
                    return 50.59 / 100
                case 3:
                    return 54.4 / 100
                case 4:
                    return 59.84 / 100
                case 5:
                    return 63.65 / 100
                case 6:
                    return 68 / 100
                case 7:
                    return 73.98 / 100
                case 8:
                    return 79.97 / 100
                case 9:
                    return 85.95 / 100
                case 10:
                    return 92.48 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 58.14 / 100
                case 2:
                    return 62.87 / 100
                case 3:
                    return 67.6 / 100
                case 4:
                    return 74.36 / 100
                case 5:
                    return 79.09 / 100
                case 6:
                    return 84.5 / 100
                case 7:
                    return 91.94 / 100
                case 8:
                    return 99.37 / 100
                case 9:
                    return 106.81 / 100
                case 10:
                    return 114.92 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 57.71 / 100
                case 2:
                    return 62.4 / 100
                case 3:
                    return 67.1 / 100
                case 4:
                    return 73.81 / 100
                case 5:
                    return 78.51 / 100
                case 6:
                    return 84.5 / 100
                case 7:
                    return 91.94 / 100
                case 8:
                    return 99.37 / 100
                case 9:
                    return 106.81 / 100
                case 10:
                    return 114.92 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 72.07 / 100
                case 2:
                    return 77.93 / 100
                case 3:
                    return 83.8 / 100
                case 4:
                    return 92.18 / 100
                case 5:
                    return 98.05 / 100
                case 6:
                    return 104.75 / 100
                case 7:
                    return 113.97 / 100
                case 8:
                    return 123.19 / 100
                case 9:
                    return 132.4 / 100
                case 10:
                    return 142.46 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: nightrider,
        Level: 1
    },
    elementalBurst: {
        Skill: midnightPhantasmagoria,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Undone Be Thy Sinful Hex",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Ganyu = {
    name: "Ganyu",
    src: "Assets/Characters/Ganyu/Ganyu.png",
    card: "Assets/Characters/Ganyu/Character_Ganyu_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26,
            ["20b"]: 68,
            ["20a"]: 90,
            ["40b"]: 135,
            ["40a"]: 151,
            ["50b"]: 173,
            ["50a"]: 194,
            ["60b"]: 217,
            ["60a"]: 233,
            ["70b"]: 256,
            ["70a"]: 272,
            ["80b"]: 295,
            ["80a"]: 311,
            ["90b"]: 335
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 763,
            ["20b"]: 1978,
            ["20a"]: 2632,
            ["40b"]: 3939,
            ["40a"]: 4403,
            ["50b"]: 5066,
            ["50a"]: 5686,
            ["60b"]: 6355,
            ["60a"]: 6820,
            ["70b"]: 7495,
            ["70a"]: 7960,
            ["80b"]: 8643,
            ["80a"]: 9108,
            ["90b"]: 9797
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 49,
            ["20b"]: 127,
            ["20a"]: 169,
            ["40b"]: 253,
            ["40a"]: 283,
            ["50b"]: 326,
            ["50a"]: 366,
            ["60b"]: 409,
            ["60a"]: 439,
            ["70b"]: 482,
            ["70a"]: 512,
            ["80b"]: 556,
            ["80a"]: 586,
            ["90b"]: 630
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "C", "C", "C", "C", "E", "C", "C", "C", "C"],
        ["Support"]: ["Q", "E", "C", "E", "C"]
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {

            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return [128 / 100, 217.6 / 100];
                case 2:
                    return [137.6 / 100, 233.92 / 100];
                case 3:
                    return [147.2 / 100, 250.24 / 100];
                case 4:
                    return [160 / 100, 272 / 100];
                case 5:
                    return [169.6 / 100, 288.32 / 100];
                case 6:
                    return [179.2 / 100, 304.64 / 100];
                case 7:
                    return [192 / 100, 326.4 / 100];
                case 8:
                    return [204.8 / 100, 348.16 / 100];
                case 9:
                    return [217.6 / 100, 369.92 / 100];
                case 10:
                    return [230.4 / 100, 391.68 / 100];
            }
        },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 9.6,
            ["50b"]: 9.6,
            ["50a"]: 19.2,
            ["60b"]: 19.2,
            ["60a"]: 19.2,
            ["70b"]: 19.2,
            ["70a"]: 28.8,
            ["80b"]: 28.8,
            ["80a"]: 38.4,
            ["90b"]: 38.4
        }

        return { Type: "CritDMG", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: trailOfTheQilin,
        Level: 1
    },
    elementalBurst: {
        Skill: celestialShower,
        Level: 1
    },
    passive1: {
        Type: "Undivided Heart",
        Value: null
    },
    passive2: {
        Type: "Harmony between Heaven and Earth",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Gorou = {
    name: "Gorou",
    src: "Assets/Characters/Gorou/Gorou.png",
    card: "Assets/Characters/Gorou/Character_Gorou_Portrait.webp",
    element: "GeoCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 15,
            ["20b"]: 39,
            ["20a"]: 51,
            ["40b"]: 76,
            ["40a"]: 84,
            ["50b"]: 97,
            ["50a"]: 108,
            ["60b"]: 120,
            ["60a"]: 128,
            ["70b"]: 141,
            ["70a"]: 149,
            ["80b"]: 162,
            ["80a"]: 170,
            ["90b"]: 183
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 802,
            ["20b"]: 2061,
            ["20a"]: 2661,
            ["40b"]: 3985,
            ["40a"]: 4411,
            ["50b"]: 5074,
            ["50a"]: 5642,
            ["60b"]: 6305,
            ["60a"]: 6731,
            ["70b"]: 7393,
            ["70a"]: 7818,
            ["80b"]: 8481,
            ["80a"]: 8907,
            ["90b"]: 9570
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 54,
            ["20b"]: 140,
            ["20a"]: 180,
            ["40b"]: 270,
            ["40a"]: 299,
            ["50b"]: 344,
            ["50a"]: 382,
            ["60b"]: 427,
            ["60a"]: 456,
            ["70b"]: 501,
            ["70a"]: 530,
            ["80b"]: 575,
            ["80a"]: 603,
            ["90b"]: 648
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "ATKBooster",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 37.75 / 100
                case 2:
                    return 40.83 / 100
                case 3:
                    return 43.9 / 100
                case 4:
                    return 48.29 / 100
                case 5:
                    return 51.36 / 100
                case 6:
                    return 54.87 / 100
                case 7:
                    return 59.7 / 100
                case 8:
                    return 64.53 / 100
                case 9:
                    return 69.36 / 100
                case 10:
                    return 74.63 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 37.15 / 100
                case 2:
                    return 40.18 / 100
                case 3:
                    return 43.2 / 100
                case 4:
                    return 47.52 / 100
                case 5:
                    return 50.54 / 100
                case 6:
                    return 54 / 100
                case 7:
                    return 58.75 / 100
                case 8:
                    return 63.5 / 100
                case 9:
                    return 68.26 / 100
                case 10:
                    return 73.44 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 49.45 / 100
                case 2:
                    return 53.47 / 100
                case 3:
                    return 57.5 / 100
                case 4:
                    return 63.25 / 100
                case 5:
                    return 67.27 / 100
                case 6:
                    return 71.88 / 100
                case 7:
                    return 78.2 / 100
                case 8:
                    return 84.52 / 100
                case 9:
                    return 90.85 / 100
                case 10:
                    return 97.75 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 59 / 100
                case 2:
                    return 63.8 / 100
                case 3:
                    return 68.6 / 100
                case 4:
                    return 75.46 / 100
                case 5:
                    return 80.26 / 100
                case 6:
                    return 85.75 / 100
                case 7:
                    return 93.3 / 100
                case 8:
                    return 100.84 / 100
                case 9:
                    return 108.39 / 100
                case 10:
                    return 116.62 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "GeoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: inuzakaAllRoundDefense,
        Level: 1
    },
    elementalBurst: {
        Skill: forwardUntoVictory,
        Level: 1
    },
    passive1: {
        Type: "Headless of the Wind and Weather",
        Value: null
    },
    passive2: {
        Type: "A Favor Repaid",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Hu_Tao = {
    name: "Hu Tao",
    src: "Assets/Characters/Hu_Tao/Hu_Tao.png",
    card: "Assets/Characters/Hu_Tao/Character_Hu_Tao_Portrait.webp",
    element: "PyroCharacter",
    weaponType: "Polearm",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 8,
            ["20b"]: 21,
            ["20a"]: 29,
            ["40b"]: 43,
            ["40a"]: 48,
            ["50b"]: 55,
            ["50a"]: 62,
            ["60b"]: 69,
            ["60a"]: 74,
            ["70b"]: 81,
            ["70a"]: 86,
            ["80b"]: 94,
            ["80a"]: 99,
            ["90b"]: 106
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1211,
            ["20b"]: 3141,
            ["20a"]: 4179,
            ["40b"]: 6253,
            ["40a"]: 6990,
            ["50b"]: 8042,
            ["50a"]: 9026,
            ["60b"]: 10089,
            ["60a"]: 10826,
            ["70b"]: 11899,
            ["70a"]: 12637,
            ["80b"]: 13721,
            ["80a"]: 14459,
            ["90b"]: 15552
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 68,
            ["20b"]: 177,
            ["20a"]: 235,
            ["40b"]: 352,
            ["40a"]: 394,
            ["50b"]: 453,
            ["50a"]: 508,
            ["60b"]: 568,
            ["60a"]: 610,
            ["70b"]: 670,
            ["70a"]: 712,
            ["80b"]: 773,
            ["80a"]: 815,
            ["90b"]: 876
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "Q"],
        ["Support"]: ["E", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "Q"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {

            switch (level) {
                case 1:
                    return 46.89 / 100;
                case 2:
                    return 50.08 / 100;
                case 3:
                    return 53.28 / 100;
                case 4:
                    return 57.54 / 100;
                case 5:
                    return 60.74 / 100;
                case 6:
                    return 64.47 / 100;
                case 7:
                    return 69.26 / 100;
                case 8:
                    return 74.06 / 100;
                case 9:
                    return 78.85 / 100;
                case 10:
                    return 83.65 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 135.96 / 100;
                case 2:
                    return 145.23 / 100;
                case 3:
                    return 154.5 / 100;
                case 4:
                    return 166.86 / 100;
                case 5:
                    return 176.13 / 100;
                case 6:
                    return 186.94 / 100;
                case 7:
                    return 200.85 / 100;
                case 8:
                    return 214.75 / 100;
                case 9:
                    return 228.66 / 100;
                case 10:
                    return 242.56 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 9.6,
            ["50b"]: 9.6,
            ["50a"]: 19.2,
            ["60b"]: 19.2,
            ["60a"]: 19.2,
            ["70b"]: 19.2,
            ["70a"]: 28.8,
            ["80b"]: 28.8,
            ["80a"]: 38.4,
            ["90b"]: 38.4
        }

        return { Type: "CritDMG", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: guideToAtferlife,
        Level: 1
    },
    elementalBurst: {
        Skill: spiritSoother,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "PyroDMGBonus",
        Value: 33
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Itto = {
    name: "Itto",
    src: "Assets/Characters/Itto/Itto.png",
    card: "Assets/Characters/Itto/Character_Arataki_Itto_Portrait.webp",
    element: "GeoCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 46,
            ["20a"]: 61,
            ["40b"]: 91,
            ["40a"]: 102,
            ["50b"]: 117,
            ["50a"]: 132,
            ["60b"]: 147,
            ["60a"]: 158,
            ["70b"]: 174,
            ["70a"]: 185,
            ["80b"]: 199,
            ["80a"]: 211,
            ["90b"]: 227
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1001,
            ["20b"]: 2597,
            ["20a"]: 3455,
            ["40b"]: 5170,
            ["40a"]: 5779,
            ["50b"]: 6649,
            ["50a"]: 7462,
            ["60b"]: 8341,
            ["60a"]: 8951,
            ["70b"]: 9838,
            ["70a"]: 10448,
            ["80b"]: 11345,
            ["80a"]: 11954,
            ["90b"]: 12858
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 75,
            ["20b"]: 194,
            ["20a"]: 258,
            ["40b"]: 386,
            ["40a"]: 431,
            ["50b"]: 496,
            ["50a"]: 557,
            ["60b"]: 622,
            ["60a"]: 668,
            ["70b"]: 734,
            ["70a"]: 779,
            ["80b"]: 846,
            ["80a"]: 892,
            ["90b"]: 959
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        //"P" used for superlative final slash
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "C", "C", "C", "P", "N1", "N2", "N3", "N4", "C", "C", "C", "C", "P", "E"],
        ["Support"]: ["E"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 79.23 / 100
                case 2:
                    return 85.68 / 100
                case 3:
                    return 92.13 / 100
                case 4:
                    return 101.34 / 100
                case 5:
                    return 107.79 / 100
                case 6:
                    return 115.16 / 100
                case 7:
                    return 125.3 / 100
                case 8:
                    return 135.43 / 100
                case 9:
                    return 145.57 / 100
                case 10:
                    return 156.62 / 100
            }
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 76.37 / 100
                case 2:
                    return 82.58 / 100
                case 3:
                    return 88.8 / 100
                case 4:
                    return 97.68 / 100
                case 5:
                    return 103.9 / 100
                case 6:
                    return 111 / 100
                case 7:
                    return 120.77 / 100
                case 8:
                    return 130.54 / 100
                case 9:
                    return 140.3 / 100
                case 10:
                    return 150.96 / 100
            }
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 91.64 / 100
                case 2:
                    return 99.1 / 100
                case 3:
                    return 106.56 / 100
                case 4:
                    return 117.22 / 100
                case 5:
                    return 124.68 / 100
                case 6:
                    return 133.2 / 100
                case 7:
                    return 144.92 / 100
                case 8:
                    return 156.64 / 100
                case 9:
                    return 168.36 / 100
                case 10:
                    return 181.15 / 100
            }
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 117.22 / 100
                case 2:
                    return 126.77 / 100
                case 3:
                    return 136.31 / 100
                case 4:
                    return 149.94 / 100
                case 5:
                    return 159.48 / 100
                case 6:
                    return 170.39 / 100
                case 7:
                    return 185.38 / 100
                case 8:
                    return 200.37 / 100
                case 9:
                    return 215.37 / 100
                case 10:
                    return 231.72 / 100
            }
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 91.16 / 100
                case 2:
                    return 98.58 / 100
                case 3:
                    return 106 / 100
                case 4:
                    return 116.6 / 100
                case 5:
                    return 124.02 / 100
                case 6:
                    return 132.5 / 100
                case 7:
                    return 144.16 / 100
                case 8:
                    return 155.82 / 100
                case 9:
                    return 167.48 / 100
                case 10:
                    return 180.2 / 100
            }
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 190.92 / 100
                case 2:
                    return 206.46 / 100
                case 3:
                    return 222 / 100
                case 4:
                    return 244.2 / 100
                case 5:
                    return 259.74 / 100
                case 6:
                    return 277.5 / 100
                case 7:
                    return 301.92 / 100
                case 8:
                    return 326.34 / 100
                case 9:
                    return 350.76 / 100
                case 10:
                    return 377.4 / 100
            }
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 4.8,
            ["50b"]: 4.8,
            ["50a"]: 9.6,
            ["60b"]: 9.6,
            ["60a"]: 9.6,
            ["70b"]: 9.6,
            ["70a"]: 14.4,
            ["80b"]: 14.4,
            ["80a"]: 19.2,
            ["90b"]: 19.2
        }

        return { Type: "CritRate", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: akaushiBurst,
        Level: 1
    },
    elementalBurst: {
        Skill: beholdIttotheEvil,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Bloodline of the Crimson Oni",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Jean = {
    name: "Jean",
    src: "Assets/Characters/Jean/Jean.png",
    card: "Assets/Characters/Jean/Character_Jean_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19,
            ["20b"]: 48,
            ["20a"]: 64,
            ["40b"]: 96,
            ["40a"]: 108,
            ["50b"]: 124,
            ["50a"]: 139,
            ["60b"]: 155,
            ["60a"]: 166,
            ["70b"]: 183,
            ["70a"]: 194,
            ["80b"]: 211,
            ["80a"]: 222,
            ["90b"]: 239
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1144,
            ["20b"]: 2967,
            ["20a"]: 3948,
            ["40b"]: 5908,
            ["40a"]: 6605,
            ["50b"]: 7599,
            ["50a"]: 8528,
            ["60b"]: 9533,
            ["60a"]: 10230,
            ["70b"]: 11243,
            ["70a"]: 11940,
            ["80b"]: 12965,
            ["80a"]: 13662,
            ["90b"]: 14695
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 60,
            ["20b"]: 155,
            ["20a"]: 206,
            ["40b"]: 309,
            ["40a"]: 345,
            ["50b"]: 397,
            ["50a"]: 446,
            ["60b"]: 499,
            ["60a"]: 535,
            ["70b"]: 588,
            ["70a"]: 624,
            ["80b"]: 678,
            ["80a"]: 715,
            ["90b"]: 769
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Healer",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N4", "C", "N1", "C", "N1", "C", "E"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 48.33 / 100;
                case 2:
                    return 52.27 / 100;
                case 3:
                    return 56.2 / 100;
                case 4:
                    return 61.82 / 100;
                case 5:
                    return 65.75 / 100;
                case 6:
                    return 70.25 / 100;
                case 7:
                    return 76.43 / 100;
                case 8:
                    return 82.61 / 100;
                case 9:
                    return 88.8 / 100;
                case 10:
                    return 95.54 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 45.58 / 100;
                case 2:
                    return 49.29 / 100;
                case 3:
                    return 53 / 100;
                case 4:
                    return 58.3 / 100;
                case 5:
                    return 62.01 / 100;
                case 6:
                    return 66.25 / 100;
                case 7:
                    return 72.08 / 100;
                case 8:
                    return 77.91 / 100;
                case 9:
                    return 83.74 / 100;
                case 10:
                    return 90.1 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 60.29 / 100;
                case 2:
                    return 65.19 / 100;
                case 3:
                    return 70.1 / 100;
                case 4:
                    return 77.11 / 100;
                case 5:
                    return 82.02 / 100;
                case 6:
                    return 87.63 / 100;
                case 7:
                    return 95.34 / 100;
                case 8:
                    return 103.05 / 100;
                case 9:
                    return 110.76 / 100;
                case 10:
                    return 119.17 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 65.88 / 100;
                case 2:
                    return 71.24 / 100;
                case 3:
                    return 76.6 / 100;
                case 4:
                    return 84.26 / 100;
                case 5:
                    return 89.26 / 100;
                case 6:
                    return 95.75 / 100;
                case 7:
                    return 104.18 / 100;
                case 8:
                    return 112.6 / 100;
                case 9:
                    return 121.03 / 100;
                case 10:
                    return 130.22 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 162.02 / 100;
                case 2:
                    return 175.21 / 100;
                case 3:
                    return 188.4 / 100;
                case 4:
                    return 207.24 / 100;
                case 5:
                    return 220.43 / 100;
                case 6:
                    return 235.5 / 100;
                case 7:
                    return 256.22 / 100;
                case 8:
                    return 276.95 / 100;
                case 9:
                    return 297.67 / 100;
                case 10:
                    return 320.28 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 5.5,
            ["50b"]: 5.5,
            ["50a"]: 11.1,
            ["60b"]: 11.1,
            ["60a"]: 11.1,
            ["70b"]: 11.1,
            ["70a"]: 16.6,
            ["80b"]: 16.6,
            ["80a"]: 22.2,
            ["90b"]: 22.2
        }

        return { Type: "HealingBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: galeBlade,
        Level: 1
    },
    elementalBurst: {
        Skill: dandelionBreeze,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Kaeya = {
    name: "Kaeya",
    src: "Assets/Characters/Kaeya/Kaeya.png",
    card: "Assets/Characters/Kaeya/Character_Kaeya_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19,
            ["20b"]: 48,
            ["20a"]: 62,
            ["40b"]: 93,
            ["40a"]: 103,
            ["50b"]: 118,
            ["50a"]: 131,
            ["60b"]: 147,
            ["60a"]: 157,
            ["70b"]: 172,
            ["70a"]: 182,
            ["80b"]: 198,
            ["80a"]: 208,
            ["90b"]: 223
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 976,
            ["20b"]: 2506,
            ["20a"]: 3235,
            ["40b"]: 4846,
            ["40a"]: 5364,
            ["50b"]: 6170,
            ["50a"]: 6860,
            ["60b"]: 7666,
            ["60a"]: 8184,
            ["70b"]: 8990,
            ["70a"]: 9508,
            ["80b"]: 10312,
            ["80a"]: 10830,
            ["90b"]: 11636
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 66,
            ["20b"]: 171,
            ["20a"]: 220,
            ["40b"]: 330,
            ["40a"]: 365,
            ["50b"]: 420,
            ["50a"]: 467,
            ["60b"]: 522,
            ["60a"]: 557,
            ["70b"]: 612,
            ["70a"]: 647,
            ["80b"]: 702,
            ["80a"]: 737,
            ["90b"]: 792
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "E"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 53.75 / 100;
                case 2:
                    return 58.13 / 100;
                case 3:
                    return 62.5 / 100;
                case 4:
                    return 68.75 / 100;
                case 5:
                    return 73.13 / 100;
                case 6:
                    return 78.13 / 100;
                case 7:
                    return 85 / 100;
                case 8:
                    return 91.88 / 100;
                case 9:
                    return 98.75 / 100;
                case 10:
                    return 106.25 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 51.69 / 100;
                case 2:
                    return 55.89 / 100;
                case 3:
                    return 60.1 / 100;
                case 4:
                    return 66.11 / 100;
                case 5:
                    return 70.32 / 100;
                case 6:
                    return 75.13 / 100;
                case 7:
                    return 81.74 / 100;
                case 8:
                    return 88.35 / 100;
                case 9:
                    return 94.96 / 100;
                case 10:
                    return 102.17 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 65.27 / 100;
                case 2:
                    return 70.59 / 100;
                case 3:
                    return 75.9 / 100;
                case 4:
                    return 83.49 / 100;
                case 5:
                    return 88.8 / 100;
                case 6:
                    return 94.88 / 100;
                case 7:
                    return 103.22 / 100;
                case 8:
                    return 111.57 / 100;
                case 9:
                    return 119.92 / 100;
                case 10:
                    return 129.03 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 70.86 / 100;
                case 2:
                    return 76.63 / 100;
                case 3:
                    return 82.4 / 100;
                case 4:
                    return 90.64 / 100;
                case 5:
                    return 96.41 / 100;
                case 6:
                    return 103 / 100;
                case 7:
                    return 112.06 / 100;
                case 8:
                    return 121.13 / 100;
                case 9:
                    return 130.19 / 100;
                case 10:
                    return 140.08 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6.7,
            ["50b"]: 6.7,
            ["50a"]: 13.3,
            ["60b"]: 13.3,
            ["60a"]: 13.3,
            ["70b"]: 13.3,
            ["70a"]: 20.0,
            ["80b"]: 20.0,
            ["80a"]: 26.7,
            ["90b"]: 26.7
        }

        return { Type: "EnergyRecharge", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: frostgnaw,
        Level: 1
    },
    elementalBurst: {
        Skill: glacialWaltz,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "EnergyRecharge",
        Value: 10
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Kazuha = {
    name: "Kazuha",
    src: "Assets/Characters/Kazuha/Kazuha.png",
    card: "Assets/Characters/Kazuha/Character_Kaedehara_Kazuha_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 23,
            ["20b"]: 60,
            ["20a"]: 80,
            ["40b"]: 119,
            ["40a"]: 133,
            ["50b"]: 153,
            ["50a"]: 172,
            ["60b"]: 192,
            ["60a"]: 206,
            ["70b"]: 227,
            ["70a"]: 241,
            ["80b"]: 262,
            ["80a"]: 276,
            ["90b"]: 297
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1039,
            ["20b"]: 2695,
            ["20a"]: 3586,
            ["40b"]: 5366,
            ["40a"]: 5999,
            ["50b"]: 6902,
            ["50a"]: 7747,
            ["60b"]: 8659,
            ["60a"]: 9292,
            ["70b"]: 10213,
            ["70a"]: 10846,
            ["80b"]: 11777,
            ["80a"]: 12410,
            ["90b"]: 13348
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 63,
            ["20b"]: 163,
            ["20a"]: 217,
            ["40b"]: 324,
            ["40a"]: 363,
            ["50b"]: 417,
            ["50a"]: 468,
            ["60b"]: 523,
            ["60a"]: 562,
            ["70b"]: 617,
            ["70a"]: 656,
            ["80b"]: 712,
            ["80a"]: 750,
            ["90b"]: 807
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "ElementalBuffer",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "E"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.98 / 100;
                case 2:
                    return 48.86 / 100;
                case 3:
                    return 52.3 / 100;
                case 4:
                    return 57.53 / 100;
                case 5:
                    return 61.19 / 100;
                case 6:
                    return 65.38 / 100;
                case 7:
                    return 71.13 / 100;
                case 8:
                    return 76.88 / 100;
                case 9:
                    return 82.63 / 100;
                case 10:
                    return 88.91 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 45.24 / 100;
                case 2:
                    return 48.92 / 100;
                case 3:
                    return 52.6 / 100;
                case 4:
                    return 57.86 / 100;
                case 5:
                    return 61.54 / 100;
                case 6:
                    return 65.75 / 100;
                case 7:
                    return 71.54 / 100;
                case 8:
                    return 77.32 / 100;
                case 9:
                    return 83.11 / 100;
                case 10:
                    return 89.42 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (25.8 + 30.96) / 100;
                case 2:
                    return (27.9 + 33.48) / 100;
                case 3:
                    return (30 + 36) / 100;
                case 4:
                    return (33 + 39.6) / 100;
                case 5:
                    return (35.1 + 42.12) / 100;
                case 6:
                    return (37.5 + 45) / 100;
                case 7:
                    return (40.8 + 48.96) / 100;
                case 8:
                    return (44.1 + 52.92) / 100;
                case 9:
                    return (47.4 + 56.88) / 100;
                case 10:
                    return (51 + 61.2) / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 60.72 / 100;
                case 2:
                    return 65.66 / 100;
                case 3:
                    return 70.6 / 100;
                case 4:
                    return 77.66 / 100;
                case 5:
                    return 82.6 / 100;
                case 6:
                    return 88.25 / 100;
                case 7:
                    return 96.02 / 100;
                case 8:
                    return 103.78 / 100;
                case 9:
                    return 111.55 / 100;
                case 10:
                    return 120.02 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 204.39 / 100;
                case 2:
                    return 221.02 / 100;
                case 3:
                    return 237.66 / 100;
                case 4:
                    return 261.42 / 100;
                case 5:
                    return 278.06 / 100;
                case 6:
                    return 297.07 / 100;
                case 7:
                    return 323.21 / 100;
                case 8:
                    return 349.36 / 100;
                case 9:
                    return 375.5 / 100;
                case 10:
                    return 404.02 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 28.8,
            ["50b"]: 28.8,
            ["50a"]: 57.6,
            ["60b"]: 57.6,
            ["60a"]: 57.6,
            ["70b"]: 57.6,
            ["70a"]: 86.4,
            ["80b"]: 86.4,
            ["80a"]: 115.2,
            ["90b"]: 115.2
        }

        return { Type: "ElementalMastery", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: chihayaburu,
        Level: 1
    },
    elementalBurst: {
        Skill: kazuhaSlash,
        Level: 1
    },
    passive1: {
        Type: "Soumon Swordmanship",
        Value: null
    },
    passive2: {
        Type: "Poetics of Fuubutsu",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Keqing = {
    name: "Keqing",
    src: "Assets/Characters/Keqing/Keqing.png",
    card: "Assets/Characters/Keqing/Character_Keqing_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 25,
            ["20b"]: 65,
            ["20a"]: 87,
            ["40b"]: 130,
            ["40a"]: 145,
            ["50b"]: 167,
            ["50a"]: 187,
            ["60b"]: 209,
            ["60a"]: 225,
            ["70b"]: 247,
            ["70a"]: 262,
            ["80b"]: 285,
            ["80a"]: 300,
            ["90b"]: 323
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1020,
            ["20b"]: 2646,
            ["20a"]: 3521,
            ["40b"]: 5268,
            ["40a"]: 5889,
            ["50b"]: 6776,
            ["50a"]: 7604,
            ["60b"]: 8500,
            ["60a"]: 9121,
            ["70b"]: 10025,
            ["70a"]: 10647,
            ["80b"]: 11561,
            ["80a"]: 12182,
            ["90b"]: 13103
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 62,
            ["20b"]: 161,
            ["20a"]: 215,
            ["40b"]: 321,
            ["40a"]: 359,
            ["50b"]: 413,
            ["50a"]: 464,
            ["60b"]: 519,
            ["60a"]: 556,
            ["70b"]: 612,
            ["70a"]: 649,
            ["80b"]: 705,
            ["80a"]: 743,
            ["90b"]: 799
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 120,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 41.02 / 100;
                case 2:
                    return 44.36 / 100;
                case 3:
                    return 47.7 / 100;
                case 4:
                    return 52.47 / 100;
                case 5:
                    return 55.81 / 100;
                case 6:
                    return 59.62 / 100;
                case 7:
                    return 64.87 / 100;
                case 8:
                    return 70.12 / 100;
                case 9:
                    return 75.37 / 100;
                case 10:
                    return 81.09 / 100;
            }

        },
        Element: "ElectroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (76.8 + 86) / 100;
                case 2:
                    return (83.05 + 93) / 100;
                case 3:
                    return (89.3 + 100) / 100;
                case 4:
                    return (98.23 + 110) / 100;
                case 5:
                    return (104.48 + 117) / 100;
                case 6:
                    return (111.63 + 125) / 100;
                case 7:
                    return (121.45 + 136) / 100;
                case 8:
                    return (131.27 + 147) / 100;
                case 9:
                    return (141.09 + 158) / 100;
                case 10:
                    return (151.8 + 170) / 100;
            }
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 9.6,
            ["50b"]: 9.6,
            ["50a"]: 19.2,
            ["60b"]: 19.2,
            ["60a"]: 19.2,
            ["70b"]: 19.2,
            ["70a"]: 28.8,
            ["80b"]: 28.8,
            ["80a"]: 38.4,
            ["90b"]: 38.4
        }

        return { Type: "CritDMG", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: stellarRestoration,
        Level: 1
    },
    elementalBurst: {
        Skill: starwardSword,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Aristocratic Dignity",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Klee = {
    name: "Klee",
    src: "Assets/Characters/Klee/Klee.png",
    card: "Assets/Characters/Klee/Character_Klee_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 24,
            ["20b"]: 63,
            ["20a"]: 84,
            ["40b"]: 125,
            ["40a"]: 140,
            ["50b"]: 161,
            ["50a"]: 180,
            ["60b"]: 202,
            ["60a"]: 216,
            ["70b"]: 238,
            ["70a"]: 253,
            ["80b"]: 274,
            ["80a"]: 289,
            ["90b"]: 311
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 801,
            ["20b"]: 2077,
            ["20a"]: 2764,
            ["40b"]: 4136,
            ["40a"]: 4623,
            ["50b"]: 5319,
            ["50a"]: 5970,
            ["60b"]: 6673,
            ["60a"]: 7161,
            ["70b"]: 7870,
            ["70a"]: 8358,
            ["80b"]: 9076,
            ["80a"]: 9563,
            ["90b"]: 10287
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 48,
            ["20b"]: 124,
            ["20a"]: 165,
            ["40b"]: 247,
            ["40a"]: 276,
            ["50b"]: 318,
            ["50a"]: 357,
            ["60b"]: 399,
            ["60a"]: 428,
            ["70b"]: 470,
            ["70a"]: 500,
            ["80b"]: 542,
            ["80a"]: 572,
            ["90b"]: 615
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 120,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "E", "Q", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C"],
        ["Support"]: ["E", "E", "Q"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 72.16 / 100;
                case 2:
                    return 77.57 / 100;
                case 3:
                    return 82.98 / 100;
                case 4:
                    return 90.2 / 100;
                case 5:
                    return 95.61 / 100;
                case 6:
                    return 101.02 / 100;
                case 7:
                    return 108.24 / 100;
                case 8:
                    return 115.46 / 100;
                case 9:
                    return 122.67 / 100;
                case 10:
                    return 129.89 / 100;
            }

        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 62.4 / 100;
                case 2:
                    return 67.08 / 100;
                case 3:
                    return 71.76 / 100;
                case 4:
                    return 78 / 100;
                case 5:
                    return 82.68 / 100;
                case 6:
                    return 87.36 / 100;
                case 7:
                    return 93.6 / 100;
                case 8:
                    return 99.84 / 100;
                case 9:
                    return 106.08 / 100;
                case 10:
                    return 112.32 / 100;
            }
        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 157.36 / 100;
                case 2:
                    return 169.16 / 100;
                case 3:
                    return 180.96 / 100;
                case 4:
                    return 196.7 / 100;
                case 5:
                    return 208.5 / 100;
                case 6:
                    return 220.3 / 100;
                case 7:
                    return 236.04 / 100;
                case 8:
                    return 251.78 / 100;
                case 9:
                    return 267.51 / 100;
                case 10:
                    return 283.25 / 100;
            }
        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.2,
            ["50b"]: 7.2,
            ["50a"]: 14.4,
            ["60b"]: 14.4,
            ["60a"]: 14.4,
            ["70b"]: 14.4,
            ["70a"]: 21.6,
            ["80b"]: 21.6,
            ["80a"]: 28.8,
            ["90b"]: 28.8
        }

        return { Type: "PyroDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: jumpyDumpty,
        Level: 1
    },
    elementalBurst: {
        Skill: sparksnSplash,
        Level: 1
    },
    passive1: {
        Type: "Pounding Surprise",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Kokomi = {
    name: "Kokomi",
    src: "Assets/Characters/Kokomi/Kokomi.png",
    card: "Assets/Characters/Kokomi/Character_Sangonomiya_Kokomi_Portrait.webp",
    element: "HydroCharacter",
    level: "1b",

    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 47,
            ["20a"]: 63,
            ["40b"]: 94,
            ["40a"]: 105,
            ["50b"]: 121,
            ["50a"]: 136,
            ["60b"]: 152,
            ["60a"]: 163,
            ["70b"]: 179,
            ["70a"]: 190,
            ["80b"]: 207,
            ["80a"]: 218,
            ["90b"]: 234
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1049,
            ["20b"]: 2720,
            ["20a"]: 3619,
            ["40b"]: 5416,
            ["40a"]: 6055,
            ["50b"]: 6966,
            ["50a"]: 7818,
            ["60b"]: 8738,
            ["60a"]: 9377,
            ["70b"]: 10306,
            ["70a"]: 10945,
            ["80b"]: 11885,
            ["80a"]: 12524,
            ["90b"]: 13471
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 51,
            ["20b"]: 133,
            ["20a"]: 177,
            ["40b"]: 264,
            ["40a"]: 295,
            ["50b"]: 340,
            ["50a"]: 381,
            ["60b"]: 426,
            ["60a"]: 457,
            ["70b"]: 503,
            ["70a"]: 534,
            ["80b"]: 580,
            ["80a"]: 611,
            ["90b"]: 657
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: -95,
        critDMG: 50,
        healingBonus: 25,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Healer",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "E"],
        ["Support"]: ["Q", "E", "N1", "N2", "N3", "C"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 68.38 / 100
                case 2:
                    return 73.5 / 100
                case 3:
                    return 78.63 / 100
                case 4:
                    return 85.47 / 100
                case 5:
                    return 90.6 / 100
                case 6:
                    return 95.73 / 100
                case 7:
                    return 102.56 / 100
                case 8:
                    return 109.4 / 100
                case 9:
                    return 116.24 / 100
                case 10:
                    return 123.08 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 61.54 / 100
                case 2:
                    return 66.15 / 100
                case 3:
                    return 70.77 / 100
                case 4:
                    return 76.92 / 100
                case 5:
                    return 81.54 / 100
                case 6:
                    return 86.15 / 100
                case 7:
                    return 92.31 / 100
                case 8:
                    return 98.46 / 100
                case 9:
                    return 104.62 / 100
                case 10:
                    return 110.77 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 94.31 / 100
                case 2:
                    return 101.38 / 100
                case 3:
                    return 108.45 / 100
                case 4:
                    return 117.88 / 100
                case 5:
                    return 124.95 / 100
                case 6:
                    return 132.03 / 100
                case 7:
                    return 141.46 / 100
                case 8:
                    return 150.89 / 100
                case 9:
                    return 160.32 / 100
                case 10:
                    return 169.75 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 148.32 / 100
                case 2:
                    return 159.44 / 100
                case 3:
                    return 170.57 / 100
                case 4:
                    return 185.4 / 100
                case 5:
                    return 196.52 / 100
                case 6:
                    return 207.65 / 100
                case 7:
                    return 222.48 / 100
                case 8:
                    return 237.31 / 100
                case 9:
                    return 252.14 / 100
                case 10:
                    return 266.98 / 100
            }
        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.2,
            ["50b"]: 7.2,
            ["50a"]: 14.4,
            ["60b"]: 14.4,
            ["60a"]: 14.4,
            ["70b"]: 14.4,
            ["70a"]: 21.6,
            ["80b"]: 21.6,
            ["80a"]: 28.8,
            ["90b"]: 28.8
        }

        return { Type: "HydroDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: kuragesOath,
        Level: 1
    },
    elementalBurst: {
        Skill: nereidsAscension,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Song of Pearls",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Lisa = {
    name: "Lisa",
    src: "Assets/Characters/Lisa/Lisa.png",
    card: "Assets/Characters/Lisa/Character_Lisa_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19,
            ["20b"]: 50,
            ["20a"]: 64,
            ["40b"]: 96,
            ["40a"]: 107,
            ["50b"]: 123,
            ["50a"]: 136,
            ["60b"]: 153,
            ["60a"]: 163,
            ["70b"]: 179,
            ["70a"]: 189,
            ["80b"]: 205,
            ["80a"]: 215,
            ["90b"]: 232
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 802,
            ["20b"]: 2061,
            ["20a"]: 2661,
            ["40b"]: 3985,
            ["40a"]: 4411,
            ["50b"]: 5074,
            ["50a"]: 5642,
            ["60b"]: 6305,
            ["60a"]: 6731,
            ["70b"]: 7393,
            ["70a"]: 7818,
            ["80b"]: 8481,
            ["80a"]: 8907,
            ["90b"]: 9570
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 48,
            ["20b"]: 123,
            ["20a"]: 159,
            ["40b"]: 239,
            ["40a"]: 264,
            ["50b"]: 304,
            ["50a"]: 338,
            ["60b"]: 378,
            ["60a"]: 403,
            ["70b"]: 443,
            ["70a"]: 468,
            ["80b"]: 508,
            ["80a"]: 534,
            ["90b"]: 573
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 120,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C", "E"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 39.6 / 100;
                case 2:
                    return 42.57 / 100;
                case 3:
                    return 45.54 / 100;
                case 4:
                    return 49.5 / 100;
                case 5:
                    return 52.47 / 100;
                case 6:
                    return 55.44 / 100;
                case 7:
                    return 59.4 / 100;
                case 8:
                    return 63.36 / 100;
                case 9:
                    return 67.32 / 100;
                case 10:
                    return 71.28 / 100;
            }

        },
        Element: "ElectroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 35.92 / 100;
                case 2:
                    return 38.61 / 100;
                case 3:
                    return 41.31 / 100;
                case 4:
                    return 44.9 / 100;
                case 5:
                    return 47.59 / 100;
                case 6:
                    return 50.29 / 100;
                case 7:
                    return 53.88 / 100;
                case 8:
                    return 57.47 / 100;
                case 9:
                    return 61.06 / 100;
                case 10:
                    return 64.66 / 100;
            }
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 177.12 / 100;
                case 2:
                    return 190.4 / 100;
                case 3:
                    return 203.69 / 100;
                case 4:
                    return 221.4 / 100;
                case 5:
                    return 234.68 / 100;
                case 6:
                    return 247.97 / 100;
                case 7:
                    return 265.68 / 100;
                case 8:
                    return 283.39 / 100;
                case 9:
                    return 301.1 / 100;
                case 10:
                    return 318.82 / 100;
            }
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 24,
            ["50b"]: 24,
            ["50a"]: 48,
            ["60b"]: 48,
            ["60a"]: 48,
            ["70b"]: 48,
            ["70a"]: 72,
            ["80b"]: 72,
            ["80a"]: 96,
            ["90b"]: 96
        }

        return { Type: "ElementalMastery", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: violetArc,
        Level: 1
    },
    elementalBurst: {
        Skill: lightningRose,
        Level: 1
    },
    passive1: {
        Type: "Induced Aftershock",
        Value: null
    },
    passive2: {
        Type: "Static Electricity Field",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Mona = {
    name: "Mona",
    src: "Assets/Characters/Mona/Mona.png",
    card: "Assets/Characters/Mona/Character_Mona_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 22,
            ["20b"]: 58,
            ["20a"]: 77,
            ["40b"]: 115,
            ["40a"]: 129,
            ["50b"]: 148,
            ["50a"]: 167,
            ["60b"]: 186,
            ["60a"]: 200,
            ["70b"]: 220,
            ["70a"]: 233,
            ["80b"]: 253,
            ["80a"]: 267,
            ["90b"]: 287
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 810,
            ["20b"]: 2102,
            ["20a"]: 2797,
            ["40b"]: 4185,
            ["40a"]: 4678,
            ["50b"]: 5383,
            ["50a"]: 6041,
            ["60b"]: 6752,
            ["60a"]: 7246,
            ["70b"]: 7964,
            ["70a"]: 8458,
            ["80b"]: 9184,
            ["80a"]: 9677,
            ["90b"]: 10409
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 51,
            ["20b"]: 132,
            ["20a"]: 176,
            ["40b"]: 263,
            ["40a"]: 294,
            ["50b"]: 338,
            ["50a"]: 379,
            ["60b"]: 424,
            ["60a"]: 455,
            ["70b"]: 500,
            ["70a"]: 531,
            ["80b"]: 576,
            ["80a"]: 607,
            ["90b"]: 653
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C",],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 37.6 / 100;
                case 2:
                    return 40.42 / 100;
                case 3:
                    return 43.24 / 100;
                case 4:
                    return 47 / 100;
                case 5:
                    return 49.82 / 100;
                case 6:
                    return 52.64 / 100;
                case 7:
                    return 56.4 / 100;
                case 8:
                    return 60.16 / 100;
                case 9:
                    return 63.92 / 100;
                case 10:
                    return 67.68 / 100;
            }

        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36 / 100;
                case 2:
                    return 38.7 / 100;
                case 3:
                    return 41.4 / 100;
                case 4:
                    return 45 / 100;
                case 5:
                    return 47.7 / 100;
                case 6:
                    return 50.4 / 100;
                case 7:
                    return 54 / 100;
                case 8:
                    return 57.6 / 100;
                case 9:
                    return 61.2 / 100;
                case 10:
                    return 64.8 / 100;
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 149.72 / 100;
                case 2:
                    return 160.95 / 100;
                case 3:
                    return 172.18 / 100;
                case 4:
                    return 187.15 / 100;
                case 5:
                    return 198.38 / 100;
                case 6:
                    return 209.61 / 100;
                case 7:
                    return 224.58 / 100;
                case 8:
                    return 239.55 / 100;
                case 9:
                    return 254.52 / 100;
                case 10:
                    return 269.5 / 100;
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 8,
            ["50b"]: 8,
            ["50a"]: 16,
            ["60b"]: 16,
            ["60a"]: 16,
            ["70b"]: 16,
            ["70a"]: 24,
            ["80b"]: 24,
            ["80a"]: 32,
            ["90b"]: 32
        }

        return { Type: "EnergyRecharge", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: mirrorReflectionofDoom,
        Level: 1
    },
    elementalBurst: {
        Skill: stellarisPhantasm,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Waterborne Destiny",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Ningguang = {
    name: "Ningguang",
    src: "Assets/Characters/Ningguang/Ningguang.png",
    card: "Assets/Characters/Ningguang/Character_Ningguang_Portrait.webp",
    element: "GeoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 46,
            ["20a"]: 59,
            ["40b"]: 88,
            ["40a"]: 98,
            ["50b"]: 113,
            ["50a"]: 125,
            ["60b"]: 140,
            ["60a"]: 149,
            ["70b"]: 164,
            ["70a"]: 174,
            ["80b"]: 188,
            ["80a"]: 198,
            ["90b"]: 212
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 821,
            ["20b"]: 2108,
            ["20a"]: 2721,
            ["40b"]: 4076,
            ["40a"]: 4512,
            ["50b"]: 5189,
            ["50a"]: 5770,
            ["60b"]: 6448,
            ["60a"]: 6884,
            ["70b"]: 7561,
            ["70a"]: 7996,
            ["80b"]: 8674,
            ["80a"]: 9110,
            ["90b"]: 9787
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 48,
            ["20b"]: 123,
            ["20a"]: 159,
            ["40b"]: 239,
            ["40a"]: 264,
            ["50b"]: 304,
            ["50a"]: 338,
            ["60b"]: 378,
            ["60a"]: 403,
            ["70b"]: 443,
            ["70a"]: 468,
            ["80b"]: 508,
            ["80a"]: 534,
            ["90b"]: 573
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N1", "N1", "C", "N1", "N1", "N1", "C", "N1", "N1", "N1", "C"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (28 * 2) / 100;
                case 2:
                    return (30.1 * 2) / 100;
                case 3:
                    return (32.2 * 2) / 100;
                case 4:
                    return (35 * 2) / 100;
                case 5:
                    return (37.1 * 2) / 100;
                case 6:
                    return (39.2 * 2) / 100;
                case 7:
                    return (42 * 2) / 100;
                case 8:
                    return (44.8 * 2) / 100;
                case 9:
                    return (47.6 * 2) / 100;
                case 10:
                    return (50.4 * 2) / 100;
            }

        },
        Element: "GeoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (174.08 + (49.6 * 3)) / 100;
                case 2:
                    return (187.14 + (53.32 * 3)) / 100;
                case 3:
                    return (200.19 + (57.04 * 3)) / 100;
                case 4:
                    return (217.6 + (62 * 3)) / 100;
                case 5:
                    return (230.66 + (65.72 * 3)) / 100;
                case 6:
                    return (243.71 + (69.44 * 3)) / 100;
                case 7:
                    return (261.12 + (74.4 * 3)) / 100;
                case 8:
                    return (278.53 + (79.36 * 3)) / 100;
                case 9:
                    return (295.94 + (84.32 * 3)) / 100;
                case 10:
                    return (313.34 + (89.28 * 3)) / 100;
            }
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "GeoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "GeoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: jadeScreen,
        Level: 1
    },
    elementalBurst: {
        Skill: starshatter,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "GeoDMGBonus",
        Value: 12
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Noelle = {
    name: "Noelle",
    src: "Assets/Characters/Noelle/Noelle.png",
    card: "Assets/Characters/Noelle/Character_Noelle_Portrait.webp",
    element: "GeoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16,
            ["20b"]: 41,
            ["20a"]: 53,
            ["40b"]: 80,
            ["40a"]: 88,
            ["50b"]: 101,
            ["50a"]: 113,
            ["60b"]: 126,
            ["60a"]: 134,
            ["70b"]: 148,
            ["70a"]: 156,
            ["80b"]: 169,
            ["80a"]: 178,
            ["90b"]: 191
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1012,
            ["20b"]: 2600,
            ["20a"]: 3356,
            ["40b"]: 5027,
            ["40a"]: 5564,
            ["50b"]: 6400,
            ["50a"]: 7117,
            ["60b"]: 7953,
            ["60a"]: 8490,
            ["70b"]: 9325,
            ["70a"]: 9862,
            ["80b"]: 10698,
            ["80a"]: 11235,
            ["90b"]: 12071
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 67,
            ["20b"]: 172,
            ["20a"]: 222,
            ["40b"]: 333,
            ["40a"]: 368,
            ["50b"]: 423,
            ["50a"]: 471,
            ["60b"]: 526,
            ["60a"]: 562,
            ["70b"]: 617,
            ["70a"]: 652,
            ["80b"]: 708,
            ["80a"]: 743,
            ["90b"]: 799
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Shield",
    supportType2: "Healer",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 79.12 / 100;
                case 2:
                    return 85.56 / 100;
                case 3:
                    return 92 / 100;
                case 4:
                    return 101.2 / 100;
                case 5:
                    return 107.64 / 100;
                case 6:
                    return 115 / 100;
                case 7:
                    return 125.12 / 100;
                case 8:
                    return 135.24 / 100;
                case 9:
                    return 145.36 / 100;
                case 10:
                    return 156.4 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 73.36 / 100;
                case 2:
                    return 79.33 / 100;
                case 3:
                    return 85.3 / 100;
                case 4:
                    return 93.83 / 100;
                case 5:
                    return 99.8 / 100;
                case 6:
                    return 106.62 / 100;
                case 7:
                    return 116.01 / 100;
                case 8:
                    return 125.39 / 100;
                case 9:
                    return 134.77 / 100;
                case 10:
                    return 145.01 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 86.26 / 100;
                case 2:
                    return 93.28 / 100;
                case 3:
                    return 100.3 / 100;
                case 4:
                    return 110.33 / 100;
                case 5:
                    return 117.35 / 100;
                case 6:
                    return 125.37 / 100;
                case 7:
                    return 136.41 / 100;
                case 8:
                    return 147.44 / 100;
                case 9:
                    return 158.47 / 100;
                case 10:
                    return 170.51 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 113.43 / 100;
                case 2:
                    return 122.67 / 100;
                case 3:
                    return 131.9 / 100;
                case 4:
                    return 145.09 / 100;
                case 5:
                    return 154.32 / 100;
                case 6:
                    return 164.88 / 100;
                case 7:
                    return 179.38 / 100;
                case 8:
                    return 193.89 / 100;
                case 9:
                    return 208.4 / 100;
                case 10:
                    return 224.23 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.5,
            ["50b"]: 7.5,
            ["50a"]: 15,
            ["60b"]: 15,
            ["60a"]: 15,
            ["70b"]: 15,
            ["70a"]: 22.5,
            ["80b"]: 22.5,
            ["80a"]: 30,
            ["90b"]: 30
        }

        return { Type: "DEF%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: breastplate,
        Level: 1
    },
    elementalBurst: {
        Skill: sweepingTime,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Qiqi = {
    name: "Qiqi",
    src: "Assets/Characters/Qiqi/Qiqi.png",
    card: "Assets/Characters/Qiqi/Character_Qiqi_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 22,
            ["20b"]: 58,
            ["20a"]: 77,
            ["40b"]: 115,
            ["40a"]: 129,
            ["50b"]: 148,
            ["50a"]: 167,
            ["60b"]: 186,
            ["60a"]: 200,
            ["70b"]: 220,
            ["70a"]: 233,
            ["80b"]: 253,
            ["80a"]: 267,
            ["90b"]: 287
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 963,
            ["20b"]: 2498,
            ["20a"]: 3323,
            ["40b"]: 4973,
            ["40a"]: 5559,
            ["50b"]: 6396,
            ["50a"]: 7178,
            ["60b"]: 8023,
            ["60a"]: 8610,
            ["70b"]: 9463,
            ["70a"]: 10050,
            ["80b"]: 10912,
            ["80a"]: 11499,
            ["90b"]: 12368
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 72,
            ["20b"]: 186,
            ["20a"]: 248,
            ["40b"]: 371,
            ["40a"]: 415,
            ["50b"]: 477,
            ["50a"]: 535,
            ["60b"]: 598,
            ["60a"]: 642,
            ["70b"]: 706,
            ["70a"]: 749,
            ["80b"]: 814,
            ["80a"]: 857,
            ["90b"]: 922
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Healer",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 37.75 / 100;
                case 2:
                    return 40.83 / 100;
                case 3:
                    return 43.9 / 100;
                case 4:
                    return 48.29 / 100;
                case 5:
                    return 51.36 / 100;
                case 6:
                    return 54.87 / 100;
                case 7:
                    return 59.7 / 100;
                case 8:
                    return 64.53 / 100;
                case 9:
                    return 69.36 / 100;
                case 10:
                    return 74.63 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (64.33 * 2) / 100;
                case 2:
                    return (69.56 * 2) / 100;
                case 3:
                    return (74.8 * 2) / 100;
                case 4:
                    return (82.28 * 2) / 100;
                case 5:
                    return (87.52 * 2) / 100;
                case 6:
                    return (93.5 * 2) / 100;
                case 7:
                    return (101.73 * 2) / 100;
                case 8:
                    return (109.96 * 2) / 100;
                case 9:
                    return (118.18 * 2) / 100;
                case 10:
                    return (127.16 * 2) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 5.5,
            ["50b"]: 5.5,
            ["50a"]: 11.1,
            ["60b"]: 11.1,
            ["60a"]: 11.1,
            ["70b"]: 11.1,
            ["70a"]: 16.6,
            ["80b"]: 16.6,
            ["80a"]: 22.2,
            ["90b"]: 22.2
        }

        return { Type: "HealingBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: heraldofFrost,
        Level: 1
    },
    elementalBurst: {
        Skill: preserverofFortune,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Raiden = {
    name: "Raiden",
    src: "Assets/Characters/Raiden/Raiden.png",
    card: "Assets/Characters/Raiden/Character_Raiden_Shogun_Portrait.webp",
    element: "ElectroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26,
            ["20b"]: 68,
            ["20a"]: 91,
            ["40b"]: 136,
            ["40a"]: 152,
            ["50b"]: 175,
            ["50a"]: 196,
            ["60b"]: 219,
            ["60a"]: 235,
            ["70b"]: 258,
            ["70a"]: 274,
            ["80b"]: 298,
            ["80a"]: 314,
            ["90b"]: 337
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1005,
            ["20b"]: 2606,
            ["20a"]: 3468,
            ["40b"]: 5189,
            ["40a"]: 5801,
            ["50b"]: 6675,
            ["50a"]: 7491,
            ["60b"]: 8373,
            ["60a"]: 8985,
            ["70b"]: 9875,
            ["70a"]: 10487,
            ["80b"]: 11388,
            ["80a"]: 12000,
            ["90b"]: 12907
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 61,
            ["20b"]: 159,
            ["20a"]: 212,
            ["40b"]: 317,
            ["40a"]: 355,
            ["50b"]: 408,
            ["50a"]: 458,
            ["60b"]: 512,
            ["60a"]: 549,
            ["70b"]: 604,
            ["70a"]: 641,
            ["80b"]: 696,
            ["80a"]: 737,
            ["90b"]: 789
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 180,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "C", "N1", "C", "N1", "C"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 39.65 / 100
                case 2:
                    return 42.87 / 100
                case 3:
                    return 46.1 / 100
                case 4:
                    return 50.71 / 100
                case 5:
                    return 53.94 / 100
                case 6:
                    return 57.63 / 100
                case 7:
                    return 62.7 / 100
                case 8:
                    return 67.77 / 100
                case 9:
                    return 72.84 / 100
                case 10:
                    return 78.37 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 99.59 / 100
                case 2:
                    return 107.69 / 100
                case 3:
                    return 115.8 / 100
                case 4:
                    return 127.38 / 100
                case 5:
                    return 135.49 / 100
                case 6:
                    return 144.75 / 100
                case 7:
                    return 157.49 / 100
                case 8:
                    return 170.23 / 100
                case 9:
                    return 182.96 / 100
                case 10:
                    return 196.86 / 100
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 8,
            ["50b"]: 8,
            ["50a"]: 16,
            ["60b"]: 16,
            ["60a"]: 16,
            ["70b"]: 16,
            ["70a"]: 24,
            ["80b"]: 24,
            ["80a"]: 32,
            ["90b"]: 32
        }

        return { Type: "EnergyRecharge", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: balefulOmen,
        Level: 1
    },
    elementalBurst: {
        Skill: musouShinsetsu,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Enlightened One",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Razor = {
    name: "Razor",
    src: "Assets/Characters/Razor/Razor.png",
    card: "Assets/Characters/Razor/Character_Razor_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 50,
            ["20a"]: 65,
            ["40b"]: 97,
            ["40a"]: 108,
            ["50b"]: 124,
            ["50a"]: 138,
            ["60b"]: 154,
            ["60a"]: 164,
            ["70b"]: 180,
            ["70a"]: 191,
            ["80b"]: 207,
            ["80a"]: 217,
            ["90b"]: 234
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1003,
            ["20b"]: 2577,
            ["20a"]: 3326,
            ["40b"]: 4982,
            ["40a"]: 5514,
            ["50b"]: 6343,
            ["50a"]: 7052,
            ["60b"]: 7881,
            ["60a"]: 8413,
            ["70b"]: 9241,
            ["70a"]: 9773,
            ["80b"]: 10602,
            ["80a"]: 11134,
            ["90b"]: 11962
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 63,
            ["20b"]: 162,
            ["20a"]: 209,
            ["40b"]: 313,
            ["40a"]: 346,
            ["50b"]: 398,
            ["50a"]: 443,
            ["60b"]: 495,
            ["60a"]: 528,
            ["70b"]: 580,
            ["70a"]: 613,
            ["80b"]: 665,
            ["80a"]: 699,
            ["90b"]: 751
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 100,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "E", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "E", "N1", "N2", "N3"],
        ["Support"]: ["E", "Q", "E"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 95.92 / 100;
                case 2:
                    return 102.46 / 100;
                case 3:
                    return 109 / 100;
                case 4:
                    return 117.72 / 100;
                case 5:
                    return 124.26 / 100;
                case 6:
                    return 131.89 / 100;
                case 7:
                    return 141.7 / 100;
                case 8:
                    return 151.51 / 100;
                case 9:
                    return 161.32 / 100;
                case 10:
                    return 171.13 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 82.63 / 100;
                case 2:
                    return 88.27 / 100;
                case 3:
                    return 93.9 / 100;
                case 4:
                    return 101.41 / 100;
                case 5:
                    return 107.05 / 100;
                case 6:
                    return 113.62 / 100;
                case 7:
                    return 122.07 / 100;
                case 8:
                    return 130.52 / 100;
                case 9:
                    return 138.97 / 100;
                case 10:
                    return 147.42 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 103.31 / 100;
                case 2:
                    return 110.36 / 100;
                case 3:
                    return 117.4 / 100;
                case 4:
                    return 126.79 / 100;
                case 5:
                    return 133.84 / 100;
                case 6:
                    return 142.05 / 100;
                case 7:
                    return 152.62 / 100;
                case 8:
                    return 163.19 / 100;
                case 9:
                    return 173.75 / 100;
                case 10:
                    return 184.32 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.5,
            ["50b"]: 7.5,
            ["50a"]: 15,
            ["60b"]: 15,
            ["60a"]: 15,
            ["70b"]: 15,
            ["70a"]: 22.5,
            ["80b"]: 22.5,
            ["80a"]: 30,
            ["90b"]: 30
        }

        return { Type: "PhysicalDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: clawandThunder,
        Level: 1
    },
    elementalBurst: {
        Skill: lightningFang,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "EnergyRecharge",
        Value: 15
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Rosaria = {
    name: "Rosaria",
    src: "Assets/Characters/Rosaria/Rosaria.png",
    card: "Assets/Characters/Rosaria/Character_Rosaria_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 52,
            ["20a"]: 67,
            ["40b"]: 100,
            ["40a"]: 111,
            ["50b"]: 127,
            ["50a"]: 141,
            ["60b"]: 158,
            ["60a"]: 169,
            ["70b"]: 185,
            ["70a"]: 196,
            ["80b"]: 213,
            ["80a"]: 223,
            ["90b"]: 240
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1030,
            ["20b"]: 2647,
            ["20a"]: 3417,
            ["40b"]: 5118,
            ["40a"]: 5665,
            ["50b"]: 6516,
            ["50a"]: 7245,
            ["60b"]: 8096,
            ["60a"]: 8643,
            ["70b"]: 9493,
            ["70a"]: 10040,
            ["80b"]: 10891,
            ["80a"]: 11438,
            ["90b"]: 12289
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 60,
            ["20b"]: 153,
            ["20a"]: 197,
            ["40b"]: 296,
            ["40a"]: 327,
            ["50b"]: 376,
            ["50a"]: 418,
            ["60b"]: 468,
            ["60a"]: 499,
            ["70b"]: 548,
            ["70a"]: 580,
            ["80b"]: 629,
            ["80a"]: 661,
            ["90b"]: 710
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3"],
        ["Support"]: ["E", "Q",],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 52.46 / 100;
                case 2:
                    return 56.73 / 100;
                case 3:
                    return 61 / 100;
                case 4:
                    return 67.1 / 100;
                case 5:
                    return 71.37 / 100;
                case 6:
                    return 76.25 / 100;
                case 7:
                    return 82.96 / 100;
                case 8:
                    return 89.67 / 100;
                case 9:
                    return 96.38 / 100;
                case 10:
                    return 103.7 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 51.6 / 100;
                case 2:
                    return 55.8 / 100;
                case 3:
                    return 60 / 100;
                case 4:
                    return 66 / 100;
                case 5:
                    return 70.2 / 100;
                case 6:
                    return 75 / 100;
                case 7:
                    return 81.6 / 100;
                case 8:
                    return 88.2 / 100;
                case 9:
                    return 94.8 / 100;
                case 10:
                    return 102 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (31.82 * 2) / 100;
                case 2:
                    return (34.41 * 2) / 100;
                case 3:
                    return (37 * 2) / 100;
                case 4:
                    return (40.7 * 2) / 100;
                case 5:
                    return (43.29 * 2) / 100;
                case 6:
                    return (46.25 * 2) / 100;
                case 7:
                    return (50.32 * 2) / 100;
                case 8:
                    return (54.39 * 2) / 100;
                case 9:
                    return (58.46 * 2) / 100;
                case 10:
                    return (62.9 * 2) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: ravagingConfession,
        Level: 1
    },
    elementalBurst: {
        Skill: ritesofTermination,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Sara = {
    name: "Sara",
    src: "Assets/Characters/Sara/Sara.png",
    card: "Assets/Characters/Sara/Character_Kujou_Sara_Portrait.webp",
    element: "ElectroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16,
            ["20b"]: 42,
            ["20a"]: 54,
            ["40b"]: 81,
            ["40a"]: 90,
            ["50b"]: 104,
            ["50a"]: 115,
            ["60b"]: 129,
            ["60a"]: 137,
            ["70b"]: 151,
            ["70a"]: 160,
            ["80b"]: 173,
            ["80a"]: 182,
            ["90b"]: 195
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 802,
            ["20b"]: 2061,
            ["20a"]: 2661,
            ["40b"]: 3985,
            ["40a"]: 4411,
            ["50b"]: 5074,
            ["50a"]: 5642,
            ["60b"]: 6305,
            ["60a"]: 6731,
            ["70b"]: 7393,
            ["70a"]: 7818,
            ["80b"]: 8481,
            ["80a"]: 8907,
            ["90b"]: 9570
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 53,
            ["20b"]: 135,
            ["20a"]: 175,
            ["40b"]: 262,
            ["40a"]: 289,
            ["50b"]: 333,
            ["50a"]: 370,
            ["60b"]: 414,
            ["60a"]: 442,
            ["70b"]: 485,
            ["70a"]: 513,
            ["80b"]: 556,
            ["80a"]: 584,
            ["90b"]: 628
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "ATKBooster",
    sequence: {
        ["Dps"]: ["E", "C", "Q", "C", "C", "C", "C", "C"],
        ["Support"]: ["E", "C", "Q",],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 52.46 / 100;
                case 2:
                    return 56.73 / 100;
                case 3:
                    return 61 / 100;
                case 4:
                    return 67.1 / 100;
                case 5:
                    return 71.37 / 100;
                case 6:
                    return 76.25 / 100;
                case 7:
                    return 82.96 / 100;
                case 8:
                    return 89.67 / 100;
                case 9:
                    return 96.38 / 100;
                case 10:
                    return 103.7 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 51.6 / 100;
                case 2:
                    return 55.8 / 100;
                case 3:
                    return 60 / 100;
                case 4:
                    return 66 / 100;
                case 5:
                    return 70.2 / 100;
                case 6:
                    return 75 / 100;
                case 7:
                    return 81.6 / 100;
                case 8:
                    return 88.2 / 100;
                case 9:
                    return 94.8 / 100;
                case 10:
                    return 102 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (31.82 * 2) / 100;
                case 2:
                    return (34.41 * 2) / 100;
                case 3:
                    return (37 * 2) / 100;
                case 4:
                    return (40.7 * 2) / 100;
                case 5:
                    return (43.29 * 2) / 100;
                case 6:
                    return (46.25 * 2) / 100;
                case 7:
                    return (50.32 * 2) / 100;
                case 8:
                    return (54.39 * 2) / 100;
                case 9:
                    return (58.46 * 2) / 100;
                case 10:
                    return (62.9 * 2) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 124 / 100;
                case 2:
                    return 133.3 / 100;
                case 3:
                    return 142.6 / 100;
                case 4:
                    return 155 / 100;
                case 5:
                    return 164.3 / 100;
                case 6:
                    return 174 / 100;
                case 7:
                    return 186 / 100;
                case 8:
                    return 198.4 / 100;
                case 9:
                    return 210.8 / 100;
                case 10:
                    return 223.2 / 100;
            }
        },
        Element: "ElectroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: tenguStormcall,
        Level: 1
    },
    elementalBurst: {
        Skill: koukouSendou,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Sayu = {
    name: "Sayu",
    src: "Assets/Characters/Sayu/Sayu.png",
    card: "Assets/Characters/Sayu/Character_Sayu_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 53,
            ["20a"]: 68,
            ["40b"]: 102,
            ["40a"]: 113,
            ["50b"]: 130,
            ["50a"]: 144,
            ["60b"]: 161,
            ["60a"]: 172,
            ["70b"]: 189,
            ["70a"]: 200,
            ["80b"]: 216,
            ["80a"]: 227,
            ["90b"]: 244
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 994,
            ["20b"]: 2553,
            ["20a"]: 3296,
            ["40b"]: 4937,
            ["40a"]: 5464,
            ["50b"]: 6285,
            ["50a"]: 6988,
            ["60b"]: 7809,
            ["60a"]: 8337,
            ["70b"]: 9157,
            ["70a"]: 9684,
            ["80b"]: 10505,
            ["80a"]: 11033,
            ["90b"]: 11854
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 62,
            ["20b"]: 160,
            ["20a"]: 207,
            ["40b"]: 310,
            ["40a"]: 343,
            ["50b"]: 395,
            ["50a"]: 439,
            ["60b"]: 491,
            ["60a"]: 524,
            ["70b"]: 575,
            ["70a"]: 608,
            ["80b"]: 660,
            ["80a"]: 693,
            ["90b"]: 745
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Healer",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q",],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 72.2 / 100;
                case 2:
                    return 78.1 / 100;
                case 3:
                    return 84 / 100;
                case 4:
                    return 92.4 / 100;
                case 5:
                    return 98.28 / 100;
                case 6:
                    return 105 / 100;
                case 7:
                    return 114.24 / 100;
                case 8:
                    return 123.48 / 100;
                case 9:
                    return 132.72 / 100;
                case 10:
                    return 142.8 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 71.4 / 100;
                case 2:
                    return 77.2 / 100;
                case 3:
                    return 83 / 100;
                case 4:
                    return 91.3 / 100;
                case 5:
                    return 97.11 / 100;
                case 6:
                    return 103.75 / 100;
                case 7:
                    return 112.88 / 100;
                case 8:
                    return 122.01 / 100;
                case 9:
                    return 131.14 / 100;
                case 10:
                    return 141.1 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (43.4 * 2) / 100;
                case 2:
                    return (47 * 2) / 100;
                case 3:
                    return (50.5 * 2) / 100;
                case 4:
                    return (55.55 * 2) / 100;
                case 5:
                    return (59.09 * 2) / 100;
                case 6:
                    return (63.13 * 2) / 100;
                case 7:
                    return (68.68 * 2) / 100;
                case 8:
                    return (74.23 * 2) / 100;
                case 9:
                    return (79.79 * 2) / 100;
                case 10:
                    return (85.85 * 2) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 98.1 / 100;
                case 2:
                    return 106.1 / 100;
                case 3:
                    return 114.1 / 100;
                case 4:
                    return 125.51 / 100;
                case 5:
                    return 133.5 / 100;
                case 6:
                    return 142.63 / 100;
                case 7:
                    return 155.18 / 100;
                case 8:
                    return 167.73 / 100;
                case 9:
                    return 180.28 / 100;
                case 10:
                    return 193.97 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 24,
            ["50b"]: 24,
            ["50a"]: 48,
            ["60b"]: 48,
            ["60a"]: 48,
            ["70b"]: 48,
            ["70a"]: 72,
            ["80b"]: 72,
            ["80a"]: 96,
            ["90b"]: 96
        }

        return { Type: "ElementalMastery", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: fuuinDash,
        Level: 1
    },
    elementalBurst: {
        Skill: mujinaaFlurry,
        Level: 1
    },
    passive1: {
        Type: "Someone More Capable",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Shenhe = {
    name: "Shenhe",
    src: "Assets/Characters/Shenhe/Shenhe.png",
    card: "Assets/Characters/Shenhe/Character_Shenhe_Portrait.webp",
    element: "CryoCharacter",
    level: "1b",

    baseAttack: function () {
        let baseattack = {
            ["1b"]: 24,
            ["20b"]: 61,
            ["20a"]: 82,
            ["40b"]: 122,
            ["40a"]: 137,
            ["50b"]: 157,
            ["50a"]: 176,
            ["60b"]: 197,
            ["60a"]: 211,
            ["70b"]: 232,
            ["70a"]: 247,
            ["80b"]: 268,
            ["80a"]: 282,
            ["90b"]: 304
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1011,
            ["20b"]: 2624,
            ["20a"]: 3491,
            ["40b"]: 5224,
            ["40a"]: 5840,
            ["50b"]: 6719,
            ["50a"]: 7540,
            ["60b"]: 8429,
            ["60a"]: 9045,
            ["70b"]: 9941,
            ["70a"]: 10557,
            ["80b"]: 11463,
            ["80a"]: 12080,
            ["90b"]: 12993
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 65,
            ["20b"]: 168,
            ["20a"]: 223,
            ["40b"]: 334,
            ["40a"]: 373,
            ["50b"]: 429,
            ["50a"]: 482,
            ["60b"]: 538,
            ["60a"]: 578,
            ["70b"]: 635,
            ["70a"]: 674,
            ["80b"]: 732,
            ["80a"]: 772,
            ["90b"]: 830
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "ATKBooster",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "C", "N1", "C", "N1", "C"],
        ["Support"]: ["E", "Q",],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.26 / 100;
                case 2:
                    return 46.78 / 100;
                case 3:
                    return 50.3 / 100;
                case 4:
                    return 55.33 / 100;
                case 5:
                    return 58.85 / 100;
                case 6:
                    return 62.88 / 100;
                case 7:
                    return 68.41 / 100;
                case 8:
                    return 73.94 / 100;
                case 9:
                    return 79.47 / 100;
                case 10:
                    return 85.5 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 51.6 / 100;
                case 2:
                    return 55.8 / 100;
                case 3:
                    return 60 / 100;
                case 4:
                    return 66 / 100;
                case 5:
                    return 70.2 / 100;
                case 6:
                    return 75 / 100;
                case 7:
                    return 81.6 / 100;
                case 8:
                    return 88.2 / 100;
                case 9:
                    return 94.8 / 100;
                case 10:
                    return 102 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (31.82 * 2) / 100;
                case 2:
                    return (34.41 * 2) / 100;
                case 3:
                    return (37 * 2) / 100;
                case 4:
                    return (40.7 * 2) / 100;
                case 5:
                    return (43.29 * 2) / 100;
                case 6:
                    return (46.25 * 2) / 100;
                case 7:
                    return (50.32 * 2) / 100;
                case 8:
                    return (54.39 * 2) / 100;
                case 9:
                    return (58.46 * 2) / 100;
                case 10:
                    return (62.9 * 2) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 110.67 / 100;
                case 2:
                    return 119.68 / 100;
                case 3:
                    return 128.69 / 100;
                case 4:
                    return 141.56 / 100;
                case 5:
                    return 150.57 / 100;
                case 6:
                    return 160.86 / 100;
                case 7:
                    return 175.02 / 100;
                case 8:
                    return 189.17 / 100;
                case 9:
                    return 203.33 / 100;
                case 10:
                    return 218.77 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.2,
            ["50b"]: 7.2,
            ["50a"]: 14.4,
            ["60b"]: 14.4,
            ["60a"]: 14.4,
            ["70b"]: 14.4,
            ["70a"]: 21.6,
            ["80b"]: 21.6,
            ["80a"]: 28.8,
            ["90b"]: 28.8
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: springSpiritSummoning,
        Level: 1
    },
    elementalBurst: {
        Skill: divineMaidensDeliverance,
        Level: 1
    },
    passive1: {
        Type: "Deific Embrace",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Sucrose = {
    name: "Sucrose",
    src: "Assets/Characters/Sucrose/Sucrose.png",
    card: "Assets/Characters/Sucrose/Character_Sucrose_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 14,
            ["20b"]: 37,
            ["20a"]: 47,
            ["40b"]: 71,
            ["40a"]: 78,
            ["50b"]: 90,
            ["50a"]: 100,
            ["60b"]: 112,
            ["60a"]: 120,
            ["70b"]: 131,
            ["70a"]: 139,
            ["80b"]: 151,
            ["80a"]: 158,
            ["90b"]: 170
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 775,
            ["20b"]: 1991,
            ["20a"]: 2570,
            ["40b"]: 3850,
            ["40a"]: 4261,
            ["50b"]: 4901,
            ["50a"]: 5450,
            ["60b"]: 6090,
            ["60a"]: 6501,
            ["70b"]: 7141,
            ["70a"]: 7552,
            ["80b"]: 8192,
            ["80a"]: 8603,
            ["90b"]: 9243
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 59,
            ["20b"]: 151,
            ["20a"]: 195,
            ["40b"]: 293,
            ["40a"]: 324,
            ["50b"]: 373,
            ["50a"]: 414,
            ["60b"]: 463,
            ["60a"]: 494,
            ["70b"]: 543,
            ["70a"]: 574,
            ["80b"]: 623,
            ["80a"]: 653,
            ["90b"]: 703
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "ElementalBuffer",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q",],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 33.46 / 100;
                case 2:
                    return 35.97 / 100;
                case 3:
                    return 38.48 / 100;
                case 4:
                    return 41.83 / 100;
                case 5:
                    return 44.34 / 100;
                case 6:
                    return 46.85 / 100;
                case 7:
                    return 50.2 / 100;
                case 8:
                    return 53.54 / 100;
                case 9:
                    return 56.89 / 100;
                case 10:
                    return 60.24 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 30.62 / 100;
                case 2:
                    return 32.91 / 100;
                case 3:
                    return 35.21 / 100;
                case 4:
                    return 38.27 / 100;
                case 5:
                    return 40.57 / 100;
                case 6:
                    return 42.86 / 100;
                case 7:
                    return 45.92 / 100;
                case 8:
                    return 48.99 / 100;
                case 9:
                    return 52.05 / 100;
                case 10:
                    return 55.11 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 38.45 / 100;
                case 2:
                    return 41.33 / 100;
                case 3:
                    return 44.22 / 100;
                case 4:
                    return 48.06 / 100;
                case 5:
                    return 50.94 / 100;
                case 6:
                    return 53.83 / 100;
                case 7:
                    return 57.67 / 100;
                case 8:
                    return 61.52 / 100;
                case 9:
                    return 65.36 / 100;
                case 10:
                    return 69.21 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.92 / 100;
                case 2:
                    return 51.51 / 100;
                case 3:
                    return 55.11 / 100;
                case 4:
                    return 59.9 / 100;
                case 5:
                    return 63.49 / 100;
                case 6:
                    return 67.08 / 100;
                case 7:
                    return 71.88 / 100;
                case 8:
                    return 76.67 / 100;
                case 9:
                    return 81.46 / 100;
                case 10:
                    return 86.25 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "AnemoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: astableAnemohypostasisCreation,
        Level: 1
    },
    elementalBurst: {
        Skill: forbiddenCreation,
        Level: 1
    },
    passive1: {
        Type: "Catalyst Conversion",
        Value: null
    },
    passive2: {
        Type: "Mollis Favonius",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Thoma = {
    name: "Thoma",
    src: "Assets/Characters/Thoma/Thoma.png",
    card: "Assets/Characters/Thoma/Character_Thoma_Portrait.webp",
    element: "PyroCharacter",
    level: "1b",

    baseAttack: function () {
        let baseattack = {
            ["1b"]: 17,
            ["20b"]: 43,
            ["20a"]: 56,
            ["40b"]: 84,
            ["40a"]: 93,
            ["50b"]: 107,
            ["50a"]: 119,
            ["60b"]: 133,
            ["60a"]: 142,
            ["70b"]: 156,
            ["70a"]: 165,
            ["80b"]: 179,
            ["80a"]: 188,
            ["90b"]: 202
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 866,
            ["20b"]: 2225,
            ["20a"]: 2872,
            ["40b"]: 4302,
            ["40a"]: 4762,
            ["50b"]: 5478,
            ["50a"]: 6091,
            ["60b"]: 6806,
            ["60a"]: 7266,
            ["70b"]: 7981,
            ["70a"]: 8440,
            ["80b"]: 9156,
            ["80a"]: 9616,
            ["90b"]: 10331
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 63,
            ["20b"]: 162,
            ["20a"]: 209,
            ["40b"]: 313,
            ["40a"]: 346,
            ["50b"]: 398,
            ["50a"]: 443,
            ["60b"]: 495,
            ["60a"]: 528,
            ["70b"]: 580,
            ["70a"]: 613,
            ["80b"]: 665,
            ["80a"]: 699,
            ["90b"]: 751
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Shield",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5",],
        ["Support"]: ["E", "Q",],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.39 / 100;
                case 2:
                    return 48.01 / 100;
                case 3:
                    return 51.62 / 100;
                case 4:
                    return 56.78 / 100;
                case 5:
                    return 60.4 / 100;
                case 6:
                    return 64.53 / 100;
                case 7:
                    return 70.2 / 100;
                case 8:
                    return 75.88 / 100;
                case 9:
                    return 81.56 / 100;
                case 10:
                    return 87.75 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.63 / 100;
                case 2:
                    return 47.18 / 100;
                case 3:
                    return 50.73 / 100;
                case 4:
                    return 55.8 / 100;
                case 5:
                    return 59.35 / 100;
                case 6:
                    return 63.41 / 100;
                case 7:
                    return 68.99 / 100;
                case 8:
                    return 74.57 / 100;
                case 9:
                    return 80.15 / 100;
                case 10:
                    return 86.24 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (26.79 * 2) / 100;
                case 2:
                    return (28.97 * 2) / 100;
                case 3:
                    return (31.15 * 2) / 100;
                case 4:
                    return (34.27 * 2) / 100;
                case 5:
                    return (36.45 * 2) / 100;
                case 6:
                    return (38.94 * 2) / 100;
                case 7:
                    return (42.36 * 2) / 100;
                case 8:
                    return (45.79 * 2) / 100;
                case 9:
                    return (49.22 * 2) / 100;
                case 10:
                    return (52.95 * 2) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 67.36 / 100;
                case 2:
                    return 72.84 / 100;
                case 3:
                    return 78.32 / 100;
                case 4:
                    return 86.15 / 100;
                case 5:
                    return 91.63 / 100;
                case 6:
                    return 97.9 / 100;
                case 7:
                    return 106.52 / 100;
                case 8:
                    return 115.13 / 100;
                case 9:
                    return 123.75 / 100;
                case 10:
                    return 133.14 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: blazingBlessing,
        Level: 1
    },
    elementalBurst: {
        Skill: crimsonOoyoroi,
        Level: 1
    },
    passive1: {
        Type: "Imbricated Armor",
        Value: null
    },
    passive2: {
        Type: "Flaming Assault",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Tartaglia = {
    name: "Tartaglia",
    src: "Assets/Characters/Tartaglia/Tartaglia.png",
    card: "Assets/Characters/Tartaglia/Character_Tartaglia_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 23,
            ["20b"]: 61,
            ["20a"]: 81,
            ["40b"]: 121,
            ["40a"]: 135,
            ["50b"]: 156,
            ["50a"]: 175,
            ["60b"]: 195,
            ["60a"]: 210,
            ["70b"]: 231,
            ["70a"]: 245,
            ["80b"]: 266,
            ["80a"]: 280,
            ["90b"]: 301
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1020,
            ["20b"]: 2646,
            ["20a"]: 3521,
            ["40b"]: 5268,
            ["40a"]: 5889,
            ["50b"]: 6776,
            ["50a"]: 7604,
            ["60b"]: 8500,
            ["60a"]: 9121,
            ["70b"]: 10025,
            ["70a"]: 10647,
            ["80b"]: 11561,
            ["80a"]: 12182,
            ["90b"]: 13103
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 63,
            ["20b"]: 165,
            ["20a"]: 219,
            ["40b"]: 328,
            ["40a"]: 366,
            ["50b"]: 421,
            ["50a"]: 473,
            ["60b"]: 528,
            ["60a"]: 567,
            ["70b"]: 623,
            ["70a"]: 662,
            ["80b"]: 719,
            ["80a"]: 757,
            ["90b"]: 815
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "Q"],
        ["Support"]: ["Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 30.62 / 100;
                case 2:
                    return 32.91 / 100;
                case 3:
                    return 35.21 / 100;
                case 4:
                    return 38.27 / 100;
                case 5:
                    return 40.57 / 100;
                case 6:
                    return 42.86 / 100;
                case 7:
                    return 45.92 / 100;
                case 8:
                    return 48.99 / 100;
                case 9:
                    return 52.05 / 100;
                case 10:
                    return 55.11 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 38.45 / 100;
                case 2:
                    return 41.33 / 100;
                case 3:
                    return 44.22 / 100;
                case 4:
                    return 48.06 / 100;
                case 5:
                    return 50.94 / 100;
                case 6:
                    return 53.83 / 100;
                case 7:
                    return 57.67 / 100;
                case 8:
                    return 61.52 / 100;
                case 9:
                    return 65.36 / 100;
                case 10:
                    return 69.21 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.92 / 100;
                case 2:
                    return 51.51 / 100;
                case 3:
                    return 55.11 / 100;
                case 4:
                    return 59.9 / 100;
                case 5:
                    return 63.49 / 100;
                case 6:
                    return 67.08 / 100;
                case 7:
                    return 71.88 / 100;
                case 8:
                    return 76.67 / 100;
                case 9:
                    return 81.46 / 100;
                case 10:
                    return 86.25 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.2,
            ["50b"]: 7.2,
            ["50a"]: 14.4,
            ["60b"]: 14.4,
            ["60a"]: 14.4,
            ["70b"]: 14.4,
            ["70a"]: 21.6,
            ["80b"]: 21.6,
            ["80a"]: 28.8,
            ["90b"]: 28.8
        }

        return { Type: "HydroDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: ragingTide,
        Level: 1
    },
    elementalBurst: {
        Skill: obliteration,
        Level: 1
    },
    passive1: {
        Type: "Never Ending",
        Value: null
    },
    passive2: {
        Type: "Sword of Torrents",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Traveler_Anemo = {
    name: "Traveler (Anemo)",
    src: "Assets/Characters/Traveler/Traveler.png",
    card: "Assets/Characters/Traveler/Character_Traveler_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 46,
            ["20a"]: 59,
            ["40b"]: 88,
            ["40a"]: 98,
            ["50b"]: 113,
            ["50a"]: 125,
            ["60b"]: 140,
            ["60a"]: 149,
            ["70b"]: 164,
            ["70a"]: 174,
            ["80b"]: 188,
            ["80a"]: 198,
            ["90b"]: 212
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 912,
            ["20b"]: 2342,
            ["20a"]: 3024,
            ["40b"]: 4529,
            ["40a"]: 5013,
            ["50b"]: 5766,
            ["50a"]: 6411,
            ["60b"]: 7164,
            ["60a"]: 7648,
            ["70b"]: 8401,
            ["70a"]: 8885,
            ["80b"]: 9638,
            ["80a"]: 10122,
            ["90b"]: 10875
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 57,
            ["20b"]: 147,
            ["20a"]: 190,
            ["40b"]: 284,
            ["40a"]: 315,
            ["50b"]: 362,
            ["50a"]: 405,
            ["60b"]: 450,
            ["60a"]: 480,
            ["70b"]: 527,
            ["70a"]: 558,
            ["80b"]: 605,
            ["80a"]: 635,
            ["90b"]: 683
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5", "E", "Q"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.5 / 100;
                case 2:
                    return 48.1 / 100;
                case 3:
                    return 51.7 / 100;
                case 4:
                    return 56.9 / 100;
                case 5:
                    return 60.5 / 100;
                case 6:
                    return 64.6 / 100;
                case 7:
                    return 70.3 / 100;
                case 8:
                    return 76 / 100;
                case 9:
                    return 81.7 / 100;
                case 10:
                    return 87.9 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.4 / 100;
                case 2:
                    return 47 / 100;
                case 3:
                    return 50.5 / 100;
                case 4:
                    return 55.6 / 100;
                case 5:
                    return 59.1 / 100;
                case 6:
                    return 63.1 / 100;
                case 7:
                    return 68.7 / 100;
                case 8:
                    return 74.2 / 100;
                case 9:
                    return 79.8 / 100;
                case 10:
                    return 85.9 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 53 / 100;
                case 2:
                    return 57.3 / 100;
                case 3:
                    return 61.6 / 100;
                case 4:
                    return 67.8 / 100;
                case 5:
                    return 72.1 / 100;
                case 6:
                    return 77 / 100;
                case 7:
                    return 83.8 / 100;
                case 8:
                    return 90.6 / 100;
                case 9:
                    return 97.3 / 100;
                case 10:
                    return 105 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 58.3 / 100;
                case 2:
                    return 63.1 / 100;
                case 3:
                    return 67.8 / 100;
                case 4:
                    return 74.6 / 100;
                case 5:
                    return 79.3 / 100;
                case 6:
                    return 84.8 / 100;
                case 7:
                    return 92.2 / 100;
                case 8:
                    return 99.7 / 100;
                case 9:
                    return 107 / 100;
                case 10:
                    return 115 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 70.8 / 100;
                case 2:
                    return 76.5 / 100;
                case 3:
                    return 82.3 / 100;
                case 4:
                    return 90.5 / 100;
                case 5:
                    return 96.3 / 100;
                case 6:
                    return 103 / 100;
                case 7:
                    return 112 / 100;
                case 8:
                    return 121 / 100;
                case 9:
                    return 130 / 100;
                case 10:
                    return 140 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: palmVortex,
        Level: 1
    },
    elementalBurst: {
        Skill: gustSurge,
        Level: 1
    },
    passive1: {
        Type: "Slitting Wind",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Traveler_Electro = {
    name: "Traveler (Electro)",
    src: "Assets/Characters/Traveler/Traveler.png",
    card: "Assets/Characters/Traveler/Character_Traveler_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 46,
            ["20a"]: 59,
            ["40b"]: 88,
            ["40a"]: 98,
            ["50b"]: 113,
            ["50a"]: 125,
            ["60b"]: 140,
            ["60a"]: 149,
            ["70b"]: 164,
            ["70a"]: 174,
            ["80b"]: 188,
            ["80a"]: 198,
            ["90b"]: 212
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 912,
            ["20b"]: 2342,
            ["20a"]: 3024,
            ["40b"]: 4529,
            ["40a"]: 5013,
            ["50b"]: 5766,
            ["50a"]: 6411,
            ["60b"]: 7164,
            ["60a"]: 7648,
            ["70b"]: 8401,
            ["70a"]: 8885,
            ["80b"]: 9638,
            ["80a"]: 10122,
            ["90b"]: 10875
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 57,
            ["20b"]: 147,
            ["20a"]: 190,
            ["40b"]: 284,
            ["40a"]: 315,
            ["50b"]: 362,
            ["50a"]: 405,
            ["60b"]: 450,
            ["60a"]: 480,
            ["70b"]: 527,
            ["70a"]: 558,
            ["80b"]: 605,
            ["80a"]: 635,
            ["90b"]: 683
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 120,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5", "E", "Q"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.5 / 100;
                case 2:
                    return 48.1 / 100;
                case 3:
                    return 51.7 / 100;
                case 4:
                    return 56.9 / 100;
                case 5:
                    return 60.5 / 100;
                case 6:
                    return 64.6 / 100;
                case 7:
                    return 70.3 / 100;
                case 8:
                    return 76 / 100;
                case 9:
                    return 81.7 / 100;
                case 10:
                    return 87.9 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.4 / 100;
                case 2:
                    return 47 / 100;
                case 3:
                    return 50.5 / 100;
                case 4:
                    return 55.6 / 100;
                case 5:
                    return 59.1 / 100;
                case 6:
                    return 63.1 / 100;
                case 7:
                    return 68.7 / 100;
                case 8:
                    return 74.2 / 100;
                case 9:
                    return 79.8 / 100;
                case 10:
                    return 85.9 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 53 / 100;
                case 2:
                    return 57.3 / 100;
                case 3:
                    return 61.6 / 100;
                case 4:
                    return 67.8 / 100;
                case 5:
                    return 72.1 / 100;
                case 6:
                    return 77 / 100;
                case 7:
                    return 83.8 / 100;
                case 8:
                    return 90.6 / 100;
                case 9:
                    return 97.3 / 100;
                case 10:
                    return 105 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 58.3 / 100;
                case 2:
                    return 63.1 / 100;
                case 3:
                    return 67.8 / 100;
                case 4:
                    return 74.6 / 100;
                case 5:
                    return 79.3 / 100;
                case 6:
                    return 84.8 / 100;
                case 7:
                    return 92.2 / 100;
                case 8:
                    return 99.7 / 100;
                case 9:
                    return 107 / 100;
                case 10:
                    return 115 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 70.8 / 100;
                case 2:
                    return 76.5 / 100;
                case 3:
                    return 82.3 / 100;
                case 4:
                    return 90.5 / 100;
                case 5:
                    return 96.3 / 100;
                case 6:
                    return 103 / 100;
                case 7:
                    return 112 / 100;
                case 8:
                    return 121 / 100;
                case 9:
                    return 130 / 100;
                case 10:
                    return 140 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: lightningBlade,
        Level: 1
    },
    elementalBurst: {
        Skill: bellowingThunder,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Traveler_Geo = {
    name: "Traveler (Geo)",
    src: "Assets/Characters/Traveler/Traveler.png",
    card: "Assets/Characters/Traveler/Character_Traveler_Portrait.webp",
    element: "GeoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18,
            ["20b"]: 46,
            ["20a"]: 59,
            ["40b"]: 88,
            ["40a"]: 98,
            ["50b"]: 113,
            ["50a"]: 125,
            ["60b"]: 140,
            ["60a"]: 149,
            ["70b"]: 164,
            ["70a"]: 174,
            ["80b"]: 188,
            ["80a"]: 198,
            ["90b"]: 212
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 912,
            ["20b"]: 2342,
            ["20a"]: 3024,
            ["40b"]: 4529,
            ["40a"]: 5013,
            ["50b"]: 5766,
            ["50a"]: 6411,
            ["60b"]: 7164,
            ["60a"]: 7648,
            ["70b"]: 8401,
            ["70a"]: 8885,
            ["80b"]: 9638,
            ["80a"]: 10122,
            ["90b"]: 10875
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 57,
            ["20b"]: 147,
            ["20a"]: 190,
            ["40b"]: 284,
            ["40a"]: 315,
            ["50b"]: 362,
            ["50a"]: 405,
            ["60b"]: 450,
            ["60a"]: 480,
            ["70b"]: 527,
            ["70a"]: 558,
            ["80b"]: 605,
            ["80a"]: 635,
            ["90b"]: 683
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5", "E", "Q"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.5 / 100;
                case 2:
                    return 48.1 / 100;
                case 3:
                    return 51.7 / 100;
                case 4:
                    return 56.9 / 100;
                case 5:
                    return 60.5 / 100;
                case 6:
                    return 64.6 / 100;
                case 7:
                    return 70.3 / 100;
                case 8:
                    return 76 / 100;
                case 9:
                    return 81.7 / 100;
                case 10:
                    return 87.9 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.4 / 100;
                case 2:
                    return 47 / 100;
                case 3:
                    return 50.5 / 100;
                case 4:
                    return 55.6 / 100;
                case 5:
                    return 59.1 / 100;
                case 6:
                    return 63.1 / 100;
                case 7:
                    return 68.7 / 100;
                case 8:
                    return 74.2 / 100;
                case 9:
                    return 79.8 / 100;
                case 10:
                    return 85.9 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 53 / 100;
                case 2:
                    return 57.3 / 100;
                case 3:
                    return 61.6 / 100;
                case 4:
                    return 67.8 / 100;
                case 5:
                    return 72.1 / 100;
                case 6:
                    return 77 / 100;
                case 7:
                    return 83.8 / 100;
                case 8:
                    return 90.6 / 100;
                case 9:
                    return 97.3 / 100;
                case 10:
                    return 105 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 58.3 / 100;
                case 2:
                    return 63.1 / 100;
                case 3:
                    return 67.8 / 100;
                case 4:
                    return 74.6 / 100;
                case 5:
                    return 79.3 / 100;
                case 6:
                    return 84.8 / 100;
                case 7:
                    return 92.2 / 100;
                case 8:
                    return 99.7 / 100;
                case 9:
                    return 107 / 100;
                case 10:
                    return 115 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 70.8 / 100;
                case 2:
                    return 76.5 / 100;
                case 3:
                    return 82.3 / 100;
                case 4:
                    return 90.5 / 100;
                case 5:
                    return 96.3 / 100;
                case 6:
                    return 103 / 100;
                case 7:
                    return 112 / 100;
                case 8:
                    return 121 / 100;
                case 9:
                    return 130 / 100;
                case 10:
                    return 140 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: starfellSword,
        Level: 1
    },
    elementalBurst: {
        Skill: wakeofEarth,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Frenzied Rockslide",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Venti = {
    name: "Venti",
    src: "Assets/Characters/Venti/Venti.png",
    card: "Assets/Characters/Venti/Character_Venti_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 53,
            ["20a"]: 71,
            ["40b"]: 106,
            ["40a"]: 118,
            ["50b"]: 136,
            ["50a"]: 153,
            ["60b"]: 171,
            ["60a"]: 183,
            ["70b"]: 201,
            ["70a"]: 214,
            ["80b"]: 232,
            ["80a"]: 245,
            ["90b"]: 263
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 820,
            ["20b"]: 2127,
            ["20a"]: 2830,
            ["40b"]: 4234,
            ["40a"]: 4734,
            ["50b"]: 5446,
            ["50a"]: 6112,
            ["60b"]: 6832,
            ["60a"]: 7331,
            ["70b"]: 8058,
            ["70a"]: 8557,
            ["80b"]: 9292,
            ["80a"]: 9790,
            ["90b"]: 10531
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 52,
            ["20b"]: 135,
            ["20a"]: 180,
            ["40b"]: 269,
            ["40a"]: 301,
            ["50b"]: 346,
            ["50a"]: 388,
            ["60b"]: 434,
            ["60a"]: 465,
            ["70b"]: 512,
            ["70a"]: 543,
            ["80b"]: 590,
            ["80a"]: 622,
            ["90b"]: 669
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "C", "C", "C", "C", "C", "E"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.4 / 100;
                case 2:
                    return 47 / 100;
                case 3:
                    return 50.5 / 100;
                case 4:
                    return 55.6 / 100;
                case 5:
                    return 59.1 / 100;
                case 6:
                    return 63.1 / 100;
                case 7:
                    return 68.7 / 100;
                case 8:
                    return 74.2 / 100;
                case 9:
                    return 79.8 / 100;
                case 10:
                    return 85.9 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 124 / 100;
                case 2:
                    return 133.3 / 100;
                case 3:
                    return 142.6 / 100;
                case 4:
                    return 155 / 100;
                case 5:
                    return 164.3 / 100;
                case 6:
                    return 173.6 / 100;
                case 7:
                    return 186 / 100;
                case 8:
                    return 198.4 / 100;
                case 9:
                    return 210.8 / 100;
                case 10:
                    return 223.2 / 100;
            }
        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 8,
            ["50b"]: 8,
            ["50a"]: 16,
            ["60b"]: 16,
            ["60a"]: 16,
            ["70b"]: 16,
            ["70a"]: 24,
            ["80b"]: 24,
            ["80a"]: 32,
            ["90b"]: 32
        }

        return { Type: "EnergyRecharge", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: skywardSonnet,
        Level: 1
    },
    elementalBurst: {
        Skill: windsGrandOde,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "EnergyRecharge",
        Value: 15
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Xiangling = {
    name: "Xiangling",
    src: "Assets/Characters/Xiangling/Xiangling.png",
    card: "Assets/Characters/Xiangling/Character_Xiangling_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19,
            ["20b"]: 48,
            ["20a"]: 63,
            ["40b"]: 94,
            ["40a"]: 104,
            ["50b"]: 119,
            ["50a"]: 133,
            ["60b"]: 148,
            ["60a"]: 158,
            ["70b"]: 174,
            ["70a"]: 184,
            ["80b"]: 200,
            ["80a"]: 210,
            ["90b"]: 225
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 912,
            ["20b"]: 2342,
            ["20a"]: 3024,
            ["40b"]: 4529,
            ["40a"]: 5013,
            ["50b"]: 5766,
            ["50a"]: 6411,
            ["60b"]: 7164,
            ["60a"]: 7648,
            ["70b"]: 8401,
            ["70a"]: 8885,
            ["80b"]: 9638,
            ["80a"]: 10122,
            ["90b"]: 10875
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 56,
            ["20b"]: 144,
            ["20a"]: 186,
            ["40b"]: 279,
            ["40a"]: 308,
            ["50b"]: 355,
            ["50a"]: 394,
            ["60b"]: 441,
            ["60a"]: 470,
            ["70b"]: 517,
            ["70a"]: 546,
            ["80b"]: 593,
            ["80a"]: 623,
            ["90b"]: 669
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 180,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 42.05 / 100;
                case 2:
                    return 45.48 / 100;
                case 3:
                    return 48.9 / 100;
                case 4:
                    return 53.79 / 100;
                case 5:
                    return 57.21 / 100;
                case 6:
                    return 61.12 / 100;
                case 7:
                    return 66.5 / 100;
                case 8:
                    return 71.88 / 100;
                case 9:
                    return 77.26 / 100;
                case 10:
                    return 83.13 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 42.14 / 100;
                case 2:
                    return 45.57 / 100;
                case 3:
                    return 49 / 100;
                case 4:
                    return 53.9 / 100;
                case 5:
                    return 57.33 / 100;
                case 6:
                    return 61.25 / 100;
                case 7:
                    return 66.64 / 100;
                case 8:
                    return 72.03 / 100;
                case 9:
                    return 77.42 / 100;
                case 10:
                    return 83.3 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (26.06 * 2) / 100;
                case 2:
                    return (28.18 * 2) / 100;
                case 3:
                    return (30.3 * 2) / 100;
                case 4:
                    return (33.33 * 2) / 100;
                case 5:
                    return (35.45 * 2) / 100;
                case 6:
                    return (37.88 * 2) / 100;
                case 7:
                    return (41.21 * 2) / 100;
                case 8:
                    return (44.54 * 2) / 100;
                case 9:
                    return (47.87 * 2) / 100;
                case 10:
                    return (51.51 * 2) / 100;
            }


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (14.1 * 4) / 100;
                case 2:
                    return (15.25 * 4) / 100;
                case 3:
                    return (16.4 * 4) / 100;
                case 4:
                    return (18.04 * 4) / 100;
                case 5:
                    return (19.19 * 4) / 100;
                case 6:
                    return (20.5 * 4) / 100;
                case 7:
                    return (22.3 * 4) / 100;
                case 8:
                    return (24.11 * 4) / 100;
                case 9:
                    return (25.91 * 4) / 100;
                case 10:
                    return (27.88 * 4) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 71.04 / 100;
                case 2:
                    return 76.28 / 100;
                case 3:
                    return 82.6 / 100;
                case 4:
                    return 90.86 / 100;
                case 5:
                    return 96.64 / 100;
                case 6:
                    return 103.25 / 100;
                case 7:
                    return 112.34 / 100;
                case 8:
                    return 121.42 / 100;
                case 9:
                    return 130.51 / 100;
                case 10:
                    return 140.42 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 24,
            ["50b"]: 24,
            ["50a"]: 48,
            ["60b"]: 48,
            ["60a"]: 48,
            ["70b"]: 48,
            ["70a"]: 72,
            ["80b"]: 72,
            ["80a"]: 96,
            ["90b"]: 96
        }

        return { Type: "ElementalMastery", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: goubaAttack,
        Level: 1
    },
    elementalBurst: {
        Skill: pyronado,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "ATK%",
        Value: 10
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Xiao = {
    name: "Xiao",
    src: "Assets/Characters/Xiao/Xiao.png",
    card: "Assets/Characters/Xiao/Character_Xiao_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 27,
            ["20b"]: 71,
            ["20a"]: 94,
            ["40b"]: 141,
            ["40a"]: 157,
            ["50b"]: 181,
            ["50a"]: 203,
            ["60b"]: 227,
            ["60a"]: 243,
            ["70b"]: 267,
            ["70a"]: 284,
            ["80b"]: 308,
            ["80a"]: 325,
            ["90b"]: 349
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 991,
            ["20b"]: 2572,
            ["20a"]: 3422,
            ["40b"]: 5120,
            ["40a"]: 5724,
            ["50b"]: 6586,
            ["50a"]: 7391,
            ["60b"]: 8262,
            ["60a"]: 8866,
            ["70b"]: 9744,
            ["70a"]: 10348,
            ["80b"]: 11236,
            ["80a"]: 11840,
            ["90b"]: 12736
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 62,
            ["20b"]: 161,
            ["20a"]: 215,
            ["40b"]: 321,
            ["40a"]: 359,
            ["50b"]: 413,
            ["50a"]: 464,
            ["60b"]: 519,
            ["60a"]: 556,
            ["70b"]: 612,
            ["70a"]: 649,
            ["80b"]: 705,
            ["80a"]: 743,
            ["90b"]: 799
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "E", "Q", "P", "N1", "P", "N1", "P", "N1", "P", "N1", "P", "N1", "P", "N1", "P", "N1", "P", "N1", "P", "N1", "P", "N1"],
        ["Support"]: ["E", "E",]
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.12 / 100
                case 2:
                    return 47.71 / 100
                case 3:
                    return 51.3 / 100
                case 4:
                    return 56.43 / 100
                case 5:
                    return 60.02 / 100
                case 6:
                    return 64.13 / 100
                case 7:
                    return 69.77 / 100
                case 8:
                    return 75.41 / 100
                case 9:
                    return 81.05 / 100
                case 10:
                    return 87.21 / 100
            }
        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 204.39 / 100
                case 2:
                    return 221.02 / 100
                case 3:
                    return 237.66 / 100
                case 4:
                    return 261.42 / 100
                case 5:
                    return 278.06 / 100
                case 6:
                    return 297.07 / 100
                case 7:
                    return 323.21 / 100
                case 8:
                    return 349.36 / 100
                case 9:
                    return 375.5 / 100
                case 10:
                    return 404.02 / 100
            }
        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 4.8,
            ["50b"]: 4.8,
            ["50a"]: 9.6,
            ["60b"]: 9.6,
            ["60a"]: 9.6,
            ["70b"]: 9.6,
            ["70a"]: 14.4,
            ["80b"]: 14.4,
            ["80a"]: 19.2,
            ["90b"]: 19.2
        }

        return { Type: "CritRate", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: lemniscaticWindCycling,
        Level: 1
    },
    elementalBurst: {
        Skill: baneOfAllEvil,
        Level: 1
    },
    passive1: {
        Type: "Conqueror of Evil: Tamer of Demons",
        Value: null
    },
    passive2: {
        Type: "Dissolution Eon: Heaven Fall",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Xingqiu = {
    name: "Xingqiu",
    src: "Assets/Characters/Xingqiu/Xingqiu.png",
    card: "Assets/Characters/Xingqiu/Character_Xingqiu_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 17,
            ["20b"]: 43,
            ["20a"]: 56,
            ["40b"]: 84,
            ["40a"]: 93,
            ["50b"]: 107,
            ["50a"]: 119,
            ["60b"]: 133,
            ["60a"]: 142,
            ["70b"]: 156,
            ["70a"]: 165,
            ["80b"]: 179,
            ["80a"]: 188,
            ["90b"]: 202
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 857,
            ["20b"]: 2202,
            ["20a"]: 2842,
            ["40b"]: 4257,
            ["40a"]: 4712,
            ["50b"]: 5420,
            ["50a"]: 6027,
            ["60b"]: 6735,
            ["60a"]: 7190,
            ["70b"]: 7897,
            ["70a"]: 8352,
            ["80b"]: 9060,
            ["80a"]: 9515,
            ["90b"]: 10223
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 64,
            ["20b"]: 163,
            ["20a"]: 211,
            ["40b"]: 316,
            ["40a"]: 349,
            ["50b"]: 402,
            ["50a"]: 447,
            ["60b"]: 499,
            ["60a"]: 533,
            ["70b"]: 585,
            ["70a"]: 619,
            ["80b"]: 671,
            ["80a"]: 705,
            ["90b"]: 758
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 180,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "E", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["Q", "E", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 46.61 / 100;
                case 2:
                    return 50.41 / 100;
                case 3:
                    return 54.2 / 100;
                case 4:
                    return 59.62 / 100;
                case 5:
                    return 63.41 / 100;
                case 6:
                    return 67.75 / 100;
                case 7:
                    return 73.71 / 100;
                case 8:
                    return 79.67 / 100;
                case 9:
                    return 85.64 / 100;
                case 10:
                    return 92.14 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.64 / 100;
                case 2:
                    return 51.52 / 100;
                case 3:
                    return 55.4 / 100;
                case 4:
                    return 60.94 / 100;
                case 5:
                    return 64.82 / 100;
                case 6:
                    return 69.25 / 100;
                case 7:
                    return 75.34 / 100;
                case 8:
                    return 81.44 / 100;
                case 9:
                    return 87.53 / 100;
                case 10:
                    return 94.18 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (28.55 * 2) / 100;
                case 2:
                    return (30.88 * 2) / 100;
                case 3:
                    return (33.2 * 2) / 100;
                case 4:
                    return (36.52 * 2) / 100;
                case 5:
                    return (38.84 * 2) / 100;
                case 6:
                    return (41.5 * 2) / 100;
                case 7:
                    return (45.15 * 2) / 100;
                case 8:
                    return (48.8 * 2) / 100;
                case 9:
                    return (52.46 * 2) / 100;
                case 10:
                    return (56.44 * 2) / 100;
            }


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 55.9 / 100;
                case 2:
                    return 60.54 / 100;
                case 3:
                    return 65.1 / 100;
                case 4:
                    return 71.61 / 100;
                case 5:
                    return 76.17 / 100;
                case 6:
                    return 81.38 / 100;
                case 7:
                    return 88.54 / 100;
                case 8:
                    return 95.7 / 100;
                case 9:
                    return 102.86 / 100;
                case 10:
                    return 110.67 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (35.86 * 2) / 100;
                case 2:
                    return (38.78 * 2) / 100;
                case 3:
                    return (41.7 * 2) / 100;
                case 4:
                    return (45.87 * 2) / 100;
                case 5:
                    return (48.79 * 2) / 100;
                case 6:
                    return (52.13 * 2) / 100;
                case 7:
                    return (56.71 * 2) / 100;
                case 8:
                    return (61.3 * 2) / 100;
                case 9:
                    return (65.89 * 2) / 100;
                case 10:
                    return (70.89 * 2) / 100;
            }


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: fatalRainscreen,
        Level: 1
    },
    elementalBurst: {
        Skill: raincutter,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "HydroDMGBonus",
        Value: 20
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Xinyan = {
    name: "Xinyan",
    src: "Assets/Characters/Xinyan/Xinyan.png",
    card: "Assets/Characters/Xinyan/Character_Xinyan_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 21,
            ["20b"]: 54,
            ["20a"]: 69,
            ["40b"]: 103,
            ["40a"]: 115,
            ["50b"]: 132,
            ["50a"]: 147,
            ["60b"]: 164,
            ["60a"]: 175,
            ["70b"]: 192,
            ["70a"]: 203,
            ["80b"]: 220,
            ["80a"]: 231,
            ["90b"]: 249
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 939,
            ["20b"]: 2413,
            ["20a"]: 3114,
            ["40b"]: 4665,
            ["40a"]: 5163,
            ["50b"]: 5939,
            ["50a"]: 6604,
            ["60b"]: 7379,
            ["60a"]: 7878,
            ["70b"]: 8653,
            ["70a"]: 9151,
            ["80b"]: 9927,
            ["80a"]: 10425,
            ["90b"]: 11201
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 67,
            ["20b"]: 172,
            ["20a"]: 222,
            ["40b"]: 333,
            ["40a"]: 368,
            ["50b"]: 423,
            ["50a"]: 471,
            ["60b"]: 526,
            ["60a"]: 562,
            ["70b"]: 617,
            ["70a"]: 652,
            ["80b"]: 708,
            ["80a"]: 743,
            ["90b"]: 799
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Shield",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 76.54 / 100;
                case 2:
                    return 82.77 / 100;
                case 3:
                    return 89 / 100;
                case 4:
                    return 97.9 / 100;
                case 5:
                    return 104.13 / 100;
                case 6:
                    return 111.25 / 100;
                case 7:
                    return 121.04 / 100;
                case 8:
                    return 130.83 / 100;
                case 9:
                    return 140.62 / 100;
                case 10:
                    return 151.3 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 73.96 / 100;
                case 2:
                    return 79.98 / 100;
                case 3:
                    return 86 / 100;
                case 4:
                    return 94.6 / 100;
                case 5:
                    return 100.62 / 100;
                case 6:
                    return 107.5 / 100;
                case 7:
                    return 116.96 / 100;
                case 8:
                    return 126.42 / 100;
                case 9:
                    return 135.88 / 100;
                case 10:
                    return 146.2 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 95.46 / 100;
                case 2:
                    return 103.23 / 100;
                case 3:
                    return 111 / 100;
                case 4:
                    return 122.1 / 100;
                case 5:
                    return 129.87 / 100;
                case 6:
                    return 138.75 / 100;
                case 7:
                    return 150.96 / 100;
                case 8:
                    return 163.17 / 100;
                case 9:
                    return 175.38 / 100;
                case 10:
                    return 188.7 / 100;
            }


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 115.84 / 100;
                case 2:
                    return 125.27 / 100;
                case 3:
                    return 134.7 / 100;
                case 4:
                    return 148.17 / 100;
                case 5:
                    return 157.6 / 100;
                case 6:
                    return 168.38 / 100;
                case 7:
                    return 183.19 / 100;
                case 8:
                    return 198.01 / 100;
                case 9:
                    return 212.83 / 100;
                case 10:
                    return 228.99 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: sweepingFervor,
        Level: 1
    },
    elementalBurst: {
        Skill: riffRevolution,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "PhysicalDMGBonus",
        Value: 15
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Yae_Miko = {
    name: "Yae Miko",
    src: "Assets/Characters/Yae_Miko/Yae_Miko.png",
    card: "Assets/Characters/Yae_Miko/Character_Yae_Miko_Portrait.webp",
    element: "ElectroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26,
            ["20b"]: 69,
            ["20a"]: 91,
            ["40b"]: 137,
            ["40a"]: 153,
            ["50b"]: 176,
            ["50a"]: 197,
            ["60b"]: 220,
            ["60a"]: 236,
            ["70b"]: 260,
            ["70a"]: 276,
            ["80b"]: 300,
            ["80a"]: 316,
            ["90b"]: 340
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 807,
            ["20b"]: 2065,
            ["20a"]: 2787,
            ["40b"]: 4170,
            ["40a"]: 4662,
            ["50b"]: 5364,
            ["50a"]: 6020,
            ["60b"]: 6729,
            ["60a"]: 7220,
            ["70b"]: 7936,
            ["70a"]: 8428,
            ["80b"]: 9151,
            ["80a"]: 9643,
            ["90b"]: 10372
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 44,
            ["20b"]: 115,
            ["20a"]: 153,
            ["40b"]: 229,
            ["40a"]: 256,
            ["50b"]: 294,
            ["50a"]: 330,
            ["60b"]: 369,
            ["60a"]: 396,
            ["70b"]: 435,
            ["70a"]: 462,
            ["80b"]: 502,
            ["80a"]: 529,
            ["90b"]: 569
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "ElectroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;


        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "ElectroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;


        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 142.89 / 100;
                case 2:
                    return 153.61 / 100;
                case 3:
                    return 164.33 / 100;
                case 4:
                    return 178.62 / 100;
                case 5:
                    return 189.34 / 100;
                case 6:
                    return 200.05 / 100;
                case 7:
                    return 214.34 / 100;
                case 8:
                    return 228.63 / 100;
                case 9:
                    return 242.92 / 100;
                case 10:
                    return 257.21 / 100;
            }
        },
        Element: "ElectroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 4.8,
            ["50b"]: 4.8,
            ["50a"]: 9.6,
            ["60b"]: 9.6,
            ["60a"]: 9.6,
            ["70b"]: 9.6,
            ["70a"]: 14.4,
            ["80b"]: 14.4,
            ["80a"]: 19.2,
            ["90b"]: 19.2
        }

        return { Type: "CritRate", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: sesshouSakura,
        Level: 1
    },
    elementalBurst: {
        Skill: tenkoKenshin,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Enlightened Blessing",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Yanfei = {
    name: "Yanfei",
    src: "Assets/Characters/Yanfei/Yanfei.png",
    card: "Assets/Characters/Yanfei/Character_Yanfei_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 52,
            ["20a"]: 67,
            ["40b"]: 100,
            ["40a"]: 111,
            ["50b"]: 127,
            ["50a"]: 141,
            ["60b"]: 158,
            ["60a"]: 169,
            ["70b"]: 185,
            ["70a"]: 196,
            ["80b"]: 213,
            ["80a"]: 223,
            ["90b"]: 240
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 784,
            ["20b"]: 2014,
            ["20a"]: 2600,
            ["40b"]: 3895,
            ["40a"]: 4311,
            ["50b"]: 4959,
            ["50a"]: 5514,
            ["60b"]: 6161,
            ["60a"]: 6578,
            ["70b"]: 7225,
            ["70a"]: 7641,
            ["80b"]: 8289,
            ["80a"]: 8705,
            ["90b"]: 9352
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 49,
            ["20b"]: 126,
            ["20a"]: 163,
            ["40b"]: 244,
            ["40a"]: 271,
            ["50b"]: 311,
            ["50a"]: 346,
            ["60b"]: 387,
            ["60a"]: 413,
            ["70b"]: 453,
            ["70a"]: 480,
            ["80b"]: 520,
            ["80a"]: 546,
            ["90b"]: 587
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "C", "Q", "C", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C"],
        ["Support"]: ["E", "C", "Q", "C"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 58.34 / 100;
                case 2:
                    return 62.72 / 100;
                case 3:
                    return 67.09 / 100;
                case 4:
                    return 72.93 / 100;
                case 5:
                    return 77.3 / 100;
                case 6:
                    return 81.68 / 100;
                case 7:
                    return 87.51 / 100;
                case 8:
                    return 93.35 / 100;
                case 9:
                    return 99.18 / 100;
                case 10:
                    return 105.01 / 100;
            }
        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 52.13 / 100;
                case 2:
                    return 56.04 / 100;
                case 3:
                    return 59.94 / 100;
                case 4:
                    return 65.16 / 100;
                case 5:
                    return 69.07 / 100;
                case 6:
                    return 72.98 / 100;
                case 7:
                    return 78.19 / 100;
                case 8:
                    return 83.4 / 100;
                case 9:
                    return 88.61 / 100;
                case 10:
                    return 93.83 / 100;
            }

        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            return 0;


        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;


        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 150.23 / 100;
                case 2:
                    return 159.23 / 100;
                case 3:
                    return 168.23 / 100;
                case 4:
                    return 179.92 / 100;
                case 5:
                    return 188.92 / 100;
                case 6:
                    return 197.91 / 100;
                case 7:
                    return 209.61 / 100;
                case 8:
                    return 221.3 / 100;
                case 9:
                    return 233 / 100;
                case 10:
                    return 244.69 / 100;
            }
        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 12,
            ["70b"]: 12,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "PyroDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: signedEdict,
        Level: 1
    },
    elementalBurst: {
        Skill: doneDeal,
        Level: 1
    },
    passive1: {
        Type: "Proviso",
        Value: null
    },
    passive2: {
        Type: "Blazing Eye",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Yoimiya = {
    name: "Yoimiya",
    src: "Assets/Characters/Yoimiya/Yoimiya.png",
    card: "Assets/Characters/Yoimiya/Character_Yoimiya_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 25,
            ["20b"]: 65,
            ["20a"]: 87,
            ["40b"]: 130,
            ["40a"]: 145,
            ["50b"]: 167,
            ["50a"]: 187,
            ["60b"]: 209,
            ["60a"]: 225,
            ["70b"]: 247,
            ["70a"]: 262,
            ["80b"]: 285,
            ["80a"]: 300,
            ["90b"]: 323
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 791,
            ["20b"]: 2053,
            ["20a"]: 2731,
            ["40b"]: 4086,
            ["40a"]: 4568,
            ["50b"]: 5256,
            ["50a"]: 5899,
            ["60b"]: 6593,
            ["60a"]: 7075,
            ["70b"]: 7777,
            ["70a"]: 8259,
            ["80b"]: 8968,
            ["80a"]: 9450,
            ["90b"]: 10164,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 48,
            ["20b"]: 124,
            ["20a"]: 165,
            ["40b"]: 247,
            ["40a"]: 276,
            ["50b"]: 318,
            ["50a"]: 357,
            ["60b"]: 399,
            ["60a"]: 428,
            ["70b"]: 470,
            ["70a"]: 500,
            ["80b"]: 542,
            ["80a"]: 572,
            ["90b"]: 615,
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N1", "N2", "N3", "N4", "N4", "N5", "N1", "N1", "N2", "N3", "N4", "N4", "N5", "N1", "N1", "N2", "N3", "N4", "N4", "N5", "Q"],
        ["Support"]: ["Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 35.6 / 100;
                case 2:
                    return 38.07 / 100;
                case 3:
                    return 40.5 / 100;
                case 4:
                    return 43.74 / 100;
                case 5:
                    return 46.17 / 100;
                case 6:
                    return 49 / 100;
                case 7:
                    return 52.65 / 100;
                case 8:
                    return 56.29 / 100;
                case 9:
                    return 59.94 / 100;
                case 10:
                    return 63.59 / 100;
            }
        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 68.4 / 100;
                case 2:
                    return 73.04 / 100;
                case 3:
                    return 77.7 / 100;
                case 4:
                    return 83.92 / 100;
                case 5:
                    return 88.58 / 100;
                case 6:
                    return 94 / 100;
                case 7:
                    return 101.01 / 100;
                case 8:
                    return 108 / 100;
                case 9:
                    return 115 / 100;
                case 10:
                    return 121.99 / 100;
            }

        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 88.9 / 100;
                case 2:
                    return 94.95 / 100;
                case 3:
                    return 101.01 / 100;
                case 4:
                    return 109.09 / 100;
                case 5:
                    return 115.15 / 100;
                case 6:
                    return 122.2 / 100;
                case 7:
                    return 131.31 / 100;
                case 8:
                    return 140.4 / 100;
                case 9:
                    return 149.49 / 100;
                case 10:
                    return 158.59 / 100;
            }


        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 46.4 / 100;
                case 2:
                    return 49.59 / 100;
                case 3:
                    return 52.75 / 100;
                case 4:
                    return 56.97 / 100;
                case 5:
                    return 60.14 / 100;
                case 6:
                    return 63.8 / 100;
                case 7:
                    return 68.58 / 100;
                case 8:
                    return 73.32 / 100;
                case 9:
                    return 78.07 / 100;
                case 10:
                    return 82.82 / 100;
            }

        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 105.9 / 100;
                case 2:
                    return 113.08 / 100;
                case 3:
                    return 120.3 / 100;
                case 4:
                    return 129.92 / 100;
                case 5:
                    return 137.14 / 100;
                case 6:
                    return 145.6 / 100;
                case 7:
                    return 156.39 / 100;
                case 8:
                    return 167.22 / 100;
                case 9:
                    return 178.04 / 100;
                case 10:
                    return 188.87 / 100;
            }
        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 4.8,
            ["50b"]: 4.8,
            ["50a"]: 9.6,
            ["60b"]: 9.6,
            ["60a"]: 9.6,
            ["70b"]: 9.6,
            ["70a"]: 14.4,
            ["80b"]: 14.4,
            ["80a"]: 19.2,
            ["90b"]: 19.2
        }

        return { Type: "CritRate", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: niwabiFireDance,
        Level: 1
    },
    elementalBurst: {
        Skill: ryuukinSaxifrage,
        Level: 1
    },
    passive1: {
        Type: "PyroDMGBonus",
        Value: 15.71
    },
    passive2: {
        Type: "",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Yun_Jin = {
    name: "Yun Jin",
    src: "Assets/Characters/Yun_Jin/Yun_Jin.png",
    card: "Assets/Characters/Yun_Jin/Character_Yun_Jin_Portrait.webp",
    element: "GeoCharacter",
    level: "1b",

    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16,
            ["20b"]: 41,
            ["20a"]: 53,
            ["40b"]: 80,
            ["40a"]: 88,
            ["50b"]: 101,
            ["50a"]: 113,
            ["60b"]: 126,
            ["60a"]: 134,
            ["70b"]: 148,
            ["70a"]: 156,
            ["80b"]: 169,
            ["80a"]: 178,
            ["90b"]: 191
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 894,
            ["20b"]: 2296,
            ["20a"]: 2963,
            ["40b"]: 4438,
            ["40a"]: 4913,
            ["50b"]: 5651,
            ["50a"]: 6283,
            ["60b"]: 7021,
            ["60a"]: 7495,
            ["70b"]: 8233,
            ["70a"]: 8707,
            ["80b"]: 9445,
            ["80a"]: 9919,
            ["90b"]: 10657
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 62,
            ["20b"]: 156,
            ["20a"]: 204,
            ["40b"]: 306,
            ["40a"]: 339,
            ["50b"]: 389,
            ["50a"]: 433,
            ["60b"]: 484,
            ["60a"]: 517,
            ["70b"]: 567,
            ["70a"]: 600,
            ["80b"]: 651,
            ["80a"]: 684,
            ["90b"]: 734
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "ATKBooster",
    supportType2: "Shield",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 40.51 / 100;
                case 2:
                    return 43.8 / 100;
                case 3:
                    return 47.1 / 100;
                case 4:
                    return 51.81 / 100;
                case 5:
                    return 55.11 / 100;
                case 6:
                    return 58.88 / 100;
                case 7:
                    return 64.06 / 100;
                case 8:
                    return 69.24 / 100;
                case 9:
                    return 74.42 / 100;
                case 10:
                    return 80.07 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 40.25 / 100;
                case 2:
                    return 43.52 / 100;
                case 3:
                    return 46.8 / 100;
                case 4:
                    return 51.48 / 100;
                case 5:
                    return 54.76 / 100;
                case 6:
                    return 58.5 / 100;
                case 7:
                    return 63.65 / 100;
                case 8:
                    return 68.8 / 100;
                case 9:
                    return 73.94 / 100;
                case 10:
                    return 79.56 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (22.96 + 27.52) / 100;
                case 2:
                    return (24.83 + 29.76) / 100;
                case 3:
                    return (26.7 + 32) / 100;
                case 4:
                    return (29.37 + 35.2) / 100;
                case 5:
                    return (31.24 + 37.44) / 100;
                case 6:
                    return (33.38 + 40) / 100;
                case 7:
                    return (36.31 + 43.52) / 100;
                case 8:
                    return (39.25 + 47.04) / 100;
                case 9:
                    return (42.19 + 50.56) / 100;
                case 10:
                    return (45.39 + 54.4) / 100;
            }


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (23.99 + 28.81) / 100;
                case 2:
                    return (25.95 + 31.16) / 100;
                case 3:
                    return (27.9 + 33.5) / 100;
                case 4:
                    return (30.69 + 36.85) / 100;
                case 5:
                    return (32.64 + 39.2) / 100;
                case 6:
                    return (34.88 + 41.88) / 100;
                case 7:
                    return (37.94 + 45.56) / 100;
                case 8:
                    return (41.01 + 49.24) / 100;
                case 9:
                    return (44.08 + 52.93) / 100;
                case 10:
                    return (47.43 + 56.95) / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 67.34 / 100;
                case 2:
                    return 72.82 / 100;
                case 3:
                    return 78.3 / 100;
                case 4:
                    return 86.13 / 100;
                case 5:
                    return 91.61 / 100;
                case 6:
                    return 97.88 / 100;
                case 7:
                    return 106.49 / 100;
                case 8:
                    return 115.1 / 100;
                case 9:
                    return 123.71 / 100;
                case 10:
                    return 133.11 / 100;
            }


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 6.7,
            ["50b"]: 6.7,
            ["50a"]: 13.3,
            ["60b"]: 13.3,
            ["60a"]: 13.3,
            ["70b"]: 13.3,
            ["70a"]: 20,
            ["80b"]: 20,
            ["80a"]: 26.7,
            ["90b"]: 26.7
        }

        return { Type: "EnergyRecharge", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: openingFlourish,
        Level: 1
    },
    elementalBurst: {
        Skill: cliffbreakersBanner,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Breaking Conventions",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const Zhongli = {
    name: "Zhongli",
    src: "Assets/Characters/Zhongli/Zhongli.png",
    card: "Assets/Characters/Zhongli/Character_Zhongli_Portrait.webp",
    element: "GeoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20,
            ["20b"]: 51,
            ["20a"]: 67,
            ["40b"]: 101,
            ["40a"]: 113,
            ["50b"]: 130,
            ["50a"]: 146,
            ["60b"]: 163,
            ["60a"]: 175,
            ["70b"]: 192,
            ["70a"]: 204,
            ["80b"]: 222,
            ["80a"]: 233,
            ["90b"]: 251
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1144,
            ["20b"]: 2967,
            ["20a"]: 3948,
            ["40b"]: 5908,
            ["40a"]: 6605,
            ["50b"]: 7599,
            ["50a"]: 8528,
            ["60b"]: 9533,
            ["60a"]: 10230,
            ["70b"]: 11243,
            ["70a"]: 11940,
            ["80b"]: 12965,
            ["80a"]: 13662,
            ["90b"]: 14695,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 57,
            ["20b"]: 149,
            ["20a"]: 198,
            ["40b"]: 297,
            ["40a"]: 332,
            ["50b"]: 382,
            ["50a"]: 428,
            ["60b"]: 479,
            ["60a"]: 514,
            ["70b"]: 564,
            ["70a"]: 599,
            ["80b"]: 651,
            ["80a"]: 686,
            ["90b"]: 738,
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats: {
        critRate: 5,
        critDMG: 50,
        healingBonus: 0,
        incomingHealingBonus: 0,
        energyRecharge: 100,
        cdReduction: 0,
        shieldStrength: 0,
        elementalBonuses: [
            { Type: "PyroDMGBonus", Value: 0 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },

    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Shield",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "E"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 30.77 / 100;
                case 2:
                    return 33.27 / 100;
                case 3:
                    return 35.78 / 100;
                case 4:
                    return 39.36 / 100;
                case 5:
                    return 41.86 / 100;
                case 6:
                    return 44.72 / 100;
                case 7:
                    return 48.66 / 100;
                case 8:
                    return 52.59 / 100;
                case 9:
                    return 56.53 / 100;
                case 10:
                    return 60.82 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 31.15 / 100;
                case 2:
                    return 33.69 / 100;
                case 3:
                    return 36.22 / 100;
                case 4:
                    return 39.85 / 100;
                case 5:
                    return 42.38 / 100;
                case 6:
                    return 45.28 / 100;
                case 7:
                    return 49.26 / 100;
                case 8:
                    return 53.25 / 100;
                case 9:
                    return 57.23 / 100;
                case 10:
                    return 61.58 / 100;
            }

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 38.58 / 100;
                case 2:
                    return 41.72 / 100;
                case 3:
                    return 44.86 / 100;
                case 4:
                    return 49.34 / 100;
                case 5:
                    return 52.48 / 100;
                case 6:
                    return 56.07 / 100;
                case 7:
                    return 61 / 100;
                case 8:
                    return 65.94 / 100;
                case 9:
                    return 70.87 / 100;
                case 10:
                    return 76.26 / 100;
            }


        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            return 0;

        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttackLevel: 1,
    ascensionStat: function () {
        let values = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 7.2,
            ["50b"]: 7.2,
            ["50a"]: 14.4,
            ["60b"]: 14.4,
            ["60a"]: 14.4,
            ["70b"]: 14.4,
            ["70a"]: 21.6,
            ["80b"]: 21.6,
            ["80a"]: 28.8,
            ["90b"]: 28.8
        }

        return { Type: "GeoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: dominusLapidis,
        Level: 1
    },
    elementalBurst: {
        Skill: planetBefall,
        Level: 1
    },
    passive1: {
        Type: "Resonant Waves",
        Value: null
    },
    passive2: {
        Type: "Dominance of Earth",
        Value: null
    },
    constellations: {
        Amount: 0,
        constellation: function () {
            let allConstellations = {
                [1]: null,
                [2]: null,
                [3]: null,
                [4]: null,
                [5]: null,
                [6]: null,
            }
            let activeConstellations = [];
            for (let index = 1; index < this.Amount; index++) {
                activeConstellations.push(allConstellations[index])

            }
            return activeConstellations;
        }
    }
};
const AllCharacters = {
    ["Albedo"]: Albedo,
    ["Aloy"]: Aloy,
    ["Amber"]: Amber,
    ["Ayaka"]: Ayaka,
    ["Ayato"]: Ayato,
    ["Barbara"]: Barbara,
    ["Beidou"]: Beidou,
    ["Bennett"]: Bennett,
    ["Chongyun"]: Chongyun,
    ["Diluc"]: Diluc,
    ["Diona"]: Diona,
    ["Eula"]: Eula,
    ["Fischl"]: Fischl,
    ["Ganyu"]: Ganyu,
    ["Gorou"]: Gorou,
    ["Hu Tao"]: Hu_Tao,
    ["Itto"]: Itto,
    ["Jean"]: Jean,
    ["Kaeya"]: Kaeya,
    ["Kazuha"]: Kazuha,
    ["Keqing"]: Keqing,
    ["Klee"]: Klee,
    ["Kokomi"]: Kokomi,
    ["Lisa"]: Lisa,
    ["Mona"]: Mona,
    ["Ningguang"]: Ningguang,
    ["Noelle"]: Noelle,
    ["Qiqi"]: Qiqi,
    ["Raiden"]: Raiden,
    ["Razor"]: Razor,
    ["Rosaria"]: Rosaria,
    ["Sara"]: Sara,
    ["Sayu"]: Sayu,
    ["Shenhe"]: Shenhe,
    ["Sucrose"]: Sucrose,
    ["Thoma"]: Thoma,
    ["Tartaglia"]: Tartaglia,
    ["Traveler (Anemo)"]: Traveler_Anemo,
    ["Traveler (Electro)"]: Traveler_Electro,
    ["Traveler (Geo)"]: Traveler_Geo,
    ["Venti"]: Venti,
    ["Xiangling"]: Xiangling,
    ["Xiao"]: Xiao,
    ["Xingqiu"]: Xingqiu,
    ["Xinyan"]: Xinyan,
    ["Yae Miko"]: Yae_Miko,
    ["Yanfei"]: Yanfei,
    ["Yoimiya"]: Yoimiya,
    ["Yun Jin"]: Yun_Jin,
    ["Zhongli"]: Zhongli,
    index: ["Albedo", "Aloy", "Amber", "Ayaka", "Ayato", "Barbara", "Beidou", "Bennett",
        "Chongyun", "Diluc", "Diona", "Eula", "Fischl", "Ganyu", "Gorou", "Hu Tao", "Itto", "Jean",
        "Kaeya", "Kazuha", "Keqing", "Klee", "Kokomi", "Lisa", "Mona", "Ningguang", "Noelle",
        "Qiqi", "Raiden", "Razor", "Rosaria", "Sara", "Sayu", "Shenhe", "Sucrose", "Thoma", "Tartaglia", "Traveler (Anemo)",
        "Traveler (Electro)", "Traveler (Geo)", "Venti", "Xiangling", "Xiao", "Xingqiu",
        "Xinyan", "Yae Miko", "Yanfei", "Yoimiya", "Yun Jin", "Zhongli"]
};
