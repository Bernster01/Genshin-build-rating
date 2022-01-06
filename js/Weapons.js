//#region Swords 

const AmenomaKageuchi = {
    name: "Amenoma Kageuchi",
    src: "Weapons/Amenoma_Kageuchi.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "12%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"EnergyRecharge",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

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
  
    passive: function(){return [{Type:"ATK%",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const BlackcliffLongsword = {
    name: "Blackcliff Longsword",
    src: "Weapons/Blackcliff_Longsword.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:64}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const CinnabarSpindle = {
    name: "Cinnabar Spindle",
    src: "Weapons/Cinnabar_Spindle.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "DEF%",
        startValue: "15%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"Special",Value:80}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusSword = {
    name: "Favonius Sword",
    src: "Weapons/Favonius_Sword.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "13.3%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"EnergyRecharge",Value:80}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const FesteringDesire = {
    name: "Festering Desire",
    src: "Weapons/Festering_Desire.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "10.0%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"Special",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FreedomSworn = {
    name: "Freedom-Sworn",
    src: "Weapons/Freedom_Sworn.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ElementalMastery",
        startValue: "43",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"BonusDMG%",Value:10},{Type:"ATK%",Value:20},{Type:"BasicAttack",Value:16}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const HarbingerOfDawn = {
    name: "Harbinger of Dawn",
    src: "Weapons/Harbinger_of_Dawn.png",
    weaponType: "Sword",
    rarity: 3,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack39",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "10.2%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"CritRate",Value:28}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const IronSting = {
    name: "Iron Sting",
    src: "Weapons/Iron_Sting.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ElementalMastery",
        startValue: "36",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"BonusDMG%",Value:24}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LionsRoar = {
    name: "Lion's Roar",
    src: "Weapons/Iron_Sting.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "9%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"BonusDMG%",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

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

const PrimordialJadeCutter = {
    name: "Primordial Jade Cutter",
    src: "Weapons/Primordial_Jade_Cutter.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "9.6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"BonusDMG%",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeRancour = {
    name: "Prototype Rancour",
    src: "Weapons/Prototype_Rancour.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "PhysicalDMGBonus",
        startValue: "7.5%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:24},{Type:"DEF%",Value:24}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalLongsword = {
    name: "Royal Longsword",
    src: "Weapons/Royal_Longsword.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "9%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"CritRate",Value:24}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialSword = {
    name: "Sacrificial Sword",
    src: "Weapons/Sacrificial_Sword.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "13.3%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"Special",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SummitShaper = {
    name: "Summit Shaper",
    src: "Weapons/Summit_Shaper.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "10.8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ShieldStrength",Value:20},{Type:"ATK%",Value:40}]},
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
    passive: function(){return[{Type:"CritRate",Value:4}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SwordOfDescension = {
    name: "Sword of Descension",
    src: "Weapons/Sword_of_Descension.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack39",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "7.7%",
        Value: function () {
            return getSubStat(this);
        }
    },
    passive: function(){return[{Type:"Special",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheAlleyFlash = {
    name: "The Alley Flash",
    src: "Weapons/The_Alley_Flash.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack45",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ElementalMastery",
        startValue: "12",
        Value: function () {
            return getSubStat(this);
        }
    },
    passive: function(){return[{Type:"BonusDMG%",Value:24}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheBlackSword = {
    name: "The Black Sword",
    src: "Weapons/The_Black_Sword.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    passive: function(){return[{Type:"NormalAttack",Value:40},{Type:"ChargedAttack",Value:40}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheFlute = {
    name: "The Flute",
    src: "Weapons/The_Flute.png",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "9%",
        Value: function () {
            return getSubStat(this);
        }
    },
    passive: function(){return[{Type:"Special",Value:null}]},
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
//#endregion

function GetBaseAttack(weapon) {
    return baseAttack[weapon.baseAttackType][weapon.level];
}

const AllWeapons = {
    ["Amenoma Kageuchi"]: AmenomaKageuchi,
    ["Aquila Favonia"]: AquilaFavonia,
    ["Blackcliff Longsword"]: BlackcliffLongsword,
    ["Cinnabar Spindle"]:CinnabarSpindle,
    ["Favonius Sword"]:FavoniusSword,
    ["Festering Desire"]:FesteringDesire,
    ["Freedom-Sworn"]:FreedomSworn,
    ["Harbinger of Dawn"]:HarbingerOfDawn,
    ["Iron Sting"]:IronSting,
    ["Lion's Roar"]:LionsRoar,
    ["Mistsplitter Reforged"]: MistsplitterReforged,
    ["Primordial Jade Cutter"]:PrimordialJadeCutter,
    ["Prototype Rancour"]:PrototypeRancour,
    ["Royal Longsword"]:RoyalLongsword,
    ["Sacrifical Sword"]:SacrificialSword,
    ["Skyward Blade"]: SkywardBlade,
    ["Summit Shaper"]:SummitShaper,
    ["Sword of Descension"]:SwordOfDescension,
    ["The Alley Flash"]:TheAlleyFlash,
    ["The Flute"]:TheFlute,
    index:[
        "Amenoma Kageuchi",
        "Aquila Favonia",
        "Blackcliff Longsword",
        "Cinnabar Spindle",
        "Favonius Sword",
        "Festering Desire",
        "Freedom-Sworn",
        "Harbinger of Dawn",
        "Iron Sting",
        "Lion's Roar",
        "Mistsplitter Reforged",
        "Primordial Jade Cutter",
        "Prototype Rancour",
        "Royal Longsword",
        "Sacrifical Sword",
        "Skyward Blade",
        "Summit Shaper",
        "Sword of Descension",
        "The Alley Flash",
        "The Flute",
        
    ],
    ["Sword"]:[
        "Amenoma Kageuchi",
        "Aquila Favonia",
        "Blackcliff Longsword",
        "Cinnabar Spindle",
        "Favonius Sword",
        "Festering Desire",
        "Freedom-Sworn",
        "Harbinger of Dawn",
        "Iron Sting",
        "Lion's Roar",
        "Mistsplitter Reforged",
        "Primordial Jade Cutter",
        "Prototype Rancour",
        "Royal Longsword",
        "Sacrifical Sword",
        "Skyward Blade",
        "Summit Shaper",
        "Sword of Descension",
        "The Alley Flash",
        "The Flute",
        
    ],
}