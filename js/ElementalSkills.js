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

    return dmg;
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
    if (supportingElement != null || supportingElement != undefined) {
        attack.Element = supportingElement;
        Character.currentBuffs.forEach(buff => {
            if (buff.Type == "Soumon Sowrdmanship") {
                attack.Multiplier += 2;
                attack.isReaction = false;

            }
        });
    }
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


    return dmg;
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
        dmgCalc(attack, Character) * numberOfEnemies * (hasPassive ? (1 + (Character.EM() * (0.15 / 100))) : 1);
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
            let healing = character.HP() * 0.16*sourewaterDroplets;
            currentHP = currentHP + healing;
            if(currentHP>character.HP())
                currentHP = character.HP();
            //Add 0.6% bonus for every 1% of current HP over 30% max hp
            let newBonus = 0;
            if(currentHP>0.3*character.HP())
                newBonus = (currentHP-0.3*character.HP())*0.6;
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