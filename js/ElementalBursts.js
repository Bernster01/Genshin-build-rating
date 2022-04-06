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
    for (let i = 0; i < 7; i++) {
        if (i % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }
    }
    attack.Multiplier = Multiplier2
    attack.isReaction = true;
    dmg += dmgCalc(attack, Character, "ElementalBurst")
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
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst");
    attack.Multiplier = Multiplier2;
    for (let i = 1; i <= 6; i++) {
        dmg += dmgCalc(attack, Character, "ElementalBurst")
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
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst");
    let tmp = dmg;
    let stacks = 13;
    if (Character.weapon.name == "Song of Broken Pines") {
        stacks += 1
    }
    attack.Multiplier = Multiplier2 + (Multiplier3 * stacks);
    attack.isReaction = false;
    attack.Element = "PhysicalDMGBonus";
    dmg += dmgCalc(attack, Character, "ElementalBurst");
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
    let attack = { Multiplier: Multiplier2, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    attack.Multiplier = Multiplier;
    for (let i = 1; i <= 12; i++) {
        //Fischl have different ICD
        if (i % 4 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalSkill");
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character, "ElementalSkill");
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
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = 0;
    for (let i = 1; i <= 16; i++) {
        if (i % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst") * 3;
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character, "ElementalBurst") * 3;
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
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;

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
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
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
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3 * 4;

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
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    attack.Multiplier = dOT;
    dmg += dmgCalc(attack, Character, "ElementalBurst") * 5 * 3;
    if (supportingElement != null || supportingElement != undefined) {

        attack.Multiplier = elementalDmg;
        attack.Element = supportingElement;
        dmg += dmgCalc(attack, Character, "ElementalBurst") * 5 * 3;
    }
    
    return {dmg:dmg};
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
    Character.currentBuffs.forEach(buff =>{
        if(buff.Type == "Aristocratic Dignity"){
            Character.currentBuffs.push({Type:"CritRate",Value:15});
             Character.advancedstats.energyRecharge += 20;
        }
    });
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    attack.Multiplier = slashDMG;
    for (let index = 1; index <=8; index++) {
        if(index % 3 == 0){
            attack.isReaction = true;
        }
        else{
            attack.isReaction = false;
        }
        dmg+= dmgCalc(attack,Character,"ElementalBurst") * 3;
    }
    attack.Multiplier = finalDMG;
    attack.isReaction = true;
    dmg += dmgCalc(attack,Character,"ElementalBurst") * 3;

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
    
    Character.currentBuffs.push({Type:"AddativeBonusDMG",Value:Multiplier});
    if(Character.hasBuffOfType("Conqueror of Evil: Tamer of Demons")){
        Character.currentBuffs.push({Type:"AddativeBonusDMG",Value:15});
    }

    return 0;
}

function sparksnSplash(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 42.64/100;
            break;
        case 2:
            Multiplier = 45.84/100;
            break;
        case 3:
            Multiplier = 49.04/100;
            break;
        case 4:
            Multiplier = 53.3/100;
            break;
        case 5:
            Multiplier = 56.5/100;
            break;
        case 6:
            Multiplier = 59.7/100;
            break;
        case 7:
            Multiplier = 63.96/100;
            break;
        case 8:
            Multiplier = 68.22/100;
            break;
        case 9:
            Multiplier = 72.49/100;
            break;
        case 10:
            Multiplier = 76.75/100;
            break;
        case 11:
            Multiplier = 81.02/100;
            break;
        case 12:
            Multiplier = 85.28/100;
            break;
        case 13:
            Multiplier = 90.61/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = 0;
    for (let index = 1; index <= 24; index++) {
        if(index%3==0){
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }
        else{
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }
        
    }
    return dmg;
}

function lightningRose(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 36.56/100;
            break;
        case 2:
            Multiplier = 39.3/100;
            break;
        case 3:
            Multiplier = 42.04/100;
            break;
        case 4:
            Multiplier = 45.7/100;
            break;
        case 5:
            Multiplier = 48.44/100;
            break;
        case 6:
            Multiplier = 51.18/100;
            break;
        case 7:
            Multiplier = 54.84/100;
            break;
        case 8:
            Multiplier = 58.5/100;
            break;
        case 9:
            Multiplier = 62.15/100;
            break;
        case 10:
            Multiplier = 65.81/100;
            break;
        case 11:
            Multiplier = 69.46/100;
            break;
        case 12:
            Multiplier = 73.12/100;
            break;
        case 13:
            Multiplier = 77.69/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    Character.currentBuffs.push({Type: "defReduction",Value: 15});
    dmg += dmgCalc(attack, Character, "ElementalBurst") * 29;
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
            Multiplier = 884.8/ 100;
            dmgBonus = 60;
            break;
        case 13:
            Multiplier = 940.1 / 100;
            dmgBonus = 60;
            break;
    }
    Character.currentBuffs.push({Type:"AddativeBonusDMG",Value:dmgBonus});
    let attack = { Multiplier: Multiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true };
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    return dmg;
}

function starshatter(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 86.96/100;
            break;
        case 2:
            Multiplier = 93.48/100;
            break;
        case 3:
            Multiplier = 100/100;
            break;
        case 4:
            Multiplier = 108.7/100;
            break;
        case 5:
            Multiplier = 115.22/100;
            break;
        case 6:
            Multiplier = 121.74/100;
            break;
        case 7:
            Multiplier = 130.44/100;
            break;
        case 8:
            Multiplier = 139.14/100;
            break;
        case 9:
            Multiplier = 147.83/100;
            break;
        case 10:
            Multiplier = 156.53/100;
            break;
        case 11:
            Multiplier = 165.22/100;
            break;
        case 12:
            Multiplier = 173.92/100;
            break;
        case 13:
            Multiplier = 184.79/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 12;
    return dmg;
}

function sweepingTime(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    let atkBonus = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 67.2/100;
            Multipler2 = 92.8/100;
            atkBonus = Character.DEF()*0.40;
            break;
        case 2:
            Multiplier = 72.24/100;
            Multipler2 = 99.76/100;
            atkBonus = Character.DEF()*0.43;
            break;
        case 3:
            Multiplier = 77.28/100;
            Multipler2 = 106.72/100;
            atkBonus = Character.DEF()*0.46;
            break;
        case 4:
            Multiplier = 84/100;
            Multipler2 = 116/100;
            atkBonus = Character.DEF()*0.50;
            break;
        case 5:
            Multiplier = 89.04/100;
            Multipler2 = 122.96/100;
            atkBonus = Character.DEF()*0.53;
            break;
        case 6:
            Multiplier = 94.08/100;
            Multipler2 = 129.92/100;
            atkBonus = Character.DEF()*0.56;
            break;
        case 7:
            Multiplier = 100.8/100;
            Multipler2 = 139.2/100;
            atkBonus = Character.DEF()*0.60;
            break;
        case 8:
            Multiplier = 107.52/100;
            Multipler2 = 148.48/100;
            atkBonus = Character.DEF()*0.64;
            break;
        case 9:
            Multiplier = 114.24/100;
            Multipler2 = 157.76/100;
            atkBonus = Character.DEF()*0.68;
            break;
        case 10:
            Multiplier = 120.96/100;
            Multipler2 = 167.04/100;
            atkBonus = Character.DEF()*0.72;
            break;
        case 11:
            Multiplier = 127.68/100;
            Multipler2 = 176.32/100;
            atkBonus = Character.DEF()*0.76;
            break;
        case 12:
            Multiplier = 134.4/100;
            Multipler2 = 185.6/100;
            atkBonus = Character.DEF()*0.80;
            break;
        case 13:
            Multiplier = 142.8/100;
            Multipler2 = 197.2/100;
            atkBonus = Character.DEF()*0.85;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    attack.isReaction = false;
    attack.Multiplier = Multipler2;
    
    dmg += dmgCalc(attack, Character, "ElementalBurst")*3;
    Character.currentBuffs.push({Type:"ATKflat",Value:atkBonus});
    Character.normalAttack1.element = "GeoDMGBonus";
    Character.normalAttack2.element = "GeoDMGBonus";
    Character.normalAttack3.element = "GeoDMGBonus";
    Character.normalAttack4.element = "GeoDMGBonus";
    return dmg;
}

function preserverofFortune(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 284.8/100;
            Multipler2 = Character.attack()*(90/100)+577.33;
            break;
        case 2:
            Multiplier = 306.16100;
            Multipler2 = Character.attack()*(96.75/100)+635.08;
            break;
        case 3:
            Multiplier = 327.52/100;
            Multipler2 = Character.attack()*(103.5/100)+697.63;
            break;
        case 4:
            Multiplier = 356/100;
            Multipler2 = Character.attack()*(112.5/100)+765;
            break;
        case 5:
            Multiplier = 377.36/100;
            Multipler2 = Character.attack()*(119.25/100)+837.17;
            break;
        case 6:
            Multiplier = 398.72/100;
            Multipler2 = Character.attack()*(126/100)+914.16;
            break;
        case 7:
            Multiplier = 427.2/100;
            Multipler2 = Character.attack()*(135/100)+995.96;
            break;
        case 8:
            Multiplier = 455.68/100;
            Multipler2 = Character.attack()*(144/100)+1082;
            break;
        case 9:
            Multiplier = 484.16/100;
            Multipler2 = Character.attack()*(153/100)+1174;
            break;
        case 10:
            Multiplier = 512.64/100;
            Multipler2 = Character.attack()*(162/100)+1270;
            break;
        case 11:
            Multiplier = 541.12/100;
            Multipler2 = Character.attack()*(171/100)+1371;
            break;
        case 12:
            Multiplier = 569.6/100;
            Multipler2 = Character.attack()*(180/100)+1477;
            break;
        case 13:
            Multiplier = 605.2/100;
            Multipler2 = Character.attack()*(191.25/100)+1587;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    let heal = Multipler2 * 11*(1+(Character.advancedstats.healingBonus/100));
    return {dmg:dmg,healing:heal};
}

function lightningFang(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 160/100;
            Multipler2 = 24/100;
            break;
        case 2:
            Multiplier = 172/100;
            Multipler2 = 25.8/100;
            break;
        case 3:
            Multiplier = 184/100;
            Multipler2 = 27.6/100;
            break;
        case 4:
            Multiplier = 200/100;
            Multipler2 = 30/100;
            break;
        case 5:
            Multiplier = 212/100;
            Multipler2 = 31.8/100;
            break;
        case 6:
            Multiplier = 224/100;
            Multipler2 = 33.6/100;
            break;
        case 7:
            Multiplier = 240/100;
            Multipler2 = 36/100;
            break;
        case 8:
            Multiplier = 256/100;
            Multipler2 = 38.4/100;
            break;
        case 9:
            Multiplier = 272/100;
            Multipler2 = 40.8/100;
            break;
        case 10:
            Multiplier = 288/100;
            Multipler2 = 43.2/100;
            break;
        case 11:
            Multiplier = 304/100;
            Multipler2 = 45.6/100;
            break;
        case 12:
            Multiplier = 320/100;
            Multipler2 = 48/100;
            break;
        case 13:
            Multiplier = 340/100;
            Multipler2 = 51/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    attack.Multiplier = Multipler2;
    for (let index = 0; index < 12 ; index++) {
        if(index % 3 == 0){
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }
        else{
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }
    }
    return dmg;
}

function ritesofTermination(Character) {
    let Multiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = (104+152)/100;
            Multipler2 = 132/100;
            break;
        case 2:
            Multiplier = (111.8+163.4)/100;
            Multipler2 = 141.9/100;
            break;
        case 3:
            Multiplier = (119.6+174.8)/100;
            Multipler2 = 151.8/100;
            break;
        case 4:
            Multiplier = (130+190)/100;
            Multipler2 = 165/100;
            break;
        case 5:
            Multiplier = (137.8+201.4)/100;
            Multipler2 = 174.9/100;
            break;
        case 6:
            Multiplier = (145.6+212.8)/100;
            Multipler2 = 184.8/100;
            break;
        case 7:
            Multiplier = (156+228)/100;
            Multipler2 = 198/100;
            break;
        case 8:
            Multiplier = (166.4+243.2)/100;
            Multipler2 = 211.2/100;
            break;
        case 9:
            Multiplier = (176.8+258.4)/100;
            Multipler2 = 224.4/100;
            break;
        case 10:
            Multiplier = (187.2+273.6)/100;
            Multipler2 = 237.6/100;
            break;
        case 11:
            Multiplier = (197.6+288.8)/100;
            Multipler2 = 250.8/100;
            break;
        case 12:
            Multiplier = (208+304)/100;
            Multipler2 = 264/100;
            break;
        case 13:
            Multiplier = (221+323)/100;
            Multipler2 = 280.5/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    attack.Multiplier = Multipler2;
    for (let index = 0; index < 6 ; index++) {
        if(index % 3 == 0){
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }
        else{
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
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
            Multiplier = 117/100;
            Multipler2 = 52/100;
            healActive = Character.attack()*(92.2/100)+577;
            healCont = Character.attack()*(79.9/100)+500;
            break;
        case 2:
            Multiplier = 126/100;
            Multipler2 = 56/100;
            healActive = Character.attack()*(99.1/100)+635;
            healCont = Character.attack()*(85.9/100)+550;
            break;
        case 3:
            Multiplier = 134/100;
            Multipler2 = 60/100;
            healActive = Character.attack()*(106/100)+698;
            healCont = Character.attack()*(91.9/100)+605;
            break;
        case 4:
            Multiplier = 146/100;
            Multipler2 = 65/100;
            healActive = Character.attack()*(115.2/100)+765;
            healCont = Character.attack()*(99.8/100)+663;
            break;
        case 5:
            Multiplier = 154.76/100;
            Multipler2 = 68.9/100;
            healActive = Character.attack()*(122.11/100)+837.2;
            healCont = Character.attack()*(105.83/100)+725;
            break;
        case 6:
            Multiplier = 163.52/100;
            Multipler2 = 72.8/100;
            healActive = Character.attack()*(129.02/100)+914.2;
            healCont = Character.attack()*(111.82/100)+792;
            break;
        case 7:
            Multiplier = 175.2/100;
            Multipler2 = 78/100;
            healActive = Character.attack()*(138.24/100)+996;
            healCont = Character.attack()*(119.81/100)+863;
            break;
        case 8:
            Multiplier = 186.88/100;
            Multipler2 = 83.2/100;
            healActive = Character.attack()*(147.46/100)+1082;
            healCont = Character.attack()*(127.8/100)+938;
            break;
        case 9:
            Multiplier = 198.56/100;
            Multipler2 = 88.4/100;
            healActive = Character.attack()*(156.67/100)+1174;
            healCont = Character.attack()*(135.78/100)+1017;
            break;
        case 10:
            Multiplier = 210.24/100;
            Multipler2 = 93.6/100;
            healActive = Character.attack()*(165.89/100)+1270;
            healCont = Character.attack()*(143.77/100)+1100;
            break;
        case 11:
            Multiplier = 221.92/100;
            Multipler2 = 98.8/100;
            healActive = Character.attack()*(175.1/100)+1371;
            healCont = Character.attack()*(151.76/100)+1188;
            break;
        case 12:
            Multiplier = 233.6/100;
            Multipler2 = 104/100;
            healActive = Character.attack()*(184.32/100)+1477;
            healCont = Character.attack()*(159.74/100)+1280;
            break;
        case 13:
            Multiplier = 248.2/100;
            Multipler2 = 110.5/100;
            healActive = Character.attack()*(195.84/100)+1587;
            healCont = Character.attack()*(169.73/100)+1376;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3;
    let passive = false;
    Character.currentBuffs.forEach(buff=>{
        if(buff.Type == "Someone More Capable"){
           passive = true;
        }
    })
    let healing = healActive + (healCont * 7);
    attack.Multiplier = Multipler2;
    for (let index = 0; index < 7 ; index++) {
        
        dmg += dmgCalc(attack, Character, "ElementalBurst");
        if(passive){
            healing += ((Character.EM() * 1.2) + 300) * 4;
        }
        
    }
   
    return {dmg:dmg,healing:healing};
}

function forbiddenCreation(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 148/100;
            Multiplier2 = 44/100;
            break;
        case 2:
            Multiplier = 159.1/100;
            Multiplier2 = 47.3/100;
            break;
        case 3:
            Multiplier = 170.2/100;
            Multiplier2 = 50.6/100;
            break;
        case 4:
            Multiplier = 185/100;
            Multiplier2 = 55/100;
            break;
        case 5:
            Multiplier = 196.1/100;
            Multiplier2 = 58.3/100;
            break;
        case 6:
            Multiplier = 207.2/100;
            Multiplier2 = 61.6/100;
            break;
        case 7:
            Multiplier = 222/100;
            Multiplier2 = 66/100;
            break;
        case 8:
            Multiplier = 236.8/100;
            Multiplier2 = 70.4/100;
            break;
        case 9:
            Multiplier = 251.6/100;
            Multiplier2 = 74.8/100;
            break;
        case 10:
            Multiplier = 266.4/100;
            Multiplier2 = 79.2/100;
            break;
        case 11:
            Multiplier = 281.2/100;
            Multiplier2 = 83.6/100;
            break;
        case 12:
            Multiplier = 296/100;
            Multiplier2 = 88/100;
            break;
        case 13:
            Multiplier = 314.5/100;
            Multiplier2 = 93.5/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = 0;
    let emBuff = 0;
    for (let index = 0; index < 3 ; index++) {
        attack.Multiplier = Multiplier;
        dmg += dmgCalc(attack, Character, "ElementalBurst")*3;
        attack.Multiplier = Multiplier2;
        dmg += dmgCalc(attack, Character, "ElementalBurst")*3;
      
    }
    Character.currentBuffs.forEach(buff=>{
        if(buff.Type == "Mollis Favonius"){
            emBuff += Character.EM()*0.2;
        }
    });
    return {dmg:dmg,attackBuff:emBuff};
}

function obliteration(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multipler3 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 464/100;
            Multiplier2 = 378.4/100;
            Multipler3 = 120/100;
            break;
        case 2:
            Multiplier = 498.8/100;
            Multiplier2 = 406.78/100;
            Multipler3 = 129/100;
            break;
        case 3:
            Multiplier = 533.6/100;
            Multiplier2 = 435.16/100;
            Multipler3 = 138/100;
            break;
        case 4:
            Multiplier = 580/100;
            Multiplier2 = 473/100;
            Multipler3 = 150/100;
            break;
        case 5:
            Multiplier = 614.8/100;
            Multiplier2 = 501.38/100;
            Multipler3 = 159/100;
            break;
        case 6:
            Multiplier = 649.6/100;
            Multiplier2 = 529.76/100;
            Multipler3 = 168/100;
            break;
        case 7:
            Multiplier = 696/100;
            Multiplier2 = 567.6/100;
            Multipler3 = 180/100;
            break;
        case 8:
            Multiplier = 742.4/100;
            Multiplier2 = 605.44/100;
            Multipler3 = 192/100;
            break;
        case 9:
            Multiplier = 788.8/100;
            Multiplier2 = 643.28/100;
            Multipler3 = 204/100;
            break;
        case 10:
            Multiplier = 835.2/100;
            Multiplier2 = 681.12/100;
            Multipler3 = 216/100;
            break;
        case 11:
            Multiplier = 881.6/100;
            Multiplier2 = 718.96/100;
            Multipler3 = 228/100;
            break;
        case 12:
            Multiplier = 928/100;
            Multiplier2 = 756.8/100;
            Multipler3 = 240/100;
            break;
        case 13:
            Multiplier = 986/100;
            Multiplier2 = 804.1/100;
            Multipler3 = 255/100;
            break;
    }
    let attack = { Multiplier: Multiplier2, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = 0;
    let obliterationRangedUsed = false;
    Character.currentBuffs.forEach(buff=>{
        if(buff.Type =="obliterationRangedUsed")
            obliterationRangedUsed = true;

    });
    if(obliterationRangedUsed){
        attack.Multiplier = Multiplier;
        dmg = dmgCalc(attack,Character,"ElementalBurst")*3;
        attack.Multiplier = Multipler3;
        dmg+= dmgCalc(attack,Character,"ElementalBurst")*3;
    }
    else{
        attack.Multiplier = Multiplier2;
        dmg = dmgCalc(attack,Character,"ElementalBurst")*3;
        Character.currentBuffs.push({Type:"obliterationRangedUsed",Value:null});
    }
    return dmg;
}

function gustSurge(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 80.8/100;
            Multiplier2 = 24.8/100;
            break;
        case 2:
            Multiplier = 86.86/100;
            Multiplier2 = 26.66/100;
            break;
        case 3:
            Multiplier = 92.92/100;
            Multiplier2 = 28.52/100;
            break;
        case 4:
            Multiplier = 101/100;
            Multiplier2 = 31/100;
            break;
        case 5:
            Multiplier = 107.06/100;
            Multiplier2 = 32.86/100;
            break;
        case 6:
            Multiplier = 113.12/100;
            Multiplier2 = 34.72/100;
            break;
        case 7:
            Multiplier = 121.2/100;
            Multiplier2 = 37.2/100;
            break;
        case 8:
            Multiplier = 129.28/100;
            Multiplier2 = 39.68/100;
            break;
        case 9:
            Multiplier = 137.36/100;
            Multiplier2 = 42.16/100;
            break;
        case 10:
            Multiplier = 145.44/100;
            Multiplier2 = 44.64/100;
            break;
        case 11:
            Multiplier = 153.52/100;
            Multiplier2 = 47.12/100;
            break;
        case 12:
            Multiplier = 161.6/100;
            Multiplier2 = 49.6/100;
            break;
        case 13:
            Multiplier = 171.7/100;
            Multiplier2 = 52.7/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack,Character,"ElementalBurst");
    attack.isReaction = false;
    dmg += dmgCalc(attack,Character,"ElementalBurst") * 8;
    attack.Multiplier = Multiplier2;
    dmg+= dmgCalc(attack,Character,"ElementalBurst") * 9;
    return dmg;
}

function wakeofEarth(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 148 /100;
            break;
        case 2:
            Multiplier = 159.1 /100;
            break;
        case 3:
            Multiplier = 170.2 /100;
            break;
        case 4:
            Multiplier = 185 /100;
            break;
        case 5:
            Multiplier = 196.1 /100;
            break;
        case 6:
            Multiplier = 207.2 /100;
            break;
        case 7:
            Multiplier = 222 /100;
            break;
        case 8:
            Multiplier = 236.8 /100;
            break;
        case 9:
            Multiplier = 251.6 /100;
            break;
        case 10:
            Multiplier = 266.4 /100;
            break;
        case 11:
            Multiplier = 281.2 /100;
            break;
        case 12:
            Multiplier = 296 /100;
            break;
        case 13:
            Multiplier = 314.5 /100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst") * 3 * 4;
    return dmg;
}

function bellowingThunder(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 114.4/100;
            Multiplier2 = 32.8/100;
            break;
        case 2:
            Multiplier = 122.98/100;
            Multiplier2 = 35.26/100;
            break;
        case 3:
            Multiplier = 131.56/100;
            Multiplier2 = 37.72/100;
            break;
        case 4:
            Multiplier = 143/100;
            Multiplier2 = 41/100;
            break;
        case 5:
            Multiplier = 151.58/100;
            Multiplier2 = 43.46/100;
            break;
        case 6:
            Multiplier = 160.16/100;
            Multiplier2 = 45.92/100;
            break;
        case 7:
            Multiplier = 171.6/100;
            Multiplier2 = 49.2/100;
            break;
        case 8:
            Multiplier = 183.04/100;
            Multiplier2 = 52.48/100;
            break;
        case 9:
            Multiplier = 194.48/100;
            Multiplier2 = 55.76/100;
            break;
        case 10:
            Multiplier = 205.92/100;
            Multiplier2 = 59.04/100;
            break;
        case 11:
            Multiplier = 217.36/100;
            Multiplier2 = 62.32/100;
            break;
        case 12:
            Multiplier = 228.8/100;
            Multiplier2 = 65.6/100;
            break;
        case 13:
            Multiplier = 243.1/100;
            Multiplier2 = 69.7/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack,Character,"ElementalBurst")*3;
    attack.Multiplier = Multiplier2;
    dmg+= dmgCalc(attack,Character,"ElementalBurst") * 16;
    return dmg;
}

function windsGrandOde(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 37.6/100;
            Multiplier2 = 18.8/100;
            break;
        case 2:
            Multiplier = 40.42/100;
            Multiplier2 = 20.21/100;
            break;
        case 3:
            Multiplier = 43.24/100;
            Multiplier2 = 21.62/100;
            break;
        case 4:
            Multiplier = 47/100;
            Multiplier2 = 23.5/100;
            break;
        case 5:
            Multiplier = 49.82/100;
            Multiplier2 = 24.91/100;
            break;
        case 6:
            Multiplier = 52.64/100;
            Multiplier2 = 26.32/100;
            break;
        case 7:
            Multiplier = 56.4/100;
            Multiplier2 = 28.2/100;
            break;
        case 8:
            Multiplier = 60.16/100;
            Multiplier2 = 30.08/100;
            break;
        case 9:
            Multiplier = 63.92/100;
            Multiplier2 = 31.96/100;
            break;
        case 10:
            Multiplier = 67.68/100;
            Multiplier2 = 33.84/100;
            break;
        case 11:
            Multiplier = 71.44/100;
            Multiplier2 = 35.72/100;
            break;
        case 12:
            Multiplier = 75.2/100;
            Multiplier2 = 37.6/100;
            break;
        case 13:
            Multiplier = 79.9/100;
            Multiplier2 = 39.95/100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = 0;
    for (let index = 0; index < 20; index++) {
        if(index % 3 == 0){
            attack.isReaction = true;
            dmg += dmgCalc(attack,Character,"ElementalBurst")*3;
        }else{
            attack.isReaction = false;
            dmg += dmgCalc(attack,Character,"ElementalBurst")*3;
        }
        
    }
    attack.Multiplier = Multiplier2;
    attack.element = "";
    dmg+= dmgCalc(attack,Character,"ElementalBurst") * 20*3;
    return dmg;
}

function pyronado(Character) {
    let Multiplier = 0;
    let Multiplier2 = 0;
    let Multiplier3 = 0;
    let pyronado = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 72/100;
            Multiplier2 = 88/100;
            Multiplier3 = 109.6/100;
            pyronado = 112 / 100;
            break;
        case 2:
            Multiplier = 77.4/100;
            Multiplier2 = 94.6/100;
            Multiplier3 = 117.82/100;
            pyronado = 120.4 / 100;
            break;
        case 3:
            Multiplier = 82.8/100;
            Multiplier2 = 101.2/100;
            Multiplier3 = 126.04/100;
            pyronado = 128.8 / 100;
            break;
        case 4:
            Multiplier = 90/100;
            Multiplier2 = 110/100;
            Multiplier3 = 137/100;
            pyronado = 140 / 100;
            break;
        case 5:
            Multiplier = 95.4/100;
            Multiplier2 = 116.6/100;
            Multiplier3 = 145.22/100;
            pyronado = 148.4 / 100;
            break;
        case 6:
            Multiplier = 100.8/100;
            Multiplier2 = 123.2/100;
            Multiplier3 = 153.44/100;
            pyronado = 156.8 / 100;
            break;
        case 7:
            Multiplier = 108/100;
            Multiplier2 = 132/100;
            Multiplier3 = 164.4/100;
            pyronado = 168 / 100;
            break;
        case 8:
            Multiplier = 115.2/100;
            Multiplier2 = 140.8/100;
            Multiplier3 = 175.36/100;
            pyronado = 179.2 / 100;
            break;
        case 9:
            Multiplier = 122.4/100;
            Multiplier2 = 149.6/100;
            Multiplier3 = 186.32/100;
            pyronado = 190.4 / 100;
            break;
        case 10:
            Multiplier = 129.6/100;
            Multiplier2 = 158.4/100;
            Multiplier3 = 197.28/100;
            pyronado = 201.6 / 100;
            break;
        case 11:
            Multiplier = 136.8/100;
            Multiplier2 = 167.2/100;
            Multiplier3 = 208.24/100;
            pyronado = 212.8 / 100;
            break;
        case 12:
            Multiplier = 144/100;
            Multiplier2 = 176/100;
            Multiplier3 = 219.2/100;
            pyronado = 224 / 100;
            break;
        case 13:
            Multiplier = 153/100;
            Multiplier2 = 187/100;
            Multiplier3 = 232.9/100;
            pyronado = 238 / 100;
            break;
    }
    let attack = { Multiplier: Multiplier2, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack,Character,"ElementalBurst") * 3;
    attack.Multiplier = Multiplier2;
    dmg += dmgCalc(attack,Character,"ElementalBurst") * 3;
    attack.Multiplier = Multiplier3;
    dmg += dmgCalc(attack,Character,"ElementalBurst") * 3;
    attack.Multiplier = pyronado;
    for (let index = 0; index < 7; index++) {
        dmg+= dmgCalc(attack,Character,"ElementalBurst") * 3;
    }
   
    return dmg;
}

function raincutter(Character) {
    let Multiplier = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            Multiplier = 54.27 /100;
            break;
        case 2:
            Multiplier = 58.34 /100;
            break;
        case 3:
            Multiplier = 62.41 /100;
            break;
        case 4:
            Multiplier = 67.84 /100;
            break;
        case 5:
            Multiplier = 71.91 /100;
            break;
        case 6:
            Multiplier = 75.98 /100;
            break;
        case 7:
            Multiplier = 81.41 /100;
            break;
        case 8:
            Multiplier = 86.84 /100;
            break;
        case 9:
            Multiplier = 92.26 /100;
            break;
        case 10:
            Multiplier = 97.69 /100;
            break;
        case 11:
            Multiplier = 103.12 /100;
            break;
        case 12:
            Multiplier = 108.54 /100;
            break;
        case 13:
            Multiplier = 115.33 /100;
            break;
    }
    let attack = { Multiplier: Multiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: false }
    let dmg = 0;
    for (let index = 0; index < 37; index++) {
        if(index % 3 == 0){
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character, "ElementalBurst");
        }else{
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
            skillMultiplier =  340.8 / 100;
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
    let attack = { Multiplier: skillMultiplier, Element: "PhysicalDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst")*3;
    attack.Multiplier = skillMultiplier2;
    attack.element = "PyroDMGBonus";
    for (let index = 0; index < 5; index++) {
        dmg += dmgCalc(attack,Character,"ElementalBurst") * 3;
    }
    
   
    return {dmg:dmg};
   
}

function doneDeal(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            skillMultiplier =  182.4 / 100;
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
            skillMultiplier2 = 62.2 ;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst")*3;
    Character.currentBuffs.push({Type:"ChargedAttack",Value:skillMultiplier2});
    
   
    return dmg;
   
}

function ryuukinSaxifrage(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalBurst.Level) {
        case 1:
            skillMultiplier =  127.2 / 100;
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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalBurst")*3;
    attack.Multiplier = skillMultiplier2;
    dmg += dmgCalc(attack, Character, "ElementalBurst")*5*3;
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
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: false }
    let dmg = dmgCalc(attack, Character, "ElementalBurst")*3;
   
    return dmg;
}

function propheciesofDawn(Character) {
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
    let attack = { Multiplier: Multiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: false }
    let dmg = dmgCalc(attack, Character, "ElementalBurst")*3;
   
    return dmg;
}
