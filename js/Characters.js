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
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "Q", "N1", "N2","N3","N4"],
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
    element: "PyroCharacter"
};
const Diona = {
    name: "Diona",
    src: "Characters/Diona.png",
    element: "CryoCharacter"
};
const Eula = {
    name: "Eula",
    src: "Characters/Eula.png",
    element: "CryoCharacter"
};
const Fischl = {
    name: "Fischl",
    src: "Characters/Fischl.png",
    element: "ElectroCharacter"
};
const Ganyu = {
    name: "Ganyu",
    src: "Characters/Ganyu.png",
    element: "CryoCharacter"
};
const Hu_Tao = {
    name: "Hu Tao",
    src: "Characters/Hu Tao.png",
    element: "PyroCharacter",
    weaponType: "Polearm",
};
const Jean = {
    name: "Jean",
    src: "Characters/Jean.png",
    element: "AnemoCharacter"
};
const Kaeya = {
    name: "Kaeya",
    src: "Characters/Kaeya.png",
    element: "CryoCharacter"
};
const Kazuha = {
    name: "Kazuha",
    src: "Characters/Kazuha.png",
    element: "AnemoCharacter"
};
const Keqing = {
    name: "Keqing",
    src: "Characters/Keqing.png",
    element: "ElectroCharacter"
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
    element: "AnemoCharacter"
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
