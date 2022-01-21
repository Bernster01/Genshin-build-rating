const Albedo = {
    name: "Albedo",
    src: "Characters/Albedo.png",
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
const Amber = {
    name: "Amber",
    src: "Characters/Amber.png",
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
    src: "Characters/Ayaka.png",
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
const Barbara = {
    name: "Barbara",
    src: "Characters/Barbara.png",
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
    src: "Characters/Beidou.png",
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
    src: "Characters/Bennett.png",
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
    src: "Characters/Chongyun.png",
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
    src: "Characters/Diluc.png",
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
    src: "Characters/Diona.png",
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
    src: "Characters/Eula.png",
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
    src: "Characters/Fischl.png",
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
    src: "Characters/Ganyu.png",
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
const Hu_Tao = {
    name: "Hu Tao",
    src: "Characters/Hu Tao.png",
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
const Jean = {
    name: "Jean",
    src: "Characters/Jean.png",
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
    src: "Characters/Kaeya.png",
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
    src: "Characters/Kazuha.png",
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
    src: "Characters/Keqing.png",
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
    src: "Characters/Klee.png",
    element: "PyroCharacter"
};
const Lisa = {
    name: "Lisa",
    src: "Characters/Lisa.png",
    element: "ElectroCharacter"
};
const Mona = {
    name: "Mona",
    src: "Characters/Mona.png",
    element: "HydroCharacter"
};
const Ningguang = {
    name: "Ningguang",
    src: "Characters/Ningguang.png",
    element: "GeoCharacter"
};
const Noelle = {
    name: "Noelle",
    src: "Characters/Noelle.png",
    element: "GeoCharacter"
};
const Qiqi = {
    name: "Qiqi",
    src: "Characters/Qiqi.png",
    element: "CryoCharacter"
};
const Razor = {
    name: "Razor",
    src: "Characters/Razor.png",
    element: "ElectroCharacter"
};
const Rosaria = {
    name: "Rosaria",
    src: "Characters/Rosaria.png",
    element: "CryoCharacter"
};
const Sayu = {
    name: "Sayu",
    src: "Characters/Sayu.png",
    element: "AnemoCharacter"
};
const Sucrose = {
    name: "Sucrose",
    src: "Characters/Sucrose.png",
    element: "AnemoCharacter"
};
const Tartaglia = {
    name: "Tartaglia",
    src: "Characters/Tartaglia.png",
    element: "HydroCharacter"
};
const Traveler_Anemo = {
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "AnemoCharacter"
};
const Traveler_Electro = {
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "ElectroCharacter"
};
const Traveler_Geo = {
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "GeoCharacter"
};
const Venti = {
    name: "Venti",
    src: "Characters/Venti.png",
    element: "AnemoCharacter"
};
const Xiangling = {
    name: "Xiangling",
    src: "Characters/Xiangling.png",
    element: "PyroCharacter"
};
const Xiao = {
    name: "Xiao",
    src: "Characters/Xiao.png",
    element: "AnemoCharacter"
};
const Xingqiu = {
    name: "Xingqiu",
    src: "Characters/Xingqiu.png",
    element: "HydroCharacter"
};
const Xinyan = {
    name: "Xinyan",
    src: "Characters/Xinyan.png",
    element: "PyroCharacter"
};
const Yanfei = {
    name: "Yanfei",
    src: "Characters/Yanfei.png",
    element: "PyroCharacter"
};
const Yoimiya = {
    name: "Yoimiya",
    src: "Characters/Yoimiya.png",
    element: "PyroCharacter"
};
const Zhongli = {
    name: "Zhongli",
    src: "Characters/Zhongli.png",
    element: "GeoCharacter"
};
const AllCharacters = {
    ["Albedo"]: Albedo,
    ["Amber"]: Amber,
    ["Ayaka"]: Ayaka,
    ["Barbara"]: Barbara,
    ["Beidou"]: Beidou,
    ["Bennett"]: Bennett,
    ["Chongyun"]: Chongyun,
    ["Diluc"]: Diluc,
    ["Diona"]: Diona,
    ["Eula"]: Eula,
    ["Fischl"]: Fischl,
    ["Ganyu"]: Ganyu,
    ["Hu Tao"]: Hu_Tao,
    ["Jean"]: Jean,
    ["Kaeya"]: Kaeya,
    ["Kazuha"]: Kazuha,
    ["Keqing"]: Keqing,
    ["Klee"]: Klee,
    ["Lisa"]: Lisa,
    ["Mona"]: Mona,
    ["Ningguang"]: Ningguang,
    ["Noelle"]: Noelle,
    ["Qiqi"]: Qiqi,
    ["Razor"]: Razor,
    ["Rosaria"]: Rosaria,
    ["Sayu"]: Sayu,
    ["Sucrose"]: Sucrose,
    ["Tartaglia"]: Tartaglia,
    ["Traveler_Anemo"]: Traveler_Anemo,
    ["Traveler_Electro"]: Traveler_Electro,
    ["Traveler_Geo"]: Traveler_Geo,
    ["Venti"]: Venti,
    ["Xiangling"]: Xiangling,
    ["Xiao"]: Xiao,
    ["Xingqiu"]: Xingqiu,
    ["Xinyan"]: Xinyan,
    ["Yanfei"]: Yanfei,
    ["Yoimiya"]: Yoimiya,
    ["Zhongli"]: Zhongli,
    index: ["Albedo", "Amber", "Ayaka", "Barbara", "Beidou", "Bennett",
        "Chongyun", "Diluc", "Diona", "Eula", "Fischl", "Ganyu", "Hu Tao", "Jean",
        "Kaeya", "Kazuha", "Keqing", "Klee", "Lisa", "Mona", "Ningguang", "Noelle",
        "Qiqi", "Razor", "Rosaria", "Sayu", "Sucrose", "Tartaglia", "Traveler_Anemo",
        "Traveler_Electro", "Traveler_Geo", "Venti", "Xiangling", "Xiao", "Xingqiu",
        "Xinyan", "Yanfei", "Yoimiya", "Zhongli"]
};
