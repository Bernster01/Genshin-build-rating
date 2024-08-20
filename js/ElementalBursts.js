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
    let attack = { Multiplier: Multiplier2, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;

    for (let index = 0; index < 7; index++) {
        attack.Multiplier = Multiplier;
        dmg += dmgCalc(attack, Character) * numberOfEnemies

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
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack = { Multiplier: Multiplier2, Element: "GeoDMGBonus", Scaling: "ATK" }
    dmg += dmgCalc(attack, Character) * numberOfEnemies * 7;



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
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;



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
    let heal = skillMultiplier * (1 + (Character.advancedstats.healingBonus / 100));
    return { heal: heal };
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
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let attack2 = { Multiplier: Multiplier2, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    for (let i = 1; i >= 15; i++) {
        if (i % 2) {
            attack2.isReaction = true;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        } else {
            attack2.isReaction = true;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
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
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let healing = Multiplier2 * 5 * (1 + (Character.advancedstats.healingBonus / 100));
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
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
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    for (let i = 1; i <= 3; i++) {
        for (let n = 1; n <= 3; n++) {
            if (n % 3 == 0) {
                attack.isReaction = true;
                dmg += dmgCalc(attack, Character);
            }
            else {
                attack.isReaction = false;
                dmg += dmgCalc(attack, Character);
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
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character);
    attack.Multiplier = Multiplier2;
    for (let i = 0; i < 7; i++) {
        if (i % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character) * numberOfEnemies
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character) * numberOfEnemies
        }
    }
    attack.Multiplier = Multiplier3
    attack.isReaction = true;
    dmg += dmgCalc(attack, Character, "ElementalBurst") * numberOfEnemies
    Character.normalAttack1.Element = "PyroDMGBonus";
    Character.normalAttack1.isReaction = true;
    Character.normalAttack2.Element = "PyroDMGBonus";
    Character.normalAttack2.isReaction = false;
    Character.normalAttack3.Element = "PyroDMGBonus";
    Character.normalAttack3.isReaction = false;
    Character.normalAttack4.Element = "PyroDMGBonus";
    Character.normalAttack4.isReaction = true;
    Character.advancedstats.elementalBonuses[0].Value += 20;
    return dmg;
}

function signatureMix(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multiplier3 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 80 / 100;
            Multiplier2 = 52.64 / 100;
            Multipler3 = (Character.HP() * (5.34 / 100)) + 513.19;
            break;
        case 2:
            Multiplier = 86 / 100;
            Multiplier2 = 56.59 / 100;
            Multipler3 = (Character.HP() * (5.74 / 100)) + 564.52;
            break;
        case 3:
            Multiplier = 92 / 100;
            Multiplier2 = 60.54 / 100;
            Multipler3 = (Character.HP() * (6.14 / 100)) + 620.11;
            break;
        case 4:
            Multiplier = 100 / 100;
            Multiplier2 = 65.8 / 100;
            Multipler3 = (Character.HP() * (6.67 / 100)) + 680;
            break;
        case 5:
            Multiplier = 106 / 100;
            Multiplier2 = 69.75 / 100;
            Multipler3 = (Character.HP() * (7.07 / 100)) + 744.15;
            break;
        case 6:
            Multiplier = 112 / 100;
            Multiplier2 = 73.7 / 100;
            Multipler3 = (Character.HP() * (7.47 / 100)) + 812.59;
            break;
        case 7:
            Multiplier = 120 / 100;
            Multiplier2 = 78.96 / 100;
            Multipler3 = (Character.HP() * (8 / 100)) + 885.3;
            break;
        case 8:
            Multiplier = 128 / 100;
            Multiplier2 = 84.22 / 100;
            Multipler3 = (Character.HP() * (8.54 / 100)) + 962.29;
            break;
        case 9:
            Multiplier = 136 / 100;
            Multiplier2 = 89.49 / 100;
            Multipler3 = (Character.HP() * (9.07 / 100)) + 1043;
            break;
        case 10:
            Multiplier = 144 / 100;
            Multiplier2 = 94.75 / 100;
            Multipler3 = (Character.HP() * (9.6 / 100)) + 1129;
            break;
        case 11:
            Multiplier = 152 / 100;
            Multiplier2 = 100.02 / 100;
            Multipler3 = (Character.HP() * (10.14 / 100)) + 1218;
            break;
        case 12:
            Multiplier = 160 / 100;
            Multiplier2 = 105.28 / 100;
            Multipler3 = (Character.HP() * (10.67 / 100)) + 1313;
            break;
        case 13:
            Multiplier = 170 / 100;
            Multiplier2 = 111.86 / 100;
            Multipler3 = (Character.HP() * (11.34 / 100)) + 1411;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multiplier2;
    for (let i = 1; i <= 6; i++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
    }
    let heal = Multiplier3 * 6;
    return { dmg: dmg, heal, heal };
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
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let tmp = dmg;
    let stacks = 13;
    if (Character.weapon.name == "Song of Broken Pines") {
        stacks += 1
    }
    attack.Multiplier = Multiplier2 + (Multiplier3 * stacks);
    attack.isReaction = false;
    attack.Element = "PhysicalDMGBonus";
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function midnightPhantasmagoria(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 88.8 / 100;
            Multiplier2 = 208 / 100;
            break;
        case 2:
            Multiplier = 95.46 / 100;
            Multiplier2 = 223.6 / 100;
            break;
        case 3:
            Multiplier = 102.12 / 100;
            Multiplier2 = 239.2 / 100;
            break;
        case 4:
            Multiplier = 111 / 100;
            Multiplier2 = 260 / 100;
            break;
        case 5:
            Multiplier = 117.66 / 100;
            Multiplier2 = 275.6 / 100;
            break;
        case 6:
            Multiplier = 124.32 / 100;
            Multiplier2 = 291.2 / 100;
            break;
        case 7:
            Multiplier = 133.2 / 100;
            Multiplier2 = 312 / 100;
            break;
        case 8:
            Multiplier = 142.08 / 100;
            Multiplier2 = 332.8 / 100;
            break;
        case 9:
            Multiplier = 150.96 / 100;
            Multiplier2 = 353.6 / 100;
            break;
        case 10:
            Multiplier = 159.84 / 100;
            Multiplier2 = 374.4 / 100;
            break;
        case 11:
            Multiplier = 168.72 / 100;
            Multiplier2 = 395.2 / 100;
            break;
        case 12:
            Multiplier = 177.6 / 100;
            Multiplier2 = 416 / 100;
            break;
        case 13:
            Multiplier = 188.7 / 100;
            Multiplier2 = 442 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier2, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multiplier;
    attack.type = "ElementalSkill";
    for (let i = 1; i <= 12; i++) {
        //Fischl have different ICD
        if (i % 4 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character);
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character);
        }

    }

    return dmg;
}

function celestialShower(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 70.27 / 100;
            break;
        case 2:
            Multiplier = 75.54 / 100;
            break;
        case 3:
            Multiplier = 80.81 / 100;
            break;
        case 4:
            Multiplier = 87.84 / 100;
            break;
        case 5:
            Multiplier = 93.11 / 100;
            break;
        case 6:
            Multiplier = 98.38 / 100;
            break;
        case 7:
            Multiplier = 105.41 / 100;
            break;
        case 8:
            Multiplier = 112.44 / 100;
            break;
        case 9:
            Multiplier = 119.46 / 100;
            break;
        case 10:
            Multiplier = 126.49 / 100;
            break;
        case 11:
            Multiplier = 133.52 / 100;
            break;
        case 12:
            Multiplier = 140.54 / 100;
            break;
        case 13:
            Multiplier = 149.33 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    for (let i = 1; i <= 16; i++) {
        if (i % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }

    }
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Celestial Shower")
            Character.currentBuffs.push({ Type: "CryoDMGBonus", Value: 20 });
    });
    return dmg;
}

function spiritSoother(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 379.09 / 100;
            break;
        case 2:
            Multiplier = 401.79 / 100;
            break;
        case 3:
            Multiplier = 424.49 / 100;
            break;
        case 4:
            Multiplier = 454 / 100;
            break;
        case 5:
            Multiplier = 476.7 / 100;
            break;
        case 6:
            Multiplier = 499.4 / 100;
            break;
        case 7:
            Multiplier = 528.91 / 100;
            break;
        case 8:
            Multiplier = 558.91 / 100;
            break;
        case 9:
            Multiplier = 587.93 / 100;
            break;
        case 10:
            Multiplier = 617.44 / 100;
            break;
        case 11:
            Multiplier = 646.95 / 100;
            break;
        case 12:
            Multiplier = 676.46 / 100;
            break;
        case 13:
            Multiplier = 705.97 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;

    return dmg;
}

function dandelionBreeze(Character) {
    let Multiplier = 0;
    let burstHeal = 0;
    let contHeal = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 379.09 / 100;
            burstHeal = ((251.2 / 100) * Character.attack()) + 1540;
            contHeal = ((25.12 / 100) * Character.attack()) + 154;
            break;
        case 2:
            Multiplier = 401.79 / 100;
            burstHeal = ((270.04 / 100) * Character.attack()) + 1694;
            contHeal = ((27 / 100) * Character.attack()) + 169;
            break;
        case 3:
            Multiplier = 424.49 / 100;
            burstHeal = ((288.88 / 100) * Character.attack()) + 1861;
            contHeal = ((28.89 / 100) * Character.attack()) + 186;
            break;
        case 4:
            Multiplier = 454 / 100;
            burstHeal = ((314 / 100) * Character.attack()) + 2041;
            contHeal = ((31.4 / 100) * Character.attack()) + 204.1;
            break;
        case 5:
            Multiplier = 476.7 / 100;
            burstHeal = ((332.84 / 100) * Character.attack()) + 2233;
            contHeal = ((33.28 / 100) * Character.attack()) + 223;
            break;
        case 6:
            Multiplier = 499.4 / 100;
            burstHeal = ((351.68 / 100) * Character.attack()) + 2438;
            contHeal = ((35.17 / 100) * Character.attack()) + 243;
            break;
        case 7:
            Multiplier = 528.91 / 100;
            burstHeal = ((376.8 / 100) * Character.attack()) + 2657;
            contHeal = ((37.68 / 100) * Character.attack()) + 265;
            break;
        case 8:
            Multiplier = 558.91 / 100;
            burstHeal = ((401.92 / 100) * Character.attack()) + 2888;
            contHeal = ((40.19 / 100) * Character.attack()) + 288;
            break;
        case 9:
            Multiplier = 587.93 / 100;
            burstHeal = ((427.04 / 100) * Character.attack()) + 3132;
            contHeal = ((42.7 / 100) * Character.attack()) + 313;
            break;
        case 10:
            Multiplier = 617.44 / 100;
            burstHeal = ((452.16 / 100) * Character.attack()) + 3388;
            contHeal = ((45.22 / 100) * Character.attack()) + 338;
            break;
        case 11:
            Multiplier = 646.95 / 100;
            burstHeal = ((477.28 / 100) * Character.attack()) + 3658;
            contHeal = ((47.73 / 100) * Character.attack()) + 365;
            break;
        case 12:
            Multiplier = 676.46 / 100;
            burstHeal = ((502.4 / 100) * Character.attack()) + 3940;
            contHeal = ((50.24 / 100) * Character.attack()) + 394;
            break;
        case 13:
            Multiplier = 705.97 / 100;
            burstHeal = ((533.8 / 100) * Character.attack()) + 4236;
            contHeal = ((53.38 / 100) * Character.attack()) + 423;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let heal = (burstHeal * 4) + (contHeal * 10);

    return { dmg: dmg, healing: heal };
}

function glacialWaltz(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 77.6 / 100;
            break;
        case 2:
            Multiplier = 83.42 / 100;
            break;
        case 3:
            Multiplier = 89.24 / 100;
            break;
        case 4:
            Multiplier = 97 / 100;
            break;
        case 5:
            Multiplier = 102.82 / 100;
            break;
        case 6:
            Multiplier = 108.64 / 100;
            break;
        case 7:
            Multiplier = 116.4 / 100;
            break;
        case 8:
            Multiplier = 124.16 / 100;
            break;
        case 9:
            Multiplier = 131.92 / 100;
            break;
        case 10:
            Multiplier = 139.68 / 100;
            break;
        case 11:
            Multiplier = 147.44 / 100;
            break;
        case 12:
            Multiplier = 155.2 / 100;
            break;
        case 13:
            Multiplier = 164.9 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies * 4;

    return dmg;
}

function kazuhaSlash(Character) {
    let Multiplier = 0;
    let dOT = 0;
    let elementalDmg = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 262.4 / 100;
            dOT = 120 / 100;
            elementalDmg = 36 / 100;
            break;
        case 2:
            Multiplier = 282.08 / 100;
            dOT = 129 / 100;
            elementalDmg = 38.7 / 100;
            break;
        case 3:
            Multiplier = 301.76 / 100;
            dOT = 138 / 100;
            elementalDmg = 41.4 / 100;
            break;
        case 4:
            Multiplier = 328 / 100;
            dOT = 150 / 100;
            elementalDmg = 45 / 100;
            break;
        case 5:
            Multiplier = 347.68 / 100;
            dOT = 159 / 100;
            elementalDmg = 47.7 / 100;
            break;
        case 6:
            Multiplier = 367.36 / 100;
            dOT = 168 / 100;
            elementalDmg = 50.4 / 100;
            break;
        case 7:
            Multiplier = 393.6 / 100;
            dOT = 180 / 100;
            elementalDmg = 54 / 100;
            break;
        case 8:
            Multiplier = 419.84 / 100;
            dOT = 192 / 100;
            elementalDmg = 57.6 / 100;
            break;
        case 9:
            Multiplier = 446.08 / 100;
            dOT = 204 / 100;
            elementalDmg = 61.2 / 100;
            break;
        case 10:
            Multiplier = 472.32 / 100;
            dOT = 216 / 100;
            elementalDmg = 64.8 / 100;
            break;
        case 11:
            Multiplier = 498.56 / 100;
            dOT = 228 / 100;
            elementalDmg = 68.4 / 100;
            break;
        case 12:
            Multiplier = 524.8 / 100;
            dOT = 240 / 100;
            elementalDmg = 72 / 100;
            break;
        case 13:
            Multiplier = 557.6 / 100;
            dOT = 255 / 100;
            elementalDmg = 76.5 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = dOT;
    dmg += dmgCalc(attack, Character) * 5 * numberOfEnemies;
    if (supportingElement != null || supportingElement != undefined) {

        attack.Multiplier = elementalDmg;
        attack.Element = supportingElement;
        dmg += dmgCalc(attack, Character) * 5 * numberOfEnemies;
    }

    return { dmg: dmg };
}

function starwardSword(Character) {
    let Multiplier = 0;
    let slashDMG = 0;
    let finalDMG = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 88 / 100;
            slashDMG = 24 / 100;
            finalDMG = 188.8 / 100;
            break;
        case 2:
            Multiplier = 94.6 / 100;
            slashDMG = 25.8 / 100;
            finalDMG = 202.96 / 100;
            break;
        case 3:
            Multiplier = 101.2 / 100;
            slashDMG = 27.6 / 100;
            finalDMG = 217.12 / 100;
            break;
        case 4:
            Multiplier = 110 / 100;
            slashDMG = 30 / 100;
            finalDMG = 236 / 100;
            break;
        case 5:
            Multiplier = 116.6 / 100;
            slashDMG = 31.8 / 100;
            finalDMG = 250.16 / 100;
            break;
        case 6:
            Multiplier = 123.2 / 100;
            slashDMG = 33.6 / 100;
            finalDMG = 264.32 / 100;
            break;
        case 7:
            Multiplier = 132 / 100;
            slashDMG = 36 / 100;
            finalDMG = 283.2 / 100;
            break;
        case 8:
            Multiplier = 140.8 / 100;
            slashDMG = 38.4 / 100;
            finalDMG = 302.08 / 100;
            break;
        case 9:
            Multiplier = 149.6 / 100;
            slashDMG = 40.8 / 100;
            finalDMG = 320.96 / 100;
            break;
        case 10:
            Multiplier = 158.4 / 100;
            slashDMG = 43.2 / 100;
            finalDMG = 339.84 / 100;
            break;
        case 11:
            Multiplier = 167.2 / 100;
            slashDMG = 45.6 / 100;
            finalDMG = 358.72 / 100;
            break;
        case 12:
            Multiplier = 176 / 100;
            slashDMG = 48 / 100;
            finalDMG = 377.6 / 100;
            break;
        case 13:
            Multiplier = 187 / 100;
            slashDMG = 51 / 100;
            finalDMG = 401.2 / 100;
            break;
    }
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Aristocratic Dignity") {
            Character.currentBuffs.push({ Type: "CritRate", Value: 15 });
            Character.advancedstats.energyRecharge += 20;
        }
    });
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = slashDMG;
    for (let index = 1; index <= 8; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
        }
        else {
            attack.isReaction = false;
        }
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
    }
    attack.Multiplier = finalDMG;
    attack.isReaction = true;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;

    return dmg;
}

function baneOfAllEvil(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 58.45;
            break;
        case 2:
            Multiplier = 61.95;
            break;
        case 3:
            Multiplier = 65.45;
            break;
        case 4:
            Multiplier = 70;
            break;
        case 5:
            Multiplier = 73.5;
            break;
        case 6:
            Multiplier = 77;
            break;
        case 7:
            Multiplier = 81.55;
            break;
        case 8:
            Multiplier = 86.1;
            break;
        case 9:
            Multiplier = 90.65;
            break;
        case 10:
            Multiplier = 95.2;
            break;
        case 11:
            Multiplier = 99.75;
            break;
        case 12:
            Multiplier = 104.3;
            break;
        case 13:
            Multiplier = 113;
            break;
    }

    Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: Multiplier });
    if (Character.hasBuffOfType("Conqueror of Evil: Tamer of Demons")) {
        Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 15 });
    }

    return 0;
}

function sparksnSplash(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 42.64 / 100;
            break;
        case 2:
            Multiplier = 45.84 / 100;
            break;
        case 3:
            Multiplier = 49.04 / 100;
            break;
        case 4:
            Multiplier = 53.3 / 100;
            break;
        case 5:
            Multiplier = 56.5 / 100;
            break;
        case 6:
            Multiplier = 59.7 / 100;
            break;
        case 7:
            Multiplier = 63.96 / 100;
            break;
        case 8:
            Multiplier = 68.22 / 100;
            break;
        case 9:
            Multiplier = 72.49 / 100;
            break;
        case 10:
            Multiplier = 76.75 / 100;
            break;
        case 11:
            Multiplier = 81.02 / 100;
            break;
        case 12:
            Multiplier = 85.28 / 100;
            break;
        case 13:
            Multiplier = 90.61 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    for (let index = 1; index <= 24; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character);
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character);
        }

    }
    return dmg;
}

function lightningRose(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 36.56 / 100;
            break;
        case 2:
            Multiplier = 39.3 / 100;
            break;
        case 3:
            Multiplier = 42.04 / 100;
            break;
        case 4:
            Multiplier = 45.7 / 100;
            break;
        case 5:
            Multiplier = 48.44 / 100;
            break;
        case 6:
            Multiplier = 51.18 / 100;
            break;
        case 7:
            Multiplier = 54.84 / 100;
            break;
        case 8:
            Multiplier = 58.5 / 100;
            break;
        case 9:
            Multiplier = 62.15 / 100;
            break;
        case 10:
            Multiplier = 65.81 / 100;
            break;
        case 11:
            Multiplier = 69.46 / 100;
            break;
        case 12:
            Multiplier = 73.12 / 100;
            break;
        case 13:
            Multiplier = 77.69 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    Character.currentBuffs.push({ Type: "defReduction", Value: 15 });
    dmg += dmgCalc(attack, Character) * 29;
    return dmg;
}

function stellarisPhantasm(Character) {
    let Multiplier = 0;
    let dmgBonus = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 442.4 / 100;
            dmgBonus = 42;
            break;
        case 2:
            Multiplier = 475.58 / 100;
            dmgBonus = 44;
            break;
        case 3:
            Multiplier = 508.76 / 100;
            dmgBonus = 46;
            break;
        case 4:
            Multiplier = 553 / 100;
            dmgBonus = 48;
            break;
        case 5:
            Multiplier = 586.18 / 100;
            dmgBonus = 50;
            break;
        case 6:
            Multiplier = 619.36 / 100;
            dmgBonus = 52;
            break;
        case 7:
            Multiplier = 663.6 / 100;
            dmgBonus = 54;
            break;
        case 8:
            Multiplier = 707.84 / 100;
            dmgBonus = 56;
            break;
        case 9:
            Multiplier = 752.08 / 100;
            dmgBonus = 58;
            break;
        case 10:
            Multiplier = 796.32 / 100;
            dmgBonus = 60;
            break;
        case 11:
            Multiplier = 840.56 / 100;
            dmgBonus = 60;
            break;
        case 12:
            Multiplier = 884.8 / 100;
            dmgBonus = 60;
            break;
        case 13:
            Multiplier = 940.1 / 100;
            dmgBonus = 60;
            break;
    }
    Character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: dmgBonus });
    let attack = { Multiplier: Multiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function starshatter(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 86.96 / 100;
            break;
        case 2:
            Multiplier = 93.48 / 100;
            break;
        case 3:
            Multiplier = 100 / 100;
            break;
        case 4:
            Multiplier = 108.7 / 100;
            break;
        case 5:
            Multiplier = 115.22 / 100;
            break;
        case 6:
            Multiplier = 121.74 / 100;
            break;
        case 7:
            Multiplier = 130.44 / 100;
            break;
        case 8:
            Multiplier = 139.14 / 100;
            break;
        case 9:
            Multiplier = 147.83 / 100;
            break;
        case 10:
            Multiplier = 156.53 / 100;
            break;
        case 11:
            Multiplier = 165.22 / 100;
            break;
        case 12:
            Multiplier = 173.92 / 100;
            break;
        case 13:
            Multiplier = 184.79 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 12;
    return dmg;
}

function sweepingTime(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    let atkBonus = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 67.2 / 100;
            Multipler2 = 92.8 / 100;
            atkBonus = Character.DEF() * 0.40;
            break;
        case 2:
            Multiplier = 72.24 / 100;
            Multipler2 = 99.76 / 100;
            atkBonus = Character.DEF() * 0.43;
            break;
        case 3:
            Multiplier = 77.28 / 100;
            Multipler2 = 106.72 / 100;
            atkBonus = Character.DEF() * 0.46;
            break;
        case 4:
            Multiplier = 84 / 100;
            Multipler2 = 116 / 100;
            atkBonus = Character.DEF() * 0.50;
            break;
        case 5:
            Multiplier = 89.04 / 100;
            Multipler2 = 122.96 / 100;
            atkBonus = Character.DEF() * 0.53;
            break;
        case 6:
            Multiplier = 94.08 / 100;
            Multipler2 = 129.92 / 100;
            atkBonus = Character.DEF() * 0.56;
            break;
        case 7:
            Multiplier = 100.8 / 100;
            Multipler2 = 139.2 / 100;
            atkBonus = Character.DEF() * 0.60;
            break;
        case 8:
            Multiplier = 107.52 / 100;
            Multipler2 = 148.48 / 100;
            atkBonus = Character.DEF() * 0.64;
            break;
        case 9:
            Multiplier = 114.24 / 100;
            Multipler2 = 157.76 / 100;
            atkBonus = Character.DEF() * 0.68;
            break;
        case 10:
            Multiplier = 120.96 / 100;
            Multipler2 = 167.04 / 100;
            atkBonus = Character.DEF() * 0.72;
            break;
        case 11:
            Multiplier = 127.68 / 100;
            Multipler2 = 176.32 / 100;
            atkBonus = Character.DEF() * 0.76;
            break;
        case 12:
            Multiplier = 134.4 / 100;
            Multipler2 = 185.6 / 100;
            atkBonus = Character.DEF() * 0.80;
            break;
        case 13:
            Multiplier = 142.8 / 100;
            Multipler2 = 197.2 / 100;
            atkBonus = Character.DEF() * 0.85;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.isReaction = false;
    attack.Multiplier = Multipler2;

    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    Character.currentBuffs.push({ Type: "ATKflat", Value: atkBonus });
    Character.normalAttack1.element = "GeoDMGBonus";
    Character.normalAttack2.element = "GeoDMGBonus";
    Character.normalAttack3.element = "GeoDMGBonus";
    Character.normalAttack4.element = "GeoDMGBonus";
    return { dmg: dmg };
}

function preserverofFortune(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 284.8 / 100;
            Multipler2 = Character.attack() * (90 / 100) + 577.33;
            break;
        case 2:
            Multiplier = 306.16100;
            Multipler2 = Character.attack() * (96.75 / 100) + 635.08;
            break;
        case 3:
            Multiplier = 327.52 / 100;
            Multipler2 = Character.attack() * (103.5 / 100) + 697.63;
            break;
        case 4:
            Multiplier = 356 / 100;
            Multipler2 = Character.attack() * (112.5 / 100) + 765;
            break;
        case 5:
            Multiplier = 377.36 / 100;
            Multipler2 = Character.attack() * (119.25 / 100) + 837.17;
            break;
        case 6:
            Multiplier = 398.72 / 100;
            Multipler2 = Character.attack() * (126 / 100) + 914.16;
            break;
        case 7:
            Multiplier = 427.2 / 100;
            Multipler2 = Character.attack() * (135 / 100) + 995.96;
            break;
        case 8:
            Multiplier = 455.68 / 100;
            Multipler2 = Character.attack() * (144 / 100) + 1082;
            break;
        case 9:
            Multiplier = 484.16 / 100;
            Multipler2 = Character.attack() * (153 / 100) + 1174;
            break;
        case 10:
            Multiplier = 512.64 / 100;
            Multipler2 = Character.attack() * (162 / 100) + 1270;
            break;
        case 11:
            Multiplier = 541.12 / 100;
            Multipler2 = Character.attack() * (171 / 100) + 1371;
            break;
        case 12:
            Multiplier = 569.6 / 100;
            Multipler2 = Character.attack() * (180 / 100) + 1477;
            break;
        case 13:
            Multiplier = 605.2 / 100;
            Multipler2 = Character.attack() * (191.25 / 100) + 1587;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let heal = Multipler2 * 11 * (1 + (Character.advancedstats.healingBonus / 100));
    return { dmg: dmg, healing: heal };
}

function lightningFang(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 160 / 100;
            Multipler2 = 24 / 100;
            break;
        case 2:
            Multiplier = 172 / 100;
            Multipler2 = 25.8 / 100;
            break;
        case 3:
            Multiplier = 184 / 100;
            Multipler2 = 27.6 / 100;
            break;
        case 4:
            Multiplier = 200 / 100;
            Multipler2 = 30 / 100;
            break;
        case 5:
            Multiplier = 212 / 100;
            Multipler2 = 31.8 / 100;
            break;
        case 6:
            Multiplier = 224 / 100;
            Multipler2 = 33.6 / 100;
            break;
        case 7:
            Multiplier = 240 / 100;
            Multipler2 = 36 / 100;
            break;
        case 8:
            Multiplier = 256 / 100;
            Multipler2 = 38.4 / 100;
            break;
        case 9:
            Multiplier = 272 / 100;
            Multipler2 = 40.8 / 100;
            break;
        case 10:
            Multiplier = 288 / 100;
            Multipler2 = 43.2 / 100;
            break;
        case 11:
            Multiplier = 304 / 100;
            Multipler2 = 45.6 / 100;
            break;
        case 12:
            Multiplier = 320 / 100;
            Multipler2 = 48 / 100;
            break;
        case 13:
            Multiplier = 340 / 100;
            Multipler2 = 51 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multipler2;
    for (let index = 0; index < 12; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character);
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character);
        }
    }
    return dmg;
}

function ritesofTermination(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = (104 + 152) / 100;
            Multipler2 = 132 / 100;
            break;
        case 2:
            Multiplier = (111.8 + 163.4) / 100;
            Multipler2 = 141.9 / 100;
            break;
        case 3:
            Multiplier = (119.6 + 174.8) / 100;
            Multipler2 = 151.8 / 100;
            break;
        case 4:
            Multiplier = (130 + 190) / 100;
            Multipler2 = 165 / 100;
            break;
        case 5:
            Multiplier = (137.8 + 201.4) / 100;
            Multipler2 = 174.9 / 100;
            break;
        case 6:
            Multiplier = (145.6 + 212.8) / 100;
            Multipler2 = 184.8 / 100;
            break;
        case 7:
            Multiplier = (156 + 228) / 100;
            Multipler2 = 198 / 100;
            break;
        case 8:
            Multiplier = (166.4 + 243.2) / 100;
            Multipler2 = 211.2 / 100;
            break;
        case 9:
            Multiplier = (176.8 + 258.4) / 100;
            Multipler2 = 224.4 / 100;
            break;
        case 10:
            Multiplier = (187.2 + 273.6) / 100;
            Multipler2 = 237.6 / 100;
            break;
        case 11:
            Multiplier = (197.6 + 288.8) / 100;
            Multipler2 = 250.8 / 100;
            break;
        case 12:
            Multiplier = (208 + 304) / 100;
            Multipler2 = 264 / 100;
            break;
        case 13:
            Multiplier = (221 + 323) / 100;
            Multipler2 = 280.5 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multipler2;
    for (let index = 0; index < 6; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character);
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character);
        }
    }
    return dmg;
}

function mujinaaFlurry(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    let healActive = 0;
    let healCont = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 117 / 100;
            Multipler2 = 52 / 100;
            healActive = Character.attack() * (92.2 / 100) + 577;
            healCont = Character.attack() * (79.9 / 100) + 500;
            break;
        case 2:
            Multiplier = 126 / 100;
            Multipler2 = 56 / 100;
            healActive = Character.attack() * (99.1 / 100) + 635;
            healCont = Character.attack() * (85.9 / 100) + 550;
            break;
        case 3:
            Multiplier = 134 / 100;
            Multipler2 = 60 / 100;
            healActive = Character.attack() * (106 / 100) + 698;
            healCont = Character.attack() * (91.9 / 100) + 605;
            break;
        case 4:
            Multiplier = 146 / 100;
            Multipler2 = 65 / 100;
            healActive = Character.attack() * (115.2 / 100) + 765;
            healCont = Character.attack() * (99.8 / 100) + 663;
            break;
        case 5:
            Multiplier = 154.76 / 100;
            Multipler2 = 68.9 / 100;
            healActive = Character.attack() * (122.11 / 100) + 837.2;
            healCont = Character.attack() * (105.83 / 100) + 725;
            break;
        case 6:
            Multiplier = 163.52 / 100;
            Multipler2 = 72.8 / 100;
            healActive = Character.attack() * (129.02 / 100) + 914.2;
            healCont = Character.attack() * (111.82 / 100) + 792;
            break;
        case 7:
            Multiplier = 175.2 / 100;
            Multipler2 = 78 / 100;
            healActive = Character.attack() * (138.24 / 100) + 996;
            healCont = Character.attack() * (119.81 / 100) + 863;
            break;
        case 8:
            Multiplier = 186.88 / 100;
            Multipler2 = 83.2 / 100;
            healActive = Character.attack() * (147.46 / 100) + 1082;
            healCont = Character.attack() * (127.8 / 100) + 938;
            break;
        case 9:
            Multiplier = 198.56 / 100;
            Multipler2 = 88.4 / 100;
            healActive = Character.attack() * (156.67 / 100) + 1174;
            healCont = Character.attack() * (135.78 / 100) + 1017;
            break;
        case 10:
            Multiplier = 210.24 / 100;
            Multipler2 = 93.6 / 100;
            healActive = Character.attack() * (165.89 / 100) + 1270;
            healCont = Character.attack() * (143.77 / 100) + 1100;
            break;
        case 11:
            Multiplier = 221.92 / 100;
            Multipler2 = 98.8 / 100;
            healActive = Character.attack() * (175.1 / 100) + 1371;
            healCont = Character.attack() * (151.76 / 100) + 1188;
            break;
        case 12:
            Multiplier = 233.6 / 100;
            Multipler2 = 104 / 100;
            healActive = Character.attack() * (184.32 / 100) + 1477;
            healCont = Character.attack() * (159.74 / 100) + 1280;
            break;
        case 13:
            Multiplier = 248.2 / 100;
            Multipler2 = 110.5 / 100;
            healActive = Character.attack() * (195.84 / 100) + 1587;
            healCont = Character.attack() * (169.73 / 100) + 1376;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let passive = false;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Someone More Capable") {
            passive = true;
        }
    })
    let healing = healActive + (healCont * 7);
    attack.Multiplier = Multipler2;
    for (let index = 0; index < 7; index++) {

        dmg += dmgCalc(attack, Character);
        if (passive) {
            healing += ((Character.EM() * 1.2) + 300) * 4;
        }

    }

    return { dmg: dmg, healing: healing };
}

function forbiddenCreation(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 148 / 100;
            Multiplier2 = 44 / 100;
            break;
        case 2:
            Multiplier = 159.1 / 100;
            Multiplier2 = 47.3 / 100;
            break;
        case 3:
            Multiplier = 170.2 / 100;
            Multiplier2 = 50.6 / 100;
            break;
        case 4:
            Multiplier = 185 / 100;
            Multiplier2 = 55 / 100;
            break;
        case 5:
            Multiplier = 196.1 / 100;
            Multiplier2 = 58.3 / 100;
            break;
        case 6:
            Multiplier = 207.2 / 100;
            Multiplier2 = 61.6 / 100;
            break;
        case 7:
            Multiplier = 222 / 100;
            Multiplier2 = 66 / 100;
            break;
        case 8:
            Multiplier = 236.8 / 100;
            Multiplier2 = 70.4 / 100;
            break;
        case 9:
            Multiplier = 251.6 / 100;
            Multiplier2 = 74.8 / 100;
            break;
        case 10:
            Multiplier = 266.4 / 100;
            Multiplier2 = 79.2 / 100;
            break;
        case 11:
            Multiplier = 281.2 / 100;
            Multiplier2 = 83.6 / 100;
            break;
        case 12:
            Multiplier = 296 / 100;
            Multiplier2 = 88 / 100;
            break;
        case 13:
            Multiplier = 314.5 / 100;
            Multiplier2 = 93.5 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    let emBuff = 0;
    for (let index = 0; index < 3; index++) {
        attack.Multiplier = Multiplier;
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
        attack.Multiplier = Multiplier2;
        dmg += dmgCalc(attack, Character) * numberOfEnemies;

    }
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Mollis Favonius") {
            emBuff += Character.EM() * 0.2;
        }
    });
    return { dmg: dmg, attackBuff: emBuff };
}

function obliteration(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multipler3 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 464 / 100;
            Multiplier2 = 378.4 / 100;
            Multipler3 = 120 / 100;
            break;
        case 2:
            Multiplier = 498.8 / 100;
            Multiplier2 = 406.78 / 100;
            Multipler3 = 129 / 100;
            break;
        case 3:
            Multiplier = 533.6 / 100;
            Multiplier2 = 435.16 / 100;
            Multipler3 = 138 / 100;
            break;
        case 4:
            Multiplier = 580 / 100;
            Multiplier2 = 473 / 100;
            Multipler3 = 150 / 100;
            break;
        case 5:
            Multiplier = 614.8 / 100;
            Multiplier2 = 501.38 / 100;
            Multipler3 = 159 / 100;
            break;
        case 6:
            Multiplier = 649.6 / 100;
            Multiplier2 = 529.76 / 100;
            Multipler3 = 168 / 100;
            break;
        case 7:
            Multiplier = 696 / 100;
            Multiplier2 = 567.6 / 100;
            Multipler3 = 180 / 100;
            break;
        case 8:
            Multiplier = 742.4 / 100;
            Multiplier2 = 605.44 / 100;
            Multipler3 = 192 / 100;
            break;
        case 9:
            Multiplier = 788.8 / 100;
            Multiplier2 = 643.28 / 100;
            Multipler3 = 204 / 100;
            break;
        case 10:
            Multiplier = 835.2 / 100;
            Multiplier2 = 681.12 / 100;
            Multipler3 = 216 / 100;
            break;
        case 11:
            Multiplier = 881.6 / 100;
            Multiplier2 = 718.96 / 100;
            Multipler3 = 228 / 100;
            break;
        case 12:
            Multiplier = 928 / 100;
            Multiplier2 = 756.8 / 100;
            Multipler3 = 240 / 100;
            break;
        case 13:
            Multiplier = 986 / 100;
            Multiplier2 = 804.1 / 100;
            Multipler3 = 255 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier2, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    let obliterationRangedUsed = false;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "obliterationRangedUsed")
            obliterationRangedUsed = true;

    });
    if (obliterationRangedUsed) {
        attack.Multiplier = Multiplier;
        dmg = dmgCalc(attack, Character) * numberOfEnemies;
        attack.Multiplier = Multipler3;
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
    }
    else {
        attack.Multiplier = Multiplier2;
        dmg = dmgCalc(attack, Character) * numberOfEnemies;
        Character.currentBuffs.push({ Type: "obliterationRangedUsed", Value: null });
    }
    return dmg;
}

function gustSurge(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 80.8 / 100;
            Multiplier2 = 24.8 / 100;
            break;
        case 2:
            Multiplier = 86.86 / 100;
            Multiplier2 = 26.66 / 100;
            break;
        case 3:
            Multiplier = 92.92 / 100;
            Multiplier2 = 28.52 / 100;
            break;
        case 4:
            Multiplier = 101 / 100;
            Multiplier2 = 31 / 100;
            break;
        case 5:
            Multiplier = 107.06 / 100;
            Multiplier2 = 32.86 / 100;
            break;
        case 6:
            Multiplier = 113.12 / 100;
            Multiplier2 = 34.72 / 100;
            break;
        case 7:
            Multiplier = 121.2 / 100;
            Multiplier2 = 37.2 / 100;
            break;
        case 8:
            Multiplier = 129.28 / 100;
            Multiplier2 = 39.68 / 100;
            break;
        case 9:
            Multiplier = 137.36 / 100;
            Multiplier2 = 42.16 / 100;
            break;
        case 10:
            Multiplier = 145.44 / 100;
            Multiplier2 = 44.64 / 100;
            break;
        case 11:
            Multiplier = 153.52 / 100;
            Multiplier2 = 47.12 / 100;
            break;
        case 12:
            Multiplier = 161.6 / 100;
            Multiplier2 = 49.6 / 100;
            break;
        case 13:
            Multiplier = 171.7 / 100;
            Multiplier2 = 52.7 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.isReaction = false;
    dmg += dmgCalc(attack, Character) * 8 * numberOfEnemies;
    attack.Multiplier = Multiplier2;
    dmg += dmgCalc(attack, Character) * 9 * numberOfEnemies;
    return dmg;
}

function wakeofEarth(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 148 / 100;
            break;
        case 2:
            Multiplier = 159.1 / 100;
            break;
        case 3:
            Multiplier = 170.2 / 100;
            break;
        case 4:
            Multiplier = 185 / 100;
            break;
        case 5:
            Multiplier = 196.1 / 100;
            break;
        case 6:
            Multiplier = 207.2 / 100;
            break;
        case 7:
            Multiplier = 222 / 100;
            break;
        case 8:
            Multiplier = 236.8 / 100;
            break;
        case 9:
            Multiplier = 251.6 / 100;
            break;
        case 10:
            Multiplier = 266.4 / 100;
            break;
        case 11:
            Multiplier = 281.2 / 100;
            break;
        case 12:
            Multiplier = 296 / 100;
            break;
        case 13:
            Multiplier = 314.5 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies * 4;
    return dmg;
}

function bellowingThunder(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 114.4 / 100;
            Multiplier2 = 32.8 / 100;
            break;
        case 2:
            Multiplier = 122.98 / 100;
            Multiplier2 = 35.26 / 100;
            break;
        case 3:
            Multiplier = 131.56 / 100;
            Multiplier2 = 37.72 / 100;
            break;
        case 4:
            Multiplier = 143 / 100;
            Multiplier2 = 41 / 100;
            break;
        case 5:
            Multiplier = 151.58 / 100;
            Multiplier2 = 43.46 / 100;
            break;
        case 6:
            Multiplier = 160.16 / 100;
            Multiplier2 = 45.92 / 100;
            break;
        case 7:
            Multiplier = 171.6 / 100;
            Multiplier2 = 49.2 / 100;
            break;
        case 8:
            Multiplier = 183.04 / 100;
            Multiplier2 = 52.48 / 100;
            break;
        case 9:
            Multiplier = 194.48 / 100;
            Multiplier2 = 55.76 / 100;
            break;
        case 10:
            Multiplier = 205.92 / 100;
            Multiplier2 = 59.04 / 100;
            break;
        case 11:
            Multiplier = 217.36 / 100;
            Multiplier2 = 62.32 / 100;
            break;
        case 12:
            Multiplier = 228.8 / 100;
            Multiplier2 = 65.6 / 100;
            break;
        case 13:
            Multiplier = 243.1 / 100;
            Multiplier2 = 69.7 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multiplier2;
    dmg += dmgCalc(attack, Character) * 16;
    return dmg;
}

function windsGrandOde(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 37.6 / 100;
            Multiplier2 = 18.8 / 100;
            break;
        case 2:
            Multiplier = 40.42 / 100;
            Multiplier2 = 20.21 / 100;
            break;
        case 3:
            Multiplier = 43.24 / 100;
            Multiplier2 = 21.62 / 100;
            break;
        case 4:
            Multiplier = 47 / 100;
            Multiplier2 = 23.5 / 100;
            break;
        case 5:
            Multiplier = 49.82 / 100;
            Multiplier2 = 24.91 / 100;
            break;
        case 6:
            Multiplier = 52.64 / 100;
            Multiplier2 = 26.32 / 100;
            break;
        case 7:
            Multiplier = 56.4 / 100;
            Multiplier2 = 28.2 / 100;
            break;
        case 8:
            Multiplier = 60.16 / 100;
            Multiplier2 = 30.08 / 100;
            break;
        case 9:
            Multiplier = 63.92 / 100;
            Multiplier2 = 31.96 / 100;
            break;
        case 10:
            Multiplier = 67.68 / 100;
            Multiplier2 = 33.84 / 100;
            break;
        case 11:
            Multiplier = 71.44 / 100;
            Multiplier2 = 35.72 / 100;
            break;
        case 12:
            Multiplier = 75.2 / 100;
            Multiplier2 = 37.6 / 100;
            break;
        case 13:
            Multiplier = 79.9 / 100;
            Multiplier2 = 39.95 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    for (let index = 0; index < 20; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        } else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }

    }
    if (supportingElement != "Anemo" && supportingElement != "Geo" && supportingElement != undefined) {
        attack.Multiplier = Multiplier2;
        attack.Element = supportingElement + "DMGBonus";
        dmg += dmgCalc(attack, Character, "ElementalBurst") * 20 * numberOfEnemies;
    }
    return dmg;
}

function pyronado(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multiplier3 = 0;
    let pyronado = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 72 / 100;
            Multiplier2 = 88 / 100;
            Multiplier3 = 109.6 / 100;
            pyronado = 112 / 100;
            break;
        case 2:
            Multiplier = 77.4 / 100;
            Multiplier2 = 94.6 / 100;
            Multiplier3 = 117.82 / 100;
            pyronado = 120.4 / 100;
            break;
        case 3:
            Multiplier = 82.8 / 100;
            Multiplier2 = 101.2 / 100;
            Multiplier3 = 126.04 / 100;
            pyronado = 128.8 / 100;
            break;
        case 4:
            Multiplier = 90 / 100;
            Multiplier2 = 110 / 100;
            Multiplier3 = 137 / 100;
            pyronado = 140 / 100;
            break;
        case 5:
            Multiplier = 95.4 / 100;
            Multiplier2 = 116.6 / 100;
            Multiplier3 = 145.22 / 100;
            pyronado = 148.4 / 100;
            break;
        case 6:
            Multiplier = 100.8 / 100;
            Multiplier2 = 123.2 / 100;
            Multiplier3 = 153.44 / 100;
            pyronado = 156.8 / 100;
            break;
        case 7:
            Multiplier = 108 / 100;
            Multiplier2 = 132 / 100;
            Multiplier3 = 164.4 / 100;
            pyronado = 168 / 100;
            break;
        case 8:
            Multiplier = 115.2 / 100;
            Multiplier2 = 140.8 / 100;
            Multiplier3 = 175.36 / 100;
            pyronado = 179.2 / 100;
            break;
        case 9:
            Multiplier = 122.4 / 100;
            Multiplier2 = 149.6 / 100;
            Multiplier3 = 186.32 / 100;
            pyronado = 190.4 / 100;
            break;
        case 10:
            Multiplier = 129.6 / 100;
            Multiplier2 = 158.4 / 100;
            Multiplier3 = 197.28 / 100;
            pyronado = 201.6 / 100;
            break;
        case 11:
            Multiplier = 136.8 / 100;
            Multiplier2 = 167.2 / 100;
            Multiplier3 = 208.24 / 100;
            pyronado = 212.8 / 100;
            break;
        case 12:
            Multiplier = 144 / 100;
            Multiplier2 = 176 / 100;
            Multiplier3 = 219.2 / 100;
            pyronado = 224 / 100;
            break;
        case 13:
            Multiplier = 153 / 100;
            Multiplier2 = 187 / 100;
            Multiplier3 = 232.9 / 100;
            pyronado = 238 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multiplier2;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multiplier3;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = pyronado;
    for (let index = 0; index < 7; index++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
    }

    return dmg;
}

function raincutter(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 54.27 / 100;
            break;
        case 2:
            Multiplier = 58.34 / 100;
            break;
        case 3:
            Multiplier = 62.41 / 100;
            break;
        case 4:
            Multiplier = 67.84 / 100;
            break;
        case 5:
            Multiplier = 71.91 / 100;
            break;
        case 6:
            Multiplier = 75.98 / 100;
            break;
        case 7:
            Multiplier = 81.41 / 100;
            break;
        case 8:
            Multiplier = 86.84 / 100;
            break;
        case 9:
            Multiplier = 92.26 / 100;
            break;
        case 10:
            Multiplier = 97.69 / 100;
            break;
        case 11:
            Multiplier = 103.12 / 100;
            break;
        case 12:
            Multiplier = 108.54 / 100;
            break;
        case 13:
            Multiplier = 115.33 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalBurst" }
    let dmg = 0;
    for (let index = 0; index < 37; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        } else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }

    }
    return dmg;
}

function riffRevolution(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            skillMultiplier = 340.8 / 100;
            skillMultiplier2 = 40 / 100;
            break;
        case 2:
            skillMultiplier = 366.36 / 100;
            skillMultiplier2 = 43 / 100;
            break;
        case 3:
            skillMultiplier = 391.92 / 100;
            skillMultiplier2 = 46 / 100;
            break;
        case 4:
            skillMultiplier = 426 / 100;
            skillMultiplier2 = 50 / 100;
            break;
        case 5:
            skillMultiplier = 451.56 / 100;
            skillMultiplier2 = 53 / 100;
            break;
        case 6:
            skillMultiplier = 477.12 / 100;
            skillMultiplier2 = 56 / 100;
            break;
        case 7:
            skillMultiplier = 511.2 / 100;
            skillMultiplier2 = 60 / 100;
            break;
        case 8:
            skillMultiplier = 545.28 / 100;
            skillMultiplier2 = 64 / 100;
            break;
        case 9:
            skillMultiplier = 579.36 / 100;
            skillMultiplier2 = 68 / 100;
            break;
        case 10:
            skillMultiplier = 613.44 / 100;
            skillMultiplier2 = 72 / 100;
            break;
        case 11:
            skillMultiplier = 647.52 / 100;
            skillMultiplier2 = 76 / 100;
            break;
        case 12:
            skillMultiplier = 681.6 / 100;
            skillMultiplier2 = 80 / 100;
            break;
        case 13:
            skillMultiplier = 724.2 / 100;
            skillMultiplier2 = 85 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PhysicalDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = skillMultiplier2;
    attack.element = "PyroDMGBonus";
    for (let index = 0; index < 5; index++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
    }


    return { dmg: dmg };

}

function doneDeal(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            skillMultiplier = 182.4 / 100;
            skillMultiplier2 = 33.4;
            break;
        case 2:
            skillMultiplier = 196.08 / 100;
            skillMultiplier2 = 35.4;
            break;
        case 3:
            skillMultiplier = 209.76 / 100;
            skillMultiplier2 = 37.4;
            break;
        case 4:
            skillMultiplier = 228 / 100;
            skillMultiplier2 = 40;
            break;
        case 5:
            skillMultiplier = 241.68 / 100;
            skillMultiplier2 = 42;
            break;
        case 6:
            skillMultiplier = 255.36 / 100;
            skillMultiplier2 = 44;
            break;
        case 7:
            skillMultiplier = 273.6 / 100;
            skillMultiplier2 = 46.6;
            break;
        case 8:
            skillMultiplier = 291.84 / 100;
            skillMultiplier2 = 49.2;
            break;
        case 9:
            skillMultiplier = 310.08 / 100;
            skillMultiplier2 = 51.8;
            break;
        case 10:
            skillMultiplier = 328.32 / 100;
            skillMultiplier2 = 54.4;
            break;
        case 11:
            skillMultiplier = 346.56 / 100;
            skillMultiplier2 = 57;
            break;
        case 12:
            skillMultiplier = 364.8 / 100;
            skillMultiplier2 = 59.6;
            break;
        case 13:
            skillMultiplier = 387.6 / 100;
            skillMultiplier2 = 62.2;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    Character.currentBuffs.push({ Type: "ChargedAttack", Value: skillMultiplier2 });


    return dmg;

}

function ryuukinSaxifrage(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            skillMultiplier = 127.2 / 100;
            skillMultiplier2 = 122 / 100;
            break;
        case 2:
            skillMultiplier = 136.74 / 100;
            skillMultiplier2 = 131.15 / 100;
            break;
        case 3:
            skillMultiplier = 146.28 / 100;
            skillMultiplier2 = 140.3 / 100;
            break;
        case 4:
            skillMultiplier = 159 / 100;
            skillMultiplier2 = 152.5 / 100;
            break;
        case 5:
            skillMultiplier = 168.54 / 100;
            skillMultiplier2 = 161.65 / 100;
            break;
        case 6:
            skillMultiplier = 178.08 / 100;
            skillMultiplier2 = 170.8 / 100;
            break;
        case 7:
            skillMultiplier = 190.8 / 100;
            skillMultiplier2 = 183 / 100;
            break;
        case 8:
            skillMultiplier = 203.52 / 100;
            skillMultiplier2 = 195.2 / 100;
            break;
        case 9:
            skillMultiplier = 216.24 / 100;
            skillMultiplier2 = 207.4 / 100;
            break;
        case 10:
            skillMultiplier = 228.96 / 100;
            skillMultiplier2 = 219.6 / 100;
            break;
        case 11:
            skillMultiplier = 241.68 / 100;
            skillMultiplier2 = 231.8 / 100;
            break;
        case 12:
            skillMultiplier = 254.4 / 100;
            skillMultiplier2 = 244 / 100;
            break;
        case 13:
            skillMultiplier = 270.3 / 100;
            skillMultiplier2 = 259.25 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = skillMultiplier2;
    dmg += dmgCalc(attack, Character) * 5 * numberOfEnemies;
    return dmg;

}

function planetBefall(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 401.08 / 100;
            break;
        case 2:
            Multiplier = 444.44 / 100;
            break;
        case 3:
            Multiplier = 487.8 / 100;
            break;
        case 4:
            Multiplier = 542 / 100;
            break;
        case 5:
            Multiplier = 590.78 / 100;
            break;
        case 6:
            Multiplier = 639.56 / 100;
            break;
        case 7:
            Multiplier = 704.6 / 100;
            break;
        case 8:
            Multiplier = 769.64 / 100;
            break;
        case 9:
            Multiplier = 834.68 / 100;
            break;
        case 10:
            Multiplier = 899.72 / 100;
            break;
        case 11:
            Multiplier = 964.76 / 100;
            break;
        case 12:
            Multiplier = 1029.8 / 100;
            break;
        case 13:
            Multiplier = 1084 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;

    return { dmg: dmg };
}

function propheciesofDawn(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 359.2 / 100;
            break;
        case 2:
            Multiplier = 386.14 / 100;
            break;
        case 3:
            Multiplier = 413.08 / 100;
            break;
        case 4:
            Multiplier = 449 / 100;
            break;
        case 5:
            Multiplier = 475.94 / 100;
            break;
        case 6:
            Multiplier = 502.88 / 100;
            break;
        case 7:
            Multiplier = 538.8 / 100;
            break;
        case 8:
            Multiplier = 574.72 / 100;
            break;
        case 9:
            Multiplier = 610.64 / 100;
            break;
        case 10:
            Multiplier = 646.56 / 100;
            break;
        case 11:
            Multiplier = 646.56 / 100;
            break;
        case 12:
            Multiplier = 646.56 / 100;
            break;
        case 13:
            Multiplier = 646.56 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;

    return dmg;
}

function suiyuu(Character) {
    let Multiplier = 0;
    let buff = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 66.46 / 100;
            buff = 11;
            break;
        case 2:
            Multiplier = 71.44 / 100;
            buff = 12;
            break;
        case 3:
            Multiplier = 76.42 / 100;
            buff = 13;
            break;
        case 4:
            Multiplier = 83.07 / 100;
            buff = 14;
            break;
        case 5:
            Multiplier = 88.05 / 100;
            buff = 15;
            break;
        case 6:
            Multiplier = 93.04 / 100;
            buff = 16;
            break;
        case 7:
            Multiplier = 99.68 / 100;
            buff = 17;
            break;
        case 8:
            Multiplier = 106.33 / 100;
            buff = 18;
            break;
        case 9:
            Multiplier = 112.98 / 100;
            buff = 19;
            break;
        case 10:
            Multiplier = 119.62 / 100;
            buff = 20;
            break;
        case 11:
            Multiplier = 126.27 / 100;
            buff = 20;
            break;
        case 12:
            Multiplier = 132.91 / 100;
            buff = 20;
            break;
        case 13:
            Multiplier = 141.22 / 100;
            buff = 20;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    Character.currentBuffs.push({ Type: "NormalAttack", Value: buff });
    for (let index = 0; index < 37; index++) {
        if (index % 4 != 3) {
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }

    }

    return dmg;
}
function forwardUntoVictory(Character) {
    let Multiplier = 0;
    let multiplier2 = 0;
    let defense = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 98.22 / 100;
            multiplier2 = 61.3 / 100;
            defense = 206.16;
            break;
        case 2:
            Multiplier = 105.58 / 100;
            multiplier2 = 65.9 / 100;
            defense = 221.62;
            break;
        case 3:
            Multiplier = 112.95 / 100;
            multiplier2 = 70.49 / 100;
            defense = 237.08;
            break;
        case 4:
            Multiplier = 122.77 / 100;
            multiplier2 = 76.63 / 100;
            defense = 257.7;
            break;
        case 5:
            Multiplier = 130.14 / 100;
            multiplier2 = 81.22 / 100;
            defense = 273.16;
            break;
        case 6:
            Multiplier = 137.5 / 100;
            multiplier2 = 85.82 / 100;
            defense = 288.62;
            break;
        case 7:
            Multiplier = 147.32 / 100;
            multiplier2 = 91.95 / 100;
            defense = 309.24;
            break;
        case 8:
            Multiplier = 157.15 / 100;
            multiplier2 = 98.08 / 100;
            defense = 329.85;
            break;
        case 9:
            Multiplier = 166.97 / 100;
            multiplier2 = 104.21 / 100;
            defense = 350.47;
            break;
        case 10:
            Multiplier = 176.79 / 100;
            multiplier2 = 110.34 / 100;
            defense = 371.08;
            break;
        case 11:
            Multiplier = 186.61 / 100;
            multiplier2 = 116.47 / 100;
            defense = 391.7;
            break;
        case 12:
            Multiplier = 196.43 / 100;
            multiplier2 = 122.6 / 100;
            defense = 412.32;
            break;
        case 13:
            Multiplier = 208.71 / 100;
            multiplier2 = 130.26 / 100;
            defense = 438.09;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "DEF", isReaction: false, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let hasPassive1 = false;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Headless of the Wind and Weather")
            hasPassive1 = true;
    });
    if (hasPassive1) {
        Character.currentBuffs.push({ Type: "DEF%", Value: 25 });
    }
    attack.Multiplier = multiplier2;
    for (let index = 0; index < 6; index++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies;

    }


    return { dmg: dmg, atkBuff: defense };
}

function beholdIttotheEvil(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 57.6 / 100;
            break;
        case 2:
            Multiplier = 61.92 / 100;
            break;
        case 3:
            Multiplier = 66.24 / 100;
            break;
        case 4:
            Multiplier = 72 / 100;
            break;
        case 5:
            Multiplier = 76.32 / 100;
            break;
        case 6:
            Multiplier = 80.64 / 100;
            break;
        case 7:
            Multiplier = 86.4 / 100;
            break;
        case 8:
            Multiplier = 92.16 / 100;
            break;
        case 9:
            Multiplier = 97.92 / 100;
            break;
        case 10:
            Multiplier = 103.68 / 100;
            break;
        case 11:
            Multiplier = 109.44 / 100;
            break;
        case 12:
            Multiplier = 115.2 / 100;
            break;
        case 13:
            Multiplier = 122.4 / 100;
            break;
    }
    Character.currentBuffs.push({ Type: "ATKflat", Value: Character.DEF() * Multiplier });

    return 0;
}

function nereidsAscension(Character) {
    let Multiplier = 0;
    let normalAttack = 0;
    let chargedAttack = 0;
    let bakeKurage = 0;
    let heal = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 10.42 / 100;
            normalAttack = 4.84 / 100;
            chargedAttack = 6.78 / 100;
            bakeKurage = 7.1 / 100;
            heal = (Character.HP() * (0.81 / 100)) + 77.03;
            break;
        case 2:
            Multiplier = 11.2 / 100;
            normalAttack = 5.2 / 100;
            chargedAttack = 7.28 / 100;
            bakeKurage = 7.63 / 100;
            heal = (Character.HP() * (0.87 / 100)) + 84.74;
            break;
        case 3:
            Multiplier = 11.98 / 100;
            normalAttack = 5.57 / 100;
            chargedAttack = 7.79 / 100;
            bakeKurage = 8.16 / 100;
            heal = (Character.HP() * (0.93 / 100)) + 93.08;
            break;
        case 4:
            Multiplier = 13.02 / 100;
            normalAttack = 6.05 / 100;
            chargedAttack = 8.47 / 100;
            bakeKurage = 8.87 / 100;
            heal = (Character.HP() * (1.01 / 100)) + 102.07;
            break;
        case 5:
            Multiplier = 13.8 / 100;
            normalAttack = 6.41 / 100;
            chargedAttack = 8.98 / 100;
            bakeKurage = 9.4 / 100;
            heal = (Character.HP() * (1.07 / 100)) + 111.7;
            break;
        case 6:
            Multiplier = 14.58 / 100;
            normalAttack = 6.78 / 100;
            chargedAttack = 9.49 / 100;
            bakeKurage = 9.93 / 100;
            heal = (Character.HP() * (1.13 / 100)) + 121.98;
            break;
        case 7:
            Multiplier = 15.62 / 100;
            normalAttack = 7.26 / 100;
            chargedAttack = 10.16 / 100;
            bakeKurage = 10.64 / 100;
            heal = (Character.HP() * (1.21 / 100)) + 132.89;
            break;
        case 8:
            Multiplier = 16.67 / 100;
            normalAttack = 7.74 / 100;
            chargedAttack = 10.84 / 100;
            bakeKurage = 11.35 / 100;
            heal = (Character.HP() * (1.29 / 100)) + 144.45;
            break;
        case 9:
            Multiplier = 17.71 / 100;
            normalAttack = 8.23 / 100;
            chargedAttack = 11.52 / 100;
            bakeKurage = 12.06 / 100;
            heal = (Character.HP() * (1.37 / 100)) + 156.65;
            break;
        case 10:
            Multiplier = 18.75 / 100;
            normalAttack = 8.71 / 100;
            chargedAttack = 12.2 / 100;
            bakeKurage = 12.77 / 100;
            heal = (Character.HP() * (1.45 / 100)) + 169.49;
            break;
        case 11:
            Multiplier = 19.79 / 100;
            normalAttack = 9.2 / 100;
            chargedAttack = 12.87 / 100;
            bakeKurage = 13.48 / 100;
            heal = (Character.HP() * (1.54 / 100)) + 182.97;
            break;
        case 12:
            Multiplier = 20.83 / 100;
            normalAttack = 9.68 / 100;
            chargedAttack = 13.55 / 100;
            bakeKurage = 14.19 / 100;
            heal = (Character.HP() * (1.62 / 100)) + 197.1;
            break;
        case 13:
            Multiplier = 22.13 / 100;
            normalAttack = 10.29 / 100;
            chargedAttack = 14.4 / 100;
            bakeKurage = 15.08 / 100;
            heal = (Character.HP() * (1.72 / 100)) + 211.87;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    Character.currentBuffs.push({ Type: "KokomiNormal", Value: normalAttack });
    Character.currentBuffs.push({ Type: "KokomiCharged", Value: chargedAttack });
    Character.currentBuffs.push({ Type: "KokomiBake", Value: bakeKurage });
    let healing = heal * (1 + (Character.advancedstats.healingBonus / 100)) * 12;
    return { dmg: dmg, healing: healing };
}

function musouShinsetsu(Character) {
    let Multiplier = 0;
    let resolveBase = 0;
    let resolveInfused = 0;
    let oneHit = 0;
    let twoHit = 0;
    let threeHit = 0;
    let chargedOneHit = 0;
    let chargedTwoHit = 0;

    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 400.8;
            resolveBase = 3.89
            resolveInfused = 0.73
            oneHit = 44.74;
            twoHit = 43.96;
            threeHit = 53.82;
            chargedOneHit = 61.6;
            chargedTwoHit = 74.36;
            break;
        case 2:
            Multiplier = 430.86;
            resolveBase = 4.18
            resolveInfused = 0.78
            oneHit = 47.79;
            twoHit = 46.95;
            threeHit = 57.49;
            chargedOneHit = 65.8;
            chargedTwoHit = 79.43;
            break;
        case 3:
            Multiplier = 460.92;
            resolveBase = 4.47
            resolveInfused = 0.84
            oneHit = 50.84;
            twoHit = 49.95;
            threeHit = 61.16;
            chargedOneHit = 70;
            chargedTwoHit = 84.5;
            break;
        case 4:
            Multiplier = 501;
            resolveBase = 4.86
            resolveInfused = 0.91
            oneHit = 54.91;
            twoHit = 53.95;
            threeHit = 66.05;
            chargedOneHit = 75.6;
            chargedTwoHit = 91.26;
            break;
        case 5:
            Multiplier = 531.06;
            resolveBase = 5.15
            resolveInfused = 0.96
            oneHit = 57.96;
            twoHit = 56.94;
            threeHit = 69.72;
            chargedOneHit = 79.8;
            chargedTwoHit = 96.33;
            break;
        case 6:
            Multiplier = 561.12;
            resolveBase = 5.44
            resolveInfused = 1.02
            oneHit = 61.51;
            twoHit = 60.44;
            threeHit = 74;
            chargedOneHit = 84.7;
            chargedTwoHit = 102.25;
            break;
        case 7:
            Multiplier = 601.2;
            resolveBase = 5.83
            resolveInfused = 1.09
            oneHit = 66.09;
            twoHit = 64.94;
            threeHit = 79.51;
            chargedOneHit = 91;
            chargedTwoHit = 109.85;
            break;
        case 8:
            Multiplier = 641.28;
            resolveBase = 6.22
            resolveInfused = 1.16
            oneHit = 70.66;
            twoHit = 69.4;
            threeHit = 85.01;
            chargedOneHit = 97.3;
            chargedTwoHit = 117.45;
            break;
        case 9:
            Multiplier = 681.36;
            resolveBase = 6.61
            resolveInfused = 1.23
            oneHit = 75.24;
            twoHit = 73.93;
            threeHit = 90.52;
            chargedOneHit = 103.6;
            chargedTwoHit = 125.06;
            break;
        case 10:
            Multiplier = 721.44;
            resolveBase = 7;
            resolveInfused = 1.31;
            oneHit = 79.82;
            twoHit = 78.42;
            threeHit = 96.02;
            chargedOneHit = 109.9;
            chargedTwoHit = 132.67;
            break;
        case 11:
            Multiplier = 761.52;
            resolveBase = 7.39
            resolveInfused = 1.38;
            oneHit = 84.39;
            twoHit = 82.92;
            threeHit = 101.53;
            chargedOneHit = 116.2;
            chargedTwoHit = 140.27;
            break;
        case 12:
            Multiplier = 801.6;
            resolveBase = 7.78
            resolveInfused = 1.45
            oneHit = 88.97;
            twoHit = 87.41;
            threeHit = 107.03;
            chargedOneHit = 122.5;
            chargedTwoHit = 147.88;
            break;
        case 13:
            Multiplier = 851.7;
            resolveBase = 8.26
            resolveInfused = 1.54
            oneHit = 93.54;
            twoHit = 91.91;
            threeHit = 112.54;
            chargedOneHit = 128.8;
            chargedTwoHit = 155.48;
            break;
    }
    Multiplier = (Multiplier + (60 * resolveBase)) / 100;
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };

    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    for (let i = 0; i < 6; i++) {
        switch (i % 6) {
            case 0: case 1: case 2:
                for (let n = 0; n < 5; n++) {
                    switch (n % 5) {
                        case 0:
                            attack.isReaction = true;
                            attack.Multiplier = (oneHit + (resolveInfused * 60)) / 100;
                            break;
                        case 1:
                            attack.isReaction = false;
                            attack.Multiplier = (twoHit + (resolveInfused * 60)) / 100;
                            break;
                        case 2:
                            attack.Multiplier = (threeHit + (resolveInfused * 60)) / 100;
                            break;
                        case 3:
                            attack.isReaction = true;
                            attack.Multiplier = (chargedOneHit + (resolveInfused * 60)) / 100;
                            break;
                        case 4:
                            attack.Multiplier = (chargedTwoHit + (resolveInfused * 60)) / 100;
                            break;
                    }

                    dmg += dmgCalc(attack, Character) * numberOfEnemies;
                }
                break;
            case 3:
                attack.isReaction = true;
                attack.Multiplier = (oneHit + (resolveInfused * 60)) / 100;
                break;
            case 4:
                attack.isReaction = true;
                attack.Multiplier = (chargedOneHit + (resolveInfused * 60)) / 100;
                break;
            case 5:
                attack.isReaction = true;
                attack.Multiplier = (chargedTwoHit + (resolveInfused * 60)) / 100;
                break;
        }
        if (i % 6 > 2) {
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }

    }
    return dmg;
}

function koukouSendou(Character) {
    let Multiplier = 0;
    let multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 409.6 / 100;
            multiplier2 = 34.1 / 100;
            break;
        case 2:
            Multiplier = 440.3 / 100;
            multiplier2 = 36.7 / 100;
            break;
        case 3:
            Multiplier = 471.0 / 100;
            multiplier2 = 39.2 / 100;
            break;
        case 4:
            Multiplier = 512 / 100;
            multiplier2 = 42.7 / 100;
            break;
        case 5:
            Multiplier = 542.7 / 100;
            multiplier2 = 45.2 / 100;
            break;
        case 6:
            Multiplier = 573.4 / 100;
            multiplier2 = 47.8 / 100;
            break;
        case 7:
            Multiplier = 614.4 / 100;
            multiplier2 = 51.1 / 100;
            break;
        case 8:
            Multiplier = 655.4 / 100;
            multiplier2 = 54.6 / 100;
            break;
        case 9:
            Multiplier = 696.3 / 100;
            multiplier2 = 58 / 100;
            break;
        case 10:
            Multiplier = 737.2 / 100;
            multiplier2 = 61.4 / 100;
            break;
        case 11:
            Multiplier = 778.2 / 100;
            multiplier2 = 64.8 / 100;
            break;
        case 12:
            Multiplier = 819.2 / 100;
            multiplier2 = 68.2 / 100;
            break;
        case 13:
            Multiplier = 870.4 / 100;
            multiplier2 = 72.5 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.isReaction = false;
    attack.Multiplier = multiplier2;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;

    return { dmg: dmg };
}

function divineMaidensDeliverance(Character) {
    let Multiplier = 0;
    let multiplier2 = 0;
    let res = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 100.8 / 100;
            multiplier2 = 33.12 / 100;
            res = 6;
            break;
        case 2:
            Multiplier = 108.36 / 100;
            multiplier2 = 35.6 / 100;
            res = 7;
            break;
        case 3:
            Multiplier = 115.92 / 100;
            multiplier2 = 38.09 / 100;
            res = 8;
            break;
        case 4:
            Multiplier = 126 / 100;
            multiplier2 = 41.4 / 100;
            res = 9;
            break;
        case 5:
            Multiplier = 133.56 / 100;
            multiplier2 = 43.88 / 100;
            res = 10;
            break;
        case 6:
            Multiplier = 141.12 / 100;
            multiplier2 = 46.37 / 100;
            res = 11;
            break;
        case 7:
            Multiplier = 151.2 / 100;
            multiplier2 = 49.68 / 100;
            res = 12;
            break;
        case 8:
            Multiplier = 161.28 / 100;
            multiplier2 = 52.99 / 100;
            res = 13;
            break;
        case 9:
            Multiplier = 171.36 / 100;
            multiplier2 = 56.3 / 100;
            res = 14;
            break;
        case 10:
            Multiplier = 181.44 / 100;
            multiplier2 = 59.62 / 100;
            res = 15;
            break;
        case 11:
            Multiplier = 191.52 / 100;
            multiplier2 = 62.93 / 100;
            res = 15;
            break;
        case 12:
            Multiplier = 201.6 / 100;
            multiplier2 = 66.24 / 100;
            res = 15;
            break;
        case 13:
            Multiplier = 214.2 / 100;
            multiplier2 = 70.38 / 100;
            res = 15;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = multiplier2;
    Character.currentBuffs.push({ Type: "ResShred", Element: "CryoDMGBonus", Value: res });
    Character.currentBuffs.push({ Type: "ResShred", Element: "PhysicalDMGBonus", Value: res });
    for (let index = 0; index < 12; index++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies;

    }

    return { dmg, dmg };
}

function crimsonOoyoroi(Character) {
    let Multiplier = 0;
    let multiplier2 = 0;
    let shield = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 88 / 100;
            multiplier2 = 58 / 100;
            shield = (Character.HP() * (1.14 / 100)) + 110;
            break;
        case 2:
            Multiplier = 94.6 / 100;
            multiplier2 = 62.35 / 100;
            shield = (Character.HP() * (1.23 / 100)) + 121;
            break;
        case 3:
            Multiplier = 101.2 / 100;
            multiplier2 = 66.7 / 100;
            shield = (Character.HP() * (1.32 / 100)) + 132.9;
            break;
        case 4:
            Multiplier = 110 / 100;
            multiplier2 = 72.5 / 100;
            shield = (Character.HP() * (1.43 / 100)) + 145.8;
            break;
        case 5:
            Multiplier = 116.6 / 100;
            multiplier2 = 76.85 / 100;
            shield = (Character.HP() * (1.52 / 100)) + 159.5;
            break;
        case 6:
            Multiplier = 123.2 / 100;
            multiplier2 = 81.2 / 100;
            shield = (Character.HP() * (1.6 / 100)) + 174.2;
            break;
        case 7:
            Multiplier = 132 / 100;
            multiplier2 = 87 / 100;
            shield = (Character.HP() * (1.72 / 100)) + 189.8;
            break;
        case 8:
            Multiplier = 140.8 / 100;
            multiplier2 = 92.8 / 100;
            shield = (Character.HP() * (1.83 / 100)) + 206.3;
            break;
        case 9:
            Multiplier = 149.6 / 100;
            multiplier2 = 98.6 / 100;
            shield = (Character.HP() * (1.94 / 100)) + 223.7;
            break;
        case 10:
            Multiplier = 158.4 / 100;
            multiplier2 = 104.4 / 100;
            shield = (Character.HP() * (2.06 / 100)) + 242;
            break;
        case 11:
            Multiplier = 167.2 / 100;
            multiplier2 = 110.2 / 100;
            shield = (Character.HP() * (2.17 / 100)) + 261.3;
            break;
        case 12:
            Multiplier = 176 / 100;
            multiplier2 = 116 / 100;
            shield = (Character.HP() * (2.29 / 100)) + 281.5;
            break;
        case 13:
            Multiplier = 187 / 100;
            multiplier2 = 123.25 / 100;
            shield = (Character.HP() * (2.43 / 100)) + 302.6;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let hasPassive1 = false;
    let hasPassive2 = false;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Imbricated Armor") {
            hasPassive1 = true;
        } else if (buff.Type == "Flaming Assault") {
            hasPassive2 = true;
        }
    });
    if (hasPassive1) {
        shield *= 1 + ((Character.advancedstats.shieldStrength + 5) / 100);
    } else {
        shield *= 1 + (Character.advancedstats.shieldStrength / 100);
    }
    attack.Multiplier = multiplier2;
    for (let index = 0; index < 15; index++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies + (hasPassive2 ? (Character.HP() * (2.2 / 100)) : 0);
    }

    return { dmg: dmg, shield: shield };
}

function tenkoKenshin(Character) {
    let Multiplier = 0;
    let multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 260 / 100;
            multiplier2 = 333.82 / 100;
            break;
        case 2:
            Multiplier = 279.5 / 100;
            multiplier2 = 358.85 / 100;
            break;
        case 3:
            Multiplier = 299 / 100;
            multiplier2 = 383.89 / 100;
            break;
        case 4:
            Multiplier = 325 / 100;
            multiplier2 = 417.27 / 100;
            break;
        case 5:
            Multiplier = 344.5 / 100;
            multiplier2 = 442.31 / 100;
            break;
        case 6:
            Multiplier = 364 / 100;
            multiplier2 = 467.34 / 100;
            break;
        case 7:
            Multiplier = 390 / 100;
            multiplier2 = 500.72 / 100;
            break;
        case 8:
            Multiplier = 416 / 100;
            multiplier2 = 534.11 / 100;
            break;
        case 9:
            Multiplier = 442 / 100;
            multiplier2 = 567.49 / 100;
            break;
        case 10:
            Multiplier = 468 / 100;
            multiplier2 = 600.87 / 100;
            break;
        case 11:
            Multiplier = 494 / 100;
            multiplier2 = 634.25 / 100;
            break;
        case 12:
            Multiplier = 520 / 100;
            multiplier2 = 667.63 / 100;
            break;
        case 13:
            Multiplier = 552.5 / 100;
            multiplier2 = 709.36 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = multiplier2;
    for (let index = 0; index < 3; index++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies;

    }

    return dmg;
}

function cliffbreakersBanner(Character) {
    let Multiplier = 0;
    let multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 244 / 100;
            multiplier2 = Character.DEF() * (32.16 / 100);
            break;
        case 2:
            Multiplier = 262.3 / 100;
            multiplier2 = Character.DEF() * (34.57 / 100);
            break;
        case 3:
            Multiplier = 280.6 / 100;
            multiplier2 = Character.DEF() * (36.98 / 100);
            break;
        case 4:
            Multiplier = 305 / 100;
            multiplier2 = Character.DEF() * (40.2 / 100);
            break;
        case 5:
            Multiplier = 323.3 / 100;
            multiplier2 = Character.DEF() * (42.61 / 100);
            break;
        case 6:
            Multiplier = 341.6 / 100;
            multiplier2 = Character.DEF() * (45.02 / 100);
            break;
        case 7:
            Multiplier = 366 / 100;
            multiplier2 = Character.DEF() * (48.24 / 100);
            break;
        case 8:
            Multiplier = 390.4 / 100;
            multiplier2 = Character.DEF() * (51.46 / 100);
            break;
        case 9:
            Multiplier = 414.8 / 100;
            multiplier2 = Character.DEF() * (54.67 / 100);
            break;
        case 10:
            Multiplier = 439.2 / 100;
            multiplier2 = Character.DEF() * (57.89 / 100);
            break;
        case 11:
            Multiplier = 463.6 / 100;
            multiplier2 = Character.DEF() * (61.1 / 100);
            break;
        case 12:
            Multiplier = 488 / 100;
            multiplier2 = Character.DEF() * (64.32 / 100);
            break;
        case 13:
            Multiplier = 518.5 / 100;
            multiplier2 = Character.DEF() * (68.34 / 100);
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    Character.currentBuffs.push({ Type: "YunJinBuff", Value: multiplier2 });
    return { dmg: dmg, attackBuff: multiplier2 };
}

function ParticularFieldFettersOfPhenomena(Character) {
    let multiplier1 = 0;
    let multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            multiplier1 = 121.6 / 100;
            multiplier2 = 97.28 / 100;
            break;
        case 2:
            multiplier1 = 130.7 / 100;
            multiplier2 = 104.58 / 100;
            break;
        case 3:
            multiplier1 = 139.84 / 100;
            multiplier2 = 111.87 / 100;
            break;
        case 4:
            multiplier1 = 152 / 100;
            multiplier2 = 121.6 / 100;
            break;
        case 5:
            multiplier1 = 161.12 / 100;
            multiplier2 = 128.9 / 100;
            break;
        case 6:
            multiplier1 = 170.24 / 100;
            multiplier2 = 136.19 / 100;
            break;
        case 7:
            multiplier1 = 182.4 / 100;
            multiplier2 = 145.92 / 100;
            break;
        case 8:
            multiplier1 = 194.56 / 100;
            multiplier2 = 155.65 / 100;
            break;
        case 9:
            multiplier1 = 206.72 / 100;
            multiplier2 = 165.38 / 100;
            break;
        case 10:
            multiplier1 = 218.88 / 100;
            multiplier2 = 175.1 / 100;
            break;
        case 11:
            multiplier1 = 231.04 / 100;
            multiplier2 = 184.83 / 100;
            break;
        case 12:
            multiplier1 = 243.2 / 100;
            multiplier2 = 194.56 / 100;
            break;
        case 13:
            multiplier1 = 258.4 / 100;
            multiplier2 = 206.72 / 100;
            break;
    }
    let attack1 = { Multiplier: multiplier1, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let attack2 = { Multiplier: multiplier2, Element: "DendroDMGBonus", Scaling: "EM", isReaction: false, type: "ElementalBurst" };
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Mysteries Laid Bare") {
            let buffAmount = Character.EM() * 0.1;
            if (buffAmount > 100)
                buffAmount = 100;
            Character.currentBuffs.push({ Type: "ElementalBurst", Value: buffAmount });
        }
    });
    let dmg = dmgCalc(attack1, Character) * 10 * numberOfEnemies;
    dmg += dmgCalc(attack2, Character) * 10 * numberOfEnemies;
    return dmg;
}

function BalemoonRising(Character) {
    let multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            multiplier = 370.4 / 100;
            break;
        case 2:
            multiplier = 398.18 / 100;
            break;
        case 3:
            multiplier = 425.96 / 100;
            break;
        case 4:
            multiplier = 463 / 100;
            break;
        case 5:
            multiplier = 490.78 / 100;
            break;
        case 6:
            multiplier = 518.56 / 100;
            break;
        case 7:
            multiplier = 555.6 / 100;
            break;
        case 8:
            multiplier = 592.64 / 100;
            break;
        case 9:
            multiplier = 629.68 / 100;
            break;
        case 10:
            multiplier = 666.72 / 100;
            break;
        case 11:
            multiplier = 703.76 / 100;
            break;
        case 12:
            multiplier = 740.8 / 100;
            break;
        case 13:
            multiplier = 787.1 / 100;
            break;
    }
    let attack = { Multiplier: multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    //Absorb blood directive
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
    let totalHeal = (Character.attack() * 1.5) + (((Character.bondOfLife / 100) * Character.HP()) * 1.5);
    //percent of hp healed
    let bondOfLifeToRemove = (totalHeal / Character.HP()) * 100;
    Character.bondOfLifeToRemove(bondOfLifeToRemove);
    return dmg;
}

function oTidesIHaveReturned(character) {
    let multiplier1 = 0;
    let multiplier2 = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            multiplier1 = 22.26 / 100;
            multiplier2 = 9.11 / 100;
            break;
        case 2:
            multiplier1 = 23.93 / 100;
            multiplier2 = 9.79 / 100;
            break;
        case 3:
            multiplier1 = 25.6 / 100;
            multiplier2 = 10.47 / 100;
            break;
        case 4:
            multiplier1 = 27.82 / 100;
            multiplier2 = 11.38 / 100;
            break;
        case 5:
            multiplier1 = 29.49 / 100;
            multiplier2 = 12.06 / 100;
            break;
        case 6:
            multiplier1 = 31.16 / 100;
            multiplier2 = 12.75 / 100;
            break;
        case 7:
            multiplier1 = 33.39 / 100;
            multiplier2 = 13.66 / 100;
            break;
        case 8:
            multiplier1 = 35.61 / 100;
            multiplier2 = 14.57 / 100;
            break;
        case 9:
            multiplier1 = 37.84 / 100;
            multiplier2 = 15.48 / 100;
            break;
        case 10:
            multiplier1 = 40.06 / 100;
            multiplier2 = 16.39 / 100;
            break;
        case 11:
            multiplier1 = 42.29 / 100;
            multiplier2 = 17.3 / 100;
            break;
        case 12:
            multiplier1 = 44.52 / 100;
            multiplier2 = 18.21 / 100;
            break;
        case 13:
            multiplier1 = 47.3 / 100;
            multiplier2 = 19.35 / 100;
            break;
    }
    let attack1 = { Multiplier: multiplier1, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalBurst" };
    let attack2 = { Multiplier: multiplier2, Element: "HydroDMGBonus", Scaling: "HP", isReaction: false, type: "ElementalBurst" };
    let dmg = dmgCalc(attack1, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Discipline of the Supreme Arbitration") {
            let currentBonus = buff.Value;
            let sourewaterDroplets = 6;
            let currentHP = buff.currentHP;
            character.advancedstats.elementalBonuses[1].Value -= currentBonus;
            //Calc new bonus
            let healing = character.HP() * 0.16 * sourewaterDroplets;
            currentHP = currentHP + healing;
            if (currentHP > character.HP())
                currentHP = character.HP();
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
    return dmg;
}

function holisticRevivification(character) {
    let multiplier1 = 0;
    let healing = 0;
    let shield = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            multiplier1 = 97.06 / 100;
            healing = (((character.HP() * 5.2) / 100) + 500.74408);
            shield = (((character.HP() * 0.8) / 100) + 77.03752);
            break;
        case 2:
            multiplier1 = 104.34 / 100;
            healing = (((character.HP() * 5.59) / 100) + 550.82544);
            shield = (((character.HP() * 0.86) / 100) + 84.74235);
            break;
        case 3:
            multiplier1 = 111.62 / 100;
            healing = (((character.HP() * 5.98) / 100) + 605.08026);
            shield = (((character.HP() * 0.92) / 100) + 93.08924);
            break;
        case 4:
            multiplier1 = 121.33 / 100;
            healing = (((character.HP() * 6.5) / 100) + 663.50854);
            shield = (((character.HP() * 1) / 100) + 102.0782);
            break;
        case 5:
            multiplier1 = 128.61 / 100;
            healing = (((character.HP() * 6.89) / 100) + 726.1102);
            shield = (((character.HP() * 1.06) / 100) + 111.70923);
            break;
        case 6:
            multiplier1 = 135.89 / 100;
            healing = (((character.HP() * 7.28) / 100) + 792.8854);
            shield = (((character.HP() * 1.12) / 100) + 121.98233);
            break;
        case 7:
            multiplier1 = 145.6 / 100;
            healing = (((character.HP() * 7.8) / 100) + 863.834);
            shield = (((character.HP() * 1.2) / 100) + 132.89749);
            break;
        case 8:
            multiplier1 = 155.3 / 100;
            healing = (((character.HP() * 8.32) / 100) + 938.95605);
            shield = (((character.HP() * 1.28) / 100) + 144.45473);
            break;
        case 9:
            multiplier1 = 165.01 / 100;
            healing = (((character.HP() * 8.84) / 100) + 1018.2515);
            shield = (((character.HP() * 1.36) / 100) + 156.65404);
            break;
        case 10:
            multiplier1 = 174.72 / 100;
            healing = (((character.HP() * 9.36) / 100) + 1101.7205);
            shield = (((character.HP() * 1.44) / 100) + 169.4954);
            break;
        case 11:
            multiplier1 = 184.42 / 100;
            healing = (((character.HP() * 9.88) / 100) + 1189.3629);
            shield = (((character.HP() * 1.52) / 100) + 182.97885);
            break;
        case 12:
            multiplier1 = 194.13 / 100;
            healing = (((character.HP() * 10.4) / 100) + 1281.1787);
            shield = (((character.HP() * 1.6) / 100) + 197.10435);
            break;
        case 13:
            multiplier1 = 206.26 / 100;
            healing = (((character.HP() * 11.05) / 100) + 1377.168);
            shield = (((character.HP() * 1.7) / 100) + 211.87193);
            break;
    }
    let attack1 = { Multiplier: multiplier1, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack1, character) * numberOfEnemies;
    for (buff of character.currentBuffs) {
        if (buff.Type == "All things Are of the Earth") {
            //2% bonus per 1000 HP not exceeding 50000
            let hpTicks = character.HP() / 1000;
            if (hpTicks > 50)
                hpTicks = 50;
            let transformitiveBonus = hpTicks * 2;
            let aggravateSpredBonus = hpTicks * 0.8;
            buff.Value = { transformitiveBonus: transformitiveBonus };
            character.currentBuffs.push({ Type: "Aggravate", Value: aggravateSpredBonus });
            character.currentBuffs.push({ Type: "Spread", Value: aggravateSpredBonus });
        }
    }
    dmg = dmgCalc(attack1, character) * numberOfEnemies * 4;
    shield = shield * character.advancedstats.shieldStrength * 5;
    let heal = healing * character.advancedstats.healingBonus * 5;
    return { dmg: dmg, shield: shield, heal: heal };
}

function sacredRiteWagtailsTide(character) {
    let multiplier = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            multiplier = 6.61 / 100;
            break;
        case 2:
            multiplier = 7.11 / 100;
            break;
        case 3:
            multiplier = 7.6 / 100;
            break;
        case 4:
            multiplier = 8.26 / 100;
            break;
        case 5:
            multiplier = 8.76 / 100;
            break;
        case 6:
            multiplier = 9.25 / 100;
            break;
        case 7:
            multiplier = 9.92 / 100;
            break;
        case 8:
            multiplier = 10.58 / 100;
            break;
        case 9:
            multiplier = 11.24 / 100;
            break;
        case 10:
            multiplier = 11.9 / 100;
            break;
        case 11:
            multiplier = 12.56 / 100;
            break;
        case 12:
            multiplier = 13.22 / 100;
            break;
        case 13:
            multiplier = 14.05 / 100;
            break;
    }
    let attack = { Multiplier: multiplier, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    character.currentBuffs.push({ Type: "DMGBonus%", Value: 20 });
    for (buff of character.currentBuffs) {
        if (buff.Type == "Celestial Dome of Sand") {
            //1% per 1000 HP
            let normalAttackBuff = Math.floor(character.HP() / 1000);
            character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: normalAttackBuff });

        }
    }
    character.normalAttack1.element = "HydroDMGBonus";
    character.normalAttack2.element = "HydroDMGBonus";
    character.normalAttack3.element = "HydroDMGBonus";
    character.normalAttack4.element = "HydroDMGBonus";
    character.normalAttack5.element = "HydroDMGBonus";
    dmg += dmgCalc(attack, character) * numberOfEnemies * 3;
    return dmg;
}

function depthClarionDice(character) {
    let multiplier1 = 0;
    let multiplier2 = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            multiplier1 = 7.31 / 100;
            multiplier2 = 4.87 / 100;
            break;
        case 2:
            multiplier1 = 7.86 / 100;
            multiplier2 = 5.24 / 100;
            break;
        case 3:
            multiplier1 = 8.4 / 100;
            multiplier2 = 5.6 / 100;
            break;
        case 4:
            multiplier1 = 9.13 / 100;
            multiplier2 = 6.09 / 100;
            break;
        case 5:
            multiplier1 = 9.68 / 100;
            multiplier2 = 6.46 / 100;
            break;
        case 6:
            multiplier1 = 10.23 / 100;
            multiplier2 = 6.82 / 100;
            break;
        case 7:
            multiplier1 = 10.96 / 100;
            multiplier2 = 7.31 / 100;
            break;
        case 8:
            multiplier1 = 11.69 / 100;
            multiplier2 = 7.8 / 100;
            break;
        case 9:
            multiplier1 = 12.42 / 100;
            multiplier2 = 8.28 / 100;
            break;
        case 10:
            multiplier1 = 13.15 / 100;
            multiplier2 = 8.77 / 100;
            break;
        case 11:
            multiplier1 = 13.89 / 100;
            multiplier2 = 9.26 / 100;
            break;
        case 12:
            multiplier1 = 14.62 / 100;
            multiplier2 = 9.74 / 100;
            break;
        case 13:
            multiplier1 = 15.53 / 100;
            multiplier2 = 10.35 / 100;
            break;
    }
    let attack1 = { Multiplier: multiplier1, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalBurst" };
    let attack2 = { Multiplier: multiplier2, Element: "HydroDMGBonus", Scaling: "HP", isReaction: false, type: "ElementalBurst" };
    let dmg = dmgCalc(attack1, character) * numberOfEnemies;//Initial
    let hasBuff = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Adapt With Ease") {
            hasBuff = true;
            character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 1 });
            break;
        }
    }
    for (let index = 0; index < 15 * 3; index++) {
        if (index == 0 || index % 3 == 0)
            attack2.isReaction = true;
        else
            attack2.isReaction = false;
        dmg += dmgCalc(attack2, character);
        //push buff
        if (hasBuff && index % 3 == 0 && index <= (14 * 3)) {
            character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: 3.5 });
        }

    }
    return dmg;
}

function leonineBite(character) {
    let flameManesFistDMG = 0;
    let incinerationDriveDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            flameManesFistDMG = (character.attack() * (98.7 / 100)) + (character.HP() * (1.69 / 100));
            incinerationDriveDMG = (character.attack() * (139.3 / 100)) + (character.HP() * (2.39 / 100));
            break;
        case 2:
            flameManesFistDMG = (character.attack() * (106.1 / 100)) + (character.HP() * (1.82 / 100));
            incinerationDriveDMG = (character.attack() * (149.75 / 100)) + (character.HP() * (2.57 / 100));
            break;
        case 3:
            flameManesFistDMG = (character.attack() * (113.5 / 100)) + (character.HP() * (1.95 / 100));
            incinerationDriveDMG = (character.attack() * (160.19 / 100)) + (character.HP() * (2.75 / 100));
            break;
        case 4:
            flameManesFistDMG = (character.attack() * (123.37 / 100)) + (character.HP() * (2.11 / 100));
            incinerationDriveDMG = (character.attack() * (174.13 / 100)) + (character.HP() * (2.99 / 100));
            break;
        case 5:
            flameManesFistDMG = (character.attack() * (130.78 / 100)) + (character.HP() * (2.24 / 100));
            incinerationDriveDMG = (character.attack() * (184.57 / 100)) + (character.HP() * (3.16 / 100));
            break;
        case 6:
            flameManesFistDMG = (character.attack() * (138.18 / 100)) + (character.HP() * (2.37 / 100));
            incinerationDriveDMG = (character.attack() * (195.02 / 100)) + (character.HP() * (3.34 / 100));
            break;
        case 7:
            flameManesFistDMG = (character.attack() * (148.05 / 100)) + (character.HP() * (2.54 / 100));
            incinerationDriveDMG = (character.attack() * (208.95 / 100)) + (character.HP() * (3.58 / 100));
            break;
        case 8:
            flameManesFistDMG = (character.attack() * (157.92 / 100)) + (character.HP() * (2.71 / 100));
            incinerationDriveDMG = (character.attack() * (222.88 / 100)) + (character.HP() * (3.82 / 100));
            break;
        case 9:
            flameManesFistDMG = (character.attack() * (167.79 / 100)) + (character.HP() * (2.88 / 100));
            incinerationDriveDMG = (character.attack() * (236.81 / 100)) + (character.HP() * (4.06 / 100));
            break;
        case 10:
            flameManesFistDMG = (character.attack() * (177.66 / 100)) + (character.HP() * (3.05 / 100));
            incinerationDriveDMG = (character.attack() * (250.74 / 100)) + (character.HP() * (4.3 / 100));
            break;
        case 11:
            flameManesFistDMG = (character.attack() * (187.53 / 100)) + (character.HP() * (3.21 / 100));
            incinerationDriveDMG = (character.attack() * (264.67 / 100)) + (character.HP() * (4.54 / 100));
            break;
        case 12:
            flameManesFistDMG = (character.attack() * (197.4 / 100)) + (character.HP() * (3.38 / 100));
            incinerationDriveDMG = (character.attack() * (278.6 / 100)) + (character.HP() * (4.78 / 100));
            break;
        case 13:
            flameManesFistDMG = (character.attack() * (209.74 / 100)) + (character.HP() * (3.6 / 100));
            incinerationDriveDMG = (character.attack() * (296.01 / 100)) + (character.HP() * (5.07 / 100));
            break;
    }
    let attack1 = { Multiplier: flameManesFistDMG, Element: "PyroDMGBonus", Scaling: "Combined", isReaction: false, type: "ElementalBurst" };
    let attack2 = { Multiplier: incinerationDriveDMG, Element: "PyroDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalBurst" };

    let dmg = dmgCalc(attack1, character) * numberOfEnemies * 10;
    dmg += dmgCalc(attack2, character) * numberOfEnemies;
    return { dmg: dmg };
}

function letThePeopleRejoice(character) {
    let skillDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 11.41 / 100;
            break;
        case 2:
            skillDMG = 12.26 / 100;
            break;
        case 3:
            skillDMG = 13.12 / 100;
            break;
        case 4:
            skillDMG = 14.26 / 100;
            break;
        case 5:
            skillDMG = 15.11 / 100;
            break;
        case 6:
            skillDMG = 15.97 / 100;
            break;
        case 7:
            skillDMG = 17.11 / 100;
            break;
        case 8:
            skillDMG = 18.25 / 100;
            break;
        case 9:
            skillDMG = 19.39 / 100;
            break;
        case 10:
            skillDMG = 20.53 / 100;
            break;
        case 11:
            skillDMG = 21.67 / 100;
            break;
        case 12:
            skillDMG = 22.81 / 100;
            break;
        case 13:
            skillDMG = 24.24 / 100;
            break;
    }
    let attack = { Multiplier: skillDMG, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    return { dmg: dmg };


}

function trumpCardKitty(character) {
    let explosionDMG = 0;
    let leapDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            explosionDMG = 201.82 / 100;
            leapDMG = 43.25 / 100;
            break;
        case 2:
            explosionDMG = 216.96 / 100;
            leapDMG = 46.49 / 100;
            break;
        case 3:
            explosionDMG = 232.1 / 100;
            leapDMG = 49.74 / 100;
            break;
        case 4:
            explosionDMG = 252.28 / 100;
            leapDMG = 54.06 / 100;
            break;
        case 5:
            explosionDMG = 267.42 / 100;
            leapDMG = 57.3 / 100;
            break;
        case 6:
            explosionDMG = 282.55 / 100;
            leapDMG = 60.55 / 100;
            break;
        case 7:
            explosionDMG = 302.74 / 100;
            leapDMG = 64.87 / 100;
            break;
        case 8:
            explosionDMG = 322.92 / 100;
            leapDMG = 69.2 / 100;
            break;
        case 9:
            explosionDMG = 343.1 / 100;
            leapDMG = 73.52 / 100;
            break;
        case 10:
            explosionDMG = 363.28 / 100;
            leapDMG = 77.85 / 100;
            break;
        case 11:
            explosionDMG = 383.47 / 100;
            leapDMG = 82.17 / 100;
            break;
        case 12:
            explosionDMG = 403.65 / 100;
            leapDMG = 86.5 / 100;
            break;
        case 13:
            explosionDMG = 428.88 / 100;
            leapDMG = 91.9 / 100;
            break;
    }
    let attack1 = { Multiplier: explosionDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let attack2 = { Multiplier: leapDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalBurst" };
    let dmg = dmgCalc(attack1, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies * 12;
    return dmg;
}

function stillPhotoComprehensiveConfirmation(character) {
    let castHealing = 0;
    let skillDMG = 0;
    let continHealing = 0;
    let kameraDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            castHealing = character.attack() * (256.57 / 100) + 1608;
            skillDMG = 77.62 / 100;
            continHealing = character.attack() * (9.22 / 100) + 57;
            kameraDMG = 6.47 / 100;
            break;
        case 2:
            castHealing = character.attack() * (275.82 / 100) + 1769;
            skillDMG = 83.44 / 100;
            continHealing = character.attack() * (9.91 / 100) + 63;
            kameraDMG = 6.95 / 100;
            break;
        case 3:
            castHealing = character.attack() * (295.06 / 100) + 1944;
            skillDMG = 89.26 / 100;
            continHealing = character.attack() * (0 / 100) + 69;
            kameraDMG = 7.44 / 100;
            break;
        case 4:
            castHealing = character.attack() * (320.72 / 100) + 2131;
            skillDMG = 97.02 / 100;
            continHealing = character.attack() * (11.52 / 100) + 76;
            kameraDMG = 8.08 / 100;
            break;
        case 5:
            castHealing = character.attack() * (339.96 / 100) + 2332;
            skillDMG = 102.84 / 100;
            continHealing = character.attack() * (12.21 / 100) + 83;
            kameraDMG = 8.57 / 100;
            break;
        case 6:
            castHealing = character.attack() * (359.2 / 100) + 2547;
            skillDMG = 108.66 / 100;
            continHealing = character.attack() * (12.9 / 100) + 91;
            kameraDMG = 9.06 / 100;
            break;
        case 7:
            castHealing = character.attack() * (384.86 / 100) + 2775;
            skillDMG = 116.42 / 100;
            continHealing = character.attack() * (13.82 / 100) + 99;
            kameraDMG = 9.7 / 100;
            break;
        case 8:
            castHealing = character.attack() * (410.52 / 100) + 3016;
            skillDMG = 124.19 / 100;
            continHealing = character.attack() * (14.75 / 100) + 108;
            kameraDMG = 10.35 / 100;
            break;
        case 9:
            castHealing = character.attack() * (436.17 / 100) + 3271;
            skillDMG = 131.95 / 100;
            continHealing = character.attack() * (15.67 / 100) + 117;
            kameraDMG = 11 / 100;
            break;
        case 10:
            castHealing = character.attack() * (461.83 / 100) + 3539;
            skillDMG = 139.71 / 100;
            continHealing = character.attack() * (16.59 / 100) + 126;
            kameraDMG = 11.64 / 100;
            break;
        case 11:
            castHealing = character.attack() * (487.49 / 100) + 3820;
            skillDMG = 147.47 / 100;
            continHealing = character.attack() * (17.51 / 100) + 136;
            kameraDMG = 12.29 / 100;
            break;
        case 12:
            castHealing = character.attack() * (513.15 / 100) + 4115;
            skillDMG = 155.23 / 100;
            continHealing = character.attack() * (18.43 / 100) + 147;
            kameraDMG = 12.94 / 100;
            break;
        case 13:
            castHealing = character.attack() * (545.22 / 100) + 4424;
            skillDMG = 164.93 / 100;
            continHealing = character.attack() * (19.58 / 100) + 158;
            kameraDMG = 13.74 / 100;
            break;
    }
    let attack1 = { Multiplier: skillDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let attack2 = { Multiplier: kameraDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalBurst" };
    let totalHeal = castHealing + (continHealing * 9) * (1 + (character.advancedstats.healingBonus / 100));
    let dmg = dmgCalc(attack1, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies * 9;
    return { dmg: dmg, healing: totalHeal };
}

function ringOfBurstingGrenades(character) {
    let explosiveGrandeDMG = 0;
    let secondaryExplosiveDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            explosiveGrandeDMG = 368.16 / 100;
            secondaryExplosiveDMG = 49.09 / 100;
            break;
        case 2:
            explosiveGrandeDMG = 395.77 / 100;
            secondaryExplosiveDMG = 52.77 / 100;
            break;
        case 3:
            explosiveGrandeDMG = 423.38 / 100;
            secondaryExplosiveDMG = 56.45 / 100;
            break;
        case 4:
            explosiveGrandeDMG = 460.2 / 100;
            secondaryExplosiveDMG = 61.36 / 100;
            break;
        case 5:
            explosiveGrandeDMG = 487.81 / 100;
            secondaryExplosiveDMG = 65.04 / 100;
            break;
        case 6:
            explosiveGrandeDMG = 515.42 / 100;
            secondaryExplosiveDMG = 68.72 / 100;
            break;
        case 7:
            explosiveGrandeDMG = 552.24 / 100;
            secondaryExplosiveDMG = 73.63 / 100;
            break;
        case 8:
            explosiveGrandeDMG = 589.06 / 100;
            secondaryExplosiveDMG = 78.54 / 100;
            break;
        case 9:
            explosiveGrandeDMG = 625.87 / 100;
            secondaryExplosiveDMG = 83.45 / 100;
            break;
        case 10:
            explosiveGrandeDMG = 662.69 / 100;
            secondaryExplosiveDMG = 88.36 / 100;
            break;
        case 11:
            explosiveGrandeDMG = 699.5 / 100;
            secondaryExplosiveDMG = 93.27 / 100;
            break;
        case 12:
            explosiveGrandeDMG = 736.32 / 100;
            secondaryExplosiveDMG = 98.18 / 100;
            break;
        case 13:
            explosiveGrandeDMG = 782.34 / 100;
            secondaryExplosiveDMG = 104.31 / 100;
            break;
    }
    let attack1 = { Multiplier: explosiveGrandeDMG, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let attack2 = { Multiplier: secondaryExplosiveDMG, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalBurst" };
    let dmg = dmgCalc(attack1, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies * 8;
    return { dmg: dmg };
}
function hiyokuTwinBlades(character) {
    let skillDMGAtk = 0;
    let skillDMGDef = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMGAtk = 256.32 / 100;
            skillDMGDef = 320.4 / 100;
            break;
        case 2:
            skillDMGAtk = 275.54 / 100;
            skillDMGDef = 344.43 / 100;
            break;
        case 3:
            skillDMGAtk = 294.77 / 100;
            skillDMGDef = 368.46 / 100;
            break;
        case 4:
            skillDMGAtk = 320.4 / 100;
            skillDMGDef = 400.5 / 100;
            break;
        case 5:
            skillDMGAtk = 339.62 / 100;
            skillDMGDef = 424.53 / 100;
            break;
        case 6:
            skillDMGAtk = 358.85 / 100;
            skillDMGDef = 448.56 / 100;
            break;
        case 7:
            skillDMGAtk = 384.48 / 100;
            skillDMGDef = 480.6 / 100;
            break;
        case 8:
            skillDMGAtk = 410.11 / 100;
            skillDMGDef = 512.64 / 100;
            break;
        case 9:
            skillDMGAtk = 435.74 / 100;
            skillDMGDef = 544.68 / 100;
            break;
        case 10:
            skillDMGAtk = 435.74 / 100;
            skillDMGDef = 544.68 / 100;
            break;
        case 11:
            skillDMGAtk = 461.38 / 100;
            skillDMGDef = 576.72 / 100;
            break;
        case 12:
            skillDMGAtk = 487.01 / 100;
            skillDMGDef = 608.76 / 100;
            break;
        case 13:
            skillDMGAtk = 512.64 / 100;
            skillDMGDef = 640.8 / 100;
            break;
    }
    let attack = { Multiplier: skillDMGAtk * character.attack(), Element: "PyroDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalBurst" }
    let attack2 = { Multiplier: skillDMGDef * character.DEF(), Element: "PyroDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies;
    return dmg;

}

function lastLightFall(character) {
    let skillDMG = 0;
    let bondOfLifeGain = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 126.88 / 100;
            bondOfLifeGain = 66;
            break;
        case 2:
            skillDMG = 136.4 / 100;
            bondOfLifeGain = 72;
            break;
        case 3:
            skillDMG = 145.91 / 100;
            bondOfLifeGain = 78;
            break;
        case 4:
            skillDMG = 158.6 / 100;
            bondOfLifeGain = 84;
            break;
        case 5:
            skillDMG = 168.12 / 100;
            bondOfLifeGain = 90;
            break;
        case 6:
            skillDMG = 177.63 / 100;
            bondOfLifeGain = 96;
            break;
        case 7:
            skillDMG = 190.32 / 100;
            bondOfLifeGain = 102;
            break;
        case 8:
            skillDMG = 203.01 / 100;
            bondOfLifeGain = 108;
            break;
        case 9:
            skillDMG = 215.7 / 100;
            bondOfLifeGain = 114;
            break;
        case 10:
            skillDMG = 228.38 / 100;
            bondOfLifeGain = 120;
            break;
        case 11:
            skillDMG = 241.07 / 100;
            bondOfLifeGain = 126;
            break;
        case 12:
            skillDMG = 253.76 / 100;
            bondOfLifeGain = 132;
            break;
        case 13:
            skillDMG = 269.62 / 100;
            bondOfLifeGain = 138;
            break;
    }
    let attack = { Multiplier: skillDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    character.applyBondOfLife(bondOfLifeGain);
    for (let i = 0; i < 5; i++) {
        if (i == 0 || i % 3) {
            attack.isReaction = true;
        }
        else {
            attack.isReaction = false;
        }
        dmg += dmgCalc(attack, character) * numberOfEnemies;
    }
    return dmg;
}

function sacredRiteWolfsSwiftness(character) {
    let oneHitDMG = 0;
    let twoHitDMG = 0;
    let threeHitDMG = 0;
    let fourHitDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            oneHitDMG = 78.28 / 100;
            twoHitDMG = 82.47 / 100;
            threeHitDMG = 104.63 / 100;
            fourHitDMG = 51.69 / 100;
            break;
        case 2:
            oneHitDMG = 84.66 / 100;
            twoHitDMG = 89.18 / 100;
            threeHitDMG = 113.15 / 100;
            fourHitDMG = 55.9 / 100;
            break;
        case 3:
            oneHitDMG = 91.03 / 100;
            twoHitDMG = 95.89 / 100;
            threeHitDMG = 121.67 / 100;
            fourHitDMG = 60.11 / 100;
            break;
        case 4:
            oneHitDMG = 100.13 / 100;
            twoHitDMG = 105.48 / 100;
            threeHitDMG = 133.83 / 100;
            fourHitDMG = 66.12 / 100;
            break;
        case 5:
            oneHitDMG = 106.5 / 100;
            twoHitDMG = 112.2 / 100;
            threeHitDMG = 142.35 / 100;
            fourHitDMG = 70.33 / 100;
            break;
        case 6:
            oneHitDMG = 113.78 / 100;
            twoHitDMG = 119.87 / 100;
            threeHitDMG = 152.08 / 100;
            fourHitDMG = 75.14 / 100;
            break;
        case 7:
            oneHitDMG = 123.8 / 100;
            twoHitDMG = 130.42 / 100;
            threeHitDMG = 165.47 / 100;
            fourHitDMG = 81.75 / 100;
            break;
        case 8:
            oneHitDMG = 133.81 / 100;
            twoHitDMG = 140.96 / 100;
            threeHitDMG = 178.85 / 100;
            fourHitDMG = 88.36 / 100;
            break;
        case 9:
            oneHitDMG = 143.82 / 100;
            twoHitDMG = 151.51 / 100;
            threeHitDMG = 192.23 / 100;
            fourHitDMG = 94.97 / 100;
            break;
        case 10:
            oneHitDMG = 154.75 / 100;
            twoHitDMG = 163.02 / 100;
            threeHitDMG = 206.83 / 100;
            fourHitDMG = 102.19 / 100;
            break;
        case 11:
            oneHitDMG = 165.67 / 100;
            twoHitDMG = 174.53 / 100;
            threeHitDMG = 221.43 / 100;
            fourHitDMG = 109.4 / 100;
            break;
        case 12:
            oneHitDMG = 176.59 / 100;
            twoHitDMG = 186.03 / 100;
            threeHitDMG = 236.03 / 100;
            fourHitDMG = 116.61 / 100;
            break;
        case 13:
            oneHitDMG = 187.52 / 100;
            twoHitDMG = 197.54 / 100;
            threeHitDMG = 250.63 / 100;
            fourHitDMG = 123.83 / 100;
            break;
    }
    character.normalAttack1.Multiplier = function () { return oneHitDMG };
    character.normalAttack1.Element = "ElectroDMGBonus";
    character.normalAttack2.isReaction = true;
    character.normalAttack2.Multiplier = function () { return twoHitDMG };
    character.normalAttack2.Element = "ElectroDMGBonus";
    character.normalAttack3.Multiplier = function () { return threeHitDMG };
    character.normalAttack3.Element = "ElectroDMGBonus";
    character.normalAttack4.Multiplier = function () { return fourHitDMG };
    character.normalAttack4.Element = "ElectroDMGBonus";

    //Buffs
    character.currentBuffs.push({ Type: "Pactsworn Pathclearer", Value: 0 });//ult state for skill
    let hasA4 = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Authority Over the Nine Bows") {
            hasA4 = true;
            break;
        }
    }
    if (hasA4) {
        let flatDamage = (250 / 100) * character.EM();
        character.currentBuffs.push({ Type: "FlatDMG", Value: flatDamage, for: "Duststalker Bolt" });
        let flatDamage2 = (150 / 100) * character.EM();
        character.currentBuffs.push({ Type: "FlatDMG", Value: flatDamage2, for: "NormalAttack" });
    }
    return 0;
}

function alcazarzaraysExactitude(character) {
    let connectorDMG = 0;
    let conHealing = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            connectorDMG = 15.88 / 100;
            conHealing = ((6.67 / 100) * character.HP()) + 641.9;
            break;
        case 2:
            connectorDMG = 17.07 / 100;
            conHealing = ((7.17 / 100) * character.HP()) + 706.1;
            break;
        case 3:
            connectorDMG = 18.26 / 100;
            conHealing = ((7.67 / 100) * character.HP()) + 775.7;
            break;
        case 4:
            connectorDMG = 19.85 / 100;
            conHealing = ((8.34 / 100) * character.HP()) + 850.6;
            break;
        case 5:
            connectorDMG = 21.04 / 100;
            conHealing = ((8.84 / 100) * character.HP()) + 930.9;
            break;
        case 6:
            connectorDMG = 22.24 / 100;
            conHealing = ((9.34 / 100) * character.HP()) + 1016;
            break;
        case 7:
            connectorDMG = 23.82 / 100;
            conHealing = ((10.01 / 100) * character.HP()) + 1107;
            break;
        case 8:
            connectorDMG = 25.41 / 100;
            conHealing = ((10.67 / 100) * character.HP()) + 1203;
            break;
        case 9:
            connectorDMG = 27 / 100;
            conHealing = ((11.34 / 100) * character.HP()) + 1305;
            break;
        case 10:
            connectorDMG = 28.59 / 100;
            conHealing = ((12.01 / 100) * character.HP()) + 1412;
            break;
        case 11:
            connectorDMG = 30.18 / 100;
            conHealing = ((12.67 / 100) * character.HP()) + 1524;
            break;
        case 12:
            connectorDMG = 31.76 / 100;
            conHealing = ((13.34 / 100) * character.HP()) + 1642;
            break;
        case 13:
            connectorDMG = 33.75 / 100;
            conHealing = ((14.17 / 100) * character.HP()) + 1765;
            break;
    }
    let attack = { Multiplier: connectorDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = 0;
    for (let i = 0; i < 30; i++) {
        if (i == 0 || i % 3 == 0) {
            attack.isReaction = true;
        }
        else {
            attack.isReaction = false;
        }
        dmg += dmgCalc(attack, character) * numberOfEnemies;
    }
    return { dmg: dmg, healing: conHealing * 6 };
}

function aromaticExplication(character) {
    let lumiDouceCaselvl3DMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            lumiDouceCaselvl3DMG = 217.2 / 100;
            break;
        case 2:
            lumiDouceCaselvl3DMG = 233.49 / 100;
            break;
        case 3:
            lumiDouceCaselvl3DMG = 249.78 / 100;
            break;
        case 4:
            lumiDouceCaselvl3DMG = 271.5 / 100;
            break;
        case 5:
            lumiDouceCaselvl3DMG = 287.79 / 100;
            break;
        case 6:
            lumiDouceCaselvl3DMG = 304.08 / 100;
            break;
        case 7:
            lumiDouceCaselvl3DMG = 325.8 / 100;
            break;
        case 8:
            lumiDouceCaselvl3DMG = 347.52 / 100;
            break;
        case 9:
            lumiDouceCaselvl3DMG = 369.24 / 100;
            break;
        case 10:
            lumiDouceCaselvl3DMG = 390.96 / 100;
            break;
        case 11:
            lumiDouceCaselvl3DMG = 412.68 / 100;
            break;
        case 12:
            lumiDouceCaselvl3DMG = 434.4 / 100;
            break;
        case 13:
            lumiDouceCaselvl3DMG = 461.55 / 100;
            break;
    }
    let attack = { Multiplier: lumiDouceCaselvl3DMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = 0;
    for (let i = 0; i < 9; i++) {
        dmg += dmgCalc(attack, character) * (numberOfEnemies - 1);//-1 because cooldown on targetable
        attack.isReaction = false;
    }
    return dmg;
}
function theWindsSecretWay(character) {
    let skillDMG = 0;
    let anemoBonus = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 377.6 / 100;
            anemoBonus = 18;
            break;
        case 2:
            skillDMG = 405.92 / 100;
            anemoBonus = 19.35;
            break;
        case 3:
            skillDMG = 434.24 / 100;
            anemoBonus = 20.7;
            break;
        case 4:
            skillDMG = 472 / 100;
            anemoBonus = 22.5;
            break;
        case 5:
            skillDMG = 500.32 / 100;
            anemoBonus = 23.85;
            break;
        case 6:
            skillDMG = 528.64 / 100;
            anemoBonus = 25.2;
            break;
        case 7:
            skillDMG = 566.4 / 100;
            anemoBonus = 27;
            break;
        case 8:
            skillDMG = 604.16 / 100;
            anemoBonus = 28.8;
            break;
        case 9:
            skillDMG = 641.92 / 100;
            anemoBonus = 30.6;
            break;
        case 10:
            skillDMG = 679.68 / 100;
            anemoBonus = 32.4;
            break;
        case 11:
            skillDMG = 717.44 / 100;
            anemoBonus = 34.2;
            break;
        case 12:
            skillDMG = 755.2 / 100;
            anemoBonus = 36;
            break;
        case 13:
            skillDMG = 802.4 / 100;
            anemoBonus = 38.25;
            break;
    }
    let attack = { Multiplier: skillDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    character.currentBuffs.push({ Type: "AnemoBonus", Value: anemoBonus });
    let atkBuff = 0;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Lost Wisdom of the Seven Caverns") {
            atkBuff = character.baseAttack * (32 / 100);
        }
    }
    return { dmg: dmg, attackBuff: (anemoBonus * 100) + atkBuff };
}
function shadowhuntersAmbush(character) {
    let skillDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 318.4 / 100;
            break;
        case 2:
            skillDMG = 342.28 / 100;
            break;
        case 3:
            skillDMG = 366.16 / 100;
            break;
        case 4:
            skillDMG = 398 / 100;
            break;
        case 5:
            skillDMG = 421.88 / 100;
            break;
        case 6:
            skillDMG = 445.76 / 100;
            break;
        case 7:
            skillDMG = 477.6 / 100;
            break;
        case 8:
            skillDMG = 509.44 / 100;
            break;
        case 9:
            skillDMG = 541.28 / 100;
            break;
        case 10:
            skillDMG = 573.12 / 100;
            break;
        default:
            skillDMG = 573.12 / 100;
            break;
    }
    let attack = { Multiplier: skillDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    return dmg;
}

function gyoeiNarukamiKariyamaRite(character) {
    let singleInstanceDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            singleInstanceDMG = 3.6 / 100;
            break;
        case 2:
            singleInstanceDMG = 3.88 / 100;
            break;
        case 3:
            singleInstanceDMG = 4.15 / 100;
            break;
        case 4:
            singleInstanceDMG = 4.51 / 100;
            break;
        case 5:
            singleInstanceDMG = 4.78 / 100;
            break;
        case 6:
            singleInstanceDMG = 5.05 / 100;
            break;
        case 7:
            singleInstanceDMG = 5.41 / 100;
            break;
        case 8:
            singleInstanceDMG = 5.77 / 100;
            break;
        case 9:
            singleInstanceDMG = 6.13 / 100;
            break;
        case 10:
            singleInstanceDMG = 6.49 / 100;
            break;
        case 11:
            singleInstanceDMG = 6.85 / 100;
            break;
        case 12:
            singleInstanceDMG = 7.21 / 100;
            break;
        case 13:
            singleInstanceDMG = 7.66 / 100;
            break;
    }
    let attack = { Multiplier: singleInstanceDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = 0;
    for (let i = 0; i < 12; i++) {
        if (i % 3 == 0 || i == 0) {
            attack.isReaction = true;
        }
        else {
            attack.isReaction = false;
        }
        dmg += dmgCalc(attack, character) * 2;//Max 2 enemies hit
    }
    return { dmg: dmg };
}

function suannisGildedDance(character) {
    let suanniManChaiSmashDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            suanniManChaiSmashDMG = 370.4 / 100;
            break;
        case 2:
            suanniManChaiSmashDMG = 398.18 / 100;
            break;
        case 3:
            suanniManChaiSmashDMG = 425.96 / 100;
            break;
        case 4:
            suanniManChaiSmashDMG = 463 / 100;
            break;
        case 5:
            suanniManChaiSmashDMG = 490.78 / 100;
            break;
        case 6:
            suanniManChaiSmashDMG = 518.56 / 100;
            break;
        case 7:
            suanniManChaiSmashDMG = 555.6 / 100;
            break;
        case 8:
            suanniManChaiSmashDMG = 592.64 / 100;
            break;
        case 9:
            suanniManChaiSmashDMG = 629.68 / 100;
            break;
        case 10:
            suanniManChaiSmashDMG = 666.72 / 100;
            break;
        case 11:
            suanniManChaiSmashDMG = 703.76 / 100;
            break;
        case 12:
            suanniManChaiSmashDMG = 740.8 / 100;
            break;
        case 13:
            suanniManChaiSmashDMG = 787.1 / 100;
            break;
    }
    let attack = { Multiplier: suanniManChaiSmashDMG, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    return dmg;
}

function paintedDome(character) {
    let skillDMG = 0;
    let dendroCoreBonus = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 160 / 100;
            dendroCoreBonus = 27.49;
            break;
        case 2:
            skillDMG = 172 / 100;
            dendroCoreBonus = 29.55;
            break;
        case 3:
            skillDMG = 184 / 100;
            dendroCoreBonus = 31.61;
            break;
        case 4:
            skillDMG = 200 / 100;
            dendroCoreBonus = 34.36;
            break;
        case 5:
            skillDMG = 212 / 100;
            dendroCoreBonus = 36.42;
            break;
        case 6:
            skillDMG = 224 / 100;
            dendroCoreBonus = 38.48;
            break;
        case 7:
            skillDMG = 240 / 100;
            dendroCoreBonus = 41.23;
            break;
        case 8:
            skillDMG = 256 / 100;
            dendroCoreBonus = 43.98;
            break;
        case 9:
            skillDMG = 272 / 100;
            dendroCoreBonus = 46.73;
            break;
        case 10:
            skillDMG = 288 / 100;
            dendroCoreBonus = 49.48;
            break;
        case 11:
            skillDMG = 304 / 100;
            dendroCoreBonus = 52.23;
            break;
        case 12:
            skillDMG = 320 / 100;
            dendroCoreBonus = 54.98;
            break;
        case 13:
            skillDMG = 340 / 100;
            dendroCoreBonus = 58.41;
            break;
    }
    let attack = { Multiplier: skillDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    character.currentBuffs.push({ Type: "bloomBonus", Value: dendroCoreBonus });
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    for (buff of character.currentBuffs) {
        if (buff.Type == "A Craftsman's Curious Conceptions") {
            character.currentBuffs.push({ Type: "ElementalMastery", Value: 100 });
            break;
        }
    }
    character.normalAttack1.Element = "DendroDMGBonus";
    character.normalAttack2.Element = "DendroDMGBonus";
    character.normalAttack3.Element = "DendroDMGBonus";
    return dmg;
}

function secretArtSurpriseDispatch(character) {
    let skillDMG = 0;
    let catGrassCardamomExplosioinDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 570.24 / 100;
            catGrassCardamomExplosioinDMG = 35.64 / 100;
            break;
        case 2:
            skillDMG = 613.01 / 100;
            catGrassCardamomExplosioinDMG = 38.31 / 100;
            break;
        case 3:
            skillDMG = 655.78 / 100;
            catGrassCardamomExplosioinDMG = 40.99 / 100;
            break;
        case 4:
            skillDMG = 712.8 / 100;
            catGrassCardamomExplosioinDMG = 44.55 / 100;
            break;
        case 5:
            skillDMG = 755.57 / 100;
            catGrassCardamomExplosioinDMG = 47.22 / 100;
            break;
        case 6:
            skillDMG = 798.34 / 100;
            catGrassCardamomExplosioinDMG = 49.9 / 100;
            break;
        case 7:
            skillDMG = 855.36 / 100;
            catGrassCardamomExplosioinDMG = 53.46 / 100;
            break;
        case 8:
            skillDMG = 912.38 / 100;
            catGrassCardamomExplosioinDMG = 57.02 / 100;
            break;
        case 9:
            skillDMG = 969.41 / 100;
            catGrassCardamomExplosioinDMG = 60.59 / 100;
            break;
        case 10:
            skillDMG = 1026.43 / 100;
            catGrassCardamomExplosioinDMG = 64.15 / 100;
            break;
        case 11:
            skillDMG = 1083.46 / 100;
            catGrassCardamomExplosioinDMG = 67.72 / 100;
            break;
        case 12:
            skillDMG = 1140.48 / 100;
            catGrassCardamomExplosioinDMG = 71.28 / 100;
            break;
        case 13:
            skillDMG = 1211.76 / 100;
            catGrassCardamomExplosioinDMG = 75.73 / 100;
            break;
    }
    let attack = { Multiplier: skillDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" };
    let attack2 = { Multiplier: catGrassCardamomExplosioinDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalBurst" };
    for (buff of character.currentBuffs) {
        if (buff.Type == "Pupillary Variance") {
            character.currentBuffs.push({ Type: "ElementalBurst", Value: Math.floor(character.HP() / 100) * 0.3 });
            break;
        }
    }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    for (let i = 0; i < 6; i++) {
        if (i == 0 || i % 3 == 0) {
            attack2.isReaction = true;
        }
        else {
            attack2.isReaction = false;
        }
        dmg += dmgCalc(attack2, character) * numberOfEnemies;
    }

    return { dmg: dmg };
}

function dreamoftheStarStreamShaker(character) {
    let slugDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            slugDMG =  4.65/ 100;
            break;
        case 2:
            slugDMG =  5 / 100;
            break;
        case 3:
            slugDMG =  5.35 / 100;
            break;
        case 4:
            slugDMG = 5.81 / 100;
            break;
        case 5:
            slugDMG = 6.16 / 100;
            break;
        case 6:
            slugDMG = 6.51 / 100;
            break;
        case 7:
            slugDMG = 6.97 / 100;
            break;
        case 8:
            slugDMG = 7.44 / 100;
            break;
        case 9:
            slugDMG = 7.9 / 100;
            break;
        case 10:
            slugDMG = 8.37 / 100;
            break;
        case 11:
            slugDMG = 8.83 / 100;
            break;
        case 12:
            slugDMG = 9.3 / 100;
            break;
        case 13:
            slugDMG = 9.88 / 100;
            break;
    }
    let attack = { Multiplier: slugDMG, Element: "CryoDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalBurst" };
    let dmg = 0;
    for(let i = 0; i<8;i++){
        if(i %2 == 0){
            attack.isReaction = true;
        }
        else{
            attack.isReaction = false;
        }
        dmg += dmgCalc(attack, character);
    }
    return { dmg: dmg };
}