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
    sequence: ["E", "Q", "N1", "N2", "N3", "N4", "N5", "C"],
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
        isReaction: false
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
        isReaction: false

    },
    normalAttack3: {
        Multiplier: function (level) {
            switch (level) {
                case 1:
                    return 47.45 / 100
                case 2:
                    return 51.32 / 100
                case 3:
                    return 55.18/ 100
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
        isReaction: false
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
        isReaction: false
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
        isReaction: false
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
                    return 146.25/ 100
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
        isReaction: false
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "PhysicalDMGBonus",
        isReaction: false
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
    sequence: ["N1", "Q", "E", "N1", "N2", "N3", "N4", "C"],
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
        isReaction: true
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
        isReaction: false


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
        isReaction: false
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
        isReaction: false
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
        isReaction: true
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
        isReaction: true
    },
    plungeAttack: {
        Multiplier: function (level) { return 0 },
        Element: "CryoDMGBonus",
        isReaction: true
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
        Value: 0.3
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
    element: "HydroCharacter"
};
const Beidou = {
    name: "Beidou",
    src: "Characters/Beidou.png",
    element: "ElectroCharacter"
};
const Bennett = {
    name: "Bennett",
    src: "Characters/Bennett.png",
    element: "PyroCharacter"
};
const Chongyun = {
    name: "Chongyun",
    src: "Characters/Chongyun.png",
    element: "CryoCharacter"
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
    element: "PyroCharacter"
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
    ["Hu_Tao"]: Hu_Tao,
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
        "Chongyun", "Diluc", "Diona", "Eula", "Fischl", "Ganyu", "Hu_Tao", "Jean",
        "Kaeya", "Kazuha", "Keqing", "Klee", "Lisa", "Mona", "Ningguang", "Noelle",
        "Qiqi", "Razor", "Rosaria", "Sayu", "Sucrose", "Tartaglia", "Traveler_Anemo",
        "Traveler_Electro", "Traveler_Geo", "Venti", "Xiangling", "Xiao", "Xingqiu",
        "Xinyan", "Yanfei", "Yoimiya", "Zhongli"]
};
