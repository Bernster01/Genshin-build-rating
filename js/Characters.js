const Albedo = {
    name: "Albedo",
    src: "Characters/Albedo.png",
    element: "GeoCharacter"
};
const Amber = {
    name: "Amber",
    src: "Characters/Amber.png",
    element: "PyroCharacter",
    advancedstats:{
        critRate: 5,
        critDMG:50,
        healingBonus:0,
        incomingHealingBonus:0,
        energyRecharge:100,
        cdReduction:0,
        shieldStrength:0, 
        elementalBonuses:[
            {Type:"PyroDMGBonus",Value: 0},
            {Type: "HydroDMGBonus",Value: 0},
            {Type:"DendroDMGBonus",Value: 0},
            {Type:"ElectroDMGBonus",Value: 0},
            {Type:"AnemoDMGBonus",Value: 0},
            {Type:"CryoDMGBonus",Value: 0},
            {Type:"GeoDMGBonus",Value: 0},
            {Type:"PhysicalDMGBonus",Value: 0}
   
       ]
        
    }
};
const Ayaka ={
    name: "Ayaka",
    src: "Characters/Ayaka.png",
    element: "CryoCharacter",
    level: "1b",
    baseAttack: function(){
        let baseattack ={
            ["1b"]:27,
            ["20b"]:69,
            ["20a"]:92,
            ["40b"]:138,
            ["40a"]:154,
            ["50b"]:177,
            ["50a"]:198,
            ["60b"]:222,
            ["60a"]:238,
            ["70b"]:262,
            ["70a"]:278,
            ["80b"]:302,
            ["80a"]:318,
            ["90b"]:342
        }
        return baseattack[this.level];
    },
    baseHP: function(){
        let baseHP ={
            ["1b"]:1001,
            ["20b"]:2597,
            ["20a"]:3455,
            ["40b"]:5170,
            ["40a"]:5779,
            ["50b"]:6649,
            ["50a"]:7462,
            ["60b"]:8341,
            ["60a"]:8951,
            ["70b"]:9838,
            ["70a"]:10448,
            ["80b"]:11345,
            ["80a"]:11954,
            ["90b"]:12858
        }
        return baseHP[this.level];
    },
    baseDEF: function(){
        let baseDEF ={
            ["1b"]:61,
            ["20b"]:158,
            ["20a"]:211,
            ["40b"]:315,
            ["40a"]:352,
            ["50b"]:405,
            ["50a"]:455,
            ["60b"]:509,
            ["60a"]:546,
            ["70b"]:600,
            ["70a"]:637,
            ["80b"]:692,
            ["80a"]:729,
            ["90b"]:784
        }
        return baseDEF[this.level];
    },
    elementalMastery: 0,
    advancedstats:{
        critRate: 5,
        critDMG:50,
        healingBonus:0,
        incomingHealingBonus:0,
        energyRecharge:100,
        cdReduction:0,
        shieldStrength:0, 
        elementalBonuses:[
            {Type:"PyroDMGBonus",Value: 0},
            {Type: "HydroDMGBonus",Value: 0},
            {Type:"DendroDMGBonus",Value: 0},
            {Type:"ElectroDMGBonus",Value: 0},
            {Type:"AnemoDMGBonus",Value: 0},
            {Type:"CryoDMGBonus",Value: 0},
            {Type:"GeoDMGBonus",Value: 0},
            {Type:"PhysicalDMGBonus",Value: 0}
   
       ]
        
    },
   
    scalingType:"ATK",
    normalAttackTalent: 1,
    elementalSkillTalent: 1,
    elementalBurstTalen: 1,
    energyOffset: 400,
    sequence:["N1","Q","E","N1","N2","N3","N4","C"],
    weaponType: "Sword",
    normalAttack1:{
        Multiplier:(45.73/100),
        Element:"CryoDMGBonus",
        isReaction: true
    },
    normalAttack2:{
        Multiplier:(48.68/100),
        Element:"CryoDMGBonus",
        isReaction: false
        
        
    },
    normalAttack3:{
        Multiplier:(62.62/100),
        Element:"CryoDMGBonus",
        isReaction: false
    },
    normalAttack4:{
        Multiplier:((22.65*3)/100),
        Element:"CryoDMGBonus",
        isReaction: false
    },
    normalAttack5:{
        Multiplier:(78.18/100),
        Element:"CryoDMGBonus",
        isReaction: true
    },
    chargedAttack:{
        Multiplier:((55.13*3)/100),
        Element:"CryoDMGBonus",
        isReaction: true
    },
    plungeAttack:{
        Multiplier:(63.93/100),
        Element:"CryoDMGBonus",
        isReaction: true
    },
    ascensionStat:function(){
            let values={["1b"]:0,
                ["20b"]:0,
                ["20a"]:0,
                ["40b"]:0,
                ["40a"]:9.6,
                ["50b"]:9.6,
                ["50a"]:19.2,
                ["60b"]:19.2,
                ["60a"]:19.2,
                ["70b"]:19.2,
                ["70a"]:28.8,
                ["80b"]:28.8,
                ["80a"]:38.4,
                ["90b"]:38.4}
            
            return {Type:"critDMG",Value:values[this.level]};
      
    },
    elementalSkill:null,
    elementalBurst:null,
    passive1:{
        Type:"ChargedAttack",
        Value:0.3
    },
    passive2:{
        Type:"CryoDMGBonus",
        Value:18
    },
    constellations:{
        Amount:0,
        constellation:function(){
            let allConstellations={
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
const Barbara ={
    name: "Barbara",
    src: "Characters/Barbara.png",
    element: "HydroCharacter"
};
const Beidou ={
    name: "Beidou",
    src: "Characters/Beidou.png",
    element: "ElectroCharacter"
};
const Bennett ={
    name: "Bennett",
    src: "Characters/Bennett.png",
    element: "PyroCharacter"
};
const Chongyun ={
    name: "Chongyun",
    src: "Characters/Chongyun.png",
    element: "CryoCharacter"
};
const Diluc ={
    name: "Diluc",
    src: "Characters/Diluc.png",
    element: "PyroCharacter"
};
const Diona ={
        name: "Diona",
        src: "Characters/Diona.png",
        element: "CryoCharacter"
};
const Eula ={
    name: "Eula",
    src: "Characters/Eula.png",
    element: "CryoCharacter"
};
const Fischl ={
    name: "Fischl",
    src: "Characters/Fischl.png",
    element: "ElectroCharacter"
};
const Ganyu ={
    name: "Ganyu",
    src: "Characters/Ganyu.png",
    element: "CryoCharacter"
};
const Hu_Tao ={
    name: "Hu Tao",
    src: "Characters/Hu Tao.png",
    element: "PyroCharacter"
};
const Jean ={
    name: "Jean",
    src: "Characters/Jean.png",
    element: "AnemoCharacter"
};
const Kaeya ={
    name: "Kaeya",
    src: "Characters/Kaeya.png",
    element: "CryoCharacter"
};
const Kazuha ={
    name: "Kazuha",
    src: "Characters/Kazuha.png",
    element: "AnemoCharacter"
};
const Keqing ={
    name: "Keqing",
    src: "Characters/Keqing.png",
    element: "ElectroCharacter"
};
const Klee ={
    name: "Klee",
    src: "Characters/Klee.png",
    element: "PyroCharacter"
};
const Lisa ={
    name: "Lisa",
    src: "Characters/Lisa.png",
    element: "ElectroCharacter"
};
const Mona ={
    name: "Mona",
    src: "Characters/Mona.png",
    element: "HydroCharacter"
};
const Ningguang ={
    name: "Ningguang",
    src: "Characters/Ningguang.png",
    element: "GeoCharacter"
};
const Noelle ={
    name: "Noelle",
    src: "Characters/Noelle.png",
    element: "GeoCharacter"
};
const Qiqi ={
    name: "Qiqi",
    src: "Characters/Qiqi.png",
    element: "CryoCharacter"
};
const Razor ={
    name: "Razor",
    src: "Characters/Razor.png",
    element: "ElectroCharacter"
};
const Rosaria ={
    name: "Rosaria",
    src: "Characters/Rosaria.png",
    element: "CryoCharacter"
};
const Sayu ={
    name: "Sayu",
    src: "Characters/Sayu.png",
    element: "AnemoCharacter"
};
const Sucrose ={
    name: "Sucrose",
    src: "Characters/Sucrose.png",
    element: "AnemoCharacter"
};
const Tartaglia ={
    name: "Tartaglia",
    src: "Characters/Tartaglia.png",
    element: "HydroCharacter"
};
const Traveler_Anemo ={
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "AnemoCharacter"
};
const Traveler_Electro ={
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "ElectroCharacter"
};
const Traveler_Geo ={
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "GeoCharacter"
};
const Venti ={
    name: "Venti",
    src: "Characters/Venti.png",
    element: "AnemoCharacter"
};
const Xiangling ={
    name: "Xiangling",
    src: "Characters/Xiangling.png",
    element: "AnemoCharacter"
};
const Xiao ={
    name: "Xiao",
    src: "Characters/Xiao.png",
    element: "AnemoCharacter"
};
const Xingqiu ={
    name: "Xingqiu",
    src: "Characters/Xingqiu.png",
    element: "HydroCharacter"
};
const Xinyan ={
    name: "Xinyan",
    src: "Characters/Xinyan.png",
    element: "PyroCharacter"
};
const Yanfei ={
    name: "Yanfei",
    src: "Characters/Yanfei.png",
    element: "PyroCharacter"
};
const Yoimiya ={
    name: "Yoimiya",
    src: "Characters/Yoimiya.png",
    element: "PyroCharacter"
};
const Zhongli ={
    name: "Zhongli",
    src: "Characters/Zhongli.png",
    element: "GeoCharacter"
};
const AllCharacters = [
    Albedo,
    Amber,
    Ayaka, 
    Barbara, 
    Beidou, 
    Bennett, 
    Chongyun, 
    Diluc, 
    Diona, 
    Eula, 
    Fischl, 
    Ganyu, 
    Hu_Tao, 
    Jean, 
    Kaeya, 
    Kazuha, 
    Keqing, 
    Klee, 
    Lisa, 
    Mona, 
    Ningguang, 
    Noelle, 
    Qiqi, 
    Razor, 
    Rosaria, 
    Sayu, 
    Sucrose, 
    Tartaglia, 
    Traveler_Anemo, 
    Traveler_Electro, 
    Traveler_Geo, 
    Venti, 
    Xiangling,
    Xiao,
    Xingqiu,
    Xinyan,
    Yanfei,
    Yoimiya,
    Zhongli
];
