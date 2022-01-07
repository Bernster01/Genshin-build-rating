function hyouka(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 2.392
            break;
        case 2:
            skillMultiplier = 2.5714
            break;
        case 3:
            skillMultiplier = 2.7508
            break;
        case 4:
            skillMultiplier = 2.99
            break;
        case 5:
            skillMultiplier = 3.1694
            break;
        case 6:
            skillMultiplier = 3.3488
            break;
        case 7:
            skillMultiplier = 3.588
            break;
        case 8:
            skillMultiplier = 3.8272
            break;
        case 9:
            skillMultiplier = 4.0664
            break;
        case 10:
            skillMultiplier = 4.3056
            break;
        case 11:
            skillMultiplier = 4.5448
            break;
        case 12:
            skillMultiplier = 4.784
            break;
        case 13:
            skillMultiplier = 5.083
            break;
    }
    let attack = {Multiplier: skillMultiplier, Element:"CryoDMGBonus",Scaling:"ATK"}
    let dmg = dmgCalc(attack,Character,"ElementalSkill");
    return dmg*3;
}

function solarIsotoma(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 1.304
            skillMultiplier2 = 1.336
            break;
        case 2:
            skillMultiplier = 1.4018
            skillMultiplier2 = 1.4362
            break;
        case 3:
            skillMultiplier = 1.4996
            skillMultiplier2 = 1.5364
            break;
        case 4:
            skillMultiplier = 1.63
            skillMultiplier2 = 1.67
            break;
        case 5:
            skillMultiplier = 1.7278
            skillMultiplier2 = 1.7702
            break;
        case 6:
            skillMultiplier = 1.8256
            skillMultiplier2 = 1.8704
            break;
        case 7:
            skillMultiplier = 1.956
            skillMultiplier2 = 2.004
            break;
        case 8:
            skillMultiplier = 2.0864
            skillMultiplier2 = 2.1376
            break;
        case 9:
            skillMultiplier = 2.2168
            skillMultiplier2 = 2.2712
            break;
        case 10:
            skillMultiplier = 2.3472
            skillMultiplier2 = 2.4048
            break;
        case 11:
            skillMultiplier = 2.4776
            skillMultiplier2 = 2.5384
            break;
        case 12:
            skillMultiplier = 2.608
            skillMultiplier2 = 2.672
            break;
        case 13:
            skillMultiplier = 2.771
            skillMultiplier2 = 2.839
            break;
    }
    let attack = {Multiplier: skillMultiplier, Element:"GeoDMGBonus",Scaling:"ATK"}
    let dmg = dmgCalc(attack,Character,"ElementalSkill");
    dmg *=3;
    attack = {Multiplier: skillMultiplier2, Element:"GeoDMGBonus",Scaling:"DEF"}
    let dmg2 = dmgCalc(attack,Character,"ElementalSkill");
    dmg2*=45;
    dmg+=dmg2;
    return dmg;
}
function explosivePuppet(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 1.232
            break;
        case 2:
            skillMultiplier = 1.3244
            break;
        case 3:
            skillMultiplier = 1.4168
            break;
        case 4:
            skillMultiplier = 1.54
            break;
        case 5:
            skillMultiplier = 1.6324
            break;
        case 6:
            skillMultiplier = 1.7248
            break;
        case 7:
            skillMultiplier = 1.848
            break;
        case 8:
            skillMultiplier = 1.9712
            break;
        case 9:
            skillMultiplier = 2.0944
            break;
        case 10:
            skillMultiplier = 2.2176
            break;
        case 11:
            skillMultiplier = 2.3408
            break;
        case 12:
            skillMultiplier = 2.464
            break;
        case 13:
            skillMultiplier = 2.618
            break;
    }
    let attack = {Multiplier: skillMultiplier, Element:"PyroDMGBonus",Scaling:"ATK"}
    let dmg = dmgCalc(attack,Character,"ElementalSkill");
    return dmg*3;
}