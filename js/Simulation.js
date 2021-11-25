function FindBestBuild(character,times){
let currentBestDamage = 0;
let newDamage;
let currentBestArtifacts;
let indexForBetterDmg =[];
let chara;
let startTime = Date.now();
for (let index = 0; index < times; index++) {
    let newCharacter =new Createcharacter(
        character,
        SkywarBlade,
        GenerateArtifacts(character.scalingType)
        );
    newCharacter = applyArtifactBuffs(newCharacter);
    let result = Simulation(newCharacter);
    newDamage = result.dmg;
    let char = result.char;
    if(newDamage> currentBestDamage){
    currentBestArtifacts = newCharacter.artifacts;
    currentBestDamage = newDamage;
    const newObj ={Time:index,MultiplerToFind:(indexForBetterDmg.length>=2) ? (index / indexForBetterDmg[indexForBetterDmg.length-1].Time):index,DMG:newDamage};
    chara = [char.attack(),char.critRate(),char.critDMG(),char.advancedStats.elementalBonuses];
    indexForBetterDmg.push(newObj);
    }
    
}
let stopTime = Date.now();
console.log((stopTime-startTime)/1000+"seconds");
console.log(indexForBetterDmg);

return [currentBestDamage,currentBestArtifacts,chara];
}
function GenerateSequence(){
    let sequence = [""];
    let maxLength = GetRandomNumber(2,6);
    for (let index = 0; index < maxLength; index++) {
        let random = Math.floor(Math.random()*10);      
        let input;
        
        switch(random){
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
                    case 'N5':case 'C':case '':
                        input = "N1";
                        break;
                    
                }
               break; 
                   
                
            case 2: case 4: case 6: case 8: case 10:
                if(sequence[index]!="C")
                input = "C";
                else
                input = "N1";
                break;
            

        }
        
        if(sequence[0] ==""){
        sequence[0] = input;
        index = -1;
        }
        else{
            if(sequence.length<maxLength)
            sequence.push(input);
        }

        
    }
    
    return sequence;
    
   
}
function Createcharacter(baseCharacter,weapon,artifacts){
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
this.elementalSkill = function(){return 0};
this.elementalBurst = function(){return 0};
this.sequence = baseCharacter.sequence;
this.artifacts = artifacts;
this.currentBuffs = [];
this.ExtraMultiplier = baseCharacter.ExtraMultiplier;
this.advancedStats = baseCharacter.advancedstats;
this.ascensionstats = baseCharacter.ascensionStat;
this.attack = function CalculateAttack(){
    let artifacts = this.artifacts;
    let baseattack = this.baseAttack;
    let weapon = this.weapon;
    let buffs = this.currentBuffs;
    let totalAtkIncrease = 0;
    let flatAttack = 0;
    artifacts.forEach(artifact =>{
        if(artifact.Mainstat.Type == "ATK%"){
            totalAtkIncrease += artifact.Mainstat.Value;
        }
        artifact.Substats.forEach(substat =>{
            if(substat.Type=="ATK%"){
                totalAtkIncrease += substat.Value;
            }else if(substat.Type =="ATKflat"){
                flatAttack += substat.Value;
            }
            
        });
    });
    if(buffs!=null&&buffs!=undefined){
    buffs.forEach(buff =>{
        if(buff[Type] == "Atk%"){
            totalAtakIncrease += buff[Value];
        }
    })}
    return Math.floor((baseattack*(1+(totalAtkIncrease/100)))+flatAttack);
}
this.critRate = function CalculateCritRate(){
    let critRate = this.advancedStats["critRate"];
    let artifacts = this.artifacts;
    let ascension = this.ascensionstats();
    let buffs = this.currentBuffs;
    
    artifacts.forEach(artifact =>{
        if(artifact.Mainstat.Type == "CritRate"){
            critRate += artifact.Mainstat.Value;
        }
        artifact.Substats.forEach(substat =>{
            if(substat.Type=="CritRate"){
                critRate += substat.Value;
            }
            
        });
    });
    if(buffs!=null&&buffs!=undefined){
    buffs.forEach(buff =>{
        if(buff[Type] == "CritRate"){
            critRate += buff[Value];
        }
    })}

    if(ascension.Type=="CritRate"){
        criteRate+=ascension.Value;
    }
   
    return Math.floor(critRate);
}
this.critDMG = function CalculateCritDmg(){
    let critDMG = this.advancedStats["critDMG"];
    let artifacts = this.artifacts;
    let ascension = this.ascensionstats();
    let buffs = this.currentBuffs;

    artifacts.forEach(artifact =>{
        if(artifact.Mainstat.Type == "CritDMG"){
            critDMG += artifact.Mainstat.Value;
        }
        artifact.Substats.forEach(substat =>{
            if(substat.Type=="CritDMG"){
                critDMG += substat.Value;
            }
            
        });
    });
    if(buffs!=null&&buffs!=undefined){
    buffs.forEach(buff =>{
        if(buff[Type] == "CritDMG"){
            critDMG += buff[Value];
        }
    })}

    if(ascension.Type=="critDMG"){
        critDMG+=ascension.Value;
    }
   
    return Math.floor(critDMG);
}




}
function applyArtifactBuffs(Character){
    let artifacts = Character.artifacts;
    
if(artifacts[4].Mainstat.Type != "ATK%" && artifacts[4].Mainstat.Type != "DEF%" && artifacts[4].Mainstat.Type != "HP%" && artifacts[4].Mainstat.Type != "ElementalMastery"){
    
    Character.advancedStats.elementalBonuses = {Type:artifacts[4].Mainstat.Type,Value:artifacts[4].Mainstat.Value};
    
    
}
else{
    Character.advancedStats.elementalBonuses = undefined;
}
return Character;
}
function Simulation(character){

    this.Character = character;
    let totalDmg = 0;
    this.Character.sequence.forEach(action =>{
        switch(action){
            case "N1":
            case "N2":
            case "N3":
            case "N4":
            case "N5":
            case "C":        
            case "P":
                let attackAction;
                switch(action){
                    case "N1":
                        attackAction = this.Character.normalAttack1;
                        break;
                
                    case "N2":
                        attackAction = this.Character.normalAttack2;
                        break;
                
                    case "N3":
                        attackAction = this.Character.normalAttack3;
                        break;
            
                    case "N4":
                        attackAction = this.Character.normalAttack4;
                        break;
              
                    case "N5":
                        attackAction = this.Character.normalAttack5;
                        break;
            
                    case "C":
                        attackAction = this.Character.chargedAttack;
                        break;
              
                    case "P":
                        attackAction = this.Character.plungeAttack;
                        break;
                }
                
                totalDmg += dmgCalc(attackAction, Character,"basicAttack");
              
            break;

            case "E":
                totalDmg += this.Character.elementalSkill();
                break;

            case "Q":
                totalDmg += this.Character.elementalBurst();
                break;

        }
    });
    
    return {dmg:Math.floor(totalDmg/((this.Character.energyOffset - this.Character.advancedStats["energyRecharge"])/100)),char:this.Character};
}
function dmgCalc(attackAction,Character,type){
    let dmg = attackAction.Multiplier*Character.attack()*((1+(Character.critRate()/100))*(Character.critDMG()/100));
    if(Character.advancedStats.elementalBonuses != undefined){
    if(Character.advancedStats.elementalBonuses.Type == attackAction.Element){
    
        dmg = dmg * (1+(Character.advancedStats.elementalBonuses.Value/100));
    
    }
    }
   
    if(Character.ExtraMultiplier != null && Character.ExtraMultiplier != undefined){

        Character.ExtraMultiplier.forEach(multiplier =>{

            if(type = multiplier.Type){

                dmg = dmg * Character.ExtraMultiplier.Value;
                
            }
        });
    }
    // dmg = defReduction(dmg,Character);
    if(attackAction.isReaction)
    dmg = elementalMasteryCalc(dmg,Character);
   
    return dmg;
}
function defReduction(dmg,character){
    let vv = 0;
    character.artifacts.forEach(element => {
        if(element.Set = "Viridescent Venerer")
        vv++;
    });
    let defReduction = 0;
    if(vv>=4){
        defReduction += 0.6;
    }
    return dmg * ((Number.parseInt(character.level.slice(0,character.level.length-1)) + 100)/((Number.parseInt(character.level.slice(0,character.level.length-1)) + 100)+(90+100)*(1-defReduction)));
}
function elementalMasteryCalc(dmg,character){
    return dmg;
}
