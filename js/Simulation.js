function FindBestBuild(character,times){
let currentBestDamage = 0;
let newDamage;
let currentBestArtifacts;
let indexForBetterDmg =[];
for (let index = 0; index < times; index++) {
    let newCharacter =new Createcharacter(
        character,
        SkywarBlade,
        GenerateArtifacts(character.scalingType)
        );
       
    newDamage = Simulation(newCharacter);
    if(newDamage> currentBestDamage){
    currentBestArtifacts = newCharacter.artifacts;
    currentBestDamage = newDamage;
    const newObj ={Time:index,MultiplerToFind:(indexForBetterDmg.length>=2) ? (index / indexForBetterDmg[indexForBetterDmg.length-1].Time):index,DMG:newDamage};
 
    indexForBetterDmg.push(newObj);
    }
    
}

console.log(indexForBetterDmg);
return [currentBestDamage,currentBestArtifacts];
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
this.baseAttack = baseCharacter.baseAttack;
this.stamina = baseCharacter.stamina;
this.normalAttack1 = baseCharacter.normalAttack1;
this.normalAttack2 = baseCharacter.normalAttack2;
this.normalAttack3 = baseCharacter.normalAttack3;
this.normalAttack4 = baseCharacter.normalAttack4;
this.normalAttack5 = baseCharacter.normalAttack5;
this.chargedAttack = baseCharacter.chargedAttack;
this.sequence = baseCharacter.sequence;
this.weapon = weapon;
this.level = baseCharacter.level;
this.artifacts = artifacts;
this.currentBuffs;
this.advancedStats = baseCharacter.advancedstats;
this.ascensionstats = baseCharacter.ascensionStat;
this.attack = CalculateAttack(this.artifacts,this.baseAttack(),this.weapon.baseAttack(),this.currentBuffs);
this.critRate = CalculateCritRate(this.artifacts,this.advancedStats["critRate"],this.ascensionstats());
this.critDMG = CalculateCritDMG(this.artifacts,this.advancedStats["critDMG"],this.ascensionstats());

function CalculateAttack(artifacts,baseattack,weapon,buffs){
    let totalAtkIncrease = 0;
    let flatAttack = 0;
    let piece = "Circlet"
    for (let index = 0; index <= 4; index++) {
        if(artifacts[piece].Mainstat.Type =="ATK%"){
            
            totalAtkIncrease += artifacts[piece].Mainstat.Value;
        }
        else if(artifacts[piece].Mainstat.Type =="ATKflat"){
            flatAttack += artifacts[piece].Mainstat.Value;
        }
        let substat = "";
        
        for (let index = 1; index <= 4; index++) {
            substat = "Substat"+(index)
            if(artifacts[piece][substat].Type == "ATK%"){
                
                totalAtkIncrease +=artifacts[piece][substat].Value;
            }
            else if(artifacts[piece][substat].Type == "ATKflat")
            {
                flatAttack += artifacts[piece][substat].Value;
            }
            
            substat = "Substat"+(index);
        }
        switch(index){
            case 1:
                piece ="Flower";
                break;
            case 2:
                piece ="Plume";
                break;
            case 3:
                piece ="Sands";
                break;
            case 4:
                piece = "Goblet";
                break;
        }
       
          
        
    }
    return Math.floor(((baseattack+weapon)*(1+(totalAtkIncrease/100)))+flatAttack);
}
function CalculateCritRate(artifacts,baseCritRate,ascension){
    let critRate = baseCritRate;
    
    let piece = "Circlet"
    for (let index = 0; index <= 4; index++) {
        if(artifacts[piece].Mainstat.Type =="CritRate"){
            
            critRate += artifacts[piece].Mainstat.Value;
           
        }
        
        let substat = "";
        
        for (let index = 1; index <= 4; index++) {
            substat = "Substat"+(index)
            if(artifacts[piece][substat].Type == "CritRate"){
                
                critRate +=artifacts[piece][substat].Value;
            }
            substat = "Substat"+(index);
        }
        switch(index){
            case 1:
                piece ="Flower";
                break;
            case 2:
                piece ="Plume";
                break;
            case 3:
                piece ="Sands";
                break;
            case 4:
                piece = "Goblet";
                break;
        }
       
          
        
    }
    if(ascension.Type=="CritRate"){
        criteRate+=ascension.Value;
    }
   
    return Math.floor(critRate);
}
function CalculateCritDMG(artifacts,baseCritDMG,ascension){
    let critDMG = baseCritDMG;
   
    let piece = "Circlet"
    for (let index = 0; index <= 4; index++) {
        if(artifacts[piece].Mainstat.Type =="CritDMG"){
            
            critDMG += artifacts[piece].Mainstat.Value;
        }
        
        let substat = "";
        
        for (let index = 1; index <= 4; index++) {
            substat = "Substat"+(index)
            if(artifacts[piece][substat].Type == "CritDMG"){
                
                critDMG +=artifacts[piece][substat].Value;
                
            }
            substat = "Substat"+(index);
        }
        switch(index){
            case 1:
                piece ="Flower";
                break;
            case 2:
                piece ="Plume";
                break;
            case 3:
                piece ="Sands";
                break;
            case 4:
                piece = "Goblet";
                break;
        }
       
          
        
    }
    if(ascension.Type=="critDMG"){
        
        critDMG+=ascension.Value;
    }
   return Math.floor(critDMG);
}
}

function Simulation(character){

    this.Character = character;
    let totalDmg =
    isCrit((character.normalAttack1.Multiplier * character.attack),character.critRate,character.critDMG) +
    isCrit((character.normalAttack2.Multiplier * character.attack),character.critRate,character.critDMG) +
    isCrit((character.normalAttack3.Multiplier * character.attack),character.critRate,character.critDMG) +
    isCrit((character.normalAttack4.Multiplier * character.attack),character.critRate,character.critDMG) +
    isCrit((character.normalAttack5.Multiplier * character.attack),character.critRate,character.critDMG) +
    isCrit((character.chargedAttack.Multiplier * character.attack),character.critRate,character.critDMG) 
    ;
   
    return Math.floor(totalDmg);
}
function isCrit(dmg,criteRate,critDMG){
    if(criteRate>=GetRandomNumber(0,100)){
        dmg = dmg*(1+(critDMG/100));
    }
    return dmg;
}
function StoppedCombo(sequence){
    let lastIndex;
    switch(sequence[sequence.length - 1]){
        case 'N1':
            lastIndex = 1;
            break;
        case 'N2':
            lastIndex = 2;
            break;
        case 'N3':
            lastIndex = 3;
            break;
        case 'N4':
            lastIndex = 4;
            break;
        case 'N5': case 'C':
            lastIndex = 5;
            break;
    }
    if(lastIndex=5)
    return false;
    else
    return true;
}