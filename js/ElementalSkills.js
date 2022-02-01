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
            skillMultiplier = (121.6 / 100) * 1.6
            break;
        case 2:
            skillMultiplier = (130.72 / 100) * 1.72
            break;
        case 3:
            skillMultiplier = (139.84 / 100) * 1.84
            break;
        case 4:
            skillMultiplier = (152 / 100) * 2
            break;
        case 5:
            skillMultiplier = (161.12 / 100) * 2.12
            break;
        case 6:
            skillMultiplier = (170.24 / 100) * 2.24
            break;
        case 7:
            skillMultiplier = (182.4 / 100) * 2.4
            break;
        case 8:
            skillMultiplier = (194.56 / 100) * 2.56
            break;
        case 9:
            skillMultiplier = (206.72 / 100) * 2.72
            break;
        case 10:
            skillMultiplier = (218.88 / 100) * 2.88
            break;
        case 11:
            skillMultiplier = (231.04 / 100) * 3.04
            break;
        case 12:
            skillMultiplier = (243.2 / 100) * 3.2
            break;
        case 13:
            skillMultiplier = (258.4 / 100) * 3.4
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
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

function searingOnslaught(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    let skillMultiplier3 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 94.4 / 100;
            skillMultiplier2 = 97.6 / 100;
            skillMultiplier3 = 128.8 / 100;
            break;
        case 2:
            skillMultiplier = 101.48 / 100;
            skillMultiplier2 = 104.92 / 100;
            skillMultiplier3 = 138.46 / 100;
            break;
        case 3:
            skillMultiplier = 108.56 / 100;
            skillMultiplier2 = 112.24 / 100;
            skillMultiplier3 = 148.12 / 100;
            break;
        case 4:
            skillMultiplier = 118 / 100;
            skillMultiplier2 = 122 / 100;
            skillMultiplier3 = 161 / 100;
            break;
        case 5:
            skillMultiplier = 125.08 / 100;
            skillMultiplier2 = 129.32 / 100;
            skillMultiplier3 = 170.66 / 100;
            break;
        case 6:
            skillMultiplier = 132.16 / 100;
            skillMultiplier2 = 136.64 / 100;
            skillMultiplier3 = 180.32 / 100;
            break;
        case 7:
            skillMultiplier = 141.6 / 100;
            skillMultiplier2 = 146.4 / 100;
            skillMultiplier3 = 193.2 / 100;
            break;
        case 8:
            skillMultiplier = 151.04 / 100;
            skillMultiplier2 = 156.16 / 100;
            skillMultiplier3 = 206.08 / 100;
            break;
        case 9:
            skillMultiplier = 160.48 / 100;
            skillMultiplier2 = 165.92 / 100;
            skillMultiplier3 = 218.96 / 100;
            break;
        case 10:
            skillMultiplier = 169.92 / 100;
            skillMultiplier2 = 175.68 / 100;
            skillMultiplier3 = 231.84 / 100;
            break;
        case 11:
            skillMultiplier = 179.36 / 100;
            skillMultiplier2 = 185.68 / 100;
            skillMultiplier3 = 244.72 / 100;
            break;
        case 12:
            skillMultiplier = 188.8 / 100;
            skillMultiplier2 = 195.2 / 100;
            skillMultiplier3 = 257.6 / 100;
            break;
        case 13:
            skillMultiplier = 200.6 / 100;
            skillMultiplier2 = 207.4 / 100;
            skillMultiplier3 = 273.7 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
    let crimsonWitch = 0;
    Character.artifacts.forEach(artifact => {
        if (artifact.Set == "Crimson Witch of Flames")
            crimsonWitch++;
    });
    if (crimsonWitch >= 4 && crimsonWitchStacks < 3) {
        Character.advancedstats.elementalBonuses[0].Value += 7.5;
        crimsonWitchStacks++;
    }
    attack.Multiplier = skillMultiplier2;
    dmg = dmgCalc(attack, Character, "ElementalSkill");
    if (crimsonWitch >= 4 && crimsonWitchStacks < 3) {
        Character.advancedstats.elementalBonuses[0].Value += 7.5;
        crimsonWitchStacks++;
    }
    attack.Multiplier = skillMultiplier3;
    dmg = dmgCalc(attack, Character, "ElementalSkill");
    if (crimsonWitch >= 4 && crimsonWitchStacks < 3) {
        Character.advancedstats.elementalBonuses[0].Value += 7.5;
        crimsonWitchStacks++;
    }

    return dmg * 3;
}

function icyPaws(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 41.92 / 100;
            skillMultiplier2 = (Character.HP() * (7.2 / 100)) + 692.8;
            break;
        case 2:
            skillMultiplier = 45.06 / 100;
            skillMultiplier2 = (Character.HP() * (7.74 / 100)) + 762;
            break;
        case 3:
            skillMultiplier = 48.21 / 100;
            skillMultiplier2 = (Character.HP() * (8.28 / 100)) + 837.16;
            break;
        case 4:
            skillMultiplier = 52.4 / 100;
            skillMultiplier2 = (Character.HP() * (9 / 100)) + 918;
            break;
        case 5:
            skillMultiplier = 55.54 / 100;
            skillMultiplier2 = (Character.HP() * (9.54 / 100)) + 1004;
            break;
        case 6:
            skillMultiplier = 58.69 / 100;
            skillMultiplier2 = (Character.HP() * (10.08 / 100)) + 1096;
            break;
        case 7:
            skillMultiplier = 62.88 / 100;
            skillMultiplier2 = (Character.HP() * (10.8 / 100)) + 1195;
            break;
        case 8:
            skillMultiplier = 67.07 / 100;
            skillMultiplier2 = (Character.HP() * (11.52 / 100)) + 1299;
            break;
        case 9:
            skillMultiplier = 71.26 / 100;
            skillMultiplier2 = (Character.HP() * (12.24 / 100)) + 1408;
            break;
        case 10:
            skillMultiplier = 75.46 / 100;
            skillMultiplier2 = (Character.HP() * (12.96 / 100)) + 1524;
            break;
        case 11:
            skillMultiplier = 79.65 / 100;
            skillMultiplier2 = (Character.HP() * (13.68)) + 1645;
            break;
        case 12:
            skillMultiplier = 83.84 / 100;
            skillMultiplier2 = (Character.HP() * (14.4 / 100)) + 1772;
            break;
        case 13:
            skillMultiplier = 89.08 / 100;
            skillMultiplier2 = (Character.HP() * (15.3 / 100)) + 1905;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
    for (let index = 0; index <= 5; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg = dmgCalc(attack, Character, "ElementalSkill");
        }
        else {
            attack.isReaction = false;
            dmg = dmgCalc(attack, Character, "ElementalSkill");
        }
    }
    let shield = skillMultiplier2 * (1 + (Character.advancedstats.shieldStrength / 100));
    if (Character.weapon.name == "Sacrificial Bow")
        shield *= 2;

    return { dmg: dmg, shield: shield };
}

function icetideVortex(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    let res = 0;
    let skillMultiplier3 = 0;
    let lightfallSword = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 146.4 / 100;
            skillMultiplier2 = 245.6 / 100;
            skillMultiplier3 = 96 / 100;
            lightfallSword = 367.05 / 100;
            res = 16;
            break;
        case 2:
            skillMultiplier = 157.38 / 100;
            skillMultiplier2 = 264.02 / 100;
            skillMultiplier3 = 103.2 / 100;
            lightfallSword = 396.92 / 100;
            res = 17;
            break;
        case 3:
            skillMultiplier = 168.36 / 100;
            skillMultiplier2 = 282.44 / 100;
            skillMultiplier3 = 110.4 / 100;
            lightfallSword = 426.8 / 100;
            res = 18;
            break;
        case 4:
            skillMultiplier = 183 / 100;
            skillMultiplier2 = 307 / 100;
            skillMultiplier3 = 120 / 100;
            lightfallSword = 469.48 / 100;
            res = 19;
            break;
        case 5:
            skillMultiplier = 193.98 / 100;
            skillMultiplier2 = 325.42 / 100;
            skillMultiplier3 = 127.2 / 100;
            lightfallSword = 499.36 / 100;
            res = 20;
            break;
        case 6:
            skillMultiplier = 204.96 / 100;
            skillMultiplier2 = 343.84 / 100;
            skillMultiplier3 = 134.4 / 100;
            lightfallSword = 533.5 / 100;
            res = 21;
            break;
        case 7:
            skillMultiplier = 219.6 / 100;
            skillMultiplier2 = 368.4 / 100;
            skillMultiplier3 = 144 / 100;
            lightfallSword = 580.45 / 100;
            res = 22;
            break;
        case 8:
            skillMultiplier = 234.24 / 100;
            skillMultiplier2 = 392.96 / 100;
            skillMultiplier3 = 153.6 / 100;
            lightfallSword = 627.4 / 100;
            res = 23;
            break;
        case 9:
            skillMultiplier = 248.88 / 100;
            skillMultiplier2 = 417.52 / 100;
            skillMultiplier3 = 163.2 / 100;
            lightfallSword = 674.34 / 100;
            res = 24;
            break;
        case 10:
            skillMultiplier = 263.52 / 100;
            skillMultiplier2 = 442.08 / 100;
            skillMultiplier3 = 172.8 / 100;
            lightfallSword = 725.56 / 100;
            res = 25;
            break;
        case 11:
            skillMultiplier = 278.16 / 100;
            skillMultiplier2 = 466.64 / 100;
            skillMultiplier3 = 182.4 / 100;
            lightfallSword = 784.25 / 100;
            res = 25;
            break;
        case 12:
            skillMultiplier = 292.8 / 100;
            skillMultiplier2 = 491.2 / 100;
            skillMultiplier3 = 192 / 100;
            lightfallSword = 853.26 / 100;
            res = 25;
            break;
        case 13:
            skillMultiplier = 311.1 / 100;
            skillMultiplier2 = 521.9 / 100;
            skillMultiplier3 = 204 / 100;
            lightfallSword = 922.27 / 100;
            res = 25;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = 0;
    switch (grimheartStack) {
        case 0: case 1:
            attack.Multiplier = skillMultiplier;
            dmg = dmgCalc(attack, Character, "ElementalSkill");
            grimheartStack += 2;
            break;
        case 2:
            attack.Multiplier = skillMultiplier2;
            dmg = dmgCalc(attack, Character, "ElementalSkill");
            attack.isReaction = false;
            attack.Multiplier = skillMultiplier3;
            dmg += dmgCalc(attack, Character, "ElementalSkill");
            dmg += dmgCalc(attack, Character, "ElementalSkill");
            let haveRime = false;
            Character.currentBuffs.forEach(buff => {
                if (buff.Type == "Roiling Rime")
                    haveRime = true;

            })
            if (haveRime) {
                attack.Multiplier = lightfallSword / 2;
                attack.isReaction = false;
                attack.Element = "PhysicalDMGBonus";
                dmg += dmgCalc(attack, Character, "ElementalSkill");
            }
            Character.currentBuffs.push({ Type: "ResShred", Value: res, Element: "CryoDMGBonus" });
            Character.currentBuffs.push({ Type: "ResShred", Value: res, Element: "PhysicalDMGBonus" });
            grimheartStack = 0;
            break;
    }

    return dmg;
}

function nightrider(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 88.8 / 100;
            skillMultiplier2 = 115.44 / 100;
            break;
        case 2:
            skillMultiplier = 95.46 / 100;
            skillMultiplier2 = 124.1 / 100;
            break;
        case 3:
            skillMultiplier = 102.12 / 100;
            skillMultiplier2 = 132.76 / 100;
            break;
        case 4:
            skillMultiplier = 111 / 100;
            skillMultiplier2 = 144.3 / 100;
            break;
        case 5:
            skillMultiplier = 117.66 / 100;
            skillMultiplier2 = 152.96 / 100;
            break;
        case 6:
            skillMultiplier = 124.32 / 100;
            skillMultiplier2 = 161.62 / 100;
            break;
        case 7:
            skillMultiplier = 133.2 / 100;
            skillMultiplier2 = 173.16 / 100;
            break;
        case 8:
            skillMultiplier = 142.08 / 100;
            skillMultiplier2 = 184.7 / 100;
            break;
        case 9:
            skillMultiplier = 150.96 / 100;
            skillMultiplier2 = 196.25 / 100;
            break;
        case 10:
            skillMultiplier = 159.84 / 100;
            skillMultiplier2 = 207.79 / 100;
            break;
        case 11:
            skillMultiplier = 168.72 / 100;
            skillMultiplier2 = 219.34 / 100;
            break;
        case 12:
            skillMultiplier = 177.6 / 100;
            skillMultiplier2 = 230.88 / 100;
            break;
        case 13:
            skillMultiplier = 188.7 / 100;
            skillMultiplier2 = 245.31 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier2, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;
    attack.Multiplier = skillMultiplier;
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

function trailOfTheQilin(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 132 / 100;
            break;
        case 2:
            skillMultiplier = 141.9 / 100;
            break;
        case 3:
            skillMultiplier = 151.8 / 100;
            break;
        case 4:
            skillMultiplier = 165 / 100;
            break;
        case 5:
            skillMultiplier = 174.9 / 100;
            break;
        case 6:
            skillMultiplier = 184.8 / 100;
            break;
        case 7:
            skillMultiplier = 198 / 100;
            break;
        case 8:
            skillMultiplier = 211.2 / 100;
            break;
        case 9:
            skillMultiplier = 224.4 / 100;
            break;
        case 10:
            skillMultiplier = 237.6 / 100;
            break;
        case 11:
            skillMultiplier = 250.8 / 100;
            break;
        case 12:
            skillMultiplier = 264 / 100;
            break;
        case 13:
            skillMultiplier = 280.5 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;


    return dmg;
}

function guideToAtferlife(Character) {
    let skillMultiplier = 0;
    let atkIncrease = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 64 / 100;
            atkIncrease = 3.84 / 100;
            break;
        case 2:
            skillMultiplier = 68.8 / 100;
            atkIncrease = 4.07 / 100;
            break;
        case 3:
            skillMultiplier = 73.6 / 100;
            atkIncrease = 4.3 / 100;
            break;
        case 4:
            skillMultiplier = 80 / 100;
            atkIncrease = 4.6 / 100;
            break;
        case 5:
            skillMultiplier = 174.9 / 100;
            atkIncrease = 4.83 / 100;
            break;
        case 6:
            skillMultiplier = 84.8 / 100;
            atkIncrease = 5.06 / 100;
            break;
        case 7:
            skillMultiplier = 89.6 / 100;
            atkIncrease = 5.36 / 100;
            break;
        case 8:
            skillMultiplier = 96 / 100;
            atkIncrease = 5.66 / 100;
            break;
        case 9:
            skillMultiplier = 102.4 / 100;
            atkIncrease = 5.96 / 100;
            break;
        case 10:
            skillMultiplier = 108.8 / 100;
            atkIncrease = 6.26 / 100;
            break;
        case 11:
            skillMultiplier = 115.2 / 100;
            atkIncrease = 6.55 / 100;
            break;
        case 12:
            skillMultiplier = 121.6 / 100;
            atkIncrease = 6.85 / 100;
            break;
        case 13:
            skillMultiplier = 136 / 100;
            atkIncrease = 7.15 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let atkIncreaseRoof = Character.baseattack * 4;
    atkIncrease *= Character.HP();
    if(atkIncrease>atkIncreaseRoof)
    atkIncrease = atkIncreaseRoof;
    Character.currentBuffs.push({Type:"ATKflat",Value:atkIncrease});
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3 * 2;
    Character.chargedAttack.Element = "PyroDMGBonus";
    Character.chargedAttack.isReaction = true;
    Character.normalAttack1.Element = "PyroDMGBonus";
    Character.normalAttack1.isReaction = true;

    return dmg;
}

function galeBlade(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 292 / 100;
            break;
        case 2:
            skillMultiplier = 313.9 / 100;
            break;
        case 3:
            skillMultiplier = 335.8 / 100;
            break;
        case 4:
            skillMultiplier = 365 / 100;
            break;
        case 5:
            skillMultiplier = 386.9 / 100;
            break;
        case 6:
            skillMultiplier = 408.8 / 100;
            break;
        case 7:
            skillMultiplier = 438 / 100;
            break;
        case 8:
            skillMultiplier = 467.2 / 100;
            break;
        case 9:
            skillMultiplier = 496.4 / 100;
            break;
        case 10:
            skillMultiplier = 525.6 / 100;
            break;
        case 11:
            skillMultiplier = 554.8 / 100;
            break;
        case 12:
            skillMultiplier = 584 / 100;
            break;
        case 13:
            skillMultiplier = 620.5 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;


    return dmg;
}

function frostgnaw(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 191.2 / 100;
            break;
        case 2:
            skillMultiplier = 205.54 / 100;
            break;
        case 3:
            skillMultiplier = 219.88 / 100;
            break;
        case 4:
            skillMultiplier = 239 / 100;
            break;
        case 5:
            skillMultiplier = 253.34 / 100;
            break;
        case 6:
            skillMultiplier = 267.68 / 100;
            break;
        case 7:
            skillMultiplier = 286.8 / 100;
            break;
        case 8:
            skillMultiplier = 305.92 / 100;
            break;
        case 9:
            skillMultiplier = 325.04 / 100;
            break;
        case 10:
            skillMultiplier = 344.16 / 100;
            break;
        case 11:
            skillMultiplier = 363.28 / 100;
            break;
        case 12:
            skillMultiplier = 382.4 / 100;
            break;
        case 13:
            skillMultiplier = 406.3 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;


    return dmg;
}

function chihayaburu(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 260.8 / 100;
            break;
        case 2:
            skillMultiplier = 280.36 / 100;
            break;
        case 3:
            skillMultiplier = 299.92 / 100;
            break;
        case 4:
            skillMultiplier = 326 / 100;
            break;
        case 5:
            skillMultiplier = 345.56 / 100;
            break;
        case 6:
            skillMultiplier = 365.12 / 100;
            break;
        case 7:
            skillMultiplier = 391.2 / 100;
            break;
        case 8:
            skillMultiplier = 417.28 / 100;
            break;
        case 9:
            skillMultiplier = 443.36 / 100;
            break;
        case 10:
            skillMultiplier = 469.44 / 100;
            break;
        case 11:
            skillMultiplier = 495.52 / 100;
            break;
        case 12:
            skillMultiplier = 521.6 / 100;
            break;
        case 13:
            skillMultiplier = 554.2 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;
    dmg+= dmgCalc(attack,Character,"PlungingAttack") * 3;
    if(supportingElement != null || supportingElement != undefined){
    
    attack.Element = supportingElement;
    attack.Multiplier = Character.plungeAttack.Multiplier(Character.normalAttackLevel);
    Character.currentBuffs.forEach(buff=>{
        if(buff.Type=="Soumon Sowrdmanship"){
            attack.Multiplier = 2;
            attack.isReaction = false;
            dmg+=dmgCalc(attack, Character, "Elementalskill") * 3;
        }
    });
    }

    return {dmg:dmg};
}

function stellarRestoration(Character) {
    let skillMultiplier = 0;
    let slashDMG = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 50.4 / 100;
            slashDMG = 168 / 100;
            break;
        case 2:
            skillMultiplier = 54.18 / 100;
            slashDMG = 180.6 / 100;
            break;
        case 3:
            skillMultiplier = 57.96 / 100;
            slashDMG = 193.2 / 100;
            break;
        case 4:
            skillMultiplier = 63 / 100;
            slashDMG = 210 / 100;
            break;
        case 5:
            skillMultiplier = 66.78 / 100;
            slashDMG = 222.6 / 100;
            break;
        case 6:
            skillMultiplier = 70.56 / 100;
            slashDMG = 235.2 / 100;
            break;
        case 7:
            skillMultiplier = 75.6 / 100;
            slashDMG = 252 / 100;
            break;
        case 8:
            skillMultiplier = 80.64 / 100;
            slashDMG = 268.8 / 100;
            break;
        case 9:
            skillMultiplier = 85.68 / 100;
            slashDMG = 285.6 / 100;
            break;
        case 10:
            skillMultiplier = 90.72 / 100;
            slashDMG = 302.4 / 100;
            break;
        case 11:
            skillMultiplier = 95.76 / 100;
            slashDMG = 319.2 / 100;
            break;
        case 12:
            skillMultiplier = 100.8 / 100;
            slashDMG = 336 / 100;
            break;
        case 13:
            skillMultiplier = 107.1 / 100;
            slashDMG = 357 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;
    attack.Multiplier = slashDMG;
    dmg += dmgCalc(attack, Character, "ElementalSkill") * 3;
   
    return dmg;
}

function lemniscaticWindCycling(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 252.8 / 100;
            break;
        case 2:
            skillMultiplier = 271.76 / 100;
            break;
        case 3:
            skillMultiplier = 290.72 / 100;
            break;
        case 4:
            skillMultiplier = 316 / 100;
            break;
        case 5:
            skillMultiplier = 334.96 / 100;
            break;
        case 6:
            skillMultiplier = 353.92 / 100;
            break;
        case 7:
            skillMultiplier = 379.2 / 100;
            break;
        case 8:
            skillMultiplier = 404.48 / 100;
            break;
        case 9:
            skillMultiplier = 429.76 / 100;
            break;
        case 10:
            skillMultiplier = 455.04 / 100;
            break;
        case 11:
            skillMultiplier = 480.32 / 100;
            break;
        case 12:
            skillMultiplier = 505.6 / 100;
            break;
        case 13:
            skillMultiplier = 537.2 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;
    if(Character.hasBuffOfType("Dissolution Eon: Heaven Fall")){
        Character.currentBuffs.push({Type:"ElementalSkill",Value:5});
    }
   
    return dmg;
}

function jumpyDumpty(Character) {
    let skillMultiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 95.2 / 100;
            Multipler2 = 32.8 / 100;
            break;
        case 2:
            skillMultiplier = 102.34 / 100;
            Multipler2 = 35.26 / 100;
            break;
        case 3:
            skillMultiplier = 109.48 / 100;
            Multipler2 = 37.72 / 100;
            break;
        case 4:
            skillMultiplier = 119 / 100;
            Multipler2 = 41 / 100;
            break;
        case 5:
            skillMultiplier = 126.14 / 100;
            Multipler2 = 43.46 / 100;
            break;
        case 6:
            skillMultiplier = 133.28 / 100;
            Multipler2 = 45.92 / 100;
            break;
        case 7:
            skillMultiplier = 142.8 / 100;
            Multipler2 = 49.2 / 100;
            break;
        case 8:
            skillMultiplier = 152.32 / 100;
            Multipler2 = 52.48 / 100;
            break;
        case 9:
            skillMultiplier = 161.84 / 100;
            Multipler2 = 55.76 / 100;
            break;
        case 10:
            skillMultiplier = 171.36 / 100;
            Multipler2 = 59.04 / 100;
            break;
        case 11:
            skillMultiplier = 180.88 / 100;
            Multipler2 = 62.32 / 100;
            break;
        case 12:
            skillMultiplier = 190.4 / 100;
            Multipler2 = 65.6 / 100;
            break;
        case 13:
            skillMultiplier = 202.3 / 100;
            Multipler2 = 69.7 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true }
    let dmg = dmgCalc(attack, Character, "ElementalSkill") * 3;
    attack.isReaction = false;
    dmg+= dmgCalc(attack,Character,"ElementalSkill") * 3;
    dmg+= dmgCalc(attack,Character,"ElementalSkill") * 3;
    attack.Multiplier = Multipler2;
    dmg+= dmgCalc(attack,Character,"ElementalSkill") * 3*8;
    return dmg;
}