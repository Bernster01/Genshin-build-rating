let AquilaFavonia = {
name: "Aquila Favonia",
src: "Weapons/Aquila_Favonia.png",
weaponType: "Sword",
rarity: 5,
level: "1b",
characterEquiping: null,
baseAttackType: "baseAttack48",
baseAttack: function(){
    return GetBaseAttack(this);},
subStat: {
    type: "PhysicalDMGBonus",
    startValue:"9%",
    value: function(){
        return getSubStat(this);
    }
},
passiveName: "Falcon's Defiance",
passive: FalconsDefiance(this.characterEquiping),
Init:function(){
    this.subStat.Parent = this;
    delete this.Init;
    return this;
}
}.Init();
let SkywarBlade = {
    name: "Slyward Blade",
    src: "Weapons/Skyward_Blade.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function(){
        return GetBaseAttack(this);},
    subStat: {
        type: "EnergyRecharge",
        startValue:"12%",
        value: function(){
            return getSubStat(this);
        }
    },
    passiveName: "Sky-Piercing Fang",
    passive: SkyPiercingFang(this.characterEquiping),
    Init:function(){
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
    }.Init();


function getSubStat(weapon){
    if(weapon.Parent.level =="1b"){
        return weapon.startValue;
    }
    else{
    let lvl = "Lv";
    for (let index = 0; index < weapon.Parent.level.length-1; index++) {
        lvl = lvl + weapon.Parent.level[index];
        
    }
    
    return subStatScaling[weapon.startValue][lvl];
}
}

function GetBaseAttack(weapon){
    return baseAttack[weapon.baseAttackType][weapon.level];
}