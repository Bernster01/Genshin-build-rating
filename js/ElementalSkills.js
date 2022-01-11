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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK" }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
    return dmg * 3;
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
    let attack = { Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK" }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
    dmg *= 3;
    attack = { Multiplier: skillMultiplier2, Element: "GeoDMGBonus", Scaling: "DEF" }
    let dmg2 = dmgCalc(attack, Character, "ElementalSkill");
    dmg2 *= 45;
    dmg += dmg2;
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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK" }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
    return dmg * 3;
}
function letTheShowBegin(Character) {
    let contRegen = 0;
    let regenPerHit = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            contRegen = ((4 / 100) * Character.HP()) + 385.18
            regenPerHit = ((0.75 / 100) * Character.HP()) + 72.2
            break;
        case 2:
            contRegen = ((4.3 / 100) * Character.HP()) + 423.71
            regenPerHit = ((0.81 / 100) * Character.HP()) + 79.44
            break;
        case 3:
            contRegen = ((4.6 / 100) * Character.HP()) + 465.44
            regenPerHit = ((0.86 / 100) * Character.HP()) + 87.27
            break;
        case 4:
            contRegen = ((5 / 100) * Character.HP()) + 510.39
            regenPerHit = ((0.94 / 100) * Character.HP()) + 95.69
            break;
        case 5:
            contRegen = ((5.3 / 100) * Character.HP()) + 558.54
            regenPerHit = ((0.99 / 100) * Character.HP()) + 104.72
            break;
        case 6:
            contRegen = ((5.6 / 100) * Character.HP()) + 609.91
            regenPerHit = ((1.05 / 100) * Character.HP()) + 114.35
            break;
        case 7:
            contRegen = ((6 / 100) * Character.HP()) + 664.48
            regenPerHit = ((1.13 / 100) * Character.HP()) + 124.59
            break;
        case 8:
            contRegen = ((6.4 / 100) * Character.HP()) + 722.27
            regenPerHit = ((1.2 / 100) * Character.HP()) + 135.42
            break;
        case 9:
            contRegen = ((6.8 / 100) * Character.HP()) + 783.27
            regenPerHit = ((1.27 / 100) * Character.HP()) + 146.86
            break;
        case 10:
            contRegen = ((7.2 / 100) * Character.HP()) + 847.47
            regenPerHit = ((1.35 / 100) * Character.HP()) + 158.9
            break;
        case 11:
            contRegen = ((7.6 / 100) * Character.HP()) + 914.89
            regenPerHit = ((1.43 / 100) * Character.HP()) + 171.54
            break;
        case 12:
            contRegen = ((8 / 100) * Character.HP()) + 985.52
            regenPerHit = ((1.5 / 100) * Character.HP()) + 184.78
            break;
        case 13:
            contRegen = ((8.5 / 100) * Character.HP()) + 1059
            regenPerHit = ((1.59 / 100) * Character.HP()) + 198.63
            break;

    }
    let healing = 0;
    let encore = 1;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Encore") {
            encore += buff.Value;
        }
    });
    let healingBonus = 1 + (Character.advancedstats.healingBonus / 100)
    healing += contRegen * 4 * healingBonus * encore;

    healing += regenPerHit * 16 * healingBonus * encore;
    healing += regenPerHit * 4 * 4 * healingBonus * encore;
    return healing;
}

function tidecaller(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = (121.6 / 100)*1.6
            break;
        case 2:
            skillMultiplier = (130.72 / 100)*1.72
            break;
        case 3:
            skillMultiplier = (139.84 / 100)*1.84
            break;
        case 4:
            skillMultiplier = (152 / 100)*2
            break;
        case 5:
            skillMultiplier = (161.12 / 100)*2.12
            break;
        case 6:
            skillMultiplier = (170.24 / 100)*2.24
            break;
        case 7:
            skillMultiplier = (182.4 / 100)*2.4
            break;
        case 8:
            skillMultiplier = (194.56 / 100)*2.56
            break;
        case 9:
            skillMultiplier = (206.72 / 100)*2.72
            break;
        case 10:
            skillMultiplier = (218.88 / 100)*2.88
            break;
        case 11:
            skillMultiplier = (231.04 / 100)*3.04
            break;
        case 12:
            skillMultiplier = (243.2 / 100)*3.2
            break;
        case 13:
            skillMultiplier = (258.4 / 100)*3.4
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK",isReaction:true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
 
    return dmg * 3;
}

function passionOverload(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 137.6 / 100
            break;
        case 2:
            skillMultiplier = 147.92 / 100
            break;
        case 3:
            skillMultiplier = 158.24 / 100
            break;
        case 4:
            skillMultiplier = 172 / 100
            break;
        case 5:
            skillMultiplier = 182.32 / 100
            break;
        case 6:
            skillMultiplier = 192.64 / 100
            break;
        case 7:
            skillMultiplier = 206.4 / 100
            break;
        case 8:
            skillMultiplier = 220.16 / 100
            break;
        case 9:
            skillMultiplier = 233.92 / 100
            break;
        case 10:
            skillMultiplier = 247.68 / 100
            break;
        case 11:
            skillMultiplier = 261.44 / 100
            break;
        case 12:
            skillMultiplier = 275.2 / 100
            break;
        case 13:
            skillMultiplier = 292.4 / 100
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK",isReaction:true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
 
    return dmg * 3;
}

function chounghuasLayerdFrost(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 172.04 / 100
            break;
        case 2:
            skillMultiplier = 184.94 / 100
            break;
        case 3:
            skillMultiplier = 197.85 / 100
            break;
        case 4:
            skillMultiplier = 215.05 / 100
            break;
        case 5:
            skillMultiplier = 227.95 / 100
            break;
        case 6:
            skillMultiplier = 240.86 / 100
            break;
        case 7:
            skillMultiplier = 258.06 / 100
            break;
        case 8:
            skillMultiplier = 275.26 / 100
            break;
        case 9:
            skillMultiplier = 292.47 / 100
            break;
        case 10:
            skillMultiplier = 309.67 / 100
            break;
        case 11:
            skillMultiplier = 326.88 / 100
            break;
        case 12:
            skillMultiplier = 344.08 / 100
            break;
        case 13:
            skillMultiplier = 365.58 / 100
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK",isReaction:true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
    Character.normalAttack1.Element = "CryoDMGBonus";
    Character.normalAttack1.isReaction = true;
    Character.normalAttack2.Element = "CryoDMGBonus";
    Character.normalAttack2.isReaction = false;
    Character.normalAttack3.Element = "CryoDMGBonus";
    Character.normalAttack3.isReaction = false;
    Character.normalAttack4.Element = "CryoDMGBonus";
    Character.normalAttack4.isReaction = true;
    return dmg * 3;
}