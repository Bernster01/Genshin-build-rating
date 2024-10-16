let bestBuild = { Dps: {}, Support: {} };
let supportingElement = "noElement";
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
let propSurplusStacks = 0;
let huntersPathBuff = false;
let ibisPiercerBuffStacks = 0;
let kingsSquireBuff = false;
let rangeGaugeStacks = 0;
let rangeGaugeBuff = false;
let SongofStillnessBuff = false;
let silvershowerElementalStack = false;
let silvershowerBondofLifeStack = false;
let silvershowerHealingStack = false;
let scionOftheBlazingSunBuff = false;
let beaconOfTheReedSeaBuff = false;
let forestRegaliaBuff = false;
let mailedFlowerBuff = false;
let tidalShadowBuff = false;
let portablePowerSawStacks = 0;
let portablePowerSawBuff = false;
let crimsonMoonsSemblanceBondofLifeBuff = false;
let dialoguesOfTheDesertSagesBuff = false;
let missiveWindspearBuff = false;
let moonpiercerBuff = false;
let sapwoodBladeBuff = false;
let prospectorsDrillStacks = 0;
let prospectorsDrillBuff = false;
let cranesEchoingCallBuff = false;
let flowingPurityBuff = false;
let jadefallsSplendorBuff = false;
let tulaytullahsRemembranceBuff = false;
let partyHasDeepwoodMemories = false;
let deepWoodMemoriesBuff = false;
let desertPavilionChronicleBuff = false;
let flowerOfparadiseLostStacks = 0;
let fragmentOfHarmonicWhimsyStacks = 0;
let marechausseeHunterStacks = 0;
let hasShield = false;
let nighttimeWhispersInTheEchoingWoodsBuff = false;
let gildedDreamsBuff = false;
let unfinishedReverieBuff = false;
let nymphsDreamNormalStack = false;
let nymphsDreamSkillStack = false;
let nymphsDreamBurstStack = false;
let shimenawasReminiscenceBuff = false;
let retracingBolideBuff = false;
let summitShaperBuff = false;
let paleFlameStacks = 0;
let archaicPetraBuff = false;
let userBuild = {};
let partyMemberElements = [];
let obsidianCodexBuff = false;
let obsidianCodexBuff2 = false;
let surfUpBuff = false;
let surfUpBuffStacks = 0;
let hasRingofYaxcheBuff = false;
let footprintOfTheRainbowBuff = false;
let cynoC6Stacks = 0;
let HoD = false;
let kazuhaC6Buff = false;
let nahidaC2Buff = false;
let triggerHyperbloom = false;
let triggerBurgeoning = false;
let partyElementalMasteryBonus = 0;
let nighttimeWhispersBuff = false;
let Yun_JinC4Buff = false;
let peakPatrolStacks = 0;
let scrollOfTheHeroOfCinderCityBuff = false;
let scrollOfTheHeroOfCinderCityBuffBig = false;

function getBuild(build, score) {
    let character = build.character;
    let b = {
        character: {
            name: character.name,
            level: character.level,
            normalAttackLevel: character.normalAttackLevel,
            elementalSkillLevel: character.elementalSkill,
            elementalBurstLevel: character.elementalBurst,
            buffs: character.currentBuffs,
            element: character.element,
            splashArt: character.card,
            energyOffset: character.energyOffset,
            constellation: character.constellations,
            hp: character.HP(),
            attack: character.attack(),
            critRate: character.critRate(),
            critDMG: character.critDMG(),
            def: character.DEF(),
            em: character.EM(),
            energyRecharge: character.energyRecharge(),
            healingBonus: character.advancedstats.healingBonus,
            shieldStrength: character.advancedstats.shieldStrength,
            pyroDMGBonus: character.advancedstats.elementalBonuses[0],
            hydroDMGBonus: character.advancedstats.elementalBonuses[1],
            dendroDMGBonus: character.advancedstats.elementalBonuses[2],
            electroDMGBonus: character.advancedstats.elementalBonuses[3],
            anemoDMGBonus: character.advancedstats.elementalBonuses[4],
            cryoDMGBonus: character.advancedstats.elementalBonuses[5],
            geoDMGBonus: character.advancedstats.elementalBonuses[6],
            physicalDMGBonus: character.advancedstats.elementalBonuses[7],
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
        },
        supportValues: {
            healing: build.healing,
            buff: build.buff,
            shield: build.shield
        },
        buildScore: score

    }
    return b;
}
async function downloadJSON(build) {
    let result = window.confirm("Download build?");
    if (!result) {
        // console.log("Download canceled");
        // console.log(JSON.parse(build));
        return;
    }
    let blob = new Blob([build], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = "build.json";
    a.click();
}
async function validateAllCharacters(runs = 1) {
    //Goes through all characters and validates them
    let startTime = Date.now();
    for (const character in AllCharacters) {
        // console.log("Generating Build for " + character);
        let tmpRole = role;
        if (character == "index")
            continue;
        const element = AllCharacters[character];

        role = "Dps";
        // console.log("Simulating Dps " + character);
        let result = await FindBestBuild(element, runs);
        //Switch to other role
        role = "Support";
        // console.log("Simulating Support " + character);
        let result2 = await FindBestBuild(element, runs);

        role = tmpRole;
        if (result == null || result == undefined) {
            console.log(character + " FAILED");
        }
        await delay(4);
    }
    let stopTime = Date.now();
    // console.log("ALL SUCCEDED in " + (stopTime - startTime) / 1000 + "seconds");
    // console.log(bestBuild);
}
async function runSim(baseCharacter, baseWeapon, artifacts, runs, constellation = 0) {
    let userCharacter = new Createcharacter(deepClone(baseCharacter), baseWeapon, artifacts);
    applyBonuses(userCharacter);
    userCharacter.constellations = constellation;
    let simulatedCharacter = AllCharacters[userCharacter.name];

    let result = await FindBestBuild(simulatedCharacter, runs);
    // console.log("USER:");

    let result2 = Simulation(userCharacter);
    let score = EvalBuilds(result2, bestBuild[role][baseCharacter.name], role);
    console.log("USER:");
    console.log(result2);
    console.log("BEST:");
    console.log(bestBuild[role][baseCharacter.name]);
    let card = generateCharacterCard(result2.character, score, supportingElement, role, elementalResonance, true);
    let doc = document.getElementById("result-container-container");
    let parentDoc = document.getElementById("result-container");
    doc.innerHTML = "";
    doc.insertAdjacentHTML('beforeend', card.card);
    document.getElementById("result-container-centerer").style.display = "flex";
    parentDoc.style.transform = "scale(0.1)";
    parentDoc.style.display = "flex";
    let size = (window.innerWidth < 1920) ? window.innerWidth / 1920 : 1;
    setTimeout(function () {
        parentDoc.style.transform = "scale(" + size + ")";
        scaleCard();
    }, 100);
    userBuild = getBuild(result2, score);
    return true;
}

async function FindBestBuild(baseChar, times) {

    let bestScore = await findBestBuildLoop(baseChar, times);


    endEarly = false;
    return bestScore;
}
async function findBestBuildLoop(baseChar, times) {
    let bestScore = 0;
    let startTime = Date.now();
    let currentCharacter = baseChar.name;
    let latestBuildTime = Date.now();
    let improvements = 0;
    updateImprovements(improvements);
    for (let index = 0; index < times; index++) {
        // console.log(baseChar.name + " " + role + " Run " + index + " of " + times);
        if (endEarly)
            return bestScore;
        let artifacts = GenerateArtifacts(baseChar.scalingType)
        let articatCombosTested = [];
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
            
            //Go through each artifact set 4piece combo and 2piece combos
            setsList.forEach(set => {
                let newCharacter = new Createcharacter(
                    deepClone(character),
                    deepClone(weapon),
                    artifacts
                );
                if(newCharacter.rarity == 4){
                    newCharacter.constellations = 6;
                }
                //test the 4 piece set
                newCharacter.artifacts = changeSet4piece(set, newCharacter.artifacts);
                applyBonuses(newCharacter);
                let result = Simulation(newCharacter);
                if (bestBuild[role][currentCharacter] == "" || bestBuild[role][currentCharacter] == undefined) {
                    bestBuild[role][currentCharacter] = getBuild(deepClone(result));
                }
                let evalResult = EvalBuilds(result, bestBuild[role][currentCharacter], role);
                if (evalResult > 100) {
                    bestBuild[role][currentCharacter] = getBuild(deepClone(result), evalResult);
                    bestScore = evalResult;
                    improvements++;
                    updateImprovements(improvements);
                    latestBuildTime = Date.now();

                }
                newCharacter = null;
                //Test all 2 piece combos
                setsList.forEach(set2 => {
                    //Check if the set has already been tested with set2
                    let alreadyTested = false;
                    articatCombosTested.forEach(combo => {
                        if (combo == set + set2)
                            alreadyTested = true;
                    });
                    if (alreadyTested) {
                        return;
                    }
                    let newCharacter2 = new Createcharacter(
                        deepClone(character),
                        deepClone(weapon),
                        artifacts
                    );
                    if(newCharacter2.rarity == 4){
                        newCharacter2.constellations = 6;
                    }
                    newCharacter2.artifacts = changeSet2piece([set, set2], newCharacter2.artifacts);
                    applyBonuses(newCharacter2);

                    let result2 = Simulation(newCharacter2);
                    let evalResult2 = EvalBuilds(result2, bestBuild[role][currentCharacter], role);
                    if (evalResult2 > 100) {
                        bestBuild[role][currentCharacter] = getBuild(deepClone(result), evalResult);
                        bestScore = evalResult2;
                        improvements++;
                        updateImprovements(improvements);
                        latestBuildTime = Date.now();
                    }
                    newCharacter2 = null;
                    articatCombosTested.push(set + set2);
                });
            });
        });
        if (index % 1 == 0) {
            const timeSinceLastBuildElement = document.getElementById("build_improvements_time");
            timeSinceLastBuildElement.innerText = formatTime((Date.now() - latestBuildTime) / 1000);
            document.getElementById("currentSimRun").innerText = index;
            document.getElementById("percentDone").innerText = Math.floor(index / times * 100);
            document.getElementById("simProgressBar").style.width = Math.floor(index / times * 100) + "%";
            document.getElementById("timeLeft").innerText = formatTime(Math.floor((Date.now() - startTime) / index * (times - index) / 1000));
            document.getElementById("loadingPaimon").style.left = Math.floor(index / times * 100) + "%";
            //

            await delay(4);
        }

    }

    return bestScore;
}
async function updateImprovements(number) {
    await delay(4);
    const improvements = document.getElementById("build_improvements");
    improvements.innerText = number;


}
function formatTime(seconds) {
    if (seconds < 1) {
        return "< 1 second";
    }
    seconds = Math.floor(seconds);
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    let output = "";
    if (hours > 0)
        output += hours + " hours ";
    if (minutes > 0)
        output += minutes + " minutes ";
    if (sec > 0)
        output += sec + " seconds";
    return output;
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
    artifactFourPiece = "";
    artifactTwoPiece = [];
    constructor(baseCharacter, weapon, artifacts) {
        this.name = baseCharacter.name;
        this.src = baseCharacter.src;
        this.card = baseCharacter.card;
        this.supportType = baseCharacter.supportType;
        this.supportType2 = baseCharacter.supportType2 || "null";
        this.origin = baseCharacter.origin || "unknown";
        this.element = baseCharacter.element;
        this.level = baseCharacter.level;
        this.energyOffset = baseCharacter.energyOffset;
        this.weapon = weapon;
        this.baseAttack = baseCharacter.baseAttack;
        this.baseDEF = baseCharacter.baseDEF;
        this.nightsoul = false;
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
        this.rarity = baseCharacter.rarity || "unknown";
        this.constellations = 0;
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
        case "Makhaira Aquamarine":
            character.currentBuffs.push({ Type: "ATKflat", Value: (48 / 100) * character.EM() });
            break;
        case "Staff of the Scarlet Sands":
            character.currentBuffs.push({ Type: "ATKflat", Value: (52 / 100) * character.EM() });
            break;
        case "Wandering Evenstar":
            character.currentBuffs.push({ Type: "ATKflat", Value: (48 / 100) * character.EM() });
            break;
        case "Summit Shaper":
            if (!summitShaperBuff) {
                character.currentBuffs.push({ Type: "ATK%", Value: 40, Source: "Summit Shaper" });
                summitShaperBuff = true;
            }
            break;
        case "The First Great Magic":
            let hasSameElement = 0;
            partyMemberElements.forEach(element => {
                if (element == character.element)
                    hasSameElement++;
            });
            character.currentBuffs.push({ Type: "ATK%", Value: 16 * hasSameElement, Source: "The First Great Magic" });
            break;
        case "Sacrifical Jade":
            if (character.subDpsType == "Off-field") {
                character.currentBuffs.push({ Type: "HP%", Value: 40 }, { Type: "ElementalMastery", Value: 50 });
            }


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
    } else if (character.name == "Tighnari") {
        let buff = character.EM() * (0.06 / 100)
        if (buff > 60)
            buff = 60;
        character.currentBuffs.push({ Type: "ChargedAttack", Value: buff });
        character.currentBuffs.push({ Type: "ElementalBurst", Value: buff });

    }
    if (partyHasDeepwoodMemories) {
        character.currentBuffs.push({ Type: "ResShred", Value: 30, Element: "DendroDMGBonus" });
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
            character.artifactFourPiece = currentSet.replace(/_/g, " ");

            //Check twoPiece and fourPiece is a lust instead of the expected object
            if (artifactSets[array[i]].twoPiece.Type == undefined) {
                artifactSets[array[i]].twoPiece.forEach(buff => {
                    character.currentBuffs.push(buff);
                });
            }
            else {
                character.currentBuffs.push(artifactSets[array[i]].twoPiece);
            }
            if (artifactSets[array[i]].fourPiece != undefined) {
                if (currentSet == "Gladiators_Finale") {
                    if (character.weapon.weaponType == "Sword" || character.weapon.weaponType == "Claymore" || character.weapon.weaponType == "Polearm") {
                        character.currentBuffs.push({ Type: "NormalAttack", Value: 35, Source: "Gladiator's Finale" });
                    }
                }
                else if (currentSet == "Wanderers_Troupe") {

                    if (character.weapon.weaponType == "Bow" || character.weapon.weaponType == "Catalyst") {
                        character.currentBuffs.push({ Type: "ChargedAttack", Value: 35, Source: "Wanderer's Troupe" });

                    }
                }
                else if (currentSet == "Blizzard_Strayer") {
                    if (character.element == "CryoCharacter" || supportingElement == "Cryo") {
                        character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "Blizzard Strayer" });
                        if (character.element == "HydroCharacter" || supportingElement == "Hydro")
                            character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "Blizzard Strayer (Frozen)" });
                    }
                } else if (currentSet == "Golden_Troupe") {
                    character.currentBuffs.push({ Type: "ElementalSkill", Value: 25, Source: "Golden Troupe" });
                    if (character.subDpsType == "Off-field" && role == "Support") {
                        character.currentBuffs.push({ Type: "ElementalSkill", Value: 25, Source: "Golden Troupe" });
                    }
                } else if (currentSet == "Retracing_Bolide") {
                    if (hasShield) {
                        let buffs = [
                            { Type: "ChargedAttack", Value: 40 },
                            { Type: "NormalAttack", Value: 40 }
                        ];
                        buffs.forEach(b => {
                            character.currentBuffs.push({ Type: b.Type, Value: b.Value, Source: "Retracing Bolide" });
                        });
                        retracingBolideBuff = true;
                    }
                } else if (currentSet == "Bloodstained_Chivalry") {
                    if (character.havePhysicalChargedAttack) {
                        character.currentBuffs.push({ Type: "ChargedAttack", Value: 50, Source: "Bloodstained Chivalry" });
                    }
                } else if (currentSet == "Lavawalker") {
                    if (character.element == "PyroCharacter" || supportingElement == "Pyro") {
                        character.currentBuffs.push({ Type: "PyroDMGBonus", Value: 35 * 0.4, Source: "Lavawalker" });
                    }
                } else if (currentSet == "Thundersoother") {
                    if (character.element == "ElectroCharacter" || supportingElement == "Electro") {
                        character.currentBuffs.push({ Type: "ElectroDMGBonus", Value: 35 * 0.4, Source: "Thunder Soother" });
                    }
                } else if (currentSet == "Vourukashas_Glow") {
                    if (role == "dps" || (role == "Support" && character.name == "Dehya")) {
                        character.currentBuffs.push({ Type: "ElementalSkill", Value: (8 * 5) - 10, Source: "Vourukasha's Glow" });
                        character.currentBuffs.push({ Type: "ElementalBurst", Value: (8 * 5) - 10, Source: "Vourukasha's Glow" });
                    }
                } else if (currentSet == "Thundering_Fury") {
                    character.currentBuffs.push({ Type: "ThunderingFury", Value: 40, Source: "Thundering Fury" });
                    character.currentBuffs.push({ Type: "Aggravate", Value: 20, Source: "Thundering Fury" });
                    if ((character.element == "ElectroCharacter" && supportingElement == "Dendro") || (character.element == "DendroCharacter" && supportingElement == "Electro")) {
                        character.sequence[role].push("E");
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
            character.artifactTwoPiece.push(currentSet.replace(/_/g, " "));
            if (artifactSets[array[i]].twoPiece.Type == undefined) {
                artifactSets[array[i]].twoPiece.forEach(buff => {
                    character.currentBuffs.push(buff);
                });
            }
            else if (currentSet == "Scroll_of_the_Hero_of_Cinder_City") {
                if (character.origin == "Natlan") {
                    character.energyOffset -= 10;
                }
            }
            else {
                character.currentBuffs.push(artifactSets[array[i]].twoPiece);
            }
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
    elementalDMGSources.swirlDMG = 0;
    HoD = false;
    shouldGenerateBountifulCores = false;
    hasUrakuMisugiriBuff = false;
    peakPatrolStacks = 0;
    shardsInPossession = 6;
    propSurplusStacks = 0;

    sapwoodBladeBuff = false;
    summitShaperBuff = false;
    //some bow buffs
    huntersPathBuff = false;
    ibisPiercerBuffStacks = 0;
    kingsSquireBuff = false;
    rangeGaugeStacks = 0;
    rangeGaugeBuff = false;
    SongofStillnessBuff = false;
    silvershowerElementalStack = false;
    silvershowerBondofLifeStack = false;
    silvershowerHealingStack = false;
    scionOftheBlazingSunBuff = false;
    //some claymore buffs
    beaconOfTheReedSeaBuff = false;
    forestRegaliaBuff = false;
    mailedFlowerBuff = false;
    tidalShadowBuff = false;
    portablePowerSawStacks = 0;
    portablePowerSawBuff = false;
    //Some polearm buffs
    crimsonMoonsSemblanceBondofLifeBuff = false;
    dialoguesOfTheDesertSagesBuff = false;
    missiveWindspearBuff = false;
    moonpiercerBuff = false;
    prospectorsDrillStacks = 0;
    prospectorsDrillBuff = false;
    footprintOfTheRainbowBuff = false;

    //Some catalyst buffs
    cranesEchoingCallBuff = false;
    flowingPurityBuff = false;
    jadefallsSplendorBuff = false;
    tulaytullahsRemembranceBuff = false;
    surfUpBuff = false;
    surfUpBuffStacks = 0;
    hasRingofYaxcheBuff = false;

    deepWoodMemoriesBuff = false;
    flowerOfparadiseLostStacks = 0;
    fragmentOfHarmonicWhimsyStacks = 0;
    marechausseeHunterStacks = 0;
    nighttimeWhispersInTheEchoingWoodsBuff = false;
    hasShield = false;
    gildedDreamsBuff = false;
    unfinishedReverieBuff = false;

    nymphsDreamNormalStack = false;
    nymphsDreamSkillStack = false;
    nymphsDreamBurstStack = false;
    shimenawasReminiscenceBuff = false;
    retracingBolideBuff = false;
    paleFlameStacks = 0;
    archaicPetraBuff = false;
    obsidianCodexBuff = false;
    obsidianCodexBuff2 = false;
    kazuhaC6Buff = false;
    nahidaC2Buff = false;
    partyElementalMasteryBonus = 0;
    nighttimeWhispersBuff = false;
    Yun_JinC4Buff = false;
    scrollOfTheHeroOfCinderCityBuff = false;
    scrollOfTheHeroOfCinderCityBuffBig = false;
    if (document.getElementById("partyGivesShield").checked) {
        hasShield = true;
    }
}
function Simulation(character) {

    resetVariables();

    let heal = 0;
    let atkBuff = 0;
    let Character = character;
    let totalDmg = 0;
    let shield = 0;
    let dmgSources = { n: 0, c: 0, p: 0, e: 0, q: 0, other: [] };
    switch (Character.name) {
        case "Amber":
            if (Character.constellations >= 4) {
                Character.sequence[role].push("E");
            }
            break;
        case "Itto":
            if (Character.constellations >= 1) {
                Character.sequence["Dps"] = ["Q", "N1", "E", "C", "C", "C", "C", "C", "C", "P", "N1", "N2", "N3", "N4", "C", "C", "C", "C", "P", "E", "P"]
            }
            if (Character.constellations >= 2) {
                Character.energyOffset -= 30;
            }
            if (Character.constellations >= 6) {
                Character.sequence["Dps"].push("C");
                Character.sequence["Dps"].push("C");
                Character.sequence["Dps"].push("C");
                Character.sequence["Dps"].push("C");
                Character.sequence["Dps"].push("C");
                Character.currentBuffs.push({ Type: "CritDMG", Value: 70, for: "ChargedAttack" });
            }
            break;
        case "Arlecchino":
            if (Character.constellations >= 4) {
                Character.energyOffset -= 15;
            }
            break;
        case "Baizhu":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("E");
            }
            break;
        case "Barbara":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 5;
            }
            if (Character.constellations >= 2) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 10;
            }
            break;
        case "Beidou":
            if (Character.constellations >= 4) {
                let extraDMGAttack_beidou = { Multiplier: 20 / 100, Element: "ElectroDMGBonus", isReaction: false, Scaling: "ATK", type: "NormalAttack" };
                const extra_beidouDMG = dmgCalc(extraDMGAttack_beidou, Character) * 6;
                totalDmg += extra_beidouDMG;
                dmgSources.n += extra_beidouDMG;
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ResShred", Element: "ElectroDMGBonus", Value: 15, Source: "C6", for: "NormalAttack" });
            }
            break;
        case "Bennett":
            if (Character.constellations >= 2) {
                Character.energyOffset -= 5;
            }
            break;
        case "Candace":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("N1");
                Character.sequence[role].push("N2");
                Character.sequence[role].push("N3");
            }
            if (Character.constellations >= 4) {
                Character.sequence[role].push("E");
            }
            break;
        case "Charlotte":
            if (Character.constellations >= 4) {
                Character.energyOffset -= 25;
            }
            break;
        case "Ayaka":
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ChargedAttack", Value: 297, Source: "C6" });
            }
            break;
        case "Chiori":
            if (partyMemberElements.includes("GeoCharacter") || Character.constellations >= 1) {
                //Check for The Finishing Touch
                let hasTheFinishingTouch = false;
                for (buff of Character.currentBuffs) {
                    if (buff.Type == "The Finishing Touch") {
                        hasTheFinishingTouch = true;
                    }
                }
                if (hasTheFinishingTouch) {
                    Character.currentBuffs.push({ Type: "GeoDMGBonus", Value: 20, Source: "The Finishing Touch" });
                }

            }
            if (Character.constellations >= 6) {
                Character.sequence[role].push("E");
            }
            break;
        case "Chongyun":
            if (Character.constellations >= 2) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 10;
            }

            break;
        case "Collei":
            if (Character.constellations >= 1) {
                if (role == "Support") {
                    Character.currentBuffs.push({ Type: "EnergyRecharge", Value: 20, Source: "C1" });
                }
            }
            break;
        case "Cyno":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("N1", "N2", "N3", "N4", "N4");
            }
            break;
        case "Dehya":

            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "HP%", Value: 20, Source: "C1" });
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 40;
            }
            if (Character.constellations >= 6) {
                Character.energyOffset -= 20;
            }

            if (role == "Support") {
                Character.energyOffset = 100;
            }
            break;
        case "Diluc":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "AddativeDMGBonus", Value: 15, Source: "C1" });

            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ATK%", Value: 30, Source: "C2" });
                Character.sequence["Dps"].push("N1", "N2");
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 40, Source: "C4" });
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "NormalAttack", Value: 30, Source: "C6" });
                Character.sequence["Dps"].push("N1", "N2");
            }
            break;
        case "Diona":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 20;
            }
            if (Character.constellations >= 4) {
                if (role == "Dps") {
                    Character.sequence["Dps"].push("C", "C", "C");
                }
            }
            break;
        case "Dori":
            if (Character.constellations >= 6) {
                if (supportingElement == "Dendro") {
                    Character.sequence["Dps"] = ["Q", "E", "N1", "N2", "N1", "N2", "E", "N1", "N2", "N1", "N2",]
                    if (Character.artifactFourPiece == "Thundering Fury")
                        Character.sequence["Dps"] = ["Q", "E", "N1", "N2", "N1", "N2", "E", "N1", "N2", "N1", "N2", "E", "N1", "N2", "N1", "N2",]
                }
                Character.normalAttack1.Element = "ElectroDMGBonus";
                Character.normalAttack2.Element = "ElectroDMGBonus";
            }
            break;
        case "Emilie":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 20, Source: "C1" });
                Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 20, Source: "C1", for: "Cleardew Cologne" });
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 30, Source: "C2", Element: "DendroDMGBonus" });
            }
            break;
        case "Faruzan":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("C");
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 20;
            }
            if (Character.constellations >= 6) {
                Character.energyOffset -= 30;
                Character.currentBuffs.push({ Type: "CritRate", Value: 40, Source: "C6" });
                if (role == "Support") {
                    atkBuff += 400;
                }
            }
            break;
        case "Freminet":

            if (Character.constellations >= 2) {
                console.log(Character.energyOffset);
                Character.energyOffset -= 22.5;
                console.log(Character.energyOffset);
            }
            if (Character.constellations >= 4) {
                if (supportingElement == "Hydro" || supportingElement == "Electro") {
                    Character.currentBuffs.push({ Type: "ATK%", Value: 18, Source: "C6" });
                }
            }
            if (Character.constellations >= 6) {
                if (supportingElement == "Hydro" || supportingElement == "Electro") {
                    Character.currentBuffs.push({ Type: "CritDMG", Value: 36, Source: "C6" });
                }
            }
            break;
        case "Furina":
            if (Character.constellations >= 4) {
                Character.energyOffset -= 40;
            }
            if (Character.constellations >= 6) {
                Character.sequence["Support"].push("N1", "N2", "N3", "N1", "N2", "N3");
            }
            break;
        case "Gaming":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ATK%", Value: 20, Source: "C2" });
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 30;
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "C6", for: "PlungeAttack" });
                Character.currentBuffs.push({ Type: "CritDMG", Value: 40, Source: "C6", for: "PlungeAttack" });
            }
            break;
        case "Ganyu":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 15, Source: "C1", Element: "CryoDMGBonus" });
                Character.energyOffset -= 15;
            }
            if (Character.constellations >= 2) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 25, Source: "C4" });
            }
            if (Character.constellations >= 6) {
                Character.sequence["Dps"] = ["E", "C", "E", "C", "Q", "C", "C", "C", "C", "C", "C"]
                Character.sequence["Support"] = ["E", "C", "E", "C", "Q"]
            }
            break;
        case "Gorou":
            if (Character.constellations >= 4) {
                if (partyMemberElements.includes("GeoCharacter")) {
                    let gorou_heal = (50 / 100) * Character.DEF() * 6;
                    heal += gorou_heal;
                }
            }
            if (Character.constellations >= 6) {
                let numberOfGeo = 0;
                partyMemberElements.forEach(element => {
                    if (element == "GeoCharacter")
                        numberOfGeo++;
                });
                let buffValue = 0;
                switch (numberOfGeo) {
                    case 1:
                        buffValue = 10;
                        break;
                    case 2:
                        buffValue = 20;
                        break;
                    case 3:
                        buffValue = 40;
                        break;
                }
                Character.currentBuffs.push({ Type: "GeoDMGBonus", Value: buffValue, Source: "C6" });
                atkBuff += buffValue;
            }
            break;
        case "Hu Tao":
            if (Character.constellations >= 1) {
                Character.sequence["Dps"].push("N1", "C", "N1", "C");
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "CritRate", Value: 100, Source: "C2" });
            }
            break;
        case "Jean":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ATK%", Value: 15, Source: "C2" });
                atkBuff += 15;
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 40, Element: "AnemoDMGBonus", Source: "C4" });
                atkBuff += 40;
            }
            if (Character.constellations >= 6) {
                let health = 14000;
                let extraShield = 14000 * (1 - 0.35);
                shield += extraShield;
            }
            break;
        case "Kachina":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 10;
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "DEF%", Value: 16, Source: "C4" });
                atkBuff += 16;
            }
            if (Character.constellations >= 6) {
                if (hasShield) {
                    let c6Attack = { Multiplier: 200 / 100, Element: "GeoDMGBonus", isReaction: false, Scaling: "DEF", type: "Special" };
                    let c6Dmg = dmgCalc(c6Attack, Character);
                    totalDmg += c6Dmg;
                    dmgSources.other.push({ label: "C6", dmg: c6Dmg });
                }
            }
            break;
        case "Kazuha":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 20;
            }
            if (Character.constellations >= 6) {
                Character.sequence[role].push("N1", "N2", "N3", "N4", "N1", "N2", "N3", "N4",);
                Character.normalAttack1.Element = "AnemoDMGBonus";
                Character.normalAttack2.Element = "AnemoDMGBonus";
                Character.normalAttack3.Element = "AnemoDMGBonus";
                Character.normalAttack4.Element = "AnemoDMGBonus";
                Character.normalAttack5.Element = "AnemoDMGBonus";
            }
            break;
        case "Kaeya":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "CritRate", Value: 15, Source: "C1", for: "NormalAttack" });
                Character.currentBuffs.push({ Type: "CritRate", Value: 15, Source: "C1", for: "ChargedAttack" });
            }
            if (Character.constellations >= 6) {
                Character.energyOffset -= 25;
            }
            break;
        case "Kaveh":
            if (Character.constellations >= 1) {
                Character.advancedstats.healingBonus += 25;
            }
            break;
        case "Keqing":
            if (Character.constellations >= 1) {
                let extraAttack = { Multiplier: 50 / 100, Element: "ElectroDMGBonus", isReaction: false, Scaling: "ATK", type: "ElementalSkill" };
                let extraDmg = dmgCalc(extraAttack, Character) * numberOfEnemies * 2;
                totalDmg += extraDmg;
                dmgSources.e += extraDmg;
            }
            if (Character.constellations >= 2) {
                Character.energyOffset -= 15;
            }
            if (Character.constellations >= 4) {
                if (supportingElement != "noElement") {
                    Character.currentBuffs.push({ Type: "ATK%", Value: 25, Source: "C4" });
                }
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ElectroDMGBonus", Value: 24, Source: "C6" });
            }
            break;
        case "Kirara":
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ElementalDMG", Value: 12, Source: "C6" });
                atkBuff += 12;
            }
            break;
        case "Kuki":
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ElementalMastery", Value: 150, Source: "C6" });
            }
            break;
        case "Layla":
            if (Character.constellations >= 2) {
                Character.energyOffset -= 30;
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 40, Source: "C6" });
                Character.currentBuffs.push({ Type: "ElementalBurst", Value: 40, Source: "C6" });
            }
            break;
        case "Lisa":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 10;
            }
            break;
        case "Lynette":
            if (Character.constellations >= 4) {
                Character.sequence[role].push("E");
            }
            break;
        case "Lyney":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "CritDMG", Value: 60, Source: "C2" });
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 20, Element: "PyroDMGBonus", Source: "C4" });
            }
            break;
        case "Mika":
            if (Character.constellations >= 4) {
                Character.energyOffset -= 20;
            }
            if (Character.constellations >= 6) {
                atkBuff += 20 + 60;
            }
            break;
        case "Mona":
            if (Character.constellations >= 1) {
                if (role == "Support") {
                    Character.currentBuffs.push({ Type: "ElectroChargedBonus", Value: 15, Source: "Support" });
                    Character.currentBuffs.push({ Type: "VaporizeBonus", Value: 15, Source: "Support" });
                    if (supportingElement == "Anemo") {
                        Character.currentBuffs.push({ Type: "SwirlBonus", Value: 15, Source: "Support" });
                    }
                    atkBuff += 15;
                }
            }
            if (Character.constellations >= 2) {
                Character.sequence["Dps"].push("C");
            }
            if (Character.constellations >= 4) {
                atkBuff += 15;
            }
            break;
        case "Mualani":
            if (Character.constellations >= 1 && Character.constellations != 6) {
                Character.currentBuffs.push({ Type: "FlatDMG", Value: Character.HP() * (66 / 100), for: "ChargedAttack", Source: "C1" });
            }
            if (Character.constellations >= 2) {
                Character.sequence["Dps"].push("N1", "N2");
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ElementalBurst", Value: 75, Source: "C4" });
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "FlatDMG", Value: Character.HP() * (66 / 100), for: "ChargedAttack", Source: "C1" });
            }
            break;
        case "Nahida":
            if (Character.constellations >= 2) {
                nahidaC2Buff = true;
                if (supportingElement == "Electro") {
                    Character.currentBuffs.push({ Type: "defReduction", Value: 30, Source: "C2" });
                }
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ElementalMastery", Value: 140, Source: "C4" });
            }
            break;
        case "Navia":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 35;
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "CritRate", Value: 36, for: "ElementalSkill", Source: "C2" });
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "CritDMG", Value: 135, for: "ElementalSkill", Source: "C6" });
            }
            let hasA4 = false;
            for (let buff of Character.currentBuffs) {
                if (buff.Type == "A4") {
                    hasA4 = true;
                }
            }
            if (hasA4) {
                partyMemberElements.forEach(element => {
                    if (element == "HydroCharacter" || element == "ElectroCharacter" || element == "CryoCharacter" || element == "PyroCharacter") {
                        Character.currentBuffs.push({ Type: "ATK%", Value: 20, Source: "A4" });
                    }
                });
            }
            break;
        case "Neuvillette":
            if (supportingElement != "noElement" && supportingElement != "Hydro") {
                let hasA1 = false;
                for (let buff of Character.currentBuffs) {
                    if (buff.Type == "A1") {
                        hasA1 = true;
                    }
                }
                if (hasA1) {
                    let multiplier = Character.chargedAttack.Multiplier(Character.normalAttackLevel) * 1.6;
                    Character.chargedAttack.Multiplier = function () { return multiplier }
                }
                if (Character.constellations >= 2) {
                    Character.currentBuffs.push({ Type: "CritDMG", Value: 42, Source: "C2" });
                }
            }
            if (Character.constellations >= 1 && (supportingElement == "Hydro" || supportingElement == "noElement")) {
                let hasA1 = false;
                for (let buff of Character.currentBuffs) {
                    if (buff.Type == "A1") {
                        hasA1 = true;
                    }
                }
                if (hasA1) {
                    Character.chargedAttack.Multiplier(Character.normalAttackLevel) *= 1.1;
                }
                if (Character.constellations >= 2) {
                    Character.currentBuffs.push({ Type: "CritDMG", Value: 14, Source: "C2" });
                }
            }
            if (Character.constellations >= 6) {
                Character.sequence[role].push("C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C");
            }
            break;
        case "Nilou":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 65, Source: "C1" });
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 35, Element: "HydroDMGBonus", Source: "C2" });
                if (supportingElement == "Dendro") {
                    Character.currentBuffs.push({ Type: "ResShred", Value: 35, Element: "DendroDMGBonus", Source: "C2" });
                }
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 25;
                Character.currentBuffs.push({ Type: "ElementalBurst", Value: 50, Source: "C4" });
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "CritRate", Value: Math.floor(Character.HP() / 1000) * 0.6, Source: "C6" });
                Character.currentBuffs.push({ Type: "CritRate", Value: Math.floor(Character.HP() / 1000) * 1.2, Source: "C6" });
            }
            break;
        case "Ningguang":
            if (Character.constellations >= 2) {
                Character.energyOffset -= 20;
                Character.sequence[role].push("E");
            }
            break;
        case "Qiqi":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 10;
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "NormalAttack", Value: 15, Source: "C2" });
                Character.currentBuffs.push({ Type: "ChargedAttack", Value: 15, Source: "C2" });
            }
            break;
        case "Raiden":
            if (Character.constellations >= 4) {
                atkBuff += 30;
            }
            break;
        case "Razor":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 10, Source: "C1" });
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "defReduction", Value: 10, for: "ElementalSkill", Source: "C6" });
            }
            break;
        case "Rosaria":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "NormalAttack", Value: 10, Source: "C1" });
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 10;
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 20, Element: "PhysicalDMGBonus", Source: "C6" });
            }
            break;
        case "Kokomi":
            if (Character.constellations >= 4) {
                Character.sequence[role].push("N1", "N2", "N3");
                Character.energyOffset -= 15;
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "HydroDMGBonus", Value: 40, Source: "C6" });
            }
            break;
        case "Sayu":
            if (Character.constellation >= 2) {
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 66, Source: "C2" });
            }
            if (Character.constellation >= 4) {
                const swirlableElements = ["Pyro", "Electro", "Cryo", "Hydro"];
                if (swirlableElements.includes(supportingElement)) {
                    Character.energyOffset -= 20;
                }
            }
            break;
        case "Sethos":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ElectroDMGBonus", Value: 20, Source: "C2" });
            }
            if (Character.constellations >= 4) {
                atkBuff += 80;
            }
            if (Character.constellations >= 6) {
                Character.energyOffset -= 20;
            }
            break;
        case "Shenhe":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 10;
            }
            if (Character.constellations >= 2) {
                atkBuff += 15;
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 85, Source: "C4" });
            }
            break;
        case "Heizou":
            if (Character.constellations >= 4) {
                Character.energyOffset -= 30;
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ElementalSkillCritRate", Value: 16, Source: "C6" });
                Character.currentBuffs.push({ Type: "ElementalSkillCritDMG", Value: 32, Source: "C6" });
            }
            break;
        case "Sucrose":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("E");
                Character.energyOffset -= 20;
            }
            if (Character.constellations >= 4) {
                Character.sequence["Dps"].push("E");
            }
            if (Character.constellations >= 6) {
                atkBuff += 20;
            }
            break;
        case "Sigewinne":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 35, Element: "HydroDMGBonus", Source: "C2" });
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "CritRate", Value: 20, for: "ElementalBurst", Source: "C6" });
                Character.currentBuffs.push({ Type: "CritDMG", Value: 110, for: "ElementalBurst", Source: "C6" });
            }
            break;
        case "Tartaglia":
            if (Character.constellations >= 2) {
                Character.energyOffset -= 10;
            }
            break;
        case "Thoma":
            if (Character.constellations >= 4) {
                Character.energyOffset -= 20;
            }
            if (Character.constellations >= 6) {
                atkBuff += 15;
            }
            break;
        case "Tighnari":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "CritRate", Value: 15, for: "ChargedAttack", Source: "C1" });
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "DendroDMGBonus", Value: 20, Source: "C2" });
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ElementalMastery", Value: 60, Source: "C4" });
                const elements = ["Pyro", "Electro", "Hydro"];
                if (elements.includes(supportingElement)) {
                    Character.currentBuffs.push({ Type: "ElementalMastery", Value: 60, Source: "C4" });
                }
            }
            break;
        case "Traveler (Anemo)":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "EnergyRecharge", Value: 16, Source: "C2" });
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 20, Element: "AnemoDMGBonus", Source: "C6" });
                Character.currentBuffs.push({ Type: "ResShred", Value: 20, Element: supportingElement + "DMGBonus", Source: "C6" });
            }
            break;
        case "Traveler (Geo)":
            if (Character.constellations >= 1) {
                atkBuff += 10;
            }
            if (Character.constellations >= 2) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 40;
            }
            break;
        case "Traveler (Electro)":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 15;
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 15, Element: "ElectroDMGBonus", Source: "C2" });
            }
            if (Character.constellations >= 4) {
                Character.energyOffset -= 15;
            }
            if (Character.constellations >= 6) {

            }
            break;
        case "Traveler (Dendro)":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 10;
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "DendroDMGBonus", Value: 12, Source: "C2" });
                Character.currentBuffs.push({ Type: supportingElement + "DMGBonus", Value: 12, Source: "C2" });
                atkBuff += 12;
            }
            break;
        case "Traveler (Hydro)":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 10;
            }
            break;
        case "Venti":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 12, Element: "AnemoDMGBonus", Source: "C1" });
                Character.currentBuffs.push({ Type: "ResShred", Value: 12, Element: "PhysicalDMGBonus", Source: "C1" });
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "AnemoDMGBonus", Value: 25, Source: "C4" });
            }
            if (Character.constellations >= 6) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 20, Element: "AnemoDMGBonus", Source: "C1" });
                Character.currentBuffs.push({ Type: "ResShred", Value: 20, Element: supportingElement + "DMGBonus", Source: "C1" });
            }
            break;
        case "Wanderer":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("N1", "N2");
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ElementalBurst", Value: 200, Source: "C2" });
            }
            if (Character.constellations >= 6) {
                Character.sequence[role].push("C", "N1", "N2", "C");
            }
            break;
        case "Wriothesley":
            if (Character.constellations >= 1) {
                Character.sequence[role] = ["E", "N1", "N2", "N3", "N4", "N5", "C", "N1", "N2", "N3", "N4", "N5", "C", "N1", "N2", "N3", "N4", "N5", "C", "Q"]

            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ElementalBurst", Value: 200, Source: "C2" });
            }
            if (Character.constellations >= 4) {
                Character.sequence[role].push("N1", "N2", "N3");

            }
            if (Character.constellations >= 6) {
                Character.sequence[role].push("C", "C", "C");
                Character.currentBuffs.push({ Type: "CritRate", Value: 10, Source: "C6", for: "ChargedAttack" });
                Character.currentBuffs.push({ Type: "CritDMG", Value: 80, Source: "C6", for: "ChargedAttack" });
            }
            break;
        case "Xiangling":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 15, Element: "PyroDMGBonus", Source: "C1" });
            }
            if (Character.constellations >= 6) {
                atkBuff += 15;
            }
            break;
        case "Xianyun":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ATK%", Value: 20, Source: "C2" });
            }
            if (Character.constellations >= 6) {
                Character.sequence[role].push("E", "E", "E", "E", "E", "E", "E", "E")
                Character.currentBuffs.push({ Type: "CritDMG", Value: 70, Source: "C6", for: "Driftcloud Wave" });
            }
            break;
        case "Xiao":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 2) {
                Character.energyOffset -= 5;
            }
            if (Character.constellations >= 6) {
                Character.sequence["Dps"] = ["E", "E", "Q", "P", "E", "E", "E", "E", "P", "E", "E", "E", "E", "P", "E", "E", "E", "E", "P", "E", "E", "E", "E", "P", "E", "E", "E", "E", "P", "E", "E", "E", "E", "P", "E", "E", "E", "E", "P", "E", "E", "E", "E", "P",]
            }
            break;
        case "Xingqiu":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 15, Element: "HydroDMGBonus", Source: "C2" });
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ElementalSkill", Value: 50, Source: "C4" });
            }
            if (Character.constellations >= 6) {
                Character.energyOffset -= 15;
            }
            break;
        case "Xinyan":
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ResShred", Value: 15, Element: "PhysicalDMGBonus", Source: "C1" });
            }
            break;
        case "Yae Miko":
            if (Character.constellations >= 1) {
                Character.energyOffset -= 40;
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "ElectroDMGBonus", Value: 20, Source: "C4" });
                atkBuff += 20;
            }
            break;
        case "Yanfei":
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "CritRate", Value: 20, for: "ChargedAttack", Source: "C1" });
            }
            if (Character.constellations >= 6) {
                Character.chargedAttack.Multiplier = Character.chargedAttack.extraMultiplier;
            }
            break;
        case "Yaoyao":
            if (Character.constellations >= 1) {
                atkBuff += 15;
            }
            if (Character.constellations >= 2) {
                Character.energyOffset -= 40;
            }
            break;
        case "Yelan":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("E");
            }
            if (Character.constellations >= 4) {
                Character.currentBuffs.push({ Type: "HP%", Value: 40, Source: "C4" });
            }
            break;
        case "Yoimiya":
            if (Character.constellations >= 1) {
                Character.currentBuffs.push({ Type: "ATK%", Value: 20, Source: "C1" });
            }
            if (Character.constellations >= 2) {
                Character.currentBuffs.push({ Type: "PyroDMGBonus", Value: 25, Source: "C2" });
            }
            break;
        case "Zhongli":
            if (Character.constellations >= 1) {
                Character.sequence[role].push("E");
            }
            break;


    }
    switch (Character.weapon.name) {
        case "A Thousand Floating Dreams":
            partyElementalMasteryBonus += 40;
            break;
        case "Beacon of the Reed Sea":
            let willHaveShield = false;
            if (supportingElement != "noElement" && supportingElement != "Geo" && supportingElement != "Dendro" && Character.Element == "GeoCharacter") {
                willHaveShield = true;
            }
            if (Character.Element != "Dendro" && Character.Element != "Geo" && Character.Element != "noElement") {
                willHaveShield = true;
            }
            if (hasShield || willHaveShield) {
                Character.currentBuffs.push({ Type: "ATK%", Value: -20, Source: "Beacon of the Reed Sea" });
                Character.currentBuffs.push({ Type: "HP%", Value: -32, Source: "Beacon of the Reed Sea" });
            }
            break;
    }
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
                if (character.name == "Sethos")
                    attackAction.type = "ChargedAttack";
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
                                if (Character.currentHP > 0.5 * Character.HP()) {
                                    const hpToLose = (8 / 100) * Character.HP();
                                    Character.removeHP(hpToLose);
                                }
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
                        } else if (Character.name == "Wriothesley") {

                            let hasA1 = false;
                            let buffToRemoveIndex = -1;
                            character.currentBuffs.forEach(buff => {
                                if (buff.Type == "There Shall Be a Plea for Justice") {
                                    hasA1 = true;
                                }
                                else if (buff.Source == "There Shall Be a Plea for Justice") {
                                    buffToRemoveIndex = character.currentBuffs.indexOf(buff);
                                }
                            });
                            if (buffToRemoveIndex != -1)
                                character.currentBuffs.splice(buffToRemoveIndex, 1);
                            if (!hasA1) {
                                if (character.currentHP < 0.6 * character.HP()) {

                                    character.currentBuffs.push({ Type: "ChargedAttack", Value: 50, Source: "There Shall Be a Plea for Justice" });
                                    //Heal 30% of HP
                                    character.addHP(0.3 * character.HP());
                                }
                            }
                        } else if (Character.name == "Tighnari") {
                            let multiplier = Character.chargedAttack.extraMultiplier(Character.normalAttackLevel);
                            let newAttack = { Multiplier: multiplier, Element: "DendroDMGBonus", isReaction: false, Scaling: "ATK", type: "ChargedAttack" };
                            for (let i = 0; i < 4; i++) {
                                if (i % 3 == 0)
                                    newAttack.isReaction = true;
                                else
                                    newAttack.isReaction = false;
                                let tmpDMG = dmgCalc(newAttack, Character);
                                totalDmg += tmpDMG;
                                dmgSources.c += tmpDMG;
                            }
                        } else if (Character.name == "Lyney") {
                            let extraAttack = { Multiplier: Character.chargedAttack.extraMultiplier(2), Element: "PyroDMGBonus", isReaction: false, Scaling: "ATK", type: "ChargedAttack" };
                            let hatBuff;
                            if (Character.currentHP > (0.6 * Character.HP())) {
                                Character.removeHP(0.2 * Character.HP());
                                propSurplusStacks++;
                                let hasA1 = false;
                                Character.currentBuffs.forEach(buff => {
                                    if (buff.Type == "A1") {
                                        hasA1 = true;

                                    }
                                });
                                if (hasA1) {

                                    hatBuff = { Type: "FlatDMG", Value: 0.8 * Character.attack(), Source: "PropSurplus", for: "ChargedAttack" };
                                    Character.currentBuffs.push(hatBuff);

                                }
                            }
                            let extraDmg = dmgCalc(extraAttack, Character);
                            if (Character.constellations >= 1) {
                                extraDmg = extraDmg * 2;
                            }

                            totalDmg += extraDmg;
                            dmgSources.c += extraDmg;
                            if (Character.constellations >= 6) {
                                let c6Attack = { Multiplier: Character.chargedAttack.extraMultiplier(2) * 0.8, Element: "PyroDMGBonus", isReaction: false, Scaling: "ATK", type: "ChargedAttack" };
                                let c6Dmg = dmgCalc(c6Attack, Character);
                                totalDmg += c6Dmg;
                                let hasC6Source = false;
                                dmgSources.other.forEach(source => {
                                    if (source.Source == "C6") {
                                        hasC6Source = true;
                                        source.dmg += c6Dmg;
                                    }
                                });
                                if (!hasC6Source) {
                                    dmgSources.other.push({ label: "C6", dmg: c6Dmg, Source: "C6" });
                                }
                            }
                            if (hatBuff != undefined) {
                                Character.currentBuffs.pop(hatBuff);
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
                    if (Character.weapon.Type != "Bow" && Character.weapon.Type != "Catalyst") {
                        enemies = numberOfEnemies;
                    }
                    if (Character.name == "Mualani" && attackAction == "N2") {
                        enemies = numberOfEnemies;
                        if (enemies > 5)
                            enemies = 5;
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
                    if (Character.name == "Ningguang") {
                        if (Character.constellations >= 1) {
                            enemies = numberOfEnemies;
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
                    } else if (Character.name == "Wriothesley") {
                        let currentHPPercent = Character.currentHP / Character.HP();
                        if (currentHPPercent < 0.5) {
                            //Remove elementalSkill buff
                            let toRemove = -1;
                            let index = 0;
                            character.currentBuffs.forEach(buff => {
                                if (buff.Source == "IcefangRush") {
                                    toRemove = index;
                                }
                                index++;
                            });
                            if (toRemove != -1) {
                                character.currentBuffs.splice(toRemove, 1);
                            }
                        } else {
                            //Check if buff is already applied
                            let hasBuff = false;
                            character.currentBuffs.forEach(buff => {
                                if (buff.Source == "IcefangRush") {
                                    hasBuff = true;
                                }
                            });
                            if (!hasBuff) {
                                Character.elementalSkill.Skill(Character);
                            } else {
                                //Remove 4.5% of max hp
                                Character.removeHP(Character.HP() * 0.045);
                            }
                        }

                    }
                    let dmg = dmgCalc(attackAction, Character) * enemies;
                    if (Character.name == "Amber") {
                        if (Character.constellations >= 1) {
                            if (attackAction.type == "ChargedAttack") {
                                console.log(dmg);
                                dmg *= 1.2 //Second arrow
                            }
                        }
                    }
                    totalDmg += dmg;

                    if (attackAction.type == "NormalAttack") {
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
                        break;
                    case "Hunter&#39s Path":
                        if (attackAction.type == "ChargedAttack" && !huntersPathBuff) {
                            Character.currentBuffs.push({ Type: "FlatDMG", Value: (160 / 100) * Character.EM(), Source: "Hunter's Path", for: "ChargedAttack" });
                            huntersPathBuff = true;
                        }
                        break;
                    case "Ibis Piercer":
                        if (attackAction.type == "ChargedAttack" && ibisPiercerBuffStacks < 2) {
                            ibisPiercerBuffStacks++;
                            Character.currentBuffs.push({ Type: "ElementalMastery", Value: 80, Source: "Ibis Piercer", for: "ChargedAttack" });
                        }
                        break;
                    case "Scion of the Blazing Sun":
                        if (attackAction.type == "ChargedAttack" && !scionOftheBlazingSunBuff) {
                            scionOftheBlazingSunBuff = true;
                            Character.currentBuffs.push({ Type: "ChargedAttack", Value: 35, Source: "Scion of the Blazing Sun" });
                        }
                        break;
                    case "Ballad of the Boundless Blue":
                        if (attackAction.type == "ChargedAttack" || attackAction.type == "NormalAttack") {
                            let stacks = 0;
                            for (const buff of Character.currentBuffs) {
                                if (buff.Source == "Ballad of the Boundless Blue") {
                                    stacks++;
                                }
                            }
                            if (stacks < 3) {
                                character.currentBuffs.push({ Type: "NormalAttack", Value: 16, Source: "Ballad of the Boundless Blue" });
                                character.currentBuffs.push({ Type: "ChargedAttack", Value: 12, Source: "Ballad of the Boundless Blue" });
                            }
                        }
                        break;
                    case "Crane&#39s Echoing Call":
                        if (attackAction.type == "PlungeAttack" && !cranesEchoingCallBuff) {
                            cranesEchoingCallBuff = true;
                            atkBuff += character.attack() * 0.2;
                            character.currentBuffs.push({ Type: "PlungeAttack", Value: 20, Source: "Crane's Echoing Call", for: "PlungeAttack" });
                        }
                        break;
                    case "Surf&#39s Up":
                        if (surfUpBuff) {
                            if (action == "N2")
                                break;
                            surfUpBuffStacks--;
                            if (surfUpBuffStacks < 0) {
                                surfUpBuffStacks = 0;
                            }
                            let buff;
                            for (buff of character.currentBuffs) {
                                if (buff.Source == "Surf's Up") {
                                    if (buff.Type == "NormalAttack") {
                                        buff.Value = 12 * surfUpBuffStacks;
                                    }
                                }
                            }
                        }
                        break;
                    case "Peak Patrol Song":
                        if (peakPatrolStacks < 2) {
                            if (attackAction.type == "PlungeAttack" || attackAction.type == "NormalAttack") {
                                peakPatrolStacks++;
                                character.currentBuffs.push({ Type: "DEF%", Value: 8, Source: "Peak Patrol Song" });
                                const elements = ["Pyro", "Hydro", "Electro", "Cryo", "Geo", "Anemo", "Dendro"];
                                elements.forEach(element => {
                                    character.currentBuffs.push({ Type: element + "DMGBonus", Value: 10, Source: "Peak Patrol Song" });
                                });
                                if (peakPatrolStacks == 2) {
                                    let buff = 8 * (character.DEF() / 1000);
                                    if (buff > 25.6) {
                                        buff = 25.6;
                                    }
                                    atkBuff += buff;
                                    character.currentBuffs.push({ Type: character.element.slice(0, -9) + "DMGBonus", Value: buff, Source: "Peak Patrol Song" });
                                }
                            }
                        }
                        break;
                }
                switch (Character.artifactFourPiece) {
                    case "Desert Pavilion Chronicle":
                        if (attackAction.type == "ChargedAttack" && !dialoguesOfTheDesertSagesBuff) {
                            dialoguesOfTheDesertSagesBuff = true;
                            Character.currentBuffs.push({ Type: "ChargedAttack", Value: 40, Source: "Desert Pavilion Chronicle" });
                            Character.currentBuffs.push({ Type: "NormalAttack", Value: 40, Source: "Desert Pavilion Chronicle" });
                            Character.currentBuffs.push({ Type: "PlungeAttack", Value: 40, Source: "Desert Pavilion Chronicle" });
                            Character.currentBuffs.push({ Type: "ATK%", Value: 15, Source: "Desert Pavilion Chronicle" });
                        }
                        break;
                    case "Nymph&#39s Embrace":
                        if (!nymphsDreamNormalStack) {
                            if (!nymphsDreamSkillStack && !nymphsDreamBurstStack) {
                                character.currentBuffs.push({ Type: "HydroDMGBonus", Value: 4, Source: "Nymph's Embrace" });
                                character.currentBuffs.push({ Type: "ATK%", Value: 7, Source: "Nymph's Embrace" });
                                nymphsDreamNormalStack = true;
                            }
                            else {
                                let hydroBuff;
                                let attackBuff;
                                for (buff of character.currentBuffs) {
                                    if (buff.Source == "Nymph's Embrace") {
                                        if (buff.Type == "HydroDMGBonus") {
                                            hydroBuff = buff;
                                        }
                                        else if (buff.Type == "ATK%") {
                                            attackBuff = buff;
                                        }
                                    }
                                }
                                if (nymphsDreamSkillStack && nymphsDreamBurstStack) {
                                    hydroBuff.Value = 15;
                                    attackBuff.Value = 25;
                                }
                                else {
                                    hydroBuff.Value = 9;
                                    attackBuff.Value = 16;
                                }
                            }
                        }
                        break;
                }
                switch (Character.name) {
                    case "Chongyun":
                        if (Character.constellations >= 1) {
                            if (action == "N4") {
                                const chongyun_extra_attack = { Multiplier: 50 / 100, Element: "CryoDMGBonus", isReaction: false, Scaling: "ATK", type: "NormalAttack" };
                                let chongyun_extra_dmg = dmgCalc(chongyun_extra_attack, Character) * numberOfEnemies;
                                chongyun_extra_dmg = dmgCalc(chongyun_extra_attack, Character) * numberOfEnemies;
                                chongyun_extra_dmg = dmgCalc(chongyun_extra_attack, Character) * numberOfEnemies;
                                totalDmg += chongyun_extra_dmg;
                                let hasC1Source = false;
                                for (source of dmgSources.other) {
                                    if (source.label == "C1") {
                                        hasC1Source = true;
                                        source.dmg += chongyun_extra_dmg;
                                    }
                                }
                                if (!hasC1Source) {
                                    dmgSources.other.push({ label: "C1", dmg: chongyun_extra_dmg });
                                }
                            }
                        }
                        break;
                    case "Cyno":
                        if (Character.constellations >= 2) {
                            if (attackAction.type == "NormalAttack") {

                                let hasC2Buff = false;
                                for (let buff of Character.currentBuffs) {
                                    if (buff.source == "C2") {

                                        hasC2Buff = true;
                                        buff.Value += 10;
                                        if (buff.Value > 50)
                                            buff.Value = 50;
                                    }
                                }
                                if (!hasC2Buff) {
                                    Character.currentBuffs.push({ Type: "ElectroDMGBonus", Value: 10, source: "C2" });
                                }
                            }
                        }
                        if (Character.constellations >= 6) {
                            if (cynoC6Stacks != 0) {
                                let hasA1 = false;
                                for (let buff of Character.currentBuffs) {
                                    if (buff.Type == "Featherfall Judgment") {
                                        hasA1 = true;
                                    }
                                }
                                if (hasA1) {
                                    let duststalkerBoltAttack = { Multiplier: 100 / 100, Element: "ElectroDMGBonus", isReaction: true, Scaling: "ATK", type: "ElementalSkill", type2: "Duststalker Bolt" };
                                    let duststalkerBoltDmg = dmgCalc(duststalkerBoltAttack, Character);
                                    totalDmg += duststalkerBoltDmg;
                                    let hasDuststalkerBoltSource = false;
                                    for (source of dmgSources.other) {
                                        if (source.label == "C6 - Duststalker Bolt") {
                                            hasDuststalkerBoltSource = true;
                                            source.dmg += duststalkerBoltDmg;
                                        }
                                    }
                                    if (!hasDuststalkerBoltSource) {
                                        dmgSources.other.push({ label: "C6 - Duststalker Bolt", dmg: duststalkerBoltDmg });
                                    }
                                    cynoC6Stacks--;
                                    if (cynoC6Stacks < 0) {
                                        cynoC6Stacks = 0;
                                    }
                                }
                            }
                        }
                        break;
                    case "Fischl":
                        if (Character.constellations >= 1) {
                            if (attackAction.type == "NormalAttack") {
                                let extraOzAttack = { Multiplier: 22 / 100, Element: "PhysicalDMGBonus", isReaction: false, Scaling: "ATK", type: "NormalAttack" };
                                let extraOzDmg = dmgCalc(extraOzAttack, Character);
                                totalDmg += extraOzDmg;
                                let hasOzSource = false;
                                for (source of dmgSources.other) {
                                    if (source.source == "C1") {
                                        hasOzSource = true;
                                        source.dmg += extraOzDmg;
                                    }
                                }
                                if (!hasOzSource) {
                                    dmgSources.other.push({ label: "C1 - Oz Coordinated", source: "C1", dmg: extraOzDmg });
                                }

                            }
                        }
                        break;
                    case "Mualani":
                        if (Character.constellations >= 1 && Character.constellations != 6) {
                            if (action == "N2") {
                                //Remove C1 buff
                                Character.currentBuffs.forEach(buff => {
                                    if (buff.Source == "C1") {
                                        buff.Value = 0;
                                    }
                                });
                            }
                        }
                        break;
                }
                break;

            case "E":

                Character.currentBuffs.forEach(buff => {
                    if (buff.Type == "Heart of Depth") {

                        if (!HoD) {
                            Character.currentBuffs.push({ Type: "NormalAttack", Value: 30 });
                            Character.currentBuffs.push({ Type: "ChargedAttack", Value: 30 });
                        }
                        HoD = true;
                    }
                });

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
                    case "Surf&#39s Up":
                        if (!surfUpBuff) {
                            Character.currentBuffs.push({ Type: "NormalAttack", Value: 48, Source: "Surf's Up" });
                            surfUpBuff = true;
                            surfUpBuffStacks = 4;
                        }
                        break;
                    case "Ring of Yaxche":
                        if (!hasRingofYaxcheBuff) {
                            hasRingofYaxcheBuff = true;
                            let buffValue = Math.round(character.HP() / 1000);
                            if (buffValue > 32)
                                buffValue = 32;
                            Character.currentBuffs.push({ Type: "NormalAttack", Value: buffValue, Source: "Ring of Yaxche" });
                        }
                        break;
                    case "Footprint of the Rainbow":
                        if (!footprintOfTheRainbowBuff) {
                            footprintOfTheRainbowBuff = true;
                            Character.currentBuffs.push({ Type: "DEF%", Value: 32, Source: "Footprint of the Rainbow" });
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
                    switch (character.name) {
                        case "Clorinde":
                            dmgSources.e -= eDmg;
                            dmgSources.n += eDmg;
                            if (character.constellations >= 1) {
                                const extraNormalAttack = { Multiplier: 30 / 100, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "NormalAttack" }
                                let dmg = 0;
                                for (let i = 0; i < 6; i++) {
                                    dmg = dmgCalc(extraNormalAttack, character);
                                }
                                totalDmg += dmg;
                                dmgSources.other.push({ label: "C1 - Coordinated Attacks", dmg: dmg });
                            }
                            if (character.constellations >= 6) {
                                //Shade attacks 
                                const shadeAttack = { Multiplier: 200 / 100, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "NormalAttack" }
                                let dmg = 0;
                                for (let i = 0; i < 6; i++) {
                                    dmg += dmgCalc(shadeAttack, character);
                                }
                                totalDmg += dmg;
                                dmgSources.other.push({ label: "C6 - Glimbright Shade", dmg: dmg });
                            }
                            break;
                        case "Collei":
                            if (character.constellations >= 6) {
                                let cuileinAnbar = { Multiplier: 200 / 100, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
                                let dmg = dmgCalc(cuileinAnbar, character);
                                totalDmg += dmg;
                                dmgSources.other.push({ label: "C6 - Cuilein Anbar", dmg: dmg });
                            }
                            break;
                        case "Fischl":
                            if (character.constellations >= 6) {
                                let ozAttack = { Multiplier: 33 / 100, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
                                let ozDmg = 0;
                                for (let i = 0; i < 12; i++) {
                                    ozDmg += dmgCalc(ozAttack, character);
                                }
                                totalDmg += ozDmg;
                                let hasOzSource = false;
                                for (source of dmgSources.other) {
                                    if (source.source == "C6") {
                                        hasOzSource = true;
                                        source.dmg += ozDmg;
                                    }
                                }
                                if (!hasOzSource) {
                                    dmgSources.other.push({ label: "C6 - Midnight Phantasmagoria", dmg: ozDmg, source: "C6" });
                                }
                            }
                            break;
                    }

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
                    case "King#39s Squire":
                        if (!kingsSquireBuff) {
                            Character.currentBuffs.push({ Type: "ElementalMastery", Value: 140, Source: "king's Squire" });
                            kingsSquireBuff = true;
                        }
                        break;
                    case "Range Gauge":
                        if (!rangeGaugeBuff) {
                            Character.currentBuffs.push({ Type: "ElementalDMG", Value: 13 * rangeGaugeStacks, Source: "Range Gauge" });
                            Character.currentBuffs.push({ Type: "ATK%", Value: 7 * rangeGaugeStacks, Source: "Range Gauge" });
                            rangeGaugeBuff = true;
                            rangeGaugeStacks = 0;
                        }
                        break;
                    case "Silvershower Heart-strings":
                        if (!silvershowerElementalStack) {
                            let stacks = 0;
                            let buffValue = 0;
                            if (silvershowerBondofLifeStack)
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
                            if (!silvershowerBondofLifeStack && !silvershowerHealingStack) {
                                Character.currentBuffs.push({ Type: "HP%", Value: buffValue, Source: "Silvershower Heart-strings" });
                            } else {
                                //Find the buff and update it
                                for (buff of Character.currentBuffs) {
                                    if (buff.Source == "Silvershower Heart-strings") {
                                        buff.Value = buffValue;
                                    }
                                }
                            }
                            if (silvershowerHealingStack && silvershowerBondofLifeStack) {
                                //Silvershower Heart-strings has all stacks now
                                character.currentBuffs.push({ Type: "ElementalBurstCritRate", Value: 28, Source: "Silvershower Heart-strings" });
                            }
                            silvershowerElementalStack = true;
                        }
                        break;
                    case "Beacon of the Reed Sea":
                        if (!beaconOfTheReedSeaBuff) {
                            Character.currentBuffs.push({ Type: "ATK%", Value: 20, Source: "Beacon of the Reed Sea" });
                            beaconOfTheReedSeaBuff = true;
                        }
                        break;
                    case "Mailed Flower":
                        if (!mailedFlowerBuff) {
                            character.currentBuffs.push({ Type: "ElementalMastery", Value: 96, Source: "Mailed Flower" });
                            character.currentBuffs.push({ Type: "ATK%", Value: 24, Source: "Mailed Flower" });
                        }
                        break;
                    case "Portable Power Saw":
                        if (!portablePowerSawBuff) {
                            character.currentBuffs.push({ Type: "ElementalMastery", Value: 80 * portablePowerSawStacks, Source: "Portable Power Saw" });
                            portablePowerSawBuff = true;
                            portablePowerSawStacks = 0;
                        }
                        break;
                    case "Prospector#39s Drill":
                        if (!prospectorsDrillBuff) {
                            character.currentBuffs.push({ Type: "ATK%", Value: 7 * prospectorsDrillStacks, Source: "Prospector's Drill" });
                            character.currentBuffs.push({ Type: "ElementalDMG", Value: 13 * prospectorsDrillStacks, Source: "Prospector's Drill" });
                            prospectorsDrillBuff = true;
                            prospectorsDrillStacks = 0;
                        }
                        break;
                    case "Staff of the Scarlet Sands":
                        let scarlettStacks = 0;
                        for (buff of Character.currentBuffs) {
                            if (buff.Source == "Staff of the Scarlet Sands") {
                                scarlettStacks++;
                            }
                        }
                        if (scarlettStacks < 3) {
                            Character.currentBuffs.push({ Type: "ATKflat", Value: (28 / 100) * Character.EM(), Source: "Staff of the Scarlet Sands" });
                        }
                        break;
                    case "Flowing Purity":
                        if (!flowingPurityBuff) {
                            Character.currentBuffs.push({ Type: "ElementalDMG", Value: 16, Source: "Flowing Purity" });
                            Character.applyBondOfLife(24);
                            flowingPurityBuff = true;
                        }
                        break;
                    case "Tulaytullah&#39s Remembrance":
                        if (!tulaytullahsRemembranceBuff) {
                            Character.currentBuffs.push({ Type: "NormalAttack", Value: 48, Source: "Tulaytullah's Remembrance" });
                            tulaytullahsRemembranceBuff = true;
                        }
                        break;

                }
                //Check for artifact buffs
                switch (Character.artifactFourPiece) {
                    case "Deepwood Memories":
                        if (!partyHasDeepwoodMemories && !deepWoodMemoriesBuff) {
                            deepWoodMemoriesBuff = true;
                            character.currentBuffs.push({ Type: "ResShred", Element: "DendroDMGBonus", Value: 30, Source: "Deepwood Memories" });
                        }
                        break;
                    case "Nighttime Whispers in the Echoing Woods":
                        if (!nighttimeWhispersInTheEchoingWoodsBuff) {
                            character.currentBuffs.push({ Type: "GeoDMGBonus", Value: 20, Source: "Nighttime Whispers in the Echoing Woods" });
                            nighttimeWhispersInTheEchoingWoodsBuff = true;
                        }
                        break;
                    case "Nymph&#39s Embrace":
                        if (!nymphsDreamSkillStack) {
                            if (!nymphsDreamBurstStack && !nymphsDreamNormalStack) {
                                character.currentBuffs.push({ Type: "HydroDMGBonus", Value: 4, Source: "Nymph's Embrace" });
                                character.currentBuffs.push({ Type: "ATK%", Value: 7, Source: "Nymph's Embrace" });
                                nymphsDreamSkillStack = true;
                            }
                            else {
                                let hydroBuff;
                                let attackBuff;
                                for (buff of character.currentBuffs) {
                                    if (buff.Source == "Nymph's Embrace") {
                                        if (buff.Type == "HydroDMGBonus") {
                                            hydroBuff = buff;
                                        }
                                        else if (buff.Type == "ATK%") {
                                            attackBuff = buff;
                                        }
                                    }
                                }
                                if (nymphsDreamBurstStack && nymphsDreamNormalStack) {
                                    hydroBuff.Value = 15;
                                    attackBuff.Value = 25;
                                }
                                else {
                                    hydroBuff.Value = 9;
                                    attackBuff.Value = 16;
                                }
                            }
                        }
                        break;
                    case "Shimenawas Reminiscence":
                        if (!Character.goesOffFieldDuringCombo && role != "Support") {
                            if (!shimenawasReminiscenceBuff) {
                                shimenawasReminiscenceBuff = true;
                                let buffs = [
                                    { Type: "ChargedAttack", Value: 50 },
                                    { Type: "NormalAttack", Value: 50 },
                                    { Type: "PlungeAttack", Value: 50 },
                                ];
                                buffs.forEach(buff => {
                                    character.currentBuffs.push(buff);
                                });

                            }
                        }

                        break;
                    case "Pale Flame":
                        if (paleFlameStacks < 2) {
                            paleFlameStacks++;
                            character.currentBuffs.push({ Type: "ATK%", Value: 9, Source: "Pale Flame" });
                            if (paleFlameStacks == 2) {
                                character.currentBuffs.push({ Type: "ATK%", Value: 18, Source: "Pale Flame" });
                            }
                        }
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
                switch (Character.weapon.name) {
                    case "King#39s Squire":
                        if (!kingsSquireBuff) {
                            Character.currentBuffs.push({ Type: "ElementalMastery", Value: 140, Source: "king's Squire" });
                            kingsSquireBuff = true;
                        }
                        break;
                    case "Range Gauge":
                        if (!rangeGaugeBuff) {
                            Character.currentBuffs.push({ Type: "ElementalDMG", Value: 13 * rangeGaugeStacks, Source: "Range Gauge" });
                            Character.currentBuffs.push({ Type: "ATK%", Value: 7 * rangeGaugeStacks, Source: "Range Gauge" });
                            rangeGaugeBuff = true;
                            rangeGaugeStacks = 0;
                        }
                        break;
                    case "Portable Power Saw":
                        if (!portablePowerSawBuff) {
                            character.currentBuffs.push({ Type: "ElementalMastery", Value: 80 * portablePowerSawStacks, Source: "Portable Power Saw" });
                            portablePowerSawBuff = true;
                            portablePowerSawStacks = 0;
                            break;
                        }
                        break;
                    case "Prospector#39s Drill":
                        if (!prospectorsDrillBuff) {
                            character.currentBuffs.push({ Type: "ATK%", Value: 7 * prospectorsDrillStacks, Source: "Prospector's Drill" });
                            character.currentBuffs.push({ Type: "ElementalDMG", Value: 13 * prospectorsDrillStacks, Source: "Prospector's Drill" });
                            prospectorsDrillBuff = true;
                            prospectorsDrillStacks = 0;
                        }
                        break;
                    case "Jadefall#39s Splendor":
                        if (!jadefallsSplendorBuff) {
                            character.currentBuffs.push({ Type: "ElementalDMG", Value: (character.HP() / 1000) * (0.3 / 100), Source: "Jadefall's Splendor" });
                            jadefallsSplendorBuff = true;
                        }
                        break;
                }
                switch (Character.artifactFourPiece) {
                    case "Deepwood Memories":
                        if (!partyHasDeepwoodMemories && !deepWoodMemoriesBuff) {
                            deepWoodMemoriesBuff = true;
                            character.currentBuffs.push({ Type: "ResShred", Element: "DendroDMGBonus", Value: 30, Source: "Deepwood Memories" });
                        }
                        break;
                    case "Nymph&#39s Embrace":
                        if (!nymphsDreamBurstStack) {
                            if (!nymphsDreamSkillStack && !nymphsDreamNormalStack) {
                                character.currentBuffs.push({ Type: "HydroDMGBonus", Value: 4, Source: "Nymph's Embrace" });
                                character.currentBuffs.push({ Type: "ATK%", Value: 7, Source: "Nymph's Embrace" });
                                nymphsDreamBurstStack = true;
                            }
                            else {
                                let hydroBuff;
                                let attackBuff;
                                for (buff of character.currentBuffs) {
                                    if (buff.Source == "Nymph's Embrace") {
                                        if (buff.Type == "HydroDMGBonus") {
                                            hydroBuff = buff;
                                        }
                                        else if (buff.Type == "ATK%") {
                                            attackBuff = buff;
                                        }
                                    }
                                }
                                if (nymphsDreamSkillStack && nymphsDreamNormalStack) {
                                    hydroBuff.Value = 15;
                                    attackBuff.Value = 25;
                                }
                                else {
                                    hydroBuff.Value = 9;
                                    attackBuff.Value = 16;
                                }
                            }
                        }
                        break;
                }
                switch (Character.name) {
                    case "Chiori":
                        if (Character.constellations >= 2) {
                            const chiori_skill_multipliers = Character.elementalSkill.Skill(Character, true);
                            let kinu_doll = { Multiplier: ((Character.DEF() * chiori_skill_multipliers.tamotoDMGdef) + (Character.attack() * chiori_skill_multipliers.tamotoDMGatk)) * (170 / 100), Element: "GeoDMGBonus", Scaling: "Combined", type: "ElementalSkill", isReaction: true, Source: "Chiori" };
                            let kinu_doll_dmg = dmgCalc(kinu_doll, Character) * numberOfEnemies;
                            kinu_doll_dmg = dmgCalc(kinu_doll, Character) * numberOfEnemies;
                            kinu_doll_dmg = dmgCalc(kinu_doll, Character) * numberOfEnemies;
                            totalDmg += kinu_doll_dmg;
                            dmgSources.other.push({ dmg: kinu_doll_dmg, label: "C2" });
                        }
                        if (Character.constellations >= 4) {
                            if (role == "Support") {
                                const chiori_skill_multipliers = Character.elementalSkill.Skill(Character, true);
                                let kinu_doll = { Multiplier: ((Character.DEF() * chiori_skill_multipliers.tamotoDMGdef) + (Character.attack() * chiori_skill_multipliers.tamotoDMGatk)) * (170 / 100), Element: "GeoDMGBonus", Scaling: "Combined", type: "ElementalSkill", isReaction: true, Source: "Chiori" };
                                let kinu_doll_dmg = dmgCalc(kinu_doll, Character) * numberOfEnemies;
                                kinu_doll_dmg = dmgCalc(kinu_doll, Character) * numberOfEnemies;
                                kinu_doll_dmg = dmgCalc(kinu_doll, Character) * numberOfEnemies;
                                totalDmg += kinu_doll_dmg;
                                dmgSources.other.push({ dmg: kinu_doll_dmg, label: "C4" });
                            }
                        }
                        break;
                    case "Dori":
                        if (character.constellations >= 2) {
                            let jinniAttack = { Multiplier: 50 / 100, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: false, type: "Special" };
                            for (let i = 0; i < 6; i++) {
                                let jinniDmg = dmgCalc(jinniAttack, character);
                                totalDmg += jinniDmg;
                                let hasC2Source = false;
                                for (let source of dmgSources.other) {
                                    if (source.label == "C2") {
                                        hasC2Source = true;
                                        source.dmg += jinniDmg;
                                    }
                                }
                                if (!hasC2Source) {
                                    dmgSources.other.push({ dmg: jinniDmg, label: "C2" });
                                }
                            }
                        }
                        break;
                }
        }
    });
    switch (Character.name) {
        case "Kazuha":
            Character.currentBuffs.forEach(buff => {
                if (buff.Source == "Poetics of Fuubutsu") {
                    atkBuff += buff.Value;
                }
            });
            break;
        case "Baizhu":
            if (Character.constellations >= 2) {
                let Baizhu_extraAttack = { Multiplier: 250 / 100, Element: "DendroDMGBonus", Scaling: "ATK", type: "ElementalSkill", isReaction: true, Source: "Baizhu" };
                let AdditonalDMG_Baizhu = dmgCalc(Baizhu_extraAttack, Character) * 3;
                let AdditonalHeal_Baizhu = 0.2 * Character.elementalSkill.Skill(Character).healing;
                if (AdditonalHeal_Baizhu == NaN) {
                    AdditonalHeal_Baizhu = 0;
                }
                totalDmg += AdditonalDMG_Baizhu;
                heal += AdditonalHeal_Baizhu;
                dmgSources.other.push({ dmg: AdditonalDMG_Baizhu, label: "C2" });
            }
            if (Character.constellations >= 4) {
                atkBuff += 80;
            }
            if (Character.constellations >= 6) {
                let extraShield_Baizhu = holisticRevivification(Character).shield;
                shield += extraShield_Baizhu;
            }
            break;
        case "Kaveh":
            if (Character.constellations >= 6) {
                if (role == "Dps") {
                    let extraAttack = { Multiplier: 61.8 / 100, Element: "DendroDMGBonus", Scaling: "ATK", type: "NormalAttack", isReaction: true, Source: "Kaveh" };
                    let AdditonalDMG_Kaveh = dmgCalc(extraAttack, Character) * numberOfEnemies * 3;
                    totalDmg += AdditonalDMG_Kaveh;
                    dmgSources.other.push({ dmg: AdditonalDMG_Kaveh, label: "C6" });
                }

            }
            break;
        case "Kirara":
            if (Character.constellations >= 4) {
                let extraAttack = { Multiplier: 200 / 100, Element: "DendroDMGBonus", Scaling: "ATK", type: "ElementalBurst", isReaction: true, Source: "Kirara" };
                let AdditonalDMG_Kirara = dmgCalc(extraAttack, Character) * numberOfEnemies * 3;
                totalDmg += AdditonalDMG_Kirara;
                dmgSources.other.push({ dmg: AdditonalDMG_Kirara, label: "C4" });
            }
            break;
        case "Klee":
            if (Character.constellations >= 1) {
                if (role == "Dps") {
                    let extraAttack = { Multiplier: (120 / 100) * Character.elementalBurst.Skill(Character, true), Element: "PyroDMGBonus", Scaling: "ATK", type: "NormalAttack", isReaction: true, Source: "Klee" };
                    let AdditonalDMG_Klee = dmgCalc(extraAttack, Character) * numberOfEnemies * 2;
                    totalDmg += AdditonalDMG_Klee;
                    dmgSources.other.push({ dmg: AdditonalDMG_Klee, label: "C1" });
                }
            }
            if (Character.constellations >= 4) {
                if (role == "Support") {
                    let extraAttack = { Multiplier: 555 / 100, Element: "PyroDMGBonus", Scaling: "ATK", type: "special", isReaction: true, Source: "Klee" };
                    let AdditonalDMG_Klee = dmgCalc(extraAttack, Character) * numberOfEnemies;
                    totalDmg += AdditonalDMG_Klee;
                    dmgSources.other.push({ dmg: AdditonalDMG_Klee, label: "C4" });
                }
            }
            if (Character.constellations >= 6) {
                atkBuff += 10;
            }
            break;
        case "Sara":
            if (Character.constellations >= 6) {
                atkBuff += 60;
            }
            break;
        case "Kuki":
            if (Character.constellations >= 4) {
                let extraAttack = { Multiplier: 9.7 / 100, Element: "ElectroDMGBonus", Scaling: "HP", type: "ElementalSkill", isReaction: true, Source: "Kuki" };
                let AdditonalDMG_Kuki = dmgCalc(extraAttack, Character) * numberOfEnemies * 2;
                totalDmg += AdditonalDMG_Kuki;
                dmgSources.other.push({ dmg: AdditonalDMG_Kuki, label: "C4" });
            }
            break;
        case "Layla":
            if (Character.constellations >= 4) {
                atkBuff += Character.HP() * (5 / 100);
            }
            break;
        case "Nahida":
            if (role == "Support") {
                if (triggerBurgeoning) {
                    let extraDMG = burgeoning(800, 90, "Dendro", Character, 40) * numberOfEnemies * 5;//5 cores
                    elementalDMGSources.burgeoningDMG += extraDMG;
                }
                if (triggerHyperbloom) {
                    let extraDMG = hyperbloom(800, 90, "Dendro", Character, 40) * numberOfEnemies * 5;//5 cores
                    elementalDMGSources.hyperbloomDMG += extraDMG;
                }
            }
            if (Character.constellations >= 6) {
                let extraAttack = { Multiplier: (Character.attack() * (200 / 100)) + (Character.EM() * (400 / 100)), Element: "DendroDMGBonus", Scaling: "Combined", type: "ElementalSkill", isReaction: false, Source: "Nahida" };
                let AdditonalDMG_Nahida = dmgCalc(extraAttack, Character) * numberOfEnemies * 4;
                extraAttack.isReaction = true;
                AdditonalDMG_Nahida += dmgCalc(extraAttack, Character) * numberOfEnemies * 2;
                totalDmg += AdditonalDMG_Nahida;
                dmgSources.other.push({ dmg: AdditonalDMG_Nahida, label: "C6" });
            }
            break;
        case "Navia":
            if (Character.constellations >= 2) {
                let extraAttack = { Multiplier: Character.elementalBurst.Skill(Character, true), Element: "GeoDMGBonus", Scaling: "ATK", type: "ElementalSkill", isReaction: true, Source: "Navia" };
                let AdditonalDMG_Navia = dmgCalc(extraAttack, Character) * numberOfEnemies * 2;
                totalDmg += AdditonalDMG_Navia;
                dmgSources.other.push({ dmg: AdditonalDMG_Navia, label: "C2" });
            }
            break;
        case "Neuvillette":
            if (Character.constellations >= 6) {
                let extraAttack = { Multiplier: 10 / 100, Element: "HydroDMGBonus", Scaling: "HP", type: "ElementalSkill", isReaction: false, Source: "Neuvillette" };
                let AdditonalDMG_Neuvillette = dmgCalc(extraAttack, Character) * 12;
                totalDmg += AdditonalDMG_Neuvillette;
                dmgSources.other.push({ dmg: AdditonalDMG_Neuvillette, label: "C6" });
            }
            break;
        case "Ningguang":
            if (Character.constellations >= 6) {
                let baseMultiplier = Character.chargedAttack.Multiplier(Character.normalAttackLevel);
                let extraMultiplier = Character.chargedAttack.extraMultiplier(Character.normalAttackLevel) * 7;
                let extraAttack = { Multiplier: baseMultiplier + extraMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", type: "ChargedAttack", isReaction: true, Source: "Ningguang" };
                let AdditonalDMG_Ningguang = dmgCalc(extraAttack, Character) * numberOfEnemies;
                totalDmg += AdditonalDMG_Ningguang;
                dmgSources.other.push({ dmg: AdditonalDMG_Ningguang, label: "C6" });
            }
            break;
        case "Noelle":
            if (Character.constellations >= 4) {
                let extraAttack = { Multiplier: 400 / 100, Element: "GeoDMGBonus", Scaling: "ATK", type: "ElementalBurst", isReaction: true, Source: "Noelle" };
                let AdditonalDMG_Noelle = dmgCalc(extraAttack, Character) * numberOfEnemies;
                totalDmg += AdditonalDMG_Noelle;
                dmgSources.other.push({ dmg: AdditonalDMG_Noelle, label: "C4" });

            }
            break;
        case "Razor":
            if (Character.constellations >= 6) {
                let extraAttack = { Multiplier: 100 / 100, Element: "ElectroDMGBonus", Scaling: "ATK", type: "NormalAttack", isReaction: true, Source: "Razor" };
                let AdditonalDMG_Razor = dmgCalc(extraAttack, Character) * numberOfEnemies;
                totalDmg += AdditonalDMG_Razor;
                dmgSources.other.push({ dmg: AdditonalDMG_Razor, label: "C6" });
            }
            break;
        case "Kokomi":
            if (Character.constellations >= 1) {
                let extraAttack = { Multiplier: 30 / 100, Element: "HydroDMGBonus", Scaling: "HP", type: "Special", isReaction: true, Source: "Kokomi" };
                let AdditonalDMG_Kokomi = dmgCalc(extraAttack, Character) * numberOfEnemies;
                if (role == "Dps") AdditonalDMG_Kokomi * 4
                else if (role == "Support") AdditonalDMG_Kokomi * 2
                totalDmg += AdditonalDMG_Kokomi;
                dmgSources.other.push({ dmg: AdditonalDMG_Kokomi, label: "C1" });
            }
            break;
        case "Tartaglia":
            if (Character.constellations >= 4) {
                let extraAttack = { Multiplier: Character.elementalSkill.Skill(Character, true), Element: "HydroDMGBonus", Scaling: "ATK", type: "ElementalSkill", isReaction: false, Source: "Tartaglia" };
                let AdditonalDMG_Tartaglia = dmgCalc(extraAttack, Character) * numberOfEnemies * 7;
                totalDmg += AdditonalDMG_Tartaglia;
                dmgSources.other.push({ dmg: AdditonalDMG_Tartaglia, label: "C4" });
            }
            break;
        case "Tighnari":
            if (Character.constellations >= 6) {
                let extraAttack = { Multiplier: Character.chargedAttack.extraMultiplier(Character.normalAttackLevel), Element: "DendroDMGBonus", Scaling: "ATK", type: "ChargedAttack", isReaction: false, Source: "Tighnari" };
                let AdditonalDMG_Tighnari = dmgCalc(extraAttack, Character) * numberOfEnemies * 3;
                totalDmg += AdditonalDMG_Tighnari;
                dmgSources.other.push({ dmg: AdditonalDMG_Tighnari, label: "C6" });
            }
            break;
        case "Traveler (Hydro)":
            if (Character.constellations >= 6) {
                let extraHeal = (6 / 100) * 16000;
                heal += extraHeal;
            }
            break;
        case "Venti":
            if (Character.constellations >= 1) {
                let extraArrow = { Multiplier: Character.chargedAttack(Character.normalAttackLevel) * 0.33, Element: "AnemoDMGBonus", Scaling: "ATK", type: "ChargedAttack", isReaction: true, Source: "Venti" };
                let AdditonalDMG_Venti = dmgCalc(extraArrow, Character) * numberOfEnemies * 2 * 5;
                totalDmg += AdditonalDMG_Venti;
                dmgSources.other.push({ dmg: AdditonalDMG_Venti, label: "C1" });
            }
            break;
        case "Wanderer":
            let hasA4 = false;
            for (let buff of Character.currentBuffs) {
                if (buff.Source == "Gales of Reverie") {
                    hasA4 = true;
                }
            }
            if (hasA4) {
                let windAttack = { Multiplier: 35 / 100, Element: "AnemoDMGBonus", Scaling: "ATK", type: "NormalAttack", isReaction: true, Source: "Wanderer" };
                if (Character.constellations >= 1) {
                    windAttack.Multiplier = 60 / 100;
                }
                let AdditonalDMG_Wanderer = dmgCalc(windAttack, Character) * numberOfEnemies;
                for (let i = 0; i < 7; i++) {
                    AdditonalDMG_Wanderer += dmgCalc(windAttack, Character) * numberOfEnemies;
                }
                totalDmg += AdditonalDMG_Wanderer;
                dmgSources.other.push({ dmg: AdditonalDMG_Wanderer, label: "A4" });
            }
            if (Character.constellations >= 6) {
                let extraN1 = { Multiplier: Character.normalAttack1.Multiplier(Character.normalAttackLevel) * 0.4, Element: "AnemoDMGBonus", Scaling: "ATK", type: "NormalAttack", isReaction: true, Source: "Wanderer" };
                let extraN2 = { Multiplier: Character.normalAttack2.Multiplier(Character.normalAttackLevel) * 0.4, Element: "AnemoDMGBonus", Scaling: "ATK", type: "NormalAttack", isReaction: false, Source: "Wanderer" };

                let AdditonalDMG_Wanderer = dmgCalc(extraN1, Character) * numberOfEnemies * 5;
                AdditonalDMG_Wanderer += dmgCalc(extraN2, Character) * numberOfEnemies * 5;
                totalDmg += AdditonalDMG_Wanderer;
                dmgSources.other.push({ dmg: AdditonalDMG_Wanderer, label: "C6" });

            }
            break;
        case "Xiangling":
            if (Character.constellations >= 2) {
                if (role == "Dps") {
                    let extraAttack = { Multiplier: 75 / 100, Element: "PyroDMGBonus", Scaling: "ATK", type: "NormalAttack", isReaction: true, Source: "Xiangling" };
                    let AdditonalDMG_Xiangling = dmgCalc(extraAttack, Character) * numberOfEnemies * 2;
                    totalDmg += AdditonalDMG_Xiangling;
                    dmgSources.other.push({ dmg: AdditonalDMG_Xiangling, label: "C2" });
                }
            }
            break;
        case "Yanfei":
            if (Character.constellations >= 4) {
                let extraShield = Character.HP() * (45 / 100);
                shield += extraShield;
            }
            break;
        case "Yaoyao":
            if (Character.constellations >= 6) {
                let extraAttack = { Multiplier: 75 / 100, Element: "DendroDMGBonus", Scaling: "ATK", type: "ElementalSkill", isReaction: true, Source: "Yaoyao" };
                let AdditonalDMG_Yaoyao = dmgCalc(extraAttack, Character) * numberOfEnemies * 2;
                totalDmg += AdditonalDMG_Yaoyao;
                dmgSources.e += AdditonalDMG_Yaoyao;
                let extraHeal = Character.HP() * (7.5 / 100) * 2;
                heal += extraHeal;
            }
            break;
        case "Yelan":
            if (Character.constellations >= 6) {
                let extraAttacks = { Multiplier: Character.chargedAttack.Skill() * (156 / 100), Element: "Hydro", Scaling: "HP", type: "ChargedAttack", isReaction: true, Source: "Yelan" };
                let AdditonalDMG_Yelan = dmgCalc(extraAttacks, Character) * numberOfEnemies;
                AdditonalDMG_Yelan += dmgCalc(extraAttacks, Character) * numberOfEnemies;
                extraAttacks.isReaction = false;
                AdditonalDMG_Yelan += dmgCalc(extraAttacks, Character) * numberOfEnemies;
                AdditonalDMG_Yelan += dmgCalc(extraAttacks, Character) * numberOfEnemies;
                AdditonalDMG_Yelan += dmgCalc(extraAttacks, Character) * numberOfEnemies;

                totalDmg += AdditonalDMG_Yelan;
                dmgSources.other.push({ dmg: AdditonalDMG_Yelan, label: "C6" });

            }
            break;
        case "Yoimiya":
            if (Character.constellations >= 6) {
                let extraAttack_n1 = { Multiplier: Character.normalAttack1.Skill(60 / 100), Element: "Pyro", Scaling: "ATK", type: "NormalAttack", isReaction: false, Source: "Yoimiya" };
                let extraAttack_n2 = { Multiplier: Character.normalAttack2.Skill(60 / 100), Element: "Pyro", Scaling: "ATK", type: "NormalAttack", isReaction: false, Source: "Yoimiya" };
                let extraAttack_n3 = { Multiplier: Character.normalAttack3.Skill(60 / 100), Element: "Pyro", Scaling: "ATK", type: "NormalAttack", isReaction: true, Source: "Yoimiya" };
                let extraAttack_n4 = { Multiplier: Character.normalAttack4.Skill(60 / 100), Element: "Pyro", Scaling: "ATK", type: "NormalAttack", isReaction: false, Source: "Yoimiya" };
                let extraAttack_n5 = { Multiplier: Character.normalAttack5.Skill(60 / 100), Element: "Pyro", Scaling: "ATK", type: "NormalAttack", isReaction: false, Source: "Yoimiya" };
                let AdditonalDMG_Yoimiya = 0;
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n1, Character);

                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n1, Character);
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n1, Character);
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n2, Character);

                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n2, Character);
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n3, Character);
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n3, Character);

                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n4, Character);
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n4, Character);

                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n4, Character);
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n5, Character);
                AdditonalDMG_Yoimiya += dmgCalc(extraAttack_n5, Character);


                totalDmg += AdditonalDMG_Yoimiya;
                dmgSources.other.push({ dmg: AdditonalDMG_Yoimiya, label: "C6" });
            }
            break;
        case "Yun Jin":
            if (Character.constellations >= 2) {
                atkBuff *= 1.15;
            }
            if (Character.constellations >= 6) {
                atkBuff *= 1.05;
            }
            break;
        case "Zhongli":
            if (Character.constellations >= 6) {
                heal += 2500 * 4;
            }
            break;


    }

    let bonusMultiplier = 0;
    if (character.weapon.name == "Thrilling Tales of Dragon Slayers")
        if (character.supportType == "ATKBooster") {
            bonusMultiplier = (atkBuff * 1.4) + 100;
        } else {
            bonusMultiplier = 20;
        }
    let tmp = 0;
    for (source in dmgSources) {
        //if other loop through
        if (source == "other") {
            for (otherSource in dmgSources[source]) {
                dmgSources[source][otherSource].dmg = Math.round(dmgSources[source][otherSource].dmg);
            }
            continue;
        }
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
    //Ocean hue and song of days past cecks
    switch (Character.artifactFourPiece) {
        case "Ocean-Hue Clam":
            let oceanDMG = heal * (90 / 100);
            totalDmg += oceanDMG;
            dmgSources.Ocean_Hue_Clam_DMG += oceanDMG;
            break;
        case "Song of Days Past":
            atkBuff *= (8 / 100);
            break;
        case "Shimenawas Reminiscence":
            if (Character.energyOffset >100){
                Character.energyOffset += 30;
            }
            break;


    }
    if (scrollOfTheHeroOfCinderCityBuff) {
        atkBuff += 12;
        if (scrollOfTheHeroOfCinderCityBuffBig) {
            atkBuff += 28
            
        }
    }
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
        * getDamageBonus(Character, attackAction)
        * getCrit(Character, attackAction)
        * defCalc(Character)
        * resCalc(Character, attackAction.Element);
    if (attackAction.isReaction || (supportingElement == "Bloom" && (attackAction.Element == "PyroDMGBonus" || attackAction.Element == "ElectroDMGBonus"))) {
        dmg = elementalMasteryCalc(dmg, attackAction.Element, Character)
    }
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
    if (targetsBurning) {
        hitBurningTarget(Character, attackAction.Element);
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
                    case 11:
                        masqueOfTheRedDeathIncreaseMultiplier = 254.8 / 100;
                        break;
                    case 12:
                        masqueOfTheRedDeathIncreaseMultiplier = 271.6 / 100;
                        break;
                    case 13:
                        masqueOfTheRedDeathIncreaseMultiplier = 288.4 / 100;
                        break;
                    default:
                        masqueOfTheRedDeathIncreaseMultiplier = 238 / 100;
                        break;
                }
                if (character.constellations >= 1) {
                    masqueOfTheRedDeathIncreaseMultiplier += (100 / 100);
                }
                flatDamage += character.attack() * (masqueOfTheRedDeathIncreaseMultiplier * (1 + (character.bondOfLife / 100)));

            }
            break;
        case "Chiori":
            if (character.constellations >= 6) {
                if (attackAction.type == "NormalAttack") {
                    flatDamage += character.DEF() * (235 / 100);
                }
            }
            break;
        case "Dehya":
            if (character.constellations >= 1) {
                if (attackAction.type == "ElementalSkill") {
                    flatDamage += character.HP() * (3.6 / 100);
                }
                else if (attackAction.type == "ElementalBurst") {
                    flatDamage += character.HP() * (6 / 100);
                }
            }
            break;
        case "Furina":
            if (character.constellations >= 6 && attackAction.type == "NormalAttack") {

                flatDamage += character.HP() * (18 / 100);
                if (role == "Dps") {
                    flatDamage += character.HP() * (25 / 100);
                }
            }
            break;
        case "Hu Tao":
            if (character.constellations >= 2) {
                if (attackAction.type == "ElementalSkill") {
                    flatDamage += character.HP() * (0.10 / 100);
                }
            }
            break;
        case "Xinyan":
            if (character.constellations >= 6) {
                if (attackAction.type == "ChargedAttack") {
                    flatDamage += character.DEF() * (50 / 100);
                }
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
                flatDamage += character.HP() * (1 / 100);
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


        } else if (buff.type == "ElementalDMG" && attackAction.Element != "PhysicalDMGBonus") {
            bonus += (buff.Value / 100);
        } else if (buff.Type == attackAction.Element) {
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
        let bonusCritDMG = 0;
        if (character.name == "Ganyu") {
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Undivided Heart") {
                    bonusCritRate += buff.Value;
                }
            });
        }
        character.currentBuffs.forEach(buff => {
            if (buff.Type === "PlungeAttackCritRate" && attackAction.type == "PlungeAttack") {
                bonusCritRate += buff.Value;
            }
            else if (buff.Type === "ElementalSkillCritRate" && attackAction.type == "ElementalSkill") {
                bonusCritRate += buff.Value;
            }
            else if (buff.Type == "ElementalBurstCritRate" && attackAction.type == "ElementalBurst") {
                bonusCritRate += buff.Value;
            } else if (buff.Type == "ElementalSkillCritDMG" && attackAction.type == "ElementalSkill") {
                bonusCritDMG += buff.Value;
            } else if (buff.Type == "CritRate" && buff.for == attackAction.type) {
                bonusCritRate += buff.Value;
            } else if (buff.Type == "CritDMG" && buff.for == attackAction.type) {
                bonusCritDMG += buff.Value;
            }
            else if (buff.Type == "CritRate" && buff.for == attackAction.type2) {
                bonusCritRate += buff.Value;
            }
            else if (buff.Type == "CritRate") {
                bonusCritRate += buff.Value;
            } else if (buff.Type == "CritDMG") {
                bonusCritDMG += buff.Value;
            }
        });
        if (character.critRate() + bonusCritRate > 100) {

            bonusCritRate -= character.critRate() + bonusCritRate - 100;
        }
        return (1 + (((character.critRate() + bonusCritRate) / 100) * ((character.critDMG() + bonusCritDMG) / 100)));
    } else {
        return 1;
    }
}
function defCalc(character) {
    let defReduction = 0;
    let defIgnore = 0;
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "defReduction") {
            defReduction += 1 + (buff.Value / 100);
        } else if (buff.Type == "defIgnore") {
            defIgnore += buff.Value / 100;
        }
    });
    let characterLevel = Number.parseInt(character.level.slice(0, character.level.length - 1));

    return (characterLevel + 100) / (((1 - defReduction) * 190 + characterLevel + 100) * (1 - defIgnore));
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
    hasTriggerdAReaction(character);
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
            }
            else if (buff.Type == "VV") {
                swirlBonus += 60;
            }
            else if (buff.Type == "All things Are of the Earth") {
                let maxHPPercent = character.HP() / 1000;
                if (maxHPPercent > 50)
                    maxHPPercent = 50;
                const bonus = 2 * maxHPPercent;
                bloomBonus += bonus;
                burgeoningBonus += bonus;
                hyperbloomBonus += bonus;
                burningBonus += bonus;
            }
            else if (buff.Type == "bloomBonus") {
                bloomBonus += buff.Value;
            }
            else if (buff.Type == "HyperbloomBonus") {
                hyperbloomBonus += buff.Value;
            }
            else if (buff.Type == "BurgeoningBonus") {
                burgeoningBonus += buff.Value;
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
            else if (buff.Type == "Flower of Paradise Lost") {
                bloomBonus += buff.Value;
                hyperbloomBonus += buff.Value;
                burgeoningBonus += buff.value;
            } else if (buff.Type == "BurningBonus") {
                burningBonus += buff.Value;
            }
            else if (buff.Type == "OverloadedBonus") {
                overloadedBonus += buff.Value;
            }
            else if (buff.Type == "SuperconductBonus") {
                superconductBonus += buff.Value;
            }
            else if (buff.Type == "ElectroChargedBonus") {
                electroChargedBonus += buff.Value;
            }
            else if (buff.Type == "SwirlBonus") {
                swirlBonus += buff.Value;
            }
            else if (buff.Type == "MeltBonus") {
                meltBonus += buff.Value;
            }
            else if (buff.Type == "VaporizeBonus") {
                vaporizeBonus += buff.Value;
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
                        vaporizeTriggerd(character);
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
                        crystalized(character, type);
                        break;
                }
                break;
            case "Hydro":
                switch (type) {
                    case "Pyro":
                        dmg = reverseVaporizeMultiplier * incomingDmg;
                        vaporizeTriggerd(character);
                        amplyfyingReaction = true;
                        break;
                    case "Electro":
                        dmg += electroCharged(em, lvl, "Electro", character, electroChargedBonus);

                        elementalDMGSources.electrochargedDMG += dmg;
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
                        crystalized(character, type);
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
                        crystalized(character, type);
                        break;
                }
                break;
            case "Electro":
                switch (type) {
                    case "Hydro":
                        dmg += electroCharged(em, lvl, "Electro", character, electroChargedBonus);

                        elementalDMGSources.electrochargedDMG += dmg;
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
                        crystalized(character, type);
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
                    crystalized(character, type);
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
    return ((LvlMultiplier[character.level] * 2) * (1 + ((16 * (em / (em + 2000)))) + overloadedBonus) * resCalc(character, element));
}
function electroCharged(em, lvl, element, character, electroChargedBonus) {
    return ((LvlMultiplier[character.level] * 1.2) * (1 + ((16 * (em / (em + 2000)))) + electroChargedBonus) * resCalc(character, element)) * 1.2; //1.2 ticks per attack
}
function superconduct(em, lvl, element, character, superconductBonus) {
    if (!superconductRes) {
        character.currentBuffs.push({ Type: "ResShred", Value: 40, Element: "PhysicalDMGBonus" });
        superconductRes = true;
    }
    return ((LvlMultiplier[character.level] * 0.5) * (1 + ((16 * (em / (em + 2000)))) + superconductBonus) * resCalc(character, element));
}
function swirl(em, lvl, element, character, swirlBonus) {
    let isShreded = false;
    character.currentBuffs.forEach(buff => {
        if (buff.Type == "VVShred")
            isShreded = true;

    });

    let dmg = ((LvlMultiplier[character.level] * 0.6) * (1 + ((16 * (em / (em + 2000)))) + swirlBonus) * resCalc(character, element));
    if (!isShreded) {
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "VV") {
                character.currentBuffs.push({ Type: "VVShred", Element: element, Value: 40 });
                vvActive = true;
            }
        });

    }
    if (character.name == "Kazuha") {
        let haveBuff = false;
        let havePassive = false;
        character.currentBuffs.forEach(buff => {
            if (buff.Type == "Poetics of Fuubutsu")
                havePassive = true;
            else if (buff.Source == "Poetics of Fuubutsu")
                haveBuff = true;
        });
        if (!haveBuff && havePassive) {
            character.currentBuffs.push({ Type: supportingElement + "DMGBonus", Source: "Poetics of Fuubutsu", Value: character.EM() * 0.04 })
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
        } else if (buff.Type == "All things Are of the Earth") {
            let maxHPPercent = character.HP() / 1000;
            if (maxHPPercent > 50)
                maxHPPercent = 50;
            const bonus = 0.8 * maxHPPercent;
            aggravateBonus += bonus;

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
        } else if (buff.Type == "All things Are of the Earth") {
            let maxHPPercent = character.HP() / 1000;
            if (maxHPPercent > 50)
                maxHPPercent = 50;
            const bonus = 0.8 * maxHPPercent;
            spreadBonus += bonus;

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
    hitBurningTarget(character, "Burning");
    let dmg = (burningBaseDmg * burningEM) * resCalc(character, element) * 3;//about 3 ticks per attack on avg
    if (nahidaC2Buff) {
        dmg = bloomCrit(dmg, 20, 100);
    }
    return dmg;
}
function bloom(em, lvl, element, character, bloomBonus) {
    const bloomBaseDmg = 2 * LvlMultiplier[character.level];
    const bloomEM = 1 + (16 * (em / (em + 1200))) + bloomBonus;
    switch (character.name) {
        case "Kaveh":
            if (character.constellations >= 4) {
                bloomBonus += 60;
            }
            break;
    }
    hasTriggerdABloomTypeReaction(character);
    return (bloomBaseDmg * bloomEM) * resCalc(character, element) * 2 * 2;//2 hits 2 cores
}
function bountifulCore(em, lvl, element, character, bloomBonus) {
    const bloomBaseDmg = 2 * LvlMultiplier[character.level];
    const bloomEM = 1 + (16 * (em / (em + 1200))) + bloomBonus;
    hasTriggerdABloomTypeReaction(character);
    return (bloomBaseDmg * bloomEM) * resCalc(character, element) * numberOfEnemies * 2;//big aoe
}
function burgeoning(em, lvl, element, character, burgeoningBonus) {
    if (triggerBurgeoning) {
        //Kuki with 800 em with flower of lost paradise
        em = 800 + partyElementalMasteryBonus;
        const burgeoningBaseDmg = 3 * LvlMultiplier["90b"];
        const burgeoningEM = 1 + (16 * (em / (em + 1200))) + 0.4;
        hasTriggerdABloomTypeReaction(character);
        let dmg = (burgeoningBaseDmg * burgeoningEM) * resCalc(character, element + "DMGBonus") * 3;//1 hit on 3 enemies
        if (nahidaC2Buff) {
            dmg = bloomCrit(dmg, 20, 100);
        }
        return dmg;
    }
    const burgeoningBaseDmg = 3 * LvlMultiplier[character.level];
    const burgeoningEM = 1 + (16 * (em / (em + 1200))) + burgeoningBonus;
    hasTriggerdABloomTypeReaction(character);
    let dmg = (burgeoningBaseDmg * burgeoningEM) * resCalc(character, element + "DMGBonus") * 3;//1 hit on 3 enemies
    return dmg;
}
function hyperbloom(em, lvl, element, character, hyperbloomBonus) {
    if (triggerHyperbloom) {
        //Kuki with 800 em with flower of lost paradise
        em = 800 + partyElementalMasteryBonus;
        const hyperBloomBaseDmg = 3 * LvlMultiplier["90b"];
        const hyperBloomEM = 1 + (16 * (em / (em + 1200))) + 0.4;
        hasTriggerdABloomTypeReaction(character);
        let dmg = (hyperBloomBaseDmg * hyperBloomEM) * resCalc(character, element + "DMGBonus") * 2 * 2;//2 hits and 2 enemies within 1m

        if (nahidaC2Buff) {
            dmg = bloomCrit(dmg, 20, 100);
        }
        return dmg;
    }
    const hyperBloomBaseDmg = 3 * LvlMultiplier[character.level];
    const hyperBloomEM = 1 + (16 * (em / (em + 1200))) + hyperbloomBonus;
    hasTriggerdABloomTypeReaction(character);
    let dmg = (hyperBloomBaseDmg * hyperBloomEM) * resCalc(character, element + "DMGBonus") * 2 * 2;//2 hits and 2 enemies within 1m

    return dmg;
}
function bloomCrit(dmg, critRate, critDMG) {
    //Calc average crit
    let crit = 1 + (((critRate / 100) * (critDMG / 100)));
    return dmg * crit;
}
function crystalized(character, element) {
    shieldCreated(character);
    hasShield = true;
    shardsInPossession++;
    switch (character.weapon.name) {
        case "Verdict":
            let buffStacks = 0;
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Verdict") {
                    buffStacks++;
                }
            });
            if (buffStacks < 2) {
                character.currentBuffs.push({ Type: "ElementalSkill", Source: "Verdict", Value: 18 });
            }
            break;
    }
    switch (character.artifactFourPiece) {
        case "Archaic Petra":
            if (!archaicPetraBuff) {
                character.currentBuffs.push({ Type: supportingElement + "DMGBonus", Source: "Archaic Petra", Value: 35 });
                archaicPetraBuff = true;
            }
            break;
        case "Nighttime Whispers in the Echoing Woods":
            if (!nighttimeWhispersBuff) {
                let hasPrevious = false;
                character.currentBuffs.forEach(buff => {
                    if (buff.Source == "Nighttime Whispers in the Echoing Woods" && buff.Type == "GeoDMGBonus") {
                        hasPrevious = true;
                    }
                });
                if (hasPrevious) {
                    character.currentBuffs.push({ Type: "GeoDMGBonus", Source: "Nighttime Whispers in the Echoing Woods", Value: 30 });
                    nighttimeWhispersBuff = true;
                }
            }
            break;
    }
    switch (character.name) {
        case "Yun Jin":
            if (character.constellations >= 4 && !Yun_JinC4Buff) {
                character.currentBuffs.push({ Type: "DEF%", Value: 20, Source: "A4" });
                Yun_JinC4Buff = true;
            }
            break;
    }
    return 0;
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
function hasTriggerdDendroReaction(character) {
    switch (character.weapon.name) {
        case "Forest Regalia":
            if (!forestRegaliaBuff) {
                character.currentBuffs.push({ Type: "ElementalMastery", Value: 120, Source: "Forest Regalia" });
                forestRegaliaBuff = true;
            }
            break;
        case "Moonpiercer":
            if (!moonpiercerBuff) {
                character.currentBuffs.push({ Type: "ATK%", Value: 32, Source: "Moonpiercer" });
                moonpiercerBuff = true
            }
            break;
        case "Sapwood Blade":
            if (!sapwoodBladeBuff) {
                character.currentBuffs.push({ Type: "ElementalMastery", Value: 120, Source: "Sapwood Blade" });
                sapwoodBladeBuff = true;
            }
            break;

    }

}
function hasTriggerdAReaction(character) {
    switch (character.weapon.name) {
        case "Mailed Flower":
            if (!mailedFlowerBuff) {
                character.currentBuffs.push({ Type: "ElementalMastery", Value: 96, Source: "Mailed Flower" });
                character.currentBuffs.push({ Type: "ATK%", Value: 24, Source: "Mailed Flower" });
                mailedFlowerBuff = true;
            }
            break;
        case "Missive Windspear":
            if (!missiveWindspearBuff) {
                character.currentBuffs.push({ Type: "ElementalMastery", Value: 96, Source: "Missive Windspear" });
                character.currentBuffs.push({ Type: "ATK%", Value: 24, Source: "Missive Windspear" });
                missiveWindspearBuff = true;
            }
            break;
        case "Fruit of Fulfillment":
            let fruitStacks = 0;
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Fruit of Fulfillment") {
                    fruitStacks++;
                }
            });
            if (fruitStacks < 3) {
                character.currentBuffs.push({ Type: "ElementalMastery", Value: 36, Source: "Fruit of Fulfillment" });
                character.currentBuffs.push({ Type: "ATK%", Value: -5, Source: "Fruit of Fulfillment" });
            }
            break;
    }
    switch (character.artifactFourPiece) {
        case "Gilded Dreams":
            if (!gildedDreamsBuff) {
                let sameElement = 0;
                let differentElement = 0;
                partyMemberElements.forEach(element => {
                    if (element == character.element)
                        sameElement++;
                    else
                        differentElement++;
                });
                character.currentBuffs.push({ Type: "ElementalMastery", Value: 75 * differentElement, Source: "Gilded Dreams" });
                character.currentBuffs.push({ Type: "ATK%", Value: 21 * sameElement, Source: "Gilded Dreams" });
                gildedDreamsBuff = true;
            }
            break;
        case "Scroll of the Hero of Cinder City":
            if (!scrollOfTheHeroOfCinderCityBuff) {
                character.currentBuffs.push({ Type: "ElementalDMG", Value: 12, Source: "Scroll of the Hero of Cinder City" });
                if (character.nightsoul) {
                    character.currentBuffs.push({ Type: "ElementalDMG", Value: 28, Source: "Scroll of the Hero of Cinder City" });
                    scrollOfTheHeroOfCinderCityBuffBig = true;
                }
                scrollOfTheHeroOfCinderCityBuff = true;
            }
            break;
    }
}
function hpHasIncreased(character) {
    switch (character.weapon.name) {
        case "Song of Stillness":
            if (!SongofStillnessBuff) {
                character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 32, Source: "Song of Stillness" });
                SongofStillnessBuff = true;
            }
    }
}
function hpHasDecreased(character) {

}
function hpHasIncresedorDecreased(character) {
    switch (character.name) {
        case "Wriothesley":
            let hasA4 = false;
            let stacks = 0;
            character.currentBuffs.forEach(buff => {
                if (buff.Type == "A4") {
                    hasA4 = true;

                }
                if (buff.Source == "A4") {
                    stacks++;
                }
            });
            if (hasA4 && stacks < 5) {
                character.currentBuffs.push({ Type: "ATK%", Value: 6, Source: "A4" });
            }
            break;
    }
    switch (character.weapon.name) {
        case "Splendor of Tranquil Waters":
            let stacks = 0;
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Splendor of Tranquil Waters") {
                    stacks++;
                }
            });
            if (stacks < 3) {
                character.currentBuffs.push({ Type: "ElementalSkill", Value: 8, Source: "Splendor of Tranquil Waters" });
            }
            break;
        case "Range Gauge": {
            rangeGaugeStacks++;
            if (rangeGaugeStacks > 3)
                rangeGaugeStacks = 3;
        }
            break;
        case "Cashflow Supervision":
            let cashflowStacks = 0;
            character.currentBuffs.forEach(buff => {
                if (buff.Source == "Cashflow Supervision") {
                    cashflowStacks++;
                }
            });
            if (cashflowStacks < 3) {
                character.currentBuffs.push({ Type: "NormalAttack", Value: 16, Source: "Cashflow Supervision" });
                character.currentBuffs.push({ Type: "ChargedAttack", Value: 14, Source: "Cashflow Supervision" });
                if (cashflowStacks == 2) {
                    character.currentBuffs.push({ Type: "ATK%", Value: 12, Source: "Cashflow Supervision" }); //Should be atkspeed but that is not supported so atk% will be used at 150% atkspeed value
                }
            }
            break;
    }
    switch (character.artifactFourPiece) {
        case "Marechaussee Hunter":
            if (marechausseeHunterStacks < 3) {
                marechausseeHunterStacks++;
                character.currentBuffs.push({ Type: "CritRate", Value: 12, Source: "Marechaussee Hunter" });
            }
            break;
    }
}
function healingHasOccured(character) {
    switch (character.weapon.name) {
        case "Silvershower Heart-strings":
            if (!silvershowerHealingStack) {
                let stacks = 0;
                let buffValue = 0;
                if (silvershowerElementalStack)
                    stacks++;
                if (silvershowerBondofLifeStack)
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
                if (!silvershowerElementalStack && !silvershowerBondofLifeStack) {
                    character.currentBuffs.push({ Type: "HP%", Value: buffValue, Source: "Silvershower Heart-strings" });
                } else {
                    for (buff of character.currentBuffs) {
                        if (buff.Source == "Silvershower Heart-strings") {
                            buff.Value = buffValue;
                        }
                    }
                }
                if (silvershowerElementalStack && silvershowerBondofLifeStack) {
                    //Silvershower Heart-strings has all stacks now
                    character.currentBuffs.push({ Type: "ElementalBurstCritRate", Value: 28, Source: "Silvershower Heart-strings" });
                }
                silvershowerHealingStack = true;
            }
            break;
        case "Tidal Shadow":
            if (!tidalShadowBuff) {
                character.currentBuffs.push({ Type: "ATK%", Value: 48, Source: "Tidal Shadow" });
                tidalShadowBuff = true;
            }
            break;
        case "Portable Power Saw":
            portablePowerSawStacks++;
            if (portablePowerSawStacks > 3)
                portablePowerSawStacks = 3;
            break;
        case "Dialogues of the Desert Sages":
            if (!dialoguesOfTheDesertSagesBuff) {
                character.currentBuffs.push({ Type: "EnergyRecharge", Value: 24, Source: "Dialogues of the Desert Sages" });
                dialoguesOfTheDesertSagesBuff = true;
            }
            break;
        case "Prospector#39s Drill":
            prospectorsDrillStacks++;
            if (prospectorsDrillStacks > 3)
                prospectorsDrillStacks = 3;
            break;
    }
}
function bondOfLifeChanged(character) {
    switch (character.weapon.name) {
        case "Crimson Moon&#39s Semblance":
            let buff;
            let bigBuff;
            character.currentBuffs.forEach(b => {
                if (b.Source == "Crimson Moon's Semblance" && b.extra == "smallBuff") {
                    buff = b;
                }
                else if (b.Source == "Crimson Moon's Semblance" && b.extra == "bigBuff") {
                    bigBuff = b;
                }
            });
            if (character.bondOfLife > 0 && buff == undefined) {
                character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 12, Source: "Crimson Moon's Semblance", extra: "smallBuff" });
            } else if (character.bondOfLife > 30 && bigBuff == undefined) {
                character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 24, Source: "Crimson Moon's Semblance", extra: "bigBuff" });
            }
            if (character.bondOfLife < 30 && bigBuff != undefined) {
                character.currentBuffs = character.currentBuffs.filter(b => b.Source != "Crimson Moon's Semblance" && b.extra != "bigBuff");
            }
            break;
    }
    switch (character.artifactFourPiece) {
        case "Fragment of Harmonic Whimsy":
            if (fragmentOfHarmonicWhimsyStacks < 3) {
                fragmentOfHarmonicWhimsyStacks++;
                character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 18, Source: "Fragment of Harmonic Whimsy" });
            }
    }
}
function hitBurningTarget(character, source) {
    switch (character.weapon.name) {
        case "Lumidouce Elegy":
            if (source == "Burning" || source == "DendroDMGBonus") {
                let stacks = 0;
                character.currentBuffs.forEach(buff => {
                    if (buff.Source == "Lumidouce Elegy") {
                        stacks++;
                    }
                });
                if (stacks < 2) {
                    character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 18, Source: "Lumidouce Elegy" });
                }
            }
            break;
    }
    switch (character.artifactFourPiece) {
        case "Unfinished Reverie":
            if (role == "Support" && character.subDpsType == "Off-field") {
                if (!unfinishedReverieBuff) {
                    character.currentBuffs.push({ Type: "AddativBonusDMG", Value: 50, Source: "Unfinished Reverie" });
                    unfinishedReverieBuff = true;
                }
            }
            break;
    }
}
function shieldCreated(character) {
    switch (character.weapon.name) {
        case "Jadefall#39s Splendor":
            if (!jadefallsSplendorBuff) {
                character.currentBuffs.push({ Type: "ElementalDMG", Value: (character.HP() / 1000) * (0.3 / 100), Source: "Jadefall's Splendor" });
                jadefallsSplendorBuff = true;
            }
            break;
        case "Summit Shaper":
            if (!summitShaperBuff) {
                character.currentBuffs.push({ Type: "ATK%", Value: 40, Source: "Summit Shaper" });
                summitShaperBuff = true;
            }
            break;

    }
    switch (character.artifactFourPiece) {
        case "Nighttime Whispers in the Echoing Woods":
            if (nighttimeWhispersInTheEchoingWoodsBuff) {
                //Check if buff is 50 or 20 value
                let buff = character.currentBuffs.find(b => b.Source == "Nighttime Whispers in the Echoing Woods");
                if (buff.Value == 20) {
                    buff.Value = 50;
                }
            }
            break;
        case "Retracing Bolide":
            if (!retracingBolideBuff) {
                let buffs = [
                    { Type: "ChargedAttack", Value: 40 },
                    { Type: "NormalAttack", Value: 40 }
                ];
                buffs.forEach(b => {
                    character.currentBuffs.push({ Type: b.Type, Value: b.Value, Source: "Retracing Bolide" });
                });
                retracingBolideBuff = true;
            }
    }
}
function hasTriggerdABloomTypeReaction(character) {
    switch (character.artifactFourPiece) {
        case "Flower of Paradise Lost":
            if (flowerOfparadiseLostStacks < 4) {
                character.currentBuffs.push({ Type: "bloomBonus", Value: 40 * (25 / 100), Source: "Flower of Paradise" });
                character.currentBuffs.push({ Type: "HyperBloomBonus", Value: 40 * (25 / 100), Source: "Flower of Paradise" });
                character.currentBuffs.push({ Type: "BurgeoningBonus", Value: 40 * (25 / 100), Source: "Flower of Paradise" });
                flowerOfparadiseLostStacks++;
            }
    }
}
function enteredNightsoulBlessing(character) {
    if (character.artifactTwoPiece[0] == "Obsidian Codex" || character.artifactTwoPiece[1] == "Obsidian Codex") {
        if (!obsidianCodexBuff) {
            character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 15, Source: "Obsidian Codex" });
            character
            obsidianCodexBuff = true;
        }
    }
    switch (character.artifactFourPiece) {
        case "Obsidian Codex":
            if (!obsidianCodexBuff2) {
                character.currentBuffs.push({ Type: "CritRate", Value: 40, Source: "Obsidian Codex" });
                obsidianCodexBuff2 = true;
            }
    }
}
function vaporizeTriggerd(character) {
    switch (character.weapon.name) {
        case "Surf&#39s Up":
            if (surfUpBuff) {
                surfUpBuffStacks++;
                if (surfUpBuffStacks > 4) {
                    surfUpBuffStacks = 4;
                }
                let buff;
                for (buff of character.currentBuffs) {
                    if (buff.Source == "Surf's Up") {
                        if (buff.Type == "NormalAttack") {
                            buff.Value = 12 * surfUpBuffStacks;
                        }
                    }
                }
            }
    }
}

function kleeC1Test(times) {
    let attacks = 12;
    let total = 0;
    for (let i = 0; i < times; i++) {
        let currentChance = 0;
        for (let j = 0; j < attacks; j++) {
            //Roll for extra attack
            let roll = Math.floor(Math.random() * 100);
            if (roll < currentChance) {
                total++;
                currentChance = 0;
                continue;
            }
            currentChance += 8;
        }
    }
    console.log(total / times);
}
function liasC4test(times) {
    let attacks = 29
    let total = 0
    for (let i = 0; i < times; i++) {
        for (let j = 0; j < attacks; j++) {
            let random = Math.floor(Math.random() * 100);
            if (j == 0) {
                if (random < 50) {
                    total++;
                }
                else if (random >= 50) {
                    total += 2;
                }
                continue;
            }

            if (random <= 25) {
                total++;
            }
            else if (random <= 75 && random > 25) {
                total += 2;
            }
            else if (random <= 100 && random > 75) {
                total += 3;
            }
        }
    }
    console.log((total / times) - attacks);
}