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