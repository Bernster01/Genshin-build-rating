
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
                if(nextActionCooldown<=simulationTime){
                    totalDmg+=this.Character.chargedAttack.Multiplier * this.Character.attack;
                    nextActionCooldown = simulationTime + this.Character.chargedAttack.AnimationTime;
                    nextActionIndex++;
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
        if(nextActionIndex>=this.Character.sequence.length)
        nextActionIndex = 0;
        nextAction= this.Character.sequence[nextActionIndex];
        
    }
    while(simulationTime<=this.Time)
    return Math.floor(totalDmg);
}