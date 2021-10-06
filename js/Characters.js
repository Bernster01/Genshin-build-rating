let Albedo = {
    name: "Albedo",
    src: "Characters/Albedo.png",
    element: "GeoCharacter"
};
let Amber = {
    name: "Amber",
    src: "Characters/Amber.png",
    element: "PyroCharacter"
};
let Ayaka ={
    name: "Ayaka",
    src: "Characters/Ayaka.png",
    element: "CryoCharacter",
    attack: 1000 ,
    stamina: 240,
    normalAttackTalent: 1,
    sequence:[],
    weaponType: "Sword",
    normalAttack1:{
        TalentLevel: 1,
        Multiplier:(45.73/100),
        AnimationTime:333
    },
    normalAttack2:{
        TalentLevel: 1,
        Multiplier:(48.68/100),
        AnimationTime:416
        
    },
    normalAttack3:{
        TalentLevel: 1,
        Multiplier:(62.62/100),
        AnimationTime:666
    },
    normalAttack4:{
        TalentLevel: 1,
        Multiplier:((22.65*3)/100),
        AnimationTime:333
    },
    normalAttack5:{
        TalentLevel: 1,
        Multiplier:(78.18/100),
        AnimationTime:1000
    },
    chargedAttack:{
        TalentLevel: 1,
        Multiplier:((55.13*3)/100),
        AnimationTime:1166,
        StaminaCost:20
    },
    plungeAttack:{
        TalentLevel: 1,
        Multiplier:(63.93/100),
        AnimationTime:500
    },
};
let Barbara ={
    name: "Barbara",
    src: "Characters/Barbara.png",
    element: "HydroCharacter"
};
let Beidou ={
    name: "Beidou",
    src: "Characters/Beidou.png",
    element: "ElectroCharacter"
};
let Bennett ={
    name: "Bennett",
    src: "Characters/Bennett.png",
    element: "PyroCharacter"
};
let Chongyun ={
    name: "Chongyun",
    src: "Characters/Chongyun.png",
    element: "CryoCharacter"
};
let Diluc ={
    name: "Diluc",
    src: "Characters/Diluc.png",
    element: "PyroCharacter"
};
let Diona ={
        name: "Diona",
        src: "Characters/Diona.png",
        element: "CryoCharacter"
};
let Eula ={
    name: "Eula",
    src: "Characters/Eula.png",
    element: "CryoCharacter"
};
let Fischl ={
    name: "Fischl",
    src: "Characters/Fischl.png",
    element: "ElectroCharacter"
};
let Ganyu ={
    name: "Ganyu",
    src: "Characters/Ganyu.png",
    element: "CryoCharacter"
};
let Hu_Tao ={
    name: "Hu Tao",
    src: "Characters/Hu Tao.png",
    element: "PyroCharacter"
};
let Jean ={
    name: "Jean",
    src: "Characters/Jean.png",
    element: "AnemoCharacter"
};
let Kaeya ={
    name: "Kaeya",
    src: "Characters/Kaeya.png",
    element: "CryoCharacter"
};
let Kazuha ={
    name: "Kazuha",
    src: "Characters/Kazuha.png",
    element: "AnemoCharacter"
};
let Keqing ={
    name: "Keqing",
    src: "Characters/Keqing.png",
    element: "ElectroCharacter"
};
let Klee ={
    name: "Klee",
    src: "Characters/Klee.png",
    element: "PyroCharacter"
};
let Lisa ={
    name: "Lisa",
    src: "Characters/Lisa.png",
    element: "ElectroCharacter"
};
let Mona ={
    name: "Mona",
    src: "Characters/Mona.png",
    element: "HydroCharacter"
};
let Ningguang ={
    name: "Ningguang",
    src: "Characters/Ningguang.png",
    element: "GeoCharacter"
};
let Noelle ={
    name: "Noelle",
    src: "Characters/Noelle.png",
    element: "GeoCharacter"
};
let Qiqi ={
    name: "Qiqi",
    src: "Characters/Qiqi.png",
    element: "CryoCharacter"
};
let Razor ={
    name: "Razor",
    src: "Characters/Razor.png",
    element: "ElectroCharacter"
};
let Rosaria ={
    name: "Rosaria",
    src: "Characters/Rosaria.png",
    element: "CryoCharacter"
};
let Sayu ={
    name: "Sayu",
    src: "Characters/Sayu.png",
    element: "AnemoCharacter"
};
let Sucrose ={
    name: "Sucrose",
    src: "Characters/Sucrose.png",
    element: "AnemoCharacter"
};
let Tartaglia ={
    name: "Tartaglia",
    src: "Characters/Tartaglia.png",
    element: "HydroCharacter"
};
let Traveler_Anemo ={
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "AnemoCharacter"
};
let Traveler_Electro ={
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "ElectroCharacter"
};
let Traveler_Geo ={
    name: "Traveler",
    src: "Characters/Traveler.png",
    element: "GeoCharacter"
};
let Venti ={
    name: "Venti",
    src: "Characters/Venti.png",
    element: "AnemoCharacter"
};
let Xiangling ={
    name: "Xiangling",
    src: "Characters/Xiangling.png",
    element: "AnemoCharacter"
};
let Xiao ={
    name: "Xiao",
    src: "Characters/Xiao.png",
    element: "AnemoCharacter"
};
let Xingqiu ={
    name: "Xingqiu",
    src: "Characters/Xingqiu.png",
    element: "HydroCharacter"
};
let Xinyan ={
    name: "Xinyan",
    src: "Characters/Xinyan.png",
    element: "PyroCharacter"
};
let Yanfei ={
    name: "Yanfei",
    src: "Characters/Yanfei.png",
    element: "PyroCharacter"
};
let Yoimiya ={
    name: "Yoimiya",
    src: "Characters/Yoimiya.png",
    element: "PyroCharacter"
};
let Zhongli ={
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