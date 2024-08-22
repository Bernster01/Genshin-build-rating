let bestBuild = {};
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
let numberOfEnemies = 3;
let endEarly = false;
let getJSON = false;
let targetsBurning = false;
let persTimer = -1;
let elementalDMGSources = {
    superconductDMG: 0,
    overloadDMG: 0,
    electrochargedDMG: 0,
    bloomDMG: 0,
    burningDMG: 0,
    hyperbloomDMG: 0,
    burgeoningDMG: 0,
    swirlDMG: 0,
}
let shouldGenerateBountifulCores = false;
let hasUrakuMisugiriBuff = false;
let shardsInPossession = 6;
async function getBestBuildForCharacter(character, amount) {
    let result = await FindBestBuild(character, amount);
    downloadJSON(getBuildAsJSON(bestBuild[character.name]));
}
function getBuildAsJSON(build) {
    let character = build.character;
    let b = {
        character: {
            name: character.name,
            level: character.level,
            normalAttackLevel: character.normalAttackLevel,
            elementalSkillLevel: character.elementalSkill,
            elementalBurstLevel: character.elementalBurst,
        },
        artifacts: character.artifacts,
        weapon: {
            name: character.weapon.name,
            level: character.weapon.level,
        },
        role: role,
        supportingElement: supportingElement,
        elementalResonance: elementalResonance,
        dmg: {
            totalDmg: build.dmg,
            sources: build.dmgSources,
        }
    }
    return JSON.stringify(b);
}
async function downloadJSON(build) {
    let result = window.confirm("Download build?");
    if (!result) {
        console.log("Download canceled");
        console.log(JSON.parse(build));
        return;
    }
    let blob = new Blob([build], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = "build.json";
    a.click();
}
async function validateAllCharacters() {
    //Goes through all characters and validates them
    let startTime = Date.now();
    for (const character in AllCharacters) {
        if (character == "index")
            continue;
        const element = AllCharacters[character];
        let result = await FindBestBuild(element, 10);
        if (result == null || result == undefined) {
            console.log(character + " FAILED");
        }

    }
    let stopTime = Date.now();
    console.log("ALL SUCCEDED in " + (stopTime - startTime) / 1000 + "seconds");
    console.log(bestBuild);
}
async function runSim(baseCharacter, baseWeapon, artifacts, runs) {
    let userCharacter = new Createcharacter(deepClone(baseCharacter), baseWeapon, artifacts);
    applyBonuses(userCharacter);
    let simulatedCharacter = AllCharacters[userCharacter.name];

    let result = await FindBestBuild(simulatedCharacter, runs);
    console.log("USER:");
    let result2 = Simulation(userCharacter);
    let score = EvalBuilds(result2, bestBuild[baseCharacter.name], role);
    console.log("USER:");
    console.log(result2);
    console.log("BEST:");
    console.log(bestBuild[baseCharacter.name]);
    let card = generateCharacterCard(result2.character, score, supportingElement, role, elementalResonance, true);
    let doc = document.getElementById("result-container-container");
    let parentDoc = document.getElementById("result-container");
    doc.innerHTML = "";
    doc.insertAdjacentHTML('beforeend', card.card);
    parentDoc.style.transform = "translate(-50%,50%) scale(0.1)";
    parentDoc.style.display = "flex";
    setTimeout(function () {
        parentDoc.style.transform = "translate(-50%,-50%) scale(1)";
    }, 100);
    return true;
}

async function FindBestBuild(baseChar, times) {

    let startTime = Date.now();
    let bestScore = await findBestBuildLoop(baseChar, times);
    let stopTime = Date.now();

    endEarly = false;
    return bestScore;
}
async function findBestBuildLoop(baseChar, times) {
    let bestScore = 0;
    let startTime = Date.now();
    let currentCharacter = baseChar.name;
    for (let index = 0; index < times; index++) {
        if (endEarly)
            return bestScore;

        AllWeapons[baseChar.weaponType].forEach(weaponToUse => {
            let character = deepClone(baseChar);
            supportType = character.supportType;
            let weapon = deepClone(AllWeapons[weaponToUse]);
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
            if (bestBuild[currentCharacter] == "" || bestBuild[currentCharacter] == undefined) {
                bestBuild[currentCharacter] = result;
            }
            let evalResult = EvalBuilds(result, bestBuild[currentCharacter], role);
            if (evalResult > 100) {
                bestBuild[currentCharacter] = result;
                bestScore = evalResult;

            }


        },);
        if (index % 100 == 0) {
            document.getElementById("currentSimRun").innerText = index;
            document.getElementById("percentDone").innerText = Math.floor(index / times * 100);
            document.getElementById("simProgressBar").style.width = Math.floor(index / times * 100) + "%";
            document.getElementById("timeLeft").innerText = Math.floor((Date.now() - startTime) / index * (times - index) / 1000) + " seconds";
            await delay(1);
        }
    }
    return bestScore;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
        this.supportType2 = baseCharacter.supportType2 || "null";
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
        this.bondOfLifeToRemove = function (amount) {
            this.bondOfLife -= amount;
            if (this.bondOfLife < 0)
                this.bondOfLife = 0;
            ;
        }
        this.applyBondOfLife = function (amount) {
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
            }

        }
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
    if (character.name == "Neuvillette") {
        for (buff of character.currentBuffs) {
            if (buff.Type == "Discipline of the Supreme Arbitration") {
                let currentHP = character.HP();
                //Add 0.6% bonus for every 1% of current HP over 30% max hp
                let newBonus = 0;
                if (currentHP > 0.3 * character.HP())
                    newBonus = (currentHP - 0.3 * character.HP()) * 0.6;
                //max 30% bonus
                if (newBonus > 30)
                    newBonus = 30;
                character.advancedstats.elementalBonuses[1].Value += newBonus;
                buff.Value = Math.floor(newBonus);
                buff.currentHP = currentHP;
            }

        }
    }
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
    targetsBurning = false;
    persTimer = -1;
    elementalDMGSources.superconductDMG = 0;
    elementalDMGSources.overloadDMG = 0;
    elementalDMGSources.electrochargedDMG = 0;
    elementalDMGSources.bloomDMG = 0;
    elementalDMGSources.burningDMG = 0;
    elementalDMGSources.hyperbloomDMG = 0;
    elementalDMGSources.burgeoningDMG = 0;
    shouldGenerateBountifulCores = false;
    hasUrakuMisugiriBuff = false;
    shardsInPossession = 6;
}
function Simulation(character) {

    resetVariables();

    let heal = 0;
    let atkBuff = 0;
    let Character = character;
    let totalDmg = 0;
    let shield = 0;
    let dmgSources = { n: 0, c: 0, p: 0, e: 0, q: 0 };
    Character.sequence[role].forEach(action => {


        let attackAction = { Multiplier: 0, Element: "", isReaction: false, Scaling: null, type: "" };
        switch (action) {
            case "N1":
            case "N2":
            case "N3":
            case "N4":
            case "N5":
            case "C":
            case "P":
                if (Character.name == "Freminet") {
                    persTimer += 2;//Ult will be active 
                }
                attackAction.type = "NormalAttack";
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
                        attackAction.type = "ChargedAttack";
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
                        else if (Character.name == "Arlecchino") {
                            let buffToRemove = "";
                            for (buff of Character.currentBuffs) {
                                if (buff.Type == "BloodDirective") {
                                    let instances = buff.Value;
                                    //65% of HP * instances
                                    let totalBondOfLife = 65 * instances;
                                    Character.applyBondOfLife(totalBondOfLife);
                                    //remove buff
                                    buffToRemove = buff;
                                }
                            }
                            if (buffToRemove != "")
                                Character.currentBuffs.splice(Character.currentBuffs.indexOf(buffToRemove), 1);
                        }
                        else if (Character.name == "Neuvillette") {
                            for (buff of character.currentBuffs) {
                                if (buff.Type == "Discipline of the Supreme Arbitration") {
                                    let currentBonus = buff.Value;
                                    let currentHP = buff.currentHP;

                                    character.advancedstats.elementalBonuses[1].Value -= currentBonus;
                                    //remove 8% of max hp
                                    //if currentHp is above 50% max hp, remove 8% bonus
                                    if (currentHP > 0.5 * character.HP()) {
                                        let drain = 0.08 * character.HP();
                                        currentHP = currentHP - drain;
                                    }
                                    //Add 0.6% bonus for every 1% of current HP over 30% max hp
                                    let newBonus = 0;
                                    if (currentHP > 0.3 * character.HP()) {
                                        let currentHPPercent = currentHP / character.HP();
                                        newBonus = (currentHPPercent - 0.3) * 0.6 * 100;


                                    }
                                    //max 30% bonus
                                    if (newBonus > 30)
                                        newBonus = 30;
                                    character.advancedstats.elementalBonuses[1].Value += newBonus;
                                    buff.Value = Math.floor(newBonus);
                                    buff.currentHP = currentHP;
                                }

                            }
                        }
                        break;

                    case "P":
                        attackAction.Multiplier = Character.plungeAttack.Multiplier(Character.normalAttackLevel);
                        attackAction.Element = Character.plungeAttack.Element;
                        attackAction.isReaction = Character.plungeAttack.isReaction;
                        attackAction.Scaling = Character.plungeAttack.scaling;
                        attackAction.type = "PlungeAttack";
                        if (Character.name == "Itto") {
                            type = "ChargedAttack";
                            attackAction.type = "ChargedAttack";
                        }
                        break;
                }

                if (Character.name == "Ganyu") {
                    let newAttack = attackAction;
                    newAttack.action = "ChargedAttack";
                    let index = 0;

                    attackAction.Multiplier.forEach(multiplier => {
                        index++;
                        attackAction.Multiplier = multiplier;
                        if (index >= 2) {
                            character.currentBuffs.forEach(buff => {
                                if (buff.Type == "Undivided Heart")
                                    character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "Undivided Heart" });
                            });
                        }
                        let dmg = dmgCalc(newAttack, Character);

                        if (index >= 2)
                            dmg * 3;
                        totalDmg += dmg;
                        dmgSources.c += dmg;
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
                    totalDmg += dmgCalc(attackAction, Character);
                    if (action == "N5") {
                        Character.currentBuffs.forEach(buff => {
                            if (buff.Type == "Slitting Wind") {
                                totalDmg += dmgCalc(
                                    {
                                        Multiplier: 0.6,
                                        Element: "AnemoDMGBonus",
                                        isReaction: true,
                                        Scaling: "ATK",
                                        type: "NormalAttack"
                                    },
                                    Character);
                            } else if (buff.Type == "Frenzied Rockslide") {
                                totalDmg += dmgCalc(
                                    {
                                        Multiplier: 0.6,
                                        Element: "GeoDMGBonus",
                                        isReaction: true,
                                        Scaling: "ATK",
                                        type: "NormalAttack"
                                    },
                                    Character
                                );
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
                        newAttack.type = "ChargedAttack";
                        newAttack.isReaction = false;
                        newAttack.Scaling = "Blazing Eye";
                        totalDmg += dmgCalc(attackAction, Character);
                    }
                    totalDmg += dmgCalc(attackAction, Character);
                    dmgSources.c += totalDmg;
                } else {

                    let enemies = 1;
                    if (Character.weapon.Type != "Bow" || Character.weapon.Type != "Catalyst") {
                        enemies = numberOfEnemies;
                    }

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
                    if (Character.name == "Arlecchino") {
                        character.bondOfLifeToRemove(character.bondOfLife * 0.075);
                    } else if (Character.name == "Nilou") {
                        switch (Character.weapon.name) {
                            case "Key of Khaj-Nisut":
                                let stacks = 0;
                                for (buff of Character.currentBuffs) {
                                    if (buff.Source == "Key of Khaj-Nisut") {
                                        stacks++
                                    }
                                }
                                if (stacks < 3) {
                                    Character.currentBuffs.push({ Type: "ElementalMastery", Value: Character.HP() * (0.12 / 100), Source: "Key of Khaj-Nisut" });
                                }
                                break;
                        }
                    }
                    let dmg = dmgCalc(attackAction, Character) * enemies;
                    totalDmg += dmg;
                    if (Character.name == "Cyno") {
                        let isInUlt = false;
                        for (buff of Character.currentBuffs) {
                            if (buff.Type == "Pactsworn Pathclearer") {
                                isInUlt = true;
                                break;
                            }
                        }
                        if (isInUlt) {
                            dmgSources.q += dmg;
                        } else {
                            dmgSources.n += dmg;
                        }
                    }
                    else if (attackAction.type == "NormalAttack") {
                        dmgSources.n += dmg;
                    }
                    else if (attackAction.type == "ChargedAttack") {
                        dmgSources.c += dmg;
                    }
                    else if (attackAction.type == "PlungeAttack") {
                        dmgSources.p += dmg;
                    }

                }
                switch (Character.weapon.name) {
                    case "Light of Foliar Incision":
                        if (attackAction.Element != "PhysicalDMGBonus") {
                            if (attackAction.type != "ChargedAttack" || attackAction.type != "PlungeAttack") {
                                //Check if buff from this source is already applied
                                if (!Character.currentBuffs.some(buff => buff.Source == "Light of Foliar Incision")) {
                                    Character.currentBuffs.push({ Type: "ElementalDMG", Value: (12 / 100) * Character.EM(), Source: "Light of Foliar Incision" });
                                }

                            }
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
                    case "Key of Khaj-Nisut":
                        let stacks = 0;
                        for (buff of Character.currentBuffs) {
                            if (buff.Source == "Key of Khaj-Nisut") {
                                stacks++
                            }
                        }
                        if (stacks < 3) {
                            Character.currentBuffs.push({ Type: "ElementalMastery", Value: Character.HP() * (0.12 / 100), Source: "Key of Khaj-Nisut" });
                        }
                        break;
                    case "Fleuve Cendre Ferryman":
                        let hasFleuveBuff = false;
                        Character.currentBuffs.forEach(buff => {
                            if (buff.Source == "Fleuve Cendre Ferryman") {
                                hasFleuveBuff = true;
                            }
                        });
                        if (!hasFleuveBuff) {
                            Character.currentBuffs.push({ Type: "EnergyRecharge", Value: 32, Source: "Fleuve Cendre Ferryman" });
                        }
                        break;
                    case "Verdict":
                        //Remove all verdict buffs
                        for (buff of Character.currentBuffs) {
                            if (buff.Source == "Verdict") {
                                Character.currentBuffs.pop(buff);
                            }
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
    let bonusMultiplier = 0;
    if (character.weapon.name == "Thrilling Tales of Dragon Slayers")
        bonusMultiplier = (atkBuff * 2) + 100;
    let tmp = 0;
    for (source in dmgSources) {
        dmgSources[source] = Math.round(dmgSources[source]);
        tmp += dmgSources[source];
    }
    //Add elementalDMG sources to dmgsources if they are not 0
    let transformitiveDMG = 0;
    for (source in elementalDMGSources) {
        if (elementalDMGSources[source] != 0) {
            dmgSources[source] = elementalDMGSources[source];
            transformitiveDMG += elementalDMGSources[source];
        }
    }
    totalDmg += transformitiveDMG;
    return { dmg: Math.floor(totalDmg), character: Character, healing: heal, buff: atkBuff + bonusMultiplier, shield: shield, dmgSources: dmgSources };

}
function dmgCalc(attackAction, Character) {

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
        * (1 + getDamageBonus(Character, attackAction))
        * getCrit(Character, attackAction)
        * defCalc(Character)
        * resCalc(Character, attackAction.Element);
    dmg = (attackAction.isReaction || (supportingElement == "Bloom" && (attackAction.Element == "PyroDMGBonus" || attackAction.Element == "ElectroDMGBonus"))) ? (elementalMasteryCalc(dmg, attackAction.Element, Character)) : dmg;
    switch (Character.weapon.name) {
        case "Engulfing Lightning":
            let atkIncrease = (Character.advancedstats.energyRecharge - 100) * 0.28;
            if (atkIncrease > 80) {
                atkIncrease = 80;
            }
            Character.currentBuffs.push({ Type: "ATK%", Value: -atkIncrease })
            break;
        case "Uraku Misugiri":
            if (attackAction.Element == "GeoDMGBonus" && !hasUrakuMisugiriBuff) {
                //Find all buffs from Uraku Misugiri
                Character.currentBuffs.push({ Type: "NormalAttack", Value: 16 });
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 24 });
                Character.currentBuffs.push({ Type: "DEF%", Value: 20 });
                hasUrakuMisugiriBuff = true;

            }
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
        case "EM":
            return attackAction.Multiplier * character.EM();
        case "Blazing Eye":
            return attackAction.Multiplier;
        case "Combined":
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
                switch (attackAction.type) {
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

            if (attackAction.type == "ElementalSkill" || attackAction.type == "ElementalBurst") {

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
                switch (attackAction.type) {
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
                switch (attackAction.type) {
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
            switch (attackAction.type) {
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
            if (attackAction.type == "NormalAttack") {
                character.currentBuffs.forEach(buff => {
                    if (buff.Type == "YunJinBuff") {

                        flatDamage += buff.Value;
                    }
                });

            }
            break;
        case "Arlecchino":
            if (attackAction.type == "NormalAttack" || attackAction.type == "ChargedAttack") {
                let masqueOfTheRedDeathIncreaseMultiplier = 0;
                switch (character.normalAttackLevel) {
                    case 1:
                        masqueOfTheRedDeathIncreaseMultiplier = 120.4 / 100;
                        break;
                    case 2:
                        masqueOfTheRedDeathIncreaseMultiplier = 130.2 / 100;
                        break;
                    case 3:
                        masqueOfTheRedDeathIncreaseMultiplier = 140 / 100;
                        break;
                    case 4:
                        masqueOfTheRedDeathIncreaseMultiplier = 154 / 100;
                        break;
                    case 5:
                        masqueOfTheRedDeathIncreaseMultiplier = 163.8 / 100;
                        break;
                    case 6:
                        masqueOfTheRedDeathIncreaseMultiplier = 175 / 100;
                        break;
                    case 7:
                        masqueOfTheRedDeathIncreaseMultiplier = 190.4 / 100;
                        break;
                    case 8:
                        masqueOfTheRedDeathIncreaseMultiplier = 205.8 / 100;
                        break;
                    case 9:
                        masqueOfTheRedDeathIncreaseMultiplier = 221.2 / 100;
                        break;
                    case 10:
                        masqueOfTheRedDeathIncreaseMultiplier = 238 / 100;
                        break;
                }
                flatDamage += character.attack() * (masqueOfTheRedDeathIncreaseMultiplier * (1 + (character.bondOfLife / 100)));

            }
            break;
    }
    //Weapon buffs
    switch (character.weapon.name) {
        case "Cinnabar Spindle":
            if (attackAction.type == "ElementalSkill") {
                flatDamage += character.DEF() * 0.8;
            }
            break;
        case "Everlasting Moonglow":
            if (attackAction.type != "ElementalSkill" && attackAction.type != "ElementalBurst" && attackAction.type != "ChargedAttack" && attackAction.type != "PlungeAttack" && attackAction.type != undefined)
                flatDamage += character.HP() * 0.10;
        case "Redhorn Stonethresher":
            if (attackAction.type != "ElementalSkill" && attackAction.type != "ElementalBurst" && attackAction.type != "PlungeAttack" && attackAction.type != undefined)
                flatDamage += character.DEF() * 0.40;
            break;
    }
    for (buff of character.currentBuffs) {
        if (buff.Type == "FlatDMG") {
            if (buff.for != undefined) {
                if (buff.for == attackAction.type)
                    flatDamage += buff.Value;
                else if (buff.for == attackAction.type2) {
                    flatDamage += buff.Value;
                }
            } else {
                flatDamage += buff.Value;
            }
        }
    }
    //Aggravate
    if (attackAction.isReaction && attackAction.Element == "ElectroDMGBonus" && supportingElement == "Dendro")
        flatDamage += aggravate(character);
    //Spread
    if (attackAction.isReaction && attackAction.Element == "DendroDMGBonus" && supportingElement == "Electro")
        flatDamage += spread(character);
    return flatDamage;
}
function getDamageBonus(character, attackAction) {
    let bonus = 1;
    if (attackAction.type == "ElementalBurst") {
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "Emblem") {
                let multiplier = character.advancedstats.energyRecharge * 0.25;
                if (multiplier > 75)
                    multiplier = 75;
                bonus += multiplier / 100;
            }
        })
    }
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "AddativeBonusDMG") {
            if (attackAction.for != undefined) {
                if (attackAction.type == buff.for)
                    bonus += buff.Value / 100;
            }
            else
                bonus += buff.Value / 100;
        } else if (attackAction.type == buff.Type) {
            bonus += (buff.Value / 100);

        } else if (buff.type == "ElementalDMG") {
            bonus += (buff.Value / 100);
        }

    });
    if (character.ExtraMultiplier != null && character.ExtraMultiplier != undefined && character.ExtraMultiplier != []) {

        character.ExtraMultiplier.forEach(multiplier => {

            if (attackAction.type == multiplier.Type || multiplier.Type == "BonusDMG%") {

                bonus += (multiplier.Value / 100);

            }
        });
    }
    character.advancedstats.elementalBonuses.forEach(element => {
        if (element.Type == attackAction.Element) {
            bonus += (element.Value / 100);

        }
    });
    if (character.name == "Emilie") {
        if (targetsBurning) {
            for (buff of character.currentBuffs) {
                if (buff.Type == "Rectification") {
                    //every 1000 atk increase 15% bonus to max 36
                    let burningIncrease = (character.attack() / 1000) * 15;
                    if (burningIncrease > 36)
                        burningIncrease = 36;
                    bonus += burningIncrease / 100;
                }
            }
        }
    }
    return bonus;

}
function getCrit(character, attackAction) {
    if (character.critRate() >= 0) {
        let bonusCritRate = 0;
        if (character.name == "Ganyu") {
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Undivided Heart") {
                    bonusCritRate += buff.Value;
                }
            });
        }
        character.currentBuffs.forEach(buff => {
            if (buff.Type === "PlungeAttackCritRate" && attackAction.type === "PlungeAttack") {
                bonusCritRate += buff.Value;
            }
            else if (buff.Type === "ElementalSkillCritRate" && attackAction.type === "ElementalSkill") {
                bonusCritRate += buff.Value;
            }
        });
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
function elementalMasteryCalc(incomingDmg, type, character) {
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
    let bloomBonus = 0;
    let hyperbloomBonus = 0;
    let burgeoningBonus = 0;
    let dmg = 0;
    let amplyfyingReaction = false;
    if (supportingElement == null) {
        return incomingDmg;
    }
    else if (supportingElement == type) {
        return incomingDmg;
    }
    else {
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "Crimson") {
                overloadedBonus += 40;
                burningBonus += 40;
                meltBonus += 15;
                vaporizeBonus += 15;
                burgeoningBonus += 40;
            }
            else if (buff.Type == "ThunderingFury") {
                overloadedBonus += 40;
                electroChargedBonus += 40;
                superconductBonus += 40;
                hyperbloomBonus += 40;
                burgeoningBonus += 40;
                aggravatedBonus += 20;
            }
            else if (buff.Type == "VV") {
                swirlBonus += 60;
            }
            else if (buff.Type == "All things Are of the Earth") {
                burningBonus += buff.Value.transformitiveBonus
                bloomBonus += buff.Value.transformitiveBonus
                hyperbloomBonus += buff.Value.transformitiveBonus
                burgeoningBonus += buff.Value.transformitiveBonus

            }
            else if (buff.Type == "bloomBonus") {
                bloomBonus += buff.Value;
            }
            else if (buff.Type == "Dreamy Dance of Aeons") {
                let hpToBuff = (character.HP() - 30000);
                if (hpToBuff < 0)
                    hpToBuff = 0;
                let bloomBuff = (hpToBuff / 1000) * 9;
                if (bloomBuff > 400)
                    bloomBuff = 400;
                bloomBonus += bloomBuff;
            }
        });
        vaporizeBonus = (vaporizeBonus == 0) ? 0 : vaporizeBonus / 100;
        meltBonus = (meltBonus == 0) ? 0 : meltBonus / 100;
        superconductBonus = (superconductBonus == 0) ? 0 : superconductBonus / 100;
        electroChargedBonus = (electroChargedBonus == 0) ? 0 : electroChargedBonus / 100;
        swirlBonus = (swirlBonus == 0) ? 0 : swirlBonus / 100;
        overloadedBonus = (overloadedBonus == 0) ? 0 : overloadedBonus / 100;
        burningBonus = (burningBonus == 0) ? 0 : burningBonus / 100;
        bloomBonus = (bloomBonus == 0) ? 0 : bloomBonus / 100;
        hyperbloomBonus = (hyperbloomBonus == 0) ? 0 : hyperbloomBonus / 100;
        burgeoningBonus = (burgeoningBonus == 0) ? 0 : burgeoningBonus / 100;

        //Amplifying reaction
        let vaporizeMultiplier = 2 * ((1 + (2.78 * (em / (em + 1400)))) + (1 + vaporizeBonus));
        let reverseVaporizeMultiplier = 1.5 * ((1 + (2.78 * (em / (em + 1400)))) + (1 + vaporizeBonus));
        let meltMultiplier = 2 * ((1 + (2.78 * (em / (em + 1400)))) + (1 + meltBonus));
        let reverseMeltMultiplier = 1.5 * ((1 + (2.78 * (em / (em + 1400)))) + (1 + meltBonus));
        switch (supportingElement) {
            case "Pyro":
                switch (type) {
                    case "Hydro":
                        dmg = vaporizeMultiplier * incomingDmg;
                        amplyfyingReaction = true;
                        break;
                    case "Electro":
                        dmg += overloaded(em, lvl, "Pyro", character, overloadedBonus);
                        elementalDMGSources.overloadDMG += dmg;
                        break;
                    case "Cryo":
                        dmg = reverseMeltMultiplier * incomingDmg;
                        amplyfyingReaction = true;
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Pyro", character, swirlBonus);
                        elementalDMGSources.swirlDMG += dmg;
                        break;
                    case "Dendro":
                        dmg += burning(em, lvl, "Pyro", character, burningBonus);
                        elementalDMGSources.burningDMG += dmg;
                        break;
                    case "Geo":
                        crystalized(character);
                        break;
                }
                break;
            case "Hydro":
                switch (type) {
                    case "Pyro":
                        dmg = reverseVaporizeMultiplier * incomingDmg;
                        amplyfyingReaction = true;
                        break;
                    case "Electro":
                        dmg += electroCharged(em, lvl, "Electro", character, electroChargedBonus);
                        elementalDMGSources.electroChargedDMG += dmg;
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Hydro", character, swirlBonus);
                        elementalDMGSources.swirlDMG += dmg;
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
                        dmg += bloom(em, lvl, "Dendro", character, bloomBonus);
                        elementalDMGSources.bloomDMG += dmg;
                        break;
                    case "Geo":
                        crystalized(character);
                        break;
                }
                break;
            case "Cryo":
                switch (type) {
                    case "Electro":
                        dmg += superconduct(em, lvl, "Cryo", character, superconductBonus);
                        elementalDMGSources.superconductDMG += dmg;
                        break;
                    case "Pyro":
                        dmg = meltMultiplier * incomingDmg;
                        amplyfyingReaction = true;
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Cryo", character, swirlBonus);
                        elementalDMGSources.swirlDMG += dmg;
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
                    case "Geo":
                        crystalized(character);
                        break;
                }
                break;
            case "Electro":
                switch (type) {
                    case "Hydro":
                        dmg += electroCharged(em, lvl, "Electro", character, electroChargedBonus);
                        elementalDMGSources.electroChargedDMG += dmg;
                        break;
                    case "Pyro":
                        dmg += overloaded(em, lvl, "Pyro", character, overloadedBonus);
                        elementalDMGSources.overloadDMG += dmg;
                        break;
                    case "Cryo":
                        dmg += superconduct(em, lvl, "Cryo", character, superconductBonus);
                        elementalDMGSources.superconductDMG += dmg;
                        break;
                    case "Anemo":
                        dmg += swirl(em, lvl, "Electro", character, swirlBonus)
                        elementalDMGSources.swirlDMG += dmg;
                        break;
                    case "Geo":
                        crystalized(character);
                        break;
                }
                break;
            case "Anemo":
                if (type != "Anemo" && type != "Geo" && type != "Dendro") {
                    dmg += swirl(em, lvl, type, character, swirlBonus);
                    elementalDMGSources.swirlDMG += dmg;
                }
                break;
            case "Dendro":
                switch (type) {
                    case "Pyro":
                        dmg += burning(em, lvl, "Pyro", character, burningBonus);
                        elementalDMGSources.burningDMG += dmg;
                        break;
                    case "Hydro":
                        if (shouldGenerateBountifulCores)
                            dmg += bountifulCore(em, lvl, "Dendro", character, bloomBonus);
                        else
                            dmg += bloom(em, lvl, "Dendro", character, bloomBonus);
                        elementalDMGSources.bloomDMG += dmg;
                        break;


                }
                break;
            case "Bloom":
                switch (type) {
                    case "Pyro":
                        dmg += burgeoning(em, lvl, "Dendro", character, burgeoningBonus);
                        elementalDMGSources.burgeoningDMG += dmg;
                        break;
                    case "Electro":
                        dmg += hyperbloom(em, lvl, "Dendro", character, hyperbloomBonus);
                        elementalDMGSources.hyperbloomDMG += dmg;
                        break;
                }
                if (character.name == "Kaveh") {
                    for (let i = 0; i < 5; i++) {
                        dmg += bloom(em, lvl, "Dendro", character, bloomBonus);
                    }
                    elementalDMGSources.bloomDMG += dmg;
                }

                break;
            case "Geo":
                if (type != "Anemo" && type != "Geo" && type != "Dendro") {
                    crystalized(character);
                }
                break;
        }
        if (amplyfyingReaction)
            return dmg;
        else
            return incomingDmg;
    }
}
function overloaded(em, lvl, element, character, overloadedBonus) {
    return ((superconductBaseDMG[lvl] * 4) * (1 + ((16 * (em / (em + 2000)))) + overloadedBonus) * resCalc(character, element));
}
function electroCharged(em, lvl, element, character, electroChargedBonus) {
    return ((superconductBaseDMG[lvl] * 2.4) * (1 + ((16 * (em / (em + 2000)))) + electroChargedBonus) * resCalc(character, element)) * 3.5;
}
function superconduct(em, lvl, element, character, superconductBonus) {
    if (!superconductRes) {
        character.currentBuffs.push({ Type: "ResShred", Value: 40, Element: "PhysicalDMGBonus" });
        superconductRes = true;
    }
    return ((superconductBaseDMG[lvl]) * (1 + ((16 * (em / (em + 2000)))) + superconductBonus) * resCalc(character, element));
}
function swirl(em, lvl, element, character, swirlBonus) {
    let isShreded = false;
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "VVShred")
            isShreded = true;

    });

    let dmg = ((superconductBaseDMG[lvl] * 1.2) * (1 + ((16 * (em / (em + 2000)))) + swirlBonus) * resCalc(character, element));
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
function aggravate(character) {
    let em = character.EM();
    let lvl = character.level;
    let aggravateBonus = 0;
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "Aggravate") {
            aggravateBonus = buff.Value;
        }
    });
    aggravateBonus = (aggravateBonus == 0) ? 0 : aggravateBonus / 100;
    let aggravateBaseDmg = 1.15 * LvlMultiplier[lvl];
    let aggravateEM = ((1 + (5 * (em / (em + 1200)))) + (1 + aggravateBonus));
    let aggravateDmg = aggravateBaseDmg * aggravateEM;
    return aggravateDmg;
}
function spread(character) {
    let em = character.EM();
    let lvl = character.level;
    let spreadBonus = 0;
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "Spread") {
            spreadBonus = buff.Value;
        }
    });
    spreadBonus = (spreadBonus == 0) ? 0 : spreadBonus / 100;
    let spreadBaseDmg = 1.2 * LvlMultiplier[lvl];
    let spreadEM = ((1 + (5 * (em / (em + 1200)))) + (1 + spreadBonus));
    let spreadDmg = spreadBaseDmg * spreadEM;
    return spreadDmg;
}
function burning(em, lvl, element, character, burningBonus) {


    //10 hits over 4s
    const burningBaseDmg = 0.25 * LvlMultiplier[character.level];
    const burningEM = 1 + (16 * (em / (em + 1200))) + burningBonus;
    targetsBurning = true;
    return (burningBaseDmg * burningEM) * resCalc(character, element) * 3;//about 3 ticks per attack on avg
}
function bloom(em, lvl, element, character, bloomBonus) {
    const bloomBaseDmg = 2 * LvlMultiplier[character.level];
    const bloomEM = 1 + (16 * (em / (em + 1200))) + bloomBonus;
    return (bloomBaseDmg * bloomEM) * resCalc(character, element) * 2 * 2;//2 hits 2 cores
}
function bountifulCore(em, lvl, element, character, bloomBonus) {
    const bloomBaseDmg = 2 * LvlMultiplier[character.level];
    const bloomEM = 1 + (16 * (em / (em + 1200))) + bloomBonus;
    return (bloomBaseDmg * bloomEM) * resCalc(character, element) * numberOfEnemies * 2;//big aoe
}
function burgeoning(em, lvl, element, character, burgeoningBonus) {
    const burgeoningBaseDmg = 3 * LvlMultiplier[character.level];
    const burgeoningEM = 1 + (16 * (em / (em + 1200))) + burgeoningBonus;
    return (burgeoningBaseDmg * burgeoningEM) * resCalc(character, element) * 3;//1 hit on 3 enemies
}
function hyperbloom(em, lvl, element, character, hyperbloomBonus) {
    const hyperBloomBaseDmg = 3 * LvlMultiplier[character.level];
    const hyperBloomEM = 1 + (16 * (em / (em + 1200))) + hyperbloomBonus;
    return (hyperBloomBaseDmg * hyperBloomEM) * resCalc(character, element) * 2 * 2;//2 hits and 2 enemies within 1m
}
function crystalized(character) {
    //TODO implement crystalized and buff from that
    shardsInPossession++;
    console.log(shardsInPossession);
    switch (character.weapon.name) {
        case "Verdict":
            let buffStacks = 0;
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Verdict") {
                    buffStacks++;
                }
            });
            if (stacks < 2) {
                character.currentBuffs.push({ Type: "ElementalSkill", Source: "Verdict", Value: 18 });
            }
            break;
    }
    return 0;
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
const LvlMultiplier = {
    ["1b"]: 17.165605,
    ["20b"]: 80.584775,
    ["20a"]: 80.584775,
    ["40b"]: 207.382042,
    ["40a"]: 207.382042,
    ["50b"]: 323.601597,
    ["50a"]: 323.601597,
    ["60b"]: 492.88489,
    ["60a"]: 492.88489,
    ["70b"]: 765.640231,
    ["70a"]: 765.640231,
    ["80b"]: 1077.443668,
    ["80a"]: 1077.443668,
    ["90b"]: 1446.853458
}