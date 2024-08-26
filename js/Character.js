class Createcharacter {
    artifactFourPiece = "";
    artifactTwoPiece = [];
    constructor(baseCharacter, weapon, artifacts) {
        this.name = baseCharacter.name;
        this.src = baseCharacter.src;
        this.card = baseCharacter.card;
        this.supportType = baseCharacter.supportType;
        this.supportType2 = baseCharacter.supportType2 || "null";
        this.element = baseCharacter.element;
        this.level = baseCharacter.level;
        this.energyOffset = baseCharacter.energyOffset;
        this.weapon = weapon;
        this.baseAttack = baseCharacter.baseAttack;
        this.baseDEF = baseCharacter.baseDEF;

        this.baseHP = baseCharacter.baseHP;
        this.subDpsType = baseCharacter.subDpsType;
        this.bondOfLife = 0;
        this.stamina = baseCharacter.stamina;
        this.normalAttack1 = baseCharacter.normalAttack1;
        this.normalAttack2 = baseCharacter.normalAttack2;
        this.normalAttack3 = baseCharacter.normalAttack3;
        this.normalAttack4 = baseCharacter.normalAttack4;
        this.normalAttack5 = baseCharacter.normalAttack5;
        this.chargedAttack = baseCharacter.chargedAttack;
        this.plungeAttack = baseCharacter.plungeAttack;
        this.elementalSkill = baseCharacter.elementalSkill;
        this.elementalBurst = baseCharacter.elementalBurst;
        this.normalAttackLevel = baseCharacter.normalAttackLevel;
        this.sequence = baseCharacter.sequence;
        this.artifacts = artifacts;
        this.currentBuffs = [baseCharacter.passive1, baseCharacter.passive2];
        this.ExtraMultiplier = baseCharacter.ExtraMultiplier || [];
        this.advancedstats = baseCharacter.advancedstats;
        this.ascensionstats = baseCharacter.ascensionStat;
        this.baseHP = this.baseHP();
        this.currentHP = this.HP();
        this.baseAttack = this.baseAttack() + weapon.baseAttack();
        this.baseDEF = this.baseDEF();
    }
    reset() {
        this.currentHP = this.HP();
        this.bondOfLife = 0;
        this.currentBuffs = [this.passive1, this.passive2];
        this.ExtraMultiplier = [];
    }
    removeHP = function (amount) {
        this.currentHP -= amount;
        if (this.currentHP < 0)
            this.currentHP = 0;
        hpHasDecreased(this);//For passive listening to HP changes
        hpHasIncresedorDecreased(this);
    }
    addHP = function (amount) {
        this.currentHP += amount;
        if (this.currentHP > this.HP())
            this.currentHP = this.HP();
        hpHasIncreased(this);//For passive listening to HP changes
        hpHasIncresedorDecreased(this);
    }
    bondOfLifeToRemove = function (amount) {
        this.bondOfLife -= amount;
        if (this.bondOfLife < 0)
            this.bondOfLife = 0;
        bondOfLifeChanged(this);
    }
    applyBondOfLife = function (amount) {
        this.bondOfLife += amount;
        if (this.bondOfLife > 200)
            this.bondOfLife = 200;
        //Absolution passive
        if (this.weapon.name == "Absolution") {
            let stacks = 0;
            this.currentBuffs.forEach(buff => {
                if (buff.Source == "Absolution")
                    stacks++;
            });
            if (stacks < 3)
                this.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 16, Source: "Absolution" });
        } else if (this.weapon.name == "Silvershower Heart-strings") {
            if (!silvershowerBondofLifeStack) {
                let stacks = 0;
                let buffValue = 0;
                if (silvershowerElementalStack)
                    stacks++;
                if (silvershowerHealingStack)
                    stacks++;
                switch (stacks) {
                    case 0:
                        buffValue = 12;
                        break;
                    case 1:
                        buffValue = 24;
                        break;
                    case 2:
                        buffValue = 40;
                        break;

                }
                if (!silvershowerElementalStack && !silvershowerHealingStack) {
                    this.currentBuffs.push({ Type: "HP%", Value: buffValue, Source: "Silvershower Heart-strings" });
                } else {
                    for (buff of this.currentBuffs) {
                        if (buff.Source == "Silvershower Heart-strings") {
                            buff.Value = buffValue;
                        }
                    }
                }
                if (silvershowerElementalStack && silvershowerHealingStack) {
                    //Silvershower Heart-strings has all stacks now
                    character.currentBuffs.push({ Type: "ElementalBurstCritRate", Value: 28, Source: "Silvershower Heart-strings" });
                }
                silvershowerBondofLifeStack = true;
            }
        }
        bondOfLifeChanged(this);

    }
    getBuffOfType = function (type) {
        let buffs = this.currentBuffs;
        buffs.forEach(buff => {
            if (buff.Type == type) {
                return buff;
            }
        })
    }
    getBuffsOfType = function (type) {
        let buffs = this.currentBuffs;
        for (let i = 0; i < type.length; i++) {
            buffs.forEach(buff => {
                if (buff.Type == type[i]) {
                    return buff;
                }
            })
        }
    }
    hasBuffOfType = function (type) {
        let buffs = this.currentBuffs;
        buffs.forEach(buff => {
            if (buff.Type == type) {
                return true;
            }
        });
        return false;
    }

    attack = function CalculateAttack() {
        let artifacts = this.artifacts;
        let baseattack = this.baseAttack;

        let buffs = this.currentBuffs;
        let totalAtkIncrease = 0.0;
        let flatAttack = 0;
        artifacts.forEach(artifact => {
            if (artifact.Mainstat.Type == "ATK%") {
                totalAtkIncrease += artifact.Mainstat.Value;
            } else if (artifact.Mainstat.Type == "ATKflat") {
                flatAttack += artifact.Mainstat.Value;
            }
            artifact.Substats.forEach(substat => {
                if (substat.Type == "ATK%") {
                    totalAtkIncrease += substat.Value;
                } else if (substat.Type == "ATKflat") {
                    flatAttack += substat.Value;
                }

            });
        });
        if (buffs != null && buffs != undefined) {
            buffs.forEach(buff => {
                if (buff.Type == "ATK%") {
                    totalAtkIncrease += buff.Value;
                }
                else if (buff.Type == "ATKflat") {
                    flatAttack += buff.Value;
                }
            })
        }

        return Math.floor((baseattack * (1 + (totalAtkIncrease / 100))) + flatAttack);
    }
    critRate = function CalculateCritRate() {
        let critRate = this.advancedstats.critRate;
        let artifacts = this.artifacts;
        let ascension = this.ascensionstats();
        let buffs = this.currentBuffs;

        artifacts.forEach(artifact => {
            if (artifact.Mainstat.Type == "CritRate") {
                critRate += artifact.Mainstat.Value;
            }
            artifact.Substats.forEach(substat => {
                if (substat.Type == "CritRate") {
                    critRate += substat.Value;
                }

            });
        });
        if (buffs != null && buffs != undefined) {
            buffs.forEach(buff => {
                if (buff.Type == "CritRate") {
                    critRate += buff.Value;
                }
            })
        }

        if (ascension.Type == "CritRate") {
            critRate += ascension.Value;
        }

        return Math.round(critRate * 10) / 10;
    }
    critDMG = function CalculateCritDmg() {
        let critDMG = this.advancedstats.critDMG;
        let artifacts = this.artifacts;
        let ascension = this.ascensionstats();
        let buffs = this.currentBuffs;

        artifacts.forEach(artifact => {
            if (artifact.Mainstat.Type == "CritDMG") {
                critDMG += artifact.Mainstat.Value;
            }
            artifact.Substats.forEach(substat => {
                if (substat.Type == "CritDMG") {
                    critDMG += substat.Value;
                }

            });
        });
        if (buffs != null && buffs != undefined) {
            buffs.forEach(buff => {
                if (buff.Type == "CritDMG") {
                    critDMG += buff.Value;
                }
            })
        }

        if (ascension.Type == "critDMG") {
            critDMG += ascension.Value;
        }

        return Math.round(critDMG * 10) / 10;
    }
    DEF = function () {
        let DEF = 0;
        let DEFflat = 0;
        let artifacts = this.artifacts;
        let ascension = this.ascensionstats();
        let buffs = this.currentBuffs;

        artifacts.forEach(artifact => {
            if (artifact.Mainstat.Type == "DEF%") {
                DEF += artifact.Mainstat.Value;
            }
            artifact.Substats.forEach(substat => {
                if (substat.Type == "DEF%") {
                    DEF += substat.Value;
                }
                else if (substat.Type == "DEFflat") {
                    DEFflat += substat.Value;
                }

            });
        });
        if (buffs != null && buffs != undefined) {
            buffs.forEach(buff => {
                if (buff.Type == "DEF%") {
                    DEF += buff.Value;
                }
                else if (buff.Type == "DEFflat") {
                    DEFflat += buff.Value;
                }
            })
        }

        if (ascension.Type == "DEF%") {
            DEF += ascension.Value;
        }

        return Math.round(((this.baseDEF * (1 + (DEF / 100))) + DEFflat) * 10) / 10;
    }
    HP = function () {
        let HP = 0;
        let HPflat = 0;
        let artifacts = this.artifacts;
        let ascension = this.ascensionstats();
        let buffs = this.currentBuffs;

        artifacts.forEach(artifact => {
            if (artifact.Mainstat.Type == "HP%") {
                HP += artifact.Mainstat.Value;
            }
            else if (artifact.Mainstat.Type == "HPflat") {
                HPflat += artifact.Mainstat.Value;
            }
            artifact.Substats.forEach(substat => {
                if (substat.Type == "HP%") {
                    HP += substat.Value;
                }
                else if (substat.Type == "HPflat") {
                    HPflat += substat.Value;
                }

            });
        });
        if (buffs != null && buffs != undefined) {
            buffs.forEach(buff => {
                if (buff.Type == "HP%") {
                    HP += buff.Value;
                }
                else if (buff.Type == "HPflat") {
                    HPflat += buff.Value;
                }
            })
        }

        if (ascension.Type == "HP%") {
            HP += ascension.Value;
        }

        return Math.round(((this.baseHP * (1 + (HP / 100))) + HPflat) * 10) / 10;
    }
    EM = function () {
        let em = 0;
        let artifacts = this.artifacts;
        let ascension = this.ascensionstats();
        let buffs = this.currentBuffs;

        artifacts.forEach(artifact => {
            if (artifact.Mainstat.Type == "ElementalMastery") {
                em += artifact.Mainstat.Value;
            }
            artifact.Substats.forEach(substat => {
                if (substat.Type == "ElementalMastery") {
                    em += substat.Value;
                }

            });
        });
        if (buffs != null && buffs != undefined) {
            buffs.forEach(buff => {
                if (buff.Type == "ElementalMastery") {
                    em += buff.Value;
                }
            })
        }

        if (ascension.Type == "ElementalMastery") {
            em += ascension.Value;
        }

        return em;
    }
    energyRecharge = function () {
        let er = 100;
        let artifacts = this.artifacts;
        let ascension = this.ascensionstats();
        let buffs = this.currentBuffs;

        artifacts.forEach(artifact => {
            if (artifact.Mainstat.Type == "EnergyRecharge") {
                er += artifact.Mainstat.Value;
            }
            artifact.Substats.forEach(substat => {
                if (substat.Type == "EnergyRecharge") {
                    er += substat.Value;
                }

            });
        });
        if (buffs != null && buffs != undefined) {
            buffs.forEach(buff => {
                if (buff.Type == "EnergyRecharge") {
                    er += buff.Value;
                }
            })
        }

        if (ascension.Type == "EnergyRecharge") {
            er += ascension.Value;
        }

        return er;
    }
}
export { Createcharacter };