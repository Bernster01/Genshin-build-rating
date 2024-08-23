//#region Swords 
const Absolution = {
    name: "Absolution",
    src: "Weapons/Weapon_Absolution.webp",
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
        startValue: "9.6%",
        Value: function () {
            return getSubStat(this);
        }
    },

    passive: function () { return [{ Type: "CritDMG", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const AmenomaKageuchi = {
    name: "Amenoma Kageuchi",
    src: "Weapons/Weapon_Amenoma_Kageuchi.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const AquilaFavonia = {
    name: "Aquila Favonia",
    src: "Weapons/Weapon_Aquila_Favonia.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const BlackcliffLongsword = {
    name: "Blackcliff Longsword",
    src: "Weapons/Weapon_Blackcliff_Longsword.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 64 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const CinnabarSpindle = {
    name: "Cinnabar Spindle",
    src: "Weapons/Weapon_Cinnabar_Spindle.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusSword = {
    name: "Favonius Sword",
    src: "Weapons/Weapon_Favonius_Sword.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 80 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FesteringDesire = {
    name: "Festering Desire",
    src: "Weapons/Weapon_Festering_Desire.webp",
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

    passive: function () { return [{ Type: "Special", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const FinaleoftheDeep = {
    name: "Finale of the Deep",
    src: "Weapons/Weapon_Finale_of_the_Deep.webp",
    weaponType: "Sword",
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

    passive: function () { return [{ Type: "ATK%", Value: 24 },] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const FleuveCendreFerryman = {
    name: "Fleuve Cendre Ferryman",
    src: "Weapons/Weapon_Fleuve_Cendre_Ferryman.webp",
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

    passive: function () { return [{ Type: "ElementalSkillCritRate", Value: 16 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const FluteofEzpitzal = {
    name: "Flute of Ezpitzal",
    src: "Weapons/Weapon_Flute_of_Ezpitzal.webp",
    weaponType: "Sword",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack41",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "DEF",
        startValue: "15%",
        Value: function () {
            return getSubStat(this);
        }
    },

    passive: function () { return [{ Type: "DEF%", Value: 32 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const FreedomSworn = {
    name: "Freedom-Sworn",
    src: "Weapons/Weapon_Freedom-Sworn.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 10 }, { Type: "ATK%", Value: 20 }, { Type: "BasicAttack", Value: 16 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const HaranGeppakuFutsu = {
    name: "Haran Geppaku Futsu",
    src: "Weapons/Weapon_Haran_Geppaku_Futsu.webp",
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

    passive: function () { return [{ Type: "AddativeBonusDMG", Value: 12 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const HarbingerOfDawn = {
    name: "Harbinger of Dawn",
    src: "Weapons/Weapon_Harbinger_of_Dawn.webp",
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

    passive: function () { return [{ Type: "CritRate", Value: 28 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const IronSting = {
    name: "Iron Sting",
    src: "Weapons/Weapon_Iron_Sting.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 24 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const KagotsurubeIsshin = {
    name: "Kagotsurube Isshin",
    src: "Weapons/Weapon_Kagotsurube_Isshin.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 15 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const KeyofKahjNisut = {
    name: "Key of Khaj-Nisut",
    src: "Weapons/Weapon_Key_of_Khaj-Nisut.webp",
    weaponType: "Sword",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44b",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "HP%",
        startValue: "14.4%",
        Value: function () {
            return getSubStat(this);
        }
    },

    passive: function () { return [{ Type: "HP%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const LionsRoar = {
    name: "Lions Roar",
    src: "Weapons/Weapon_Lions_Roar.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const LightofFoliarIncision = {
    name: "Light of Foliar Incision",
    src: "Weapons/Weapon_Light_of_Foliar_Incision.webp",
    weaponType: "Sword",
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

    passive: function () { return [{ Type: "CritRate", Value: 4 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MistsplitterReforged = {
    name: "Mistsplitter Reforged",
    src: "Weapons/Weapon_Mistsplitter_Reforged.webp",
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
    passive: function () {
        return [{ Type: "ElementalDMG", Value: 12 }]
    },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrimordialJadeCutter = {
    name: "Primordial Jade Cutter",
    src: "Weapons/Weapon_Primordial_Jade_Cutter.webp",
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

    passive: function () { return [{ Type: "HP%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeRancour = {
    name: "Prototype Rancour",
    src: "Weapons/Weapon_Prototype_Rancour.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 24 }, { Type: "DEF%", Value: 24 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalLongsword = {
    name: "Royal Longsword",
    src: "Weapons/Weapon_Royal_Longsword.webp",
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

    passive: function () { return [{ Type: "CritRate", Value: 24 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialSword = {
    name: "Sacrificial Sword",
    src: "Weapons/Weapon_Sacrificial_Sword.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const SapwoodBlade = {
    name: "Sapwood Blade",
    src: "Weapons/Weapon_Sapwood_Blade.webp",
    weaponType: "Sword",
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

    passive: function () { return [{ Type: "ElementalMastery", Value: 120 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const SplendorofTranquilWaters = {
    name: "Splendor of Tranquil Waters",
    src: "Weapons/Weapon_Splendor_of_Tranquil_Waters.webp",
    weaponType: "Sword",
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

    passive: function () { return [{ Type: "HP%", Value: 28 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const SummitShaper = {
    name: "Summit Shaper",
    src: "Weapons/Weapon_Summit_Shaper.webp",
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

    passive: function () { return [{ Type: "ShieldStrength", Value: 20 }, { Type: "ATK%", Value: 40 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();


const SkywardBlade = {
    name: "Skyward Blade",
    src: "Weapons/Weapon_Skyward_Blade.webp",
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
    passive: function () { return [{ Type: "CritRate", Value: 4 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SwordOfDescension = {
    name: "Sword of Descension",
    src: "Weapons/Weapon_Sword_of_Descension.webp",
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
    passive: function () { return [{ Type: "Special", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const SwordOfNarzissenkreuz = {
    name: "Sword of Narzissenkreuz",
    src: "Weapons/Weapon_Sword_of_Narzissenkreuz.webp",
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
    passive: function () { return [{ Type: "ATKBlast", Value: 320 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const TheAlleyFlash = {
    name: "The Alley Flash",
    src: "Weapons/Weapon_The_Alley_Flash.webp",
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
    passive: function () { return [{ Type: "BonusDMG%", Value: 24 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheBlackSword = {
    name: "The Black Sword",
    src: "Weapons/Weapon_The_Black_Sword.webp",
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
    passive: function () { return [{ Type: "NormalAttack", Value: 40 }, { Type: "ChargedAttack", Value: 40 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheDockhandsAssistant = {
    name: "The Dockhand&#39s Assistant",
    src: "Weapons/Weapon_The_Dockhands_Assistant.webp",
    weaponType: "Sword",
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
    passive: function () { return [{ Type: "ElementalMastery", Value: 240 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheFlute = {
    name: "The Flute",
    src: "Weapons/Weapon_The_Flute.webp",
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
    passive: function () { return [{ Type: "Special", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const ToukabouShigure = {
    name: "Toukabou Shigure",
    src: "Weapons/Weapon_Toukabou_Shigure.webp",
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
    passive: function () { return [{ Type: "BonusDMG%", Value: 32 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init()

const UrakuMisugiri = {
    name: "Uraku Misugiri",
    src: "Weapons/Weapon_Uraku-Misugiri.webp",
    weaponType: "Sword",
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
    passive: function () { return [{ Type: "NormalAttack", Value: 16, Source: "Uraku Misugiri" }, { Type: "ElementalSkill", Value: 24, Source: "Uraku Misugiri" }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WolfFang = {
    name: "Wolf-Fang",
    src: "Weapons/Weapon_Wolf-Fang.webp",
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
    passive: function () { return [{ Type: "ElementalBurst", Value: 32, Source: "Wolf-Fang" }, { Type: "ElementalSkill", Value: 32, Source: "Wolf-Fang" }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const XiphosMoonlight = {
    name: "Xiphos&#39 Moonlight",
    src: "Weapons/Weapon_Xiphos_Moonlight.webp",
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
    passive: function () { return [{ Type: "Special", Value:null }] },
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
    src: "Weapons/Weapon_Alley_Hunter.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 40 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const AmosBow = {
    name: "Amos Bow",
    src: "Weapons/Weapon_Amos_Bow.webp",
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

    passive: function () { return [{ Type: "NormalAttack", Value: 52 }, { Type: "ChargedAttack", Value: 52 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const AquaSimulacra = {
    name: "Aqua Simulacra",
    src: "Weapons/Weapon_Aqua_Simulacra.webp",
    weaponType: "Bow",
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

    passive: function () { return [{ Type: "HP%", Value: 16 }, { Type: "BonusDMG%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const BlackcliffWarbow = {
    name: "Blackcliff Warbow",
    src: "Weapons/Weapon_Blackcliff_Warbow.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 56 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const Cloudforged = {
    name: "Cloudforged",
    src: "Weapons/Weapon_Cloudforged.webp",
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

    passive: function () { return [{ Type: "ElementalMastery", Value: 120 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const CompoundBow = {
    name: "Compound Bow",
    src: "Weapons/Weapon_Compound_Bow.webp",
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

    passive: function () { return [{ Type: "ChargedAttack", Value: 32 }, { Type: "NormalAttack", Value: 35.072 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const ElegyForTheEnd = {
    name: "Elegy for the End",
    src: "Weapons/Weapon_Elegy_for_the_End.webp",
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

    passive: function () { return [{ Type: "ElementalMastery", Value: 180 }, { Type: "ATK", Value: 7 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const EndoftheLine = {
    name: "End of the Line",
    src: "Weapons/Weapon_End_of_the_Line.webp",
    weaponType: "Bow",
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

    passive: function () { return [{ Type: "ATKBlast", Value: 160 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FadingTwilight = {
    name: "Fading Twilight",
    src: "Weapons/Weapon_Fading_Twilight.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusWarbow = {
    name: "Favonius Warbow",
    src: "Weapons/Weapon_Favonius_Warbow.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 80 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Hamayumi = {
    name: "Hamayumi",
    src: "Weapons/Weapon_Hamayumi.webp",
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

    passive: function () { return [{ Type: "NormalAttack", Value: 64 }, { Type: "ChargedAttack", Value: 48 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const HuntersPath = {
    name: "Hunter&#39s Path",
    src: "Weapons/Weapon_Hunters_Path.webp",
    weaponType: "Bow",
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

    passive: function () { return [{ Type: "ElementalDMG", Value: 12 }, { Type: "Special", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const IbisPiercer = {
    name: "Ibis Piercer",
    src: "Weapons/Weapon_Ibis_Piercer.webp",
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

    passive: function () { return [] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const kingsSquire = {
    name: "King&#39s Squire",
    src: "Weapons/Weapon_Kings_Squire.webp",
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

    passive: function () { return [{Type:"ATKBlast",Value:180}] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const MitternachtsWaltz = {
    name: "Mitternachts Waltz",
    src: "Weapons/Weapon_Mitternachts_Waltz.webp",
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

    passive: function () { return [{ Type: "NormalAttack", Value: 40 }, { Type: "ATK%", Value: 40 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MouunsMoon = {
    name: "Mouuns Moon",
    src: "Weapons/Weapon_Mouuns_Moon.webp",
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

    passive: function () { return [{ Type: "ElementalBurst", Value: 65 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PolarStar = {
    name: "Polar Star",
    src: "Weapons/Weapon_Polar_Star.webp",
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

    passive: function () { return [{ Type: "ElementalBurst", Value: 12 }, { Type: "ElementalSkill", Value: 12 }, { Type: "ATK%", Value: 27 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Predator = {
    name: "Predator",
    src: "Weapons/Weapon_Predator.webp",
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

    passive: function () { return [{ Type: "Special", Value: 0 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeCrescent = {
    name: "Prototype Crescent",
    src: "Weapons/Weapon_Prototype_Crescent.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 72 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const RangeGauge = {
    name: "Range Gauge",
    src: "Weapons/Weapon_Range_Gauge.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const RoyalBow = {
    name: "Royal Bow",
    src: "Weapons/Weapon_Royal_Bow.webp",
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

    passive: function () { return [{ Type: "CritRate", Value: 25 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Rust = {
    name: "Rust",
    src: "Weapons/Weapon_Rust.webp",
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

    passive: function () { return [{ Type: "NormalAttack", Value: 80 }, { Type: "ChargedAttack", Value: -10 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialBow = {
    name: "Sacrificial Bow",
    src: "Weapons/Weapon_Sacrificial_Bow.webp",
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

    passive: function () { return [{ Type: "", value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const ScionoftheBlazingSun = {
    name: "Scion of the Blazing Sun",
    src: "Weapons/Weapon_Scion_of_the_Blazing_sun.webp",
    weaponType: "Bow",
    rarity: 4,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "CritRate",
        startValue: "4%",
        Value: function () {
            return getSubStat(this);
        }
    },

    passive: function () { return [{ Type: "ATKBlast", value: 120 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const SilvershowerHeartStrings = {
    name: "Silvershower Heart-strings",
    src: "Weapons/Weapon_Silvershower_Heartstrings.webp",
    weaponType: "Bow",
    rarity: 5,
    level: "1b",
    characterEquiping: null,
    baseAttackType: "baseAttack44b",
    baseAttack: function () {
        return GetBaseAttack(this);
    },
    subStat: {
        Type: "HP%",
        startValue: "14.4%",
        Value: function () {
            return getSubStat(this);
        }
    },

    passive: function () { return [{ Type: "Special", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const SkywardHarp = {
    name: "Skyward Harp",
    src: "Weapons/Weapon_Skyward_Harp.webp",
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

    passive: function () { return [{ Type: "CritDMG", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const SongofStillness = {
    name: "Song of Stillness",
    src: "Weapons/Weapon_Song_of_Stillness.webp",
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

    passive: function () { return [{ Type: "Special", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const TheFirstGreatMagic = {
    name: "The First Great Magic",
    src: "Weapons/Weapon_The_First_Great_Magic.webp",
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

    passive: function () { return [{ Type: "ChargedAttack", Value: 16 }, { Type: "ATK%", Value: 28 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const TheStringless = {
    name: "The Stringless",
    src: "Weapons/Weapon_The_Stringless.webp",
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

    passive: function () { return [{ Type: "ElementalSkill", Value: 48 }, { Type: "ElementalBurst", Value: 48 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheViridescentHunt = {
    name: "The Viridescent Hunt",
    src: "Weapons/Weapon_The_Viridescent_Hunt.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const ThunderingPulse = {
    name: "Thundering Pulse",
    src: "Weapons/Weapon_Thundering_Pulse.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WindblumeOde = {
    name: "Windblume Ode",
    src: "Weapons/Weapon_Windblume_Ode.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
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
    src: "Weapons/Weapon_Blackcliff_Agate.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 72 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const DodocoTales = {
    name: "Dodoco Tales",
    src: "Weapons/Weapon_Dodoco_Tales.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 16 }, { Type: "ChargedAttack", Value: 32 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const EverlastingMoonglow = {
    name: "Everlasting Moonglow",
    src: "Weapons/Weapon_Everlasting_Moonglow.webp",
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

    passive: function () { return [{ Type: "HealingBonus", Value: 10 }, { Type: "EnergyRecharge", Value: 10 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const EyeOfPerception = {
    name: "Eye of Perception",
    src: "Weapons/Weapon_Eye_of_Perception.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusCodex = {
    name: "Favonius Codex",
    src: "Weapons/Weapon_Favonius_Codex.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 80 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Frostbearer = {
    name: "Frostbearer",
    src: "Weapons/Weapon_Frostbearer.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const HakushinRing = {
    name: "Hakushin Ring",
    src: "Weapons/Weapon_Hakushin_Ring.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const KagurasVerity = {
    name: "Kaguras Verity",
    src: "Weapons/Weapon_Kaguras_Verity.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LostPrayerToTheSacredWinds = {
    name: "Lost Prayer to the Sacred Winds",
    src: "Weapons/Weapon_Lost_Prayer_to_the_Sacred_Winds.webp",
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

    passive: function () { return [{ Type: "ElementalDMG", Value: 32 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MappaMare = {
    name: "Mappa Mare",
    src: "Weapons/Weapon_Mappa_Mare.webp",
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

    passive: function () { return [{ Type: "ElementalDMG", Value: 32 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const MemoryOfDust = {
    name: "Memory of Dust",
    src: "Weapons/Weapon_Memory_of_Dust.webp",
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

    passive: function () { return [{ Type: "ShieldStrength", Value: 20 }, { Type: "ATK%", Value: 40 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const OathswornEye = {
    name: "Oathsworn Eye",
    src: "Weapons/Weapon_Oathsworn_Eye.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeAmber = {
    name: "Prototype Amber",
    src: "Weapons/Weapon_Prototype_Amber.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 15 }, { Type: "TeamHealing", Value: 6 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalGrimoire = {
    name: "Royal Grimoire",
    src: "Weapons/Weapon_Royal_Grimoire.webp",
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

    passive: function () { return [{ Type: "CritRate", Value: 30 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialFragments = {
    name: "Sacrificial Fragments",
    src: "Weapons/Weapon_Sacrificial_Fragments.webp",
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

    passive: function () { return [{ Type: "ElementalSkill", Value: 180 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardAtlas = {
    name: "Skyward Atlas",
    src: "Weapons/Weapon_Skyward_Atlas.webp",
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

    passive: function () { return [{ Type: "ElementalDMG", Value: 12 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SolarPearl = {
    name: "Solar Pearl",
    src: "Weapons/Weapon_Solar_Pearl.webp",
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

    passive: function () { return [{ Type: "ElementalBurst", Value: 40 }, { Type: "ElementalSkill", Value: 40 }, { Type: "NormalAttack", Value: 40 }, { Type: "ChargedAttack", Value: 40 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheWidsith = {
    name: "The Widsith",
    src: "Weapons/Weapon_The_Widsith.webp",
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

    passive: function () { return [{ Type: "ATK", Value: 60 }, { Type: "ElementalMastery", Value: 240 }, { Type: "ElementalDMG", Value: 48 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const ThrillingTalesOfDragonSlayers = {
    name: "Thrilling Tales of Dragon Slayers",
    src: "Weapons/Weapon_Thrilling_Tales_of_Dragon_Slayers.webp",
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

    passive: function () { return [{ Type: "TeamATKBuff", Value: 48 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const TomeoftheEternalFlow = {
    name: "Tome of the Eternal Flow",
    src: "Weapons/Weapon_Tome_of_the_Eternal_Flow.webp",
    weaponType: "Catalyst",
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

    passive: function () { return [{ Type: "HP%", Value: 16 }, { Type: "ChargedAttack", Value: 42 }, { Type: "EnergyRecharge", Value: 6 }] },//
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();
const WineAndSong = {
    name: "Wine and Song",
    src: "Weapons/Weapon_Wine_and_Song.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 40 }] },
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
    src: "Weapons/Weapon_Akuoumaru.webp",
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

    passive: function () { return [{ Type: "ElementalBurst", Value: 65 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const BlackcliffSlasher = {
    name: "Blackcliff Slasher",
    src: "Weapons/Weapon_Blackcliff_Slasher.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 72 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusGreatsword = {
    name: "Favonius Greatsword",
    src: "Weapons/Weapon_Favonius_Greatsword.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 80 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const KatsuragikiriNagamasa = {
    name: "Katsuragikiri Nagamasa",
    src: "Weapons/Weapon_Katsuragikiri_Nagamasa.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 10 }, { Type: "ElementalSkill", Value: 12 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LithicBlade = {
    name: "Lithic Blade",
    src: "Weapons/Weapon_Lithic_Blade.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 22 }, { Type: "CritRate", Value: 14 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LuxuriousSeaLord = {
    name: "Luxurious Sea-Lord",
    src: "Weapons/Weapon_Luxurious_Sea-lord.webp",
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

    passive: function () { return [{ Type: "ElementalBurst", Value: 24 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeArchaic = {
    name: "Prototype Archaic",
    src: "Weapons/Weapon_Prototype_Archaic.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Rainslasher = {
    name: "Rainslasher",
    src: "Weapons/Weapon_Rainslasher.webp",
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

    passive: function () { return [{ Type: "EnergyRcharge", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RedhornStonethresher = {
    name: "Redhorn Stonethresher",
    src: "Weapons/Weapon_Redhorn_Stonethresher.webp",
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

    passive: function () { return [{ Type: "DEF%", Value: 28 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalGreatsword = {
    name: "Royal Greatsword",
    src: "Weapons/Weapon_Royal_Greatsword.webp",
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

    passive: function () { return [{ Type: "CritRate", Value: 30 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SacrificialGreatsword = {
    name: "Sacrificial Greatsword",
    src: "Weapons/Weapon_Sacrificial_Greatsword.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SerpentSpine = {
    name: "Serpent Spine",
    src: "Weapons/Weapon_Serpent_Spine.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 50 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardPride = {
    name: "Skyward Pride",
    src: "Weapons/Weapon_Skyward_Pride.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 8 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SnowTombedStarSilver = {
    name: "Snow-Tombed Starsilver",
    src: "Weapons/Weapon_Snow-Tombed_Starsilver.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SongOfBrokenPines = {
    name: "Song of Broken Pines",
    src: "Weapons/Weapon_Song_of_Broken_Pines.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 36 }, { Type: "NormalAttack", Value: 12 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheBell = {
    name: "The Bell",
    src: "Weapons/Weapon_The_Bell.webp",
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

    passive: function () { return [{ Type: "BonusDMG%", Value: 24 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheUnforged = {
    name: "The Unforged",
    src: "Weapons/Weapon_The_Unforged.webp",
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

    passive: function () { return [{ Type: "ShieldStrength", Value: 20 }, { Type: "ATK%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Verdict = {
    name: "Verdict",
    src: "Weapons/Weapon_Verdict.webp",
    weaponType: "Claymore",
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

    passive: function () { return [{ Type: "ATK%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Whiteblind = {
    name: "Whiteblind",
    src: "Weapons/Weapon_Whiteblind.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 48 }, { Type: "DEF%", Value: 48 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WolfsGravestone = {
    name: "Wolf&#39s Gravestone",
    src: "Weapons/Weapon_Wolfs_Gravestone.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 20 }, { Type: "ATK%", Value: 13.3 }] },
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
    src: "Weapons/Weapon_Black_Tassel.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const BlackcliffPole = {
    name: "Blackcliff Pole",
    src: "Weapons/Weapon_Blackcliff_Pole.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 72 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const CalamityQueller = {
    name: "Calamity Queller",
    src: "Weapons/Weapon_Calamity_Queller.webp",
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

    passive: function () { return [{ Type: "ElementalDMG", Value: 12 }, { Type: "ATK%", Value: 19.2 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const CrescentPike = {
    name: "Crescent Pike",
    src: "Weapons/Weapon_Crescent_Pike.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const Deathmatch = {
    name: "Deathmatch",
    src: "Weapons/Weapon_Deathmatch.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 32 }, { Type: "DEF%", Value: 32 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const DragonsBane = {
    name: "Dragons Bane",
    src: "Weapons/Weapon_Dragons_Bane.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const DragonspineSpear = {
    name: "Dragonspine Spear",
    src: "Weapons/Weapon_Dragonspine_Spear.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const EngulfingLightning = {
    name: "Engulfing Lightning",
    src: "Weapons/Weapon_Engulfing_Lightning.webp",
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

    passive: function () { return [{ Type: "", Value: null }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const FavoniusLance = {
    name: "Favonius Lance",
    src: "Weapons/Weapon_Favonius_Lance.webp",
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

    passive: function () { return [{ Type: "EnergyRecharge", Value: 80 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const KitainCrossSpear = {
    name: "Kitain Cross Spear",
    src: "Weapons/Weapon_Kitain_Cross_Spear.webp",
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

    passive: function () { return [{ Type: "ElementalSkill", Value: 12 }, { Type: "EnergyRecharge", Value: 10 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const LithicSpear = {
    name: "Lithic Spear",
    src: "Weapons/Weapon_Lithic_Spear.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 22 }, { Type: "CritRate", Value: 14 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrimordialJadeWingedSpear = {
    name: "Primordial Jade Winged-Spear",
    src: "Weapons/Weapon_Primordial_Jade_Winged-Spear.webp",
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

    passive: function () { return [{ Type: "ATK%", Value: 18 }, { Type: "BonusDMG%", Value: 8 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const PrototypeStarglitter = {
    name: "Prototype Starglitter",
    src: "Weapons/Weapon_Prototype_Starglitter.webp",
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

    passive: function () { return [{ Type: "NormalAttack", Value: 26 }, { Type: "ChargedAttack", Value: 26 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const RoyalSpear = {
    name: "Royal Spear",
    src: "Weapons/Weapon_Royal_Spear.webp",
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

    passive: function () { return [{ Type: "CritRate", Value: 30 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const SkywardSpine = {
    name: "Skyward Spine",
    src: "Weapons/Weapon_Skyward_Spine.webp",
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

    passive: function () { return [{ Type: "CritRate", Value: 8 }, { Type: "NormalAttack", Value: 12 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const StaffOfHoma = {
    name: "Staff of Homa",
    src: "Weapons/Weapon_Staff_of_Homa.webp",
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

    passive: function () { return [{ Type: "HP%", Value: 20 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const TheCatch = {
    name: "The Catch",
    src: "Weapons/Weapon_The_Catch.webp",
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

    passive: function () { return [{ Type: "ElementalBurst", Value: 32 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const VortexVanquisher = {
    name: "Vortex Vanquisher",
    src: "Weapons/Weapon_Vortex_Vanquisher.webp",
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

    passive: function () { return [{ Type: "ShieldStrength", Value: 20 }, { Type: "ATK%", Value: 40 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WavebreakersFin = {
    name: "Wavebreakers Fin",
    src: "Weapons/Weapon_Wavebreakers_Fin.webp",
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

    passive: function () { return [{ Type: "ElementalBurst", Value: 65 }] },
    Init: function () {
        this.subStat.Parent = this;
        delete this.Init;
        return this;
    }
}.Init();

const WhiteTassel = {
    name: "White Tassel",
    src: "Weapons/Weapon_White_Tassel.webp",
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

    passive: function () { return [{ Type: "NormalAttack", Value: 48 }] },
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
    ["Absolution"]: Absolution,
    ["Alley Hunter"]: AlleyHunter,
    ["Akuoumaru"]: Akuoumaru,
    ["Amenoma Kageuchi"]: AmenomaKageuchi,
    ["Amos Bow"]: AmosBow,
    ["Aqua Simulacra"]: AquaSimulacra,
    ["Aquila Favonia"]: AquilaFavonia,
    ["Black Tassel"]: BlackTassel,
    ["Blackcliff Agate"]: BlackcliffAgate,
    ["Blackcliff Longsword"]: BlackcliffLongsword,
    ["Blackcliff Pole"]: BlackcliffPole,
    ["Blackcliff Slasher"]: BlackcliffSlasher,
    ["Blackcliff Warbow"]: BlackcliffWarbow,
    ["Calamity Queller"]: CalamityQueller,
    ["Cinnabar Spindle"]: CinnabarSpindle,
    ["Cloudforged"]: Cloudforged,
    ["Crescent Pike"]: CrescentPike,
    ["Compound Bow"]: CompoundBow,
    ["Deathmatch"]: Deathmatch,
    ["Dodoco Tales"]: DodocoTales,
    ["Dragons Bane"]: DragonsBane,
    ["Dragonspine Spear"]: DragonspineSpear,
    ["Elegy for the End"]: ElegyForTheEnd,
    ["End of the Line"]: EndoftheLine,
    ["Engulfing Lightning"]: EngulfingLightning,
    ["Everlasting Moonglow"]: EverlastingMoonglow,
    ["Eye of Perception"]: EyeOfPerception,
    ["Fading Twilight"]: FadingTwilight,
    ["Favonius Codex"]: FavoniusCodex,
    ["Favonius Greatsword"]: FavoniusGreatsword,
    ["Favonius Lance"]: FavoniusLance,
    ["Favonius Sword"]: FavoniusSword,
    ["Favonius Warbow"]: FavoniusWarbow,
    ["Festering Desire"]: FesteringDesire,
    ["Finale of the Deep"]: FinaleoftheDeep,
    ["Fleuve Cendre Ferryman"]: FleuveCendreFerryman,
    ["Flute of Ezpitzal"]: FluteofEzpitzal,
    ["Freedom-Sworn"]: FreedomSworn,
    ["Frostbearer"]: Frostbearer,
    ["Hakushin Ring"]: HakushinRing,
    ["Hamayumi"]: Hamayumi,
    ["Haran Geppaku Futsu"]: HaranGeppakuFutsu,
    ["Harbinger of Dawn"]: HarbingerOfDawn,
    ["Hunter's Path"]: HuntersPath,
    ["Ibis Piercer"]: IbisPiercer,
    ["Iron Sting"]: IronSting,
    ["Kagotsurube Isshin"]: KagotsurubeIsshin,
    ["Kaguras Verity"]: KagurasVerity,
    ["Katsuragikiri Nagamasa"]: KatsuragikiriNagamasa,
    ["Key of Khaj-Nisut"]: KeyofKahjNisut,
    ["King's Squire"]: kingsSquire,
    ["Kitain Cross Spear"]: KitainCrossSpear,
    ["Light of Foliar Incision"]: LightofFoliarIncision,
    ["Lions Roar"]: LionsRoar,
    ["Lithic Blade"]: LithicBlade,
    ["Lithic Spear"]: LithicSpear,
    ["Lost Prayer to the Sacred Winds"]: LostPrayerToTheSacredWinds,
    ["Luxurious Sea-Lord"]: LuxuriousSeaLord,
    ["Mappa Mare"]: MappaMare,
    ["Memory of Dust"]: MemoryOfDust,
    ["Mistsplitter Reforged"]: MistsplitterReforged,
    ["Mitternachts Waltz"]: MitternachtsWaltz,
    ["Mouuns Moon"]: MouunsMoon,
    ["Oathsworn Eye"]: OathswornEye,
    ["Polar Star"]: PolarStar,
    ["Predator"]: Predator,
    ["Primordial Jade Cutter"]: PrimordialJadeCutter,
    ["Primordial Jade Winged-Spear"]: PrimordialJadeWingedSpear,
    ["Prototype Amber"]: PrototypeAmber,
    ["Prototype Archaic"]: PrototypeArchaic,
    ["Prototype Crescent"]: PrototypeCrescent,
    ["Prototype Rancour"]: PrototypeRancour,
    ["Prototype Starglitter"]: PrototypeStarglitter,
    ["Rainslasher"]: Rainslasher,
    ["Redhorn Stonethresher"]: RedhornStonethresher,
    ["Range Gauge"]: RangeGauge,
    ["Royal Bow"]: RoyalBow,
    ["Royal Greatsword"]: RoyalGreatsword,
    ["Royal Grimoire"]: RoyalGrimoire,
    ["Royal Longsword"]: RoyalLongsword,
    ["Royal Spear"]: RoyalSpear,
    ["Rust"]: Rust,
    ["Sacrificial Bow"]: SacrificialBow,
    ["Sacrificial Fragments"]: SacrificialFragments,
    ["Sacrificial Greatsword"]: SacrificialGreatsword,
    ["Sacrificial Sword"]: SacrificialSword,
    ["Sapwood Blade"]: SapwoodBlade,
    ["Scion of the Blazing Sun"]: ScionoftheBlazingSun,
    ["Serpent Spine"]: SerpentSpine,
    ["Silvershower Heart-strings"]: SilvershowerHeartStrings,
    ["Skyward Atlas"]: SkywardAtlas,
    ["Skyward Blade"]: SkywardBlade,
    ["Skyward Harp"]: SkywardHarp,
    ["Skyward Pride"]: SkywardPride,
    ["Skyward Spine"]: SkywardSpine,
    ["Snow-Tombed Starsilver"]: SnowTombedStarSilver,
    ["Solar Pearl"]: SolarPearl,
    ["Song of Broken Pines"]: SongOfBrokenPines,
    ["Song of Stillness"]: SongofStillness,
    ["Splendor of Tranquil Waters"]: SplendorofTranquilWaters,
    ["Staff of Homa"]: StaffOfHoma,
    ["Summit Shaper"]: SummitShaper,
    ["Sword of Descension"]: SwordOfDescension,
    ["Sword of Narzissenkreuz"]: SwordOfNarzissenkreuz,
    ["The Alley Flash"]: TheAlleyFlash,
    ["The Catch"]: TheCatch,
    ["The Bell"]: TheBell,
    ["The Black Sword"]: TheBlackSword,
    ["The Dockhand's Assistant"]: TheDockhandsAssistant,
    ["The First Great Magic"]: TheFirstGreatMagic,
    ["The Flute"]: TheFlute,
    ["The Stringless"]: TheStringless,
    ["The Unforged"]: TheUnforged,
    ["The Viridescent Hunt"]: TheViridescentHunt,
    ["The Widsith"]: TheWidsith,
    ["Thrilling Tales of Dragon Slayers"]: ThrillingTalesOfDragonSlayers,
    ["Thundering Pulse"]: ThunderingPulse,
    ["Toukabou Shigure"]: ToukabouShigure,
    ["Tome of the Eternal Flow"]: TomeoftheEternalFlow,
    ["Uraku Misugiri"]: UrakuMisugiri,
    ["Verdict"]: Verdict,
    ["Vortex Vanquisher"]: VortexVanquisher,
    ["Wavebreakers Fin"]: WavebreakersFin,
    ["White Tassel"]: WhiteTassel,
    ["Whiteblind"]: Whiteblind,
    ["Windblume Ode"]: WindblumeOde,
    ["Wine and Song"]: WineAndSong,
    ["Wolf-Fang"]: WolfFang,
    ["Wolf's Gravestone"]: WolfsGravestone,
    ["Xiphos' Moonlight"]: XiphosMoonlight,
    index: [
        "Absolution",
        "Akuoumaru",
        "Alley Hunter",
        "Amenoma Kageuchi",
        "Amos Bow",
        "Aqua Simulacra",
        "Aquila Favonia",
        "Black Tassel",
        "Blackcliff Agate",
        "Blackcliff Longsword",
        "Blackcliff Pole",
        "Blackcliff Slasher",
        "Blackcliff Warbow",
        "Calamity Queller",
        "Cinnabar Spindle",
        "Cloudforged",
        "Crescent Pike",
        "Compound Bow",
        "Deathmatch",
        "Dodoco Tales",
        "Dragons Bane",
        "Dragonspine Spear",
        "Elegy for the End",
        "End of the Line",
        "Engulfing Lightning",
        "Everlasting Moonglow",
        "Eye of Preception",
        "Fading Twilight",
        "Favonius Codex",
        "Favonius Greatsword",
        "Favonius Lance",
        "Favonius Sword",
        "Favonius Warbow",
        "Festering Desire",
        "Finale of the Deep",
        "Fleuve Cendre Ferryman",
        "Flute of Ezpitzal",
        "Freedom-Sworn",
        "Frostbearer",
        "Hakushin Ring",
        "Hamayumi",
        "Haran Geppaku Futsu",
        "Harbinger of Dawn",
        "Hunter's Path",
        "Ibis Piercer",
        "Iron Sting",
        "Kagotsurube Isshin",
        "Kaguras Verity",
        "Katsuragikiri Nagamasa",
        "Key of Khaj-Nisut",
        "King's Squire",
        "Kitain Cross Spear",
        "Light of Foliar Incision",
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
        "Range Gauge",
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
        "Sapwood Blade",
        "Scion of the Blazing Sun",
        "Serpent Spine",
        "Silvershower Heart-strings",
        "Skyward Atlas",
        "Skyward Blade",
        "Skyward Harp",
        "Skyward Pride",
        "Skyward Spine",
        "Snow-Tombed Starsliver",
        "Solar Pearl",
        "Song of Broken Pines",
        "Song of Stillness",
        "Splendor of Tranquil Waters",
        "Staff of Homa",
        "Summit Shaper",
        "Sword of Descension",
        "Sword of Narzissenkreuz",
        "The Alley Flash",
        "The Catch",
        "The Bell",
        "The Black Sword",
        "The Dockhand's Assistant",
        "The First Great Magic",
        "The Flute",
        "The Stringless",
        "The Unforged",
        "The Viridescent Hunt",
        "The Widsith",
        "Thrilling Tales of Dragon Slayers",
        "Thundering Pulse",
        "Toukabou Shigure",
        "Tome of the Eternal Flow",
        "Uraku Misugiri",
        "Verdict",
        "Vortex Vanquisher",
        "Wavebreakers Fin",
        "White Tassel",
        "Whiteblind",
        "Wine and Song",
        "Windblume Ode",
        "Wolf-Fang",
        "Wolf's Gravestone",
        "Xiphos' Moonlight"

    ],
    ["Sword"]: [
        "Absolution",
        "Amenoma Kageuchi",
        "Aquila Favonia",
        "Blackcliff Longsword",
        "Cinnabar Spindle",
        "Favonius Sword",
        "Festering Desire",
        "Finale of the Deep",
        "Fleuve Cendre Ferryman",
        "Flute of Ezpitzal",
        "Freedom-Sworn",
        "Haran Geppaku Futsu",
        "Harbinger of Dawn",
        "Iron Sting",
        "Kagotsurube Isshin",
        "Key of Khaj-Nisut",
        "Light of Foliar Incision",
        "Lions Roar",
        "Mistsplitter Reforged",
        "Primordial Jade Cutter",
        "Prototype Rancour",
        "Royal Longsword",
        "Sacrificial Sword",
        "Sapwood Blade",
        "Skyward Blade",
        "Splendor of Tranquil Waters",
        "Summit Shaper",
        "Sword of Descension",
        "Sword of Narzissenkreuz",
        "The Alley Flash",
        "The Black Sword",
        "The Dockhand's Assistant",
        "The Flute",
        "Toukabou Shigure",
        "Uraku Misugiri",
        "Wolf-Fang",
        "Xiphos' Moonlight"


    ],
    ["Bow"]: [
        "Alley Hunter",
        "Amos Bow",
        "Aqua Simulacra",
        "Blackcliff Warbow",
        "Cloudforged",
        "Compound Bow",
        "End of the Line",
        "Elegy for the End",
        "Fading Twilight",
        "Favonius Warbow",
        "Hamayumi",
        "Hunter's Path",
        "Ibis Piercer",
        "King's Squire",
        "Mitternachts Waltz",
        "Mouuns Moon",
        "Polar Star",
        "Predator",
        "Prototype Crescent",
        "Range Gauge",
        "Royal Bow",
        "Rust",
        "Sacrificial Bow",
        "Scion of the Blazing Sun",
        "Silvershower Heart-strings",
        "Skyward Harp",
        "Song of Stillness",
        "The First Great Magic",
        "The Stringless",
        "The Viridescent Hunt",
        "Thundering Pulse",
        "Windblume Ode",
    ],
    ["Catalyst"]: [
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
        "Tome of the Eternal Flow",
        "Wine and Song"
    ],
    ["Claymore"]: [
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
        "Verdict",
        "Whiteblind",
        "Wolf's Gravestone"
    ],
    ["Polearm"]: [
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