function soumetsu(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 1.123;
            Multiplier2 = 1.6845;
            break;
        case 2:
            Multiplier = 1.2072;
            Multiplier2 = 1.8108;
            break;
        case 3:
            Multiplier = 1.2915;
            Multiplier2 = 1.9372;
            break;
        case 4:
            Multiplier = 1.4038;
            Multiplier2 = 2.1056;
            break;
        case 5:
            Multiplier = 1.488;
            Multiplier2 = 2.232;
            break;
        case 6:
            Multiplier = 1.5722;
            Multiplier2 = 2.3583;
            break;
        case 7:
            Multiplier = 1.6845;
            Multiplier2 = 2.5267;
            break;
        case 8:
            Multiplier = 1.7968;
            Multiplier2 = 2.6952;
            break;
        case 9:
            Multiplier = 1.9091;
            Multiplier2 = 2.8637;
            break;
        case 10:
            Multiplier = 2.0214;
            Multiplier2 = 3.0321;
            break;
        case 11:
            Multiplier = 2.1337;
            Multiplier2 = 3.2005;
            break;
        case 12:
            Multiplier = 2.246;
            Multiplier2 = 3.369;
            break;
        case 13:
            Multiplier = 2.3864;
            Multiplier2 = 3.5796;
            break;
    }
    let attack = { Multiplier: Multiplier2, Element: "CryoDMGBonus", Scaling: "ATK" }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;

    for (let index = 0; index < 7; index++) {
        attack.Multiplier = Multiplier;
        dmg += dmgCalc(attack, Character, "ElementalBurst") * 3

    }


    return dmg;
}

function tectonicTide(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 3.672;
            Multiplier2 = 0.72;
            break;
        case 2:
            Multiplier = 3.9474;
            Multiplier2 = 0.774;
            break;
        case 3:
            Multiplier = 4.2228;
            Multiplier2 = 0.828;
            break;
        case 4:
            Multiplier = 4.59;
            Multiplier2 = 0.90;
            break;
        case 5:
            Multiplier = 4.8654;
            Multiplier2 = 0.954;
            break;
        case 6:
            Multiplier = 5.1408;
            Multiplier2 = 1.008;
            break;
        case 7:
            Multiplier = 5.508;
            Multiplier2 = 1.08;
            break;
        case 8:
            Multiplier = 5.8752;
            Multiplier2 = 1.152;
            break;
        case 9:
            Multiplier = 6.2424;
            Multiplier2 = 1.224;
            break;
        case 10:
            Multiplier = 6.6096;
            Multiplier2 = 1.296;
            break;
        case 11:
            Multiplier = 6.9768;
            Multiplier2 = 1.368;
            break;
        case 12:
            Multiplier = 7.344;
            Multiplier2 = 1.44;
            break;
        case 13:
            Multiplier = 7.803;
            Multiplier2 = 1.53;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK" }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    attack = { Multiplier: Multiplier2, Element: "GeoDMGBonus", Scaling: "ATK" }
    dmg += dmgCalc(attack, Character, "ElementalBurst") * 3 * 7;



    return dmg;
}
function fieryRain(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 5.0544;
            break;
        case 2:
            Multiplier = 5.4335;
            break;
        case 3:
            Multiplier = 5.8126;
            break;
        case 4:
            Multiplier = 6.318;
            break;
        case 5:
            Multiplier = 6.6971;
            break;
        case 6:
            Multiplier = 7.0762;
            break;
        case 7:
            Multiplier = 7.5816;
            break;
        case 8:
            Multiplier = 8.087;
            break;
        case 9:
            Multiplier = 8.5925;
            break;
        case 10:
            Multiplier = 9.0979;
            break;
        case 11:
            Multiplier = 9.6034;
            break;
        case 12:
            Multiplier = 10.1088;
            break;
        case 13:
            Multiplier = 10.7406;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK" }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;



    return dmg;
}
function shiningMiracle(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            skillMultiplier = ((17.6 / 100) * Character.HP()) + 1694
            break;
        case 2:
            skillMultiplier = ((18.92 / 100) * Character.HP()) + 1863
            break;
        case 3:
            skillMultiplier = ((20.24 / 100) * Character.HP()) + 2047
            break;
        case 4:
            skillMultiplier = ((22 / 100) * Character.HP()) + 2245
            break;
        case 5:
            skillMultiplier = ((23.32 / 100) * Character.HP()) + 2456
            break;
        case 6:
            skillMultiplier = ((24.64 / 100) * Character.HP()) + 2682
            break;
        case 7:
            skillMultiplier = ((26.4 / 100) * Character.HP()) + 2922
            break;
        case 8:
            skillMultiplier = ((28.16 / 100) * Character.HP()) + 3176
            break;
        case 9:
            skillMultiplier = ((29.92 / 100) * Character.HP()) + 3445
            break;
        case 10:
            skillMultiplier = ((31.68 / 100) * Character.HP()) + 3727
            break;
        case 11:
            skillMultiplier = ((33.44 / 100) * Character.HP()) + 4024
            break;
        case 12:
            skillMultiplier = ((35.2 / 100) * Character.HP()) + 4334
            break;
        case 13:
            skillMultiplier = ((36.4 / 100) * Character.HP()) + 4659
            break;
    }
    return skillMultiplier * (1 + (Character.advancedstats.healingBonus / 100));
}

function stormbreaker(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 121.6 / 100;
            Multiplier2 = 96 / 100;
            break;
        case 2:
            Multiplier = 130.72 / 100;
            Multiplier2 = 103.2 / 100;
            break;
        case 3:
            Multiplier = 139.84 / 100;
            Multiplier2 = 110.4 / 100;
            break;
        case 4:
            Multiplier = 152 / 100;
            Multiplier2 = 120 / 100;
            break;
        case 5:
            Multiplier = 161.12 / 100;
            Multiplier2 = 127.2 / 100;
            break;
        case 6:
            Multiplier = 170.24 / 100;
            Multiplier2 = 134.4 / 100;
            break;
        case 7:
            Multiplier = 182.4 / 100;
            Multiplier2 = 144 / 100;
            break;
        case 8:
            Multiplier = 194.56 / 100;
            Multiplier2 = 153.6 / 100;
            break;
        case 9:
            Multiplier = 206.72 / 100;
            Multiplier2 = 163.2 / 100;
            break;
        case 10:
            Multiplier = 218.88 / 100;
            Multiplier2 = 172.8 / 100;
            break;
        case 11:
            Multiplier = 231.04 / 100;
            Multiplier2 = 182.4 / 100;
            break;
        case 12:
            Multiplier = 243.2 / 100;
            Multiplier2 = 192 / 100;
            break;
        case 13:
            Multiplier = 258.4 / 100;
            Multiplier2 = 204 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let attack2 = { Multiplier: Multiplier2, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    for (let i = 1; i >= 15; i++) {
        if (i % 2) {
            attack2.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst") * 3;
        } else {
            attack2.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst") * 3;
        }
    }
    return dmg;
}

function fantasticVoyage(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multiplier3 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 232.8 / 100;
            Multiplier2 = (6 / 100) * Character.HP() + 577;
            Multiplier3 = (56 / 100) * Character.baseAttack;
            break;
        case 2:
            Multiplier = 250.26 / 100;
            Multiplier2 = (6.45 / 100) * Character.HP() + 635;
            Multiplier3 = (60.2 / 100) * Character.baseAttack;
            break;
        case 3:
            Multiplier = 267.72 / 100;
            Multiplier2 = (6.9 / 100) * Character.HP() + 697;
            Multiplier3 = (64.4 / 100) * Character.baseAttack;
            break;
        case 4:
            Multiplier = 291 / 100;
            Multiplier2 = (7.5 / 100) * Character.HP() + 765;
            Multiplier3 = (70 / 100) * Character.baseAttack;
            break;
        case 5:
            Multiplier = 308.46 / 100;
            Multiplier2 = (7.95 / 100) * Character.HP() + 837;
            Multiplier3 = (74.2 / 100) * Character.baseAttack;
            break;
        case 6:
            Multiplier = 325.92 / 100;
            Multiplier2 = (8.4 / 100) * Character.HP() + 914;
            Multiplier3 = (78.4 / 100) * Character.baseAttack;
            break;
        case 7:
            Multiplier = 349.2 / 100;
            Multiplier2 = (9 / 100) * Character.HP() + 995;
            Multiplier3 = (84 / 100) * Character.baseAttack;
            break;
        case 8:
            Multiplier = 372.48 / 100;
            Multiplier2 = (9.6 / 100) * Character.HP() + 1082;
            Multiplier3 = (89.6 / 100) * Character.baseAttack;
            break;
        case 9:
            Multiplier = 395.76 / 100;
            Multiplier2 = (10.2 / 100) * Character.HP() + 1174;
            Multiplier3 = (95.2 / 100) * Character.baseAttack;
            break;
        case 10:
            Multiplier = 419.04 / 100;
            Multiplier2 = (10.8 / 100) * Character.HP() + 1270;
            Multiplier3 = (100.8 / 100) * Character.baseAttack;
            break;
        case 11:
            Multiplier = 442.32 / 100;
            Multiplier2 = (11.4 / 100) * Character.HP() + 1371;
            Multiplier3 = (106.4 / 100) * Character.baseAttack;
            break;
        case 12:
            Multiplier = 465.6 / 100;
            Multiplier2 = (12 / 100) * Character.HP() + 1477;
            Multiplier3 = (112 / 100) * Character.baseAttack;
            break;
        case 13:
            Multiplier = 494.7 / 100;
            Multiplier2 = (12.75 / 100) * Character.HP() + 1587;
            Multiplier3 = (119 / 100) * Character.baseAttack;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let healing = Multiplier2 * 5 * (1 + (Character.advancedstats.healingBonus / 100));
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    let attackBuff = Multiplier3;

    return { dmg: dmg, healing: healing, attackBuff: attackBuff };
}

function cloudPartingStar(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 142.4 / 100;
            break;
        case 2:
            Multiplier = 153.08 / 100;
            break;
        case 3:
            Multiplier = 163.76 / 100;
            break;
        case 4:
            Multiplier = 178 / 100;
            break;
        case 5:
            Multiplier = 188.68 / 100;
            break;
        case 6:
            Multiplier = 199.36 / 100;
            break;
        case 7:
            Multiplier = 213.6 / 100;
            break;
        case 8:
            Multiplier = 227.84 / 100;
            break;
        case 9:
            Multiplier = 242.08 / 100;
            break;
        case 10:
            Multiplier = 256.08 / 100;
            break;
        case 11:
            Multiplier = 270.56 / 100;
            break;
        case 12:
            Multiplier = 284.8 / 100;
            break;
        case 13:
            Multiplier = 302.6 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = 0;
    for (let i = 1; i <= 3; i++) {
        for (let n = 1; n <= 3; n++) {
            if (n % 3 == 0) {
                attack.isReaction = true;
                dmg += dmgCalc(attack, Character, "ElementalBurst");
            }
            else {
                attack.isReaction = false;
                dmg += dmgCalc(attack, Character, "ElementalBurst");
            }
        }
    }


    return dmg;
}

function dawn(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multiplier3 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 204 / 100;
            Multiplier2 = 60 / 100;
            Multiplier3 = 204 / 100;
            break;
        case 2:
            Multiplier = 219.3 / 100;
            Multiplier2 = 64.5 / 100;
            Multiplier3 = 219.3 / 100;
            break;
        case 3:
            Multiplier = 234.6 / 100;
            Multiplier2 = 69 / 100;
            Multiplier3 = 234.6 / 100;
            break;
        case 4:
            Multiplier = 255 / 100;
            Multiplier2 = 75 / 100;
            Multiplier3 = 255 / 100;
            break;
        case 5:
            Multiplier = 270.3 / 100;
            Multiplier2 = 79.5 / 100;
            Multiplier3 = 270.3 / 100;
            break;
        case 6:
            Multiplier = 285.6 / 100;
            Multiplier2 = 84 / 100;
            Multiplier3 = 285.6 / 100;
            break;
        case 7:
            Multiplier = 306 / 100;
            Multiplier2 = 90 / 100;
            Multiplier3 = 306 / 100;
            break;
        case 8:
            Multiplier = 326.4 / 100;
            Multiplier2 = 96 / 100;
            Multiplier3 = 326.4 / 100;
            break;
        case 9:
            Multiplier = 346.8 / 100;
            Multiplier2 = 102 / 100;
            Multiplier3 = 346.8 / 100;
            break;
        case 10:
            Multiplier = 367.2 / 100;
            Multiplier2 = 108 / 100;
            Multiplier3 = 367.2 / 100;
            break;
        case 11:
            Multiplier = 387.6 / 100;
            Multiplier2 = 114 / 100;
            Multiplier3 = 387.6 / 100;
            break;
        case 12:
            Multiplier = 408 / 100;
            Multiplier2 = 120 / 100;
            Multiplier3 = 408 / 100;
            break;
        case 13:
            Multiplier = 433.5 / 100;
            Multiplier2 = 127.5 / 100;
            Multiplier3 = 433.5 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst");
    attack.Multiplier = Multiplier2;
    for(let i = 0; i<7; i++){
        if(i%3==0){
            attack.isReaction = true;
        dmg+=dmgCalc(attack,Character,"ElementalBurst");
        }
        else{
            attack.isReaction = false;
            dmg+=dmgCalc(attack,Character,"ElementalBurst");
        }
    }
    attack.Multiplier = Multiplier2
    attack.isReaction = true;
    dmg += dmgCalc(attack,Character,"ElementalBurst")
    Character.normalAttack1.Element = "PyroDMGBonus";
    Character.normalAttack1.isReaction = true;
    Character.normalAttack2.Element = "PyroDMGBonus";
    Character.normalAttack2.isReaction = false;
    Character.normalAttack3.Element = "PyroDMGBonus";
    Character.normalAttack3.isReaction = false;
    Character.normalAttack4.Element = "PyroDMGBonus";
    Character.normalAttack4.isReaction = true;
    Character.advancedstats.elementalBonuses[0].Value += 20;
    return dmg * 3;
}

function signatureMix(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multiplier3 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 80 / 100;
            Multiplier2 = 52.64 / 100;
            Multipler3 = (Character.HP()*(5.34/100))+513.19;
            break;
        case 2:
            Multiplier = 86 / 100;
            Multiplier2 = 56.59 / 100;
            Multipler3 = (Character.HP()*(5.74/100))+564.52;
            break;
        case 3:
            Multiplier = 92 / 100;
            Multiplier2 = 60.54 / 100;
            Multipler3 = (Character.HP()*(6.14/100))+620.11;
            break;
        case 4:
            Multiplier = 100 / 100;
            Multiplier2 = 65.8 / 100;
            Multipler3 = (Character.HP()*(6.67/100))+680;
            break;
        case 5:
            Multiplier = 106 / 100;
            Multiplier2 = 69.75 / 100;
            Multipler3 = (Character.HP()*(7.07/100))+744.15;
            break;
        case 6:
            Multiplier = 112 / 100;
            Multiplier2 = 73.7 / 100;
            Multipler3 = (Character.HP()*(7.47/100))+812.59;
            break;
        case 7:
            Multiplier = 120 / 100;
            Multiplier2 = 78.96 / 100;
            Multipler3 = (Character.HP()*(8/100))+885.3;
            break;
        case 8:
            Multiplier = 128 / 100;
            Multiplier2 = 84.22 / 100;
            Multipler3 = (Character.HP()*(8.54/100))+962.29;
            break;
        case 9:
            Multiplier = 136 / 100;
            Multiplier2 = 89.49 / 100;
            Multipler3 = (Character.HP()*(9.07/100))+1043;
            break;
        case 10:
            Multiplier = 144 / 100;
            Multiplier2 = 94.75 / 100;
            Multipler3 = (Character.HP()*(9.6/100))+1129;
            break;
        case 11:
            Multiplier = 152 / 100;
            Multiplier2 = 100.02 / 100;
            Multipler3 = (Character.HP()*(10.14/100))+1218;
            break;
        case 12:
            Multiplier = 160 / 100;
            Multiplier2 = 105.28 / 100;
            Multipler3 = (Character.HP()*(10.67/100))+1313;
            break;
        case 13:
            Multiplier = 170 / 100;
            Multiplier2 = 111.86 / 100;
            Multipler3 = (Character.HP()*(11.34/100))+1411;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst");
    attack.Multiplier = Multiplier2;
    for(let i = 1; i<=6; i++){
    dmg += dmgCalc(attack,Character,"ElementalBurst")
    }
    let heal = Multiplier3*6;
    return {dmg:dmg,heal,heal};
}

function glacialIllumination(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multiplier3 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 245.6 / 100;
            Multiplier2 = 367.05 / 100;
            Multiplier3 = 74.99 / 100;
            break;
        case 2:
            Multiplier = 264.02 / 100;
            Multiplier2 = 396.92 / 100;
            Multiplier3 = 81.1 / 100;
            break;
        case 3:
            Multiplier = 282.44 / 100;
            Multiplier2 = 426.8 / 100;
            Multiplier3 = 87.2 / 100;
            break;
        case 4:
            Multiplier = 307 / 100;
            Multiplier2 = 469.48 / 100;
            Multiplier3 = 95.92 / 100;
            break;
        case 5:
            Multiplier = 325.42 / 100;
            Multiplier2 = 499.36 / 100;
            Multiplier3 = 102.02 / 100;
            break;
        case 6:
            Multiplier = 343.84 / 100;
            Multiplier2 = 533.5 / 100;
            Multiplier3 = 109 / 100;
            break;
        case 7:
            Multiplier = 368.4 / 100;
            Multiplier2 = 580.45 / 100;
            Multiplier3 = 118.59 / 100;
            break;
        case 8:
            Multiplier = 392.96 / 100;
            Multiplier2 = 627.4 / 100;
            Multiplier3 = 128.18 / 100;
            break;
        case 9:
            Multiplier = 417.52 / 100;
            Multiplier2 = 674.34 / 100;
            Multiplier3 = 137.78 / 100;
            break;
        case 10:
            Multiplier = 442.08 / 100;
            Multiplier2 = 725.56 / 100;
            Multiplier3 = 148.24 / 100;
            break;
        case 11:
            Multiplier = 466.64 / 100;
            Multiplier2 = 784.25 / 100;
            Multiplier3 = 160.23 / 100;
            break;
        case 12:
            Multiplier = 491.2 / 100;
            Multiplier2 = 853.26 / 100;
            Multiplier3 = 174.33 / 100;
            break;
        case 13:
            Multiplier = 521.9 / 100;
            Multiplier2 = 922.27 / 100;
            Multiplier3 = 188.43 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst");
    console.log("Burst skillDMG: " + dmg);
    let tmp = dmg;
    let stacks = 13;
    if(Character.weapon.name == "Song of Broken Pines"){
        stacks +=1
    }
    attack.Multiplier = Multiplier2+(Multiplier3*stacks);
    console.log(attack.Multiplier);
    attack.isReaction = false;
    attack.Element = "PhysicalDMGBonus";
    dmg+=dmgCalc(attack,Character,"ElementalBurst");
    console.log("Lightfall DMG: " + (dmg-tmp));
    return dmg;
}