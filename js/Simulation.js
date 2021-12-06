let bestDMG = 0;
let bestArtifacts = null;
function compareCharacters(usersCharacter) {
    let simulatedCharacter;
    AllCharacters.forEach(character => {
        if (character.name == usersCharacter.name) {
            simulatedCharacter = character;
        }
    });
    let result = FindBestBuild(simulatedCharacter, 100000);
    console.log(usersCharacter.attack(), usersCharacter.critRate(), usersCharacter.critDMG());
    let result2 = Simulation(usersCharacter);
    console.log(result[0], result2.dmg);
    console.log(result[3]);
    console.log(["Attack: "+result2.char.attack(),"Base Attack: "+result2.char.baseAttack,"Crit Rate: "+result2.char.critRate(),"Crit DMG: "+result2.char.critDMG(),result2.char.advancedstats.elementalBonuses]);
    return `${Math.floor((result2.dmg / result[0]) * 10)}/10`;
}


function FindBestBuild(baseChar, times) {
    


    let newDamage;
    let currentBestArtifacts;
    let indexForBetterDmg = [];
    let chara;
    let startTime = Date.now();
    for (let index = 0; index < times; index++) {

        let character = _.cloneDeep(baseChar);
        let weapon = _.cloneDeep(MistsplitterReforged);
        weapon.level = "90b";
        character.level = "90b";
        let newCharacter = new Createcharacter(
            character,
            weapon,
            GenerateArtifacts(character.scalingType)
        );
        
        applyBonuses(newCharacter);
        let result = Simulation(newCharacter);
        newDamage = result.dmg;
        let char = result.char;
        if (newDamage > bestDMG) {
            currentBestArtifacts = newCharacter.artifacts;
            bestArtifacts = newCharacter.artifacts;
            bestDMG= newDamage;
            const newObj = { Time: index, MultiplerToFind: (indexForBetterDmg.length >= 2) ? (index / indexForBetterDmg[indexForBetterDmg.length - 1].Time) : index, DMG: newDamage };
            charac = char;
            chara = ["Attack: "+char.attack(),"Base Attack: "+ char.baseAttack, "Crit Rate: "+char.critRate(), "Crit DMG: "+char.critDMG(), char.advancedstats.elementalBonuses];

            indexForBetterDmg.push(newObj);

        }
        newCharacter = undefined;

    }
    character = undefined;
    let stopTime = Date.now();
    console.log((stopTime - startTime) / 1000 + "seconds");
    console.log(indexForBetterDmg);
    if(chara == undefined)
        return "Nothing Found";
    else
        return [bestDMG, currentBestArtifacts, charac,chara];
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
        this.element = baseCharacter.element;
        this.level = baseCharacter.level;
        this.energyOffset = baseCharacter.energyOffset;
        this.weapon = weapon;
        this.baseAttack = baseCharacter.baseAttack;
        this.baseAttack = this.baseAttack() + weapon.baseAttack();
        this.stamina = baseCharacter.stamina;
        this.normalAttack1 = baseCharacter.normalAttack1;
        this.normalAttack2 = baseCharacter.normalAttack2;
        this.normalAttack3 = baseCharacter.normalAttack3;
        this.normalAttack4 = baseCharacter.normalAttack4;
        this.normalAttack5 = baseCharacter.normalAttack5;
        this.chargedAttack = baseCharacter.chargedAttack;
        this.elementalSkill = function () { return 0 };
        this.elementalBurst = function () { return 0 };
        this.sequence = baseCharacter.sequence;
        this.artifacts = artifacts;
        this.currentBuffs = [baseCharacter.passive1, baseCharacter.passive2];
        this.ExtraMultiplier = baseCharacter.ExtraMultiplier || [];
        this.advancedstats = baseCharacter.advancedstats;
        this.ascensionstats = baseCharacter.ascensionStat;
        this.attack = function CalculateAttack() {
            let artifacts = this.artifacts;
            let baseattack = this.baseAttack;

            let buffs = this.currentBuffs;
            let totalAtkIncrease = 0.0;
            let flatAttack = 0;
            artifacts.forEach(artifact => {
                if (artifact.Mainstat.Type == "ATK%") {
                    totalAtkIncrease += artifact.Mainstat.Value;
                } else if(artifact.Mainstat.Type == "ATKflat"){
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
                    if (buff.Type == "Atk%") {
                        totalAtakIncrease += buff.Value;
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
                criteRate += ascension.Value;
            }

            return Math.round(critRate*10)/10;
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

            return Math.round(critDMG*10)/10;
        }
        



    }
}
function applyBonuses(character) {
    let mainstat = character.artifacts[4].Mainstat;
    if (mainstat.Type != "ATK%" || mainstat.Type != "DEF%" || mainstat.Type != "HP%" || mainstat.Type != "Elemental Mastery") {
        character.advancedstats.elementalBonuses.forEach(element => {
            if (element.Type == mainstat.Type) {
                element.Value += mainstat.Value;
            }
        });
    }
    character.currentBuffs.push({Type:character.weapon.subStat.Type,Value: character.weapon.subStat.Value()})
    let sets = [];
    character.artifacts.forEach(artifact =>{
        sets.push(artifact.Set);
    });
    getSetBonus(sets,character);
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
            case "ChargedAttack":
                character.ExtraMultiplier.push({ Type: "NormalAttack", Value: buff.Value });
            break;
            case "BonusDMG%":
            character.ExtraMultiplier.push({ Type: "BonusDMG%", Value: buff.Value });
            break;
            case "EnergyRecharge":
                character.advancedstats.energyRecharge += buff.Value;
                break;
            
            default:
                break;
        }
    });
}
function getSetBonus(array,character){
   
for(let i = 0;i<array.length;i++){
    
    let currentSet = array[i];
    let count = 1;
    for (let index = i+1; index < array.length; index++) {
        if(array[index] == currentSet){
           
            count++;
        }
        
    }
    if(count >=4){
        character.currentBuffs.push(artifactSets[array[i]].twoPiece);
      
        if(artifactSets[array[i]].fourPiece != undefined){
        if(currentSet == "Gladiator's Finale"){
            if(character.weaponType =="Sword" || character.weaponType =="Claymore" || character.weaponType =="Polearm"){
                character.currentBuffs.push(artifactSets[array[i]].fourPiece);
            }
        }
        else if(currentSet == "Wanderer's Troupe"){
            if(character.weaponType =="Bow" || character.weaponType =="Catalyst"){
                character.currentBuffs.push(artifactSets[array[i]].fourPiece);
            }
        }
        else if(currentSet == "Shimenawa's Reminiscence"){

        }else{
            if(artifactSets[array[i]].fourPiece.Type==undefined){
                artifactSets[array[i]].fourPiece.forEach(buff=>{character.currentBuffs.push(buff)});
            }
            else{
                character.currentBuffs.push(artifactSets[array[i]].fourPiece);
            }
            
        }
        
        }
        break;
    }
    else if(count>=2){
        
        character.currentBuffs.push(artifactSets[array[i]].twoPiece);
    }
    
}
}
function Simulation(character) {

    let Character = character;
    let totalDmg = 0;
    Character.sequence.forEach(action => {
        let type = "basicAttack";
        switch (action) {
            case "N1":
            case "N2":
            case "N3":
            case "N4":
            case "N5":
            case "C":
            case "P":
                let attackAction;
                switch (action) {
                    case "N1":
                        attackAction = Character.normalAttack1;
                        break;

                    case "N2":
                        attackAction = Character.normalAttack2;
                        break;

                    case "N3":
                        attackAction = Character.normalAttack3;
                        break;

                    case "N4":
                        attackAction = Character.normalAttack4;
                        break;

                    case "N5":
                        attackAction = Character.normalAttack5;
                        break;

                    case "C":
                        attackAction = Character.chargedAttack;
                        type = "ChargedAttack";
                        break;

                    case "P":
                        attackAction = Character.plungeAttack;
                        break;
                }

                totalDmg += dmgCalc(attackAction, Character, type);

                break;

            case "E":
                totalDmg += Character.elementalSkill();
                break;

            case "Q":
                totalDmg += Character.elementalBurst();
                break;

        }
    });
    
    return { dmg: Math.floor(totalDmg / ((Character.energyOffset - Character.advancedstats.energyRecharge) / 100)), char: Character };
}
function dmgCalc(attackAction, Character, type) {
    let dmg = attackAction.Multiplier * Character.attack() * ((1 + (Character.critRate() / 100)) * (Character.critDMG() / 100));

    Character.advancedstats.elementalBonuses.forEach(element => {
        if (element.Type == attackAction.Element) {
            dmg = dmg * (1 + (element.Value / 100));

        }
    });




    if (Character.ExtraMultiplier != null && Character.ExtraMultiplier != undefined && Character.ExtraMultiplier != []) {

        Character.ExtraMultiplier.forEach(multiplier => {

            if (type = multiplier.Type) {
               
                dmg = dmg * multiplier.Value;
                
            }
        });
    }
    // dmg = defReduction(dmg,Character);
    if (attackAction.isReaction)
        dmg = elementalMasteryCalc(dmg, Character);

    return dmg;
}
function defReduction(dmg, character) {
    let vv = 0;
    character.artifacts.forEach(element => {
        if (element.Set = "Viridescent Venerer")
            vv++;
    });
    let defReduction = 0;
    if (vv >= 4) {
        defReduction += 0.6;
    }
    return dmg * ((Number.parseInt(character.level.slice(0, character.level.length - 1)) + 100) / ((Number.parseInt(character.level.slice(0, character.level.length - 1)) + 100) + (90 + 100) * (1 - defReduction)));
}
function elementalMasteryCalc(dmg, character) {
    return dmg;
}
