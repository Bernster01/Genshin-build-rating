const Albedo = {
    name: "Albedo",
    src: "Assets/Characters/Albedo/Albedo.webp",
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
    subDpsType: "Off-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
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
const Alhaitham = {
    name: "Alhaitham",
    src: "Assets/Characters/Alhaitham/Alhaitham.webp",
    card: "Assets/Characters/Alhaitham/Character_Alhaitham_Portrait.webp",
    element: "DendroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 24.39,
            ["20b"]: 63.27,
            ["20a"]: 84.19,
            ["40b"]: 125.97,
            ["40a"]: 140.83,
            ["50b"]: 162.03,
            ["50a"]: 181.84,
            ["60b"]: 203.25,
            ["60a"]: 218.11,
            ["70b"]: 239.72,
            ["70a"]: 254.58,
            ["80b"]: 276.44,
            ["80a"]: 291.30,
            ["90b"]: 313.32
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1039.12,
            ["20b"]: 2695.47,
            ["20a"]: 3586.42,
            ["40b"]: 5366.44,
            ["40a"]: 5999.48,
            ["50b"]: 6902.47,
            ["50a"]: 7746.53,
            ["60b"]: 8658.88,
            ["60a"]: 9291.92,
            ["70b"]: 10212.58,
            ["70a"]: 10845.62,
            ["80b"]: 11776.67,
            ["80a"]: 12409.72,
            ["90b"]: 13348.04
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 60.85,
            ["20b"]: 157.84,
            ["20a"]: 210.01,
            ["40b"]: 314.24,
            ["40a"]: 351.31,
            ["50b"]: 404.19,
            ["50a"]: 453.61,
            ["60b"]: 507.04,
            ["60a"]: 544.11,
            ["70b"]: 598.02,
            ["70a"]: 635.09,
            ["80b"]: 689.61,
            ["80a"]: 726.67,
            ["90b"]: 781.62
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "E", "N1", "N2", "N3", "N1", "N2", "N3", "C", "N1", "N2", "N3", "N1", "N2", "N3", "C"],
        ["Support"]: ["E", "N1", "N2", "N3", "C", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 49.53 / 100
                case 2:
                    return 53.56 / 100
                case 3:
                    return 57.59 / 100
                case 4:
                    return 63.35 / 100
                case 5:
                    return 67.38 / 100
                case 6:
                    return 71.98 / 100
                case 7:
                    return 78.32 / 100
                case 8:
                    return 84.65 / 100
                case 9:
                    return 90.99 / 100
                case 10:
                    return 97.9 / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 50.75 / 100
                case 2:
                    return 54.88 / 100
                case 3:
                    return 59.01 / 100
                case 4:
                    return 64.91 / 100
                case 5:
                    return 69.04 / 100
                case 6:
                    return 73.76 / 100
                case 7:
                    return 80.25 / 100
                case 8:
                    return 86.75 / 100
                case 9:
                    return 93.24 / 100
                case 10:
                    return 100.32 / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (2 * 34.18) / 100
                case 2:
                    return (2 * 36.96) / 100
                case 3:
                    return (2 * 39.74) / 100
                case 4:
                    return (2 * 43.72) / 100
                case 5:
                    return (2 * 46.5) / 100
                case 6:
                    return (2 * 49.68) / 100
                case 7:
                    return (2 * 54.05) / 100
                case 8:
                    return (2 * 58.42) / 100
                case 9:
                    return (2 * 62.79) / 100
                case 10:
                    return (2 * 67.56) / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 66.77 / 100
                case 2:
                    return 72.2 / 100
                case 3:
                    return 77.64 / 100
                case 4:
                    return 85.4 / 100
                case 5:
                    return 90.84 / 100
                case 6:
                    return 97.05 / 100
                case 7:
                    return 105.59 / 100
                case 8:
                    return 114.13 / 100
                case 9:
                    return 122.67 / 100
                case 10:
                    return 131.98 / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 83.85 / 100
                case 2:
                    return 90.68 / 100
                case 3:
                    return 97.5 / 100
                case 4:
                    return 107.25 / 100
                case 5:
                    return 114.08 / 100
                case 6:
                    return 121.88 / 100
                case 7:
                    return 132.6 / 100
                case 8:
                    return 143.33 / 100
                case 9:
                    return 154.05 / 100
                case 10:
                    return 165.75 / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (2 * 55.25) / 100
                case 2:
                    return (2 * 59.75) / 100
                case 3:
                    return (2 * 64.25) / 100
                case 4:
                    return (2 * 70.67) / 100
                case 5:
                    return (2 * 75.17) / 100
                case 6:
                    return (2 * 80.31) / 100
                case 7:
                    return (2 * 87.38) / 100
                case 8:
                    return (2 * 94.45) / 100
                case 9:
                    return (2 * 101.52) / 100
                case 10:
                    return (2 * 116.93) / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "DendroDMGBonus",
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

        return { Type: "DendroDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: UniversalityAnElaborationOnForm,
        Level: 1
    },
    elementalBurst: {
        Skill: ParticularFieldFettersOfPhenomena,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Mysteries Laid Bare",
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
    src: "Assets/Characters/Aloy/Aloy.webp",
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
    subDpsType: "On-field",
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
    src: "Assets/Characters/Amber/Amber.webp",
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
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
const Arlecchino = {
    name: "Arlecchino",
    src: "Assets/Characters/Arlecchino/Arlecchino.webp",
    card: "Assets/Characters/Arlecchino/Character_Arlecchino_Portrait.webp",
    element: "PyroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26.63,
            ["20b"]: 69.07,
            ["20a"]: 91.90,
            ["40b"]: 137.51,
            ["40a"]: 153.73,
            ["50b"]: 176.87,
            ["50a"]: 198.49,
            ["60b"]: 221.87,
            ["60a"]: 238.09,
            ["70b"]: 261.68,
            ["70a"]: 277.90,
            ["80b"]: 301.76,
            ["80a"]: 317.98,
            ["90b"]: 342.03
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1020.05,
            ["20b"]: 2646.02,
            ["20a"]: 3520.62,
            ["40b"]: 5267.97,
            ["40a"]: 5889.40,
            ["50b"]: 6775.82,
            ["50a"]: 7604.39,
            ["60b"]: 8500.00,
            ["60a"]: 9121.43,
            ["70b"]: 10025.19,
            ["70a"]: 10646.61,
            ["80b"]: 11560.59,
            ["80a"]: 12182.02,
            ["90b"]: 13103.12
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 59.53,
            ["20b"]: 154.42,
            ["20a"]: 205.47,
            ["40b"]: 307.44,
            ["40a"]: 343.71,
            ["50b"]: 395.44,
            ["50a"]: 443.80,
            ["60b"]: 496.07,
            ["60a"]: 532.34,
            ["70b"]: 585.08,
            ["70a"]: 621.35,
            ["80b"]: 674.69,
            ["80a"]: 710.96,
            ["90b"]: 764.71
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
            { Type: "PyroDMGBonus", Value: 40 },
            { Type: "HydroDMGBonus", Value: 0 },
            { Type: "DendroDMGBonus", Value: 0 },
            { Type: "ElectroDMGBonus", Value: 0 },
            { Type: "AnemoDMGBonus", Value: 0 },
            { Type: "CryoDMGBonus", Value: 0 },
            { Type: "GeoDMGBonus", Value: 0 },
            { Type: "PhysicalDMGBonus", Value: 0 }

        ]

    },
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 125,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "E", "C", "N1", "N2", "N3", "N4", "N5", "C", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["Q", "E", "C", "N1", "N2", "N3", "N4", "N5", "C",],
    },
    weaponType: "Polearm",
    goesOffFieldDuringCombo: true,
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.5 / 100
                case 2:
                    return 51.37 / 100
                case 3:
                    return 55.23 / 100
                case 4:
                    return 60.76 / 100
                case 5:
                    return 64.62 / 100
                case 6:
                    return 69.04 / 100
                case 7:
                    return 75.12 / 100
                case 8:
                    return 81.19 / 100
                case 9:
                    return 87.27 / 100
                case 10:
                    return 93.9 / 100
                case 11:
                    return 100.52 / 100
                case 12:
                    return 107.15 / 100
                case 13:
                    return 113.78 / 100
                default:
                    return 93.9 / 100
            }
        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 52.11 / 100
                case 2:
                    return 56.35 / 100
                case 3:
                    return 60.59 / 100
                case 4:
                    return 66.65 / 100
                case 5:
                    return 70.89 / 100
                case 6:
                    return 75.73 / 100
                case 7:
                    return 82.4 / 100
                case 8:
                    return 89.06 / 100
                case 9:
                    return 95.73 / 100
                case 10:
                    return 103 / 100
                case 11:
                    return 110.27 / 100
                case 12:
                    return 117.54 / 100
                case 13:
                    return 124.81 / 100
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
                    return 65.39 / 100
                case 2:
                    return 70.71 / 100
                case 3:
                    return 76.03 / 100
                case 4:
                    return 83.63 / 100
                case 5:
                    return 88.96 / 100
                case 6:
                    return 95.04 / 100
                case 7:
                    return 103.4 / 100
                case 8:
                    return 111.76 / 100
                case 9:
                    return 120.13 / 100
                case 10:
                    return 129.25 / 100
                case 11:
                    return 138.37 / 100
                case 12:
                    return 147.5 / 100
                case 13:
                    return 156.62 / 100
            }
        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (37.15 * 2) / 100
                case 2:
                    return (40.17 * 2) / 100
                case 3:
                    return (43.19 * 2) / 100
                case 4:
                    return (47.51 * 2) / 100
                case 5:
                    return (50.53 * 2) / 100
                case 6:
                    return (53.99 * 2) / 100
                case 7:
                    return (58.74 * 2) / 100
                case 8:
                    return (63.49 * 2) / 100
                case 9:
                    return (68.24 * 2) / 100
                case 10:
                    return (73.43 * 2) / 100
                case 11:
                    return (78.61 * 2) / 100
                case 12:
                    return (83.79 * 2) / 100
                case 13:
                    return (88.98 * 2) / 100
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
                    return 69.98 / 100
                case 2:
                    return 75.68 / 100
                case 3:
                    return 81.37 / 100
                case 4:
                    return 89.51 / 100
                case 5:
                    return 95.21 / 100
                case 6:
                    return 101.72 / 100
                case 7:
                    return 110.67 / 100
                case 8:
                    return 119.62 / 100
                case 9:
                    return 128.57 / 100
                case 10:
                    return 138.34 / 100
                case 11:
                    return 148.1 / 100
                case 12:
                    return 157.87 / 100
                case 13:
                    return 167.63 / 100
            }
        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 90.82 / 100
                case 2:
                    return 98.21 / 100
                case 3:
                    return 105.6 / 100
                case 4:
                    return 116.16 / 100
                case 5:
                    return 123.55 / 100
                case 6:
                    return 132 / 100
                case 7:
                    return 143.62 / 100
                case 8:
                    return 155.23 / 100
                case 9:
                    return 166.85 / 100
                case 10:
                    return 179.52 / 100
                case 11:
                    return 192.19 / 100
                case 12:
                    return 204.86 / 100
                case 13:
                    return 217.54 / 100
            }
        },
        Element: "PyroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PyroDMGBonus",
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
        Skill: allIsAsh,
        Level: 1
    },
    elementalBurst: {
        Skill: BalemoonRising,
        Level: 1
    },
    passive1: {
        Type: "Agony Alone May Be Repaid",
        Value: null
    },
    passive2: {
        Type: "Strength Alon Can Defend",
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
const Ayaka = {
    name: "Ayaka",
    src: "Assets/Characters/Ayaka/Ayaka.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
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
    src: "Assets/Characters/Ayato/Ayato.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
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
const Baizhu = {
    name: "Baizhu",
    src: "Assets/Characters/Baizhu/Baizhu.webp",
    card: "Assets/Characters/Baizhu/Character_Baizhu_Portrait.webp",
    element: "DendroCharacter",
    level: "1b",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 14.99,
            ["20b"]: 38.88,
            ["20a"]: 51.73,
            ["40b"]: 77.41,
            ["40a"]: 86.54,
            ["50b"]: 99.57,
            ["50a"]: 111.74,
            ["60b"]: 124.90,
            ["60a"]: 134.03,
            ["70b"]: 147.31,
            ["70a"]: 156.44,
            ["80b"]: 169.87,
            ["80a"]: 179.00,
            ["90b"]: 192.54
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1039.12,
            ["20b"]: 2695.47,
            ["20a"]: 3586.42,
            ["40b"]: 5366.44,
            ["40a"]: 5999.48,
            ["50b"]: 6902.47,
            ["50a"]: 7746.53,
            ["60b"]: 8658.88,
            ["60a"]: 9291.92,
            ["70b"]: 10212.58,
            ["70a"]: 10845.62,
            ["80b"]: 11776.67,
            ["80a"]: 12409.72,
            ["90b"]: 13348.04
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 38.89,
            ["20b"]: 100.88,
            ["20a"]: 134.22,
            ["40b"]: 200.84,
            ["40a"]: 224.53,
            ["50b"]: 258.33,
            ["50a"]: 289.92,
            ["60b"]: 324.06,
            ["60a"]: 347.76,
            ["70b"]: 382.21,
            ["70a"]: 405.91,
            ["80b"]: 440.75,
            ["80a"]: 464.44,
            ["90b"]: 499.56
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
    subDpsType: "Off-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 125,
    supportType: "Healer",
    supportType2: "Shield",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "C", "N1", "N2", "N3", "N4", "C"],
        ["Support"]: ["E", "Q", "E"]
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 37.37 / 100
                case 2:
                    return 40.17 / 100
                case 3:
                    return 42.98 / 100
                case 4:
                    return 46.71 / 100
                case 5:
                    return 49.52 / 100
                case 6:
                    return 52.06 / 100
                case 7:
                    return 56.06 / 100
                case 8:
                    return 59.79 / 100
                case 9:
                    return 63.53 / 100
                case 10:
                    return 67.27 / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36.42 / 100
                case 2:
                    return 39.16 / 100
                case 3:
                    return 41.89 / 100
                case 4:
                    return 45.53 / 100
                case 5:
                    return 48.26 / 100
                case 6:
                    return 50.99 / 100
                case 7:
                    return 54.64 / 100
                case 8:
                    return 58.28 / 100
                case 9:
                    return 61.92 / 100
                case 10:
                    return 65.56 / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (22.54 * 2) / 100
                case 2:
                    return (24.23 * 2) / 100
                case 3:
                    return (25.92 * 2) / 100
                case 4:
                    return (28.18 * 2) / 100
                case 5:
                    return (29.87 * 2) / 100
                case 6:
                    return (31.56 * 2) / 100
                case 7:
                    return (33.81 * 2) / 100
                case 8:
                    return (36.07 * 2) / 100
                case 9:
                    return (38.32 * 2) / 100
                case 10:
                    return (40.57 * 2) / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 54.14 / 100
                case 2:
                    return 58.2 / 100
                case 3:
                    return 62.26 / 100
                case 4:
                    return 67.67 / 100
                case 5:
                    return 71.73 / 100
                case 6:
                    return 75.79 / 100
                case 7:
                    return 81.21 / 100
                case 8:
                    return 86.62 / 100
                case 9:
                    return 91.03 / 100
                case 10:
                    return 97.45 / 100
            }
        },
        Element: "DendroDMGBonus",
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
                    return 121.04 / 100
                case 2:
                    return 130.12 / 100
                case 3:
                    return 139.2 / 100
                case 4:
                    return 151.3 / 100
                case 5:
                    return 160.38 / 100
                case 6:
                    return 169.46 / 100
                case 7:
                    return 181.56 / 100
                case 8:
                    return 193.66 / 100
                case 9:
                    return 205.77 / 100
                case 10:
                    return 217.87 / 100
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "DendroDMGBonus",
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

        return { Type: "HP%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: universalDiagnosis,
        Level: 1
    },
    elementalBurst: {
        Skill: holisticRevivification,
        Level: 1
    },
    passive1: {
        Type: "Five Fortunes Forever",
        Value: (role == "Dps") ? { Type: "DendroDMGBonus", Value: 25 } : { Type: "HealingBonus", Value: 20 }
    },
    passive2: {
        Type: "All things Are of the Earth",
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
const Barbara = {
    name: "Barbara",
    src: "Assets/Characters/Barbara/Barbara.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Healer",
    sequence: {
        ["Dps"]: ["N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C"],
        ["Support"]: ["Q", "E", "N1", "N2", "C"]
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
    src: "Assets/Characters/Beidou/Beidou.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
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
    src: "Assets/Characters/Bennet/Bennett.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 145,
    supportType: "Buffer",
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
const Candace = {
    name: "Candace",
    src: "Assets/Characters/Candace/Candace.webp",
    card: "Assets/Characters/Candace/Character_Candace_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 17.81,
            ["20b"]: 45.75,
            ["20a"]: 59.05,
            ["40b"]: 88.45,
            ["40a"]: 97.91,
            ["50b"]: 112.62,
            ["50a"]: 125.22,
            ["60b"]: 139.93,
            ["60a"]: 149.38,
            ["70b"]: 164.07,
            ["70a"]: 173.53,
            ["80b"]: 188.24,
            ["80a"]: 197.69,
            ["90b"]: 212.40
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 911.79,
            ["20b"]: 2342.39,
            ["20a"]: 3023.55,
            ["40b"]: 4528.91,
            ["40a"]: 5012.89,
            ["50b"]: 5766.03,
            ["50a"]: 6411.33,
            ["60b"]: 7164.47,
            ["60a"]: 7648.45,
            ["70b"]: 8400.68,
            ["70a"]: 8884.46,
            ["80b"]: 9637.80,
            ["80a"]: 10121.78,
            ["90b"]: 10874.91
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 57.23,
            ["20b"]: 147.01,
            ["20a"]: 189.76,
            ["40b"]: 284.24,
            ["40a"]: 314.61,
            ["50b"]: 361.88,
            ["50a"]: 402.38,
            ["60b"]: 449.65,
            ["60a"]: 480.03,
            ["70b"]: 527.24,
            ["70a"]: 557.61,
            ["80b"]: 604.88,
            ["80a"]: 635.25,
            ["90b"]: 682.52
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 195,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N1", "N2", "N3", "E", "N1", "N2", "N3"],
        ["Support"]: ["E", "Q",]
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 60.8 / 100
                case 2:
                    return 65.75 / 100
                case 3:
                    return 70.7 / 100
                case 4:
                    return 77.77 / 100
                case 5:
                    return 82.72 / 100
                case 6:
                    return 88.38 / 100
                case 7:
                    return 96.15 / 100
                case 8:
                    return 103.93 / 100
                case 9:
                    return 111.71 / 100
                case 10:
                    return 120.19 / 100
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
                    return 61.15 / 100
                case 2:
                    return 66.12 / 100
                case 3:
                    return 71.1 / 100
                case 4:
                    return 78.21 / 100
                case 5:
                    return 83.19 / 100
                case 6:
                    return 88.88 / 100
                case 7:
                    return 96.7 / 100
                case 8:
                    return 104.52 / 100
                case 9:
                    return 112.34 / 100
                case 10:
                    return 120.87 / 100
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
                    return (35.49 + 43.37) / 100
                case 2:
                    return (38.38 + 46.9) / 100
                case 3:
                    return (41.27 + 50.43) / 100
                case 4:
                    return (45.39 + 55.48) / 100
                case 5:
                    return (48.28 + 59.01) / 100
                case 6:
                    return (51.58 + 63.04) / 100
                case 7:
                    return (56.12 + 68.59) / 100
                case 8:
                    return (60.66 + 74.14) / 100
                case 9:
                    return (65.2 + 79.69) / 100
                case 10:
                    return (70.15 + 85.74) / 100
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
                    return 94.94 / 100
                case 2:
                    return 102.67 / 100
                case 3:
                    return 110.4 / 100
                case 4:
                    return 121.44 / 100
                case 5:
                    return 129.17 / 100
                case 6:
                    return 138 / 100
                case 7:
                    return 150.14 / 100
                case 8:
                    return 162.29 / 100
                case 9:
                    return 174.43 / 100
                case 10:
                    return 187.68 / 100
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
                    return 124.18 / 100
                case 2:
                    return 134.29 / 100
                case 3:
                    return 144.4 / 100
                case 4:
                    return 158.84 / 100
                case 5:
                    return 168.95 / 100
                case 6:
                    return 180.5 / 100
                case 7:
                    return 150.14 / 100
                case 8:
                    return 196.38 / 100
                case 9:
                    return 212.27 / 100
                case 10:
                    return 228.15 / 100
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
        Skill: sacredRiteHeronsSanctum,
        Level: 1
    },
    elementalBurst: {
        Skill: sacredRiteWagtailsTide,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Celestial Dome of Sand",
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
const Charlotte = {
    name: "Charlotte",
    src: "Assets/Characters/Charlotte/Charlotte.webp",
    card: "Assets/Characters/Charlotte/Character_Charlotte_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 14.51,
            ["20b"]: 37.29,
            ["20a"]: 48.13,
            ["40b"]: 72.09,
            ["40a"]: 79.79,
            ["50b"]: 91.78,
            ["50a"]: 102.05,
            ["60b"]: 114.04,
            ["60a"]: 121.75,
            ["70b"]: 133.72,
            ["70a"]: 141.42,
            ["80b"]: 153.41,
            ["80a"]: 161.12,
            ["90b"]: 173.10
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 902.67,
            ["20b"]: 2318.97,
            ["20a"]: 2993.31,
            ["40b"]: 4483.62,
            ["40a"]: 4962.76,
            ["50b"]: 5708.37,
            ["50a"]: 6347.22,
            ["60b"]: 7092.83,
            ["60a"]: 7571.97,
            ["70b"]: 8316.67,
            ["70a"]: 8795.81,
            ["80b"]: 9541.42,
            ["80a"]: 10020.56,
            ["90b"]: 10766.17,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 45.78,
            ["20b"]: 117.61,
            ["20a"]: 151.81,
            ["40b"]: 227.39,
            ["40a"]: 251.69,
            ["50b"]: 289.51,
            ["50a"]: 321.91,
            ["60b"]: 359.72,
            ["60a"]: 384.02,
            ["70b"]: 421.79,
            ["70a"]: 446.09,
            ["80b"]: 483.90,
            ["80a"]: 508.20,
            ["90b"]: 546.02,
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 145,
    supportType: "Healer",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 49.85 / 100;
                case 2:
                    return 53.58 / 100;
                case 3:
                    return 57.32 / 100;
                case 4:
                    return 62.31 / 100;
                case 5:
                    return 66.05 / 100;
                case 6:
                    return 69.78 / 100;
                case 7:
                    return 74.77 / 100;
                case 8:
                    return 79.75 / 100;
                case 9:
                    return 84.74 / 100;
                case 10:
                    return 89.72 / 100;
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
                    return 43.38 / 100;
                case 2:
                    return 46.63 / 100;
                case 3:
                    return 49.88 / 100;
                case 4:
                    return 54.22 / 100;
                case 5:
                    return 57.47 / 100;
                case 6:
                    return 60.73 / 100;
                case 7:
                    return 65.06 / 100;
                case 8:
                    return 69.4 / 100;
                case 9:
                    return 73.74 / 100;
                case 10:
                    return 78.08 / 100;
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
                    return 64.6 / 100;
                case 2:
                    return 69.45 / 100;
                case 3:
                    return 74.29 / 100;
                case 4:
                    return 80.75 / 100;
                case 5:
                    return 85.6 / 100;
                case 6:
                    return 90.44 / 100;
                case 7:
                    return 96.9 / 100;
                case 8:
                    return 103.36 / 100;
                case 9:
                    return 109.82 / 100;
                case 10:
                    return 116.28 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 100.51 / 100;
                case 2:
                    return 108.05 / 100;
                case 3:
                    return 115.59 / 100;
                case 4:
                    return 125.64 / 100;
                case 5:
                    return 133.18 / 100;
                case 6:
                    return 140.72 / 100;
                case 7:
                    return 150.77 / 100;
                case 8:
                    return 160.82 / 100;
                case 9:
                    return 170.87 / 100;
                case 10:
                    return 180.92 / 100;
            }
        },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 141.93 / 100;
                case 2:
                    return 153.49 / 100;
                case 3:
                    return 165.04 / 100;
                case 4:
                    return 181.54 / 100;
                case 5:
                    return 193.1 / 100;
                case 6:
                    return 206.3 / 100;
                case 7:
                    return 224.45 / 100;
                case 8:
                    return 242.61 / 100;
                case 9:
                    return 260.76 / 100;
                case 10:
                    return 280.57 / 100;
            }
        },
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
        Skill: framingFreezingPointComposition,
        Level: 1
    },
    elementalBurst: {
        Skill: stillPhotoComprehensiveConfirmation,
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
const Chevreuse = {
    name: "Chevreuse",
    src: "Assets/Characters/Chevreuse/Chevreuse.webp",
    card: "Assets/Characters/Chevreuse/Character_Chevreuse_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16.21,
            ["20b"]: 41.63,
            ["20a"]: 53.74,
            ["40b"]: 80.49,
            ["40a"]: 89.09,
            ["50b"]: 102.48,
            ["50a"]: 113.95,
            ["60b"]: 127.34,
            ["60a"]: 135.94,
            ["70b"]: 149.31,
            ["70a"]: 157.91,
            ["80b"]: 171.29,
            ["80a"]: 179.90,
            ["90b"]: 193.28
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1002.97,
            ["20b"]: 2576.63,
            ["20a"]: 3325.90,
            ["40b"]: 4981.80,
            ["40a"]: 5514.18,
            ["50b"]: 6342.63,
            ["50a"]: 7052.47,
            ["60b"]: 7880.92,
            ["60a"]: 8413.30,
            ["70b"]: 9240.75,
            ["70a"]: 9773.12,
            ["80b"]: 10601.58,
            ["80a"]: 11133.95,
            ["90b"]: 11962.41,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 50.70,
            ["20b"]: 130.25,
            ["20a"]: 168.13,
            ["40b"]: 251.84,
            ["40a"]: 278.75,
            ["50b"]: 320.63,
            ["50a"]: 356.51,
            ["60b"]: 398.39,
            ["60a"]: 425.30,
            ["70b"]: 467.13,
            ["70a"]: 494.04,
            ["80b"]: 535.92,
            ["80a"]: 562.83,
            ["90b"]: 604.71,
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Buffer",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 53.1 / 100;
                case 2:
                    return 57.5 / 100;
                case 3:
                    return 61.8 / 100;
                case 4:
                    return 68 / 100;
                case 5:
                    return 72.3 / 100;
                case 6:
                    return 77.2 / 100;
                case 7:
                    return 84 / 100;
                case 8:
                    return 90.8 / 100;
                case 9:
                    return 97.6 / 100;
                case 10:
                    return 105 / 100;
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
                    return 49.3 / 100;
                case 2:
                    return 53.3 / 100;
                case 3:
                    return 57.3 / 100;
                case 4:
                    return 63.1 / 100;
                case 5:
                    return 67.1 / 100;
                case 6:
                    return 71.7 / 100;
                case 7:
                    return 78 / 100;
                case 8:
                    return 84.3 / 100;
                case 9:
                    return 90.6 / 100;
                case 10:
                    return 97.5 / 100;
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
                    return (27.6 + 32.5) / 100;
                case 2:
                    return (29.9 + 35.1) / 100;
                case 3:
                    return (32.1 + 37.7) / 100;
                case 4:
                    return (35.4 + 41.5) / 100;
                case 5:
                    return (37.6 + 44.2) / 100;
                case 6:
                    return (40.2 + 47.2) / 100;
                case 7:
                    return (43.7 + 51.3) / 100;
                case 8:
                    return (47.3 + 55.5) / 100;
                case 9:
                    return (50.8 + 59.6) / 100;
                case 10:
                    return (54.6 + 64.2) / 100;
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
                    return 77.3 / 100;
                case 2:
                    return 83.6 / 100;
                case 3:
                    return 89.8 / 100;
                case 4:
                    return 98.8 / 100;
                case 5:
                    return 105.1 / 100;
                case 6:
                    return 112.3 / 100;
                case 7:
                    return 122.2 / 100;
                case 8:
                    return 132.1 / 100;
                case 9:
                    return 141.9 / 100;
                case 10:
                    return 152.7 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 121.7 / 100;
                case 2:
                    return 131.6 / 100;
                case 3:
                    return 141.5 / 100;
                case 4:
                    return 155.7 / 100;
                case 5:
                    return 165.6 / 100;
                case 6:
                    return 176.9 / 100;
                case 7:
                    return 192.4 / 100;
                case 8:
                    return 208 / 100;
                case 9:
                    return 223.6 / 100;
                case 10:
                    return 240.6 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 160 / 100;
                case 2:
                    return 173 / 100;
                case 3:
                    return 186 / 100;
                case 4:
                    return 204 / 100;
                case 5:
                    return 217 / 100;
                case 6:
                    return 232 / 100;
                case 7:
                    return 253 / 100;
                case 8:
                    return 273 / 100;
                case 9:
                    return 293 / 100;
                case 10:
                    return 316 / 100;
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
        Skill: shortRangeRapidInterdictionFire,
        Level: 1
    },
    elementalBurst: {
        Skill: ringOfBurstingGrenades,
        Level: 1
    },
    passive1: {
        Type: "Vangurd's Coordinated Tactics",
        Value: null
    },
    passive2: {
        Type: "Vertical Force Coordination",
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
const Chiori = {
    name: "Chiori",
    src: "Assets/Characters/Chiori/Chiori.webp",
    card: "Assets/Characters/Chiori/Character_Chiori_Portrait.webp",
    element: "GeoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 25.14,
            ["20b"]: 65.21,
            ["20a"]: 86.76,
            ["40b"]: 129.82,
            ["40a"]: 145.13,
            ["50b"]: 166.97,
            ["50a"]: 187.39,
            ["60b"]: 209.46,
            ["60a"]: 224.77,
            ["70b"]: 247.04,
            ["70a"]: 262.36,
            ["80b"]: 284.88,
            ["80a"]: 300.19,
            ["90b"]: 322.89
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 890.40,
            ["20b"]: 2309.70,
            ["20a"]: 3073.14,
            ["40b"]: 4598.39,
            ["40a"]: 5140.83,
            ["50b"]: 5914.59,
            ["50a"]: 6637.85,
            ["60b"]: 7419.62,
            ["60a"]: 7962.06,
            ["70b"]: 8750.96,
            ["70a"]: 9293.40,
            ["80b"]: 10091.20,
            ["80a"]: 10633.64,
            ["90b"]: 11437.67,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 74.19,
            ["20b"]: 192.45,
            ["20a"]: 256.06,
            ["40b"]: 383.15,
            ["40a"]: 428.35,
            ["50b"]: 492.82,
            ["50a"]: 553.08,
            ["60b"]: 618.22,
            ["60a"]: 663.42,
            ["70b"]: 729.15,
            ["70a"]: 774.35,
            ["80b"]: 840.82,
            ["80a"]: 886.02,
            ["90b"]: 953.01,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N3", "N4", "C", "C", "N1", "N2", "N3", "N3", "N4", "C", "C"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 49.41 / 100;
                case 2:
                    return 53.43 / 100;
                case 3:
                    return 57.45 / 100;
                case 4:
                    return 63.2 / 100;
                case 5:
                    return 67.22 / 100;
                case 6:
                    return 71.82 / 100;
                case 7:
                    return 78.14 / 100;
                case 8:
                    return 84.46 / 100;
                case 9:
                    return 90.78 / 100;
                case 10:
                    return 97.67 / 100;
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
                    return 46.83 / 100;
                case 2:
                    return 50.65 / 100;
                case 3:
                    return 54.46 / 100;
                case 4:
                    return 59.9 / 100;
                case 5:
                    return 63.72 / 100;
                case 6:
                    return 68.07 / 100;
                case 7:
                    return 74.06 / 100;
                case 8:
                    return 80.05 / 100;
                case 9:
                    return 86.04 / 100;
                case 10:
                    return 92.58 / 100;
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
                    return 30.42 / 100;
                case 2:
                    return 32.89 / 100;
                case 3:
                    return 35.37 / 100;
                case 4:
                    return 38.9 / 100;
                case 5:
                    return 41.38 / 100;
                case 6:
                    return 44.21 / 100;
                case 7:
                    return 48.1 / 100;
                case 8:
                    return 51.99 / 100;
                case 9:
                    return 55.88 / 100;
                case 10:
                    return 60.13 / 100;
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
                    return 75.12 / 100;
                case 2:
                    return 81.24 / 100;
                case 3:
                    return 87.35 / 100;
                case 4:
                    return 96.09 / 100;
                case 5:
                    return 102.2 / 100;
                case 6:
                    return 109.19 / 100;
                case 7:
                    return 118.8 / 100;
                case 8:
                    return 128.41 / 100;
                case 9:
                    return 138.02 / 100;
                case 10:
                    return 148.5 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 54.31 / 100;
                case 2:
                    return 58.73 / 100;
                case 3:
                    return 63.15 / 100;
                case 4:
                    return 69.46 / 100;
                case 5:
                    return 73.89 / 100;
                case 6:
                    return 78.94 / 100;
                case 7:
                    return 85.88 / 100;
                case 8:
                    return 92.83 / 100;
                case 9:
                    return 99.78 / 100;
                case 10:
                    return 107.35 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 159.68 / 100;
                case 2:
                    return 172.67 / 100;
                case 3:
                    return 185.67 / 100;
                case 4:
                    return 204.24 / 100;
                case 5:
                    return 217.23 / 100;
                case 6:
                    return 232.09 / 100;
                case 7:
                    return 252.51 / 100;
                case 8:
                    return 272.93 / 100;
                case 9:
                    return 293.36 / 100;
                case 10:
                    return 315.64 / 100;
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
        Skill: flutteringHasode,
        Level: 1
    },
    elementalBurst: {
        Skill: hiyokuTwinBlades,
        Level: 1
    },
    passive1: {
        Type: "Tailor-Made",
        Value: null
    },
    passive2: {
        Type: "The Finishing Touch",
        Value: 0
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
    src: "Assets/Characters/Chongyun/Chongyun.webp",
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
    subDpsType: "On-field",
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
const Clorinde = {
    name: "Clorinde",
    src: "Assets/Characters/Clorinde/Clorinde.webp",
    card: "Assets/Characters/Clorinde/Character_Clorinde_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26.25,
            ["20b"]: 68.10,
            ["20a"]: 90.61,
            ["40b"]: 135.59,
            ["40a"]: 151.58,
            ["50b"]: 174.39,
            ["50a"]: 195.72,
            ["60b"]: 218.77,
            ["60a"]: 234.76,
            ["70b"]: 258.02,
            ["70a"]: 274.02,
            ["80b"]: 297.54,
            ["80a"]: 313.53,
            ["90b"]: 337.24
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1008.61,
            ["20b"]: 2616.34,
            ["20a"]: 3481.13,
            ["40b"]: 5208.89,
            ["40a"]: 5823.35,
            ["50b"]: 6699.83,
            ["50a"]: 7519.11,
            ["60b"]: 8404.67,
            ["60a"]: 9019.13,
            ["70b"]: 9912.76,
            ["70a"]: 10527.22,
            ["80b"]: 11430.94,
            ["80a"]: 12045.40,
            ["90b"]: 12956.17,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 61.03,
            ["20b"]: 158.30,
            ["20a"]: 210.63,
            ["40b"]: 315.17,
            ["40a"]: 352.35,
            ["50b"]: 405.38,
            ["50a"]: 454.95,
            ["60b"]: 508.53,
            ["60a"]: 545.71,
            ["70b"]: 599.78,
            ["70a"]: 636.96,
            ["80b"]: 691.64,
            ["80a"]: 728.82,
            ["90b"]: 783.93,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 100,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 54.06 / 100;
                case 2:
                    return 58.46 / 100;
                case 3:
                    return 62.86 / 100;
                case 4:
                    return 69.15 / 100;
                case 5:
                    return 73.55 / 100;
                case 6:
                    return 78.57 / 100;
                case 7:
                    return 85.49 / 100;
                case 8:
                    return 92.4 / 100;
                case 9:
                    return 99.32 / 100;
                case 10:
                    return 106.86 / 100;
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
                    return 51.63 / 100;
                case 2:
                    return 55.83 / 100;
                case 3:
                    return 60.03 / 100;
                case 4:
                    return 66.04 / 100;
                case 5:
                    return 70.24 / 100;
                case 6:
                    return 75.04 / 100;
                case 7:
                    return 81.64 / 100;
                case 8:
                    return 88.25 / 100;
                case 9:
                    return 94.85 / 100;
                case 10:
                    return 102.06 / 100;
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
                    return 34.19 / 100;
                case 2:
                    return 36.97 / 100;
                case 3:
                    return 39.75 / 100;
                case 4:
                    return 43.73 / 100;
                case 5:
                    return 46.51 / 100;
                case 6:
                    return 49.69 / 100;
                case 7:
                    return 54.06 / 100;
                case 8:
                    return 58.43 / 100;
                case 9:
                    return 62.8 / 100;
                case 10:
                    return 67.58 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: huntersVigil,
        Level: 1
    },
    elementalBurst: {
        Skill: lastLightFall,
        Level: 1
    },
    passive1: {
        Type: "Dark-Shattering Flame",
        Value: null
    },
    passive2: {
        Type: "Lawful Remuneration",
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
const Collei = {
    name: "Collei",
    src: "Assets/Characters/Collei/Collei.webp",
    card: "Assets/Characters/Collei/Character_Collei_Portrait.webp",
    element: "DendroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16.74,
            ["20b"]: 43.00,
            ["20a"]: 55.51,
            ["40b"]: 83.15,
            ["40a"]: 92.03,
            ["50b"]: 105.86,
            ["50a"]: 117.71,
            ["60b"]: 131.53,
            ["60a"]: 140.42,
            ["70b"]: 154.23,
            ["70a"]: 163.11,
            ["80b"]: 176.94,
            ["80a"]: 185.83,
            ["90b"]: 199.65
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 820.61,
            ["20b"]: 2108.15,
            ["20a"]: 2721.19,
            ["40b"]: 4076.02,
            ["40a"]: 4511.60,
            ["50b"]: 5189.43,
            ["50a"]: 5770.20,
            ["60b"]: 6448.03,
            ["60a"]: 6883.61,
            ["70b"]: 7560.61,
            ["70a"]: 7996.19,
            ["80b"]: 8674.02,
            ["80a"]: 9109.60,
            ["90b"]: 9787.42,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 50.36,
            ["20b"]: 129.37,
            ["20a"]: 166.99,
            ["40b"]: 250.13,
            ["40a"]: 276.86,
            ["50b"]: 318.46,
            ["50a"]: 354.10,
            ["60b"]: 395.69,
            ["60a"]: 422.42,
            ["70b"]: 463.97,
            ["70a"]: 490.70,
            ["80b"]: 532.29,
            ["80a"]: 559.02,
            ["90b"]: 600.62,
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 165,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.6 / 100;
                case 2:
                    return 47.15 / 100;
                case 3:
                    return 50.7 / 100;
                case 4:
                    return 55.77 / 100;
                case 5:
                    return 59.32 / 100;
                case 6:
                    return 63.38 / 100;
                case 7:
                    return 68.95 / 100;
                case 8:
                    return 74.53 / 100;
                case 9:
                    return 80.11 / 100;
                case 10:
                    return 86.19 / 100;
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
                    return 42.66 / 100;
                case 2:
                    return 46.13 / 100;
                case 3:
                    return 49.6 / 100;
                case 4:
                    return 54.56 / 100;
                case 5:
                    return 58.03 / 100;
                case 6:
                    return 62 / 100;
                case 7:
                    return 67.46 / 100;
                case 8:
                    return 72.91 / 100;
                case 9:
                    return 78.37 / 100;
                case 10:
                    return 84.32 / 100;
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
                    return 54.09 / 100;
                case 2:
                    return 58.5 / 100;
                case 3:
                    return 62.9 / 100;
                case 4:
                    return 69.19 / 100;
                case 5:
                    return 73.59 / 100;
                case 6:
                    return 78.63 / 100;
                case 7:
                    return 85.54 / 100;
                case 8:
                    return 92.46 / 100;
                case 9:
                    return 99.38 / 100;
                case 10:
                    return 106.93 / 100;
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
                    return 68.03 / 100;
                case 2:
                    return 73.56 / 100;
                case 3:
                    return 79.1 / 100;
                case 4:
                    return 87.01 / 100;
                case 5:
                    return 92.55 / 100;
                case 6:
                    return 98.88 / 100;
                case 7:
                    return 107.58 / 100;
                case 8:
                    return 116.28 / 100;
                case 9:
                    return 124.98 / 100;
                case 10:
                    return 134.47 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 141.93 / 100;
                case 2:
                    return 153.49 / 100;
                case 3:
                    return 165.04 / 100;
                case 4:
                    return 181.54 / 100;
                case 5:
                    return 193.1 / 100;
                case 6:
                    return 206.3 / 100;
                case 7:
                    return 224.45 / 100;
                case 8:
                    return 242.61 / 100;
                case 9:
                    return 260.76 / 100;
                case 10:
                    return 280.57 / 100;
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
        Skill: floralBrush,
        Level: 1
    },
    elementalBurst: {
        Skill: trumpCardKitty,
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
const Cyno = {
    name: "Cyno",
    src: "Assets/Characters/Cyno/Cyno.webp",
    card: "Assets/Characters/Cyno/Character_Cyno_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 24.76,
            ["20b"]: 64.24,
            ["20a"]: 85.47,
            ["40b"]: 127.89,
            ["40a"]: 142.98,
            ["50b"]: 164.50,
            ["50a"]: 184.61,
            ["60b"]: 206.36,
            ["60a"]: 221.44,
            ["70b"]: 243.38,
            ["70a"]: 258.47,
            ["80b"]: 280.66,
            ["80a"]: 295.74,
            ["90b"]: 318.11
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 972.39,
            ["20b"]: 2522.37,
            ["20a"]: 3356.10,
            ["40b"]: 5021.80,
            ["40a"]: 5614.19,
            ["50b"]: 6459.19,
            ["50a"]: 7249.05,
            ["60b"]: 8102.80,
            ["60a"]: 8695.19,
            ["70b"]: 9556.73,
            ["70a"]: 10149.12,
            ["80b"]: 11020.37,
            ["80a"]: 11612.76,
            ["90b"]: 12490.83,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 66.89,
            ["20b"]: 173.51,
            ["20a"]: 230.87,
            ["40b"]: 345.45,
            ["40a"]: 386.20,
            ["50b"]: 444.33,
            ["50a"]: 498.66,
            ["60b"]: 557.39,
            ["60a"]: 598.14,
            ["70b"]: 657.41,
            ["70a"]: 698.16,
            ["80b"]: 758.09,
            ["80a"]: 798.84,
            ["90b"]: 859.24,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "Q", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E"],//Combo from KQM https://keqingmains.com/q/cyno-quickguide/
        ["Support"]: ["E", "N1", "Q", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E", "N1", "N2", "N3", "N4", "N4", "E"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 49.26 / 100;
                case 2:
                    return 53.27 / 100;
                case 3:
                    return 57.28 / 100;
                case 4:
                    return 63 / 100;
                case 5:
                    return 67.01 / 100;
                case 6:
                    return 71.59 / 100;
                case 7:
                    return 77.9 / 100;
                case 8:
                    return 84.2 / 100;
                case 9:
                    return 90.5 / 100;
                case 10:
                    return 97.37 / 100;
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
                    return 47.92 / 100;
                case 2:
                    return 51.82 / 100;
                case 3:
                    return 55.72 / 100;
                case 4:
                    return 61.29 / 100;
                case 5:
                    return 65.19 / 100;
                case 6:
                    return 69.65 / 100;
                case 7:
                    return 75.78 / 100;
                case 8:
                    return 81.91 / 100;
                case 9:
                    return 88.04 / 100;
                case 10:
                    return 94.73 / 100;
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
                    return 29.31 / 100;
                case 2:
                    return 31.69 / 100;
                case 3:
                    return 34.08 / 100;
                case 4:
                    return 37.48 / 100;
                case 5:
                    return 39.87 / 100;
                case 6:
                    return 42.6 / 100;
                case 7:
                    return 46.34 / 100;
                case 8:
                    return 50.09 / 100;
                case 9:
                    return 53.84 / 100;
                case 10:
                    return 57.93 / 100;
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
                    return 75.89 / 100;
                case 2:
                    return 82.07 / 100;
                case 3:
                    return 88.24 / 100;
                case 4:
                    return 97.07 / 100;
                case 5:
                    return 103.25 / 100;
                case 6:
                    return 110.31 / 100;
                case 7:
                    return 120.01 / 100;
                case 8:
                    return 129.72 / 100;
                case 9:
                    return 139.43 / 100;
                case 10:
                    return 150.02 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 122.38 / 100;
                case 2:
                    return 132.34 / 100;
                case 3:
                    return 142.3 / 100;
                case 4:
                    return 156.53 / 100;
                case 5:
                    return 166.49 / 100;
                case 6:
                    return 177.88 / 100;
                case 7:
                    return 193.53 / 100;
                case 8:
                    return 209.18 / 100;
                case 9:
                    return 224.83 / 100;
                case 10:
                    return 241.91 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 159.68 / 100;
                case 2:
                    return 172.67 / 100;
                case 3:
                    return 185.67 / 100;
                case 4:
                    return 204.24 / 100;
                case 5:
                    return 217.23 / 100;
                case 6:
                    return 232.09 / 100;
                case 7:
                    return 252.51 / 100;
                case 8:
                    return 272.93 / 100;
                case 9:
                    return 293.36 / 100;
                case 10:
                    return 315.64 / 100;
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
        Skill: secretRiteChasmicSoulfarer,
        Level: 1
    },
    elementalBurst: {
        Skill: sacredRiteWolfsSwiftness,
        Level: 1
    },
    passive1: {
        Type: "Featherfall Judgment",
        Value: null
    },
    passive2: {
        Type: "Authority Over the Nine Bows",
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
const Dehya = {
    name: "Dehya",
    src: "Assets/Characters/Dehya/Dehya.webp",
    card: "Assets/Characters/Dehya/Character_Dehya_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20.67,
            ["20b"]: 53.61,
            ["20a"]: 71.33,
            ["40b"]: 106.74,
            ["40a"]: 119.33,
            ["50b"]: 137.29,
            ["50a"]: 154.08,
            ["60b"]: 172.22,
            ["60a"]: 184.81,
            ["70b"]: 203.13,
            ["70a"]: 215.72,
            ["80b"]: 234.23,
            ["80a"]: 246.82,
            ["90b"]: 265.49
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1220.25,
            ["20b"]: 3165.33,
            ["20a"]: 4211.58,
            ["40b"]: 6301.87,
            ["40a"]: 7045.26,
            ["50b"]: 8105.66,
            ["50a"]: 9096.84,
            ["60b"]: 10168.22,
            ["60a"]: 10911.61,
            ["70b"]: 11992.76,
            ["70a"]: 12736.15,
            ["80b"]: 13829.49,
            ["80a"]: 14572.88,
            ["90b"]: 15674.77,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 48.88,
            ["20b"]: 126.80,
            ["20a"]: 168.71,
            ["40b"]: 252.44,
            ["40a"]: 282.22,
            ["50b"]: 324.70,
            ["50a"]: 364.41,
            ["60b"]: 407.32,
            ["60a"]: 437.10,
            ["70b"]: 480.41,
            ["70a"]: 510.19,
            ["80b"]: 553.99,
            ["80a"]: 583.77,
            ["90b"]: 627.91,
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
    havePhysicalChargedAttack: true,
    subDpsType: "Off-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 240,
    supportType: "Shield",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 62.12 / 100;
                case 2:
                    return 67.17 / 100;
                case 3:
                    return 72.23 / 100;
                case 4:
                    return 79.45 / 100;
                case 5:
                    return 84.51 / 100;
                case 6:
                    return 90.29 / 100;
                case 7:
                    return 98.23 / 100;
                case 8:
                    return 106.18 / 100;
                case 9:
                    return 114.12 / 100;
                case 10:
                    return 122.79 / 100;
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
                    return 61.71 / 100;
                case 2:
                    return 66.73 / 100;
                case 3:
                    return 71.76 / 100;
                case 4:
                    return 78.93 / 100;
                case 5:
                    return 83.95 / 100;
                case 6:
                    return 89.7 / 100;
                case 7:
                    return 97.59 / 100;
                case 8:
                    return 105.48 / 100;
                case 9:
                    return 113.37 / 100;
                case 10:
                    return 121.99 / 100;
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
                    return 76.63 / 100;
                case 2:
                    return 82.87 / 100;
                case 3:
                    return 89.11 / 100;
                case 4:
                    return 98.02 / 100;
                case 5:
                    return 104.25 / 100;
                case 6:
                    return 111.38 / 100;
                case 7:
                    return 121.18 / 100;
                case 8:
                    return 130.99 / 100;
                case 9:
                    return 140.79 / 100;
                case 10:
                    return 151.48 / 100;
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
                    return 95.29 / 100;
                case 2:
                    return 103.05 / 100;
                case 3:
                    return 110.8 / 100;
                case 4:
                    return 121.88 / 100;
                case 5:
                    return 129.64 / 100;
                case 6:
                    return 138.5 / 100;
                case 7:
                    return 150.69 / 100;
                case 8:
                    return 162.88 / 100;
                case 9:
                    return 175.07 / 100;
                case 10:
                    return 188.37 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 56.33 / 100;
                case 2:
                    return 60.91 / 100;
                case 3:
                    return 65.5 / 100;
                case 4:
                    return 72.05 / 100;
                case 5:
                    return 76.63 / 100;
                case 6:
                    return 81.88 / 100;
                case 7:
                    return 89.08 / 100;
                case 8:
                    return 96.28 / 100;
                case 9:
                    return 103.49 / 100;
                case 10:
                    return 111.35 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 186.29 / 100;
                case 2:
                    return 201.45 / 100;
                case 3:
                    return 216.62 / 100;
                case 4:
                    return 238.28 / 100;
                case 5:
                    return 253.44 / 100;
                case 6:
                    return 270.77 / 100;
                case 7:
                    return 294.6 / 100;
                case 8:
                    return 318.42 / 100;
                case 9:
                    return 342.25 / 100;
                case 10:
                    return 368.25 / 100;
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

        return { Type: "HP%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: moltenInferno,
        Level: 1
    },
    elementalBurst: {
        Skill: leonineBite,
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
const Diluc = {
    name: "Diluc",
    src: "Assets/Characters/Diluc/Diluc.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 115,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "N1", "N2", "E", "N1", "N2", "E", "N1", "N2", "E", "N1", "N2"],
        ["Support"]: ["E", "E", "E", "Q",]
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
    src: "Assets/Characters/Diona/Diona.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 120,
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
const Dori = {
    name: "Dori",
    src: "Assets/Characters/Dori/Dori.webp",
    card: "Assets/Characters/Dori/Character_Dori_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.70,
            ["20b"]: 48.04,
            ["20a"]: 62.01,
            ["40b"]: 92.88,
            ["40a"]: 102.80,
            ["50b"]: 118.25,
            ["50a"]: 131.48,
            ["60b"]: 146.93,
            ["60a"]: 156.85,
            ["70b"]: 172.28,
            ["70a"]: 182.20,
            ["80b"]: 197.65,
            ["80a"]: 207.57,
            ["90b"]: 223.02
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1039.44,
            ["20b"]: 2670.33,
            ["20a"]: 3446.84,
            ["40b"]: 5162.96,
            ["40a"]: 5714.70,
            ["50b"]: 6573.27,
            ["50a"]: 7308.92,
            ["60b"]: 8167.50,
            ["60a"]: 8719.24,
            ["70b"]: 9576.78,
            ["70a"]: 10128.51,
            ["80b"]: 10987.09,
            ["80a"]: 11538.82,
            ["90b"]: 12397.40,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 60.66,
            ["20b"]: 155.83,
            ["20a"]: 201.15,
            ["40b"]: 301.29,
            ["40a"]: 333.49,
            ["50b"]: 383.60,
            ["50a"]: 426.53,
            ["60b"]: 476.63,
            ["60a"]: 508.83,
            ["70b"]: 558.87,
            ["70a"]: 591.07,
            ["80b"]: 641.17,
            ["80a"]: 673.37,
            ["90b"]: 723.47,
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
    havePhysicalChargedAttack: true,
    subDpsType: "Off-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 125,
    supportType: "Healer",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N1", "N2",],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 90.21 / 100;
                case 2:
                    return 97.56 / 100;
                case 3:
                    return 104.9 / 100;
                case 4:
                    return 115.39 / 100;
                case 5:
                    return 122.73 / 100;
                case 6:
                    return 131.13 / 100;
                case 7:
                    return 142.66 / 100;
                case 8:
                    return 154.2 / 100;
                case 9:
                    return 165.74 / 100;
                case 10:
                    return 178.33 / 100;
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
                    return 41.07 / 100;
                case 2:
                    return 44.42 / 100;
                case 3:
                    return 47.76 / 100;
                case 4:
                    return 52.54 / 100;
                case 5:
                    return 55.88 / 100;
                case 6:
                    return 59.7 / 100;
                case 7:
                    return 64.95 / 100;
                case 8:
                    return 70.21 / 100;
                case 9:
                    return 75.46 / 100;
                case 10:
                    return 81.19 / 100;
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
                    return 43.12 / 100;
                case 2:
                    return 46.63 / 100;
                case 3:
                    return 50.14 / 100;
                case 4:
                    return 55.15 / 100;
                case 5:
                    return 58.66 / 100;
                case 6:
                    return 62.68 / 100;
                case 7:
                    return 68.19 / 100;
                case 8:
                    return 73.71 / 100;
                case 9:
                    return 79.22 / 100;
                case 10:
                    return 85.24 / 100;
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
                    return 128.4 / 100;
                case 2:
                    return 138.85 / 100;
                case 3:
                    return 149.3 / 100;
                case 4:
                    return 164.23 / 100;
                case 5:
                    return 174.68 / 100;
                case 6:
                    return 186.63 / 100;
                case 7:
                    return 203.05 / 100;
                case 8:
                    return 219.47 / 100;
                case 9:
                    return 235.89 / 100;
                case 10:
                    return 253.81 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 62.55 / 100;
                case 2:
                    return 67.64 / 100;
                case 3:
                    return 72.73 / 100;
                case 4:
                    return 80 / 100;
                case 5:
                    return 85.09 / 100;
                case 6:
                    return 90.91 / 100;
                case 7:
                    return 98.91 / 100;
                case 8:
                    return 106.91 / 100;
                case 9:
                    return 114.91 / 100;
                case 10:
                    return 123.64 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 186.29 / 100;
                case 2:
                    return 201.45 / 100;
                case 3:
                    return 216.62 / 100;
                case 4:
                    return 238.28 / 100;
                case 5:
                    return 253.44 / 100;
                case 6:
                    return 270.77 / 100;
                case 7:
                    return 294.6 / 100;
                case 8:
                    return 318.42 / 100;
                case 9:
                    return 342.25 / 100;
                case 10:
                    return 368.25 / 100;
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
        Skill: spiritWardingLampTroubleshooterCannon,
        Level: 1
    },
    elementalBurst: {
        Skill: alcazarzaraysExactitude,
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
const Emilie = {
    name: "Emilie",
    src: "Assets/Characters/Emilie/Emilie.webp",
    card: "Assets/Characters/Emilie/Character_Emilie_Portrait.webp",
    element: "DendroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26.07,
            ["20b"]: 67.62,
            ["20a"]: 89.97,
            ["40b"]: 134.62,
            ["40a"]: 150.50,
            ["50b"]: 173.16,
            ["50a"]: 194.33,
            ["60b"]: 217.22,
            ["60a"]: 233.10,
            ["70b"]: 256.19,
            ["70a"]: 272.07,
            ["80b"]: 295.43,
            ["80a"]: 311.31,
            ["90b"]: 334.85
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1056.28,
            ["20b"]: 2739.99,
            ["20a"]: 3645.65,
            ["40b"]: 5455.06,
            ["40a"]: 6098.55,
            ["50b"]: 7016.46,
            ["50a"]: 7874.46,
            ["60b"]: 8801.87,
            ["60a"]: 9445.37,
            ["70b"]: 10381.23,
            ["70a"]: 11024.73,
            ["80b"]: 11971.15,
            ["80a"]: 12614.65,
            ["90b"]: 13568.47,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 56.84,
            ["20b"]: 147.44,
            ["20a"]: 196.17,
            ["40b"]: 293.54,
            ["40a"]: 328.17,
            ["50b"]: 377.56,
            ["50a"]: 423.73,
            ["60b"]: 473.63,
            ["60a"]: 508.26,
            ["70b"]: 558.62,
            ["70a"]: 593.25,
            ["80b"]: 644.17,
            ["80a"]: 678.80,
            ["90b"]: 730.13,
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "Q", "N1", "N2", "N3", "N4", "E"],
        ["Support"]: ["E", "Q", "E"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 48.56 / 100;
                case 2:
                    return 52.51 / 100;
                case 3:
                    return 56.47 / 100;
                case 4:
                    return 62.11 / 100;
                case 5:
                    return 66.07 / 100;
                case 6:
                    return 70.58 / 100;
                case 7:
                    return 76.79 / 100;
                case 8:
                    return 83 / 100;
                case 9:
                    return 89.22 / 100;
                case 10:
                    return 95.99 / 100;
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
                    return 44.9 / 100;
                case 2:
                    return 48.55 / 100;
                case 3:
                    return 52.2 / 100;
                case 4:
                    return 57.42 / 100;
                case 5:
                    return 61.08 / 100;
                case 6:
                    return 65.25 / 100;
                case 7:
                    return 71 / 100;
                case 8:
                    return 76.74 / 100;
                case 9:
                    return 82.48 / 100;
                case 10:
                    return 88.75 / 100;
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
                    return 59.3 / 100;
                case 2:
                    return 64.13 / 100;
                case 3:
                    return 68.95 / 100;
                case 4:
                    return 75.85 / 100;
                case 5:
                    return 80.68 / 100;
                case 6:
                    return 86.19 / 100;
                case 7:
                    return 93.78 / 100;
                case 8:
                    return 101.36 / 100;
                case 9:
                    return 108.95 / 100;
                case 10:
                    return 117.22 / 100;
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
                    return 75.1 / 100;
                case 2:
                    return 81.22 / 100;
                case 3:
                    return 87.33 / 100;
                case 4:
                    return 96.06 / 100;
                case 5:
                    return 102.17 / 100;
                case 6:
                    return 109.16 / 100;
                case 7:
                    return 118.77 / 100;
                case 8:
                    return 128.37 / 100;
                case 9:
                    return 137.98 / 100;
                case 10:
                    return 148.46 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: fragranceExtraction,
        Level: 1
    },
    elementalBurst: {
        Skill: aromaticExplication,
        Level: 1
    },
    passive1: {
        Type: "Lingering Fragrance",
        Value: null
    },
    passive2: {
        Type: "Rectification",
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
    src: "Assets/Characters/Eula/Eula.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "E", "N1", "N2", "N3", "N4", "Q"],
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
const Faruzan = {
    name: "Faruzan",
    src: "Assets/Characters/Faruzan/Faruzan.webp",
    card: "Assets/Characters/Faruzan/Character_Faruzan_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16.47,
            ["20b"]: 42.32,
            ["20a"]: 54.62,
            ["40b"]: 81.82,
            ["40a"]: 90.56,
            ["50b"]: 104.17,
            ["50a"]: 115.83,
            ["60b"]: 129.43,
            ["60a"]: 138.18,
            ["70b"]: 151.77,
            ["70a"]: 160.51,
            ["80b"]: 174.12,
            ["80a"]: 182.86,
            ["90b"]: 196.47
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 802.38,
            ["20b"]: 2061.30,
            ["20a"]: 2660.72,
            ["40b"]: 3985.44,
            ["40a"]: 4411.34,
            ["50b"]: 5074.11,
            ["50a"]: 5641.97,
            ["60b"]: 6304.74,
            ["60a"]: 6730.64,
            ["70b"]: 7392.60,
            ["70a"]: 7818.50,
            ["80b"]: 8481.26,
            ["80a"]: 8907.16,
            ["90b"]: 9569.93,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 52.65,
            ["20b"]: 135.25,
            ["20a"]: 174.58,
            ["40b"]: 261.50,
            ["40a"]: 289.45,
            ["50b"]: 332.93,
            ["50a"]: 370.19,
            ["60b"]: 413.68,
            ["60a"]: 441.62,
            ["70b"]: 485.06,
            ["70a"]: 513.00,
            ["80b"]: 556.49,
            ["80a"]: 584.43,
            ["90b"]: 627.92,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 240,
    supportType: "Buffer",
    sequence: {
        ["Dps"]: ["E", "C", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "C", "Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 44.73 / 100;
                case 2:
                    return 48.37 / 100;
                case 3:
                    return 52.01 / 100;
                case 4:
                    return 57.21 / 100;
                case 5:
                    return 60.85 / 100;
                case 6:
                    return 65.01 / 100;
                case 7:
                    return 70.73 / 100;
                case 8:
                    return 76.46 / 100;
                case 9:
                    return 82.18 / 100;
                case 10:
                    return 88.42 / 100;
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
                    return 42.19 / 100;
                case 2:
                    return 45.62 / 100;
                case 3:
                    return 49.05 / 100;
                case 4:
                    return 53.96 / 100;
                case 5:
                    return 57.39 / 100;
                case 6:
                    return 61.32 / 100;
                case 7:
                    return 66.71 / 100;
                case 8:
                    return 72.11 / 100;
                case 9:
                    return 77.51 / 100;
                case 10:
                    return 83.39 / 100;
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
                    return 53.16 / 100;
                case 2:
                    return 57.49 / 100;
                case 3:
                    return 61.82 / 100;
                case 4:
                    return 68 / 100;
                case 5:
                    return 72.33 / 100;
                case 6:
                    return 77.27 / 100;
                case 7:
                    return 84.07 / 100;
                case 8:
                    return 90.87 / 100;
                case 9:
                    return 97.67 / 100;
                case 10:
                    return 105.09 / 100;
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
                    return 70.62 / 100;
                case 2:
                    return 76.37 / 100;
                case 3:
                    return 82.12 / 100;
                case 4:
                    return 90.33 / 100;
                case 5:
                    return 96.08 / 100;
                case 6:
                    return 102.65 / 100;
                case 7:
                    return 111.68 / 100;
                case 8:
                    return 120.71 / 100;
                case 9:
                    return 129.74 / 100;
                case 10:
                    return 139.6 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 141.93 / 100;
                case 2:
                    return 153.49 / 100;
                case 3:
                    return 165.04 / 100;
                case 4:
                    return 181.54 / 100;
                case 5:
                    return 193.1 / 100;
                case 6:
                    return 206.3 / 100;
                case 7:
                    return 224.45 / 100;
                case 8:
                    return 242.61 / 100;
                case 9:
                    return 260.76 / 100;
                case 10:
                    return 280.57 / 100;
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
        Skill: windRealmofNasamjnin,
        Level: 1
    },
    elementalBurst: {
        Skill: theWindsSecretWay,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Lost Wisdom of the Seven Caverns",
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
    src: "Assets/Characters/Fischl/Fischl.webp",
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5", "Q", "E", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
        ["Support"]: ["E", "Q", "E"]
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
const Freminet = {
    name: "Freminet",
    src: "Assets/Characters/Freminet/Freminet.webp",
    card: "Assets/Characters/Freminet/Character_Freminet_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 21.37,
            ["20b"]: 54.90,
            ["20a"]: 70.86,
            ["40b"]: 106.14,
            ["40a"]: 117.49,
            ["50b"]: 135.14,
            ["50a"]: 150.26,
            ["60b"]: 167.91,
            ["60a"]: 179.26,
            ["70b"]: 196.89,
            ["70a"]: 208.23,
            ["80b"]: 225.88,
            ["80a"]: 237.23,
            ["90b"]: 254.88
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1012.09,
            ["20b"]: 2600.05,
            ["20a"]: 3356.14,
            ["40b"]: 5027.09,
            ["40a"]: 5564.31,
            ["50b"]: 6400.29,
            ["50a"]: 7116.58,
            ["60b"]: 7952.57,
            ["60a"]: 8489.78,
            ["70b"]: 9324.75,
            ["70a"]: 9861.97,
            ["80b"]: 10697.95,
            ["80a"]: 11235.17,
            ["90b"]: 12071.16,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 59.40,
            ["20b"]: 152.60,
            ["20a"]: 196.97,
            ["40b"]: 295.04,
            ["40a"]: 326.57,
            ["50b"]: 375.63,
            ["50a"]: 417.67,
            ["60b"]: 466.74,
            ["60a"]: 498.27,
            ["70b"]: 547.27,
            ["70a"]: 578.80,
            ["80b"]: 627.86,
            ["80a"]: 659.39,
            ["90b"]: 708.46,
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 155,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "E", "N1", "E", "N1", "N2", "E", "N1", "E", "N1", "N2", "E"],
        ["Support"]: [],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 84.24 / 100;
                case 2:
                    return 91.09 / 100;
                case 3:
                    return 97.95 / 100;
                case 4:
                    return 107.75 / 100;
                case 5:
                    return 114.6 / 100;
                case 6:
                    return 122.44 / 100;
                case 7:
                    return 133.21 / 100;
                case 8:
                    return 143.99 / 100;
                case 9:
                    return 154.76 / 100;
                case 10:
                    return 166.52 / 100;
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
                    return 80.68 / 100;
                case 2:
                    return 87.24 / 100;
                case 3:
                    return 93.81 / 100;
                case 4:
                    return 103.19 / 100;
                case 5:
                    return 109.76 / 100;
                case 6:
                    return 117.26 / 100;
                case 7:
                    return 127.58 / 100;
                case 8:
                    return 137.9 / 100;
                case 9:
                    return 148.22 / 100;
                case 10:
                    return 159.48 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: pressurizedFloe,
        Level: 1
    },
    elementalBurst: {
        Skill: shadowhuntersAmbush,
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
const Furina = {
    name: "Furina",
    src: "Assets/Characters/Furina/Furina.webp",
    card: "Assets/Characters/Furina/Character_Furina_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.99,
            ["20b"]: 49.27,
            ["20a"]: 65.55,
            ["40b"]: 98.08,
            ["40a"]: 109.65,
            ["50b"]: 126.16,
            ["50a"]: 141.58,
            ["60b"]: 158.26,
            ["60a"]: 169.83,
            ["70b"]: 186.66,
            ["70a"]: 198.23,
            ["80b"]: 215.24,
            ["80a"]: 226.81,
            ["90b"]: 243.96
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1191.65,
            ["20b"]: 3091.14,
            ["20a"]: 4112.87,
            ["40b"]: 6154.17,
            ["40a"]: 6880.14,
            ["50b"]: 7915.68,
            ["50a"]: 8883.64,
            ["60b"]: 9929.91,
            ["60a"]: 10655.87,
            ["70b"]: 11711.67,
            ["70a"]: 12437.64,
            ["80b"]: 13505.36,
            ["80a"]: 14231.33,
            ["90b"]: 15307.39,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 54.15,
            ["20b"]: 140.46,
            ["20a"]: 186.88,
            ["40b"]: 279.63,
            ["40a"]: 312.62,
            ["50b"]: 359.67,
            ["50a"]: 403.66,
            ["60b"]: 451.20,
            ["60a"]: 484.18,
            ["70b"]: 532.16,
            ["70a"]: 565.15,
            ["80b"]: 613.66,
            ["80a"]: 646.65,
            ["90b"]: 695.54,
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
    subDpsType: "Off-field",
    scalingType: "HP",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 180,
    supportType: "Buffer",
    supportType2: "Sub-dps",
    supportType3: "Healer",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N1", "N2", "N3"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 48.39 / 100;
                case 2:
                    return 52.32 / 100;
                case 3:
                    return 56.26 / 100;
                case 4:
                    return 61.89 / 100;
                case 5:
                    return 65.83 / 100;
                case 6:
                    return 70.33 / 100;
                case 7:
                    return 76.52 / 100;
                case 8:
                    return 82.71 / 100;
                case 9:
                    return 88.9 / 100;
                case 10:
                    return 95.65 / 100;
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
                    return 43.73 / 100;
                case 2:
                    return 47.29 / 100;
                case 3:
                    return 50.85 / 100;
                case 4:
                    return 55.93 / 100;
                case 5:
                    return 59.49 / 100;
                case 6:
                    return 63.56 / 100;
                case 7:
                    return 69.15 / 100;
                case 8:
                    return 74.75 / 100;
                case 9:
                    return 80.34 / 100;
                case 10:
                    return 86.44 / 100;
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
                    return 55.12 / 100;
                case 2:
                    return 59.61 / 100;
                case 3:
                    return 64.09 / 100;
                case 4:
                    return 70.5 / 100;
                case 5:
                    return 74.99 / 100;
                case 6:
                    return 80.12 / 100;
                case 7:
                    return 87.17 / 100;
                case 8:
                    return 94.22 / 100;
                case 9:
                    return 101.27 / 100;
                case 10:
                    return 108.96 / 100;
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
                    return 73.3 / 100;
                case 2:
                    return 79.26 / 100;
                case 3:
                    return 85.23 / 100;
                case 4:
                    return 93.75 / 100;
                case 5:
                    return 99.72 / 100;
                case 6:
                    return 106.54 / 100;
                case 7:
                    return 115.91 / 100;
                case 8:
                    return 125.29 / 100;
                case 9:
                    return 134.66 / 100;
                case 10:
                    return 144.89 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 74.22 / 100;
                case 2:
                    return 80.26 / 100;
                case 3:
                    return 86.3 / 100;
                case 4:
                    return 94.93 / 100;
                case 5:
                    return 100.97 / 100;
                case 6:
                    return 107.88 / 100;
                case 7:
                    return 117.37 / 100;
                case 8:
                    return 126.86 / 100;
                case 9:
                    return 136.35 / 100;
                case 10:
                    return 146.71 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 159.68 / 100;
                case 2:
                    return 172.67 / 100;
                case 3:
                    return 185.67 / 100;
                case 4:
                    return 204.24 / 100;
                case 5:
                    return 217.23 / 100;
                case 6:
                    return 232.09 / 100;
                case 7:
                    return 252.51 / 100;
                case 8:
                    return 272.93 / 100;
                case 9:
                    return 293.36 / 100;
                case 10:
                    return 315.64 / 100;
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
        Skill: salonSolitaire,
        Level: 1
    },
    elementalBurst: {
        Skill: letThePeopleRejoice,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Unheard Confession",
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
const Gaming = {
    name: "Gaming",
    src: "Assets/Characters/Gaming/Gaming.webp",
    card: "Assets/Characters/Gaming/Character_Gaming_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 25.29,
            ["20b"]: 64.96,
            ["20a"]: 83.85,
            ["40b"]: 125.60,
            ["40a"]: 139.03,
            ["50b"]: 159.91,
            ["50a"]: 177.81,
            ["60b"]: 198.70,
            ["60a"]: 212.12,
            ["70b"]: 232.98,
            ["70a"]: 246.41,
            ["80b"]: 267.29,
            ["80a"]: 280.72,
            ["90b"]: 301.60
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 957.38,
            ["20b"]: 2459.51,
            ["20a"]: 3174.72,
            ["40b"]: 4755.36,
            ["40a"]: 5263.54,
            ["50b"]: 6054.33,
            ["50a"]: 6731.90,
            ["60b"]: 7522.70,
            ["60a"]: 8030.87,
            ["70b"]: 8820.71,
            ["70a"]: 9328.89,
            ["80b"]: 10119.69,
            ["80a"]: 10627.86,
            ["90b"]: 11418.66,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 58.94,
            ["20b"]: 151.42,
            ["20a"]: 195.45,
            ["40b"]: 292.77,
            ["40a"]: 324.05,
            ["50b"]: 372.74,
            ["50a"]: 414.45,
            ["60b"]: 463.14,
            ["60a"]: 494.43,
            ["70b"]: 543.05,
            ["70a"]: 574.34,
            ["80b"]: 623.03,
            ["80a"]: 654.31,
            ["90b"]: 703.00,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 170,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "P", "Q", "N1", "N2", "E", "P", "N1", "N2", "E", "P", "N1", "N2", "E", "P", "N1", "N2", "E", "P", "N1", "N2", "E", "P"],
        ["Support"]: ["E", "P", "Q", "N1", "N2", "E", "P", "N1", "N2", "E", "P", "N1", "N2", "E", "P", "N1", "N2", "E", "P", "N1", "N2", "E", "P"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 83.86 / 100;
                case 2:
                    return 90.68 / 100;
                case 3:
                    return 97.51 / 100;
                case 4:
                    return 107.26 / 100;
                case 5:
                    return 114.08 / 100;
                case 6:
                    return 121.88 / 100;
                case 7:
                    return 132.61 / 100;
                case 8:
                    return 143.34 / 100;
                case 9:
                    return 154.06 / 100;
                case 10:
                    return 165.76 / 100;
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
                    return 79.04 / 100;
                case 2:
                    return 85.48 / 100;
                case 3:
                    return 91.91 / 100;
                case 4:
                    return 101.1 / 100;
                case 5:
                    return 107.54 / 100;
                case 6:
                    return 114.89 / 100;
                case 7:
                    return 125 / 100;
                case 8:
                    return 135.11 / 100;
                case 9:
                    return 145.22 / 100;
                case 10:
                    return 156.25 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {//from elemental Skill
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 230.4 / 100;
                case 2:
                    return 247.68 / 100;
                case 3:
                    return 264.96 / 100;
                case 4:
                    return 288 / 100;
                case 5:
                    return 305.28 / 100;
                case 6:
                    return 322.56 / 100;
                case 7:
                    return 345.6 / 100;
                case 8:
                    return 368.64 / 100;
                case 9:
                    return 391.68 / 100;
                case 10:
                    return 414.72 / 100;
            }
        },
        Element: "PyroDMGBonus",
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

        return { Type: "ATK%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: bestialAscent,
        Level: 1
    },
    elementalBurst: {
        Skill: suannisGildedDance,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "PlungeAttack",
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
const Ganyu = {
    name: "Ganyu",
    src: "Assets/Characters/Ganyu/Ganyu.webp",
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "C", "C", "C", "E", "C", "C", "C"],
        ["Support"]: ["E","Q"]
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
    src: "Assets/Characters/Gorou/Gorou.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Buffer",
    supportType2: "Sub-dps",
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
const Heizou = {
    name: "Heizou",
    src: "Assets/Characters/Heizou/Heizou.webp",
    card: "Assets/Characters/Heizou/Character_Heizou_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.88,
            ["20b"]: 48.49,
            ["20a"]: 62.60,
            ["40b"]: 93.76,
            ["40a"]: 103.78,
            ["50b"]: 119.37,
            ["50a"]: 132.73,
            ["60b"]: 148.32,
            ["60a"]: 158.34,
            ["70b"]: 173.92,
            ["70a"]: 183.94,
            ["80b"]: 199.53,
            ["80a"]: 209.55,
            ["90b"]: 225.14
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 893.56,
            ["20b"]: 2295.54,
            ["20a"]: 2963.07,
            ["40b"]: 4438.33,
            ["40a"]: 4912.63,
            ["50b"]: 5650.71,
            ["50a"]: 6283.11,
            ["60b"]: 7021.18,
            ["60a"]: 7495.48,
            ["70b"]: 8232.67,
            ["70a"]: 8706.96,
            ["80b"]: 9445.04,
            ["80a"]: 9919.34,
            ["90b"]: 10657.42,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 57.34,
            ["20b"]: 147.31,
            ["20a"]: 190.14,
            ["40b"]: 284.81,
            ["40a"]: 315.24,
            ["50b"]: 362.61,
            ["50a"]: 403.19,
            ["60b"]: 450.55,
            ["60a"]: 480.99,
            ["70b"]: 528.29,
            ["70a"]: 558.73,
            ["80b"]: 606.09,
            ["80a"]: 636.52,
            ["90b"]: 683.89,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 125,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["N1", "C", "Q", "N1", "E", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "E"],
        ["Support"]: ["N1", "C", "Q", "N1", "E"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 37.47 / 100;
                case 2:
                    return 40.28 / 100;
                case 3:
                    return 43.09 / 100;
                case 4:
                    return 46.84 / 100;
                case 5:
                    return 49.65 / 100;
                case 6:
                    return 52.46 / 100;
                case 7:
                    return 56.21 / 100;
                case 8:
                    return 59.96 / 100;
                case 9:
                    return 63.71 / 100;
                case 10:
                    return 67.45 / 100;
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
                    return 36.85 / 100;
                case 2:
                    return 39.62 / 100;
                case 3:
                    return 42.38 / 100;
                case 4:
                    return 46.06 / 100;
                case 5:
                    return 48.83 / 100;
                case 6:
                    return 51.59 / 100;
                case 7:
                    return 55.28 / 100;
                case 8:
                    return 58.96 / 100;
                case 9:
                    return 62.65 / 100;
                case 10:
                    return 66.33 / 100;
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
                    return 51.06 / 100;
                case 2:
                    return 54.89 / 100;
                case 3:
                    return 58.72 / 100;
                case 4:
                    return 63.82 / 100;
                case 5:
                    return 67.65 / 100;
                case 6:
                    return 71.48 / 100;
                case 7:
                    return 76.59 / 100;
                case 8:
                    return 81.7 / 100;
                case 9:
                    return 86.8 / 100;
                case 10:
                    return 91.91 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }

        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "AnemoDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 73 / 100;
                case 2:
                    return 78.47 / 100;
                case 3:
                    return 83.95 / 100;
                case 4:
                    return 91.25 / 100;
                case 5:
                    return 96.73 / 100;
                case 6:
                    return 102.2 / 100;
                case 7:
                    return 109.5 / 100;
                case 8:
                    return 116.8 / 100;
                case 9:
                    return 124.1 / 100;
                case 10:
                    return 131.4 / 100;
            }
        },
        Element: "AnemoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
            ["40a"]: 6,
            ["50b"]: 6,
            ["50a"]: 12,
            ["60b"]: 12,
            ["60a"]: 18,
            ["70b"]: 18,
            ["70a"]: 18,
            ["80b"]: 18,
            ["80a"]: 24,
            ["90b"]: 24
        }

        return { Type: "AnemoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: heartstopperStrike,
        Level: 1
    },
    elementalBurst: {
        Skill: windmusterKick,
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
const Hu_Tao = {
    name: "Hu Tao",
    src: "Assets/Characters/Hu_Tao/Hu_Tao.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C", "N1", "C","N1", "C","N1", "C", "Q"],
        ["Support"]: ["E", "Q"],
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
    src: "Assets/Characters/Itto/Itto.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Sub-dps",
    sequence: {
        //"P" used for superlative final slash
        ["Dps"]: ["Q", "N1", "E", "N1", "N2", "C", "C", "C", "C", "P", "N1", "N2", "N3", "N4", "C", "C", "C", "C", "P", "E", "P"],
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
    src: "Assets/Characters/Jean/Jean.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Healer",
    supportType2: "Sub-dps",
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
const Kachina = {
    name: "Kachina",
    src: "Assets/Characters/Kachina/Kachina.webp",
    card: "Assets/Characters/Kachina/Character_Kachina_Portrait.webp",
    element: "GeoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.16,
            ["20b"]: 46.66,
            ["20a"]: 60.23,
            ["40b"]: 90.22,
            ["40a"]: 99.86,
            ["50b"]: 114.87,
            ["50a"]: 127.72,
            ["60b"]: 142.73,
            ["60a"]: 152.37,
            ["70b"]: 167.35,
            ["70a"]: 177.00,
            ["80b"]: 192.00,
            ["80a"]: 201.64,
            ["90b"]: 216.65
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 989.29,
            ["20b"]: 2541.49,
            ["20a"]: 3280.55,
            ["40b"]: 4913.87,
            ["40a"]: 5438.99,
            ["50b"]: 6256.14,
            ["50a"]: 6956.30,
            ["60b"]: 7773.45,
            ["60a"]: 8298.57,
            ["70b"]: 9114.74,
            ["70a"]: 9639.85,
            ["80b"]: 10457.01,
            ["80a"]: 10982.13,
            ["90b"]: 11799.28,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 66.44,
            ["20b"]: 170.68,
            ["20a"]: 220.31,
            ["40b"]: 330.00,
            ["40a"]: 365.27,
            ["50b"]: 420.15,
            ["50a"]: 467.17,
            ["60b"]: 522.04,
            ["60a"]: 557.31,
            ["70b"]: 612.12,
            ["70a"]: 647.39,
            ["80b"]: 702.26,
            ["80a"]: 737.53,
            ["90b"]: 792.41,
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
    subDpsType: "Off-field",
    scalingType: "DEF",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N1", "N1", "N1", "N1", "N1"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "GeoDMGBonus",
        isReaction: true,
        scaling: "DEF"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
            ["40a"]: 6.0,
            ["50b"]: 6.0,
            ["50a"]: 12.0,
            ["60b"]: 12.0,
            ["60a"]: 12.0,
            ["70b"]: 12.0,
            ["70a"]: 18.0,
            ["80b"]: 18.0,
            ["80a"]: 24.0,
            ["90b"]: 24.0
        }

        return { Type: "GeoDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: goGoTurboTwirly,
        Level: 1
    },
    elementalBurst: {
        Skill: timetoGetSerious,
        Level: 1
    },
    passive1: {
        Type: "GeoDMGBonus",
        Value: 20
    },
    passive2: {
        Type: "A4",
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
    src: "Assets/Characters/Kaeya/Kaeya.webp",
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
    havePhysicalChargedAttack: true,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 170,
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
const Kaveh = {
    name: "Kaveh",
    src: "Assets/Characters/Kaveh/Kaveh.webp",
    card: "Assets/Characters/Kaveh/Character_Kaveh_Portrait.webp",
    element: "DendroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19.59,
            ["20b"]: 50.32,
            ["20a"]: 64.96,
            ["40b"]: 97.30,
            ["40a"]: 107.70,
            ["50b"]: 123.88,
            ["50a"]: 137.74,
            ["60b"]: 153.92,
            ["60a"]: 164.32,
            ["70b"]: 180.48,
            ["70a"]: 190.88,
            ["80b"]: 207.06,
            ["80a"]: 217.46,
            ["90b"]: 233.64
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1002.97,
            ["20b"]: 2576.63,
            ["20a"]: 3325.90,
            ["40b"]: 4981.80,
            ["40a"]: 5514.18,
            ["50b"]: 6342.63,
            ["50a"]: 7052.47,
            ["60b"]: 7880.92,
            ["60a"]: 8413.30,
            ["70b"]: 9240.75,
            ["70a"]: 9773.12,
            ["80b"]: 10601.58,
            ["80a"]: 11133.95,
            ["90b"]: 11962.41,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 62.95,
            ["20b"]: 161.71,
            ["20a"]: 208.74,
            ["40b"]: 312.66,
            ["40a"]: 346.08,
            ["50b"]: 398.07,
            ["50a"]: 442.62,
            ["60b"]: 494.62,
            ["60a"]: 528.03,
            ["70b"]: 579.96,
            ["70a"]: 613.37,
            ["80b"]: 665.37,
            ["80a"]: 698.78,
            ["90b"]: 750.77,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N1", "N2", "N3", "E", "N1", "N2", "N3", "N1", "N2", "N3", "E"],
        ["Support"]: ["E", "Q", "N1", "N2", "N3", "N1", "N2", "N3", "E"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 76.19 / 100;
                case 2:
                    return 82.39 / 100;
                case 3:
                    return 88.59 / 100;
                case 4:
                    return 97.45 / 100;
                case 5:
                    return 103.65 / 100;
                case 6:
                    return 110.73 / 100;
                case 7:
                    return 120.48 / 100;
                case 8:
                    return 130.22 / 100;
                case 9:
                    return 139.97 / 100;
                case 10:
                    return 150.6 / 100;
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
                    return 69.64 / 100;
                case 2:
                    return 75.31 / 100;
                case 3:
                    return 80.97 / 100;
                case 4:
                    return 89.07 / 100;
                case 5:
                    return 94.74 / 100;
                case 6:
                    return 101.22 / 100;
                case 7:
                    return 110.13 / 100;
                case 8:
                    return 119.03 / 100;
                case 9:
                    return 127.94 / 100;
                case 10:
                    return 137.66 / 100;
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
                    return 84.26 / 100;
                case 2:
                    return 91.12 / 100;
                case 3:
                    return 97.98 / 100;
                case 4:
                    return 107.78 / 100;
                case 5:
                    return 114.63 / 100;
                case 6:
                    return 122.47 / 100;
                case 7:
                    return 133.25 / 100;
                case 8:
                    return 144.03 / 100;
                case 9:
                    return 154.81 / 100;
                case 10:
                    return 166.56 / 100;
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
                    return 102.69 / 100;
                case 2:
                    return 111.05 / 100;
                case 3:
                    return 119.41 / 100;
                case 4:
                    return 131.35 / 100;
                case 5:
                    return 139.7 / 100;
                case 6:
                    return 149.26 / 100;
                case 7:
                    return 162.39 / 100;
                case 8:
                    return 175.53 / 100;
                case 9:
                    return 188.66 / 100;
                case 10:
                    return 202.99 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: artisticIngenuity,
        Level: 1
    },
    elementalBurst: {
        Skill: paintedDome,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "A Craftsman's Curious Conceptions",
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
const Kazuha = {
    name: "Kazuha",
    src: "Assets/Characters/Kazuha/Kazuha.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 185,
    supportType: "Buffer",
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
    src: "Assets/Characters/Keqing/Keqing.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 110,
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
const Kirara = {
    name: "Kirara",
    src: "Assets/Characters/Kirara/Kirara.webp",
    card: "Assets/Characters/Kirara/Character_Kirara_Portrait.webp",
    element: "DendroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.70,
            ["20b"]: 48.04,
            ["20a"]: 62.01,
            ["40b"]: 92.88,
            ["40a"]: 102.80,
            ["50b"]: 118.25,
            ["50a"]: 131.48,
            ["60b"]: 146.93,
            ["60a"]: 156.85,
            ["70b"]: 172.28,
            ["70a"]: 182.20,
            ["80b"]: 197.65,
            ["80a"]: 207.57,
            ["90b"]: 223.02
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1021.21,
            ["20b"]: 2623.48,
            ["20a"]: 3386.37,
            ["40b"]: 5072.38,
            ["40a"]: 5614.44,
            ["50b"]: 6457.95,
            ["50a"]: 7180.69,
            ["60b"]: 8024.21,
            ["60a"]: 8566.27,
            ["70b"]: 9408.76,
            ["70a"]: 9950.82,
            ["80b"]: 10794.33,
            ["80a"]: 11336.39,
            ["90b"]: 12179.90,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 45.78,
            ["20b"]: 117.61,
            ["20a"]: 151.81,
            ["40b"]: 227.39,
            ["40a"]: 251.69,
            ["50b"]: 289.51,
            ["50a"]: 321.91,
            ["60b"]: 359.72,
            ["60a"]: 384.02,
            ["70b"]: 421.79,
            ["70a"]: 446.09,
            ["80b"]: 483.90,
            ["80a"]: 508.20,
            ["90b"]: 546.02,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Shield",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N1", "N2"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.9 / 100;
                case 2:
                    return 51.8 / 100;
                case 3:
                    return 55.7 / 100;
                case 4:
                    return 61.27 / 100;
                case 5:
                    return 65.17 / 100;
                case 6:
                    return 69.63 / 100;
                case 7:
                    return 75.75 / 100;
                case 8:
                    return 81.88 / 100;
                case 9:
                    return 88.01 / 100;
                case 10:
                    return 94.69 / 100;
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
                    return 46.35 / 100;
                case 2:
                    return 50.13 / 100;
                case 3:
                    return 53.9 / 100;
                case 4:
                    return 59.29 / 100;
                case 5:
                    return 63.06 / 100;
                case 6:
                    return 67.38 / 100;
                case 7:
                    return 73.3 / 100;
                case 8:
                    return 79.23 / 100;
                case 9:
                    return 85.16 / 100;
                case 10:
                    return 91.63 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: meowteorKick,
        Level: 1
    },
    elementalBurst: {
        Skill: secretArtSurpriseDispatch,
        Level: 1
    },
    passive1: {
        Type: "Bewitching, Betwitching Tails",
        Value: null
    },
    passive2: {
        Type: "Pupillary Variance",
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
    src: "Assets/Characters/Klee/Klee.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 115,
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
    src: "Assets/Characters/Kokomi/Kokomi.webp",
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
    subDpsType: "Off-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
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
const Kuki = {
    name: "Kuki",
    src: "Assets/Characters/Kuki/Kuki.webp",
    card: "Assets/Characters/Kuki/Character_Kuki_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 17.81,
            ["20b"]: 45.75,
            ["20a"]: 59.05,
            ["40b"]: 88.45,
            ["40a"]: 97.91,
            ["50b"]: 112.62,
            ["50a"]: 125.22,
            ["60b"]: 139.93,
            ["60a"]: 149.38,
            ["70b"]: 164.07,
            ["70a"]: 173.53,
            ["80b"]: 188.24,
            ["80a"]: 197.69,
            ["90b"]: 212.40
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1030.32,
            ["20b"]: 2646.90,
            ["20a"]: 3416.61,
            ["40b"]: 5117.67,
            ["40a"]: 5664.57,
            ["50b"]: 6515.61,
            ["50a"]: 7244.81,
            ["60b"]: 8095.86,
            ["60a"]: 8642.75,
            ["70b"]: 9492.77,
            ["70a"]: 10039.66,
            ["80b"]: 10890.71,
            ["80a"]: 11437.61,
            ["90b"]: 12288.65,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 62.95,
            ["20b"]: 161.71,
            ["20a"]: 208.74,
            ["40b"]: 312.66,
            ["40a"]: 346.08,
            ["50b"]: 398.07,
            ["50a"]: 442.62,
            ["60b"]: 494.62,
            ["60a"]: 528.03,
            ["70b"]: 579.96,
            ["70a"]: 613.37,
            ["80b"]: 665.37,
            ["80a"]: 698.78,
            ["90b"]: 750.77,
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
    havePhysicalChargedAttack: true,
    subDpsType: "Off-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 165,
    supportType: "Healer",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 48.76 / 100;
                case 2:
                    return 52.73 / 100;
                case 3:
                    return 56.7 / 100;
                case 4:
                    return 62.37 / 100;
                case 5:
                    return 66.34 / 100;
                case 6:
                    return 70.88 / 100;
                case 7:
                    return 77.11 / 100;
                case 8:
                    return 83.35 / 100;
                case 9:
                    return 89.59 / 100;
                case 10:
                    return 96.39 / 100;
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
                    return 44.55 / 100;
                case 2:
                    return 48.17 / 100;
                case 3:
                    return 51.8 / 100;
                case 4:
                    return 56.98 / 100;
                case 5:
                    return 60.61 / 100;
                case 6:
                    return 64.75 / 100;
                case 7:
                    return 70.45 / 100;
                case 8:
                    return 76.15 / 100;
                case 9:
                    return 81.84 / 100;
                case 10:
                    return 88.06 / 100;
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
                    return 59.34 / 100;
                case 2:
                    return 64.17 / 100;
                case 3:
                    return 69 / 100;
                case 4:
                    return 75.9 / 100;
                case 5:
                    return 80.73 / 100;
                case 6:
                    return 86.25 / 100;
                case 7:
                    return 93.84 / 100;
                case 8:
                    return 101.43 / 100;
                case 9:
                    return 109.02 / 100;
                case 10:
                    return 117.3 / 100;
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
                    return 76.11 / 100;
                case 2:
                    return 82.3 / 100;
                case 3:
                    return 88.5 / 100;
                case 4:
                    return 97.35 / 100;
                case 5:
                    return 103.55 / 100;
                case 6:
                    return 110.63 / 100;
                case 7:
                    return 120.36 / 100;
                case 8:
                    return 130.09 / 100;
                case 9:
                    return 139.83 / 100;
                case 10:
                    return 150.45 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: sanctifyingRing,
        Level: 1
    },
    elementalBurst: {
        Skill: gyoeiNarukamiKariyamaRite,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Heart's Repose",
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
const Layla = {
    name: "Layla",
    src: "Assets/Characters/Layla/Layla.webp",
    card: "Assets/Characters/Layla/Character_Layla_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.16,
            ["20b"]: 46.66,
            ["20a"]: 60.23,
            ["40b"]: 90.22,
            ["40a"]: 99.86,
            ["50b"]: 114.87,
            ["50a"]: 127.72,
            ["60b"]: 142.73,
            ["60a"]: 152.37,
            ["70b"]: 167.35,
            ["70a"]: 177.00,
            ["80b"]: 192.00,
            ["80a"]: 201.64,
            ["90b"]: 216.65
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 930.03,
            ["20b"]: 2389.24,
            ["20a"]: 3084.02,
            ["40b"]: 4619.49,
            ["40a"]: 5113.15,
            ["50b"]: 5881.35,
            ["50a"]: 6539.56,
            ["60b"]: 7307.76,
            ["60a"]: 7801.42,
            ["70b"]: 8568.69,
            ["70a"]: 9062.35,
            ["80b"]: 9830.55,
            ["80a"]: 10324.21,
            ["90b"]: 11092.41,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 54.94,
            ["20b"]: 141.13,
            ["20a"]: 182.17,
            ["40b"]: 272.87,
            ["40a"]: 302.03,
            ["50b"]: 347.41,
            ["50a"]: 386.29,
            ["60b"]: 431.66,
            ["60a"]: 460.82,
            ["70b"]: 506.15,
            ["70a"]: 535.31,
            ["80b"]: 580.68,
            ["80a"]: 609.84,
            ["90b"]: 655.22,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 180,
    supportType: "Shield",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "N1", "E", "N1", "N2", "N3", "E", "N1", "N2", "N3"],
        ["Support"]: ["N1", "Q", "E", "N1", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 51.22 / 100;
                case 2:
                    return 55.39 / 100;
                case 3:
                    return 59.55 / 100;
                case 4:
                    return 65.51 / 100;
                case 5:
                    return 69.68 / 100;
                case 6:
                    return 74.44 / 100;
                case 7:
                    return 80.99 / 100;
                case 8:
                    return 87.55 / 100;
                case 9:
                    return 94.1 / 100;
                case 10:
                    return 101.24 / 100;
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
                    return 48.48 / 100;
                case 2:
                    return 52.43 / 100;
                case 3:
                    return 56.38 / 100;
                case 4:
                    return 62.01 / 100;
                case 5:
                    return 65.96 / 100;
                case 6:
                    return 70.47 / 100;
                case 7:
                    return 76.67 / 100;
                case 8:
                    return 82.87 / 100;
                case 9:
                    return 89.07 / 100;
                case 10:
                    return 95.84 / 100;
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
                    return 72.97 / 100;
                case 2:
                    return 78.91 / 100;
                case 3:
                    return 84.85 / 100;
                case 4:
                    return 93.34 / 100;
                case 5:
                    return 99.28 / 100;
                case 6:
                    return 106.07 / 100;
                case 7:
                    return 115.4 / 100;
                case 8:
                    return 124.73 / 100;
                case 9:
                    return 134.07 / 100;
                case 10:
                    return 144.25 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: nightsofFormalFocus,
        Level: 1
    },
    elementalBurst: {
        Skill: dreamoftheStarStreamShaker,
        Level: 1
    },
    passive1: {
        Type: "ShieldStrength",
        Value: 6 * 4
    },
    passive2: {
        Type: "Sweet Slumber Undisturbed",
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
    src: "Assets/Characters/Lisa/Lisa.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 110,
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
const Lynette = {
    name: "Lynette",
    src: "Assets/Characters/Lynette/Lynette.webp",
    card: "Assets/Characters/Lynette/Character_Lynette_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19.41,
            ["20b"]: 49.87,
            ["20a"]: 64.37,
            ["40b"]: 96.41,
            ["40a"]: 106.72,
            ["50b"]: 122.75,
            ["50a"]: 136.49,
            ["60b"]: 152.52,
            ["60a"]: 162.83,
            ["70b"]: 178.84,
            ["70a"]: 189.14,
            ["80b"]: 205.18,
            ["80a"]: 215.48,
            ["90b"]: 231.51
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1039.44,
            ["20b"]: 2670.33,
            ["20a"]: 3446.84,
            ["40b"]: 5162.96,
            ["40a"]: 5714.70,
            ["50b"]: 6573.27,
            ["50a"]: 7308.92,
            ["60b"]: 8167.50,
            ["60a"]: 8719.24,
            ["70b"]: 9576.78,
            ["70a"]: 10128.51,
            ["80b"]: 10987.09,
            ["80a"]: 11538.82,
            ["90b"]: 12397.40,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 59.69,
            ["20b"]: 153.33,
            ["20a"]: 197.92,
            ["40b"]: 296.46,
            ["40a"]: 328.14,
            ["50b"]: 377.44,
            ["50a"]: 419.68,
            ["60b"]: 468.99,
            ["60a"]: 500.67,
            ["70b"]: 549.91,
            ["70a"]: 581.59,
            ["80b"]: 630.89,
            ["80a"]: 662.57,
            ["90b"]: 662.57,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["N1", "Q", "N1", "E", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C"],
        ["Support"]: ["N1", "Q", "N1", "E"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 43.08 / 100;
                case 2:
                    return 46.59 / 100;
                case 3:
                    return 50.09 / 100;
                case 4:
                    return 55.1 / 100;
                case 5:
                    return 58.61 / 100;
                case 6:
                    return 62.62 / 100;
                case 7:
                    return 68.13 / 100;
                case 8:
                    return 73.64 / 100;
                case 9:
                    return 79.15 / 100;
                case 10:
                    return 85.16 / 100;
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
                    return 37.61 / 100;
                case 2:
                    return 40.67 / 100;
                case 3:
                    return 43.74 / 100;
                case 4:
                    return 48.11 / 100;
                case 5:
                    return 51.17 / 100;
                case 6:
                    return 54.67 / 100;
                case 7:
                    return 59.48 / 100;
                case 8:
                    return 64.29 / 100;
                case 9:
                    return 69.1 / 100;
                case 10:
                    return 74.35 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return ((44.2 + 61.4) / 2) / 100;
                case 2:
                    return ((47.8 + 66.4) / 2) / 100;
                case 3:
                    return ((51.4 + 71.4) / 2) / 100;
                case 4:
                    return ((56.54 + 78.54) / 2) / 100;
                case 5:
                    return ((60.14 + 83.54) / 2) / 100;
                case 6:
                    return ((64.25 + 89.25) / 2) / 100;
                case 7:
                    return ((69.9 + 97.1) / 2) / 100;
                case 8:
                    return ((75.56 + 104.96) / 2) / 100;
                case 9:
                    return ((81.21 + 112.81) / 2) / 100;
                case 10:
                    return ((87.38 + 121.38) / 2) / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: enigmaticFeint,
        Level: 1
    },
    elementalBurst: {
        Skill: magicTrickAstonishingShift,
        Level: 1
    },
    passive1: {
        Type: "ATK%",
        Value: 14
    },
    passive2: {
        Type: "Props Positively Prepped",
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
const Lyney = {
    name: "Lyney",
    src: "Assets/Characters/Lyney/Lyney.webp",
    card: "Assets/Characters/Lyney/Character_Lyney_Portrait.webp",
    element: "PyroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 24.76,
            ["20b"]: 64.24,
            ["20a"]: 85.47,
            ["40b"]: 127.89,
            ["40a"]: 142.98,
            ["50b"]: 164.50,
            ["50a"]: 184.61,
            ["60b"]: 206.36,
            ["60a"]: 221.44,
            ["70b"]: 243.38,
            ["70a"]: 258.47,
            ["80b"]: 280.66,
            ["80a"]: 295.74,
            ["90b"]: 318.11
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 857.99,
            ["20b"]: 2225.62,
            ["20a"]: 2961.27,
            ["40b"]: 4431.00,
            ["40a"]: 4953.70,
            ["50b"]: 5699.29,
            ["50a"]: 6396.22,
            ["60b"]: 7149.53,
            ["60a"]: 7672.23,
            ["70b"]: 8432.41,
            ["70a"]: 8955.10,
            ["80b"]: 9723.86,
            ["80a"]: 10246.56,
            ["90b"]: 11021.32,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 41.88,
            ["20b"]: 108.64,
            ["20a"]: 144.55,
            ["40b"]: 216.29,
            ["40a"]: 241.81,
            ["50b"]: 278.20,
            ["50a"]: 312.22,
            ["60b"]: 348.99,
            ["60a"]: 374.51,
            ["70b"]: 411.61,
            ["70a"]: 437.13,
            ["80b"]: 474.65,
            ["80a"]: 500.17,
            ["90b"]: 537.99,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["C", "C", "C", "C", "Q", "E"],
        ["Support"]: ["C", "C", "C", "C", "Q", "E"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 172.8 / 100;
                case 2:
                    return 185.76 / 100;
                case 3:
                    return 198.72 / 100;
                case 4:
                    return 216 / 100;
                case 5:
                    return 228.96 / 100;
                case 6:
                    return 241.92 / 100;
                case 7:
                    return 259.2 / 100;
                case 8:
                    return 276.48 / 100;
                case 9:
                    return 293.76 / 100;
                case 10:
                    return 311.04 / 100;
            }
        },
        Element: "PyroDMGBonus",
        isReaction: false,
        scaling: "ATK",
        extraMultiplier: function (level) {
            switch (level) {
                case 1:
                    return 212 / 100;
                case 2:
                    return 227.9 / 100;
                case 3:
                    return 243.8 / 100;
                case 4:
                    return 265 / 100;
                case 5:
                    return 280.9 / 100;
                case 6:
                    return 296.8 / 100;
                case 7:
                    return 318 / 100;
                case 8:
                    return 339.2 / 100;
                case 9:
                    return 360.4 / 100;
                case 10:
                    return 381.6 / 100;
            }
        }
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: bewilderingLights,
        Level: 1
    },
    elementalBurst: {
        Skill: woundrousTrickMiracleParade,
        Level: 1
    },
    passive1: {
        Type: "A1",
        Value: null
    },
    passive2: {
        Type: "PyroDMGBonus",
        Value: 60
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
const Mika = {
    name: "Mika",
    src: "Assets/Characters/Mika/Mika.webp",
    card: "Assets/Characters/Mika/Character_Mika_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.70,
            ["20b"]: 48.04,
            ["20a"]: 62.01,
            ["40b"]: 92.88,
            ["40a"]: 102.80,
            ["50b"]: 118.25,
            ["50a"]: 131.48,
            ["60b"]: 146.93,
            ["60a"]: 156.85,
            ["70b"]: 172.28,
            ["70a"]: 182.20,
            ["80b"]: 197.65,
            ["80a"]: 207.57,
            ["90b"]: 223.02
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1048.56,
            ["20b"]: 2693.75,
            ["20a"]: 3477.08,
            ["40b"]: 5208.25,
            ["40a"]: 5764.82,
            ["50b"]: 6630.93,
            ["50a"]: 7373.03,
            ["60b"]: 8239.15,
            ["60a"]: 8795.72,
            ["70b"]: 9660.78,
            ["70a"]: 10217.36,
            ["80b"]: 11083.47,
            ["80a"]: 11640.04,
            ["90b"]: 12506.15,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 59.80,
            ["20b"]: 153.63,
            ["20a"]: 198.30,
            ["40b"]: 297.03,
            ["40a"]: 328.77,
            ["50b"]: 378.17,
            ["50a"]: 420.49,
            ["60b"]: 469.88,
            ["60a"]: 501.63,
            ["70b"]: 550.96,
            ["70a"]: 582.70,
            ["80b"]: 632.10,
            ["80a"]: 663.84,
            ["90b"]: 713.23,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 180,
    supportType: "Buffer",
    supportType2: "Healer",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3"],
        ["Support"]: ["Q", "E"],
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
                    return 50.31 / 100;
                case 4:
                    return 55.34 / 100;
                case 5:
                    return 58.86 / 100;
                case 6:
                    return 62.88 / 100;
                case 7:
                    return 68.42 / 100;
                case 8:
                    return 73.95 / 100;
                case 9:
                    return 79.48 / 100;
                case 10:
                    return 85.52 / 100;
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
                    return 41.5 / 100;
                case 2:
                    return 44.88 / 100;
                case 3:
                    return 48.26 / 100;
                case 4:
                    return 53.08 / 100;
                case 5:
                    return 56.46 / 100;
                case 6:
                    return 60.32 / 100;
                case 7:
                    return 65.63 / 100;
                case 8:
                    return 70.94 / 100;
                case 9:
                    return 76.25 / 100;
                case 10:
                    return 82.04 / 100;
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
                    return 54.5 / 100;
                case 2:
                    return 58.94 / 100;
                case 3:
                    return 63.38 / 100;
                case 4:
                    return 69.71 / 100;
                case 5:
                    return 74.15 / 100;
                case 6:
                    return 79.22 / 100;
                case 7:
                    return 86.19 / 100;
                case 8:
                    return 93.16 / 100;
                case 9:
                    return 100.13 / 100;
                case 10:
                    return 107.74 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
            ["40a"]: 6.0,
            ["50b"]: 6.0,
            ["50a"]: 12.0,
            ["60b"]: 12.0,
            ["60a"]: 12.0,
            ["70b"]: 12.0,
            ["70a"]: 18.0,
            ["80b"]: 18.0,
            ["80a"]: 24.0,
            ["90b"]: 24.0
        }

        return { Type: "HP%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: starfrostSwirl,
        Level: 1
    },
    elementalBurst: {
        Skill: skyfeatherSong,
        Level: 1
    },
    passive1: {
        Type: "A1",
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
const Mona = {
    name: "Mona",
    src: "Assets/Characters/Mona/Mona.webp",
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
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
const Mualani = {
    name: "Mualani",
    src: "Assets/Characters/Mualani/Mualani.webp",
    card: "Assets/Characters/Mualani/Character_Mualani_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 14.15,
            ["20b"]: 36.71,
            ["20a"]: 48.84,
            ["40b"]: 73.08,
            ["40a"]: 81.70,
            ["50b"]: 94.00,
            ["50a"]: 105.49,
            ["60b"]: 117.92,
            ["60a"]: 126.54,
            ["70b"]: 139.08,
            ["70a"]: 147.70,
            ["80b"]: 160.38,
            ["80a"]: 169.00,
            ["90b"]: 181.78
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1182.12,
            ["20b"]: 3066.41,
            ["20a"]: 4079.97,
            ["40b"]: 6104.94,
            ["40a"]: 6825.10,
            ["50b"]: 7852.35,
            ["50a"]: 8812.57,
            ["60b"]: 9850.47,
            ["60a"]: 10570.63,
            ["70b"]: 11617.98,
            ["70a"]: 12338.14,
            ["80b"]: 13397.32,
            ["80a"]: 14117.48,
            ["90b"]: 15184.93,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 44.39,
            ["20b"]: 115.16,
            ["20a"]: 153.22,
            ["40b"]: 229.27,
            ["40a"]: 256.31,
            ["50b"]: 294.89,
            ["50a"]: 330.95,
            ["60b"]: 369.93,
            ["60a"]: 396.98,
            ["70b"]: 436.31,
            ["70a"]: 463.36,
            ["80b"]: 503.13,
            ["80a"]: 530.18,
            ["90b"]: 570.27,
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
    subDpsType: "On-field",
    scalingType: "HP",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 100,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N1", "N2", "N1", "N2", "Q"],//N2 is mini sharks from N1
        ["Support"]:["Q"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "HP"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }

        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "HP"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: surfsharkWavebreaker,
        Level: 1
    },
    elementalBurst: {
        Skill: boomsharkaLaka,
        Level: 1
    },
    passive1: {
        Type: "A1",
        Value: null
    },
    passive2: {
        Type: "A4",
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
const Nahida = {
    name: "Nahida",
    src: "Assets/Characters/Nahida/Nahida.webp",
    card: "Assets/Characters/Nahida/Character_Nahida_Portrait.webp",
    element: "DendroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 23.28,
            ["20b"]: 60.38,
            ["20a"]: 80.33,
            ["40b"]: 120.20,
            ["40a"]: 134.38,
            ["50b"]: 154.60,
            ["50a"]: 173.51,
            ["60b"]: 193.94,
            ["60a"]: 208.12,
            ["70b"]: 228.74,
            ["70a"]: 242.92,
            ["80b"]: 263.78,
            ["80a"]: 277.96,
            ["90b"]: 298.97
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 806.51,
            ["20b"]: 2092.08,
            ["20a"]: 2783.59,
            ["40b"]: 4165.14,
            ["40a"]: 4656.48,
            ["50b"]: 5357.33,
            ["50a"]: 6012.45,
            ["60b"]: 6720.56,
            ["60a"]: 7211.89,
            ["70b"]: 7926.46,
            ["70a"]: 8417.80,
            ["80b"]: 9140.43,
            ["80a"]: 9631.76,
            ["90b"]: 10360.04,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 49.06,
            ["20b"]: 127.26,
            ["20a"]: 169.33,
            ["40b"]: 253.37,
            ["40a"]: 283.26,
            ["50b"]: 325.89,
            ["50a"]: 365.74,
            ["60b"]: 408.82,
            ["60a"]: 438.71,
            ["70b"]: 482.18,
            ["70a"]: 512.07,
            ["80b"]: 556.02,
            ["80a"]: 585.91,
            ["90b"]: 630.21,
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 120,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N4", "C", "N1", "N2", "N3", "N4", "E", "N1", "N2", "N3", "N4", "C"],
        ["Support"]: ["Q", "E", "N1", "N2", "N1", "N2"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 40.3 / 100;
                case 2:
                    return 43.33 / 100;
                case 3:
                    return 46.35 / 100;
                case 4:
                    return 50.38 / 100;
                case 5:
                    return 53.4 / 100;
                case 6:
                    return 56.43 / 100;
                case 7:
                    return 60.46 / 100;
                case 8:
                    return 64.49 / 100;
                case 9:
                    return 68.52 / 100;
                case 10:
                    return 72.55 / 100;
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 36.97 / 100;
                case 2:
                    return 39.75 / 100;
                case 3:
                    return 42.52 / 100;
                case 4:
                    return 46.22 / 100;
                case 5:
                    return 48.99 / 100;
                case 6:
                    return 51.76 / 100;
                case 7:
                    return 55.46 / 100;
                case 8:
                    return 59.16 / 100;
                case 9:
                    return 62.86 / 100;
                case 10:
                    return 66.55 / 100;
            }

        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 45.87 / 100;
                case 2:
                    return 49.31 / 100;
                case 3:
                    return 52.76 / 100;
                case 4:
                    return 57.34 / 100;
                case 5:
                    return 60.78 / 100;
                case 6:
                    return 64.22 / 100;
                case 7:
                    return 68.81 / 100;
                case 8:
                    return 73.4 / 100;
                case 9:
                    return 77.99 / 100;
                case 10:
                    return 82.57 / 100;
            }


        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 58.41 / 100;
                case 2:
                    return 62.79 / 100;
                case 3:
                    return 67.17 / 100;
                case 4:
                    return 73.01 / 100;
                case 5:
                    return 77.39 / 100;
                case 6:
                    return 81.77 / 100;
                case 7:
                    return 87.61 / 100;
                case 8:
                    return 93.45 / 100;
                case 9:
                    return 99.29 / 100;
                case 10:
                    return 105.13 / 100;
            }

        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    normalAttack5: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "DendroDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 132 / 100;
                case 2:
                    return 141.9 / 100;
                case 3:
                    return 151.8 / 100;
                case 4:
                    return 165 / 100;
                case 5:
                    return 174.9 / 100;
                case 6:
                    return 184.8 / 100;
                case 7:
                    return 198 / 100;
                case 8:
                    return 211.2 / 100;
                case 9:
                    return 224.4 / 100;
                case 10:
                    return 237.6 / 100;
            }
        },
        Element: "DendroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "DendroDMGBonus",
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
        Skill: allSchemestoKnow,
        Level: 1
    },
    elementalBurst: {
        Skill: illusoryHeart,
        Level: 1
    },
    passive1: {
        Type: "ElementalMastery",
        Value: 200
    },
    passive2: {
        Type: "Awakening Elucidated",
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
const Navia = {
    name: "Navia",
    src: "Assets/Characters/Navia/Navia.webp",
    card: "Assets/Characters/Navia/Character_Navia_Portrait.webp",
    element: "GeoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 27.37,
            ["20b"]: 71.00,
            ["20a"]: 94.47,
            ["40b"]: 141.36,
            ["40a"]: 158.03,
            ["50b"]: 181.81,
            ["50a"]: 204.05,
            ["60b"]: 228.08,
            ["60a"]: 244.75,
            ["70b"]: 269.00,
            ["70a"]: 285.68,
            ["80b"]: 310.20,
            ["80a"]: 326.88,
            ["90b"]: 351.59
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 984.78,
            ["20b"]: 2554.52,
            ["20a"]: 3398.88,
            ["40b"]: 5085.81,
            ["40a"]: 5685.75,
            ["50b"]: 6541.52,
            ["50a"]: 7341.44,
            ["60b"]: 8206.08,
            ["60a"]: 8806.02,
            ["70b"]: 9678.53,
            ["70a"]: 10278.47,
            ["80b"]: 11160.83,
            ["80a"]: 11760.77,
            ["90b"]: 12650.03,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 61.74,
            ["20b"]: 160.17,
            ["20a"]: 213.11,
            ["40b"]: 318.88,
            ["40a"]: 356.49,
            ["50b"]: 410.15,
            ["50a"]: 460.30,
            ["60b"]: 514.51,
            ["60a"]: 552.13,
            ["70b"]: 606.84,
            ["70a"]: 644.45,
            ["80b"]: 699.78,
            ["80a"]: 737.39,
            ["90b"]: 793.15,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q","E", "N1", "N2", "N3", "N3", "N3", "N1", "N2", "E", "N1", "N2", "N3", "N3", "N3", "N1", "N2"],//Assuming enough shard from start
        ["Support"]: ["Q","E"],
    },
    weaponType: "Claymore",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 93.52 / 100;
                case 2:
                    return 101.13 / 100;
                case 3:
                    return 108.74 / 100;
                case 4:
                    return 119.62 / 100;
                case 5:
                    return 127.23 / 100;
                case 6:
                    return 135.93 / 100;
                case 7:
                    return 147.89 / 100;
                case 8:
                    return 159.85 / 100;
                case 9:
                    return 171.81 / 100;
                case 10:
                    return 184.86 / 100;
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
                    return 86.51 / 100;
                case 2:
                    return 93.55 / 100;
                case 3:
                    return 100.59 / 100;
                case 4:
                    return 110.65 / 100;
                case 5:
                    return 117.69 / 100;
                case 6:
                    return 125.74 / 100;
                case 7:
                    return 136.8 / 100;
                case 8:
                    return 147.87 / 100;
                case 9:
                    return 158.93 / 100;
                case 10:
                    return 171 / 100;
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
                    return 34.89 / 100;
                case 2:
                    return 37.73 / 100;
                case 3:
                    return 40.56 / 100;
                case 4:
                    return 44.62 / 100;
                case 5:
                    return 47.46 / 100;
                case 6:
                    return 50.71 / 100;
                case 7:
                    return 55.17 / 100;
                case 8:
                    return 59.63 / 100;
                case 9:
                    return 64.09 / 100;
                case 10:
                    return 68.96 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: ceremonialCrystalshot,
        Level: 1
    },
    elementalBurst: {
        Skill: astheSunlitSkysSingingSalute,
        Level: 1
    },
    passive1: {
        Type: "A1",
        Value: null
    },
    passive2: {
        Type: "A4",
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
const Neuvillette = {
    name: "Neuvillette",
    src: "Assets/Characters/Neuvillette/Neuvillette.webp",
    card: "Assets/Characters/Neuvillette/Character_Neuvillette_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 16.22,
            ["20b"]: 42.07,
            ["20a"]: 55.97,
            ["40b"]: 83.76,
            ["40a"]: 93.63,
            ["50b"]: 107.73,
            ["50a"]: 120.90,
            ["60b"]: 135.14,
            ["60a"]: 145.02,
            ["70b"]: 159.39,
            ["70a"]: 169.27,
            ["80b"]: 183.80,
            ["80a"]: 193.68,
            ["90b"]: 208.32
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1143.98,
            ["20b"]: 2967.49,
            ["20a"]: 3948.36,
            ["40b"]: 5908.00,
            ["40a"]: 6604.93,
            ["50b"]: 7599.05,
            ["50a"]: 8528.29,
            ["60b"]: 9532.71,
            ["60a"]: 10229.64,
            ["70b"]: 11243.21,
            ["70a"]: 11940.14,
            ["80b"]: 12965.15,
            ["80a"]: 13662.08,
            ["90b"]: 14695.09
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 44.87,
            ["20b"]: 116.40,
            ["20a"]: 154.87,
            ["40b"]: 231.74,
            ["40a"]: 259.08,
            ["50b"]: 298.07,
            ["50a"]: 334.52,
            ["60b"]: 373.92,
            ["60a"]: 401.26,
            ["70b"]: 441.02,
            ["70a"]: 468.35,
            ["80b"]: 508.56,
            ["80a"]: 535.90,
            ["90b"]: 576.42
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
    subDpsType: "On-field",
    scalingType: "HP",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: { //each C is 0.5 of charged attack
        ["Dps"]: ["Q", "C", "C", "C", "C", "C", "C", "E", "C", "C", "C", "C", "C", "C", "N1", "N2", "N3", "E", "C", "C", "C", "C", "C", "C",],
        ["Support"]: ["Q", "C", "C", "C", "C", "C", "C", "E", "C", "C", "C", "C", "C", "C"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 54.58 / 100;
                case 2:
                    return 58.67 / 100;
                case 3:
                    return 62.76 / 100;
                case 4:
                    return 68.22 / 100;
                case 5:
                    return 72.31 / 100;
                case 6:
                    return 76.41 / 100;
                case 7:
                    return 81.87 / 100;
                case 8:
                    return 87.32 / 100;
                case 9:
                    return 92.78 / 100;
                case 10:
                    return 98.24 / 100;
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
                    return 46.25 / 100;
                case 2:
                    return 49.71 / 100;
                case 3:
                    return 53.18 / 100;
                case 4:
                    return 57.81 / 100;
                case 5:
                    return 61.28 / 100;
                case 6:
                    return 64.74 / 100;
                case 7:
                    return 69.37 / 100;
                case 8:
                    return 73.99 / 100;
                case 9:
                    return 78.62 / 100;
                case 10:
                    return 83.24 / 100;
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
                    return 72.34 / 100;
                case 2:
                    return 77.76 / 100;
                case 3:
                    return 83.19 / 100;
                case 4:
                    return 90.42 / 100;
                case 5:
                    return 95.85 / 100;
                case 6:
                    return 101.27 / 100;
                case 7:
                    return 108.51 / 100;
                case 8:
                    return 115.74 / 100;
                case 9:
                    return 122.97 / 100;
                case 10:
                    return 130.21 / 100;
            }
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
    chargedAttack: {//Big charged attack
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 7.32 / 100;
                case 2:
                    return 7.91 / 100;
                case 3:
                    return 8.51 / 100;
                case 4:
                    return 9.36 / 100;
                case 5:
                    return 9.96 / 100;
                case 6:
                    return 10.64 / 100;
                case 7:
                    return 11.57 / 100;
                case 8:
                    return 12.51 / 100;
                case 9:
                    return 13.45 / 100;
                case 10:
                    return 14.47 / 100;
            }
        },
        Element: "HydroDMGBonus",
        isReaction: false,
        scaling: "HP"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
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
        Skill: oTearsIShallRepay,
        Level: 1
    },
    elementalBurst: {
        Skill: oTidesIHaveReturned,
        Level: 1
    },
    passive1: {
        Type: "A1",
        Value: null
    },
    passive2: {
        Type: "Discipline of the Supreme Arbitration",
        Value: { Type: "HydroDMGBonus", value: 0, sourewaterDroplets: 0, currentHP: 0 }
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
const Nilou = {
    name: "Nilou",
    src: "Assets/Characters/Nilou/Nilou.webp",
    card: "Assets/Characters/Nilou/Character_Nilou_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 17.88,
            ["20b"]: 46.37,
            ["20a"]: 61.69,
            ["40b"]: 92.31,
            ["40a"]: 103.20,
            ["50b"]: 118.74,
            ["50a"]: 133.25,
            ["60b"]: 148.95,
            ["60a"]: 159.84,
            ["70b"]: 175.68,
            ["70a"]: 186.56,
            ["80b"]: 202.58,
            ["80a"]: 213.47,
            ["90b"]: 229.61
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1182.12,
            ["20b"]: 3066.41,
            ["20a"]: 4079.97,
            ["40b"]: 6104.94,
            ["40a"]: 6825.10,
            ["50b"]: 7852.35,
            ["50a"]: 8812.57,
            ["60b"]: 9850.47,
            ["60a"]: 10570.63,
            ["70b"]: 11617.98,
            ["70a"]: 12338.14,
            ["80b"]: 13397.32,
            ["80a"]: 14117.48,
            ["90b"]: 15184.93,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 56.72,
            ["20b"]: 147.13,
            ["20a"]: 195.76,
            ["40b"]: 292.92,
            ["40a"]: 327.48,
            ["50b"]: 376.76,
            ["50a"]: 422.84,
            ["60b"]: 472.64,
            ["60a"]: 507.19,
            ["70b"]: 557.44,
            ["70a"]: 592.00,
            ["80b"]: 642.82,
            ["80a"]: 677.37,
            ["90b"]: 728.59,
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
    subDpsType: "On-field",
    scalingType: "HP",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3"],
        ["Support"]: ["Q", "E", "N1", "N2", "N3"],
    },
    weaponType: "Sword",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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

        return { Type: "HP%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: danceofHaftkarsvar,
        Level: 1
    },
    elementalBurst: {
        Skill: danceofAbzendegiDistantDreamListeningSpring,
        Level: 1
    },
    passive1: {
        Type: "Court of Dancing Petals",
        Value: null
    },
    passive2: {
        Type: "Dreamy Dance of Aeons",
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
    src: "Assets/Characters/Ningguang/Ningguang.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2","C", "N1", "N2", "C", "N1", "N2", "C"],
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
                    return (174.08 + (49.6 * 2)) / 100;
                case 2:
                    return (187.14 + (53.32 * 2)) / 100;
                case 3:
                    return (200.19 + (57.04 * 3)) / 100;
                case 4:
                    return (217.6 + (62 * 2)) / 100;
                case 5:
                    return (230.66 + (65.72 * 2)) / 100;
                case 6:
                    return (243.71 + (69.44 * 2)) / 100;
                case 7:
                    return (261.12 + (74.4 * 2)) / 100;
                case 8:
                    return (278.53 + (79.36 * 2)) / 100;
                case 9:
                    return (295.94 + (84.32 * 2)) / 100;
                case 10:
                    return (313.34 + (89.28 * 2)) / 100;
            }
        },
        extraMultiplier: function (level) {
            switch (level) {
                case 1:
                    return  (49.6 ) / 100;
                case 2:
                    return  (53.32 ) / 100;
                case 3:
                    return  (57.04) / 100;
                case 4:
                    return  (62 ) / 100;
                case 5:
                    return  (65.72 ) / 100;
                case 6:
                    return  (69.44) / 100;
                case 7:
                    return (74.4) / 100;
                case 8:
                    return (79.36 ) / 100;
                case 9:
                    return (84.32) / 100;
                case 10:
                    return (89.28 ) / 100;
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
    src: "Assets/Characters/Noelle/Noelle.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
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
    src: "Assets/Characters/Qiqi/Qiqi.webp",
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
    subDpsType: "Off-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
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
    src: "Assets/Characters/Raiden/Raiden.webp",
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 160,
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
    src: "Assets/Characters/Razor/Razor.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
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
    src: "Assets/Characters/Rosaria/Rosaria.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
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
    src: "Assets/Characters/Sara/Sara.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
    supportType: "Buffer",
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
    src: "Assets/Characters/Sayu/Sayu.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
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
const Sethos = {
    name: "Sethos",
    src: "Assets/Characters/Sethos/Sethos.webp",
    card: "Assets/Characters/Sethos/Character_Sethos_Portrait.webp",
    element: "ElectroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 19.05,
            ["20b"]: 48.95,
            ["20a"]: 63.19,
            ["40b"]: 94.65,
            ["40a"]: 104.76,
            ["50b"]: 120.50,
            ["50a"]: 133.98,
            ["60b"]: 149.72,
            ["60a"]: 159.84,
            ["70b"]: 175.56,
            ["70a"]: 185.67,
            ["80b"]: 201.41,
            ["80a"]: 211.53,
            ["90b"]: 227.26
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 820.61,
            ["20b"]: 2108.15,
            ["20a"]: 2721.19,
            ["40b"]: 4076.02,
            ["40a"]: 4511.60,
            ["50b"]: 5189.43,
            ["50a"]: 5770.20,
            ["60b"]: 6448.03,
            ["60a"]: 6883.61,
            ["70b"]: 7560.61,
            ["70a"]: 7996.19,
            ["80b"]: 8674.02,
            ["80a"]: 9109.60,
            ["90b"]: 9787.42,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 46.92,
            ["20b"]: 120.55,
            ["20a"]: 155.60,
            ["40b"]: 233.08,
            ["40a"]: 257.98,
            ["50b"]: 296.74,
            ["50a"]: 329.95,
            ["60b"]: 368.71,
            ["60a"]: 393.62,
            ["70b"]: 432.33,
            ["70a"]: 457.24,
            ["80b"]: 496.00,
            ["80a"]: 520.91,
            ["90b"]: 559.67,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 115,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "E"],
        ["Support"]: ["E", "Q", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "N1", "N2", "N3", "E"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 52.61 / 100;
                case 2:
                    return 56.9 / 100;
                case 3:
                    return 61.18 / 100;
                case 4:
                    return 67.3 / 100;
                case 5:
                    return 71.58 / 100;
                case 6:
                    return 76.47 / 100;
                case 7:
                    return 83.2 / 100;
                case 8:
                    return 89.93 / 100;
                case 9:
                    return 96.66 / 100;
                case 10:
                    return 104 / 100;
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
                    return 23.8 / 100;
                case 2:
                    return 25.73 / 100;
                case 3:
                    return 27.67 / 100;
                case 4:
                    return 30.44 / 100;
                case 5:
                    return 32.37 / 100;
                case 6:
                    return 34.59 / 100;
                case 7:
                    return 37.63 / 100;
                case 8:
                    return 40.67 / 100;
                case 9:
                    return 43.72 / 100;
                case 10:
                    return 47.04 / 100;
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
                    return 26.61 / 100;
                case 2:
                    return 28.77 / 100;
                case 3:
                    return 30.94 / 100;
                case 4:
                    return 34.03 / 100;
                case 5:
                    return 36.2 / 100;
                case 6:
                    return 38.67 / 100;
                case 7:
                    return 42.08 / 100;
                case 8:
                    return 45.48 / 100;
                case 9:
                    return 48.89 / 100;
                case 10:
                    return 52.6 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
            ["40a"]: 24.0,
            ["50b"]: 24.0,
            ["50a"]: 48.0,
            ["60b"]: 48.0,
            ["60a"]: 48.0,
            ["70b"]: 48.0,
            ["70a"]: 72.0,
            ["80b"]: 72.0,
            ["80a"]: 96.0,
            ["90b"]: 96.0
        }

        return { Type: "ElementalMastery", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: ancientRiteTheThunderingSands,
        Level: 1
    },
    elementalBurst: {
        Skill: secretRiteTwilightShadowpiercer,
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
const Shenhe = {
    name: "Shenhe",
    src: "Assets/Characters/Shenhe/Shenhe.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Buffer",
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
const Sigewinne = {
    name: "Sigewinne",
    src: "Assets/Characters/Sigewinne/Sigewinne.webp",
    card: "Assets/Characters/Sigewinne/Character_Sigewinne_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 14.99,
            ["20b"]: 38.88,
            ["20a"]: 51.73,
            ["40b"]: 77.41,
            ["40a"]: 86.54,
            ["50b"]: 99.57,
            ["50a"]: 111.74,
            ["60b"]: 124.90,
            ["60a"]: 134.03,
            ["70b"]: 147.31,
            ["70a"]: 156.44,
            ["80b"]: 169.87,
            ["80a"]: 179.00,
            ["90b"]: 192.54
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1039.12,
            ["20b"]: 2695.47,
            ["20a"]: 3586.42,
            ["40b"]: 5366.44,
            ["40a"]: 5999.48,
            ["50b"]: 6902.47,
            ["50a"]: 7746.53,
            ["60b"]: 8658.88,
            ["60a"]: 9291.92,
            ["70b"]: 10212.58,
            ["70a"]: 10845.62,
            ["80b"]: 11776.67,
            ["80a"]: 12409.72,
            ["90b"]: 13348.04,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 38.89,
            ["20b"]: 100.88,
            ["20a"]: 134.22,
            ["40b"]: 200.84,
            ["40a"]: 224.53,
            ["50b"]: 258.33,
            ["50a"]: 289.92,
            ["60b"]: 324.06,
            ["60a"]: 347.76,
            ["70b"]: 382.21,
            ["70a"]: 405.91,
            ["80b"]: 440.75,
            ["80a"]: 464.44,
            ["90b"]: 499.56,
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
    subDpsType: "On-field",
    scalingType: "HP",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Buffer",
    supportType2: "Healer",
    sequence: {
        ["Dps"]: ["E", "Q"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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

        return { Type: "HP%", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: reboundHydrotherapy,
        Level: 1
    },
    elementalBurst: {
        Skill: superSaturatedSyringing,
        Level: 1
    },
    passive1: {
        Type: "Requires Appropriate Rest",
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
    src: "Assets/Characters/Sucrose/Sucrose.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Buffer",
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
    src: "Assets/Characters/Thoma/Thoma.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 145,
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
const Tighnari = {
    name: "Tighnari",
    src: "Assets/Characters/Tighnari/Tighnari.webp",
    card: "Assets/Characters/Tighnari/Character_Tighnari_Portrait.webp",
    element: "DendroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 20.85,
            ["20b"]: 54.10,
            ["20a"]: 71.98,
            ["40b"]: 107.70,
            ["40a"]: 120.40,
            ["50b"]: 138.53,
            ["50a"]: 155.46,
            ["60b"]: 173.77,
            ["60a"]: 186.48,
            ["70b"]: 204.96,
            ["70a"]: 217.66,
            ["80b"]: 236.34,
            ["80a"]: 249.05,
            ["90b"]: 267.88
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 844.64,
            ["20b"]: 2191.00,
            ["20a"]: 2915.20,
            ["40b"]: 4362.07,
            ["40a"]: 4876.64,
            ["50b"]: 5610.63,
            ["50a"]: 6296.72,
            ["60b"]: 7038.32,
            ["60a"]: 7552.88,
            ["70b"]: 8301.24,
            ["70a"]: 8815.80,
            ["80b"]: 9572.60,
            ["80a"]: 10087.17,
            ["90b"]: 10849.88,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 49.06,
            ["20b"]: 127.26,
            ["20a"]: 169.33,
            ["40b"]: 253.37,
            ["40a"]: 283.26,
            ["50b"]: 325.89,
            ["50a"]: 365.74,
            ["60b"]: 408.82,
            ["60a"]: 438.71,
            ["70b"]: 482.18,
            ["70a"]: 512.07,
            ["80b"]: 556.02,
            ["80a"]: 585.91,
            ["90b"]: 630.21,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "C", "Q", "C", "C"],
        ["Support"]: ["E", "C", "Q", "C", "C"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 87.2 / 100;
                case 2:
                    return 93.74 / 100;
                case 3:
                    return 100.28 / 100;
                case 4:
                    return 109 / 100;
                case 5:
                    return 115.54 / 100;
                case 6:
                    return 122.08 / 100;
                case 7:
                    return 130.8 / 100;
                case 8:
                    return 139.52 / 100;
                case 9:
                    return 148.24 / 100;
                case 10:
                    return 156.96 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK",
        extraMultiplier: function (level) {
            switch (level) {
                case 1:
                    return 38.6 / 100;
                case 2:
                    return 41.49 / 100;
                case 3:
                    return 44.39 / 100;
                case 4:
                    return 48.25 / 100;
                case 5:
                    return 51.14 / 100;
                case 6:
                    return 54.04 / 100;
                case 7:
                    return 57.9 / 100;
                case 8:
                    return 61.76 / 100;
                case 9:
                    return 65.62 / 100;
                case 10:
                    return 69.48 / 100;
            }
        }
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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

        return { Type: "DendroDMGBonus", Value: values[this.level] };

    },
    elementalSkill: {
        Skill: vijnanaPhalaMine,
        Level: 1
    },
    elementalBurst: {
        Skill: fashionersTanglevineShaft,
        Level: 1
    },
    passive1: {
        Type: "ElementalMastery",
        Value: 50
    },
    passive2: {
        Type: "Scholarly Blade",
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
    src: "Assets/Characters/Tartaglia/Tartaglia.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
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
        Element: "PhysicalDMGBonus",
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
        Element: "PhysicalDMGBonus",
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
        Element: "PhysicalDMGBonus",
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
    src: "Assets/Characters/Traveler/Traveler.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
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
const Traveler_Dendro = {
    name: "Traveler (Dendro)",
    src: "Assets/Characters/Traveler/Traveler.webp",
    card: "Assets/Characters/Traveler/Character_Traveler_Portrait.webp",
    element: "DendroCharacter",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
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
        Skill: razorgrassBlade,
        Level: 1
    },
    elementalBurst: {
        Skill: surgentManifestation,
        Level: 1
    },
    passive1: {
        Type: "ElementalMastery",
        Value: 60
    },
    passive2: {
        Type: "Verdant Luxury",
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
    src: "Assets/Characters/Traveler/Traveler.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
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
    src: "Assets/Characters/Traveler/Traveler.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
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
const Traveler_Hydro = {
    name: "Traveler (Hydro)",
    src: "Assets/Characters/Traveler/Traveler.webp",
    card: "Assets/Characters/Traveler/Character_Traveler_Portrait.webp",
    element: "HydroCharacter",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N5", "N1", "N2", "N3", "N4", "N5"],
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
        Skill: aquacrestSaber,
        Level: 1
    },
    elementalBurst: {
        Skill: risingWaters,
        Level: 1
    },
    passive1: {
        Type: "",
        Value: null
    },
    passive2: {
        Type: "Clear Waters",
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
    src: "Assets/Characters/Venti/Venti.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 130,
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
const Wanderer = {
    name: "Wanderer",
    src: "Assets/Characters/Wanderer/Wanderer.webp",
    card: "Assets/Characters/Wanderer/Character_Wanderer_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 25.51,
            ["20b"]: 66.17,
            ["20a"]: 88.04,
            ["40b"]: 131.74,
            ["40a"]: 147.28,
            ["50b"]: 169.45,
            ["50a"]: 190.17,
            ["60b"]: 212.56,
            ["60a"]: 228.10,
            ["70b"]: 250.70,
            ["70a"]: 266.24,
            ["80b"]: 289.10,
            ["80a"]: 304.64,
            ["90b"]: 327.67
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 791.26,
            ["20b"]: 2052.52,
            ["20a"]: 2730.95,
            ["40b"]: 4086.37,
            ["40a"]: 4568.41,
            ["50b"]: 5256.01,
            ["50a"]: 5898.73,
            ["60b"]: 6593.46,
            ["60a"]: 7075.50,
            ["70b"]: 7776.55,
            ["70a"]: 8258.59,
            ["80b"]: 8967.56,
            ["80a"]: 9449.60,
            ["90b"]: 10164.11,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 47.27,
            ["20b"]: 122.61,
            ["20a"]: 163.13,
            ["40b"]: 244.10,
            ["40a"]: 272.90,
            ["50b"]: 313.97,
            ["50a"]: 352.36,
            ["60b"]: 393.86,
            ["60a"]: 422.66,
            ["70b"]: 464.54,
            ["70a"]: 493.33,
            ["80b"]: 535.68,
            ["80a"]: 564.48,
            ["90b"]: 607.16,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "C", "E", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C"],
        ["Support"]: ["Q", "C", "E", "N1", "N2", "C", "N1", "N2", "C", "N1", "N2", "C"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 68.71 / 100;
                case 2:
                    return 74.31 / 100;
                case 3:
                    return 79.9 / 100;
                case 4:
                    return 87.89 / 100;
                case 5:
                    return 93.48 / 100;
                case 6:
                    return 99.88 / 100;
                case 7:
                    return 108.66 / 100;
                case 8:
                    return 117.45 / 100;
                case 9:
                    return 126.24 / 100;
                case 10:
                    return 135.83 / 100;
            }
        },
        Element: "AnemoDMGBonus",
        isReaction: TransformStreamDefaultController,
        scaling: "ATK"
    },
    normalAttack2: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 65.02 / 100;
                case 2:
                    return 70.31 / 100;
                case 3:
                    return 75.6 / 100;
                case 4:
                    return 83.16 / 100;
                case 5:
                    return 88.45 / 100;
                case 6:
                    return 94.5 / 100;
                case 7:
                    return 102.82 / 100;
                case 8:
                    return 111.13 / 100;
                case 9:
                    return 119.45 / 100;
                case 10:
                    return 128.52 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 132.08 / 100;
                case 2:
                    return 141.99 / 100;
                case 3:
                    return 151.89 / 100;
                case 4:
                    return 165.1 / 100;
                case 5:
                    return 175.01 / 100;
                case 6:
                    return 184.91 / 100;
                case 7:
                    return 198.12 / 100;
                case 8:
                    return 211.33 / 100;
                case 9:
                    return 224.54 / 100;
                case 10:
                    return 237.74 / 100;
            }
        },
        Element: "AnemoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: hanegaSongoftheWind,
        Level: 1
    },
    elementalBurst: {
        Skill: kyougenFiveCeremonialPlays,
        Level: 1
    },
    passive1: {
        Type: "Jade-Claimed Flower",
        Value: null
    },
    passive2: {
        Type: "Gales of Reverie",
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
const Wriothesley = {
    name: "Wriothesley",
    src: "Assets/Characters/Wriothesley/Wriothesley.webp",
    card: "Assets/Characters/Wriothesley/Character_Wriothesley_Portrait.webp",
    element: "CryoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 24.21,
            ["20b"]: 62.79,
            ["20a"]: 83.54,
            ["40b"]: 125.01,
            ["40a"]: 139.75,
            ["50b"]: 160.79,
            ["50a"]: 180.45,
            ["60b"]: 201.70,
            ["60a"]: 216.45,
            ["70b"]: 237.89,
            ["70a"]: 252.64,
            ["80b"]: 274.33,
            ["80a"]: 289.07,
            ["90b"]: 310.93
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1058.19,
            ["20b"]: 2744.93,
            ["20a"]: 3652.23,
            ["40b"]: 5464.90,
            ["40a"]: 6109.56,
            ["50b"]: 7029.12,
            ["50a"]: 7888.67,
            ["60b"]: 8817.76,
            ["60a"]: 9462.41,
            ["70b"]: 10399.97,
            ["70a"]: 11044.63,
            ["80b"]: 11992.76,
            ["80a"]: 12637.42,
            ["90b"]: 13592.96,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 59.41,
            ["20b"]: 154.11,
            ["20a"]: 205.05,
            ["40b"]: 306.82,
            ["40a"]: 343.02,
            ["50b"]: 394.65,
            ["50a"]: 442.91,
            ["60b"]: 495.07,
            ["60a"]: 531.27,
            ["70b"]: 583.90,
            ["70a"]: 620.10,
            ["80b"]: 673.33,
            ["80a"]: 709.53,
            ["90b"]: 763.17,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "Q"],
        ["Support"]: ["E", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "Q"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 53.36 / 100;
                case 2:
                    return 57.7 / 100;
                case 3:
                    return 62.05 / 100;
                case 4:
                    return 68.25 / 100;
                case 5:
                    return 72.59 / 100;
                case 6:
                    return 77.56 / 100;
                case 7:
                    return 84.38 / 100;
                case 8:
                    return 91.21 / 100;
                case 9:
                    return 98.03 / 100;
                case 10:
                    return 105.48 / 100;
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
                    return 51.8 / 100;
                case 2:
                    return 56.01 / 100;
                case 3:
                    return 60.23 / 100;
                case 4:
                    return 66.25 / 100;
                case 5:
                    return 70.47 / 100;
                case 6:
                    return 75.29 / 100;
                case 7:
                    return 81.91 / 100;
                case 8:
                    return 88.54 / 100;
                case 9:
                    return 95.17 / 100;
                case 10:
                    return 102.39 / 100;
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
                    return 67.22 / 100;
                case 2:
                    return 72.69 / 100;
                case 3:
                    return 78.17 / 100;
                case 4:
                    return 85.98 / 100;
                case 5:
                    return 91.45 / 100;
                case 6:
                    return 97.71 / 100;
                case 7:
                    return 106.31 / 100;
                case 8:
                    return 114.9 / 100;
                case 9:
                    return 123.5 / 100;
                case 10:
                    return 132.88 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 152.96 / 100;
                case 2:
                    return 164.43 / 100;
                case 3:
                    return 175.9 / 100;
                case 4:
                    return 191.2 / 100;
                case 5:
                    return 202.67 / 100;
                case 6:
                    return 214.14 / 100;
                case 7:
                    return 229.44 / 100;
                case 8:
                    return 244.74 / 100;
                case 9:
                    return 260.03 / 100;
                case 10:
                    return 275.33 / 100;
            }
        },
        Element: "CryoDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: icefangRush,
        Level: 1
    },
    elementalBurst: {
        Skill: darkgoldWolfbite,
        Level: 1
    },
    passive1: {
        Type: "There Shall Be a Plea for Justice",
        Value: null
    },
    passive2: {
        Type: "A4",
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
const Xiangling = {
    name: "Xiangling",
    src: "Assets/Characters/Xiangling/Xiangling.webp",
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
    havePhysicalChargedAttack: true,
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 155,
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
const Xianyun = {
    name: "Xianyun",
    src: "Assets/Characters/Xianyun/Xianyun.webp",
    card: "Assets/Characters/Xianyun/Character_Xianyun_Portrait.webp",
    element: "AnemoCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 26.07,
            ["20b"]: 67.62,
            ["20a"]: 89.97,
            ["40b"]: 134.62,
            ["40a"]: 150.50,
            ["50b"]: 173.16,
            ["50a"]: 194.33,
            ["60b"]: 217.22,
            ["60a"]: 233.10,
            ["70b"]: 256.19,
            ["70a"]: 272.07,
            ["80b"]: 295.43,
            ["80a"]: 311.31,
            ["90b"]: 334.85
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 810.32,
            ["20b"]: 2101.98,
            ["20a"]: 2796.75,
            ["40b"]: 4184.83,
            ["40a"]: 4678.49,
            ["50b"]: 5382.66,
            ["50a"]: 6040.87,
            ["60b"]: 6752.34,
            ["60a"]: 7245.99,
            ["70b"]: 7963.94,
            ["70a"]: 8457.60,
            ["80b"]: 9183.65,
            ["80a"]: 9677.30,
            ["90b"]: 10409.02,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 44.57,
            ["20b"]: 115.62,
            ["20a"]: 153.84,
            ["40b"]: 230.20,
            ["40a"]: 257.35,
            ["50b"]: 296.09,
            ["50a"]: 332.29,
            ["60b"]: 371.43,
            ["60a"]: 398.58,
            ["70b"]: 438.08,
            ["70a"]: 465.23,
            ["80b"]: 505.17,
            ["80a"]: 532.32,
            ["90b"]: 572.57,
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 165,
    supportType: "Buffer",
    supportType2: "Healer",
    supportType3: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "P", "P", "P", "P", "P", "P", "P", "P"],
        ["Support"]: ["E", "Q",],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 141.93 / 100;
                case 2:
                    return 153.49 / 100;
                case 3:
                    return 165.04 / 100;
                case 4:
                    return 181.54 / 100;
                case 5:
                    return 193.1 / 100;
                case 6:
                    return 206.3 / 100;
                case 7:
                    return 224.45 / 100;
                case 8:
                    return 242.61 / 100;
                case 9:
                    return 260.76 / 100;
                case 10:
                    return 280.57 / 100;
            }
        },
        Element: "AnemoDMGBonus",
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
        Skill: whiteCloudsatDawn,
        Level: 1
    },
    elementalBurst: {
        Skill: starsGatheratDusk,
        Level: 1
    },
    passive1: {
        Type: "Galefeather Pursuit",
        Value: null
    },
    passive2: {
        Type: "Consider, the Adeptus in Her Realm",
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
const Xiao = {
    name: "Xiao",
    src: "Assets/Characters/Xiao/Xiao.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
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
    src: "Assets/Characters/Xingqiu/Xingqiu.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 160,
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
    src: "Assets/Characters/Xinyan/Xinyan.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 125,
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
    src: "Assets/Characters/Yae_Miko/Yae_Miko.webp",
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
    subDpsType: "Off-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 135,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["Q", "E", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "N1", "N2", "N3", "C", "E"],
        ["Support"]: ["Q", "E"],
    },
    weaponType: "Catalyst",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 39.66 / 100;
                case 2:
                    return 42.63 / 100;
                case 3:
                    return 45.61 / 100;
                case 4:
                    return 49.57 / 100;
                case 5:
                    return 52.55 / 100;
                case 6:
                    return 55.52 / 100;
                case 7:
                    return 59.49 / 100;
                case 8:
                    return 63.45 / 100;
                case 9:
                    return 67.42 / 100;
                case 10:
                    return 71.39 / 100;
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
                    return 38.52 / 100;
                case 2:
                    return 41.41 / 100;
                case 3:
                    return 44.3 / 100;
                case 4:
                    return 48.15 / 100;
                case 5:
                    return 51.04 / 100;
                case 6:
                    return 53.93 / 100;
                case 7:
                    return 57.78 / 100;
                case 8:
                    return 61.63 / 100;
                case 9:
                    return 65.48 / 100;
                case 10:
                    return 69.33 / 100;
            }
        },
        Element: "ElectroDMGBonus",
        isReaction: false,
        scaling: "ATK"

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 56.89 / 100;
                case 2:
                    return 61.16 / 100;
                case 3:
                    return 65.42 / 100;
                case 4:
                    return 71.11 / 100;
                case 5:
                    return 75.38 / 100;
                case 6:
                    return 79.64 / 100;
                case 7:
                    return 85.33 / 100;
                case 8:
                    return 91.02 / 100;
                case 9:
                    return 96.71 / 100;
                case 10:
                    return 102.4 / 100;
            }


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
        Element: "ElectroDMGBonus",
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
    src: "Assets/Characters/Yanfei/Yanfei.webp",
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
    subDpsType: "On-field",
    scalingType: "ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 145,
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
const Yaoyao = {
    name: "Yaoyao",
    src: "Assets/Characters/Yaoyao/Yaoyao.webp",
    card: "Assets/Characters/Yaoyao/Character_Yaoyao_Portrait.webp",
    element: "DendroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 17.81,
            ["20b"]: 45.75,
            ["20a"]: 59.05,
            ["40b"]: 88.45,
            ["40a"]: 97.91,
            ["50b"]: 112.62,
            ["50a"]: 125.22,
            ["60b"]: 139.93,
            ["60a"]: 149.38,
            ["70b"]: 164.07,
            ["70a"]: 173.53,
            ["80b"]: 188.24,
            ["80a"]: 197.69,
            ["90b"]: 212.40
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1030.32,
            ["20b"]: 2646.90,
            ["20a"]: 3416.61,
            ["40b"]: 5117.67,
            ["40a"]: 5664.57,
            ["50b"]: 6515.61,
            ["50a"]: 7244.81,
            ["60b"]: 8095.86,
            ["60a"]: 8642.75,
            ["70b"]: 9492.77,
            ["70a"]: 10039.66,
            ["80b"]: 10890.71,
            ["80a"]: 11437.61,
            ["90b"]: 12288.65,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 62.95,
            ["20b"]: 161.71,
            ["20a"]: 208.74,
            ["40b"]: 312.66,
            ["40a"]: 346.08,
            ["50b"]: 398.07,
            ["50a"]: 442.62,
            ["60b"]: 494.62,
            ["60a"]: 528.03,
            ["70b"]: 579.96,
            ["70a"]: 613.37,
            ["80b"]: 665.37,
            ["80a"]: 698.78,
            ["90b"]: 750.77,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Healer",
    supportType2: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N1", "N2", "N1", "N2", "N1", "N2"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Polearm",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 51 / 100;
                case 2:
                    return 55.15 / 100;
                case 3:
                    return 59.3 / 100;
                case 4:
                    return 65.23 / 100;
                case 5:
                    return 69.39 / 100;
                case 6:
                    return 74.13 / 100;
                case 7:
                    return 80.65 / 100;
                case 8:
                    return 87.18 / 100;
                case 9:
                    return 93.7 / 100;
                case 10:
                    return 100.82 / 100;
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
                    return 47.44 / 100;
                case 2:
                    return 51.3 / 100;
                case 3:
                    return 55.17 / 100;
                case 4:
                    return 60.68 / 100;
                case 5:
                    return 64.54 / 100;
                case 6:
                    return 68.96 / 100;
                case 7:
                    return 75.03 / 100;
                case 8:
                    return 81.09 / 100;
                case 9:
                    return 87.16 / 100;
                case 10:
                    return 93.78 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: raphanusSkyCluster,
        Level: 1
    },
    elementalBurst: {
        Skill: moonjadeDescent,
        Level: 1
    },
    passive1: {
        Type: "A1",
        Value: null
    },
    passive2: {
        Type: "A4",
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
const Yelan = {
    name: "Yelan",
    src: "Assets/Characters/Yelan/Yelan.webp",
    card: "Assets/Characters/Yelan/Character_Yelan_Portrait.webp",
    element: "HydroCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 18.99,
            ["20b"]: 49.27,
            ["20a"]: 65.55,
            ["40b"]: 98.08,
            ["40a"]: 109.65,
            ["50b"]: 126.16,
            ["50a"]: 141.58,
            ["60b"]: 158.26,
            ["60a"]: 169.83,
            ["70b"]: 186.66,
            ["70a"]: 198.23,
            ["80b"]: 215.24,
            ["80a"]: 226.81,
            ["90b"]: 243.96
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 1124.92,
            ["20b"]: 2918.04,
            ["20a"]: 3882.55,
            ["40b"]: 5809.54,
            ["40a"]: 6494.85,
            ["50b"]: 7472.40,
            ["50a"]: 8386.15,
            ["60b"]: 9373.83,
            ["60a"]: 10059.14,
            ["70b"]: 11055.82,
            ["70a"]: 11741.13,
            ["80b"]: 12749.06,
            ["80a"]: 13434.37,
            ["90b"]: 14450.17,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 42.66,
            ["20b"]: 110.66,
            ["20a"]: 147.23,
            ["40b"]: 220.31,
            ["40a"]: 246.30,
            ["50b"]: 283.37,
            ["50a"]: 318.02,
            ["60b"]: 355.47,
            ["60a"]: 381.46,
            ["70b"]: 419.26,
            ["70a"]: 445.25,
            ["80b"]: 483.47,
            ["80a"]: 509.46,
            ["90b"]: 547.98,
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 185,
    supportType: "Sub-dps",
    sequence: {
        ["Dps"]: ["E", "Q", "N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4"],
        ["Support"]: ["E", "Q"],
    },
    weaponType: "Bow",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 40.68 / 100;
                case 2:
                    return 43.99 / 100;
                case 3:
                    return 47.3 / 100;
                case 4:
                    return 52.03 / 100;
                case 5:
                    return 55.34 / 100;
                case 6:
                    return 59.13 / 100;
                case 7:
                    return 64.33 / 100;
                case 8:
                    return 69.53 / 100;
                case 9:
                    return 74.73 / 100;
                case 10:
                    return 80.41 / 100;
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
                    return 39.04 / 100;
                case 2:
                    return 42.22 / 100;
                case 3:
                    return 45.4 / 100;
                case 4:
                    return 49.94 / 100;
                case 5:
                    return 53.12 / 100;
                case 6:
                    return 56.75 / 100;
                case 7:
                    return 61.74 / 100;
                case 8:
                    return 66.74 / 100;
                case 9:
                    return 71.73 / 100;
                case 10:
                    return 77.18 / 100;
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
    normalAttack4: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return (32.51 + 32.51) / 100;
                case 2:
                    return (35.15 + 35.15) / 100;
                case 3:
                    return (37.8 + 37.8) / 100;
                case 4:
                    return (41.58 + 41.58) / 100;
                case 5:
                    return (44.23 + 44.23) / 100;
                case 6:
                    return (47.25 + 47.25) / 100;
                case 7:
                    return (51.41 + 51.41) / 100;
                case 8:
                    return (55.57 + 55.57) / 100;
                case 9:
                    return (59.72 + 59.72) / 100;
                case 10:
                    return (64.26 + 64.26) / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    chargedAttack: {
        Multiplier: function (level) {
            return 0;
        },
        Element: "HydroDMGBonus",
        isReaction: true,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            return 0;
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
        Skill: lingeringLifeline,
        Level: 1
    },
    elementalBurst: {
        Skill: depthClarionDice,
        Level: 1
    },
    passive1: {
        Type: "HP%",
        Value: 16.5
    },
    passive2: {
        Type: "Adapt With Ease",
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
    src: "Assets/Characters/Yoimiya/Yoimiya.webp",
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
    subDpsType: "On-field",
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
    src: "Assets/Characters/Yun_Jin/Yun_Jin.webp",
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
    subDpsType: "On-field",
    scalingType: "Hybrid",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 140,
    supportType: "Buffer",
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
    src: "Assets/Characters/Zhongli/Zhongli.webp",
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
    havePhysicalChargedAttack: true,
    subDpsType: "On-field",
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
const Empty = {
    name: "Name",
    src: "Assets/Characters/Name/Name.webp",
    card: "Assets/Characters/Name/Character_Name_Portrait.webp",
    element: "ElementCharacter",
    baseAttack: function () {
        let baseattack = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 0,
            ["50b"]: 0,
            ["50a"]: 0,
            ["60b"]: 0,
            ["60a"]: 0,
            ["70b"]: 0,
            ["70a"]: 0,
            ["80b"]: 0,
            ["80a"]: 0,
            ["90b"]: 0
        }
        return baseattack[this.level];
    },
    baseHP: function () {
        let baseHP = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 0,
            ["50b"]: 0,
            ["50a"]: 0,
            ["60b"]: 0,
            ["60a"]: 0,
            ["70b"]: 0,
            ["70a"]: 0,
            ["80b"]: 0,
            ["80a"]: 0,
            ["90b"]: 0,
        }
        return baseHP[this.level];
    },
    baseDEF: function () {
        let baseDEF = {
            ["1b"]: 0,
            ["20b"]: 0,
            ["20a"]: 0,
            ["40b"]: 0,
            ["40a"]: 0,
            ["50b"]: 0,
            ["50a"]: 0,
            ["60b"]: 0,
            ["60a"]: 0,
            ["70b"]: 0,
            ["70a"]: 0,
            ["80b"]: 0,
            ["80a"]: 0,
            ["90b"]: 0,
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
    subDpsType: "Off-field",
    scalingType: "Type",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalent: 1,
    energyOffset: 150,
    supportType: "Type",
    sequence: {
        ["Dps"]: [],
        ["Support"]: [],
    },
    weaponType: "weaponType",
    normalAttack1: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
            }
        },
        Element: "PhysicalDMGBonus",
        isReaction: false,
        scaling: "ATK"
    },
    plungeAttack: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 0 / 100;
                case 2:
                    return 0 / 100;
                case 3:
                    return 0 / 100;
                case 4:
                    return 0 / 100;
                case 5:
                    return 0 / 100;
                case 6:
                    return 0 / 100;
                case 7:
                    return 0 / 100;
                case 8:
                    return 0 / 100;
                case 9:
                    return 0 / 100;
                case 10:
                    return 0 / 100;
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
        Skill: null,
        Level: 1
    },
    elementalBurst: {
        Skill: null,
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
const AllCharacters = {
    ["Albedo"]: Albedo,
    ["Alhaitham"]: Alhaitham,
    ["Aloy"]: Aloy,
    ["Amber"]: Amber,
    ["Arlecchino"]: Arlecchino,
    ["Ayaka"]: Ayaka,
    ["Ayato"]: Ayato,
    ["Baizhu"]: Baizhu,
    ["Barbara"]: Barbara,
    ["Beidou"]: Beidou,
    ["Bennett"]: Bennett,
    ["Candace"]: Candace,
    ["Charlotte"]: Charlotte,
    ["Chevreuse"]: Chevreuse,
    ["Chiori"]: Chiori,
    ["Chongyun"]: Chongyun,
    ["Clorinde"]: Clorinde,
    ["Collei"]: Collei,
    ["Cyno"]: Cyno,
    ["Dehya"]: Dehya,
    ["Diluc"]: Diluc,
    ["Diona"]: Diona,
    ["Dori"]: Dori,
    ["Emilie"]: Emilie,
    ["Eula"]: Eula,
    ["Faruzan"]: Faruzan,
    ["Fischl"]: Fischl,
    ["Freminet"]: Freminet,
    ["Furina"]: Furina,
    ["Gaming"]: Gaming,
    ["Ganyu"]: Ganyu,
    ["Gorou"]: Gorou,
    ["Heizou"]: Heizou,
    ["Hu Tao"]: Hu_Tao,
    ["Itto"]: Itto,
    ["Jean"]: Jean,
    ["Kachina"]: Kachina,
    ["Kaeya"]: Kaeya,
    ["Kaveh"]: Kaveh,
    ["Kazuha"]: Kazuha,
    ["Keqing"]: Keqing,
    ["Kirara"]: Kirara,
    ["Klee"]: Klee,
    ["Kokomi"]: Kokomi,
    ["Kuki"]: Kuki,
    ["Layla"]: Layla,
    ["Lisa"]: Lisa,
    ["Lynette"]: Lynette,
    ["Lyney"]: Lyney,
    ["Mika"]: Mika,
    ["Mona"]: Mona,
    ["Mualani"]: Mualani,
    ["Nahida"]: Nahida,
    ["Navia"]: Navia,
    ["Neuvillette"]: Neuvillette,
    ["Nilou"]: Nilou,
    ["Ningguang"]: Ningguang,
    ["Noelle"]: Noelle,
    ["Qiqi"]: Qiqi,
    ["Raiden"]: Raiden,
    ["Razor"]: Razor,
    ["Rosaria"]: Rosaria,
    ["Sara"]: Sara,
    ["Sayu"]: Sayu,
    ["Sethos"]: Sethos,
    ["Shenhe"]: Shenhe,
    ["Sigewinne"]: Sigewinne,
    ["Sucrose"]: Sucrose,
    ["Tartaglia"]: Tartaglia,
    ["Thoma"]: Thoma,
    ["Tighnari"]: Tighnari,
    ["Traveler (Anemo)"]: Traveler_Anemo,
    ["Traveler (Dendro)"]: Traveler_Dendro,
    ["Traveler (Electro)"]: Traveler_Electro,
    ["Traveler (Geo)"]: Traveler_Geo,
    ["Traveler (Hydro)"]: Traveler_Hydro,
    ["Venti"]: Venti,
    ["Wanderer"]: Wanderer,
    ["Wriothesley"]: Wriothesley,
    ["Xiangling"]: Xiangling,
    ["Xianyun"]: Xianyun,
    ["Xiao"]: Xiao,
    ["Xingqiu"]: Xingqiu,
    ["Xinyan"]: Xinyan,
    ["Yae Miko"]: Yae_Miko,
    ["Yanfei"]: Yanfei,
    ["Yaoyao"]: Yaoyao,
    ["Yelan"]: Yelan,
    ["Yoimiya"]: Yoimiya,
    ["Yun Jin"]: Yun_Jin,
    ["Zhongli"]: Zhongli,
    index: ["Albedo", "Alhaitham", "Aloy", "Amber", "Arlecchino", "Ayaka", "Ayato", "Baizhu", "Barbara", "Beidou", "Bennett",
        "Candace", "Charlotte", "Chevreuse", "Chiori", "Chongyun", "Clorinde", "Collei", "Cyno", "Dehya", "Diluc", "Diona", "Dori",
        "Emilie", "Eula", "Faruzan", "Fischl", "Freminet", "Furina", "Gaming", "Ganyu", "Gorou", "Heizou", "Hu Tao", "Itto", "Jean",
        "Kachina", "Kaeya", "Kaveh", "Kazuha", "Keqing", "Kirara", "Klee", "Kokomi", "Kuki", "Layla", "Lisa", "Lynette", "Lyney", "Mika", "Mona", "Mualani", "Nahida", "Navia", "Neuvillette", "Nilou", "Ningguang", "Noelle",
        "Qiqi", "Raiden", "Razor", "Rosaria", "Sara", "Sayu", "Sethos", "Shenhe", "Sigewinne", "Sucrose", "Tartaglia", "Thoma", "Tighnari", "Traveler (Anemo)",
        "Traveler (Dendro)", "Traveler (Electro)", "Traveler (Geo)", "Traveler (Hydro)", "Venti", "Wanderer", "Wriothesley", "Xiangling", "Xianyun", "Xiao", "Xingqiu",
        "Xinyan", "Yae Miko", "Yanfei", "Yaoyao", "Yelan", "Yoimiya", "Yun Jin", "Zhongli"]
};
