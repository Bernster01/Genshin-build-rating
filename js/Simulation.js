let bestDMG = 0;
let bestSupportScore = 0;
let bestArtifacts = null;
let supportingElement = null;
let enemiesFrozen = false;
let role = "Dps";
let mistSplitterNormalStack = false;
let mistSplitterBurstStack = false;
let thunderingPulseNormalStack = false;
let thunderingPulseSkillStack = false;
let thunderingPulseBurstStack = false;
let crimsonWitchStacks = 0;
let grimheartStack = 0;
let superconductRes = false;
let vvActive = false;
let saraBuff = false;
let shenheCounter = 0;
function reset() {
    bestDMG = 0;
    bestSupportScore = 0;
}
function validateAllCharacters() {
    //Goes through all characters and validates them
    AllCharacters.index.forEach(character => {
        console.log(character);
        reset();
        let result = FindBestBuild(AllCharacters[character], 100);
        if (result != null || result != undefined) {
            console.log(character + " Succeded");
        }
    });
    console.log("ALL SUCCEDED");
    alert("ALL SUCCEDED");
}
function runSim(baseCharacter,baseWeapon,artifacts) {
    let userCharacter = new Createcharacter(_.cloneDeep(baseCharacter),baseWeapon,artifacts);
    applyBonuses(userCharacter);
    let simulatedCharacter = AllCharacters[userCharacter.name];
    
    let result = FindBestBuild(simulatedCharacter, 1);
   
    let result2 = Simulation(userCharacter);
    console.log("results: ",result,result2);
    let dmgSources = result2.dmgSources;
    dmgSources.aa = result2.dmg-(dmgSources.e + dmgSources.q);
    console.log(result2.dmgSources)
    let userScore;
    let bonsuMultiplier = 1;
    if (vvActive)
        bonsuMultiplier = 2;
    if (role != "Support" || simulatedCharacter.supportType == "Sub-dps") {
        console.log(result[0], result2.dmg);
        console.log("User", result2.char);
        console.log(result[2]);
        console.log(result[3]);
        console.log(["Attack: " + result2.char.attack(), "Defense: " + result2.char.DEF(), "HP: " + result2.char.HP(), "Crit Rate: " + result2.char.critRate(), "Crit DMG: " + result2.char.critDMG(), result2.char.advancedstats.elementalBonuses]);
        userScore = Math.floor((result2.dmg / result[0]) * 100);
    }

    else if (simulatedCharacter.supportType == "Healer" && role == "Support") {
        userScore = (result2.healing + (result2.dmg * 0.1)) * bonsuMultiplier;
        console.log("User: " + userScore, "Best score: " + result[0])
    }
    else if (simulatedCharacter.supportType == "ATKBooster" && role == "Support") {
        if (simulatedCharacter.supportType2 != undefined) {
            if (simulatedCharacter.supportType2 == "Healer") {
                userScore = ((result2.attackBuff * 2) + (result2.healing * 0.95) + (result2.dmg * 0.05)) * bonsuMultiplier;

                console.log("User: " + userScore, "Best score: " + result[0])
            }
            else if(simulatedCharacter.supportType2 == "Shield"){
                userScore = ((result2.attackBuff * 2) + (result2.shield * 0.95) + (result2.dmg * 0.05)) * bonsuMultiplier;

                console.log("User: " + userScore, "Best score: " + result[0])
            }

        }
        else {
            userScore = ((result2.attackBuff * 10) + (result2.dmg * 0.1)) * bonsuMultiplier;
            console.log("User: " + userScore, "Best score: " + result[0])
        }
    }
    else if (simulatedCharacter.supportType == "Shield" && role == "Support") {
        if (simulatedCharacter.supportType2 != undefined) {
            if (simulatedCharacter.supportType2 == "Healer") {
                userScore = ((result2.shield * 2) + (result2.healing * 0.95) + (result2.dmg * 0.1)) * bonsuMultiplier;

                console.log("User: " + userScore, "Best score: " + result[0])
            }
            if (simulatedCharacter.supportType2 == "Sub-dps") {
                userScore = (result2.shield + result2.dmg) * bonsuMultiplier;
                console.log("User: " + userScore, "Best score: " + result[0])
            }
        }
        else {
            userScore = ((result2.shield * 2) + (result2.dmg * 0.1)) * bonsuMultiplier;
            console.log("User: " + userScore, "Best score: " + result[0])
        }
    }
    else if (simulatedCharacter.supportType == "ElementalBuffer" && role == "Support") {
        if (simulatedCharacter.supportType2 != undefined) {

        }
        else {

            userScore = ((result2.attackBuff * 20) + (result2.dmg * 0.0025)) * bonsuMultiplier;
            console.log("User: " + userScore, "Best score: " + result[0])
        }

        console.log(result[3]);
        console.log(["Attack: " + result2.char.attack(), "EM: " + result2.char.EM(), "HP: " + result2.char.HP(), "Crit Rate: " + result2.char.critRate(), "Crit DMG: " + result2.char.critDMG(), result2.char.advancedstats.elementalBonuses]);
        
       
    }
    if (role == "Support" && simulatedCharacter.supportType != "Sub-dps") {
        
        userScore =Math.floor(userScore/bestSupportScore*100);
    }
    let card = generateCharacterCard(result2.char,userScore,supportingElement,role,elementalResonance,true);
    let doc = document.getElementById("result-container-container");
    let parentDoc = document.getElementById("result-container");
    doc.innerHTML = "";
    doc.insertAdjacentHTML('beforeend', card.card);
    parentDoc.style.transform ="translate(-50%,50%) scale(0.1)";
    parentDoc.style.display = "flex";
    setTimeout(function () {
    parentDoc.style.transform = "translate(-50%,-50%) scale(1)";
    }, 100);
    return `${Math.floor((userScore / result[0]) * 100)}/100`;
}
function FindBestBuild(baseChar, times) {
    let newDamage;
    let supportType;
    let totalHealing;
    let currentBestArtifacts;
    let indexForBetterDmg = [];
    let chara;
    let charac;
    let startTime = Date.now();
    for (let index = 0; index < times; index++) {
        console.log(index);
        AllWeapons[baseChar.weaponType].forEach(weaponToUse => {
            let character = _.cloneDeep(baseChar);
            supportType = character.supportType;
            let weapon = _.cloneDeep(AllWeapons[weaponToUse]);
            weapon.level = "90b";
            character.level = "90b";
            character.elementalSkill.Level = 10;
            character.elementalBurst.Level = 10;
            if (character.name != "Tartaglia") {

                character.normalAttackLevel = 10;
            }
            else {
                character.normalAttackLevel = 11;

            }
            let newCharacter = new Createcharacter(
                character,
                weapon,
                GenerateArtifacts(character.scalingType)
            );

            applyBonuses(newCharacter);
            let result = Simulation(newCharacter);
            newDamage = result.dmg;
            let char = result.char;
            let score = 0;
            let bonsuMultiplier = 1;
            if (vvActive)
                bonsuMultiplier = 2;
            if ((character.supportType == "Sub-dps" && role == "Support") || role == "Dps") {
                if (newDamage > bestDMG) {
                    currentBestArtifacts = newCharacter.artifacts;
                    bestArtifacts = newCharacter.artifacts;
                    bestDMG = newDamage;
                    const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, DMG: newDamage };
                    charac = char;
                    chara = ["Attack: " + char.attack(), "Defense: " + char.DEF(), "HP: " + char.HP(), "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];

                    indexForBetterDmg.push(newObj);

                }
            }
            else if (character.supportType == "Healer") {

                score = (result.healing + (result.dmg * 0.1)) * bonsuMultiplier;

                if (score > bestSupportScore) {
                    currentBestArtifacts = newCharacter.artifacts;
                    bestArtifacts = newCharacter.artifacts;
                    bestSupportScore = score;
                    const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                    charac = char;
                    chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];

                    indexForBetterDmg.push(newObj);
                }
            }
            else if (character.supportType == "ATKBooster" && role == "Support") {
                if (character.supportType2 != undefined) {
                    if (character.supportType2 == "Healer") {
                        score = ((result.attackBuff * 2) + (result.healing * 0.95) + (result.dmg * 0.05)) * bonsuMultiplier;
                        if (score > bestSupportScore) {
                            currentBestArtifacts = newCharacter.artifacts;
                            bestArtifacts = newCharacter.artifacts;
                            bestSupportScore = score;
                            const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                            charac = char;
                            chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];
                            indexForBetterDmg.push(newObj);
                        }
                    }
                    else if(character.supportType2 == "Shield"){
                        score = ((result.attackBuff * 2) + (result.shield * 0.95) + (result.dmg * 0.05)) * bonsuMultiplier;
                        if (score > bestSupportScore) {
                            currentBestArtifacts = newCharacter.artifacts;
                            bestArtifacts = newCharacter.artifacts;
                            bestSupportScore = score;
                            const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                            charac = char;
                            chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];
                            indexForBetterDmg.push(newObj);
                        }
                    
                    }
                }
                else {
                    score = ((result.attackBuff * 10) + (result.dmg * 0.1)) * bonsuMultiplier;
                    if (score > bestSupportScore) {
                        currentBestArtifacts = newCharacter.artifacts;
                        bestArtifacts = newCharacter.artifacts;
                        bestSupportScore = score;
                        const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                        charac = char;
                        chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];
                        indexForBetterDmg.push(newObj);
                    }
                }

            }
            else if (character.supportType == "Shield" && role == "Support") {
                if (character.supportType2 != undefined) {
                    if (character.supportType2 == "Healer") {
                        score = ((result.shield * 2) + (result.healing * 0.95) + (result.dmg * 0.1)) * bonsuMultiplier;
                        if (score > bestSupportScore) {
                            currentBestArtifacts = newCharacter.artifacts;
                            bestArtifacts = newCharacter.artifacts;
                            bestSupportScore = score;
                            const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                            charac = char;
                            chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];
                            indexForBetterDmg.push(newObj);
                        }
                    }
                    if (character.supportType2 == "Sub-dps") {
                        score = (result.shield + result.dmg) * bonsuMultiplier;
                        if (score > bestSupportScore) {
                            currentBestArtifacts = newCharacter.artifacts;
                            bestArtifacts = newCharacter.artifacts;
                            bestSupportScore = score;
                            const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                            charac = char;
                            chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];
                            indexForBetterDmg.push(newObj);
                        }
                    }
                }
                else {
                    score = ((result.shield * 2) + (result.dmg * 0.1)) * bonsuMultiplier;
                    if (score > bestSupportScore) {
                        currentBestArtifacts = newCharacter.artifacts;
                        bestArtifacts = newCharacter.artifacts;
                        bestSupportScore = score;
                        const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                        charac = char;
                        chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), char.advancedstats.elementalBonuses];
                        indexForBetterDmg.push(newObj);
                    }
                }

            }
            else if (character.supportType == "ElementalBuffer" && role == "Support") {
                if (character.supportType2 != undefined) {

                }
                else {
                    score = ((result.attackBuff * 20) + (result.dmg * 0.0025)) * bonsuMultiplier;
                    if (score > bestSupportScore) {
                        currentBestArtifacts = newCharacter.artifacts;
                        bestArtifacts = newCharacter.artifacts;
                        bestSupportScore = score;
                        const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, Score: score };
                        charac = char;
                        chara = ["Attack: " + char.attack(), "Base Attack: " + char.baseAttack, "HP: " + char.HP(), "Base HP: " + char.baseHP, "Crit Rate: " + char.critRate(), "Crit DMG: " + char.critDMG(), "EM: " + char.EM(), char.advancedstats.elementalBonuses];
                        indexForBetterDmg.push(newObj);
                    }
                }

            }

            newCharacter = undefined;
        })



    }
    vvActive = false;
    character = undefined;
    let stopTime = Date.now();
    console.log((stopTime - startTime) / 1000 + "seconds");
    console.log(indexForBetterDmg);
    if (role == "Support" && supportType != "Sub-dps")
        return [bestSupportScore, currentBestArtifacts, charac, chara];
    else
        return [bestDMG, currentBestArtifacts, charac, chara];
}
function GenerateSequence() {
    let sequence = [""];
    let maxLength = GetRandomNumber(2, 6);
    for (let index = 0; index < maxLength; index++) {
        let random = Math.floor(Math.random() * 10);
        let input;

        switch (random) {
            case 0: case 1: case 3: case 5: case 7: case 9:

                switch (sequence[index]) {
                    case 'N1':
                        input = "N2";
                        break;
                    case 'N2':
                        input = "N3";
                        break;
                    case 'N3':
                        input = "N4";
                        break;
                    case 'N4':
                        input = "N5";
                        break;
                    case 'N5': case 'C': case '':
                        input = "N1";
                        break;

                }
                break;


            case 2: case 4: case 6: case 8: case 10:
                if (sequence[index] != "C")
                    input = "C";
                else
                    input = "N1";
                break;


        }

        if (sequence[0] == "") {
            sequence[0] = input;
            index = -1;
        }
        else {
            if (sequence.length < maxLength)
                sequence.push(input);
        }


    }

    return sequence;


}
class Createcharacter {
    constructor(baseCharacter, weapon, artifacts) {
        this.name = baseCharacter.name;
        this.src = baseCharacter.src;
        this.card = baseCharacter.card;
        this.supportType = baseCharacter.supportType;
        this.element = baseCharacter.element;
        this.level = baseCharacter.level;
        this.energyOffset = baseCharacter.energyOffset;
        this.weapon = weapon;
        this.baseAttack = baseCharacter.baseAttack;
        this.baseDEF = baseCharacter.baseDEF;
        this.baseDEF = this.baseDEF();
        this.baseHP = baseCharacter.baseHP;
        this.baseHP = this.baseHP();
        this.baseAttack = this.baseAttack() + weapon.baseAttack();
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
        this.getBuffOfType = function (type) {
            let buffs = this.currentBuffs;
            buffs.forEach(buff => {
                if (buff.Type == type) {
                    return buff;
                }
            })
        }
        this.getBuffsOfType = function (type) {
            let buffs = this.currentBuffs;
            for (let i = 0; i < type.length; i++) {
                buffs.forEach(buff => {
                    if (buff.Type == type[i]) {
                        return buff;
                    }
                })
            }
        }
        this.hasBuffOfType = function (type) {
            let buffs = this.currentBuffs;
            buffs.forEach(buff => {
                if (buff.Type == type) {
                    return true;
                }
            });
            return false;
        }

        this.attack = function CalculateAttack() {
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
        this.critRate = function CalculateCritRate() {
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
        this.critDMG = function CalculateCritDmg() {
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
        this.DEF = function () {
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
        this.HP = function () {
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
        this.EM = function () {
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





    }
}
function applyBonuses(character) {
    let mainstat = character.artifacts[4].Mainstat;
    if (mainstat.Type != "ATK%" || mainstat.Type != "DEF%" || mainstat.Type != "HP%" || mainstat.Type != "Elemental Mastery" || mainstat.Type != "HealingBonus") {
        character.advancedstats.elementalBonuses.forEach(element => {
            if (element.Type == mainstat.Type) {
                element.Value += mainstat.Value;
            }
        });
    }
    else if (mainstat.Type == "HealingBonus") {
        character.advancedstats.healingBonus += mainstat.Value;
    }
    elementalResonance.forEach(resonance => {
        switch (resonance) {
            case "Pyro":
                character.currentBuffs.push({ Type: "ATK%", Value: 25 });
                break;
            case "Hydro":
                break;
            case "Anemo":
                break;
            case "Geo":
                character.currentBuffs.push({ Type: "BonusDMG%", Value: 15 });
                character.currentBuffs.push({ Type: "ResShred", Element: "GeoDMGBonus", Value: 15 });
                break;
            case "Electro":
                break;
            case "Dendro":
                break;
            case "Cryo":
                if (character.element == "CryoCharacter")
                    character.currentBuffs.push({ Type: "CritRate", Value: 15 });
                break;
        }
    });
    character.currentBuffs.push({ Type: character.weapon.subStat.Type, Value: character.weapon.subStat.Value() })
    let sets = [];
    character.artifacts.forEach(artifact => {
        sets.push(artifact.Set);
        if (artifact.Mainstat.Type == "EnergyRecharge")
            character.advancedstats.energyRecharge += artifact.Mainstat.Value;
        else if (artifact.Mainstat.Type == "HealingBonus")
            character.advancedstats.healingBonus += artifact.Mainstat.Value;
        else {
            artifact.Substats.forEach(substat => {
                if (substat.Type == "EnergyRecharge")
                    character.advancedstats.energyRecharge += substat.Value;
            });
        }

    });
    getSetBonus(sets, character);

    character.weapon.passive().forEach(passive => {
        character.currentBuffs.push(passive);
    });
    switch (character.weapon.name) {
        case "Primordial Jade Cutter":
            character.currentBuffs.push({ Type: "ATKflat", Value: character.HP() * 0.012 });
            break;
        case "Staff of Homa":
            character.currentBuffs.push({ Type: "ATKflat", Value: character.HP() * 0.01, Source: "Staff of Homa" });
            break;

    }
    character.currentBuffs.push({ Type: character.ascensionstats().Type, Value: character.ascensionstats().Value })
    character.currentBuffs.forEach(buff => {

        switch (buff.Type) {
            case "PyroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "PyroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "HydroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "HydroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "DendroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "DendroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "ElectroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "ElectroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "AnemoDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "AnemoDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "CryoDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "CryoDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "GeoDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "GeoDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "PhysicalDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "PhysicalDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "ChargedAttack":
                character.ExtraMultiplier.push({ Type: "ChargedAttack", Value: buff.Value });
                break;
            case "NormalAttack":
                character.ExtraMultiplier.push({ Type: "NormalAttack", Value: buff.Value });
                break;
            case "BonusDMG%":
                character.ExtraMultiplier.push({ Type: "BonusDMG%", Value: buff.Value });
                break;
            case "EnergyRecharge":
                character.advancedstats.energyRecharge += buff.Value;
                break;
            case "ElementalDMG":
                character.advancedstats.elementalBonuses.forEach(element => {
                    element.Value += buff.Value;
                });
                break;
            case "HealingBonus":
                character.advancedstats.healingBonus += buff.Value;
                break;
            case "ShieldStrength":
                character.advancedstats.shieldStrength += buff.Value;
                break;



            default:
                break;
        }
    });

}
function getSetBonus(array, character) {
    let setsDone = [];
    for (let i = 0; i < array.length; i++) {
        let alreadyDone = false;
        let currentSet = array[i];
        setsDone.forEach(set => {
            if (currentSet == set)
                alreadyDone = true;
        });
        if (alreadyDone)
            continue;
        let count = 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] == currentSet) {

                count++;
            }

        }
        if (count >= 4) {
            character.currentBuffs.push(artifactSets[array[i]].twoPiece);

            if (artifactSets[array[i]].fourPiece != undefined) {
                if (currentSet == "Gladiator's Finale") {
                    if (character.weapon.weaponType == "Sword" || character.weapon.weaponType == "Claymore" || character.weapon.weaponType == "Polearm") {
                        character.currentBuffs.push(artifactSets[array[i]].fourPiece);
                    }
                }
                else if (currentSet == "Wanderer's Troupe") {

                    if (character.weapon.weaponType == "Bow" || character.weapon.weaponType == "Catalyst") {
                        character.currentBuffs.push(artifactSets[array[i]].fourPiece);

                    }
                }
                else if (currentSet == "Shimenawa's Reminiscence") {
                    if (character.name != "Yoimiya") {
                        artifactSets[array[i]].fourPiece.forEach(buff => {

                            character.currentBuffs.push(buff);
                        });
                    }
                }
                else if (currentSet == "Blizzard Strayer") {
                    if (character.element == "CryoCharacter") {
                        character.currentBuffs.push(artifactSets[array[i]].fourPiece);
                    }
                }
                else {
                    if (artifactSets[array[i]].fourPiece.Type == undefined) {
                        artifactSets[array[i]].fourPiece.forEach(buff => { character.currentBuffs.push(buff) });
                    }
                    else {
                        character.currentBuffs.push(artifactSets[array[i]].fourPiece);
                    }

                }

            }
            break;
        }
        else if (count >= 2) {

            character.currentBuffs.push(artifactSets[array[i]].twoPiece);
        }
        setsDone.push(currentSet);
    }
}
function resetVariables() {
    mistSplitterNormalStack = false;
    mistSplitterBurstStack = false;
    thunderingPulseNormalStack = false;
    thunderingPulseBurstStack = false;
    thunderingPulseNormalStack = false;
    enemiesFrozen = false;
    crimsonWitchStacks = 0;
    grimheartStack = 0;
    superconductRes = false;
    vvActive = false;
    saraBuff = false;
    shenheCounter = 0;
}
function Simulation(character) {

    resetVariables();

    let heal = 0;
    let atkBuff = 0;
    let Character = character;
    let totalDmg = 0;
    let shield = 0;
    let dmgSources = {aa:0,e:0,q:0};
    Character.sequence[role].forEach(action => {
        let type = "NormalAttack";
        let attackAction = { Multiplier: 0, Element: "", isReaction: false, Scaling: null, Type: action };
        switch (action) {
            case "N1":
            case "N2":
            case "N3":
            case "N4":
            case "N5":
            case "C":
            case "P":

                switch (action) {
                    case "N1":
                        attackAction.Multiplier = Character.normalAttack1.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.normalAttack1.Element;
                        attackAction.isReaction = Character.normalAttack1.isReaction;
                        attackAction.Scaling = Character.normalAttack1.scaling;
                        break;

                    case "N2":
                        attackAction.Multiplier = Character.normalAttack2.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.normalAttack2.Element;
                        attackAction.isReaction = Character.normalAttack2.isReaction;
                        attackAction.Scaling = Character.normalAttack2.scaling;
                        break;

                    case "N3":
                        attackAction.Multiplier = Character.normalAttack3.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.normalAttack3.Element;
                        attackAction.isReaction = Character.normalAttack3.isReaction;
                        attackAction.Scaling = Character.normalAttack3.scaling;
                        break;

                    case "N4":
                        attackAction.Multiplier = Character.normalAttack4.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.normalAttack4.Element;
                        attackAction.isReaction = Character.normalAttack4.isReaction;
                        attackAction.Scaling = Character.normalAttack4.scaling;
                        break;

                    case "N5":
                        attackAction.Multiplier = Character.normalAttack5.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.normalAttack5.Element;
                        attackAction.isReaction = Character.normalAttack5.isReaction;
                        attackAction.Scaling = Character.normalAttack5.scaling;
                        break;

                    case "C":
                        attackAction.Multiplier = Character.chargedAttack.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.chargedAttack.Element;
                        attackAction.isReaction = Character.chargedAttack.isReaction;
                        attackAction.Scaling = Character.chargedAttack.scaling;

                        type = "ChargedAttack";
                        if (Character.name == "Sara") {
                            if (!saraBuff) {
                                let value = 0;
                                Character.currentBuffs.forEach(buff => {
                                    if (buff.name == "TenguAmbush") {
                                        value = buff.value;
                                    }
                                });
                                Character.currentBuffs.push({ Type: "ATKflat", Value: value });
                                saraBuff = true;
                            }
                        }
                        break;

                    case "P":
                        attackAction.Multiplier = Character.plungeAttack.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.plungeAttack.Element;
                        attackAction.isReaction = Character.plungeAttack.isReaction;
                        attackAction.Scaling = Character.plungeAttack.scaling;
                        type = "PlungeAttack";
                        if (Character.name == "Itto") {
                            type = "ChargedAttack";
                        }
                        break;
                }
                if (Character.name == "Ganyu") {
                    let newAttack = attackAction;
                    let index = 0;
                    console.log(attackAction)
                    attackAction.Multiplier.forEach(multiplier => {
                        index++;
                        attackAction.Multiplier = multiplier;
                        if (index >= 2) {
                            character.currentBuffs.forEach(buff => {
                                if (buff.Type == "Undivided Heart")
                                    character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "Undivided Heart" });
                            });
                        }
                        let dmg = dmgCalc(newAttack, Character, type);
                        if (index >= 2)
                            totalDmg += dmg * 3;
                        else
                            totalDmg += dmg;
                        let toRemoveIndex = -1;
                        let toRemove = 0;
                        if (index >= 2) {
                            character.currentBuffs.forEach(buff => {
                                toRemoveIndex++;
                                if (buff.Source == "Undivided Heart") {
                                    toRemove = toRemoveIndex;
                                }
                            });
                            character.currentBuffs.splice(toRemove, 1);
                        }
                    });

                } else if (Character.name == "Traveler (Anemo)" || Character.name == "Traveler (Geo)") {
                    totalDmg += dmgCalc(attackAction, Character, type);
                    if (action == "N5") {
                        Character.currentBuffs.forEach(buff => {
                            if (buff.Type == "Slitting Wind") {
                                totalDmg += dmgCalc(
                                    {
                                        Multiplier: 0.6,
                                        Element: "AnemoDMGBonus",
                                        isReaction: true,
                                        Scaling: "ATK",
                                        Type: "NormalAttack"
                                    },
                                    Character,
                                    "NormalAttack");
                            } else if (buff.Type == "Frenzied Rockslide") {
                                totalDmg += dmgCalc(
                                    {
                                        Multiplier: 0.6,
                                        Element: "GeoDMGBonus",
                                        isReaction: true,
                                        Scaling: "ATK",
                                        Type: "NormalAttack"
                                    },
                                    Character,
                                    "NormalAttack");
                            }
                        })

                    }
                    if (Character.weapon.name == "Mistsplitter Reforged" && mistSplitterNormalStack != true) {
                        if (attackAction.Element != "PhysicalDMGBonus") {
                            Character.currentBuffs.push({ Type: "ElementalDMG", Value: 17.3 })
                            mistSplitterNormalStack = true;
                        }
                    }
                } else if (Character.name == "Yanfei") {
                    let hasChargedBuff = false;
                    Character.currentBuffs.forEach(buff => {
                        if (buff.Type == "ChargedBuff") {
                            hasChargedBuff = true;
                        }
                    });
                    if (!hasChargedBuff) {
                        Character.currentBuffs.push({ Type: "ChargedBuff", Value: 0 });
                    }
                    else {
                        let newAttack = attackAction;
                        newAttack.Multiplier = Character.attack() * 0.8;
                        newAttack.Type = "ChargedAttack";
                        newAttack.isReaction = false;
                        newAttack.Scaling = "Blazing Eye";
                        totalDmg += dmgCalc(attackAction, Character, type);
                    }
                    totalDmg += dmgCalc(attackAction, Character, type);

                }
                else {

                    let enemies = 1;
                    if (Character.weapon.Type != "Bow" || Character.weapon.Type != "Catalyst") {
                        enemies = 3;
                    }
                    totalDmg += dmgCalc(attackAction, Character, type) * enemies;
                    if (Character.name == "Yoimiya") {
                        switch (action) {
                            case "N1":
                                if (attackAction.isReaction) {
                                    attackAction.isReaction = false;
                                } else {
                                    attackAction.isReaction = true;
                                }
                                break;
                            case "N4":
                                if (attackAction.isReaction) {
                                    attackAction.isReaction = false;
                                } else {
                                    attackAction.isReaction = true;
                                }
                                break;
                        }
                    }
                    if (Character.weapon.name == "Mistsplitter Reforged" && mistSplitterNormalStack != true) {
                        if (attackAction.Element != "PhysicalDMGBonus") {
                            Character.currentBuffs.push({ Type: "ElementalDMG", Value: 17.3 })
                            mistSplitterNormalStack = true;
                        }
                    } else if (Character.weapon.name == "Thundering Pulse" && thunderingPulseNormalStack != true) {
                        Character.currentBuffs.push({ Type: "NormalAttack", Value: 13 });
                        thunderingPulseNormalStack = true;
                    }
                }
                break;

            case "E":
                let HoD = false;
                Character.currentBuffs.forEach(buff => {
                    if (buff.Type == "Heart of Depth") {
                        HoD = true;
                    }
                });
                if (HoD) {
                    Character.currentBuffs.push({ Type: "NormalAttack", Value: 30 });
                    Character.currentBuffs.push({ Type: "ChargedAttack", Value: 30 });
                }
                switch (Character.weapon.name) {
                    case "Festering Desire":
                        Character.currentBuffs.push({ Type: "ElementalSkill", Value: 32, Source: "Festering Desire" });
                        Character.advancedstats.critRate += 12;
                        console.log("DEBUG: " + Character.advancedstats.critRate)
                        break;

                    case "Calamity Queller":

                        break;
                    case "Oathsworn Eye":
                        let hasOathBuff = false;
                        Character.currentBuffs.forEach(buff => {
                            if (buff.Source == "Oathsworn Eye") {
                                hasOathBuff = true;
                            }
                        });
                        if (!hasOathBuff) {
                            Character.currentBuffs.push({ Type: "EnergyRecharge", Value: 48, Source: "Oathsworn Eye" });
                        }
                        break;
                    case "Kaguras Verity":
                        if (Character.name != "Yae Miko") {
                            let totalBuffs = 0;
                            Character.currentBuffs.forEach(buff => {
                                if (buff.Source == "Kagura's Verity") {
                                    totalBuffs++;
                                }
                            })
                            if (totalBuffs < 3) {
                                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 12, Source: "Kagura's Verity" });

                            } else if (totalBuffs == 3) {
                                Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 12 });
                            }
                        } else {

                            Character.currentBuffs.push({ Type: "ElementalSkill", Value: 36, Source: "Kagura's Verity" });
                            Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 12, Source: "Kagura's Verity" });
                        }
                        break;
                    case "Haran Geppaku Futsu":
                        let hasHaranBuff = false;
                        Character.currentBuffs.forEach(buff => {
                            if (buff.Source == "Haran Geppaku Futsu") {
                                hasHaranBuff = true;
                            }
                        });
                        if (!hasHaranBuff) {
                            Character.currentBuffs.push({ Type: "NormalAttack", Value: 40, Source: "Haran Geppaku Futsu" });
                        }
                        break;
                }
                if (Character.supportType != "Sub-dps") {
                    let result = Character.elementalSkill.Skill(Character);
                    console.log("DEBUG: "+result)
                    if (Number.isInteger(result)) {
                        totalDmg += result;
                        dmgSources.e += result;
                    } else {
                        if (result.dmg != undefined)
                            totalDmg += result.dmg;
                        if (result.healing != undefined)
                            heal += result.healing;
                        if (result.attackBuff != undefined)
                            atkBuff += result.attackBuff;
                        if (result.shield != undefined)
                            shield += result.shield;
                            dmgSources.e += result.dmg;
                    }
                }
                else {
                    let eDmg = Character.elementalSkill.Skill(Character);
                    totalDmg += eDmg;
                    dmgSources.e += eDmg;

                }
                switch (Character.weapon.name) {
                    case "Festering Desire":
                        Character.advancedstats.critRate -= 12;
                        //Remove the Festering Desire buff
                        let toRemoveIndex = -1;
                        let toRemove = 0;
                        Character.currentBuffs.forEach(buff => {
                            toRemoveIndex++;
                            if (buff.Source == "Festering Desire") {
                                toRemove = toRemoveIndex;
                            }
                        });
                        Character.currentBuffs.splice(toRemove, 1);
                        break;
                    case "Thundering Pulse":
                        if (!thunderingPulseNormalStack) {
                            Character.currentBuffs.push({ Type: "NormalAttack", Value: 13 });
                            thunderingPulseSkillStack = true
                        }
                        break;
                }
                break;

            case "Q":
                if (Character.supportType != "Sub-dps") {
                    let result = Character.elementalBurst.Skill(Character);
                    
                    if (Number.isInteger(result)) {
                        totalDmg += result;
                        dmgSources.q += result;
                    } else {
                        if (result.dmg != undefined)
                            totalDmg += result.dmg;
                        if (result.healing != undefined)
                            heal += result.healing;
                        if (result.attackBuff != undefined)
                            atkBuff += result.attackBuff;
                        if (result.shield != undefined)
                            shield += result.shield;
                        dmgSources.q += result.dmg;
                    }
                }
                else {


                    switch (Character.weapon.name) {
                        case "The Catch":
                            Character.advancedstats.critRate += 12;
                            break;
                    }
                    let qDmg = Character.elementalBurst.Skill(Character);
                  
                    switch (Character.weapon.name) {
                        case "Mistsplitter Reforged":
                            if (!mistSplitterBurstStack)
                                Character.currentBuffs.push({ Type: "ElementalDMG", Value: 34.6 });
                            break;
                        case "Engulfing Lightning":
                            Character.advancedstats.energyRecharge += 30;
                            break;
                        case "The Catch":
                            Character.advancedstats.critRate -= 12;
                            break;
                        case "Thundering Pulse":
                            if (!thunderingPulseBurstStack) {
                                Character.currentBuffs.push({ Type: "NormalAttack", Value: 14 });
                                thunderingPulseSkillStack = true
                            }
                    }
                    let energyMultiplier = Character.advancedstats.energyRecharge / Character.energyOffset;
                    if (energyMultiplier > 1)
                        energyMultiplier = 1;
                    qDmg *= energyMultiplier;
                    totalDmg += qDmg;
                    dmgSources.q += qDmg;
                }
                break;

        }
    });
    if (Character.name == "Kazuha") {
        Character.currentBuffs.forEach(buff => {
            if (buff.Source == "Poetics of Fuubutsu") {
                atkBuff += buff.Value;
            }
        });
    }
    let bonusMultiplier = 1;
    if (character.weapon.name == "Thrilling Tales of Dragon Slayers")
        bonusMultiplier = 2;
    return { dmg: Math.floor(totalDmg), char: Character, healing: heal, attackBuff: atkBuff * bonusMultiplier, shield: shield, dmgSources: dmgSources };

}
function dmgCalc(attackAction, Character, type) {
    switch (Character.weapon.name) {
        case "Engulfing Lightning":
            let atkIncrease = (Character.advancedstats.energyRecharge - 100) * 0.28;
            if (atkIncrease > 80) {
                atkIncrease = 80;
            }
            Character.currentBuffs.push({ Type: "ATK%", Value: atkIncrease });
            break;

    }
    switch (Character.name) {
        case "Mona":
            Character.currentBuffs.forEach(buff => {
                if (buff.Type == "Waterborn Destiny") {
                    Character.advancedstats.elementalBonuses[1].Value += Character.advancedstats.energyRecharge * 0.2;
                }
            })

            break;
        case "Raiden":
            Character.currentBuffs.forEach(buff => {
                if (buff.Type == "Enlightened Destiny") {
                    Character.advancedstats.elementalBonuses[3].Value += (Character.advancedstats.energyRecharge - 100) * 0.3;
                }


            });
            break;
    }

    //Damage Calculation 
    let dmg =
        ((getBaseDamage(attackAction, Character) * getSpecialMultiplier(Character, attackAction)) + getFlatDamage(Character, attackAction))
        * (1 + getDamageBonus(Character, attackAction, type))
        * getCrit(Character)
        * defCalc(Character)
        * resCalc(Character, attackAction.Element);
    dmg += attackAction.isReaction ? (elementalMasteryCalc(dmg, attackAction.Element, Character)) : 0;
    switch (Character.weapon.name) {
        case "Engulfing Lightning":
            let atkIncrease = (Character.advancedstats.energyRecharge - 100) * 0.28;
            if (atkIncrease > 80) {
                atkIncrease = 80;
            }
            Character.currentBuffs.push({ Type: "ATK%", Value: -atkIncrease })
            break;
    }
    switch (Character.name) {
        case "Mona":
            Character.currentBuffs.forEach(buff => {
                if (buff.Type == "Waterborn Destiny") {
                    Character.advancedstats.elementalBonuses[1].Value -= Character.advancedstats.energyRecharge * 0.2;
                }
            })
            break;
        case "Raiden":
            Character.currentBuffs.forEach(buff => {
                if (buff.Type == "Enlightened Destiny") {
                    Character.advancedstats.elementalBonuses[3].Value -= (Character.advancedstats.energyRecharge - 100) * 0.3;
                }


            });
            break;
    }
    return dmg;
}
function getBaseDamage(attackAction, character) {
    switch (attackAction.Scaling) {
        case "ATK":
            return attackAction.Multiplier * character.attack();
        case "DEF":
            return attackAction.Multiplier * character.DEF();
        case "HP":
            return attackAction.Multiplier * character.HP();
        case "Blazing Eye":
            return attackAction.Multiplier;

    }
    return 1;
}
function getSpecialMultiplier(character, attackAction) {
    switch (character.name) {
        case "Yoimiya":
            character.currentBuffs.forEach(buff => {
                if (buff.Type == "YoimiyaEBuff") {
                    return buff.Value;
                }
            });
            break;


    }
    return 1;
}
function getFlatDamage(character, attackAction) {
    let flatDamage = 0;
    //Characters passive buffs
    switch (character.name) {
        case "Zhongli":
            let hasPassive = false;
            character.currentBuffs.forEach(buff => {
                if (buff.Type == "Dominance of Earth") {
                    hasPassive = true;
                }
            })
            if (hasPassive) {
                switch (attackAction.action) {
                    case "NormalAttack":
                        flatDamage += character.HP() * 0.0139;
                        break;
                    case "ElementalSkill":
                        flatDamage += character.HP() * 0.019;
                        break;
                    case "ElementalBurst":
                        flatDamage += character.HP() * 0.33;
                        break;
                }
            }
            break;
        case "Gorou":

            if (attackAction.action == "ElementalSkill" || attackAction.action == "ElementalBurst") {

                let HotWaW = false;
                let AFR = false;
                character.currentBuffs.forEach(buff => {
                    if (buff.Type == "Heedless of the Wind and Weather") {
                        HotWaW = true;
                    }
                    else if (buff.Type == "A Favor Repaid") {
                        AFR = true;
                    }

                })
                switch (attackAction.action) {
                    case "ElementalSkill":
                        if (HotWaW) {
                            flatDamage += character.DEF() * 1.56;
                        }
                        break;
                    case "ElementalBurst":
                        if (AFR) {
                            flatDamage += character.DEF() * 0.156;
                        }
                        break;
                }
            }
            break;
        case "Itto":
            let hasBloodPassive = false;
            character.currentBuffs.forEach(buff => {
                if (buff.Type == "Bloodline of the Crimson Oni") {
                    hasBloodPassive = true;
                }
            });
            if (hasBloodPassive) {
                switch (attackAction.action) {
                    case "ChargedAttack":
                        flatDamage += character.DEF() * 0.35;
                        break;
                }
            }
            break;
        case "Kokomi":
            let hasSongofPearl = false;
            let kokomiBonusMultipler = 1;
            character.currentBuffs.forEach(buff => {
                if (buff.Type == "Song of the Pearl") {
                    hasSongofPearl = true;
                }
            });
            if (hasSongofPearl) {
                kokomiBonusMultipler = 1 + (character.advancedstats.healingBonus * 0.15);
            }
            switch (attackAction.action) {
                case "NormalAttack":
                    character.currentBuffs.forEach(buff => {
                        if (buff.Type == "KokomiNormal") {
                            flatDamage += (buff.Value * character.HP()) * kokomiBonusMultipler;
                        }
                    });
                    break;
                case "ChargedAttack":
                    character.currentBuffs.forEach(buff => {
                        if (buff.Type == "KokomiCharged") {
                            flatDamage += (buff.Value * character.HP()) * kokomiBonusMultipler;
                        }
                    });
                    break;
                case "ElementalSkill":
                    character.currentBuffs.forEach(buff => {
                        if (buff.Type == "KokomiBake") {
                            flatDamage += (buff.Value * character.HP()) * kokomiBonusMultipler;
                        }
                    });
                    break;
            }

            break;
        case "Shenhe":
            if (attackAction.Element == "CryoDMGBonus") {
                if (shenheCounter < 5) {
                    character.currentBuffs.forEach(buff => {
                        if (buff.Type == "ShenheBuff") {

                            flatDamage += buff.Value;
                            shenheCounter++;
                        }
                    });
                }
            }
            break;
        case "Yun Jin":
            if (attackAction.action == "NormalAttack") {
                character.currentBuffs.forEach(buff => {
                    if (buff.Type == "YunJinBuff") {

                        flatDamage += buff.Value;
                    }
                });

            }
            break;
    }
    //Weapon buffs
    switch (character.weapon.name) {
        case "Cinnabar Spindle":
            if (attackAction.type == "ElementaSkill") {
                flatDamage += character.DEF() * 0.8;
            }
            break;
        case "Everlasting Moonglow":
            if (attackAction.type != "ElementaSkill" && attackAction.Type != "ElementaBurst" && attackAction.Type != "C" && attackAction.Type != "P" && attackAction.Type != undefined)
                flatDamage += character.HP() * 0.10;
        case "Redhorn Stonethresher":
            if (attackAction.type != "ElementaSkill" && attackAction.Type != "ElementaBurst" && attackAction.Type != "P" && attackAction.Type != undefined)
                flatDamage += character.DEF() * 0.40;
            break;
    }
    return flatDamage;
}
function getDamageBonus(character, attackAction, type) {
    let bonus = 1;
    if (attackAction.action == "ElementalBurst") {
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "Emblem") {
                let multiplier = character.advancedstats.energyRecharge * 0.25;
                if (multiplier > 75)
                    multiplier = 75;
                bonus += multiplier;
            }
        })
    }
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "AddativeBonusDMG") {

            bonus += buff.Value / 100;

        }
    });
    if (character.ExtraMultiplier != null && character.ExtraMultiplier != undefined && character.ExtraMultiplier != []) {

        character.ExtraMultiplier.forEach(multiplier => {

            if (type == multiplier.Type || multiplier.Type == "BonusDMG%") {

                bonus += (multiplier.Value / 100);

            }
        });
    }
    character.currentBuffs.forEach(buff => {
        if (type == buff.Type) {
            bonus += (buff.Value / 100);

        }
    })
    character.advancedstats.elementalBonuses.forEach(element => {
        if (element.Type == attackAction.Element) {
            bonus += (element.Value / 100);

        }
    });
    return bonus;

}
function getCrit(character) {
    if (character.critRate() >= 0) {
        let bonusCritRate = 0;
        if (character.name == "Ganyu") {
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Undivided Heart") {
                    bonusCritRate += buff.Value;
                }
            });
        }
        if (character.critRate() + bonusCritRate > 100) {

            bonusCritRate -= character.critRate() + bonusCritRate - 100;
        }
        return (1 + (((character.critRate() + bonusCritRate) / 100) * (character.critDMG() / 100)));
    } else {
        return 1;
    }
}
function defCalc(character) {
    let defReduction = 0;
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "defReduction") {
            defReduction += 1 + (buff.Value / 100);
        }
    });
    let characterLevel = Number.parseInt(character.level.slice(0, character.level.length - 1));

    return (characterLevel + 100) / ((1 - defReduction) * 190 + characterLevel + 100);
}
function resCalc(character, element) {
    let res = 10;
    let resShred = 0;

    character.currentBuffs.forEach(buff => {
        if (buff.Type == "ResShred") {
            if (buff.Element == element) {
                resShred += buff.Value;
            }
        } else if (buff.Type == "VVShred") {
            if (buff.Element == element) {
                resShred += buff.Value;
            }
        }
    });
    res = (res - resShred) / 100;

    if (res < 0) {
        return (1 - (res / 2));
    }
    else if (res >= 0 && res < 0.75) {
        return (1 - res);
    }
    else {
        return (1 / (4 * res + 1));
    }
}
function elementalMasteryCalc(dmg, type, character) {
    type = type.slice(0, type.length - 8);
    let em = character.EM();
    let lvl = Number.parseInt(character.level.slice(0, character.level.length - 1));
    let vaporizeBonus = 0;
    let meltBonus = 0;
    let superconductBonus = 0;
    let electroChargedBonus = 0;
    let swirlBonus = 0;
    let overloadedBonus = 0;
    let burningBonus = 0;
    if (supportingElement == null) {
        return dmg;
    }
    else if (supportingElement == type) {
        return dmg;
    }
    else {
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "Crimson") {
                overloadedBonus += 40;
                burningBonus += 40;
                meltBonus += 15;
                vaporizeBonus += 15;
            }
            else if (buff.Type == "ThunderingFury") {
                overloadedBonus += 40;
                electroChargedBonus += 40;
                superconductBonus += 40;
            }
            else if (buff.Type == "VV") {
                swirlBonus += 60;
            }
        });
        vaporizeBonus = (vaporizeBonus == 0) ? 0 : vaporizeBonus / 100;
        meltBonus = (meltBonus == 0) ? 0 : meltBonus / 100;
        superconductBonus = (superconductBonus == 0) ? 0 : superconductBonus / 100;
        electroChargedBonus = (electroChargedBonus == 0) ? 0 : electroChargedBonus / 100;
        swirlBonus = (swirlBonus == 0) ? 0 : swirlBonus / 100;
        overloadedBonus = (overloadedBonus == 0) ? 0 : overloadedBonus / 100;
        burningBonus = (burningBonus == 0) ? 0 : burningBonus / 100;
        //Amplifying reaction
        let vaporizeMultiplier = 2 * (1 + ((278 * (em / (em + 1400))) / 100)) * (1 + vaporizeBonus);
        let reverseVaporizeMultiplier = 1.5 * (1 + ((278 * (em / (em + 1400))) / 100)) * (1 + vaporizeBonus);
        let meltMultiplier = 2 * (1 + ((278 * (em / (em + 1400))) / 100)) * (1 + meltBonus);
        let reverseMeltMultiplier = 1.5 * (1 + ((278 * (em / (em + 1400))) / 100)) * (1 + meltBonus);

        switch (supportingElement) {
            case "Pyro":
                switch (type) {
                    case "Hydro":
                        dmg *= vaporizeMultiplier;
                        break;
                    case "Electro":
                        dmg += overloaded(em, lvl, "Pyro", character, overloadedBonus);
                        break;
                    case "Cryo":
                        dmg *= reverseMeltMultiplier;
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Pyro", character, swirlBonus);
                        break;
                    case "Dendro":

                        break;
                }
                break;
            case "Hydro":
                switch (type) {
                    case "Pyro":
                        dmg *= reverseVaporizeMultiplier;
                        break;
                    case "Electro":
                        dmg += electroCharged(em, lvl, "Electro", character, electroChargedBonus);
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Hydro", character, swirlBonus);
                        break;
                    case "Cryo":
                        if (!enemiesFrozen) {
                            let set = 0;
                            character.artifacts.forEach(artifact => {
                                if (artifact.Set == "Blizzard Strayer")
                                    set++
                            });
                            if (set >= 4)
                                character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "FrozenWithBlizz" });
                            enemiesFrozen = true;
                        }
                        break;
                    case "Dendro":
                        break;
                }
                break;
            case "Cryo":
                switch (type) {
                    case "Electro":
                        dmg += superconduct(em, lvl, "Cryo", character, superconductBonus);
                        break;
                    case "Pyro":
                        dmg *= meltMultiplier;
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Cryo", character, swirlBonus);
                        break;
                    case "Hydro":
                        if (!enemiesFrozen) {
                            let bs = 0;
                            character.artifacts.forEach(artifact => {
                                if (artifact.Set == "Blizzard Strayer")
                                    bs++
                            });
                            if (bs => 4)
                                character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "FrozenWithBlizz" });
                            enemiesFrozen = true;
                        }
                        break;
                    case "Dendro":
                        break;
                }
                break;
            case "Electro":
                switch (type) {
                    case "Hydro":
                        dmg += electroCharged(em, lvl, "Electro", character, electroChargedBonus);
                        break;
                    case "Pyro":
                        dmg += overloaded(em, lvl, "Pyro", character, overloadedBonus);
                        break;
                    case "Cryo":
                        dmg += superconduct(em, lvl, "Cryo", character, superconductBonus);
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Electro", character, swirlBonus)
                        break;
                    case "Dendro":
                        break;
                }
                break;
            case "Anemo":
                if (type != "Anemo")
                    dmg += swirl(em, lvl, type, character, swirlBonus);
                break;
            case "Dendro":
                switch (type) {
                    case "Pyro":
                        dmg += burning(em, lvl, "Pyro", character, burningBonus);
                        break;

                }
                break;

        }
        return dmg;
    }
}
function overloaded(em, lvl, element, character, overloadedBonus) {
    return ((superconductBaseDMG[lvl] * 4) * (1 + ((1600 * (em / (em + 2000))) / 100) + overloadedBonus) * resCalc(character, element));
}
function electroCharged(em, lvl, element, character, electroChargedBonus) {
    return ((superconductBaseDMG[lvl] * 2.4) * (1 + ((1600 * (em / (em + 2000))) / 100) + electroChargedBonus) * resCalc(character, element)) * 3.5;
}
function superconduct(em, lvl, element, character, superconductBonus) {
    if (!superconductRes) {
        character.currentBuffs.push({ Type: "ResShred", Value: 40, Element: "PhysicalDMGBonus" });
        superconductRes = true;
    }
    return ((superconductBaseDMG[lvl]) * (1 + ((1600 * (em / (em + 2000))) / 100) + superconductBonus) * resCalc(character, element));
}
function swirl(em, lvl, element, character, swirlBonus) {
    let isShreded = false;
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "VVShred")
            isShreded = true;

    });

    let dmg = ((superconductBaseDMG[lvl] * 1.2) * (1 + ((1600 * (em / (em + 2000))) / 100) + swirlBonus) * resCalc(character, element));
    if (!isShreded) {
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "VV") {
                character.currentBuffs.push({ Type: "VVShred", Element: element, Value: 40 });
                vvActive = true;
            }
        });

    }
    if (character.name = "Kazuha") {
        let haveBuff = false;
        let havePassive = false;
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "Poetics of Fuubutsu")
                havePassive = true;
            else if (buff.Source == "Poetics of Fuubutsu")
                haveBuff = true;
        });
        if (!haveBuff && havePassive) {
            character.currentBuffs.push({ Type: supportingElement, Source: "Poetics of Fuubutsu", Value: character.EM() * 0.04 })
        }
    }
    return dmg;
}
const superconductBaseDMG = {
    "1": 9,
    "10": 17,
    "20": 40,
    "30": 68,
    "40": 104,
    "50": 162,
    "60": 245,
    "70": 383,
    "80": 540,
    "90": 725
}
