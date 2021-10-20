function Artifact(type,mainstat,substat1,substat2,substat3,substat4){
    this.Type = type;
    this.Mainstat = mainstat;
    this.Substat1 = substat1;
    this.Substat2 = substat2;
    this.Substat3 = substat3;
    this.Substat4 = substat4;
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