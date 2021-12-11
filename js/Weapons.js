const AquilaFavonia = {
    name: "Aquila Favonia",
    src: "Weapons/Aquila_Favonia.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack48",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "PhysicalDMGBonus",
        startValue: "9%",
        Value: function () {
            return getSubStat(this);
        }
    },
    passiveName: "Falcon's Defiance",
    passive: function(){return [{Type:"ATK%",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardBlade = {
    name: "Skyward Blade",
    src: "Weapons/Skyward_Blade.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "12%",
        Value: function () {
            return getSubStat(this);
        }
    },
    passiveName: "Sky-Piercing Fang",
    passive: function(){return[{Type:"CritRate",Value:4}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();


function getSubStat(weapon) {

    let lvl = "Lv";
    for (let index = 0; index < weapon.Parent.level.length - 1; index++) {
        lvl = lvl + weapon.Parent.level[index];

    }

    return subStatScaling[weapon.startValue][lvl];

}

function GetBaseAttack(weapon) {
    return baseAttack[weapon.baseAttackType][weapon.level];
}

const MistsplitterReforged = {
    name: "Mistsplitter Reforged",
    src: "Weapons/Mistsplitter_Reforged.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack48",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "9.6%b",
        Value: function () {
            return getSubStat(this);
        }
    },
    passiveStacks: 0,
    passive: function(){
    return [{Type:"ElementalDMG",Value:12},{Type:"ElementalDMG",Value:17.3}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();




function GetBaseAttack(weapon) {
    return baseAttack[weapon.baseAttackType][weapon.level];
}
const AllWeapons = {
    ["Aquila Favonia"]: AquilaFavonia,
    ["Skyward Blade"]: SkywardBlade,
    ["Mistsplitter Reforged"]: MistsplitterReforged,
    index: ["Aquila Favonia", "Skyward Blade", "Mistsplitter Reforged"]
}