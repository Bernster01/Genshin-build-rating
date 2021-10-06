function FindBestSequence(character, time,times){
let currentBestSequence = [];
let currentBestDamage = 0;
let newSequence;
let newDamage;

for (let index = 0; index < times; index++) {
    newSequence = GenerateSequence();
    let newCharacter =new Createcharacter(
        character.name,
        character.src,
        character.element,
        character.baseAttack,
        character.stamina,
        character.normalAttack1,
        character.normalAttack2,
        character.normalAttack3,
        character.normalAttack4,
        character.normalAttack5,
        character.chargedAttack,
        null,
        SkywarBlade,
        character.level
        );
       
    newCharacter.sequence = newSequence;
    newDamage = Simulation(newCharacter,time);
    if(newDamage> currentBestDamage){
    currentBestSequence = newSequence;
    currentBestDamage = newDamage;
    }
    
}
return [currentBestSequence, currentBestDamage];
}
function GenerateSequence(){
    let sequence = [""];
    let maxLength = Math.round(Math.random()*10 +2);
    if(maxLength>6)
        maxLength = 6;
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
function Createcharacter(name,src,element,baseAttack,stamina,normalAttack1,normalAttack2,normalAttack3,normalAttack4,normalAttack5,chargedAttack,sequence,weapon,level,artifacts){
this.name = name;
this.src = src;
this.element = element;
this.baseAttack = baseAttack;
this.stamina = stamina;
this.normalAttack1 = normalAttack1;
this.normalAttack2 = normalAttack2;
this.normalAttack3 = normalAttack3;
this.normalAttack4 = normalAttack4;
this.normalAttack5 = normalAttack5;
this.chargedAttack = chargedAttack;
this.sequence = sequence;
this.weapon = weapon;
this.level = level;
this.artifacts = artifacts;
this.attack = CalculateAttack(this.artifacts,this.baseAttack(),this.weapon.baseAttack());
function CalculateAttack(artifacts,baseattack,weapon){
    let totalAtkIncrease = 0;
    
    return baseattack+weapon;
}

}

function Simulation(character,time, accuracy, type){

    this.Character = character;
    this.Time = time * 1000;
    let totalDmg = 0;
    let simulationTime = 0;
    let nextAction = Character.sequence[0];
    let nextActionIndex = 0;
    let nextActionCooldown = 0;
    do{
      
        switch(nextAction){
            case "N1":
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=this.Character.normalAttack1.Multiplier * this.Character.attack;
                    nextActionCooldown = simulationTime + this.Character.normalAttack1.AnimationTime;
                    nextActionIndex++;
                }
                break;
            case "N2":
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=this.Character.normalAttack2.Multiplier * this.Character.attack;
                    nextActionCooldown = simulationTime + this.Character.normalAttack2.AnimationTime;
                    nextActionIndex++;
                }
                break;
            case "N3":
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=this.Character.normalAttack3.Multiplier * this.Character.attack;
                    nextActionCooldown = simulationTime + this.Character.normalAttack3.AnimationTime;
                    nextActionIndex++;
                }
                break;
            case "N4":
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=this.Character.normalAttack4.Multiplier * this.Character.attack;
                    nextActionCooldown = simulationTime + this.Character.normalAttack4.AnimationTime;
                    nextActionIndex++;
                }
                break;
            case "N5":
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=this.Character.normalAttack5.Multiplier * this.Character.attack;
                    nextActionCooldown = simulationTime + this.Character.normalAttack5.AnimationTime;
                    nextActionIndex++;
                }
                break;
            case "P":
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=this.Character.plungeAttack.Multiplier * this.Character.attack;
                    nextActionCooldown = simulationTime + this.Character.plungeAttack.AnimationTime;
                    nextActionIndex++;
                }
            case "C":
                if((this.Character.stamina - this.Character.chargedAttack.StaminaCost)>=0){
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=((this.Character.chargedAttack.Multiplier/3) * this.Character.attack)*3;
                    nextActionCooldown = simulationTime + this.Character.chargedAttack.AnimationTime;
                    nextActionIndex++;
                    this.Character.stamina -= this.Character.chargedAttack.StaminaCost;
                }
                }
                else{
                    nextActionCooldown = simulationTime + this.Character.chargedAttack.AnimationTime;
                    
                }
                break;
            case "E":
                if(nextActionCooldown<=simulationTime){
                    
                }
                break;
            case "Q":
                if(nextActionCooldown<=simulationTime){
                    
                }
                break;
        }
        
        simulationTime++;
        this.Character.stamina+= 0.0125;
        if(nextActionIndex>=this.Character.sequence.length){
        nextActionIndex = 0;
        if(StoppedCombo(this.Character.sequence)){
        nextActionCooldown +=2000;
        }
        }
        nextAction= this.Character.sequence[nextActionIndex];
    }
    while(simulationTime<=this.Time)
    return Math.floor(totalDmg);
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