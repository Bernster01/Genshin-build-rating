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
    
    passive: function(){return [{Type:"",Value:null}]},
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

const HaranGeppakuFutsu = {
    name: "Haran Geppaku Futsu",
    src: "Weapons/Haran_Geppaku_Futsu.png",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "7.2%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"AddativeBonusDMG",Value:12}]},
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
    name: "Lions Roar",
    src: "Weapons/Lions_Roar.png",
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
    return [{Type:"ElementalDMG",Value:12}]},
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
    baseAttackType: "baseAttack44b",
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
    
    passive: function(){return [{Type:"HP%",Value:20}]},
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
    
    passive: function(){return [{Type:"",Value:null}]},
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


//#endregion

//#region Bows
const AlleyHunter = {
    name: "Alley Hunter",
    src: "Weapons/Alley_Hunter.png",
    weaponType: "Bow",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"BonusDMG%",Value:40}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const AmosBow = {
    name: "Amos Bow",
    src: "Weapons/Amos_Bow.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"NormalAttack",Value:52},{Type:"ChargedAttack",Value:52}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const BlackcliffWarbow = {
    name: "Blackcliff Warbow",
    src: "Weapons/Blackcliff_Warbow.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"ATK%",Value:56}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const CompoundBow = {
    name: "Compound Bow",
    src: "Weapons/Compound_Bow.png",
    weaponType: "Bow",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "PhysicalDMGBonus",
        startValue: "15%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ChargedAttack",Value:32},{Type:"NormalAttack",Value:35.072}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const ElegyForTheEnd = {
    name: "Elegy for the End",
    src: "Weapons/Elegy_for_the_End.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"ElementalMastery",Value:180},{Type:"ATK",Value:7}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusWarbow = {
    name: "Favonius Warbow",
    src: "Weapons/Favonius_Warbow.png",
    weaponType: "Bow",
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

const Hamayumi = {
    name: "Hamayumi",
    src: "Weapons/Hamayumi.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"NormalAttack",Value:64},{Type:"ChargedAttack",Value:48}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MitternachtsWaltz = {
    name: "Mitternachts Waltz",
    src: "Weapons/Mitternachts_Waltz.png",
    weaponType: "Bow",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "PhysicalDMGBonus",
        startValue: "11.3%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"NormalAttack",Value:40},{Type:"ATK%",Value:40}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MouunsMoon = {
    name: "Mouuns Moon",
    src: "Weapons/Mouuns_Moon.png",
    weaponType: "Bow",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalBurst",Value:65}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PolarStar = {
    name: "Polar Star",
    src: "Weapons/Polar_Star.png",
    weaponType: "Bow",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "7.2%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalBurst",Value:12},{Type:"ElementalSkill",Value:12},{Type:"ATK%",Value:27}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Predator = {
    name: "Predator",
    src: "Weapons/Predator.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"Special",Value:0}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeCrescent = {
    name: "Prototype Crescent",
    src: "Weapons/Prototype_Crescent.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"ATK%",Value:72}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalBow = {
    name: "Royal Bow",
    src: "Weapons/Royal_Bow.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"CritRate",Value:25}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Rust = {
    name: "Rust",
    src: "Weapons/Rust.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"NormalAttack",Value:80},{Type:"ChargedAttack",Value:-10}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialBow = {
    name: "Sacrificial Bow",
    src: "Weapons/Sacrificial_Bow.png",
    weaponType: "Bow",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "6.7%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardHarp = {
    name: "Skyward Harp",
    src: "Weapons/Skyward_Harp.png",
    weaponType: "Bow",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack48",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "4.8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"CritDMG",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheStringless = {
    name: "The Stringless",
    src: "Weapons/The_Stringless.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"ElementalSkill",Value:48},{Type:"ElementalBurst",Value:48}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheViridescentHunt = {
    name: "The Viridescent Hunt",
    src: "Weapons/The_Viridescent_Hunt.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const ThunderingPulse = {
    name: "Thundering Pulse",
    src: "Weapons/Thundering_Pulse.png",
    weaponType: "Bow",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "14.4%",
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

const WindblumeOde = {
    name: "Windblume Ode",
    src: "Weapons/Windblume_Ode.png",
    weaponType: "Bow",
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
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();





//#endregion

//#region Catalyst

const BlackcliffAgate = {
    name: "Blackcliff Agate",
    src: "Weapons/Blackcliff_Agate.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "12%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:72}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const DodocoTales = {
    name: "Dodoco Tales",
    src: "Weapons/Dodoco_Tales.png",
    weaponType: "Catalyst",
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
    
    passive: function(){return [{Type:"ATK%",Value:16},{Type:"ChargedAttack",Value:32}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const EverlastingMoonglow = {
    name: "Everlasting Moonglow",
    src: "Weapons/Everlasting_Moonglow.png",
    weaponType: "Catalyst",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "HP%",
        startValue: "10.8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"HealingBonus",Value:10},{Type:"EnergyRecharge",Value:10}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const EyeOfPerception = {
    name: "Eye of Perception",
    src: "Weapons/Eye_of_Perception.png",
    weaponType: "Catalyst",
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
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusCodex = {
    name: "Favonius Codex",
    src: "Weapons/Favonius_Codex.png",
    weaponType: "Catalyst",
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
    
    passive: function(){return [{Type:"EnergyRecharge",Value:80}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Frostbearer = {
    name: "Frostbearer",
    src: "Weapons/Frostbearer.png",
    weaponType: "Catalyst",
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
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const HakushinRing = {
    name: "Hakushin Ring",
    src: "Weapons/Hakushin_Ring.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "6.7%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const KagurasVerity = {
    name: "Kaguras Verity",
    src: "Weapons/Kaguras_Verity.png",
    weaponType: "Catalyst",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "14.4%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LostPrayerToTheSacredWinds = {
    name: "Lost Prayer to the Sacred Winds",
    src: "Weapons/Lost_Prayer_to_the_Sacred_Winds.png",
    weaponType: "Catalyst",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "7.2%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalDMG",Value:32}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MappaMare = {
    name: "Mappa Mare",
    src: "Weapons/Mappa_Mare.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ElementalMastery",
        startValue: "24",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalDMG",Value:32}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MemoryOfDust = {
    name: "Memory of Dust",
    src: "Weapons/Memory_of_Dust.png",
    weaponType: "Catalyst",
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

const OathswornEye = {
    name: "Oathsworn Eye",
    src: "Weapons/Oathsworn_Eye.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeAmber = {
    name: "Prototype Amber",
    src: "Weapons/Prototype_Amber.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "HP%",
        startValue: "9%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"EnergyRecharge",Value:15},{Type:"TeamHealing",Value:6}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalGrimoire = {
    name: "Royal Grimoire",
    src: "Weapons/Royal_Grimoire.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"CritRate",Value:30}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialFragments = {
    name: "Sacrificial Fragments",
    src: "Weapons/SAcrificial_Fragments.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ElementalMastery",
        startValue: "48",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalSkill",Value:180}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardAtlas = {
    name: "Skyward Atlas",
    src: "Weapons/Skyward_Atlas.png",
    weaponType: "Catalyst",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack48",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "7.2%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalDMG",Value:12}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SolarPearl = {
    name: "Solar Pearl",
    src: "Weapons/Solar_Pearl.png",
    weaponType: "Catalyst",
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
    
    passive: function(){return [{Type:"ElementalBurst",Value:40},{Type:"ElementalSkill",Value:40},{Type:"NormalAttack",Value:40},{Type:"ChargedAttack",Value:40}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheWidsith = {
    name: "The Widsith",
    src: "Weapons/The_Widsith.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "12%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK",Value:60},{Type:"ElementalMastery",Value:240},{Type:"ElementalDMG",Value:48}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const ThrillingTalesOfDragonSlayers = {
    name: "Thrilling Tales of Dragon Slayers",
    src: "Weapons/Thrilling_Tales_of_Dragon_Slayers.png",
    weaponType: "Catalyst",
    rarity: 3,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack39",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "HP%",
        startValue: "7.7%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"TeamATKBuff",Value:48}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WineAndSong = {
    name: "Wine and Song",
    src: "Weapons/Wine_and_Song.png",
    weaponType: "Catalyst",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "6.7%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:40}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

//#endregion

//#region Claymore

const Akuoumaru = {
    name: "Akuoumaru",
    src: "Weapons/Akuoumaru.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"ElementalBurst",Value:65}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const BlackcliffSlasher = {
    name: "Blackcliff Slasher",
    src: "Weapons/Blackcliff_Slasher.png",
    weaponType: "Claymore",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "12%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:72}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusGreatsword = {
    name: "Favonius Greatsword",
    src: "Weapons/Favonius_Greatsword.png",
    weaponType: "Claymore",
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

const KatsuragikiriNagamasa = {
    name: "Katsuragikiri Nagamasa",
    src: "Weapons/Katsuragikiri_Nagamasa.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"EnergyRecharge",Value:10},{Type:"ElementalSkill",Value:12}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LithicBlade = {
    name: "Lithic Blade",
    src: "Weapons/Lithic_Blade.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"ATK%",Value:22},{Type:"CritRate",Value:14}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LuxuriousSeaLord = {
    name: "Luxurious Sea-Lord",
    src: "Weapons/Luxurious_Sea_lord.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"ElementalBurst",Value:24}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeArchaic = {
    name: "Prototype Archaic",
    src: "Weapons/Prototype_Archaic.png",
    weaponType: "Claymore",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Rainslasher = {
    name: "Rainslasher",
    src: "Weapons/Rainslasher.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"EnergyRcharge",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RedhornStonethresher = {
    name: "Redhorn Stonethresher",
    src: "Weapons/Redhorn_Stonethresher.png",
    weaponType: "Claymore",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44b",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "19.2%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"DEF%",Value:28}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalGreatsword = {
    name: "Royal Greatsword",
    src: "Weapons/Royal_Greatsword.png",
    weaponType: "Claymore",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"CritRate",Value:30}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialGreatsword = {
    name: "Sacrificial Greatsword",
    src: "Weapons/Sacrificial_Greatsword.png",
    weaponType: "Claymore",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "6.7%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SerpentSpine = {
    name: "Serpent Spine",
    src: "Weapons/Serpent_Spine.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"BonusDMG%",Value:50}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardPride = {
    name: "Skyward Pride",
    src: "Weapons/Skyward_Pride.png",
    weaponType: "Claymore",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack48",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"BonusDMG%",Value:8}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SnowTombedStarSilver = {
    name: "Snow-Tombed Starsilver",
    src: "Weapons/Snow_Tombed_Starsilver.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SongOfBrokenPines = {
    name: "Song of Broken Pines",
    src: "Weapons/Song_of_Broken_Pines.png",
    weaponType: "Claymore",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack49",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "PhysicalDMGBonus",
        startValue: "4.5%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:36},{Type:"NormalAttack",Value:12}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheBell = {
    name: "The Bell",
    src: "Weapons/The_Bell.png",
    weaponType: "Claymore",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "HP%",
        startValue: "9%",
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

const TheUnforged = {
    name: "The Unforged",
    src: "Weapons/The_Unforged.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"ShieldStrength",Value:20},{Type:"ATK%",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Whiteblind = {
    name: "Whiteblind",
    src: "Weapons/Whiteblind.png",
    weaponType: "Claymore",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "DEF%",
        startValue: "11.3%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:48},{Type:"DEF%",Value:48}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WolfsGravestone = {
    name: "Wolf&#39s Gravestone",
    src: "Weapons/Wolfs_Gravestone.png",
    weaponType: "Claymore",
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
    
    passive: function(){return [{Type:"ATK%",Value:20},{Type:"ATK%",Value:13.3}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();


//#endregion

//#region Polearm

const BlackTassel = {
    name: "Black Tassel",
    src: "Weapons/Black_Tassel.png",
    weaponType: "Polearm",
    rarity: 3,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack38",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "HP%",
        startValue: "10.2%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const BlackcliffPole = {
    name: "Blackcliff Pole",
    src: "Weapons/Blackcliff_Pole.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack42",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "12%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:72}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const CalamityQueller = {
    name: "Calamity Queller",
    src: "Weapons/Calamity_Queller.png",
    weaponType: "Polearm",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack49",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "3.6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalDMG",Value:12},{Type:"ATK%",Value:19.2}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const CrescentPike = {
    name: "Crescent Pike",
    src: "Weapons/Crescent_Pike.png",
    weaponType: "Polearm",
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
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Deathmatch = {
    name: "Deathmatch",
    src: "Weapons/Deathmatch.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:32},{Type:"DEF%",Value:32}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const DragonsBane = {
    name: "Dragons Bane",
    src: "Weapons/Dragons_Bane.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ElementalMastery",
        startValue: "48",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const DragonspineSpear = {
    name: "Dragonspine Spear",
    src: "Weapons/Dragonspine_Spear.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "PhysicalDMGBonus",
        startValue: "15%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const EngulfingLightning = {
    name: "Engulfing Lightning",
    src: "Weapons/Engulfing_Lightning.png",
    weaponType: "Polearm",
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
    
    passive: function(){return [{Type:"",Value:null}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusLance = {
    name: "Favonius Lance",
    src: "Weapons/Favonius_Lance.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "6.7%",
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

const KitainCrossSpear = {
    name: "Kitain Cross Spear",
    src: "Weapons/Kitain_Cross_Spear.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ElementalMastery",
        startValue: "24",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalSkill",Value:12},{Type:"EnergyRecharge",Value:10}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LithicSpear = {
    name: "Lithic Spear",
    src: "Weapons/Lithic_Spear.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:22},{Type:"CritRate",Value:14}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrimordialJadeWingedSpear = {
    name: "Primordial Jade Winged-Spear",
    src: "Weapons/Primordial_Jade_Winged_Spear.png",
    weaponType: "Polearm",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack48",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "4.8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ATK%",Value:18},{Type:"BonusDMG%",Value:8}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeStarglitter = {
    name: "Prototype Starglitter",
    src: "Weapons/Prototype_Starglitter.png",
    weaponType: "Polearm",
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
    
    passive: function(){return [{Type:"NormalAttack",Value:26},{Type:"ChargedAttack",Value:26}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalSpear = {
    name: "Royal Spear",
    src: "Weapons/Royal_Spear.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "6%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"CritRate",Value:30}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardSpine = {
    name: "Skyward Spine",
    src: "Weapons/Skyward_Spine.png",
    weaponType: "Polearm",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack48",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "EnergyRecharge",
        startValue: "8%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"CritRate",Value:8},{Type:"NormalAttack",Value:12}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const StaffOfHoma = {
    name: "Staff of Homa",
    src: "Weapons/Staff_of_Homa.png",
    weaponType: "Polearm",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack46",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritDMG",
        startValue: "14.4%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"HP%",Value:20}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheCatch = {
    name: "The Catch",
    src: "Weapons/The_Catch.png",
    weaponType: "Polearm",
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
    
    passive: function(){return [{Type:"ElementalBurst",Value:32}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const VortexVanquisher = {
    name: "Vortex Vanquisher",
    src: "Weapons/Vortex_Vanquisher.png",
    weaponType: "Polearm",
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

const WavebreakersFin = {
    name: "Wavebreakers Fin",
    src: "Weapons/Wavebreakers_Fin.png",
    weaponType: "Polearm",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack45",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "ATK%",
        startValue: "3.0%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"ElementalBurst",Value:65}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WhiteTassel = {
    name: "White Tassel",
    src: "Weapons/White_Tassel.png",
    weaponType: "Polearm",
    rarity: 3,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack39",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "5.1%",
        Value: function () {
            return getSubStat(this);
        }
    },
    
    passive: function(){return [{Type:"NormalAttack",Value:48}]},
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

//#endregion


function GetBaseAttack(weapon) {
    return baseAttack[weapon.baseAttackType][weapon.level];
}
function getSubStat(weapon) {

    let lvl = "Lv";
    for (let index = 0; index < weapon.Parent.level.length - 1; index++) {
        lvl = lvl + weapon.Parent.level[index];

}
// console.log(lvl,weapon);
    return subStatScaling[weapon.startValue][lvl];

}
const AllWeapons = {
    ["Alley Hunter"]:AlleyHunter,
    ["Akuoumaru"]:Akuoumaru,
    ["Amenoma Kageuchi"]: AmenomaKageuchi,
    ["Amos Bow"]:AmosBow,
    ["Aquila Favonia"]: AquilaFavonia,
    ["Black Tassel"]:BlackTassel,
    ["Blackcliff Agate"]:BlackcliffAgate,
    ["Blackcliff Longsword"]: BlackcliffLongsword,
    ["Blackcliff Pole"]:BlackcliffPole,
    ["Blackcliff Slasher"]:BlackcliffSlasher,
    ["Blackcliff Warbow"]:BlackcliffWarbow,
    ["Calamity Queller"]:CalamityQueller,
    ["Cinnabar Spindle"]:CinnabarSpindle,
    ["Crescent Pike"]:CrescentPike,
    ["Compound Bow"]:CompoundBow,
    ["Deathmatch"]:Deathmatch,
    ["Dodoco Tales"]:DodocoTales,
    ["Dragons Bane"]:DragonsBane,
    ["Dragonspine Spear"]:DragonspineSpear,
    ["Elegy for the End"]:ElegyForTheEnd,
    ["Engulfing Lightning"]:EngulfingLightning,
    ["Everlasting Moonglow"]:EverlastingMoonglow,
    ["Eye of Perception"]:EyeOfPerception,
    ["Favonius Codex"]:FavoniusCodex,
    ["Favonius Greatsword"]:FavoniusGreatsword,
    ["Favonius Lance"]:FavoniusLance,
    ["Favonius Sword"]:FavoniusSword,
    ["Favonius Warbow"]:FavoniusWarbow,
    ["Festering Desire"]:FesteringDesire,
    ["Freedom-Sworn"]:FreedomSworn,
    ["Frostbearer"]:Frostbearer,
    ["Hakushin Ring"]:HakushinRing,
    ["Hamayumi"]:Hamayumi,
    ["Haran Geppaku Futsu"]:HaranGeppakuFutsu,
    ["Harbinger of Dawn"]:HarbingerOfDawn,
    ["Iron Sting"]:IronSting,
    ["Kaguras Verity"]:KagurasVerity,
    ["Katsuragikiri Nagamasa"]:KatsuragikiriNagamasa,
    ["Kitain Cross Spear"]:KitainCrossSpear,
    ["Lions Roar"]:LionsRoar,
    ["Lithic Blade"]:LithicBlade,
    ["Lithic Spear"]:LithicSpear,
    ["Lost Prayer to the Sacred Winds"]:LostPrayerToTheSacredWinds,
    ["Luxurious Sea-Lord"]:LuxuriousSeaLord,
    ["Mappa Mare"]:MappaMare,
    ["Memory of Dust"]:MemoryOfDust,
    ["Mistsplitter Reforged"]: MistsplitterReforged,
    ["Mitternachts Waltz"]:MitternachtsWaltz,
    ["Mouuns Moon"]:MouunsMoon,
    ["Oathsworn Eye"]:OathswornEye,
    ["Polar Star"]: PolarStar,
    ["Predator"]:Predator,
    ["Primordial Jade Cutter"]:PrimordialJadeCutter,
    ["Primordial Jade Winged-Spear"]:PrimordialJadeWingedSpear,
    ["Prototype Amber"]:PrototypeAmber,
    ["Prototype Archaic"]:PrototypeArchaic,
    ["Prototype Crescent"]:PrototypeCrescent,
    ["Prototype Rancour"]:PrototypeRancour,
    ["Prototype Starglitter"]:PrototypeStarglitter,
    ["Rainslasher"]:Rainslasher,
    ["Redhorn Stonethresher"]:RedhornStonethresher,
    ["Royal Bow"]:RoyalBow,
    ["Royal Greatsword"]:RoyalGreatsword,
    ["Royal Grimoire"]:RoyalGrimoire,
    ["Royal Longsword"]:RoyalLongsword,
    ["Royal Spear"]:RoyalSpear,
    ["Rust"]:Rust,
    ["Sacrificial Bow"]:SacrificialBow,
    ["Sacrificial Fragments"]:SacrificialFragments,
    ["Sacrificial Greatsword"]:SacrificialGreatsword,
    ["Sacrificial Sword"]:SacrificialSword,
    ["Serpent Spine"]:SerpentSpine,
    ["Skyward Atlas"]:SkywardAtlas,
    ["Skyward Blade"]: SkywardBlade,
    ["Skyward Harp"]:SkywardHarp,
    ["Skyward Pride"]:SkywardPride,
    ["Skyward Spine"]:SkywardSpine,
    ["Snow-Tombed Starsilver"]:SnowTombedStarSilver,
    ["Solar Pearl"]:SolarPearl,
    ["Song of Broken Pines"]:SongOfBrokenPines,
    ["Staff of Homa"]:StaffOfHoma,
    ["Summit Shaper"]:SummitShaper,
    ["Sword of Descension"]:SwordOfDescension,
    ["The Alley Flash"]:TheAlleyFlash,
    ["The Catch"]:TheCatch,
    ["The Bell"]:TheBell,
    ["The Flute"]:TheFlute,
    ["The Stringless"]:TheStringless,
    ["The Unforged"]:TheUnforged,
    ["The Viridescent Hunt"]:TheViridescentHunt,
    ["The Widsith"]:TheWidsith,
    ["Thrilling Tales of Dragon Slayers"]:ThrillingTalesOfDragonSlayers,
    ["Thundering Pulse"]:ThunderingPulse,
    ["Vortex Vanquisher"]:VortexVanquisher,
    ["Wavebreakers Fin"]:WavebreakersFin,
    ["White Tassel"]:WhiteTassel,
    ["Whiteblind"]:Whiteblind,
    ["Windblume Ode"]:WindblumeOde,
    ["Wine and Song"]:WineAndSong,
    ["Wolf's Gravestone"]:WolfsGravestone,
    index:[
        "Akuoumaru",
        "Alley Hunter",
        "Amenoma Kageuchi",
        "Amos Bow",
        "Aquila Favonia",
        "Black Tassel",
        "Blackcliff Agate",
        "Blackcliff Longsword",
        "Blackcliff Pole",
        "Blackcliff Slasher",
        "Blackcliff Warbow",
        "Calamity Queller",
        "Cinnabar Spindle",
        "Crescent Pike",
        "Compound Bow",
        "Deathmatch",
        "Dodoco Tales",
        "Dragons Bane",
        "Dragonspine Spear",
        "Elegy for the End",
        "Engulfing Lightning",
        "Everlasting Moonglow",
        "Eye of Preception",
        "Favonius Codex",
        "Favonius Greatsword",
        "Favonius Lance",
        "Favonius Sword",
        "Favonius Warbow",
        "Festering Desire",
        "Freedom-Sworn",
        "Frostbearer",
        "Hakushin Ring",
        "Hamayumi",
        "Haran Geppaku Futsu",
        "Harbinger of Dawn",
        "Iron Sting",
        "Kaguras Verity",
        "Katsuragikiri Nagamasa",
        "Kitain Cross Spear",
        "Lions Roar",
        "Lithic Blade",
        "Lithic Spear",
        "Lost Prayer to the Sacred Winds",
        "Luxurious Sea-Lord",
        "Mappa Mare",
        "Memory of Dust",
        "Mistsplitter Reforged",
        "Mitternachts Waltz",
        "Mouuns Moon",
        "Oathsworn Eye",
        "Polar Star",
        "Predator",
        "Primordial Jade Cutter",
        "Primordial Jade Winged-Spear",
        "Prototype Amber",
        "Prototype Archaic",
        "Prototype Crescent",
        "Prototype Rancour",
        "Prototype Starglitter",
        "Rainslasher",
        "Redhorn Stonethresher",
        "Royal Bow",
        "Royal Greatsword",
        "Royal Grimoire",
        "Royal Longsword",
        "Royal Spear",
        "Rust",
        "Sacrificial Bow",
        "Sacrificial Fragments",
        "Sacrificial Greatsword",
        "Sacrificial Sword",
        "Serpent Spine",
        "Skyward Atlas",
        "Skyward Blade",
        "Skyward Harp",
        "Skyward Pride",
        "Skyward Spine",
        "Snow-Tombed Starsliver",
        "Solar Pearl",
        "Song of Broken Pines",
        "Staff of Homa",
        "Summit Shaper",
        "Sword of Descension",
        "The Alley Flash",
        "The Catch",
        "The Bell",
        "The Flute",
        "The Stringless",
        "The Unforged",
        "The Viridescent Hunt",
        "The Widsith",
        "Thrilling Tales of Dragon Slayers",
        "Thundering Pulse",
        "Vortex Vanquisher",
        "Wavebreakers Fin",
        "White Tassel",
        "Whiteblind",
        "Wine and Song",
        "Windblume Ode",
        "Wolf's Gravestone"
        
    ],
    ["Sword"]:[
        "Amenoma Kageuchi",
        "Aquila Favonia",
        "Blackcliff Longsword",
        "Cinnabar Spindle",
        "Favonius Sword",
        "Festering Desire",
        "Freedom-Sworn",
        "Haran Geppaku Futsu",
        "Harbinger of Dawn",
        "Iron Sting",
        "Lions Roar",
        "Mistsplitter Reforged",
        "Primordial Jade Cutter",
        "Prototype Rancour",
        "Royal Longsword",
        "Sacrificial Sword",
        "Skyward Blade",
        "Summit Shaper",
        "Sword of Descension",
        "The Alley Flash",
        "The Flute",
        
    ],
    ["Bow"]:[
        "Alley Hunter",
        "Amos Bow",
        "Blackcliff Warbow",
        "Compound Bow",
        "Elegy for the End",
        "Favonius Warbow",
        "Hamayumi",
        "Mitternachts Waltz",
        "Mouuns Moon",
        "Polar Star",
        "Predator",
        "Prototype Crescent",
        "Royal Bow",
        "Rust",
        "Sacrificial Bow",
        "Skyward Harp",
        "The Stringless",
        "The Viridescent Hunt",
        "Thundering Pulse",
        "Windblume Ode",
    ],
    ["Catalyst"]:[
        "Blackcliff Agate",
        "Dodoco Tales",
        "Everlasting Moonglow",
        "Eye of Perception",
        "Favonius Codex",
        "Frostbearer",
        "Hakushin Ring",
        "Kaguras Verity",
        "Lost Prayer to the Sacred Winds",
        "Mappa Mare",
        "Memory of Dust",
        "Oathsworn Eye",
        "Prototype Amber",
        "Royal Grimoire",
        "Sacrificial Fragments",
        "Skyward Atlas",
        "Solar Pearl",
        "The Widsith",
        "Thrilling Tales of Dragon Slayers",
        "Wine and Song"
    ],
    ["Claymore"]:[
        "Akuoumaru",
        "Blackcliff Slasher",
        "Favonius Greatsword",
        "Katsuragikiri Nagamasa",
        "Lithic Blade",
        "Luxurious Sea-Lord",
        "Prototype Archaic",
        "Rainslasher",
        "Redhorn Stonethresher",
        "Royal Greatsword",
        "Sacrificial Greatsword",
        "Serpent Spine",
        "Skyward Pride",
        "Snow-Tombed Starsilver",
        "Song of Broken Pines",
        "The Bell",
        "The Unforged",
        "Whiteblind",
        "Wolf's Gravestone"
    ],
    ["Polearm"]:[
        "Black Tassel",
        "Blackcliff Pole",
        "Calamity Queller",
        "Crescent Pike",
        "Deathmatch",
        "Dragons Bane",
        "Dragonspine Spear",
        "Engulfing Lightning",
        "Favonius Lance",
        "Kitain Cross Spear",
        "Lithic Spear",
        "Primordial Jade Winged-Spear",
        "Prototype Starglitter",
        "Royal Spear",
        "Skyward Spine",
        "Staff of Homa",
        "The Catch",
        "Vortex Vanquisher",
        "Wavebreakers Fin",
        "White Tassel"
        
    ]
}