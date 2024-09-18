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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", type: "ElementalSkill", isReaction: true }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
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
    let attack = { Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character, "ElementalSkill");
    dmg *= numberOfEnemies;
    attack = { Multiplier: skillMultiplier2, Element: "GeoDMGBonus", Scaling: "DEF", type: "ElementalSkill", isReaction: false }
    let dmg2 = dmgCalc(attack, Character);
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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", type: "ElementalSkill", isReaction: true }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
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
    healingHasOccured(Character);
    return { healing: healing };
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
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;

    return dmg;
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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;

    return { dmg: dmg };
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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character,) * numberOfEnemies;
    Character.normalAttack1.Element = "CryoDMGBonus";
    Character.normalAttack1.isReaction = true;
    Character.normalAttack2.Element = "CryoDMGBonus";
    Character.normalAttack2.isReaction = false;
    Character.normalAttack3.Element = "CryoDMGBonus";
    Character.normalAttack3.isReaction = false;
    Character.normalAttack4.Element = "CryoDMGBonus";
    Character.normalAttack4.isReaction = true;
    return dmg;
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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
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
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    if (crimsonWitch >= 4 && crimsonWitchStacks < 3) {
        Character.advancedstats.elementalBonuses[0].Value += 7.5;
        crimsonWitchStacks++;
    }
    attack.Multiplier = skillMultiplier3;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    if (crimsonWitch >= 4 && crimsonWitchStacks < 3) {
        Character.advancedstats.elementalBonuses[0].Value += 7.5;
        crimsonWitchStacks++;
    }

    return dmg;
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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character);
    for (let index = 0; index <= 5; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character);
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character);
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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = 0;
    switch (grimheartStack) {
        case 0: case 1:
            attack.Multiplier = skillMultiplier;
            dmg = dmgCalc(attack, Character) * numberOfEnemies;
            grimheartStack += 2;
            break;
        case 2:
            attack.Multiplier = skillMultiplier2;
            dmg = dmgCalc(attack, Character) * numberOfEnemies;
            attack.isReaction = false;
            attack.Multiplier = skillMultiplier3;
            dmg += dmgCalc(attack, Character,) * numberOfEnemies;
            dmg += dmgCalc(attack, Character,) * numberOfEnemies;
            let haveRime = false;
            Character.currentBuffs.forEach(buff => {
                if (buff.Type == "Roiling Rime")
                    haveRime = true;

            })
            if (haveRime) {
                attack.Multiplier = lightfallSword / 2;
                attack.isReaction = false;
                attack.Element = "PhysicalDMGBonus";
                dmg += dmgCalc(attack, Character) * numberOfEnemies;
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
    let attack = { Multiplier: skillMultiplier2, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = skillMultiplier;
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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let atkIncreaseRoof = Character.baseattack * 4;
    atkIncrease *= Character.HP();
    if (atkIncrease > atkIncreaseRoof)
        atkIncrease = atkIncreaseRoof;
    Character.currentBuffs.push({ Type: "ATKflat", Value: atkIncrease });
    let dmg = dmgCalc(attack, Character) * numberOfEnemies * 2;
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
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


    return { dmg: dmg };
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
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


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
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, Type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Character.plungeAttack.Multiplier(Character.normalAttackLevel);
    const swirlAbleElements = ["Pyro", "Hydro", "Electro", "Cryo"];
    if (swirlAbleElements.includes(supportingElement)) {
        attack.Element = supportingElement;
        Character.currentBuffs.forEach(buff => {
            if (buff.Type == "Soumon Sowrdmanship") {
                const a1passiveAttack = { Multiplier: 200 / 100, Element: supportingElement, Scaling: "ATK", isReaction: true, Type: "PlungingAttack" }
                dmg += dmgCalc(attack, Character) * numberOfEnemies;

            }
        });
    }
    attack.Type = "PlungingAttack";
    dmg += dmgCalc(attack, Character) * numberOfEnemies; //Plunge Attack
    return { dmg: dmg };
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
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = slashDMG;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;

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
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    if (Character.hasBuffOfType("Dissolution Eon: Heaven Fall")) {
        Character.currentBuffs.push({ Type: "ElementalSkill", Value: 5 });
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
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.isReaction = false;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = Multipler2;
    dmg += dmgCalc(attack, Character) * numberOfEnemies * 8;
    return dmg;
}

function violetArc(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 487.2 / 100;
            break;
        case 2:
            skillMultiplier = 523.74 / 100;
            break;
        case 3:
            skillMultiplier = 560.28 / 100;
            break;
        case 4:
            skillMultiplier = 609 / 100;
            break;
        case 5:
            skillMultiplier = 645.54 / 100;
            break;
        case 6:
            skillMultiplier = 682.08 / 100;
            break;
        case 7:
            skillMultiplier = 730.8 / 100;
            break;
        case 8:
            skillMultiplier = 779.52 / 100;
            break;
        case 9:
            skillMultiplier = 828.24 / 100;
            break;
        case 10:
            skillMultiplier = 876.96 / 100;
            break;
        case 11:
            skillMultiplier = 925.68 / 100;
            break;
        case 12:
            skillMultiplier = 974.4 / 100;
            break;
        case 13:
            skillMultiplier = 1035.3 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


    return dmg;
}

function mirrorReflectionofDoom(Character) {
    let skillMultiplier = 0;
    let Multipler2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 32 / 100;
            Multipler2 = 132.8 / 100;
            break;
        case 2:
            skillMultiplier = 34.4 / 100;
            Multipler2 = 142.76 / 100;
            break;
        case 3:
            skillMultiplier = 36.8 / 100;
            Multipler2 = 152.72 / 100;
            break;
        case 4:
            skillMultiplier = 40 / 100;
            Multipler2 = 166 / 100;
            break;
        case 5:
            skillMultiplier = 42.4 / 100;
            Multipler2 = 175.96 / 100;
            break;
        case 6:
            skillMultiplier = 44.8 / 100;
            Multipler2 = 185.92 / 100;
            break;
        case 7:
            skillMultiplier = 48 / 100;
            Multipler2 = 199.2 / 100;
            break;
        case 8:
            skillMultiplier = 51.2 / 100;
            Multipler2 = 212.48 / 100;
            break;
        case 9:
            skillMultiplier = 54.4 / 100;
            Multipler2 = 225.76 / 100;
            break;
        case 10:
            skillMultiplier = 57.6 / 100;
            Multipler2 = 239.04 / 100;
            break;
        case 11:
            skillMultiplier = 60.8 / 100;
            Multipler2 = 252.32 / 100;
            break;
        case 12:
            skillMultiplier = 64 / 100;
            Multipler2 = 265.6 / 100;
            break;
        case 13:
            skillMultiplier = 68 / 100;
            Multipler2 = 282.2 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies * 2;
    attack.isReaction = false;
    dmg += dmgCalc(attack, Character) * numberOfEnemies * 2;
    attack.Multiplier = Multipler2;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function jadeScreen(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 230.4 / 100;
            break;
        case 2:
            skillMultiplier = 247.68 / 100;
            break;
        case 3:
            skillMultiplier = 264.96 / 100;
            break;
        case 4:
            skillMultiplier = 288 / 100;
            break;
        case 5:
            skillMultiplier = 305.28 / 100;
            break;
        case 6:
            skillMultiplier = 322.56 / 100;
            break;
        case 7:
            skillMultiplier = 345.6 / 100;
            break;
        case 8:
            skillMultiplier = 368.64 / 100;
            break;
        case 9:
            skillMultiplier = 391.68 / 100;
            break;
        case 10:
            skillMultiplier = 414.72 / 100;
            break;
        case 11:
            skillMultiplier = 437.76 / 100;
            break;
        case 12:
            skillMultiplier = 460.8 / 100;
            break;
        case 13:
            skillMultiplier = 489.6 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


    return dmg;
}

function breastplate(Character) {
    let skillMultiplier = 0;
    let shield = 0;
    let healing = 0;
    let chance = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 120 / 100;
            shield = (Character.DEF() * 1.60) + 769;
            healing = (Character.DEF() * (21.28 / 100)) + 102;
            chance = 50;
            break;
        case 2:
            skillMultiplier = 129 / 100;
            shield = (Character.DEF() * 1.72) + 846;
            healing = (Character.DEF() * (22.88 / 100)) + 112;
            chance = 51;
            break;
        case 3:
            skillMultiplier = 138 / 100;
            shield = (Character.DEF() * 1.84) + 930;
            healing = (Character.DEF() * (24.47 / 100)) + 124;
            chance = 52;
            break;
        case 4:
            skillMultiplier = 150 / 100;
            shield = (Character.DEF() * 2) + 1020;
            healing = (Character.DEF() * (26.6 / 100)) + 136;
            chance = 53;
            break;
        case 5:
            skillMultiplier = 159 / 100;
            shield = (Character.DEF() * 2.12) + 1116;
            healing = (Character.DEF() * (28.2 / 100)) + 148;
            chance = 54;
            break;
        case 6:
            skillMultiplier = 168 / 100;
            shield = (Character.DEF() * 2.24) + 1218;
            healing = (Character.DEF() * (29.79 / 100)) + 162;
            chance = 55;
            break;
        case 7:
            skillMultiplier = 180 / 100;
            shield = (Character.DEF() * 2.40) + 1327;
            healing = (Character.DEF() * (31.92 / 100)) + 177;
            chance = 56;
            break;
        case 8:
            skillMultiplier = 192 / 100;
            shield = (Character.DEF() * 2.56) + 1443;
            healing = (Character.DEF() * (34.05 / 100)) + 192;
            chance = 57;
            break;
        case 9:
            skillMultiplier = 204 / 100;
            shield = (Character.DEF() * 2.72) + 1565;
            healing = (Character.DEF() * (36.18 / 100)) + 208;
            chance = 58;
            break;
        case 10:
            skillMultiplier = 216 / 100;
            shield = (Character.DEF() * 2.88) + 1693;
            healing = (Character.DEF() * (38.3 / 100)) + 225;
            chance = 59;
            break;
        case 11:
            skillMultiplier = 228 / 100;
            shield = (Character.DEF() * 3.04) + 1828;
            healing = (Character.DEF() * (40.43 / 100)) + 243;
            chance = 59;
            break;
        case 12:
            skillMultiplier = 240 / 100;
            shield = (Character.DEF() * 3.20) + 1969;
            healing = (Character.DEF() * (42.56 / 100)) + 262;
            chance = 60;
            break;
        case 13:
            skillMultiplier = 255 / 100;
            shield = (Character.DEF() * 3.40) + 2117;
            healing = (Character.DEF() * (45.22 / 100)) + 282;
            chance = 60;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let heal = healing * (chance / 100) * 12;
    shield *= (1 + (Character.advancedstats.shieldStrength / 100));
    healingHasOccured(Character);
    return { dmg: dmg, shield: shield, healing: heal };
}

function heraldofFrost(Character) {
    let skillMultiplier = 0;
    let regenHit = 0;
    let regenCon = 0;
    let frostDmg = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 96 / 100;
            regenHit = (Character.attack() * (10.56 / 100)) + 67.4;
            regenCon = (Character.attack() * (69.6 / 100)) + 450.55;
            frostDmg = 36 / 100;
            break;
        case 2:
            skillMultiplier = 103.2 / 100;
            regenHit = (Character.attack() * (11.35 / 100)) + 74.14;
            regenCon = (Character.attack() * (74.82 / 100)) + 495.61;
            frostDmg = 38.7 / 100;
            break;
        case 3:
            skillMultiplier = 110.4 / 100;
            regenHit = (Character.attack() * (12.14 / 100)) + 81.45;
            regenCon = (Character.attack() * (80.04 / 100)) + 544.42;
            frostDmg = 41.4 / 100;
            break;
        case 4:
            skillMultiplier = 120 / 100;
            regenHit = (Character.attack() * (13.2 / 100)) + 89.31;
            regenCon = (Character.attack() * (87 / 100)) + 597;
            frostDmg = 45 / 100;
            break;
        case 5:
            skillMultiplier = 127.2 / 100;
            regenHit = (Character.attack() * (13.99 / 100)) + 97.74;
            regenCon = (Character.attack() * (92.22 / 100)) + 653.32;
            frostDmg = 47.7 / 100;
            break;
        case 6:
            skillMultiplier = 134.4 / 100;
            regenHit = (Character.attack() * (14.78 / 100)) + 106.73;
            regenCon = (Character.attack() * (97.44 / 100)) + 713.4;
            frostDmg = 50.4 / 100;
            break;
        case 7:
            skillMultiplier = 144 / 100;
            regenHit = (Character.attack() * (15.84 / 100)) + 116.28;
            regenCon = (Character.attack() * (104.4 / 100)) + 777.24;
            frostDmg = 54 / 100;
            break;
        case 8:
            skillMultiplier = 153.6 / 100;
            regenHit = (Character.attack() * (16.9 / 100)) + 126.39;
            regenCon = (Character.attack() * (111.36 / 100)) + 844.83;
            frostDmg = 57.6 / 100;
            break;
        case 9:
            skillMultiplier = 163.2 / 100;
            regenHit = (Character.attack() * (17.95 / 100)) + 137.07;
            regenCon = (Character.attack() * (118.32 / 100)) + 916.18;
            frostDmg = 61.2 / 100;
            break;
        case 10:
            skillMultiplier = 172.8 / 100;
            regenHit = (Character.attack() * (19.01 / 100)) + 148.3;
            regenCon = (Character.attack() * (125.28 / 100)) + 991.28;
            frostDmg = 64.8 / 100;
            break;
        case 11:
            skillMultiplier = 182.4 / 100;
            regenHit = (Character.attack() * (20.06 / 100)) + 160.1;
            regenCon = (Character.attack() * (132.24 / 100)) + 1070;
            frostDmg = 68.4 / 100;
            break;
        case 12:
            skillMultiplier = 192 / 100;
            regenHit = (Character.attack() * (21.12 / 100)) + 172.46;
            regenCon = (Character.attack() * (139.2 / 100)) + 1152;
            frostDmg = 72 / 100;
            break;
        case 13:
            skillMultiplier = 204 / 100;
            regenHit = (Character.attack() * (22.44 / 100)) + 185.38;
            regenCon = (Character.attack() * (147.9 / 100)) + 1239;
            frostDmg = 76.5 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = frostDmg;
    for (let index = 0; index < 4; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }
        else {
            attack.isReaction = false;

            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }

    }

    let heal = regenCon * 4 + (regenHit * 8 * 4) * (1 + (Character.advancedstats.healingBonus / 100));

    healingHasOccured(Character);

    return { dmg: dmg, healing: heal };
}

function clawandThunder(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 295.2 / 100;
            break;
        case 2:
            skillMultiplier = 317.3 / 100;
            break;
        case 3:
            skillMultiplier = 339.48 / 100;
            break;
        case 4:
            skillMultiplier = 369 / 100;
            break;
        case 5:
            skillMultiplier = 391.14 / 100;
            break;
        case 6:
            skillMultiplier = 413.28 / 100;
            break;
        case 7:
            skillMultiplier = 442.8 / 100;
            break;
        case 8:
            skillMultiplier = 472.32 / 100;
            break;
        case 9:
            skillMultiplier = 501.84 / 100;
            break;
        case 10:
            skillMultiplier = 531.36 / 100;
            break;
        case 11:
            skillMultiplier = 560.88 / 100;
            break;
        case 12:
            skillMultiplier = 590.4 / 100;
            break;
        case 13:
            skillMultiplier = 627.3 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


    return dmg;
}

function ravagingConfession(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = (58.4 + 136) / 100;
            break;
        case 2:
            skillMultiplier = (62.78 + 146.2) / 100;
            break;
        case 3:
            skillMultiplier = (67.16 + 156.4) / 100;
            break;
        case 4:
            skillMultiplier = (73 + 170) / 100;
            break;
        case 5:
            skillMultiplier = (77.38 + 180.2) / 100;
            break;
        case 6:
            skillMultiplier = (81.76 + 190.4) / 100;
            break;
        case 7:
            skillMultiplier = (87.6 + 204) / 100;
            break;
        case 8:
            skillMultiplier = (93.44 + 217.6) / 100;
            break;
        case 9:
            skillMultiplier = (99.28 + 231.2) / 100;
            break;
        case 10:
            skillMultiplier = (105.12 + 244.8) / 100;
            break;
        case 11:
            skillMultiplier = (110.96 + 258.4) / 100;
            break;
        case 12:
            skillMultiplier = (116.8 + 272) / 100;
            break;
        case 13:
            skillMultiplier = (124.1 + 289) / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function fuuinDash(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 36 / 100;
            skillMultiplier2 = 158.4 / 100;
            break;
        case 2:
            skillMultiplier = 38.7 / 100;
            skillMultiplier2 = 170.3 / 100;
            break;
        case 3:
            skillMultiplier = 41.4 / 100;
            skillMultiplier2 = 182.2 / 100;
            break;
        case 4:
            skillMultiplier = 45 / 100;
            skillMultiplier2 = 198 / 100;
            break;
        case 5:
            skillMultiplier = 47.7 / 100;
            skillMultiplier2 = 209.88 / 100;
            break;
        case 6:
            skillMultiplier = 50.4 / 100;
            skillMultiplier2 = 221.76 / 100;
            break;
        case 7:
            skillMultiplier = 54 / 100;
            skillMultiplier2 = 237.6 / 100;
            break;
        case 8:
            skillMultiplier = 57.6 / 100;
            skillMultiplier2 = 253.44 / 100;
            break;
        case 9:
            skillMultiplier = 61.2 / 100;
            skillMultiplier2 = 269.28 / 100;
            break;
        case 10:
            skillMultiplier = 64.8 / 100;
            skillMultiplier2 = 285.12 / 100;
            break;
        case 11:
            skillMultiplier = 68.4 / 100;
            skillMultiplier2 = 300.96 / 100;
            break;
        case 12:
            skillMultiplier = 72 / 100;
            skillMultiplier2 = 316.8 / 100;
            break;
        case 13:
            skillMultiplier = 76.5 / 100;
            skillMultiplier2 = 336.6 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character);
    let heal = 0;
    attack.isReaction = false;
    attack.Multiplier = skillMultiplier2;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Someone More Capable") {
            heal = ((Character.EM() * 1.2) + 300) * 4;
        }
    })
    healingHasOccured(Character);
    return { dmg: dmg, healing: heal };
}

function astableAnemohypostasisCreation(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 211.2 / 100;
            break;
        case 2:
            skillMultiplier = 227.04 / 100;
            break;
        case 3:
            skillMultiplier = 242.88 / 100;
            break;
        case 4:
            skillMultiplier = 264 / 100;
            break;
        case 5:
            skillMultiplier = 279.84 / 100;
            break;
        case 6:
            skillMultiplier = 295.68 / 100;
            break;
        case 7:
            skillMultiplier = 316.8 / 100;
            break;
        case 8:
            skillMultiplier = 337.92 / 100;
            break;
        case 9:
            skillMultiplier = 359.04 / 100;
            break;
        case 10:
            skillMultiplier = 380.16 / 100;
            break;
        case 11:
            skillMultiplier = 401.28 / 100;
            break;
        case 12:
            skillMultiplier = 422.4 / 100;
            break;
        case 13:
            skillMultiplier = 448.8 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character);


    return { dmg: dmg };
}

function ragingTide(Character) {
    let skillMultiplier = 0;
    let oneHit = 0;
    let twoHit = 0;
    let threeHit = 0;
    let charged1 = 0;
    let charged2 = 0;
    let riptideSlash = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 72 / 100;
            oneHit = 38.87 / 100;
            twoHit = 41.62 / 100;
            threeHit = 56.33 / 100;
            charged1 = 60.2 / 100;
            charged2 = 71.98 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 2:
            skillMultiplier = 77.4 / 100;
            oneHit = 42.04 / 100;
            twoHit = 45.01 / 100;
            threeHit = 60.91 / 100;
            charged1 = 65.1 / 100;
            charged2 = 77.84 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 3:
            skillMultiplier = 82.8 / 100;
            oneHit = 45.2 / 100;
            twoHit = 48.4 / 100;
            threeHit = 65.5 / 100;
            charged1 = 70 / 100;
            charged2 = 83.7 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 4:
            skillMultiplier = 90 / 100;
            oneHit = 49.72 / 100;
            twoHit = 53.24 / 100;
            threeHit = 72.05 / 100;
            charged1 = 77 / 100;
            charged2 = 92.07 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 5:
            skillMultiplier = 95.4 / 100;
            oneHit = 52.88 / 100;
            twoHit = 56.63 / 100;
            threeHit = 76.63 / 100;
            charged1 = 81.9 / 100;
            charged2 = 97.93 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 6:
            skillMultiplier = 100.8 / 100;
            oneHit = 56.5 / 100;
            twoHit = 60.5 / 100;
            threeHit = 81.88 / 100;
            charged1 = 87.5 / 100;
            charged2 = 104.62 / 100;
            charged1 = 60.2 / 100;
            break;
        case 7:
            skillMultiplier = 108 / 100;
            oneHit = 61.47 / 100;
            twoHit = 65.82 / 100;
            threeHit = 89.08 / 100;
            charged1 = 113.83 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 8:
            skillMultiplier = 115.2 / 100;
            oneHit = 66.44 / 100;
            twoHit = 71.15 / 100;
            threeHit = 96.28 / 100;
            charged1 = 102.9 / 100;
            charged2 = 123.04 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 9:
            skillMultiplier = 122.4 / 100;
            oneHit = 71.42 / 100;
            twoHit = 76.47 / 100;
            threeHit = 103.49 / 100;
            charged1 = 110.6 / 100;
            charged2 = 132.25 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 10:
            skillMultiplier = 129.6 / 100;
            oneHit = 76.84 / 100;
            twoHit = 82.28 / 100;
            threeHit = 111.35 / 100;
            charged1 = 119 / 100;
            charged2 = 142.29 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 11:
            skillMultiplier = 136.8 / 100;
            oneHit = 82.26 / 100;
            twoHit = 88.09 / 100;
            threeHit = 119.21 / 100;
            charged1 = 127.4 / 100;
            charged2 = 152.33 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 12:
            skillMultiplier = 144 / 100;
            oneHit = 87.69 / 100;
            twoHit = 93.9 / 100;
            threeHit = 127.07 / 100;
            charged1 = 135.8 / 100;
            charged2 = 162.38 / 100;
            riptideSlash = 60.2 / 100;
            break;
        case 13:
            skillMultiplier = 153 / 100;
            oneHit = 93.11 / 100;
            twoHit = 99.7 / 100;
            threeHit = 134.93 / 100;
            charged1 = 144.2 / 100;
            charged2 = 172.42 / 100;
            riptideSlash = 60.2 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let sequence = ["N1", "N2", "N3", "C"];
    for (let index = 0; index < 3; index++) {
        sequence.forEach(action => {
            switch (action) {
                case "N1":
                    attack.isReaction = true;
                    attack.Multiplier = oneHit;
                    attack.type = "NormalAttack";
                    dmg += dmgCalc(attack, Character);
                    break;
                case "N2":
                    attack.isReaction = false;
                    attack.Multiplier = twoHit;
                    attack.type = "NormalAttack";
                    dmg += dmgCalc(attack, Character);
                    break;
                case "N3":
                    attack.isReaction = false;
                    attack.Multiplier = threeHit;
                    attack.type = "NormalAttack";
                    dmg += dmgCalc(attack, Character);

                    break;
                case "C":
                    attack.isReaction = true;
                    attack.Multiplier = charged1;
                    attack.type = "ChargedAttack";
                    dmg += dmgCalc(attack, Character);
                    attack.isReaction = false;
                    attack.Multiplier = charged2;
                    dmg += dmgCalc(attack, Character);
                    break;

                default:
                    break;
            }
            attack.isReaction = false;
            attack.Multiplier = riptideSlash;
            //Riptide slash
            //Three enemies, n^2 scaling so 3^2 = 9
            attack.type = "ElementalSkill";
            dmg += dmgCalc(attack, Character) * numberOfEnemies * numberOfEnemies;
        });

    }



    return dmg;
}

function palmVortex(Character) {
    let initialCuttingDmg = 0;
    let maxCuttingDmg = 0;
    let initialStormDmg = 0;
    let maxStormDmg = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            initialCuttingDmg = 12 / 100;
            maxCuttingDmg = 16.8 / 100;
            initialStormDmg = 176 / 100;
            maxStormDmg = 192 / 100;
            break;
        case 2:
            initialCuttingDmg = 12.9 / 100;
            maxCuttingDmg = 18.06 / 100;
            initialStormDmg = 189.2 / 100;
            maxStormDmg = 206.4 / 100;
            break;
        case 3:
            initialCuttingDmg = 13.8 / 100;
            maxCuttingDmg = 19.32 / 100;
            initialStormDmg = 202.4 / 100;
            maxStormDmg = 220.8 / 100;
            break;
        case 4:
            initialCuttingDmg = 15 / 100;
            maxCuttingDmg = 21 / 100;
            initialStormDmg = 220 / 100;
            maxStormDmg = 240 / 100;
            break;
        case 5:
            initialCuttingDmg = 15.9 / 100;
            maxCuttingDmg = 22.26 / 100;
            initialStormDmg = 233.2 / 100;
            maxStormDmg = 254.4 / 100;
            break;
        case 6:
            initialCuttingDmg = 16.8 / 100;
            maxCuttingDmg = 23.52 / 100;
            initialStormDmg = 246.4 / 100;
            maxStormDmg = 268.8 / 100;
            break;
        case 7:
            initialCuttingDmg = 18 / 100;
            maxCuttingDmg = 25.2 / 100;
            initialStormDmg = 264 / 100;
            maxStormDmg = 288 / 100;
            break;
        case 8:
            initialCuttingDmg = 19.2 / 100;
            maxCuttingDmg = 26.88 / 100;
            initialStormDmg = 281.6 / 100;
            maxStormDmg = 307.2 / 100;
            break;
        case 9:
            initialCuttingDmg = 20.4 / 100;
            maxCuttingDmg = 28.56 / 100;
            initialStormDmg = 299.2 / 100;
            maxStormDmg = 326.4 / 100;
            break;
        case 10:
            initialCuttingDmg = 21.6 / 100;
            maxCuttingDmg = 30.24 / 100;
            initialStormDmg = 316.8 / 100;
            maxStormDmg = 345.6 / 100;
            break;
        case 11:
            initialCuttingDmg = 22.8 / 100;
            maxCuttingDmg = 31.92 / 100;
            initialStormDmg = 334.4 / 100;
            maxStormDmg = 364.8 / 100;
            break;
        case 12:
            initialCuttingDmg = 24 / 100;
            maxCuttingDmg = 33.6 / 100;
            initialStormDmg = 352 / 100;
            maxStormDmg = 384 / 100;
            break;
        case 13:
            initialCuttingDmg = 25.5 / 100;
            maxCuttingDmg = 35.7 / 100;
            initialStormDmg = 374 / 100;
            maxStormDmg = 408 / 100;
            break;
    }
    let attack = { Multiplier: initialStormDmg, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    for (let index = 0; index < 6; index++) {
        if (index > 1) {
            if (index == 3)
                attack.isReaction = true;
            else
                attack.isReaction = false;
            attack.Multiplier = maxCuttingDmg;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        } else {
            attack.Multiplier = initialCuttingDmg;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }
    }
    attack.isReaction = true;
    attack.Multiplier = maxStormDmg;
    dmg += dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function starfellSword(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 248 / 100;
            break;
        case 2:
            skillMultiplier = 266.6 / 100;
            break;
        case 3:
            skillMultiplier = 285.2 / 100;
            break;
        case 4:
            skillMultiplier = 310 / 100;
            break;
        case 5:
            skillMultiplier = 328.6 / 100;
            break;
        case 6:
            skillMultiplier = 347.2 / 100;
            break;
        case 7:
            skillMultiplier = 372 / 100;
            break;
        case 8:
            skillMultiplier = 396.8 / 100;
            break;
        case 9:
            skillMultiplier = 421.6 / 100;
            break;
        case 10:
            skillMultiplier = 446.4 / 100;
            break;
        case 11:
            skillMultiplier = 471.2 / 100;
            break;
        case 12:
            skillMultiplier = 496 / 100;
            break;
        case 13:
            skillMultiplier = 527 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


    return dmg;
}

function lightningBlade(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 78.66 / 100;
            break;
        case 2:
            skillMultiplier = 84.56 / 100;
            break;
        case 3:
            skillMultiplier = 90.46 / 100;
            break;
        case 4:
            skillMultiplier = 98.33 / 100;
            break;
        case 5:
            skillMultiplier = 104.23 / 100;
            break;
        case 6:
            skillMultiplier = 110.13 / 100;
            break;
        case 7:
            skillMultiplier = 118 / 100;
            break;
        case 8:
            skillMultiplier = 125.86 / 100;
            break;
        case 9:
            skillMultiplier = 133.73 / 100;
            break;
        case 10:
            skillMultiplier = 141.6 / 100;
            break;
        case 11:
            skillMultiplier = 149.46 / 100;
            break;
        case 12:
            skillMultiplier = 157.33 / 100;
            break;
        case 13:
            skillMultiplier = 167.16 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;


    return dmg;
}

function skywardSonnet(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 276 / 100;
            break;
        case 2:
            skillMultiplier = 296.7 / 100;
            break;
        case 3:
            skillMultiplier = 317.4 / 100;
            break;
        case 4:
            skillMultiplier = 345 / 100;
            break;
        case 5:
            skillMultiplier = 365.7 / 100;
            break;
        case 6:
            skillMultiplier = 386.4 / 100;
            break;
        case 7:
            skillMultiplier = 414 / 100;
            break;
        case 8:
            skillMultiplier = 441.6 / 100;
            break;
        case 9:
            skillMultiplier = 469.2 / 100;
            break;
        case 10:
            skillMultiplier = 496.8 / 100;
            break;
        case 11:
            skillMultiplier = 524.4 / 100;
            break;
        case 12:
            skillMultiplier = 552 / 100;
            break;
        case 13:
            skillMultiplier = 586.5 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function goubaAttack(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 111.28 / 100;
            break;
        case 2:
            skillMultiplier = 119.63 / 100;
            break;
        case 3:
            skillMultiplier = 127.97 / 100;
            break;
        case 4:
            skillMultiplier = 139.1 / 100;
            break;
        case 5:
            skillMultiplier = 147.45 / 100;
            break;
        case 6:
            skillMultiplier = 155.79 / 100;
            break;
        case 7:
            skillMultiplier = 166.92 / 100;
            break;
        case 8:
            skillMultiplier = 178.05 / 100;
            break;
        case 9:
            skillMultiplier = 189.18 / 100;
            break;
        case 10:
            skillMultiplier = 200.3 / 100;
            break;
        case 11:
            skillMultiplier = 211.43 / 100;
            break;
        case 12:
            skillMultiplier = 222.56 / 100;
            break;
        case 13:
            skillMultiplier = 236.47 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies * 4;
    return dmg;
}

function fatalRainscreen(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 168 / 100;
            skillMultiplier2 = 191.2 / 100;
            break;
        case 2:
            skillMultiplier = 180.6 / 100;
            skillMultiplier2 = 205.54 / 100;
            break;
        case 3:
            skillMultiplier = 193.2 / 100;
            skillMultiplier2 = 219.88 / 100;
            break;
        case 4:
            skillMultiplier = 210 / 100;
            skillMultiplier2 = 239 / 100;
            break;
        case 5:
            skillMultiplier = 222.6 / 100;
            skillMultiplier2 = 253.34 / 100;
            break;
        case 6:
            skillMultiplier = 235.2 / 100;
            skillMultiplier2 = 267.68 / 100;
            break;
        case 7:
            skillMultiplier = 252 / 100;
            skillMultiplier2 = 286.8 / 100;
            break;
        case 8:
            skillMultiplier = 268.8 / 100;
            skillMultiplier2 = 305.92 / 100;
            break;
        case 9:
            skillMultiplier = 285.6 / 100;
            skillMultiplier2 = 325.04 / 100;
            break;
        case 10:
            skillMultiplier = 302.4 / 100;
            skillMultiplier2 = 344.16 / 100;
            break;
        case 11:
            skillMultiplier = 319.2 / 100;
            skillMultiplier2 = 363.28 / 100;
            break;
        case 12:
            skillMultiplier = 336 / 100;
            skillMultiplier2 = 382.4 / 100;
            break;
        case 13:
            skillMultiplier = 357 / 100;
            skillMultiplier2 = 406.3 / 100;
            break;
    }
    let eNotUsed = true;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "eUsed" && Character.weapon.name != "Sacrificial Sword") {
            eNotUsed = false;
        }
    });
    if (eNotUsed) {
        let attack = { Multiplier: skillMultiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
        let dmg = dmgCalc(attack, Character);
        attack.isReaction = false;
        attack.Multiplier = skillMultiplier2;
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
        Character.currentBuffs.push({ Type: "eUsed", Value: null });

        return dmg;
    } else {
        return 0;
    }
}

function sweepingFervor(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    let shieldMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 169.6 / 100;
            skillMultiplier2 = 33.6 / 100;
            shieldMultiplier = (Character.DEF() * (144 / 100)) + 692.8;
            break;
        case 2:
            skillMultiplier = 182.32 / 100;
            skillMultiplier2 = 36.12 / 100;
            shieldMultiplier = (Character.DEF() * (154.8 / 100)) + 762.09;
            break;
        case 3:
            skillMultiplier = 195.04 / 100;
            skillMultiplier2 = 38.64 / 100;
            shieldMultiplier = (Character.DEF() * (165.6 / 100)) + 837.16;
            break;
        case 4:
            skillMultiplier = 212 / 100;
            skillMultiplier2 = 42 / 100;
            shieldMultiplier = (Character.DEF() * (180 / 100)) + 918;
            break;
        case 5:
            skillMultiplier = 224.72 / 100;
            skillMultiplier2 = 44.52 / 100;
            shieldMultiplier = (Character.DEF() * (190.8 / 100)) + 1004;
            break;
        case 6:
            skillMultiplier = 237.44 / 100;
            skillMultiplier2 = 47.04 / 100;
            shieldMultiplier = (Character.DEF() * (201.6 / 100)) + 1096;
            break;
        case 7:
            skillMultiplier = 254.4 / 100;
            skillMultiplier2 = 50.4 / 100;
            shieldMultiplier = (Character.DEF() * (216 / 100)) + 1195;
            break;
        case 8:
            skillMultiplier = 271.36 / 100;
            skillMultiplier2 = 53.76 / 100;
            shieldMultiplier = (Character.DEF() * (230.4 / 100)) + 1299;
            break;
        case 9:
            skillMultiplier = 288.32 / 100;
            skillMultiplier2 = 57.12 / 100;
            shieldMultiplier = (Character.DEF() * (244.8 / 100)) + 1408;
            break;
        case 10:
            skillMultiplier = 305.28 / 100;
            skillMultiplier2 = 60.48 / 100;
            shieldMultiplier = (Character.DEF() * (259.2 / 100)) + 1524;
            break;
        case 11:
            skillMultiplier = 322.24 / 100;
            skillMultiplier2 = 63.84 / 100;
            shieldMultiplier = (Character.DEF() * (273.6 / 100)) + 1645;
            break;
        case 12:
            skillMultiplier = 339.2 / 100;
            skillMultiplier2 = 67.2 / 100;
            shieldMultiplier = (Character.DEF() * (288 / 100)) + 1772;
            break;
        case 13:
            skillMultiplier = 360.4 / 100;
            skillMultiplier2 = 71.4 / 100;
            shieldMultiplier = (Character.DEF() * (306 / 100)) + 1905;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = skillMultiplier2;
    for (let index = 0; index < 6; index++) {
        dmg += dmgCalc(attack, Character) * numberOfEnemies;
    }

    let shield = shieldMultiplier * (1 + Character.advancedstats.shieldStrength);
    return { dmg: dmg, shield: shield };

}

function signedEdict(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 169.6 / 100;
            break;
        case 2:
            skillMultiplier = 182.32 / 100;
            break;
        case 3:
            skillMultiplier = 195.04 / 100;
            break;
        case 4:
            skillMultiplier = 212 / 100;
            break;
        case 5:
            skillMultiplier = 224.72 / 100;
            break;
        case 6:
            skillMultiplier = 237.44 / 100;
            break;
        case 7:
            skillMultiplier = 254.4 / 100;
            break;
        case 8:
            skillMultiplier = 271.36 / 100;
            break;
        case 9:
            skillMultiplier = 288.32 / 100;
            break;
        case 10:
            skillMultiplier = 305.28 / 100;
            break;
        case 11:
            skillMultiplier = 322.24 / 100;
            break;
        case 12:
            skillMultiplier = 339.2 / 100;
            break;
        case 13:
            skillMultiplier = 360.4 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function niwabiFireDance(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 137.91 / 100;
            break;
        case 2:
            skillMultiplier = 140.18 / 100;
            break;
        case 3:
            skillMultiplier = 142.45 / 100;
            break;
        case 4:
            skillMultiplier = 145.40 / 100;
            break;
        case 5:
            skillMultiplier = 147.67 / 100;
            break;
        case 6:
            skillMultiplier = 149.94 / 100;
            break;
        case 7:
            skillMultiplier = 152.89 / 100;
            break;
        case 8:
            skillMultiplier = 155.84 / 100;
            break;
        case 9:
            skillMultiplier = 158.79 / 100;
            break;
        case 10:
            skillMultiplier = 161.74 / 100;
            break;
        case 11:
            skillMultiplier = 164.69 / 100;
            break;
        case 12:
            skillMultiplier = 167.65 / 100;
            break;
        case 13:
            skillMultiplier = 170.60 / 100;
            break;
    }
    Character.currentBuffs.push({ Type: "YoimiyaEBuff", Value: skillMultiplier });
    return 0;
}

function dominusLapidis(Character) {
    let skillMultiplier = 0;
    let holdDmg = 0;
    let shield = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 16 / 100;
            holdDmg = 80 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 1232;
            break;
        case 2:
            skillMultiplier = 17.2 / 100;
            holdDmg = 86 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 1355;
            break;
        case 3:
            skillMultiplier = 18.4 / 100;
            holdDmg = 92 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 1489;
            break;
        case 4:
            skillMultiplier = 20 / 100;
            holdDmg = 100 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 1633;
            break;
        case 5:
            skillMultiplier = 21.2 / 100;
            holdDmg = 106 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 1787;
            break;
        case 6:
            skillMultiplier = 22.4 / 100;
            holdDmg = 112 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 1951;
            break;
        case 7:
            skillMultiplier = 24 / 100;
            holdDmg = 120 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 2126;
            break;
        case 8:
            skillMultiplier = 25.6 / 100;
            holdDmg = 128 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 2310;
            break;
        case 9:
            skillMultiplier = 27.2 / 100;
            holdDmg = 136 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 2506;
            break;
        case 10:
            skillMultiplier = 28.8 / 100;
            holdDmg = 144 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 2711;
            break;
        case 11:
            skillMultiplier = 30.4 / 100;
            holdDmg = 152 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 2927;
            break;
        case 12:
            skillMultiplier = 32 / 100;
            holdDmg = 160 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 3153;
            break;
        case 13:
            skillMultiplier = 34 / 100;
            holdDmg = 170 / 100;
            shield = (Character.HP() * (12.80 / 100)) + 3389;
            break;
    }
    let dmg = dmgCalc({ Multiplier: holdDmg, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill" }, Character) * numberOfEnemies;
    for (let index = 0; index < 15; index++) {
        dmg += dmgCalc({ Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill" }, Character) * numberOfEnemies;
    }


    shield *= 1 + (Character.advancedstats.shieldStrength / 100);
    return { dmg: dmg, shield: shield };
}

function frozenWilds(Character) {
    let skillMultiplier = 0;
    let bomb = 0;
    let buff = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 177.6 / 100;
            bomb = 40 / 100;
            buff = 29.23;
            break;
        case 2:
            skillMultiplier = 190.92 / 100;
            bomb = 43 / 100;
            buff = 30.98;
            break;
        case 3:
            skillMultiplier = 204.24 / 100;
            bomb = 46 / 100;
            buff = 32.73;
            break;
        case 4:
            skillMultiplier = 222 / 100;
            bomb = 50 / 100;
            buff = 35;
            break;
        case 5:
            skillMultiplier = 235.32 / 100;
            bomb = 53 / 100;
            buff = 36.75;
            break;
        case 6:
            skillMultiplier = 248.64 / 100;
            bomb = 56 / 100;
            buff = 38.5;
            break;
        case 7:
            skillMultiplier = 266.4 / 100;
            bomb = 60 / 100;
            buff = 40.77;
            break;
        case 8:
            skillMultiplier = 284.16 / 100;
            bomb = 64 / 100;
            buff = 43.05;
            break;
        case 9:
            skillMultiplier = 301.92 / 100;
            bomb = 68 / 100;
            buff = 45.32;
            break;
        case 10:
            skillMultiplier = 319.68 / 100;
            bomb = 72 / 100;
            buff = 47.6;
            break;
        case 11:
            skillMultiplier = 319.68 / 100;
            bomb = 72 / 100;
            buff = 47.6;
            break;
        case 12:
            skillMultiplier = 319.68 / 100;
            bomb = 72 / 100;
            buff = 47.6;
            break;
        case 13:
            skillMultiplier = 319.68 / 100;
            bomb = 72 / 100;
            buff = 47.6;
            break;
    }
    let dmg = dmgCalc({ Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }, Character) * numberOfEnemies;
    for (let index = 0; index < 15; index++) {
        dmg += dmgCalc({ Multiplier: bomb, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill" }, Character) * numberOfEnemies * 6;
    }
    Character.currentBuffs.push({ Type: "NormalAttack", Value: buff });
    return dmg;
}

function kyouka(Character) {
    let skillMultiplier = 0;
    let oneHit = 0;
    let twoHit = 0;
    let threeHit = 0;
    let namisen = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 101.48 / 100;
            oneHit = 52.89 / 100;
            twoHit = 58.91 / 100;
            threeHit = 64.93 / 100;
            namisen = 0.56;
            break;
        case 2:
            skillMultiplier = 109.74 / 100;
            oneHit = 57.19 / 100;
            twoHit = 63.7 / 100;
            threeHit = 70.22 / 100;
            namisen = 0.61;
            break;
        case 3:
            skillMultiplier = 118 / 100;
            oneHit = 61.5 / 100;
            twoHit = 68.5 / 100;
            threeHit = 75.5 / 100;
            namisen = 0.65;
            break;
        case 4:
            skillMultiplier = 129.8 / 100;
            oneHit = 67.65 / 100;
            twoHit = 75.35 / 100;
            threeHit = 83.05 / 100;
            namisen = 0.72;
            break;
        case 5:
            skillMultiplier = 138.06 / 100;
            oneHit = 71.95 / 100;
            twoHit = 80.14 / 100;
            threeHit = 88.33 / 100;
            namisen = 0.76;
            break;
        case 6:
            skillMultiplier = 147.5 / 100;
            oneHit = 76.88 / 100;
            twoHit = 85.63 / 100;
            threeHit = 94.38 / 100;
            namisen = 0.82;
            break;
        case 7:
            skillMultiplier = 160.48 / 100;
            oneHit = 83.64 / 100;
            twoHit = 93.16 / 100;
            threeHit = 102.68 / 100;
            namisen = 0.89;
            break;
        case 8:
            skillMultiplier = 173.46 / 100;
            oneHit = 90.41 / 100;
            twoHit = 100.7 / 100;
            threeHit = 110.98 / 100;
            namisen = 0.96;
            break;
        case 9:
            skillMultiplier = 186.44 / 100;
            oneHit = 97.17 / 100;
            twoHit = 108.23 / 100;
            threeHit = 119.29 / 100;
            namisen = 1.03;
            break;
        case 10:
            skillMultiplier = 200.6 / 100;
            oneHit = 104.55 / 100;
            twoHit = 116.45 / 100;
            threeHit = 128.35 / 100;
            namisen = 1.11;
            break;
        case 11:
            skillMultiplier = 214.76 / 100;
            oneHit = 111.93 / 100;
            twoHit = 124.67 / 100;
            threeHit = 137.41 / 100;
            namisen = 1.19;
            break;
        case 12:
            skillMultiplier = 228.92 / 100;
            oneHit = 119.31 / 100;
            twoHit = 132.89 / 100;
            threeHit = 146.47 / 100;
            namisen = 1.27;
            break;
        case 13:
            skillMultiplier = 243.08 / 100;
            oneHit = 126.69 / 100;
            twoHit = 141.11 / 100;
            threeHit = 155.53 / 100;
            namisen = 1.34;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let namisenStacks = 0;
    let hasPassive = false;

    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Mine Wo Matoishi Kiyoyaki") {
            hasPassive = true;
        }

    });
    if (hasPassive) {
        namisenStacks = 4;
        for (let index = 0; index < 15; index++) {
            switch (index % 3) {
                case 0:
                    attack.isReaction = true;
                    attack.Multiplier = oneHit * ((namisen * namisenStacks) * Character.HP());
                    break;
                case 1:
                    attack.isReaction = false;
                    attack.Multiplier = twoHit * ((namisen * namisenStacks) * Character.HP());
                    break;
                case 2:
                    attack.isReaction = false;
                    attack.Multiplier = threeHit * ((namisen * namisenStacks) * Character.HP());
                    break;

            }
            attack.type = "NormalAttack";
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }
    } else {

    }




    return dmg;
}

function inuzakaAllRoundDefense(Character) {
    let skillMultiplier = 0;
    let defense = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 107.2 / 100;
            defense = 206.16;
            break;
        case 2:
            skillMultiplier = 115.24 / 100;
            defense = 221.62;
            break;
        case 3:
            skillMultiplier = 123.28 / 100;
            defense = 237.08;
            break;
        case 4:
            skillMultiplier = 134 / 100;
            defense = 257.7;
            break;
        case 5:
            skillMultiplier = 142.04 / 100;
            defense = 273.16;
            break;
        case 6:
            skillMultiplier = 150.08 / 100;
            defense = 288.62;
            break;
        case 7:
            skillMultiplier = 160.8 / 100;
            defense = 309.24;
            break;
        case 8:
            skillMultiplier = 171.52 / 100;
            defense = 329.25;
            break;
        case 9:
            skillMultiplier = 182.24 / 100;
            defense = 350.47;
            break;
        case 10:
            skillMultiplier = 192.96 / 100;
            defense = 371.08;
            break;
        case 11:
            skillMultiplier = 203.68 / 100;
            defense = 391.7;
            break;
        case 12:
            skillMultiplier = 214.4 / 100;
            defense = 412.32;
            break;
        case 13:
            skillMultiplier = 227.8 / 100;
            defense = 438.09;
            break;
    }
    let dmg = dmgCalc({ Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }, Character) * numberOfEnemies;
    Character.currentBuffs.push({ Type: "DEFflat", Value: defense });
    Character.advancedstats.elementalBonuses[6].Value += 15;
    return { dmg: dmg, atkBuff: defense };
}

function akaushiBurst(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 307.2 / 100;
            break;
        case 2:
            skillMultiplier = 330.24 / 100;
            break;
        case 3:
            skillMultiplier = 353.28 / 100;
            break;
        case 4:
            skillMultiplier = 384 / 100;
            break;
        case 5:
            skillMultiplier = 407.04 / 100;
            break;
        case 6:
            skillMultiplier = 430.08 / 100;
            break;
        case 7:
            skillMultiplier = 460.8 / 100;
            break;
        case 8:
            skillMultiplier = 491.52 / 100;
            break;
        case 9:
            skillMultiplier = 522.24 / 100;
            break;
        case 10:
            skillMultiplier = 552.96 / 100;
            break;
        case 11:
            skillMultiplier = 583.68 / 100;
            break;
        case 12:
            skillMultiplier = 614.4 / 100;
            break;
        case 13:
            skillMultiplier = 652.8 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    return dmg;
}

function kuragesOath(Character) {
    let skillMultiplier = 0;
    let healing = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 109.19 / 100;
            healing = (Character.HP() * (4.4 / 100)) + 423.7;
            break;
        case 2:
            skillMultiplier = 117.38 / 100;
            healing = (Character.HP() * (4.73 / 100)) + 466.08;
            break;
        case 3:
            skillMultiplier = 125.57 / 100;
            healing = (Character.HP() * (5.06 / 100)) + 511.99;
            break;
        case 4:
            skillMultiplier = 136.49 / 100;
            healing = (Character.HP() * (5.5 / 100)) + 561.43;
            break;
        case 5:
            skillMultiplier = 144.68 / 100;
            healing = (Character.HP() * (5.83 / 100)) + 614.4;
            break;
        case 6:
            skillMultiplier = 152.87 / 100;
            healing = (Character.HP() * (6.16 / 100)) + 670.9;
            break;
        case 7:
            skillMultiplier = 163.79 / 100;
            healing = (Character.HP() * (6.6 / 100)) + 730.93;
            break;
        case 8:
            skillMultiplier = 174.7 / 100;
            healing = (Character.HP() * (7.04 / 100)) + 794.5;
            break;
        case 9:
            skillMultiplier = 185.62 / 100;
            healing = (Character.HP() * (7.48 / 100)) + 861.59;
            break;
        case 10:
            skillMultiplier = 196.54 / 100;
            healing = (Character.HP() * (7.92 / 100)) + 932.22;
            break;
        case 11:
            skillMultiplier = 207.46 / 100;
            healing = (Character.HP() * (8.36 / 100)) + 1006.38;
            break;
        case 12:
            skillMultiplier = 218.38 / 100;
            healing = (Character.HP() * (8.8 / 100)) + 1084.07;
            break;
        case 13:
            skillMultiplier = 232.03 / 100;
            healing = (Character.HP() * (9.35 / 100)) + 1165.29;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let heal = healing * (1 + (Character.advancedstats.healingBonus / 100));

    for (let index = 0; index < 6; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }
        else {
            attack.isReaction = false;
            dmg += dmgCalc(attack, Character) * numberOfEnemies;
        }
        heal += healing * (1 + (Character.advancedstats.healingBonus / 100));

    }
    healingHasOccured(Character);
    return { dmg: dmg, healing: heal };
}

function balefulOmen(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    let buff = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 117.2 / 100;
            skillMultiplier2 = 42 / 100;
            buff = 0.22;
            break;
        case 2:
            skillMultiplier = 125.99 / 100;
            skillMultiplier2 = 45.15 / 100;
            buff = 0.23;
            break;
        case 3:
            skillMultiplier = 134.78 / 100;
            skillMultiplier2 = 48.3 / 100;
            buff = 0.24;
            break;
        case 4:
            skillMultiplier = 146.5 / 100;
            skillMultiplier2 = 52.5 / 100;
            buff = 0.25;
            break;
        case 5:
            skillMultiplier = 155.29 / 100;
            skillMultiplier2 = 55.65 / 100;
            buff = 0.26;
            break;
        case 6:
            skillMultiplier = 164.08 / 100;
            skillMultiplier2 = 58.8 / 100;
            buff = 0.27;
            break;
        case 7:
            skillMultiplier = 175.8 / 100;
            skillMultiplier2 = 63 / 100;
            buff = 0.28;
            break;
        case 8:
            skillMultiplier = 187.52 / 100;
            skillMultiplier2 = 67.2 / 100;
            buff = 0.29;
            break;
        case 9:
            skillMultiplier = 199.24 / 100;
            skillMultiplier2 = 71.4 / 100;
            buff = 0.3;
            break;
        case 10:
            skillMultiplier = 210.96 / 100;
            skillMultiplier2 = 75.6 / 100;
            buff = 0.3;
            break;
        case 11:
            skillMultiplier = 222.68 / 100;
            skillMultiplier2 = 79.8 / 100;
            buff = 0.3;
            break;
        case 12:
            skillMultiplier = 234.4 / 100;
            skillMultiplier2 = 84 / 100;
            buff = 0.3;
            break;
        case 13:
            skillMultiplier = 249.05 / 100;
            skillMultiplier2 = 89.25 / 100;
            buff = 0.3;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" };
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    attack.Multiplier = skillMultiplier2;
    for (let index = 0; index < (27 * numberOfEnemies); index++) {
        dmg += dmgCalc(attack, Character);

    }
    Character.currentBuffs.push({ Type: "ElementalBurst", Value: buff * 80 })
    return dmg;


}

function tenguStormcall(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 125.8 / 100;
            skillMultiplier2 = 43 / 100;
            break;
        case 2:
            skillMultiplier = 135.2 / 100;
            skillMultiplier2 = 46 / 100;
            break;
        case 3:
            skillMultiplier = 144.6 / 100;
            skillMultiplier2 = 49 / 100;
            break;
        case 4:
            skillMultiplier = 157.2 / 100;
            skillMultiplier2 = 53 / 100;
            break;
        case 5:
            skillMultiplier = 166.6 / 100;
            skillMultiplier2 = 57 / 100;
            break;
        case 6:
            skillMultiplier = 176.1 / 100;
            skillMultiplier2 = 60 / 100;
            break;
        case 7:
            skillMultiplier = 188.6 / 100;
            skillMultiplier2 = 64.4 / 100;
            break;
        case 8:
            skillMultiplier = 201.2 / 100;
            skillMultiplier2 = 69 / 100;
            break;
        case 9:
            skillMultiplier = 213.7 / 100;
            skillMultiplier2 = 73 / 100;
            break;
        case 10:
            skillMultiplier = 226.3 / 100;
            skillMultiplier2 = 77.3 / 100;
            break;
        case 11:
            skillMultiplier = 238.9 / 100;
            skillMultiplier2 = 81.6 / 100;
            break;
        case 12:
            skillMultiplier = 251.5 / 100;
            skillMultiplier2 = 85.9 / 100;
            break;
        case 13:
            skillMultiplier = 267.2 / 100;
            skillMultiplier2 = 91.2 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let buff = skillMultiplier2 * Character.baseattack;
    Character.currentBuffs.push({ Type: "TenguAmbush", Value: buff })
    return { dmg: dmg, atkBuff: buff };

}


function springSpiritSummoning(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 188.8 / 100;
            skillMultiplier2 = 45.66 / 100;
            break;
        case 2:
            skillMultiplier = 202.96 / 100;
            skillMultiplier2 = 49.08 / 100;
            break;
        case 3:
            skillMultiplier = 217.12 / 100;
            skillMultiplier2 = 52.5 / 100;
            break;
        case 4:
            skillMultiplier = 236 / 100;
            skillMultiplier2 = 57.07 / 100;
            break;
        case 5:
            skillMultiplier = 250.16 / 100;
            skillMultiplier2 = 60.49 / 100;
            break;
        case 6:
            skillMultiplier = 264.32 / 100;
            skillMultiplier2 = 63.92 / 100;
            break;
        case 7:
            skillMultiplier = 283.2 / 100;
            skillMultiplier2 = 68.48 / 100;
            break;
        case 8:
            skillMultiplier = 302.96 / 100;
            skillMultiplier2 = 73.05 / 100;
            break;
        case 9:
            skillMultiplier = 320.96 / 100;
            skillMultiplier2 = 77.62 / 100;
            break;
        case 10:
            skillMultiplier = 339.84 / 100;
            skillMultiplier2 = 82.18 / 100;
            break;
        case 11:
            skillMultiplier = 358.72 / 100;
            skillMultiplier2 = 86.75 / 100;
            break;
        case 12:
            skillMultiplier = 377.6 / 100;
            skillMultiplier2 = 91.31 / 100;
            break;
        case 13:
            skillMultiplier = 401.2 / 100;
            skillMultiplier2 = 97.02 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    let buff = skillMultiplier2 * Character.attack();
    Character.currentBuffs.push({ Type: "ShenheBuff", Value: buff })
    return { dmg: dmg, attackBuff: buff };

}

function blazingBlessing(Character) {
    let skillMultiplier = 0;
    let skillMultiplier2 = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 146.4 / 100;
            skillMultiplier2 = (Character.HP() * (7.2 / 100)) + 693.3;
            break;
        case 2:
            skillMultiplier = 157.38 / 100;
            skillMultiplier2 = (Character.HP() * (7.74 / 100)) + 762.6;
            break;
        case 3:
            skillMultiplier = 168.36 / 100;
            skillMultiplier2 = (Character.HP() * (8.28 / 100)) + 837.7;
            break;
        case 4:
            skillMultiplier = 183 / 100;
            skillMultiplier2 = (Character.HP() * (9 / 100)) + 918.7;
            break;
        case 5:
            skillMultiplier = 193.98 / 100;
            skillMultiplier2 = (Character.HP() * (9.54 / 100)) + 1005;
            break;
        case 6:
            skillMultiplier = 204.96 / 100;
            skillMultiplier2 = (Character.HP() * (10.08 / 100)) + 1097;
            break;
        case 7:
            skillMultiplier = 219.6 / 100;
            skillMultiplier2 = (Character.HP() * (10.8 / 100)) + 1196;
            break;
        case 8:
            skillMultiplier = 234.24 / 100;
            skillMultiplier2 = (Character.HP() * (11.52 / 100)) + 1300;
            break;
        case 9:
            skillMultiplier = 248.88 / 100;
            skillMultiplier2 = (Character.HP() * (12.24 / 100)) + 1409;
            break;
        case 10:
            skillMultiplier = 263.52 / 100;
            skillMultiplier2 = (Character.HP() * (12.96 / 100)) + 1525;
            break;
        case 11:
            skillMultiplier = 278.16 / 100;
            skillMultiplier2 = (Character.HP() * (13.68 / 100)) + 1646;
            break;
        case 12:
            skillMultiplier = 292.8 / 100;
            skillMultiplier2 = (Character.HP() * (14.4 / 100)) + 1773;
            break;
        case 13:
            skillMultiplier = 311.1 / 100;
            skillMultiplier2 = (Character.HP() * (15.3 / 100)) + 1906;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    skillMultiplier2 *= 1 + (Character.advancedstats.shieldStrength / 100);
    return { dmg: dmg, shield: skillMultiplier2 };

}


function sesshouSakura(Character) {
    let skillMultiplier = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 94.8 / 100;
            break;
        case 2:
            skillMultiplier = 101.91 / 100;
            break;
        case 3:
            skillMultiplier = 109.02 / 100;
            break;
        case 4:
            skillMultiplier = 118.5 / 100;
            break;
        case 5:
            skillMultiplier = 125.61 / 100;
            break;
        case 6:
            skillMultiplier = 132.72 / 100;
            break;
        case 7:
            skillMultiplier = 142.2 / 100;
            break;
        case 8:
            skillMultiplier = 151.68 / 100;
            break;
        case 9:
            skillMultiplier = 161.16 / 100;
            break;
        case 10:
            skillMultiplier = 170.64 / 100;
            break;
        case 11:
            skillMultiplier = 180.12 / 100;
            break;
        case 12:
            skillMultiplier = 189.6 / 100;
            break;
        case 13:
            skillMultiplier = 201.45 / 100;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = 0;
    let hasPassive = false;
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Enlightened Blessing") {
            hasPassive = true;
        }
    });
    for (let index = 0; index < 15; index++) {
        if (index % 3 == 0) {
            attack.isReaction = true;
        } else {
            attack.isReaction = false;
        }
        dmg += dmgCalc(attack, Character) * numberOfEnemies * (hasPassive ? (1 + (Character.EM() * (0.15 / 100))) : 1);
    }
    return dmg;

}

function openingFlourish(Character) {
    let skillMultiplier = 0;
    let shield = 0;
    switch (Character.elementalSkill.Level) {
        case 1:
            skillMultiplier = 372.8 / 100;
            shield = (Character.HP() * (12 / 100)) + 1155;
            break;
        case 2:
            skillMultiplier = 400.76 / 100;
            shield = (Character.HP() * (12.9 / 100)) + 1270;
            break;
        case 3:
            skillMultiplier = 428.72 / 100;
            shield = (Character.HP() * (13.8 / 100)) + 1396;
            break;
        case 4:
            skillMultiplier = 466 / 100;
            shield = (Character.HP() * (15 / 100)) + 1531;
            break;
        case 5:
            skillMultiplier = 493.96 / 100;
            shield = (Character.HP() * (15.9 / 100)) + 1675;
            break;
        case 6:
            skillMultiplier = 521.92 / 100;
            shield = (Character.HP() * (16.8 / 100)) + 1829;
            break;
        case 7:
            skillMultiplier = 559.2 / 100;
            shield = (Character.HP() * (18 / 100)) + 1993;
            break;
        case 8:
            skillMultiplier = 596.48 / 100;
            shield = (Character.HP() * (19.2 / 100)) + 2166;
            break;
        case 9:
            skillMultiplier = 633.76 / 100;
            shield = (Character.HP() * (20.4 / 100)) + 2349;
            break;
        case 10:
            skillMultiplier = 671.04 / 100;
            shield = (Character.HP() * (21.6 / 100)) + 2542;
            break;
        case 11:
            skillMultiplier = 708.32 / 100;
            shield = (Character.HP() * (22.8 / 100)) + 2744;
            break;
        case 12:
            skillMultiplier = 745.6 / 100;
            shield = (Character.HP() * (24 / 100)) + 2956;
            break;
        case 13:
            skillMultiplier = 792.2 / 100;
            shield = (Character.HP() * (25.5 / 100)) + 3177;
            break;
    }
    let attack = { Multiplier: skillMultiplier, Element: "GeoDMGBonus", Scaling: "DEF", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    shield *= 1 + (Character.advancedstats.shieldStrength / 100);
    return { dmg: dmg, shield: shield };

}

function UniversalityAnElaborationOnForm(Character) {
    let multiplier1 = 0;
    let multiplier2 = 0;
    let multiplier3 = 0;
    let multiplier4 = 0;

    switch (Character.elementalSkill.Level) {
        case 1:
            multiplier1 = 193.6 / 100;
            multiplier2 = 154.88 / 100;
            multiplier3 = 67.2 / 100;
            multiplier4 = 134.4 / 100;
            break;
        case 2:
            multiplier1 = 208.12 / 100;
            multiplier2 = 166.5 / 100;
            multiplier3 = 72.24 / 100;
            multiplier4 = 144.48 / 100;
            break;
        case 3:
            multiplier1 = 222.64 / 100;
            multiplier2 = 178.11 / 100;
            multiplier3 = 77.28 / 100;
            multiplier4 = 154.56 / 100;
            break;
        case 4:
            multiplier1 = 242 / 100;
            multiplier2 = 193.6 / 100;
            multiplier3 = 84 / 100;
            multiplier4 = 168 / 100;
            break;
        case 5:
            multiplier1 = 256.52 / 100;
            multiplier2 = 205.22 / 100;
            multiplier3 = 89.04 / 100;
            multiplier4 = 178.08 / 100;
            break;
        case 6:
            multiplier1 = 271.04 / 100;
            multiplier2 = 216.83 / 100;
            multiplier3 = 94.08 / 100;
            multiplier4 = 188.16 / 100;
            break;
        case 7:
            multiplier1 = 290.4 / 100;
            multiplier2 = 232.32 / 100;
            multiplier3 = 100.8 / 100;
            multiplier4 = 201.6 / 100;
            break;
        case 8:
            multiplier1 = 309.76 / 100;
            multiplier2 = 247.81 / 100;
            multiplier3 = 114.24 / 100;
            multiplier4 = 228.48 / 100;
            break;
        case 9:
            multiplier1 = 329.12 / 100;
            multiplier2 = 247.81 / 100;
            multiplier3 = 107.52 / 100;
            multiplier4 = 215.04 / 100;
            break;
        case 10:
            multiplier1 = 348.48 / 100;
            multiplier2 = 278.78 / 100;
            multiplier3 = 120.96 / 100;
            multiplier4 = 241.92 / 100;
            break;
        case 11:
            multiplier1 = 367.84 / 100;
            multiplier2 = 294.27 / 100;
            multiplier3 = 127.68 / 100;
            multiplier4 = 255.36 / 100;
            break;
        case 12:
            multiplier1 = 387.2 / 100;
            multiplier2 = 309.76 / 100;
            multiplier3 = 134.4 / 100;
            multiplier4 = 268.8 / 100;
            break;
        case 13:
            multiplier1 = 411.4 / 100;
            multiplier2 = 329.12 / 100;
            multiplier3 = 142.8 / 100;
            multiplier4 = 285.6 / 100;
            break;
    }
    let attack = { Multiplier: (multiplier1 * Character.attack()) + (multiplier2 * Character.EM()), Element: "DendroDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalSkill" }
    let attack2 = { Multiplier: (multiplier3 * Character.attack()) + (multiplier4 * Character.EM()), Element: "DendroDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalSkill" }
    Character.currentBuffs.forEach(buff => {
        if (buff.Type == "Mysteries Laid Bare") {
            let buffAmount = Character.EM() * 0.1;
            if (buffAmount > 100)
                buffAmount = 100;
            Character.currentBuffs.push({ Type: "ElementalSkillDMG", Value: buffAmount });
        }
    });
    let dmg = dmgCalc(attack, Character) * numberOfEnemies;
    dmg += dmgCalc(attack2, Character) * numberOfEnemies;
    return dmg;
}

function allIsAsh(character) {
    let multiplier1 = 0;
    let multiplier2 = 0;
    let multiplier3 = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            multiplier1 = 14.84 / 100;
            multiplier2 = 133.56 / 100;
            multiplier3 = 31.8 / 100;
            break;
        case 2:
            multiplier1 = 15.95 / 100;
            multiplier2 = 143.58 / 100;
            multiplier3 = 34.19 / 100;
            break;
        case 3:
            multiplier1 = 17.07 / 100;
            multiplier2 = 153.59 / 100;
            multiplier3 = 36.57 / 100;
            break;
        case 4:
            multiplier1 = 18.55 / 100;
            multiplier2 = 166.95 / 100;
            multiplier3 = 36.57 / 100;
            break;
        case 5:
            multiplier1 = 19.66 / 100;
            multiplier2 = 176.97 / 100;
            multiplier3 = 42.13 / 100;
            break;
        case 6:
            multiplier1 = 20.78 / 100;
            multiplier2 = 186.98 / 100;
            multiplier3 = 44.52 / 100;
            break;
        case 7:
            multiplier1 = 22.26 / 100;
            multiplier2 = 200.34 / 100;
            multiplier3 = 47.7 / 100;
            break;
        case 8:
            multiplier1 = 23.74 / 100;
            multiplier2 = 213.7 / 100;
            multiplier3 = 50.88 / 100;
            break;
        case 9:
            multiplier1 = 25.23 / 100;
            multiplier2 = 227.05 / 100;
            multiplier3 = 54.06 / 100;
            break;
        case 10:
            multiplier1 = 26.71 / 100;
            multiplier2 = 240.41 / 100;
            multiplier3 = 57.24 / 100;
            break;
        default:
            multiplier1 = 26.71 / 100;
            multiplier2 = 240.41 / 100;
            multiplier3 = 57.24 / 100;
            break;
    }
    let attack = { Multiplier: multiplier1, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let attack2 = { Multiplier: multiplier2, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let attack3 = { Multiplier: multiplier3, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies;
    dmg += dmgCalc(attack3, character) * 2;//Max 2 instance of blood directive dmg at the same time
    let hasBuff = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "BloodDirective") {
            hasBuff = true;

        }
    }
    if (!hasBuff)
        character.currentBuffs.push({ Type: "BloodDirective", Value: numberOfEnemies });//Enemies with blood directive
    return dmg;
}

function oTearsIShallRepay(character) {
    let multiplier1 = 0;
    let multiplier2 = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            multiplier1 = 12.86 / 100;
            multiplier2 = 20.8 / 100;
            break;
        case 2:
            multiplier1 = 13.83 / 100;
            multiplier2 = 22.36 / 100;
            break;
        case 3:
            multiplier1 = 14.79 / 100;
            multiplier2 = 23.92 / 100;
            break;
        case 4:
            multiplier1 = 16.08 / 100;
            multiplier2 = 26 / 100;
            break;
        case 5:
            multiplier1 = 17.04 / 100;
            multiplier2 = 27.56 / 100;
            break;
        case 6:
            multiplier1 = 18.01 / 100;
            multiplier2 = 29.12 / 100;
            break;
        case 7:
            multiplier1 = 19.3 / 100;
            multiplier2 = 31.2 / 100;
            break;
        case 8:
            multiplier1 = 20.58 / 100;
            multiplier2 = 33.28 / 100;
            break;
        case 9:
            multiplier1 = 21.87 / 100;
            multiplier2 = 35.36 / 100;
            break;
        case 10:
            multiplier1 = 23.16 / 100;
            multiplier2 = 37.44 / 100;
            break;
        default:
            multiplier1 = 23.16 / 100;
            multiplier2 = 37.44 / 100;
            break;
    }
    let attack = { Multiplier: multiplier1, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalSkill" }
    let attack2 = { Multiplier: multiplier2, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Discipline of the Supreme Arbitration") {
            let currentBonus = buff.Value;
            let sourewaterDroplets = 3;
            let currentHP = buff.currentHP;
            character.advancedstats.elementalBonuses[1].Value -= currentBonus;
            //Calc new bonus
            let healing = character.HP() * 0.16 * sourewaterDroplets;
            healingHasOccured(character);
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

function universalDiagnosis(character) {
    let multiplier1 = 0;
    let multiplier2 = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            multiplier1 = 79.2 / 100;
            multiplier2 = (((character.HP() * 8) / 100) + 770.3755)
            break;
        case 2:
            multiplier1 = 85.14 / 100;
            multiplier2 = (((character.HP() * 8.6) / 100) + 847.42377)
            break;
        case 3:
            multiplier1 = 91.08 / 100;
            multiplier2 = (((character.HP() * 9.2) / 100) + 930.8927)
            break;
        case 4:
            multiplier1 = 99 / 100;
            multiplier2 = (((character.HP() * 10) / 100) + 1020.78235)
            break;
        case 5:
            multiplier1 = 104.94 / 100;
            multiplier2 = (((character.HP() * 10.6) / 100) + 1117.0927)
            break;
        case 6:
            multiplier1 = 110.88 / 100;
            multiplier2 = (((character.HP() * 11.2) / 100) + 1219.8236)
            break;
        case 7:
            multiplier1 = 118.8 / 100;
            multiplier2 = (((character.HP() * 12) / 100) + 1328.9753)
            break;
        case 8:
            multiplier1 = 126.72 / 100;
            multiplier2 = (((character.HP() * 12.8) / 100) + 1444.5477)
            break;
        case 9:
            multiplier1 = 134.64 / 100;
            multiplier2 = (((character.HP() * 13.6) / 100) + 1566.5408)
            break;
        case 10:
            multiplier1 = 142.56 / 100;
            multiplier2 = (((character.HP() * 14.4) / 100) + 1694.9546)
            break;
        case 11:
            multiplier1 = 150.48 / 100;
            multiplier2 = (((character.HP() * 15.2) / 100) + 1829.7891)
            break;
        case 12:
            multiplier1 = 158.4 / 100;
            multiplier2 = (((character.HP() * 16) / 100) + 1971.0442)
            break;
        case 13:
            multiplier1 = 168.3 / 100;
            multiplier2 = (((character.HP() * 17) / 100) + 2118.72)
            break;
    }
    let attack = { Multiplier: multiplier1, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack, character) * numberOfEnemies;
    let healing = multiplier2 * (1 + (character.advancedstats.healingBonus / 100));
    healingHasOccured(character);
    return { dmg: dmg, healing: healing };
}
function sacredRiteHeronsSanctum(character) {
    let multiplier = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            multiplier = 19.04 / 100;
            break;
        case 2:
            multiplier = 20.47 / 100;
            break;
        case 3:
            multiplier = 21.9 / 100;
            break;
        case 4:
            multiplier = 23.8 / 100;
            break;
        case 5:
            multiplier = 25.23 / 100;
            break;
        case 6:
            multiplier = 26.66 / 100;
            break;
        case 7:
            multiplier = 28.56 / 100;
            break;
        case 8:
            multiplier = 30.46 / 100;
            break;
        case 9:
            multiplier = 32.37 / 100;
            break;
        case 10:
            multiplier = 34.27 / 100;
            break;
        case 11:
            multiplier = 36.18 / 100;
            break;
        case 12:
            multiplier = 38.08 / 100;
            break;
        case 13:
            multiplier = 40.46 / 100;
            break;
    }
    let attack = { Multiplier: multiplier, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    return dmg;
}

function lingeringLifeline(character) {
    let multiplier = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            multiplier = 22.61 / 100;
            break;
        case 2:
            multiplier = 24.31 / 100;
            break;
        case 3:
            multiplier = 26.01 / 100;
            break;
        case 4:
            multiplier = 28.27 / 100;
            break;
        case 5:
            multiplier = 29.96 / 100;
            break;
        case 6:
            multiplier = 31.66 / 100;
            break;
        case 7:
            multiplier = 33.92 / 100;
            break;
        case 8:
            multiplier = 36.18 / 100;
            break;
        case 9:
            multiplier = 38.44 / 100;
            break;
        case 10:
            multiplier = 40.70 / 100;
            break;
        case 11:
            multiplier = 42.97 / 100;
            break;
        case 12:
            multiplier = 45.23 / 100;
            break;
        case 13:
            multiplier = 48.05 / 100;
            break;
    }
    let attack = { Multiplier: multiplier, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    return dmg;
}

function moltenInferno(character) {
    let indomitableFlameDMG = 0;
    let rangingFlameDMG = 0;
    let fieldDMG = 0;
    let mitigaition  =32;
    switch (character.elementalSkill.Level) {
        case 1:
            indomitableFlameDMG = 112.88 / 100;
            rangingFlameDMG = 132.8 / 100;
            fieldDMG = (character.attack() * (60.2 / 100)) + (character.HP() * (1.03 / 100));
            break;
        case 2:
            indomitableFlameDMG = 121.35 / 100;
            rangingFlameDMG = 142.76 / 100;
            fieldDMG = (character.attack() * (64.72 / 100)) + (character.HP() * (1.11 / 100));
            break;
        case 3:
            indomitableFlameDMG = 129.81 / 100;
            rangingFlameDMG = 152.72 / 100;
            fieldDMG = (character.attack() * (69.23 / 100)) + (character.HP() * (1.19 / 100));
            break;
        case 4:
            indomitableFlameDMG = 141.1 / 100;
            rangingFlameDMG = 166 / 100;
            fieldDMG = (character.attack() * (75.25 / 100)) + (character.HP() * (1.29 / 100));
            break;
        case 5:
            indomitableFlameDMG = 149.57 / 100;
            rangingFlameDMG = 175.96 / 100;
            fieldDMG = (character.attack() * (79.77 / 100)) + (character.HP() * (1.37 / 100));
            break;
        case 6:
            indomitableFlameDMG = 158.03 / 100;
            rangingFlameDMG = 185.92 / 100;
            fieldDMG = (character.attack() * (84.28 / 100)) + (character.HP() * (1.44 / 100));
            break;
        case 7:
            indomitableFlameDMG = 169.32 / 100;
            rangingFlameDMG = 199.2 / 100;
            fieldDMG = (character.attack() * (90.3 / 100)) + (character.HP() * (1.55 / 100));
            break;
        case 8:
            indomitableFlameDMG = 180.61 / 100;
            rangingFlameDMG = 212.48 / 100;
            fieldDMG = (character.attack() * (96.32 / 100)) + (character.HP() * (1.65 / 100));
            break;
        case 9:
            indomitableFlameDMG = 191.9 / 100;
            rangingFlameDMG = 225.76 / 100;
            fieldDMG = (character.attack() * (102.34 / 100)) + (character.HP() * (1.75 / 100));
            break;
        case 10:
            indomitableFlameDMG = 203.18 / 100;
            rangingFlameDMG = 239.04 / 100;
            fieldDMG = (character.attack() * (108.36 / 100)) + (character.HP() * (1.86 / 100));
            break;
        case 11:
            indomitableFlameDMG = 214.47 / 100;
            rangingFlameDMG = 252.32 / 100;
            fieldDMG = (character.attack() * (114.38 / 100)) + (character.HP() * (1.96 / 100));
            break;
        case 12:
            indomitableFlameDMG = 225.76 / 100;
            rangingFlameDMG = 265.6 / 100;
            fieldDMG = (character.attack() * (120.4 / 100)) + (character.HP() * (2.06 / 100));
            break;
        case 13:
            indomitableFlameDMG = 239.87 / 100;
            rangingFlameDMG = 282.2 / 100;
            fieldDMG = (character.attack() * (127.92 / 100)) + (character.HP() * (2.19 / 100));
            break;
    }
    let attack = { Multiplier: indomitableFlameDMG, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let attack2 = { Multiplier: rangingFlameDMG, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let coordAttack = { Multiplier: fieldDMG, Element: "PyroDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies;
    dmg += dmgCalc(coordAttack, character) * numberOfEnemies * 4;//Max for 4 instances of field dmg (Every 2.5s over 12s)
    let shield = 16000 * ( (mitigaition +(2*(character.elementalSkill.Level-1)))/100);//Psudeo shield not really a shield but for the sake of calculations we call it a shield
    return { dmg: dmg, shield: shield };
}

function salonSolitaire(character) {
    let ousiaBubbleDMG = 0;
    let gentilhommeUsherDMG = 0;
    let surintendanteChevalmarinDMG = 0;
    let mademaoselleCrabalettaDMG = 0;
    let singerofManyWatersHealing = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            ousiaBubbleDMG = 7.86 / 100;
            gentilhommeUsherDMG = 5.96 / 100;
            surintendanteChevalmarinDMG = 3.23 / 100;
            mademaoselleCrabalettaDMG = 8.29 / 100;
            singerofManyWatersHealing = (character.HP() * (4.8 / 100)) + 462;
            break;
        case 2:
            ousiaBubbleDMG = 8.45 / 100;
            gentilhommeUsherDMG = 6.41 / 100;
            surintendanteChevalmarinDMG = 3.47 / 100;
            mademaoselleCrabalettaDMG = 8.91 / 100;
            singerofManyWatersHealing = (character.HP() * (5.16 / 100)) + 508;
            break;
        case 3:
            ousiaBubbleDMG = 9.04 / 100;
            gentilhommeUsherDMG = 6.85 / 100;
            surintendanteChevalmarinDMG = 3.72 / 100;
            mademaoselleCrabalettaDMG = 9.53 / 100;
            singerofManyWatersHealing = (character.HP() * (5.5 / 100)) + 559;
            break;
        case 4:
            ousiaBubbleDMG = 9.83 / 100;
            gentilhommeUsherDMG = 7.45 / 100;
            surintendanteChevalmarinDMG = 4.04 / 100;
            mademaoselleCrabalettaDMG = 10.36 / 100;
            singerofManyWatersHealing = (character.HP() * (6 / 100)) + 612;
            break;
        case 5:
            ousiaBubbleDMG = 10.42 / 100;
            gentilhommeUsherDMG = 7.9 / 100;
            surintendanteChevalmarinDMG = 4.28 / 100;
            mademaoselleCrabalettaDMG = 10.98 / 100;
            singerofManyWatersHealing = (character.HP() * (6.36 / 100)) + 670;
            break;
        case 6:
            ousiaBubbleDMG = 11.01 / 100;
            gentilhommeUsherDMG = 8.34 / 100;
            surintendanteChevalmarinDMG = 4.52 / 100;
            mademaoselleCrabalettaDMG = 11.6 / 100;
            singerofManyWatersHealing = (character.HP() * (6.72 / 100)) + 732;
            break;
        case 7:
            ousiaBubbleDMG = 11.8 / 100;
            gentilhommeUsherDMG = 8.94 / 100;
            surintendanteChevalmarinDMG = 4.85 / 100;
            mademaoselleCrabalettaDMG = 12.43 / 100;
            singerofManyWatersHealing = (character.HP() * (7.2 / 100)) + 797;
            break;
        case 8:
            ousiaBubbleDMG = 12.58 / 100;
            gentilhommeUsherDMG = 9.54 / 100;
            surintendanteChevalmarinDMG = 5.17 / 100;
            mademaoselleCrabalettaDMG = 13.26 / 100;
            singerofManyWatersHealing = (character.HP() * (7.68 / 100)) + 867;
            break;
        case 9:
            ousiaBubbleDMG = 13.37 / 100;
            gentilhommeUsherDMG = 10.13 / 100;
            surintendanteChevalmarinDMG = 5.49 / 100;
            mademaoselleCrabalettaDMG = 14.09 / 100;
            singerofManyWatersHealing = (character.HP() * (8.16 / 100)) + 940;
            break;
        case 10:
            ousiaBubbleDMG = 14.16 / 100;
            gentilhommeUsherDMG = 10.73 / 100;
            surintendanteChevalmarinDMG = 5.82 / 100;
            mademaoselleCrabalettaDMG = 14.92 / 100;
            singerofManyWatersHealing = (character.HP() * (8.64 / 100)) + 1017;
            break;
        case 11:
            ousiaBubbleDMG = 14.94 / 100;
            gentilhommeUsherDMG = 11.32 / 100;
            surintendanteChevalmarinDMG = 6.14 / 100;
            mademaoselleCrabalettaDMG = 15.75 / 100;
            singerofManyWatersHealing = (character.HP() * (9.12 / 100)) + 1098;
            break;
        case 12:
            ousiaBubbleDMG = 15.73 / 100;
            gentilhommeUsherDMG = 11.92 / 100;
            surintendanteChevalmarinDMG = 6.46 / 100;
            mademaoselleCrabalettaDMG = 16.58 / 100;
            singerofManyWatersHealing = (character.HP() * (9.6 / 100)) + 1183;
            break;
        case 13:
            ousiaBubbleDMG = 16.71 / 100;
            gentilhommeUsherDMG = 12.67 / 100;
            surintendanteChevalmarinDMG = 6.87 / 100;
            mademaoselleCrabalettaDMG = 17.61 / 100;
            singerofManyWatersHealing = (character.HP() * (10.2 / 100)) + 1271;
            break;
    }
    //Surintendante Chevalmarin ~1.5s cd per attack
    //Mademoiselle Crabaletta ~5.1s cd per attack
    //Gentilhomme Usher ~3.1s cd per attack
    let surintendanteChevalmarinAttack = { Multiplier: surintendanteChevalmarinDMG, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalSkill" }
    let mademaoselleCrabalettaAttack = { Multiplier: mademaoselleCrabalettaDMG, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalSkill" }
    let gentilhommeUsherAttack = { Multiplier: gentilhommeUsherDMG, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalSkill" }
    let ousiaBubbleAttack = { Multiplier: ousiaBubbleDMG, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalSkill" }
    let dmg = 0;
    for (let i = 0; i < 20; i++) {
        if (i % 2 == 0) {
            surintendanteChevalmarinAttack.isReaction = false;
            gentilhommeUsherAttack.isReaction = false;
        }
        else {
            surintendanteChevalmarinAttack.isReaction = true;
            gentilhommeUsherAttack.isReaction = true;
        }
        if (i < 10) {
            dmg += dmgCalc(gentilhommeUsherAttack, character) * numberOfEnemies;
        }
        if (i < 6) {
            dmg += dmgCalc(mademaoselleCrabalettaAttack, character) * numberOfEnemies;
        }
        dmg += dmgCalc(surintendanteChevalmarinAttack, character) * numberOfEnemies;
        character.removeHP(character.HP() * 0.02);
    }
    healingHasOccured(character);
    dmg += dmgCalc(ousiaBubbleAttack, character) * numberOfEnemies;
    return { dmg: dmg };
}

function floralBrush(character) {
    let skillDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 151.2 / 100;
            break;
        case 2:
            skillDMG = 162.54 / 100;
            break;
        case 3:
            skillDMG = 173.88 / 100;
            break;
        case 4:
            skillDMG = 189 / 100;
            break;
        case 5:
            skillDMG = 200.34 / 100;
            break;
        case 6:
            skillDMG = 211.68 / 100;
            break;
        case 7:
            skillDMG = 226.8 / 100;
            break;
        case 8:
            skillDMG = 241.92 / 100;
            break;
        case 9:
            skillDMG = 257.04 / 100;
            break;
        case 10:
            skillDMG = 272.16 / 100;
            break;
        case 11:
            skillDMG = 287.28 / 100;
            break;
        case 12:
            skillDMG = 302.4 / 100;
            break;
        case 13:
            skillDMG = 321.3 / 100;
            break;
    }
    let attack = { Multiplier: skillDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    attack.isReaction = false;
    dmg += dmgCalc(attack, character) * numberOfEnemies;
    return dmg;

}

function framingFreezingPointComposition(character) {
    let photoDMG = 0;
    let markDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            photoDMG = 67.2 / 100;
            markDMG = 39.2 / 100;
            break;
        case 2:
            photoDMG = 72.24 / 100;
            markDMG = 42.14 / 100;
            break;
        case 3:
            photoDMG = 77.28 / 100;
            markDMG = 45.08 / 100;
            break;
        case 4:
            photoDMG = 84 / 100;
            markDMG = 49 / 100;
            break;
        case 5:
            photoDMG = 89.04 / 100;
            markDMG = 51.94 / 100;
            break;
        case 6:
            photoDMG = 94.08 / 100;
            markDMG = 54.88 / 100;
            break;
        case 7:
            photoDMG = 100.8 / 100;
            markDMG = 58.8 / 100;
            break;
        case 8:
            photoDMG = 107.52 / 100;
            markDMG = 62.72 / 100;
            break;
        case 9:
            photoDMG = 114.24 / 100;
            markDMG = 66.64 / 100;
            break;
        case 10:
            photoDMG = 120.96 / 100;
            markDMG = 70.56 / 100;
            break;
        case 11:
            photoDMG = 127.68 / 100;
            markDMG = 74.48 / 100;
            break;
        case 12:
            photoDMG = 134.4 / 100;
            markDMG = 78.4 / 100;
            break;
        case 13:
            photoDMG = 142.8 / 100;
            markDMG = 83.3 / 100;
            break;
    }
    let attack = { Multiplier: photoDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let mark = { Multiplier: markDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    for (let i = 0; i < 4; i++) {
        dmg += dmgCalc(mark, character) * numberOfEnemies;
    }
    return { dmg: dmg };
}

function shortRangeRapidInterdictionFire(character) {
    let holdDMG = 0;
    let overloadedBallDMG = 0;
    let healing = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            holdDMG = 172.8 / 100;
            overloadedBallDMG = 282.4 / 100;
            healing = character.HP() * (2.67 / 100) + 257;
            break;
        case 2:
            holdDMG = 185.76 / 100;
            overloadedBallDMG = 303.58 / 100;
            healing = character.HP() * (2.87 / 100) + 282;
            break;
        case 3:
            holdDMG = 198.72 / 100;
            overloadedBallDMG = 324.76 / 100;
            healing = character.HP() * (3.07 / 100) + 310;
            break;
        case 4:
            holdDMG = 216 / 100;
            overloadedBallDMG = 353 / 100;
            healing = character.HP() * (3.33 / 100) + 340;
            break;
        case 5:
            holdDMG = 228.96 / 100;
            overloadedBallDMG = 374.18 / 100;
            healing = character.HP() * (3.53 / 100) + 372;
            break;
        case 6:
            holdDMG = 241.92 / 100;
            overloadedBallDMG = 395.36 / 100;
            healing = character.HP() * (3.73 / 100) + 407;
            break;
        case 7:
            holdDMG = 259.2 / 100;
            overloadedBallDMG = 423.6 / 100;
            healing = character.HP() * (4 / 100) + 443;
            break;
        case 8:
            holdDMG = 276.48 / 100;
            overloadedBallDMG = 451.84 / 100;
            healing = character.HP() * (4.27 / 100) + 482;
            break;
        case 9:
            holdDMG = 293.76 / 100;
            overloadedBallDMG = 480.08 / 100;
            healing = character.HP() * (4.53 / 100) + 522;
            break;
        case 10:
            holdDMG = 311.04 / 100;
            overloadedBallDMG = 508.32 / 100;
            healing = character.HP() * (4.8 / 100) + 565;
            break;
        case 11:
            holdDMG = 328.32 / 100;
            overloadedBallDMG = 536.56 / 100;
            healing = character.HP() * (5.07 / 100) + 610;
            break;
        case 12:
            holdDMG = 345.6 / 100;
            overloadedBallDMG = 564.8 / 100;
            healing = character.HP() * (5.33 / 100) + 657;
            break;
        case 13:
            holdDMG = 367.2 / 100;
            overloadedBallDMG = 600.1 / 100;
            healing = character.HP() * (5.67 / 100) + 706;
            break;
    }
    let attack = { Multiplier: holdDMG, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let attack2 = { Multiplier: overloadedBallDMG, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies;
    let atkBuff = 0;
    let totalHealing = healing * 6 * (1 + (character.advancedstats.healingBonus / 100));
    for (buff of character.currentBuffs) {
        if (buff.Type == "Vertical Force Coordination") {
            atkBuff += Math.floor(character.HP() / 1000);
            character.currentBuffs.push({ Type: "ATK%", Value: atkBuff, Source: "Vertical Force Coordination" });
        }
    }
    healingHasOccured(character);
    return { dmg: dmg, healing: totalHealing, attackBuff: atkBuff };
}

function flutteringHasode(character) {
    let tamotoDMGdef = 0;
    let tamotoDMGatk = 0;
    let upwardSweepAttackDMGatk = 0;
    let upwardSweepAttackDMGdef = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            tamotoDMGdef = 82.08 / 100;
            tamotoDMGatk = 102.6 / 100;
            upwardSweepAttackDMGatk = 149.28 / 100;
            upwardSweepAttackDMGdef = 186.6 / 100;
            break;
        case 2:
            tamotoDMGdef = 88.24 / 100;
            tamotoDMGatk = 110.29 / 100;
            upwardSweepAttackDMGatk = 160.48 / 100;
            upwardSweepAttackDMGdef = 200.59 / 100;
            break;
        case 3:
            tamotoDMGdef = 94.39 / 100;
            tamotoDMGatk = 117.99 / 100;
            upwardSweepAttackDMGatk = 171.67 / 100;
            upwardSweepAttackDMGdef = 214.59 / 100;
            break;
        case 4:
            tamotoDMGdef = 102.6 / 100;
            tamotoDMGatk = 128.25 / 100;
            upwardSweepAttackDMGatk = 186.6 / 100;
            upwardSweepAttackDMGdef = 233.25 / 100;
            break;
        case 5:
            tamotoDMGdef = 108.76 / 100;
            tamotoDMGatk = 135.94 / 100;
            upwardSweepAttackDMGatk = 197.8 / 100;
            upwardSweepAttackDMGdef = 247.25 / 100;
            break;
        case 6:
            tamotoDMGdef = 114.91 / 100;
            tamotoDMGatk = 143.64 / 100;
            upwardSweepAttackDMGatk = 208.99 / 100;
            upwardSweepAttackDMGdef = 261.24 / 100;
            break;
        case 7:
            tamotoDMGdef = 123.12 / 100;
            tamotoDMGatk = 153.9 / 100;
            upwardSweepAttackDMGatk = 223.92 / 100;
            upwardSweepAttackDMGdef = 279.9 / 100;
            break;
        case 8:
            tamotoDMGdef = 131.33 / 100;
            tamotoDMGatk = 164.16 / 100;
            upwardSweepAttackDMGatk = 238.85 / 100;
            upwardSweepAttackDMGdef = 298.56 / 100;
            break;
        case 9:
            tamotoDMGdef = 139.54 / 100;
            tamotoDMGatk = 174.42 / 100;
            upwardSweepAttackDMGatk = 253.78 / 100;
            upwardSweepAttackDMGdef = 317.22 / 100;
            break;
        case 10:
            tamotoDMGdef = 147.74 / 100;
            tamotoDMGatk = 184.68 / 100;
            upwardSweepAttackDMGatk = 268.7 / 100;
            upwardSweepAttackDMGdef = 335.88 / 100;
            break;
        case 11:
            tamotoDMGdef = 155.95 / 100;
            tamotoDMGatk = 194.94 / 100;
            upwardSweepAttackDMGatk = 283.63 / 100;
            upwardSweepAttackDMGdef = 354.54 / 100;
            break;
        case 12:
            tamotoDMGdef = 164.16 / 100;
            tamotoDMGatk = 205.2 / 100;
            upwardSweepAttackDMGatk = 298.56 / 100;
            upwardSweepAttackDMGdef = 373.2 / 100;
            break;
        case 13:
            tamotoDMGdef = 174.42 / 100;
            tamotoDMGatk = 218.02 / 100;
            upwardSweepAttackDMGatk = 317.22 / 100;
            upwardSweepAttackDMGdef = 396.53 / 100;
            break;
    }
    tamotoDMGatk = tamotoDMGatk * character.attack();
    tamotoDMGdef = tamotoDMGdef * character.DEF();
    upwardSweepAttackDMGatk = upwardSweepAttackDMGatk * character.attack();
    upwardSweepAttackDMGdef = upwardSweepAttackDMGdef * character.DEF();
    let tamotoDMG = tamotoDMGatk + tamotoDMGdef;
    let upwardSweepAttackDMG = upwardSweepAttackDMGatk + upwardSweepAttackDMGdef;
    let attack = { Multiplier: upwardSweepAttackDMG, Element: "GeoDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalSkill" }
    let attack2 = { Multiplier: tamotoDMG, Element: "GeoDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(attack, character) * numberOfEnemies;
    dmg += dmgCalc(attack2, character) * numberOfEnemies * 2 * 4;

    for (buffs of character.currentBuffs) {
        if (buffs.Type == "Tailor-Made") {
            if (role == "Dps") {
                character.normalAttack1.Element = "GeoDMGBonus";
                character.normalAttack2.Element = "GeoDMGBonus";
                character.normalAttack3.Element = "GeoDMGBonus";
                character.normalAttack4.Element = "GeoDMGBonus";
                character.normalAttack5.Element = "GeoDMGBonus";
                character.chargedAttack.Element = "GeoDMGBonus";
                character.plungeAttack.Element = "GeoDMGBonus";
            }
            else {
                dmg += dmgCalc(attack, character) * numberOfEnemies;
                dmg += dmgCalc(attack2, character) * numberOfEnemies * 2;
            }
            break;
        }
    }

    return dmg;

}

function huntersVigil(character) {
    let swiftHunt1lvlDMG = 0;
    let swiftHunt2lvlDMG = 0;
    let impaletheNightlvl1DMG = 0;
    let impaletheNightlvl2DMG = 0;
    let impaletheNightlvl3DMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            swiftHunt1lvlDMG = 26.76 / 100;
            swiftHunt2lvlDMG = 38.79 / 100;
            impaletheNightlvl1DMG = 32.97 / 100;
            impaletheNightlvl2DMG = 43.96 / 100;
            impaletheNightlvl3DMG = 25.11 / 100;
            break;
        case 2:
            swiftHunt1lvlDMG = 28.94 / 100;
            swiftHunt2lvlDMG = 41.94 / 100;
            impaletheNightlvl1DMG = 35.66 / 100;
            impaletheNightlvl2DMG = 47.54 / 100;
            impaletheNightlvl3DMG = 27.16 / 100;
            break;
        case 3:
            swiftHunt1lvlDMG = 31.12 / 100;
            swiftHunt2lvlDMG = 45.1 / 100;
            impaletheNightlvl1DMG = 38.34 / 100;
            impaletheNightlvl2DMG = 51.12 / 100;
            impaletheNightlvl3DMG = 29.2 / 100;
            break;
        case 4:
            swiftHunt1lvlDMG = 34.23 / 100;
            swiftHunt2lvlDMG = 49.61 / 100;
            impaletheNightlvl1DMG = 42.17 / 100;
            impaletheNightlvl2DMG = 56.23 / 100;
            impaletheNightlvl3DMG = 32.12 / 100;
            break;
        case 5:
            swiftHunt1lvlDMG = 36.41 / 100;
            swiftHunt2lvlDMG = 52.77 / 100;
            impaletheNightlvl1DMG = 44.86 / 100;
            impaletheNightlvl2DMG = 59.81 / 100;
            impaletheNightlvl3DMG = 34.16 / 100;
            break;
        case 6:
            swiftHunt1lvlDMG = 38.9 / 100;
            swiftHunt2lvlDMG = 56.38 / 100;
            impaletheNightlvl1DMG = 47.93 / 100;
            impaletheNightlvl2DMG = 63.9 / 100;
            impaletheNightlvl3DMG = 36.5 / 100;
            break;
        case 7:
            swiftHunt1lvlDMG = 42.32 / 100;
            swiftHunt2lvlDMG = 61.34 / 100;
            impaletheNightlvl1DMG = 52.14 / 100;
            impaletheNightlvl2DMG = 69.52 / 100;
            impaletheNightlvl3DMG = 39.71 / 100;
            break;
        case 8:
            swiftHunt1lvlDMG = 45.75 / 100;
            swiftHunt2lvlDMG = 66.3 / 100;
            impaletheNightlvl1DMG = 56.36 / 100;
            impaletheNightlvl2DMG = 75.15 / 100;
            impaletheNightlvl3DMG = 42.92 / 100;
            break;
        case 9:
            swiftHunt1lvlDMG = 49.17 / 100;
            swiftHunt2lvlDMG = 71.26 / 100;
            impaletheNightlvl1DMG = 60.58 / 100;
            impaletheNightlvl2DMG = 80.77 / 100;
            impaletheNightlvl3DMG = 46.14 / 100;
            break;
        case 10:
            swiftHunt1lvlDMG = 52.9 / 100;
            swiftHunt2lvlDMG = 76.67 / 100;
            impaletheNightlvl1DMG = 65.18 / 100;
            impaletheNightlvl2DMG = 86.9 / 100;
            impaletheNightlvl3DMG = 49.64 / 100;
            break;
        case 11:
            swiftHunt1lvlDMG = 56.64 / 100;
            swiftHunt2lvlDMG = 82.08 / 100;
            impaletheNightlvl1DMG = 69.78 / 100;
            impaletheNightlvl2DMG = 93.04 / 100;
            impaletheNightlvl3DMG = 53.14 / 100;
            break;
        case 12:
            swiftHunt1lvlDMG = 60.37 / 100;
            swiftHunt2lvlDMG = 87.49 / 100;
            impaletheNightlvl1DMG = 74.38 / 100;
            impaletheNightlvl2DMG = 99.17 / 100;
            impaletheNightlvl3DMG = 56.65 / 100;
            break;
        case 13:
            swiftHunt1lvlDMG = 64.11 / 100;
            swiftHunt2lvlDMG = 92.91 / 100;
            impaletheNightlvl1DMG = 78.98 / 100;
            impaletheNightlvl2DMG = 105.31 / 100;
            impaletheNightlvl3DMG = 60.15 / 100;
            break;
    }
    let swiftHunt1lvl = { Multiplier: swiftHunt1lvlDMG, Element: "Electro", Scaling: "ATK", isReaction: true, type: "NormalAttack" }
    let swiftHunt2lvl = { Multiplier: swiftHunt2lvlDMG, Element: "Electro", Scaling: "ATK", isReaction: true, type: "NormalAttack" }
    let impaletheNightlvl1 = { Multiplier: impaletheNightlvl1DMG, Element: "Electro", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let impaletheNightlvl2 = { Multiplier: impaletheNightlvl2DMG, Element: "Electro", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let impaletheNightlvl3 = { Multiplier: impaletheNightlvl3DMG, Element: "Electro", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = 0;
    let hasLawfulRemuneration = false;
    let hasDarkShatteringFlame = false;
    for (buffs of character.currentBuffs) {
        if (buffs.Type == "Lawful Remuneration") {
            character.currentBuffs.push({ Type: "CritRate", Value: 0, Source: "Lawful Remuneration" });
            hasLawfulRemuneration = true;
        }
        if (buffs.Type == "Dark-Shattering Flame") {
            character.currentBuffs.push({ Type: "FlatDMG", for: "NormalAttack", Value: 0, Source: "Dark-Shattering Flame" });
            hasDarkShatteringFlame = true;
        }

    }
    for (let i = 0; i < 24; i++) {
        //Combo 6[N1,N2,N3,E] where swifthunt is N and impale is E where lvl depends on bondoflife
        //Assuming 1000 heal every 3rd attack from support
        let currenBondOfLife = character.bondOfLife;
        //Update her buffs
        if (hasLawfulRemuneration) {
            for (buffs of character.currentBuffs) {
                if (buffs.Source == "Lawful Remuneration") {
                    if (currenBondOfLife >= 100) {
                        if (buffs.Value == 0)
                            buffs.Value = 10;
                        else if (buffs.Value == 10)
                            buffs.Value = 20;
                    }

                }
            }
        }
        if (i % 3 == 0 || i == 0) {
            swiftHunt1lvl.isReaction = true;
            swiftHunt2lvl.isReaction = true;
            impaletheNightlvl1.isReaction = true;
            impaletheNightlvl2.isReaction = true;
            impaletheNightlvl3.isReaction = true;
            //Gain Bond of life
            let heal = 2000;
            let percentHeal = heal / character.HP() * 100;
            character.applyBondOfLife(percentHeal);
            if (hasDarkShatteringFlame && (supportingElement != null || supportingElement != undefined)) {
                for (buffs of character.currentBuffs) {
                    if (buffs.Source == "Dark-Shattering Flame") {
                        let increase = (20 / 100) * character.attack();
                        if (increase > 600)
                            increase = 600;
                        buffs.Value += increase;
                        if (buffs.Value > 1800)
                            buffs.Value = 1800;
                    }
                }
            }
        }
        else {
            swiftHunt1lvl.isReaction = false;
            swiftHunt2lvl.isReaction = false;
            impaletheNightlvl1.isReaction = false;
            impaletheNightlvl2.isReaction = false;
            impaletheNightlvl3.isReaction = false;
        }
        if (i % 4 == 0) {
            //Impale the night

            switch (currenBondOfLife) {
                case currenBondOfLife == 0:
                    dmg += dmgCalc(impaletheNightlvl1, character) * numberOfEnemies;
                    break;
                case currenBondOfLife < 100:
                    dmg += dmgCalc(impaletheNightlvl2, character) * numberOfEnemies;
                    character.bondOfLifeRemove(1.04 * currenBondOfLife)
                    break;
                case currenBondOfLife > 100:
                    for (let j = 0; j < 3; j++) {
                        dmg += dmgCalc(impaletheNightlvl3, character) * numberOfEnemies;

                    }
                    character.bondOfLifeRemove(1.1 * currenBondOfLife)
            }
            continue;
        }
        //Swift Hunt
        if (currenBondOfLife >= 100) {
            dmg += dmgCalc(swiftHunt1lvl, character) * numberOfEnemies;
            dmg += dmgCalc(swiftHunt2lvl, character) * (numberOfEnemies - 1);//Pierces enemies
        }
        else {
            dmg += dmgCalc(swiftHunt1lvl, character) * numberOfEnemies;
            character.applyBondOfLife(35);
        }
    }
    return dmg;
}

function secretRiteChasmicSoulfarer(character) {
    let skillDMG = 0;
    let mortuaryRiteDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 130.4 / 100;
            mortuaryRiteDMG = 156.8 / 100;
            break;
        case 2:
            skillDMG = 140.18 / 100;
            mortuaryRiteDMG = 168.56 / 100;
            break;
        case 3:
            skillDMG = 149.96 / 100;
            mortuaryRiteDMG = 180.32 / 100;
            break;
        case 4:
            skillDMG = 163 / 100;
            mortuaryRiteDMG = 196 / 100;
            break;
        case 5:
            skillDMG = 172.78 / 100;
            mortuaryRiteDMG = 207.76 / 100;
            break;
        case 6:
            skillDMG = 182.56 / 100;
            mortuaryRiteDMG = 219.52 / 100;
            break;
        case 7:
            skillDMG = 195.6 / 100;
            mortuaryRiteDMG = 235.2 / 100;
            break;
        case 8:
            skillDMG = 208.64 / 100;
            mortuaryRiteDMG = 250.88 / 100;
            break;
        case 9:
            skillDMG = 221.68 / 100;
            mortuaryRiteDMG = 266.56 / 100;
            break;
        case 10:
            skillDMG = 234.72 / 100;
            mortuaryRiteDMG = 282.24 / 100;
            break;
        case 11:
            skillDMG = 247.76 / 100;
            mortuaryRiteDMG = 297.92 / 100;
            break;
        case 12:
            skillDMG = 260.8 / 100;
            mortuaryRiteDMG = 260.8 / 100;
            break;
        case 13:
            skillDMG = 277.1 / 100;
            mortuaryRiteDMG = 333.2 / 100;
            break;
    }

    //Check if in ult state
    let isInUlt = false;
    let hasA1 = false;
    let hasBuff = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Pactsworn Pathclearer") {
            isInUlt = true;
            continue;
        } else if (buff.Type == "Featherfall Judgment") {
            hasA1 = true;
            continue;
        } else if (buff.Type == "ElementalSkill") {
            if (buff.Source == "Featherfall Judgment") {
                hasBuff = true;
            }
            continue
        }

    }
    if (!isInUlt) {
        let skillAttack = { Multiplier: skillDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
        let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
        return dmg;
    }
    let enhancedAttack = { Multiplier: mortuaryRiteDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = 0;
    if (hasA1) {
        if (!hasBuff)
            character.currentBuffs.push({ Type: "ElementalSkill", Value: 35, Source: "Featherfall Judgment" });
        let duststalkerBoltAttack = { Multiplier: 100 / 100, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill", type2: "Duststalker Bolt" }
        for (let i = 0; i < 3; i++) {
            dmg += dmgCalc(duststalkerBoltAttack, character) * numberOfEnemies;
        }
    }
    dmg += dmgCalc(enhancedAttack, character) * numberOfEnemies;

    return dmg;
}

function spiritWardingLampTroubleshooterCannon(character) {
    let troubleshooterShotDMG = 0;
    let afterSalesServiceRoundDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            troubleshooterShotDMG = 147.28 / 100;
            afterSalesServiceRoundDMG = 31.56 / 100;
            break;
        case 2:
            troubleshooterShotDMG = 158.33 / 100;
            afterSalesServiceRoundDMG = 33.93 / 100;
            break;
        case 3:
            troubleshooterShotDMG = 169.37 / 100;
            afterSalesServiceRoundDMG = 36.29 / 100;
            break;
        case 4:
            troubleshooterShotDMG = 184.1 / 100;
            afterSalesServiceRoundDMG = 39.45 / 100;
            break;
        case 5:
            troubleshooterShotDMG = 195.15 / 100;
            afterSalesServiceRoundDMG = 41.82 / 100;
            break;
        case 6:
            troubleshooterShotDMG = 206.19 / 100;
            afterSalesServiceRoundDMG = 44.18 / 100;
            break;
        case 7:
            troubleshooterShotDMG = 220.92 / 100;
            afterSalesServiceRoundDMG = 47.34 / 100;
            break;
        case 8:
            troubleshooterShotDMG = 235.65 / 100;
            afterSalesServiceRoundDMG = 50.5 / 100;
            break;
        case 9:
            troubleshooterShotDMG = 250.38 / 100;
            afterSalesServiceRoundDMG = 53.65 / 100;
            break;
        case 10:
            troubleshooterShotDMG = 265.1 / 100;
            afterSalesServiceRoundDMG = 56.81 / 100;
            break;
        case 11:
            troubleshooterShotDMG = 279.83 / 100;
            afterSalesServiceRoundDMG = 59.96 / 100;
            break;
        case 12:
            troubleshooterShotDMG = 294.56 / 100;
            afterSalesServiceRoundDMG = 63.12 / 100;
            break;
        case 13:
            troubleshooterShotDMG = 312.97 / 100;
            afterSalesServiceRoundDMG = 67.06 / 100;
            break;
    }
    let troubleshooterShot = { Multiplier: troubleshooterShotDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let afterSalesServiceRound = { Multiplier: afterSalesServiceRoundDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill" }
    let dmg = dmgCalc(troubleshooterShot, character) * numberOfEnemies;
    dmg += dmgCalc(afterSalesServiceRound, character) * numberOfEnemies * 2;
    return { dmg: dmg };
}
const LumidouceCase = {
    scents: 0,
    currentLevel: 1,
    checkforScents: function () {
        if (targetsBurning) {
            this.scents++;
            if (this.scents >= 2) {
                if (this.currentLevel == 1) {
                    this.currentLevel = 2;
                    this.scents = 0;
                }
                else if (this.currentLevel >= 2)
                    this.currentLevel = 2;
            }
        }
        return this.scents;
    }

}
function fragranceExtraction(character) {
    let skillDMG = 0;
    let lumiDouceCaselvl1DMG = 0;
    let lumiDouceCaselvl2DMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 47.08 / 100;
            lumiDouceCaselvl1DMG = 39.6 / 100;
            lumiDouceCaselvl2DMG = 84 / 100;
            break;
        case 2:
            skillDMG = 50.61 / 100;
            lumiDouceCaselvl1DMG = 42.57 / 100;
            lumiDouceCaselvl2DMG = 90.3 / 100;
            break;
        case 3:
            skillDMG = 54.14 / 100;
            lumiDouceCaselvl1DMG = 45.54 / 100;
            lumiDouceCaselvl2DMG = 96.6 / 100;
            break;
        case 4:
            skillDMG = 58.85 / 100;
            lumiDouceCaselvl1DMG = 49.5 / 100;
            lumiDouceCaselvl2DMG = 105 / 100;
            break;
        case 5:
            skillDMG = 62.38 / 100;
            lumiDouceCaselvl1DMG = 52.47 / 100;
            lumiDouceCaselvl2DMG = 111.3 / 100;
            break;
        case 6:
            skillDMG = 65.91 / 100;
            lumiDouceCaselvl1DMG = 55.44 / 100;
            lumiDouceCaselvl2DMG = 117.6 / 100;
            break;
        case 7:
            skillDMG = 70.62 / 100;
            lumiDouceCaselvl1DMG = 59.4 / 100;
            lumiDouceCaselvl2DMG = 126 / 100;
            break;
        case 8:
            skillDMG = 75.33 / 100;
            lumiDouceCaselvl1DMG = 63.36 / 100;
            lumiDouceCaselvl2DMG = 134.4 / 100;
            break;
        case 9:
            skillDMG = 80.04 / 100;
            lumiDouceCaselvl1DMG = 67.32 / 100;
            lumiDouceCaselvl2DMG = 142.8 / 100;
            break;
        case 10:
            skillDMG = 84.74 / 100;
            lumiDouceCaselvl1DMG = 71.28 / 100;
            lumiDouceCaselvl2DMG = 151.2 / 100;
            break;
        case 11:
            skillDMG = 89.45 / 100;
            lumiDouceCaselvl1DMG = 75.24 / 100;
            lumiDouceCaselvl2DMG = 159.6 / 100;
            break;
        case 12:
            skillDMG = 94.16 / 100;
            lumiDouceCaselvl1DMG = 79.2 / 100;
            lumiDouceCaselvl2DMG = 168 / 100;
            break;
        case 13:
            skillDMG = 100.05 / 100;
            lumiDouceCaselvl1DMG = 84.15 / 100;
            lumiDouceCaselvl2DMG = 178.5 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let lumiDouceCaselvl1 = { Multiplier: lumiDouceCaselvl1DMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let lumiDouceCaselvl2 = { Multiplier: lumiDouceCaselvl2DMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    let hasA1 = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Lingering Fragrance") {
            hasA1 = true;
        }
    }
    for (let i = 1; i <= 14; i++) {
        //Each i is 1.5s
        if (i % 2 == 0) {
            lumiDouceCaselvl1.isReaction = true;
            lumiDouceCaselvl2.isReaction = true;
        }
        else {
            lumiDouceCaselvl1.isReaction = false;
            lumiDouceCaselvl2.isReaction = false;
        }
        //Check every 2s for scents 
        if (i == 2 || i == 3 || i == 4 || i == 6 || i == 7 || i == 8 || i == 10 || i == 11 || i == 12 || i == 14) {

            LumidouceCase.checkforScents();

        }
        if (LumidouceCase.currentLevel == 1) {
            dmg += dmgCalc(lumiDouceCaselvl1, character) * numberOfEnemies;

        }
        else if (LumidouceCase.currentLevel == 2) {

            dmg += dmgCalc(lumiDouceCaselvl2, character) * numberOfEnemies;
            lumiDouceCaselvl2.isReaction = false;
            dmg += dmgCalc(lumiDouceCaselvl2, character) * numberOfEnemies;
            //if has a1 do big dmg
            if (hasA1 && LumidouceCase.scents == 2) {
                LumidouceCase.scents = 0;
                //Big dmg
                let bigDMG = { Multiplier: 600 / 100, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "Special" }
                dmg += dmgCalc(bigDMG, character) * numberOfEnemies;
            }
        }

    }
    return dmg;
}

function windRealmofNasamjnin(character) {
    let skillDMG = 0;
    let pressurizedCollapseVortexDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 148.8 / 100;
            pressurizedCollapseVortexDMG = 108 / 100;
            break;
        case 2:
            skillDMG = 159.96 / 100;
            pressurizedCollapseVortexDMG = 116.1 / 100;
            break;
        case 3:
            skillDMG = 171.12 / 100;
            pressurizedCollapseVortexDMG = 124.2 / 100;
            break;
        case 4:
            skillDMG = 186 / 100;
            pressurizedCollapseVortexDMG = 135 / 100;
            break;
        case 5:
            skillDMG = 197.16 / 100;
            pressurizedCollapseVortexDMG = 143.1 / 100;
            break;
        case 6:
            skillDMG = 208.32 / 100;
            pressurizedCollapseVortexDMG = 151.2 / 100;
            break;
        case 7:
            skillDMG = 223.2 / 100;
            pressurizedCollapseVortexDMG = 162 / 100;
            break;
        case 8:
            skillDMG = 238.08 / 100;
            pressurizedCollapseVortexDMG = 172.8 / 100;
            break;
        case 9:
            skillDMG = 252.96 / 100;
            pressurizedCollapseVortexDMG = 183.6 / 100;
            break;
        case 10:
            skillDMG = 267.84 / 100;
            pressurizedCollapseVortexDMG = 194.4 / 100;
            break;
        case 11:
            skillDMG = 282.72 / 100;
            pressurizedCollapseVortexDMG = 205.2 / 100;
            break;
        case 12:
            skillDMG = 297.6 / 100;
            pressurizedCollapseVortexDMG = 216 / 100;
            break;
        case 13:
            skillDMG = 316.2 / 100;
            pressurizedCollapseVortexDMG = 316.2 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let pressurizedCollapseVortex = { Multiplier: pressurizedCollapseVortexDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    dmg += dmgCalc(pressurizedCollapseVortex, character) * numberOfEnemies;
    return { dmg: dmg };
}

function pressurizedFloe(character) {
    let upwardThrustDMG = 0;
    let frostDMG = 0;
    let shatteringPressure = 0;
    let shatteringPressure4 = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            upwardThrustDMG = 83.04 / 100;
            frostDMG = 7.16 / 100;
            shatteringPressure = 200.48 / 100;
            shatteringPressure4 = 243.44 / 100;
            break;
        case 2:
            upwardThrustDMG = 89.27 / 100;
            frostDMG = 7.7 / 100;
            shatteringPressure = 215.52 / 100;
            shatteringPressure4 = 261.7 / 100;
            break;
        case 3:
            upwardThrustDMG = 95.5 / 100;
            frostDMG = 8.23 / 100;
            shatteringPressure = 230.55 / 100;
            shatteringPressure4 = 279.96 / 100;
            break;
        case 4:
            upwardThrustDMG = 103.8 / 100;
            frostDMG = 8.95 / 100;
            shatteringPressure = 250.6 / 100;
            shatteringPressure4 = 304.3 / 100;
            break;
        case 5:
            upwardThrustDMG = 110.03 / 100;
            frostDMG = 9.49 / 100;
            shatteringPressure = 265.64 / 100;
            shatteringPressure4 = 322.56 / 100;
            break;
        case 6:
            upwardThrustDMG = 116.26 / 100;
            frostDMG = 10.02 / 100;
            shatteringPressure = 280.67 / 100;
            shatteringPressure4 = 340.82 / 100;
            break;
        case 7:
            upwardThrustDMG = 124.56 / 100;
            frostDMG = 10.74 / 100;
            shatteringPressure = 300.72 / 100;
            shatteringPressure4 = 365.16 / 100;
            break;
        case 8:
            upwardThrustDMG = 132.86 / 100;
            frostDMG = 11.46 / 100;
            shatteringPressure = 320.77 / 100;
            shatteringPressure4 = 389.5 / 100;
            break;
        case 9:
            upwardThrustDMG = 141.17 / 100;
            frostDMG = 12.17 / 100;
            shatteringPressure = 340.82 / 100;
            shatteringPressure4 = 413.85 / 100;
            break;
        case 10:
            upwardThrustDMG = 149.47 / 100;
            frostDMG = 12.89 / 100;
            shatteringPressure = 360.86 / 100;
            shatteringPressure4 = 438.19 / 100;
            break;
        case 11:
            upwardThrustDMG = 157.78 / 100;
            frostDMG = 13.6 / 100;
            shatteringPressure = 380.91 / 100;
            shatteringPressure4 = 462.54 / 100;
            break;
        case 12:
            upwardThrustDMG = 166.08 / 100;
            frostDMG = 14.32 / 100;
            shatteringPressure = 400.96 / 100;
            shatteringPressure4 = 486.88 / 100;
            break;
        case 13:
            upwardThrustDMG = 176.46 / 100;
            frostDMG = 15.22 / 100;
            shatteringPressure = 426.02 / 100;
            shatteringPressure4 = 517.31 / 100;
            break;
    }
    let upwardThrust = { Multiplier: upwardThrustDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let frost = { Multiplier: frostDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let shatteringPressureAttack = { Multiplier: shatteringPressure, Element: "PhysicalDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill" }
    let shatteringPressureAttack4 = { Multiplier: shatteringPressure4, Element: "PhysicalDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill" }
    let dmg = dmgCalc(frost * 2, character) * numberOfEnemies * 1.6;//1.6 avg normal attacks per e use
    switch (persTimer) {
        case -1:
            dmg += dmgCalc(upwardThrust, character) * numberOfEnemies;
            persTimer = 0;
            break;
        case 0:
            dmg += dmgCalc(shatteringPressureAttack, character) * numberOfEnemies;
            persTimer = -1;
            break;
        case 1:
            dmg += dmgCalc(upwardThrust, character) * numberOfEnemies;
            persTimer = 0;
            break;
        case 4:
            dmg += dmgCalc(shatteringPressureAttack4, character) * numberOfEnemies;
            persTimer = -1;
            break;
        default:
            console.log("opsie " + persTimer);
            break;
    }
    return dmg;
}

function sanctifyingRing(character) {
    let skillDMG = 0;
    let grassRingofSancitifactionDMG = 0;
    let grassRingofSancitifactionHealing = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 75.71 / 100;
            grassRingofSancitifactionHealing = character.HP() * (3 / 100) + 288.89;
            grassRingofSancitifactionDMG = 25.24 / 100;
            break;
        case 2:
            skillDMG = 81.39 / 100;
            grassRingofSancitifactionHealing = character.HP() * (3.23 / 100) + 317.78;
            grassRingofSancitifactionDMG = 27.13 / 100;
            break;
        case 3:
            skillDMG = 87.07 / 100;
            grassRingofSancitifactionHealing = character.HP() * (3.45 / 100) + 349.08;
            grassRingofSancitifactionDMG = 29.03 / 100;
            break;
        case 4:
            skillDMG = 94.64 / 100;
            grassRingofSancitifactionHealing = character.HP() * (3.75 / 100) + 382.79;
            grassRingofSancitifactionDMG = 31.55 / 100;
            break;
        case 5:
            skillDMG = 100.32 / 100;
            grassRingofSancitifactionHealing = character.HP() * (3.98 / 100) + 418.91;
            grassRingofSancitifactionDMG = 33.44 / 100;
            break;
        case 6:
            skillDMG = 106 / 100;
            grassRingofSancitifactionHealing = character.HP() * (4.2 / 100) + 457.43;
            grassRingofSancitifactionDMG = 35.34 / 100;
            break;
        case 7:
            skillDMG = 113.57 / 100;
            grassRingofSancitifactionHealing = character.HP() * (4.5 / 100) + 498.37;
            grassRingofSancitifactionDMG = 37.86 / 100;
            break;
        case 8:
            skillDMG = 121.14 / 100;
            grassRingofSancitifactionHealing = character.HP() * (4.8 / 100) + 541.71;
            grassRingofSancitifactionDMG = 40.38 / 100;
            break;
        case 9:
            skillDMG = 128.71 / 100;
            grassRingofSancitifactionHealing = character.HP() * (5.1 / 100) + 587.45;
            grassRingofSancitifactionDMG = 42.91 / 100;
            break;
        case 10:
            skillDMG = 136.28 / 100;
            grassRingofSancitifactionHealing = character.HP() * (5.4 / 100) + 635.61;
            grassRingofSancitifactionDMG = 45.43 / 100;
            break;
        case 11:
            skillDMG = 143.85 / 100;
            grassRingofSancitifactionHealing = character.HP() * (5.7 / 100) + 686.17;
            grassRingofSancitifactionDMG = 47.96 / 100;
            break;
        case 12:
            skillDMG = 151.42 / 100;
            grassRingofSancitifactionHealing = character.HP() * (6 / 100) + 739.14;
            grassRingofSancitifactionDMG = 50.48 / 100;
            break;
        case 13:
            skillDMG = 160.89 / 100;
            grassRingofSancitifactionHealing = character.HP() * (6.38 / 100) + 794.52;
            grassRingofSancitifactionDMG = 53.63 / 100;
            break;

    }
    let skillAttack = { Multiplier: skillDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let grassRingofSancitifaction = { Multiplier: grassRingofSancitifactionDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let hasA4 = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Heart's Repose") {
            hasA4 = true;
        }
    }
    if (hasA4) {
        character.currentBuffs.push({ Type: "FlatDMG", Value: (25 / 100) * character.EM(), Source: "Heart's Repose", for: "ElementalSkill" });
        grassRingofSancitifactionHealing += ((75 / 100) * character.EM());
    }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            grassRingofSancitifaction.isReaction = true;
        }
        else {
            grassRingofSancitifaction.isReaction = false;
        }
        dmg += dmgCalc(grassRingofSancitifaction, character) * numberOfEnemies;
    }
    healingHasOccured(character);
    return { dmg: dmg, healing: grassRingofSancitifactionHealing };
}

function bestialAscent(character) {
    let plungMultiplier = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            plungMultiplier = 230.4;
            break;
        case 2:
            plungMultiplier = 247.68;
            break;
        case 3:
            plungMultiplier = 264.96;
            break;
        case 4:
            plungMultiplier = 288;
            break;
        case 5:
            plungMultiplier = 305.28;
            break;
        case 6:
            plungMultiplier = 322.56;
            break;
        case 7:
            plungMultiplier = 345.6;
            break;
        case 8:
            plungMultiplier = 368.64;
            break;
        case 9:
            plungMultiplier = 391.68;
            break;
        case 10:
            plungMultiplier = 414.72;
            break;
        case 11:
            plungMultiplier = 437.76;
            break;
        case 12:
            plungMultiplier = 460.8;
            break;
        case 13:
            plungMultiplier = 489.6;
            break;

    }
    character.plungeAttack.Multiplier = function (level) { return plungMultiplier / 100 };
    return 0;
}

function artisticIngenuity(character) {
    let skillDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 204 / 100;
            break;
        case 2:
            skillDMG = 219.3 / 100;
            break;
        case 3:
            skillDMG = 234.6 / 100;
            break;
        case 4:
            skillDMG = 255 / 100;
            break;
        case 5:
            skillDMG = 270.3 / 100;
            break;
        case 6:
            skillDMG = 285.6 / 100;
            break;
        case 7:
            skillDMG = 306 / 100;
            break;
        case 8:
            skillDMG = 326.4 / 100;
            break;
        case 9:
            skillDMG = 346.8 / 100;
            break;
        case 10:
            skillDMG = 367.2 / 100;
            break;
        case 11:
            skillDMG = 387.6 / 100;
            break;
        case 12:
            skillDMG = 408 / 100;
            break;
        case 13:
            skillDMG = 433.5 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    return dmg;
}

function meowteorKick(character) {
    let parcelHitDMG = 0;
    let shield = 0;
    let flipclawStrikeDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            parcelHitDMG = 33.6 / 100;
            shield = (character.HP() * (16 / 100)) + 1541.0796
            flipclawStrikeDMG = 144 / 100;
            break;
        case 2:
            parcelHitDMG = 36.12 / 100;
            shield = (character.HP() * (17.2 / 100)) + 1695.2089
            flipclawStrikeDMG = 154.8 / 100;
            break;
        case 3:
            parcelHitDMG = 38.64 / 100;
            shield = (character.HP() * (18.4 / 100)) + 1862.1824
            flipclawStrikeDMG = 165.6 / 100;
            break;
        case 4:
            parcelHitDMG = 42 / 100;
            shield = (character.HP() * (20 / 100)) + 2042
            flipclawStrikeDMG = 180 / 100;
            break;
        case 5:
            parcelHitDMG = 44.52 / 100;
            shield = (character.HP() * (21.2 / 100)) + 2234.6616
            flipclawStrikeDMG = 190.8 / 100;
            break;
        case 6:
            parcelHitDMG = 47.04 / 100;
            shield = (character.HP() * (22.4 / 100)) + 2440.1675
            flipclawStrikeDMG = 201.6 / 100;
            break;
        case 7:
            parcelHitDMG = 50.4 / 100;
            shield = (character.HP() * (24 / 100)) + 2658.5176
            flipclawStrikeDMG = 216 / 100;
            break;
        case 8:
            parcelHitDMG = 53.76 / 100;
            shield = (character.HP() * (25.6 / 100)) + 2889.7117
            flipclawStrikeDMG = 230.4 / 100;
            break;
        case 9:
            parcelHitDMG = 57.12 / 100;
            shield = (character.HP() * (27.2 / 100)) + 3133.7498
            flipclawStrikeDMG = 244.8 / 100;
            break;
        case 10:
            parcelHitDMG = 60.48 / 100;
            shield = (character.HP() * (28.8 / 100)) + 3390.632
            flipclawStrikeDMG = 259.2 / 100;
            break;
        case 11:
            parcelHitDMG = 63.84 / 100;
            shield = (character.HP() * (30.4 / 100)) + 3660.3584
            flipclawStrikeDMG = 273.6 / 100;
            break;
        case 12:
            parcelHitDMG = 67.2 / 100;
            shield = (character.HP() * (32 / 100)) + 3942.929
            flipclawStrikeDMG = 288 / 100;
            break;
        case 13:
            parcelHitDMG = 71.4 / 100;
            shield = (character.HP() * (34 / 100)) + 4238.3438
            flipclawStrikeDMG = 306 / 100;
            break;
    }
    let parcelHit = { Multiplier: parcelHitDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let flipclawStrike = { Multiplier: flipclawStrikeDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let dmg = 0;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Pupillary Variance") {
            character.currentBuffs.push({ Type: "ElementalSkill", Value: Math.floor(character.HP() / 100) * 0.4 });
        }
    }
    for (let i = 0; i < 20 * numberOfEnemies; i++) {
        if (i % 3 == 0) {
            flipclawStrike.isReaction = true;
        }
        else {
            flipclawStrike.isReaction = false;
        }
        dmg += dmgCalc(parcelHit, character);
    }
    dmg += dmgCalc(flipclawStrike, character) * numberOfEnemies;
    for (let i = 0; i < numberOfEnemies; i++) {
        dmg += dmgCalc(flipclawStrike, character);
    }
    return { dmg: dmg, shield: shield };
}

function nightsofFormalFocus(character) {
    let skillDMG = 0;
    let shootingStarDMG = 0;
    let shield = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 12.8 / 100;
            shootingStarDMG = 14.72 / 100;
            shield = (character.HP() * (10.8 / 100)) + 1040;
            break;
        case 2:
            skillDMG = 13.76 / 100;
            shootingStarDMG = 15.82 / 100;
            shield = (character.HP() * (11.61 / 100)) + 1144;
            break;
        case 3:
            skillDMG = 14.72 / 100;
            shootingStarDMG = 16.93 / 100;
            shield = (character.HP() * (12.42 / 100)) + 1256;
            break;
        case 4:
            skillDMG = 16 / 100;
            shootingStarDMG = 18.4 / 100;
            shield = (character.HP() * (13.5 / 100)) + 1378;
            break;
        case 5:
            skillDMG = 16.96 / 100;
            shootingStarDMG = 19.5 / 100;
            shield = (character.HP() * (14.31 / 100)) + 1508;
            break;
        case 6:
            skillDMG = 17.92 / 100;
            shootingStarDMG = 20.61 / 100;
            shield = (character.HP() * (15.12 / 100)) + 1646;
            break;
        case 7:
            skillDMG = 19.2 / 100;
            shootingStarDMG = 22.08 / 100;
            shield = (character.HP() * (16.2 / 100)) + 1794;
            break;
        case 8:
            skillDMG = 20.48 / 100;
            shootingStarDMG = 23.55 / 100;
            shield = (character.HP() * (17.28 / 100)) + 1950;
            break;
        case 9:
            skillDMG = 21.76 / 100;
            shootingStarDMG = 25.02 / 100;
            shield = (character.HP() * (18.36 / 100)) + 2114;
            break;
        case 10:
            skillDMG = 23.04 / 100;
            shootingStarDMG = 26.5 / 100;
            shield = (character.HP() * (19.44 / 100)) + 2288;
            break;
        case 11:
            skillDMG = 24.32 / 100;
            shootingStarDMG = 27.97 / 100;
            shield = (character.HP() * (20.52 / 100)) + 2470;
            break;
        case 12:
            skillDMG = 25.6 / 100;
            shootingStarDMG = 29.44 / 100;
            shield = (character.HP() * (21.6 / 100)) + 2660;
            break;
        case 13:
            skillDMG = 27.2 / 100;
            shootingStarDMG = 31.28 / 100;
            shield = (character.HP() * (22.95 / 100)) + 2860;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let shootingStar = { Multiplier: shootingStarDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst", type2: "Shooting Star" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    let hasA4 = false;
    let hasBuff = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Sweet Slumber Undisturbed") {
            hasA4 = true;
            continue;
        }
        else if (buff.Type == "FlatDMG") {
            if (buff.for == "Shooting Star") {
                hasBuff = true;
            }
        }
    }

    if (hasA4 && !hasBuff)
        character.currentBuffs.push({ Type: "FlatDMG", Value: (character.HP() / 100) * 1.5, for: "Shooting Star" });
    for (let i = 0; i < 5; i++) {
        shootingStar.isReaction = true;
        dmg += dmgCalc(shootingStar, character);
        shootingStar.isReaction = false;
        for (let j = 0; j < 3; j++) {
            dmg += dmgCalc(shootingStar, character);
        }
    }
    return { dmg: dmg, shield: shield };
}
function allSchemestoKnow(character) {
    let holdDMG = 0;
    let triKarmaDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            holdDMG = 130.4 / 100;
            triKarmaDMG = (character.attack() * (103.2 / 100)) + (character.EM() * (206.4 / 100));
            break;
        case 2:
            holdDMG = 140.18 / 100;
            triKarmaDMG = (character.attack() * (110.94 / 100)) + (character.EM() * (221.88 / 100));
            break;
        case 3:
            holdDMG = 149.96 / 100;
            triKarmaDMG = (character.attack() * (118.68 / 100)) + (character.EM() * (237.36 / 100));
            break;
        case 4:
            holdDMG = 163 / 100;
            triKarmaDMG = (character.attack() * (129 / 100)) + (character.EM() * (258 / 100));
            break;
        case 5:
            holdDMG = 172.78100;
            triKarmaDMG = (character.attack() * (136.74 / 100)) + (character.EM() * (273.48 / 100));
            break;
        case 6:
            holdDMG = 182.56 / 100;
            triKarmaDMG = (character.attack() * (144.48 / 100)) + (character.EM() * (288.96 / 100));
            break;
        case 7:
            holdDMG = 195.6 / 100;
            triKarmaDMG = (character.attack() * (154.8 / 100)) + (character.EM() * (309.6 / 100));
            break;
        case 8:
            holdDMG = 208.64 / 100;
            triKarmaDMG = (character.attack() * (165.12 / 100)) + (character.EM() * (330.24 / 100));
            break;
        case 9:
            holdDMG = 221.68 / 100;
            triKarmaDMG = (character.attack() * (175.44 / 100)) + (character.EM() * (350.88 / 100));
            break;
        case 10:
            holdDMG = 234.72 / 100;
            triKarmaDMG = (character.attack() * (185.76 / 100)) + (character.EM() * (371.52 / 100));
            break;
        case 11:
            holdDMG = 247.76 / 100;
            triKarmaDMG = (character.attack() * (196.08 / 100)) + (character.EM() * (392.16 / 100));
            break;
        case 12:
            holdDMG = 260.8 / 100;
            triKarmaDMG = (character.attack() * (206.4 / 100)) + (character.EM() * (412.8 / 100));
            break;
        case 13:
            holdDMG = 277.1 / 100;
            triKarmaDMG = (character.attack() * (219.3 / 100)) + (character.EM() * (438.6 / 100));
            break;
    }
    let holdAttack = { Multiplier: holdDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalBurst" }
    let triKarma = { Multiplier: triKarmaDMG, Element: "DendroDMGBonus", Scaling: "Combined", isReaction: true, type: "ElementalBurst" }
    let dmg = dmgCalc(holdAttack, character) * numberOfEnemies;
    let dmgBonus = 0;
    let intervalBonus = 0;
    let hasBuff = false;
    let hasA4 = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Illusory Heart") {
            dmgBonus = buff.pyroBonus
            intervalBonus = buff.electroBonus;
            continue;
        } else if (buff.Type == "ElementalSkill" && buff.for == "tri-karma") {
            hasBuff = true;
        } else if (buff.Type == "Pupillary Variance") {
            hasA4 = true;

        }
    }
    if (!hasBuff) {
        character.currentBuffs.push({ Type: "ElementalSkill", Value: dmgBonus, for: "tri-karma" });
    }
    let critBonus = 0;
    if (hasA4) {
        let emForBonus = character.EM() - 200;
        if (emForBonus < 0) {
            emForBonus = 0;
        }
        character.currentBuffs.push({
            Type: "AddativeBonusDMG",
            Value: emForBonus * 0.1,
            Source: "Pupillary Variance",
        });
        critBonus = emForBonus * 0.03;
        character.advancedstats.critRate += critBonus;
    }
    let interval = Math.floor(25 / (1.5 - intervalBonus));
    let containing = ["Pyro", "Electro", "Hydro"];
    if (containing.includes(supportingElement)) {
        for (let i = 0; i < interval; i++) {
            dmg += dmgCalc(triKarma, character) * numberOfEnemies - 1;
        }
    }
    character.advancedstats.critRate -= critBonus;
    if (hasA4) {
        for (buff of character.currentBuffs) {
            if (buff.Source == "Pupillary Variance") {
                character.currentBuffs.pop(buff);
            }
        }
    }
    return dmg;
}
function heartstopperStrike(character) {
    let skillDMG = 0;
    let declensionDMGBonus = 0;
    let convictionDMGBonus = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 227.52 / 100;
            declensionDMGBonus = 56.88;
            convictionDMGBonus = 113.76;
            break;
        case 2:
            skillDMG = 244.58 / 100;
            declensionDMGBonus = 61.15;
            convictionDMGBonus = 122.29;
            break;
        case 3:
            skillDMG = 261.65 / 100;
            declensionDMGBonus = 65.41;
            convictionDMGBonus = 130.82;
            break;
        case 4:
            skillDMG = 284.4 / 100;
            declensionDMGBonus = 71.1;
            convictionDMGBonus = 142.2;
            break;
        case 5:
            skillDMG = 301.46 / 100;
            declensionDMGBonus = 75.37;
            convictionDMGBonus = 150.73;
            break;
        case 6:
            skillDMG = 318.53 / 100;
            declensionDMGBonus = 79.63;
            convictionDMGBonus = 159.26;
            break;
        case 7:
            skillDMG = 341.28 / 100;
            declensionDMGBonus = 85.32;
            convictionDMGBonus = 170.64;
            break;
        case 8:
            skillDMG = 364.03 / 100;
            declensionDMGBonus = 91.01;
            convictionDMGBonus = 182.02;
            break;
        case 9:
            skillDMG = 386.78 / 100;
            declensionDMGBonus = 96.7;
            convictionDMGBonus = 193.39;
            break;
        case 10:
            skillDMG = 409.54 / 100;
            declensionDMGBonus = 102.38;
            convictionDMGBonus = 204.77;
            break;
        case 11:
            skillDMG = 432.29 / 100;
            declensionDMGBonus = 108.07;
            convictionDMGBonus = 216.14;
            break;
        case 12:
            skillDMG = 455.04 / 100;
            declensionDMGBonus = 113.76;
            convictionDMGBonus = 227.52;
            break;
        case 13:
            skillDMG = 483.48 / 100;
            declensionDMGBonus = 120.87;
            convictionDMGBonus = 241.74;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let hasBuff = false;
    let declensionBuff = "";
    for (buff of character.currentBuffs) {
        if (buff.Type == "AddativeBonusDMG" && buff.Source == "Declension") {
            hasBuff = true;
            declensionBuff = buff;
        }
    }
    if (!hasBuff) {
        character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: ((declensionDMGBonus * 4) + convictionDMGBonus), Source: "Declension" });
    }
    dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    if (!hasBuff) {
        character.currentBuffs.pop(declensionBuff);
    }
    return dmg;
}
function enigmaticFeint(character) {
    let skillDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 268 / 100;
            break;
        case 2:
            skillDMG = 288.1 / 100;
            break;
        case 3:
            skillDMG = 308.2 / 100;
            break;
        case 4:
            skillDMG = 335 / 100;
            break;
        case 5:
            skillDMG = 355.1 / 100;
            break;
        case 6:
            skillDMG = 375.2 / 100;
            break;
        case 7:
            skillDMG = 402 / 100;
            break;
        case 8:
            skillDMG = 428.8 / 100;
            break;
        case 9:
            skillDMG = 455.6 / 100;
            break;
        case 10:
            skillDMG = 482.4 / 100;
            break;
        case 11:
            skillDMG = 509.2 / 100;
            break;
        case 12:
            skillDMG = 536 / 100;
            break;
        case 13:
            skillDMG = 569.5 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    return dmg;
}

function danceofHaftkarsvar(character) {
    let skillDMG = 0;
    let swordHit1DMG = 0;
    let swordHit2DMG = 0;
    let luminousIllusionDMG = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            skillDMG = 3.34 / 100;
            swordHit1DMG = 4.55 / 100;
            swordHit2DMG = 5.14 / 100;
            luminousIllusionDMG = 7.17 / 100;
            break;
        case 2:
            skillDMG = 3.59 / 100;
            swordHit1DMG = 4.89 / 100;
            swordHit2DMG = 5.53 / 100;
            luminousIllusionDMG = 7.71 / 100;
            break;
        case 3:
            skillDMG = 3.84 / 100;
            swordHit1DMG = 5.24 / 100;
            swordHit2DMG = 5.92 / 100;
            luminousIllusionDMG = 8.24 / 100;
            break;
        case 4:
            skillDMG = 4.17 / 100;
            swordHit1DMG = 5.69 / 100;
            swordHit2DMG = 6.43 / 100;
            luminousIllusionDMG = 8.96 / 100;
            break;
        case 5:
            skillDMG = 4.42 / 100;
            swordHit1DMG = 6.03 / 100;
            swordHit2DMG = 6.82 / 100;
            luminousIllusionDMG = 9.5 / 100;
            break;
        case 6:
            skillDMG = 4.67 / 100;
            swordHit1DMG = 6.37 / 100;
            swordHit2DMG = 7.2 / 100;
            luminousIllusionDMG = 10.04 / 100;
            break;
        case 7:
            skillDMG = 5.01 / 100;
            swordHit1DMG = 6.83 / 100;
            swordHit2DMG = 7.72 / 100;
            luminousIllusionDMG = 10.75 / 100;
            break;
        case 8:
            skillDMG = 5.34 / 100;
            swordHit1DMG = 7.28 / 100;
            swordHit2DMG = 8.23 / 100;
            luminousIllusionDMG = 11.47 / 100;
            break;
        case 9:
            skillDMG = 5.68 / 100;
            swordHit1DMG = 7.74 / 100;
            swordHit2DMG = 8.75 / 100;
            luminousIllusionDMG = 12.19 / 100;
            break;
        case 10:
            skillDMG = 6.01 / 100;
            swordHit1DMG = 8.19 / 100;
            swordHit2DMG = 9.26 / 100;
            luminousIllusionDMG = 12.9 / 100;
            break;
        case 11:
            skillDMG = 6.34 / 100;
            swordHit1DMG = 8.65 / 100;
            swordHit2DMG = 9.77 / 100;
            luminousIllusionDMG = 13.62 / 100;
            break;
        case 12:
            skillDMG = 6.68 / 100;
            swordHit1DMG = 9.11 / 100;
            swordHit2DMG = 10.29 / 100;
            luminousIllusionDMG = 14.34 / 100;
            break;
        case 13:
            skillDMG = 7.1 / 100;
            swordHit1DMG = 9.67 / 100;
            swordHit2DMG = 10.93 / 100;
            luminousIllusionDMG = 15.23 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "HydroDMGBonus", Scaling: "HP", isReaction: true, type: "ElementalBurst" }
    character.normalAttack1.Multiplier = function (level) { return swordHit1DMG };
    character.normalAttack1.Element = "HydroDMGBonus";
    character.normalAttack1.isReaction = true;
    character.normalAttack1.scaling = "HP";
    character.normalAttack2.Multiplier = function (level) { return swordHit2DMG };
    character.normalAttack2.Element = "HydroDMGBonus";
    character.normalAttack2.isReaction = false;
    character.normalAttack2.scaling = "HP";
    character.normalAttack3.Multiplier = function (level) { return luminousIllusionDMG };
    character.normalAttack3.Element = "HydroDMGBonus";
    character.normalAttack3.isReaction = false;
    character.normalAttack3.scaling = "HP";

    if (supportingElement == "Dendro") {
        shouldGenerateBountifulCores = true;
    }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    return dmg;
}

function razorgrassBlade(character) {
    let skillDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 230.4 / 100;
            break;
        case 2:
            skillDMG = 247.68 / 100;
            break;
        case 3:
            skillDMG = 264.96 / 100;
            break;
        case 4:
            skillDMG = 288 / 100;
            break;
        case 5:
            skillDMG = 305.28 / 100;
            break;
        case 6:
            skillDMG = 322.56 / 100;
            break;
        case 7:
            skillDMG = 345.6 / 100;
            break;
        case 8:
            skillDMG = 368.64 / 100;
            break;
        case 9:
            skillDMG = 391.68 / 100;
            break;
        case 10:
            skillDMG = 414.72 / 100;
            break;
        case 11:
            skillDMG = 437.76 / 100;
            break;
        case 12:
            skillDMG = 460.8 / 100;
            break;
        case 13:
            skillDMG = 489.6 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    return dmg;
}

function aquacrestSaber(character) {
    let dewdropDMG = 0;
    let suffusionDMGBonus = 0;
    switch (character.elementalBurst.Level) {
        case 1:
            dewdropDMG = 32.8 / 100;
            suffusionDMGBonus = 0.64;
            break;
        case 2:
            dewdropDMG = 35.26 / 100;
            suffusionDMGBonus = 0.69;
            break;
        case 3:
            dewdropDMG = 37.72 / 100;
            suffusionDMGBonus = 0.74;
            break;
        case 4:
            dewdropDMG = 41 / 100;
            suffusionDMGBonus = 0.8;
            break;
        case 5:
            dewdropDMG = 43.46 / 100;
            suffusionDMGBonus = 0.85;
            break;
        case 6:
            dewdropDMG = 45.92 / 100;
            suffusionDMGBonus = 0.9;
            break;
        case 7:
            dewdropDMG = 49.2 / 100;
            suffusionDMGBonus = 0.96;
            break;
        case 8:
            dewdropDMG = 52.48 / 100;
            suffusionDMGBonus = 1.02;
            break;
        case 9:
            dewdropDMG = 55.76 / 100;
            suffusionDMGBonus = 1.09;
            break;
        case 10:
            dewdropDMG = 59.04 / 100;
            suffusionDMGBonus = 1.15;
            break;
        case 11:
            dewdropDMG = 62.32 / 100;
            suffusionDMGBonus = 1.22;
            break;
        case 12:
            dewdropDMG = 65.6 / 100;
            suffusionDMGBonus = 1.28;
            break;
        case 13:
            dewdropDMG = 69.7 / 100;
            suffusionDMGBonus = 1.36;
            break;
    }
    let dewdrop = { Multiplier: dewdropDMG, Element: "HydroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = 0;
    character.currentBuffs.push({ Type: "AddativeBonusDMG", Value: (suffusionDMGBonus / 100) * character.HP(), for: "ElementalSkill" });
    for (buff of character.currentBuffs) {
        if (buff.Type == "Clear Waters") {
            let clearWaterBuff = character.HP() * (45 / 1000)
            if (clearWaterBuff > 5000)
                clearWaterBuff = 5000;
            character.currentBuffs.push({ Type: "FlatDMG", Value: clearWaterBuff, for: "ElementalSkill" });
        }
    }
    for (let i = 0; i < 6; i++) {
        if (i % 2 == 0) {
            dewdrop.isReaction = true;
        }
        else {
            dewdrop.isReaction = false;
        }
        dmg += dmgCalc(dewdrop, character);
    }
    return dmg;
}

function whiteCloudsatDawn(character) {
    let skillDMG = 0;
    let driftcloudWaveDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 24.8 / 100;
            driftcloudWaveDMG = 116 / 100;
            break;
        case 2:
            skillDMG = 26.66 / 100;
            driftcloudWaveDMG = 124.7 / 100;
            break;
        case 3:
            skillDMG = 28.52 / 100;
            driftcloudWaveDMG = 133.4 / 100;
            break;
        case 4:
            skillDMG = 31 / 100;
            driftcloudWaveDMG = 145 / 100;
            break;
        case 5:
            skillDMG = 32.86 / 100;
            driftcloudWaveDMG = 153.7 / 100;
            break;
        case 6:
            skillDMG = 34.72 / 100;
            driftcloudWaveDMG = 162.4 / 100;
            break;
        case 7:
            skillDMG = 37.2 / 100;
            driftcloudWaveDMG = 174 / 100;
            break;
        case 8:
            skillDMG = 39.68 / 100;
            driftcloudWaveDMG = 185.6 / 100;
            break;
        case 9:
            skillDMG = 42.16 / 100;
            driftcloudWaveDMG = 197.2 / 100;
            break;
        case 10:
            skillDMG = 44.64 / 100;
            driftcloudWaveDMG = 208.8 / 100;
            break;
        case 11:
            skillDMG = 47.12 / 100;
            driftcloudWaveDMG = 220.4 / 100;
            break;
        case 12:
            skillDMG = 49.6 / 100;
            driftcloudWaveDMG = 232 / 100;
            break;
        case 13:
            skillDMG = 52.7 / 100;
            driftcloudWaveDMG = 246.5 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let driftcloudWave = { Multiplier: driftcloudWaveDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "PlungeAttack" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    dmg += dmgCalc(driftcloudWave, character) * numberOfEnemies;
    for (buff of character.currentBuffs) {
        if (buff.Type == "Galefeather Pursuit") {
            character.currentBuffs.push({ Type: "PlungeAttackCritRate", Value: 10, for: "PlungeAttack" });// Full buff
        }
    }
    return { dmg: dmg };
}

function raphanusSkyCluster(character) {
    let whiteJadeRadishDMG = 0;
    let healing = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            whiteJadeRadishDMG = 29.92 / 100;
            healing = (character.HP() * (1.71 / 100)) + 165.07991;
            break;
        case 2:
            whiteJadeRadishDMG = 32.16 / 100;
            healing = (character.HP() * (1.84 / 100)) + 181.5902;
            break;
        case 3:
            whiteJadeRadishDMG = 34.41 / 100;
            healing = (character.HP() * (1.97 / 100)) + 199.47635;
            break;
        case 4:
            whiteJadeRadishDMG = 37.4 / 100;
            healing = (character.HP() * (2.14 / 100)) + 218.73834;
            break;
        case 5:
            whiteJadeRadishDMG = 39.64 / 100;
            healing = (character.HP() * (2.27 / 100)) + 239.3762;
            break;
        case 6:
            whiteJadeRadishDMG = 41.89 / 100;
            healing = (character.HP() * (2.4 / 100)) + 261.38992;
            break;
        case 7:
            whiteJadeRadishDMG = 44.88 / 100;
            healing = (character.HP() * (2.57 / 100)) + 284.77948;
            break;
        case 8:
            whiteJadeRadishDMG = 47.87 / 100;
            healing = (character.HP() * (2.74 / 100)) + 309.54492;
            break;
        case 9:
            whiteJadeRadishDMG = 50.86 / 100;
            healing = (character.HP() * (2.91 / 100)) + 335.6862;
            break;
        case 10:
            whiteJadeRadishDMG = 53.86 / 100;
            healing = (character.HP() * (3.09 / 100)) + 363.20334;
            break;
        case 11:
            whiteJadeRadishDMG = 56.85 / 100;
            healing = (character.HP() * (3.26 / 100)) + 392.09634;
            break;
        case 12:
            whiteJadeRadishDMG = 59.84 / 100;
            healing = (character.HP() * (3.43 / 100)) + 422.3652;
            break;
        case 13:
            whiteJadeRadishDMG = 63.58 / 100;
            healing = (character.HP() * (3.64 / 100)) + 454.00992;
            break;
    }
    let whiteJadeRadish = { Multiplier: whiteJadeRadishDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    healing *= 10;
    let dmg = 0;
    for (let i = 0; i < 10; i++) {
        if (i % 3 == 0) {
            whiteJadeRadish.isReaction = true;
        }
        else {
            whiteJadeRadish.isReaction = false;
        }
        dmg += dmgCalc(whiteJadeRadish, character);
    }
    for (buff of character.currentBuffs) {
        if (buff.Type == "A4") {
            healing += character.HP() * (0.8 / 100) * 5;
        }
    }
    healingHasOccured(character);
    healing *= 1 + (character.advancedstats.healingBonus / 100);
    return { dmg: dmg, healing: healing };
}

function ceremonialCrystalshot(character) {
    let rosulaShardshotDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            rosulaShardshotDMG = 394.8 / 100;
            break;
        case 2:
            rosulaShardshotDMG = 424.41 / 100;
            break;
        case 3:
            rosulaShardshotDMG = 454.02 / 100;
            break;
        case 4:
            rosulaShardshotDMG = 493.5 / 100;
            break;
        case 5:
            rosulaShardshotDMG = 523.11 / 100;
            break;
        case 6:
            rosulaShardshotDMG = 552.72 / 100;
            break;
        case 7:
            rosulaShardshotDMG = 592.2 / 100;
            break;
        case 8:
            rosulaShardshotDMG = 631.68 / 100;
            break;
        case 9:
            rosulaShardshotDMG = 671.16 / 100;
            break;
        case 10:
            rosulaShardshotDMG = 710.64 / 100;
            break;
        case 11:
            rosulaShardshotDMG = 750.12 / 100;
            break;
        case 12:
            rosulaShardshotDMG = 789.6 / 100;
            break;
        case 13:
            rosulaShardshotDMG = 838.95 / 100;
            break;
    }
    let rosulaShardshot = { Multiplier: rosulaShardshotDMG, Element: "GeoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let totalShots = 0;
    let dmgBonus = 0;
    switch (shardsInPossession) {
        case 0:
            totalShots = 5;
            rosulaShardshot.Multiplier *= (120 / 100);
            break;
        case 1:
            totalShots = 7;
            rosulaShardshot.Multiplier *= (140 / 100);
            break;
        case 2:
            totalShots = 9;
            rosulaShardshot.Multiplier *= (166.6 / 100);
            break;
        case 3:
            totalShots = 11;
            rosulaShardshot.Multiplier *= (200 / 100);
            break;
        case 4:
            totalShots = 11;
            dmgBonus = 15;
            rosulaShardshot.Multiplier *= (200 / 100);
            break;
        case 5:
            totalShots = 11;
            dmgBonus = 30;
            rosulaShardshot.Multiplier *= (200 / 100);
            break;
        case 6:
            totalShots = 11;
            dmgBonus = 45;
            rosulaShardshot.Multiplier *= (200 / 100);
            break;
    }
    let buff = { Type: "ElementalSkill", Value: dmgBonus, for: "ElementalSkill" };
    character.currentBuffs.push(buff);
    let dmg = 0;
    shardsInPossession = 0;
    dmg = dmgCalc(rosulaShardshot, character) * numberOfEnemies;

    character.currentBuffs.pop(buff);
    let hasA1 = false;
    let hasBuff = false;
    for (buff of character.currentBuffs) {
        if (buff.Type == "A1") {
            hasA1 = true;
        }
        else if (buff.Source == "A1") {
            hasBuff = true;
        }
    }
    if (!hasA1 && !hasBuff) {
        character.currentBuffs.push({ Type: "NormalAttack", Value: 40, Source: "A1" });
        character.normalAttack1.Element = "GeoDMGBonus";
        character.normalAttack1.isReaction = true;
        character.normalAttack2.Element = "GeoDMGBonus";
        character.normalAttack3.Element = "GeoDMGBonus";
    }
    return dmg;
}

function icefangRush(character) {
    let normalDMGBonus = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            normalDMGBonus = 143.17;
            break;
        case 2:
            normalDMGBonus = 145.75;
            break;
        case 3:
            normalDMGBonus = 148.34;
            break;
        case 4:
            normalDMGBonus = 151.7;
            break;
        case 5:
            normalDMGBonus = 154.29;
            break;
        case 6:
            normalDMGBonus = 156.87;
            break;
        case 7:
            normalDMGBonus = 160.23;
            break;
        case 8:
            normalDMGBonus = 163.59;
            break;
        case 9:
            normalDMGBonus = 166.95;
            break;
        case 10:
            normalDMGBonus = 170.31;
            break;
        default:
            normalDMGBonus = 170.31;
            break;
    }
    character.currentBuffs.push({ Type: "NormalAttack", Value: normalDMGBonus, Source: "IcefangRush" });
    return 0;
}

function hanegaSongoftheWind(character) {
    let skillDMG = 0;
    let normalAttack = 0;
    let chargedAttack = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 95.2 / 100;
            normalAttack = 132.98 / 100;
            chargedAttack = 126.39 / 100;
            break;
        case 2:
            skillDMG = 102.34 / 100;
            normalAttack = 134.96 / 100;
            chargedAttack = 127.97 / 100;
            break;
        case 3:
            skillDMG = 109.48 / 100;
            normalAttack = 136.93 / 100;
            chargedAttack = 129.55 / 100;
            break;
        case 4:
            skillDMG = 119 / 100;
            normalAttack = 139.5 / 100;
            chargedAttack = 131.6 / 100;
            break;
        case 5:
            skillDMG = 126.14 / 100;
            normalAttack = 141.47 / 100;
            chargedAttack = 133.18 / 100;
            break;
        case 6:
            skillDMG = 133.28 / 100;
            normalAttack = 143.45 / 100;
            chargedAttack = 134.76 / 100;
            break;
        case 7:
            skillDMG = 142.8 / 100;
            normalAttack = 146.02 / 100;
            chargedAttack = 136.81 / 100;
            break;
        case 8:
            skillDMG = 152.32 / 100;
            normalAttack = 148.58 / 100;
            chargedAttack = 138.87 / 100;
            break;
        case 9:
            skillDMG = 161.84 / 100;
            normalAttack = 151.15 / 100;
            chargedAttack = 140.92 / 100;
            break;
        case 10:
            skillDMG = 171.36 / 100;
            normalAttack = 153.72 / 100;
            chargedAttack = 142.98 / 100;
            break;
        case 11:
            skillDMG = 180.88 / 100;
            normalAttack = 156.29 / 100;
            chargedAttack = 145.03 / 100;
            break;
        case 12:
            skillDMG = 190.4 / 100;
            normalAttack = 158.85 / 100;
            chargedAttack = 147.08 / 100;
            break;
        case 13:
            skillDMG = 202.3 / 100;
            normalAttack = 161.42 / 100;
            chargedAttack = 149.14 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "AnemoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    character.normalAttack1.Multiplier = function (level) { return normalAttack };
    character.normalAttack2.Multiplier = function (level) { return normalAttack };
    character.chargedAttack.Multiplier = function (level) { return chargedAttack };
    let hasA1 = false;
    for (const buff of character.currentBuffs) {
        if (buff.Type == "Jade-Claimed Flower") {
            hasA1 = true;
        }
    }
    if (hasA1) {
        switch (supportingElement) {
            case "Pyro":
                character.currentBuffs.push({ Type: "ATK%", Value: 30, Source: "Song of the Wind" });
                break;
            case "Cryo":
                character.currentBuffs.push({ Type: "CritRate", Value: 20, Source: "Song of the Wind" });
                break;
            case "Electro":
                character.currentBuffs.push({ Type: "EnergyRecharge", Value: 20, Source: "Song of the Wind" });
                break;
            case "Hydro":
                let sequenceToAdd = ["N1", "N2", "N3", "C"];
                character.sequence["Dps"] = character.sequence["Dps"].concat(sequenceToAdd);
                character.sequence["Support"] = character.sequence["Support"].concat(sequenceToAdd);
                break;
        }
    }
    return dmg;
}

function vijnanaPhalaMine(character) {
    let skillDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 149.6 / 100;
            break;
        case 2:
            skillDMG = 160.82 / 100;
            break;
        case 3:
            skillDMG = 172.04 / 100;
            break;
        case 4:
            skillDMG = 187 / 100;
            break;
        case 5:
            skillDMG = 198.22 / 100;
            break;
        case 6:
            skillDMG = 209.44 / 100;
            break;
        case 7:
            skillDMG = 224.4 / 100;
            break;
        case 8:
            skillDMG = 239.36 / 100;
            break;
        case 9:
            skillDMG = 254.32 / 100;
            break;
        case 10:
            skillDMG = 269.28 / 100;
            break;
        case 11:
            skillDMG = 284.24 / 100;
            break;
        case 12:
            skillDMG = 299.2 / 100;
            break;
        case 13:
            skillDMG = 317.9 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "DendroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    return dmg;

}

function reboundHydrotherapy(character) {
    let bolsteringBubblebalmDMG = 0;
    let bolsteringBubblebalmHealing = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            bolsteringBubblebalmDMG = 2.28 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (2.8 / 100)) + 270;
            break;
        case 2:
            bolsteringBubblebalmDMG = 2.45 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (3.01 / 100)) + 297;
            break;
        case 3:
            bolsteringBubblebalmDMG = 2.62 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (3.22 / 100)) + 326;
            break;
        case 4:
            bolsteringBubblebalmDMG = 2.85 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (3.5 / 100)) + 357;
            break;
        case 5:
            bolsteringBubblebalmDMG = 3.02 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (3.71 / 100)) + 391;
            break;
        case 6:
            bolsteringBubblebalmDMG = 3.19 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (3.92 / 100)) + 427;
            break;
        case 7:
            bolsteringBubblebalmDMG = 3.42 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (4.2 / 100)) + 465;
            break;
        case 8:
            bolsteringBubblebalmDMG = 3.65 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (4.48 / 100)) + 506;
            break;
        case 9:
            bolsteringBubblebalmDMG = 3.88 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (4.76 / 100)) + 548;
            break;
        case 10:
            bolsteringBubblebalmDMG = 4.1 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (5.04 / 100)) + 593;
            break;
        case 11:
            bolsteringBubblebalmDMG = 4.33 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (5.32 / 100)) + 640;
            break;
        case 12:
            bolsteringBubblebalmDMG = 4.56 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (5.6 / 100)) + 690;
            break;
        case 13:
            bolsteringBubblebalmDMG = 4.84 / 100;
            bolsteringBubblebalmHealing = (character.HP() * (5.95 / 100)) + 742;
            break;
    }
    let bolsteringBubblebalm = { Multiplier: bolsteringBubblebalmDMG, Element: "HydroDMGBonus", Scaling: "HP", isReaction: false, type: "ElementalSkill" }
    let dmg = 0;
    for (let i = 0; i < 5; i++) {
        dmg += dmgCalc(bolsteringBubblebalm, character);
    }
    bolsteringBubblebalmHealing *= 1 + (character.advancedstats.healingBonus / 100);
    let hasA1 = false;
    for (const buff of character.currentBuffs) {
        if (buff.Type == "Requires Appropriate Rest") {
            hasA1 = true;
        }
    }
    let atkbuff
    if (hasA1) {
        atkbuff = Math.max(((Math.max((character.HP() - 30000), 0) / 1000) * 80), 2800) * 10;
        character.currentBuffs.push({ Type: "HydroDMGBonus", Value: 8, Source: "Rebound Hydrotherapy" });
    }
    healingHasOccured(character);
    return { dmg: dmg, healing: bolsteringBubblebalmHealing, attackBuff: atkbuff };
}

function ancientRiteTheThunderingSands(character) {
    let skillDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 115.6 / 100;
            break;
        case 2:
            skillDMG = 124.27 / 100;
            break;
        case 3:
            skillDMG = 132.94 / 100;
            break;
        case 4:
            skillDMG = 144.5 / 100;
            break;
        case 5:
            skillDMG = 153.17 / 100;
            break;
        case 6:
            skillDMG = 161.84 / 100;
            break;
        case 7:
            skillDMG = 173.4 / 100;
            break;
        case 8:
            skillDMG = 184.96 / 100;
            break;
        case 9:
            skillDMG = 196.52 / 100;
            break;
        case 10:
            skillDMG = 208.08 / 100;
            break;
        default:
            skillDMG = 208.08 / 100;
            break;
    }
    let skillAttack = { Multiplier: skillDMG, Element: "ElectroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let supportedElements = ["Pyro", "Cryo", "Hydro", "Dendro", "Anemo"];
    if (supportedElements.includes(supportingElement)) {
        character.currentBuffs.push({ Type: "EnergyRecharge", Value: 10, Source: "The Thundering Sands" });
    }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    return dmg;
}

function starfrostSwirl(character) {
    let flowfrostArrowDMG = 0;
    let rimestarFlareDMG = 0;
    let rimestarShardDMG = 0;
    let atkSPDBonus = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            flowfrostArrowDMG = 67.2 / 100;
            rimestarFlareDMG = 84 / 100;
            rimestarShardDMG = 25.2 / 100;
            atkSPDBonus = 13;
            break;
        case 2:
            flowfrostArrowDMG = 72.24 / 100;
            rimestarFlareDMG = 90.3 / 100;
            rimestarShardDMG = 27.09 / 100;
            atkSPDBonus = 14;
            break;
        case 3:
            flowfrostArrowDMG = 77.28 / 100;
            rimestarFlareDMG = 96.6 / 100;
            rimestarShardDMG = 28.98 / 100;
            atkSPDBonus = 15;
            break;
        case 4:
            flowfrostArrowDMG = 84 / 100;
            rimestarFlareDMG = 105 / 100;
            rimestarShardDMG = 31.5 / 100;
            atkSPDBonus = 16;
            break;
        case 5:
            flowfrostArrowDMG = 89.04 / 100;
            rimestarFlareDMG = 111.3 / 100;
            rimestarShardDMG = 33.39 / 100;
            atkSPDBonus = 17;
            break;
        case 6:
            flowfrostArrowDMG = 94.08 / 100;
            rimestarFlareDMG = 117.6 / 100;
            rimestarShardDMG = 35.28 / 100;
            atkSPDBonus = 18;
            break;
        case 7:
            flowfrostArrowDMG = 100.8 / 100;
            rimestarFlareDMG = 126 / 100;
            rimestarShardDMG = 37.8 / 100;
            atkSPDBonus = 19;
            break;
        case 8:
            flowfrostArrowDMG = 107.52 / 100;
            rimestarFlareDMG = 134.4 / 100;
            rimestarShardDMG = 40.32 / 100;
            atkSPDBonus = 20;
            break;
        case 9:
            flowfrostArrowDMG = 114.24 / 100;
            rimestarFlareDMG = 142.8 / 100;
            rimestarShardDMG = 42.84 / 100;
            atkSPDBonus = 21;
            break;
        case 10:
            flowfrostArrowDMG = 120.96 / 100;
            rimestarFlareDMG = 151.2 / 100;
            rimestarShardDMG = 45.36 / 100;
            atkSPDBonus = 22;
            break;
        case 11:
            flowfrostArrowDMG = 127.68 / 100;
            rimestarFlareDMG = 159.6 / 100;
            rimestarShardDMG = 47.88 / 100;
            atkSPDBonus = 23;
            break;
        case 12:
            flowfrostArrowDMG = 134.4 / 100;
            rimestarFlareDMG = 168 / 100;
            rimestarShardDMG = 50.4 / 100;
            atkSPDBonus = 24;
            break;
        case 13:
            flowfrostArrowDMG = 142.8 / 100;
            rimestarFlareDMG = 178.5 / 100;
            rimestarShardDMG = 53.55 / 100;
            atkSPDBonus = 25;
            break;
    }
    let rimestarFlare = { Multiplier: rimestarFlareDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let rimestarShard = { Multiplier: rimestarShardDMG, Element: "CryoDMGBonus", Scaling: "ATK", isReaction: false, type: "ElementalSkill" }
    let dmg = dmgCalc(rimestarFlare, character) * numberOfEnemies;
    dmg += dmgCalc(rimestarShard, character) * numberOfEnemies;
    dmg += dmgCalc(rimestarShard, character) * numberOfEnemies;
    rimestarFlare.isReaction = true;
    dmg += dmgCalc(rimestarFlare, character) * numberOfEnemies;
    return { dmg: dmg, attackBuff: atkSPDBonus };
}

function bewilderingLights(character) {
    let skillDMG = 0;
    let skillDMGBonus = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            skillDMG = 167.2;
            skillDMGBonus = 53.2;
            break;
        case 2:
            skillDMG = 179.74;
            skillDMGBonus = 57.19;
            break;
        case 3:
            skillDMG = 192.28;
            skillDMGBonus = 61.18;
            break;
        case 4:
            skillDMG = 209;
            skillDMGBonus = 66.5;
            break;
        case 5:
            skillDMG = 221.54;
            skillDMGBonus = 70.49;
            break;
        case 6:
            skillDMG = 234.08;
            skillDMGBonus = 74.48;
            break;
        case 7:
            skillDMG = 250.8;
            skillDMGBonus = 74.48;
            break;
        case 8:
            skillDMG = 267.52;
            skillDMGBonus = 85.12;
            break;
        case 9:
            skillDMG = 284.24;
            skillDMGBonus = 90.44;
            break;
        case 10:
            skillDMG = 300.96;
            skillDMGBonus = 95.76;
            break;
        default:
            skillDMG = 300.96;
            skillDMGBonus = 95.76;
            break;
    }
    let skillAttack = { Multiplier: (skillDMG + (propSurplusStacks * skillDMGBonus)) / 100, Element: "PyroDMGBonus", Scaling: "ATK", isReaction: true, type: "ElementalSkill" }
    let dmg = dmgCalc(skillAttack, character) * numberOfEnemies;
    character.addHP((character.HP() * 0.2) * propSurplusStacks);
    propSurplusStacks = 0;
    return dmg;
}
function surfsharkWavebreaker(character) {
    let surgingBite = 0;
    let waveMomentumBonus = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            surgingBite = 21.7 / 100;
            waveMomentumBonus = 4.34 / 100;
            break;
        case 2:
            surgingBite = 23.33 / 100;
            waveMomentumBonus = 4.67 / 100;
            break;
        case 3:
            surgingBite = 24.95 / 100;
            waveMomentumBonus = 4.99 / 100;
            break;
        case 4:
            surgingBite = 27.13 / 100;
            waveMomentumBonus = 5.42 / 100;
            break;
        case 5:
            surgingBite = 28.75 / 100;
            waveMomentumBonus = 5.75 / 100;
            break;
        case 6:
            surgingBite = 30.38 / 100;
            waveMomentumBonus = 6.08 / 100;
            break;
        case 7:
            surgingBite = 32.55 / 100;
            waveMomentumBonus = 6.51 / 100;
            break;
        case 8:
            surgingBite = 34.72 / 100;
            waveMomentumBonus = 6.94 / 100;
            break;
        case 9:
            surgingBite = 36.89 / 100;
            waveMomentumBonus = 7.38 / 100;
            break;
        case 10:
            surgingBite = 39.06 / 100;
            waveMomentumBonus = 7.81 / 100;
            break;
        case 11:
            surgingBite = 41.23 / 100;
            waveMomentumBonus = 8.25 / 100;
            break;
        case 12:
            surgingBite = 43.4 / 100;
            waveMomentumBonus = 8.68 / 100;
            break;
        case 13:
            surgingBite = 46.11 / 100;
            waveMomentumBonus = 9.22 / 100;
            break;

    }
    character.normalAttack1.Multiplier = function (level) { return surgingBite + (waveMomentumBonus * 3) };
    character.normalAttack2.Multiplier = function (level) { return (surgingBite + (waveMomentumBonus * 3)) * (28 / 100) };
    character.nightsoul = true;
    enteredNightsoulBlessing(character);
    return 0;
}

function goGoTurboTwirly(character) {
    let mountedDMG = 0;
    let independentDMG = 0;
    switch (character.elementalSkill.Level) {
        case 1:
            mountedDMG = 87.76 / 100;
            independentDMG = 63.76 / 100;
            break;
        case 2:
            mountedDMG = 94.34 / 100;
            independentDMG = 68.54 / 100;
            break;
        case 3:
            mountedDMG = 100.92 / 100;
            independentDMG = 73.32 / 100;
            break;
        case 4:
            mountedDMG = 109.7 / 100;
            independentDMG = 79.7 / 100;
            break;
        case 5:
            mountedDMG = 116.28 / 100;
            independentDMG = 84.48 / 100;
            break;
        case 6:
            mountedDMG = 122.86 / 100;
            independentDMG = 89.26 / 100;
            break;
        case 7:
            mountedDMG = 131.64 / 100;
            independentDMG = 95.64 / 100;
            break;
        case 8:
            mountedDMG = 140.42 / 100;
            independentDMG = 102.02 / 100;
            break;
        case 9:
            mountedDMG = 149.19 / 100;
            independentDMG = 108.39 / 100;
            break;
        case 10:
            mountedDMG = 157.97 / 100;
            independentDMG = 114.77 / 100;
            break;
        case 11:
            mountedDMG = 166.74 / 100;
            independentDMG = 121.14 / 100;
            break;
        case 12:
            mountedDMG = 175.52 / 100;
            independentDMG = 127.52 / 100;
            break;
        case 13:
            mountedDMG = 186.49 / 100;
            independentDMG = 135.49 / 100;
            break;
    }
    let independentAttack = { Multiplier: independentDMG, Element: "GeoDMGBonus", Scaling: "DEF", isReaction: true, type: "ElementalSkill" }
    let hasA4 = false;
    character.nightsoul = true;
    enteredNightsoulBlessing(character);
    for (const buff of character.currentBuffs) {
        if (buff.Type == "A4") {
            hasA4 = true;
        }
    }
    if(hasA4){
        character.currentBuffs.push({ Type: "NormalAttack", Value: (20/100)*character.DEF(), Source: "Go Go, Turbo!" });
        character.currentBuffs.push({ Type: "ElementalSkill", Value: (20/100)*character.DEF(), Source: "Go Go, Turbo!" });
    }
    switch(role){
        case "Dps":
            character.normalAttack1.Multiplier = function (level) { return mountedDMG };
            break;
        case "Support":
            let dmg = 0;
            for (let i = 0; i < 6; i++) {
                dmg += dmgCalc(independentAttack, character) * numberOfEnemies;
            }
            return dmg;
    }
    return 0;

}