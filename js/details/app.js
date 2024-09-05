import { Createcharacter } from "../Character.js";
let charts = {};
let elementalResonance = ["", ""];
let supportingElement = null;
let partyHasDeepwoodMemories = false;
function starterFunction() {
    const builds = buildBuildFromStorage();
    if (builds === undefined) {
        return;
    }
    role = builds.user.role;
    charts = circleGraph(builds.user, builds.build);
    let damageGrahp = barGraphDamage(builds.user, builds.build);
    // applyBackgrounds(builds);
    document.getElementById("character_name").innerText = builds.user.character.name;
    document.getElementById("character_img").src = `${builds.user.character.splashArt}`;
    const characters = simulateOnce(builds);
    const table = tableBuilder(characters);
    document.getElementById("table_container").insertAdjacentElement("afterbegin", table);
    const userArtifact = artifactBuilder(builds.user,"Your");
    const buildArtifact = artifactBuilder(builds.build, "Our");
    document.getElementById("artifacts").appendChild(userArtifact);
    document.getElementById("artifacts").appendChild(buildArtifact);
    let text = `You got a Score of ${Math.floor(builds.user.buildScore)} resulting in a grade of ${getGrade(builds.user.buildScore)}.`;
    let energyPercent = Math.floor((characters.user.energyRecharge() / characters.user.energyOffset) * 100);
    if (energyPercent < 100) {
        text += ` Your energy recharge is ${energyPercent}% of the recommended amount of ${characters.user.energyOffset}. Your score suffered negatively because of this.`;
    }
    document.getElementById("result_info").innerText = text
}
function getBuildsFromStorage() {
    let build = sessionStorage.getItem("currentBestBuild");
    let user = sessionStorage.getItem("user");
    if (build === null) {
        build = [];
    }
    else {
        build = JSON.parse(build);
    }
    if (user === null) {
        user = [];
    }
    else {
        user = JSON.parse(user);
    }
    return { build, user };

}
function buildBuildFromStorage() {
    const builds = getBuildsFromStorage();
    if (builds.build.length === 0 && builds.user.length === 0) {
        document.getElementById("error-screen").style.display = "flex";
        return;
    }
    elementalResonance = builds.user.elementalResonance;
    supportingElement = builds.user.supportingElement;
    role = builds.user.role;
    return builds;
}
function tableBuilder(builds) {
    let user = builds.user;
    let build = builds.build;
    console.log(user);
    let table = document.createElement("table");
    let userIsHigherImg = `<img src="Assets/Icons/arrow-up.svg" style="width: 20px; height: 20px; title="You have higer" alt="Green arrow pointing up">`;
    let buildIsHigherImg = `<img src="Assets/Icons/arrow-down.svg" style="width: 20px; height: 20px;" title="You have lower" alt="Red arrow pointing Down">`;
    const usersLevelIsHigherLowerOrEqual = user.level > build.level ? userIsHigherImg : user.level < build.level ? buildIsHigherImg : "-";
    const usersNormalAttackIsHigherLowerOrEqual = user.normalAttackLevel > build.normalAttackLevel ? userIsHigherImg : user.normalAttackLevel < build.normalAttackLevel ? buildIsHigherImg : "-";
    const usersElementalSkillIsHigherLowerOrEqual = user.elementalSkill.Level > build.elementalSkill.Level ? userIsHigherImg : user.elementalSkill.Level < build.elementalSkill.Level ? buildIsHigherImg : "-";
    const usersElementalBurstIsHigherLowerOrEqual = user.elementalBurst.Level > build.elementalBurst.Level ? userIsHigherImg : user.elementalBurst.Level < build.elementalBurst.Level ? buildIsHigherImg : "-";
    const usersWeaponIsHigherLowerOrEqual = user.weapon.level > build.weapon.level ? userIsHigherImg : user.weapon.level < build.weapon.level ? buildIsHigherImg : "-";
    const usersHP = user.HP() > build.HP() ? userIsHigherImg : user.HP() < build.HP() ? buildIsHigherImg : "-";
    const usersATK = user.attack() > build.attack() ? userIsHigherImg : user.attack() < build.attack() ? buildIsHigherImg : "-";
    const usersDEF = user.DEF() > build.DEF() ? userIsHigherImg : user.DEF() < build.DEF() ? buildIsHigherImg : "-";
    const usersCritRate = user.critRate() > build.critRate() ? userIsHigherImg : user.critRate() < build.critRate() ? buildIsHigherImg : "-";
    const usersCritDMG = user.critDMG() > build.critDMG() ? userIsHigherImg : user.critDMG() < build.critDMG() ? buildIsHigherImg : "-";
    const usersEM = user.EM() > build.EM() ? userIsHigherImg : user.EM() < build.EM() ? buildIsHigherImg : "-";
    const usersEnergyRecharge = user.advancedstats.energyRecharge > build.advancedstats.energyRecharge ? userIsHigherImg : user.advancedstats.energyRecharge < build.advancedstats.energyRecharge ? buildIsHigherImg : "-";
    const usersHealingBonus = user.advancedstats.healingBonus > build.advancedstats.healingBonus ? userIsHigherImg : user.advancedstats.healingBonus < build.advancedstats.healingBonus ? buildIsHigherImg : "-";
    const usersShieldStrength = user.advancedstats.shieldStrength > build.advancedstats.shieldStrength ? userIsHigherImg : user.advancedstats.shieldStrength < build.advancedstats.shieldStrength ? buildIsHigherImg : "-";
    const usersPyroDMGBonus = user.advancedstats.elementalBonuses[0].Value > build.advancedstats.elementalBonuses[0].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[0].Value < build.advancedstats.elementalBonuses[0].Value ? buildIsHigherImg : "-";
    const usersHydroDMGBonus = user.advancedstats.elementalBonuses[1].Value > build.advancedstats.elementalBonuses[1].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[1].Value < build.advancedstats.elementalBonuses[1].Value ? buildIsHigherImg : "-";
    const usersDendroDMGBonus = user.advancedstats.elementalBonuses[2].Value > build.advancedstats.elementalBonuses[2].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[2].Value < build.advancedstats.elementalBonuses[2].Value ? buildIsHigherImg : "-";
    const usersAnemoDMGBonus = user.advancedstats.elementalBonuses[4].Value > build.advancedstats.elementalBonuses[4].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[4].Value < build.advancedstats.elementalBonuses[4].Value ? buildIsHigherImg : "-";
    const usersElectroDMGBonus = user.advancedstats.elementalBonuses[3].Value > build.advancedstats.elementalBonuses[3].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[3].Value < build.advancedstats.elementalBonuses[3].Value ? buildIsHigherImg : "-";
    const usersCryoDMGBonus = user.advancedstats.elementalBonuses[5].Value > build.advancedstats.elementalBonuses[5].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[5].Value < build.advancedstats.elementalBonuses[5].Value ? buildIsHigherImg : "-";
    const usersGeoDMGBonus = user.advancedstats.elementalBonuses[6].Value > build.advancedstats.elementalBonuses[6].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[6].Value < build.advancedstats.elementalBonuses[6].Value ? buildIsHigherImg : "-";
    const usersPhysicalDMGBonus = user.advancedstats.elementalBonuses[7].Value > build.advancedstats.elementalBonuses[7].Value ? userIsHigherImg : user.advancedstats.elementalBonuses[7].Value < build.advancedstats.elementalBonuses[7].Value ? buildIsHigherImg : "-";


    table.classList.add("compareTable");
    let innerHTML = `
        <tbody>
            <th>Stat</th>
            <th>Your ${user.name}</th>
            <th> Comparing </th>
            <th>Our ${build.name}</th>
            <tr>
                <td>Character Level</td>
                <td>${user.level}</td>
                <td>${usersLevelIsHigherLowerOrEqual}</td>
                <td>${build.level}</td>
            </tr>
              <tr>
                <td>Normal Attack Level</td>
                <td>${user.normalAttackLevel}</td>
                <td>${usersNormalAttackIsHigherLowerOrEqual}</td>
                <td>${build.normalAttackLevel}</td>
            </tr>
            <tr>
                <td>Elemental Skill Level</td>
                <td>${user.elementalSkill.Level}</td>
                <td>${usersElementalSkillIsHigherLowerOrEqual}</td>
                <td>${build.elementalSkill.Level}</td>
            </tr>
            <tr>
                <td>Elemental Burst Level</td>
                <td>${user.elementalBurst.Level}</td>
                <td>${usersElementalBurstIsHigherLowerOrEqual}</td>
                <td>${build.elementalBurst.Level}</td>
            </tr>
          
            <tr>
                <td>Weapon</td>
                <td>${user.weapon.name}</td>
                <td></td>
                <td>${build.weapon.name}</td>
            </tr>
            <tr>
                <td>Weapon Level</td>
                <td>${user.weapon.level}</td>
                <td>${usersWeaponIsHigherLowerOrEqual}</td>
                <td>${build.weapon.level}</td>
            </tr>
            <tr>
                <td>HP</td>
                <td>${user.HP()}</td>
                <td>${usersHP}</td>
                <td>${build.HP()}</td>
            </tr>
            <tr>
                <td>ATK</td>
                <td>${user.attack()}</td>
                <td>${usersATK}</td>
                <td>${build.attack()}</td>
            </tr>
            <tr>
                <td>DEF</td>
                <td>${user.DEF()}</td>
                <td>${usersDEF}</td>
                <td>${build.DEF()}</td>
            </tr>
            <tr>
                <td>Crit Rate</td>
                <td>${user.critRate()}%</td>
                <td>${usersCritRate}</td>
                <td>${build.critRate()}%</td>
            </tr>
            <tr>
                <td>Crit Damage</td>
                <td>${user.critDMG()}%</td>
                <td>${usersCritDMG}</td>
                <td>${build.critDMG()}%</td>
            </tr>
            <tr>
                <td>Elemental Mastery</td>
                <td>${user.EM()}</td>
                <td>${usersEM}</td>
                <td>${build.EM()}</td>
            </tr>
            <tr>
                <td>Energy Recharge</td>
                <td>${user.advancedstats.energyRecharge}%</td>
                <td>${usersEnergyRecharge}</td>
                <td>${build.advancedstats.energyRecharge}%</td>
            </tr>
            <tr>
                <td>Healing Bonus</td>
                <td>${user.advancedstats.healingBonus}%</td>
                <td>${usersHealingBonus}</td>
                <td>${build.advancedstats.healingBonus}%</td>
            </tr>
            <tr>
                <td>Shield Strength</td>
                <td>${user.advancedstats.shieldStrength}</td>
                <td>${usersShieldStrength}</td>
                <td>${build.advancedstats.shieldStrength}</td>
            </tr>
            
            <tr>
                <td>Pyro DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[0].Value}%</td>
                <td>${usersPyroDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[0].Value}%</td>
            </tr>
            <tr>
                <td>Hydro DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[1].Value}%</td>
                <td>${usersHydroDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[1].Value}%</td>
            </tr>
            <tr>
                <td>Dendro DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[2].Value}%</td>
                <td>${usersDendroDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[2].Value}%</td>
            </tr>
             <tr>
                <td>Electro DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[3].Value}%</td>
                <td>${usersElectroDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[3].Value}%</td>
            </tr>
            <tr>
                <td>Anemo DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[4].Value}%</td>
                <td>${usersAnemoDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[4].Value}%</td>
            </tr>
            <tr>
                <td>Cryo DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[5].Value}%</td>
                <td>${usersCryoDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[5].Value}%</td>
            </tr>
            <tr>
                <td>Geo DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[6].Value}%</td>
                <td>${usersGeoDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[6].Value}%</td>
            </tr>
            <tr>
                <td>Physical DMG Bonus</td>
                <td>${user.advancedstats.elementalBonuses[7].Value}%</td>
                <td>${usersPhysicalDMGBonus}</td>
                <td>${build.advancedstats.elementalBonuses[7].Value}%</td>
            </tr>


        </tbody>
    `;
    table.innerHTML = innerHTML;
    return table;
}
function artifactBuilder(character,type) {
    let artifactContainer = document.createElement("div");
    artifactContainer.classList.add("compareArtifacts");
    let h3 = document.createElement("h3");
    h3.innerText = `${type} Artifacts`;
    artifactContainer.appendChild(h3);
    const artifactImgTranslation = {
        "HP%": "Icon_Attribute_Health.webp",
        "ATK%": "Icon_Attribute_Attack.webp",
        "DEF%": "Icon_Attribute_Defense.webp",
        "ATKflat": "Icon_Attribute_Attack.webp",
        "HPflat": "Icon_Attribute_Health.webp",
        "DEFflat": "Icon_Attribute_Defense.webp",
        "ElementalMastery": "Icon_Attribute_Elemental_Mastery.webp",
        "EnergyRecharge": "Icon_Attribute_Energy_Recharge.webp",
        "CritRate": "Icon_Attribute_Critical_Hit.webp",
        "CritDMG": "Icon_Attribute_Critical_Damage.webp",
        "HealingBonus": "Icon_Attribute_Healing.webp",
        "PyroDMGBonus": "Element_Pyro.svg",
        "HydroDMGBonus": "Element_Hydro.svg",
        "DendroDMGBonus": "Element_Dendro.svg",
        "ElectroDMGBonus": "Element_Electro.svg",
        "AnemoDMGBonus": "Element_Anemo.svg",
        "CryoDMGBonus": "Element_Cryo.svg",
        "GeoDMGBonus": "Element_Geo.svg",
        "PhysicalDMGBonus": "Icon_Attribute_Physical.svg",
    }
    const shouldHavePercentIcon = [
        "ATK%", 
        "HP%", 
        "DEF%", 
        "CritRate", 
        "CritDMG", 
        "EnergyRecharge", 
        "HealingBonus",
        "PyroDMGBonus",
        "HydroDMGBonus",
        "DendroDMGBonus",
        "ElectroDMGBonus",
        "AnemoDMGBonus",
        "CryoDMGBonus",
        "GeoDMGBonus",
        "PhysicalDMGBonus"
    ];
    for (const artifact of character.artifacts) {
        let innerHTML = `<div class="artifact" id="${artifact.Type}">
								<div class="artifact-left" id="${artifact.Type}_set" style="background-image:url('Assets/Artifacts/${artifact.Set}_${artifact.Type}.webp')">
									<div class="artifact_img_gradient">
									</div>
									<div class="mainstat">
										<img class="artifact_icon"
											src="Assets/Icons/${artifactImgTranslation[artifact.Mainstat.Type]}" title="${artifact.Mainstat.Type}" alt="${artifact.Mainstat.Type}"
											id="${artifact.Type}_mainstat_type">
										<span id="${artifact.Type}_mainstat_value">${artifact.Mainstat.Value}</span>
										<span id="${artifact.Type}_mainstat_percentIcon">${(shouldHavePercentIcon.includes(artifact.Mainstat.Type)) ? "%":""}</span>
									</div>
                                </div>
								<div class="artifact-right">
									<div class="substat" id="${artifact.Type}_substat_1">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[0].Type]}" title="${artifact.Substats[0].Type}" alt="${artifact.Substats[0].Type}"
											id="${artifact.Type}_substat_1_type">
										<span contenteditable="" onclick="UpdateArtifact(this,true)"
											onkeyup="UpdateArtifact(this,false)" onblur="UpdateArtifact(this,false)"
											id="${artifact.Type}_substat_1_value">${artifact.Substats[0].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[0].Type)) ? "%":""}</span>
									</div>
									<div class="substat" id="${artifact.Type}_substat_2">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[1].Type]}" title="${artifact.Substats[1].Type}" alt="${artifact.Substats[1].Type}"
											id="goblet_substat_2_type">
										<span id="${artifact.Type}_substat_2_value">${artifact.Substats[1].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[1].Type)) ? "%":""}</span>
									</div>
									<div class="substat" id="${artifact.Type}_substat_3">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[2].Type]}" title="${artifact.Substats[2].Type}" alt="${artifact.Substats[2].Type}"
											id="${artifact.Type}_substat_3_type">
										<span id="${artifact.Type}_substat_3_value">${artifact.Substats[2].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[2].Type)) ? "%":""}</span>
									</div>
									<div class="substat" id="${artifact.Type}_substat_4">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[3].Type]}" title="${artifact.Substats[3].Type}" alt="${artifact.Substats[3].Type}"
											id="${artifact.Type}_substat_4_type">
										<span contenteditable="" onclick="UpdateArtifact(this,true)"
											onkeyup="UpdateArtifact(this,false)" onblur="UpdateArtifact(this,false)"
											id="${artifact.Type}_substat_4_value">${artifact.Substats[3].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[3].Type)) ? "%":""}</span>
									</div>
								</div>
							</div>
                                    `;
        artifactContainer.insertAdjacentHTML("beforeend", innerHTML);
    }
    return artifactContainer;

}
function simulateOnce(builds) {
    let baseCharacter = AllCharacters[builds.user.character.name];
    let character1 = deepClone(baseCharacter);
    let character2 = deepClone(baseCharacter);
    let weapon1 = deepClone(AllWeapons[builds.user.weapon.name]);
    weapon1.level = builds.user.weapon.level;
    let weapon2 = deepClone(AllWeapons[builds.build.weapon.name]);
    weapon2.level = builds.build.weapon.level;
    character1.level = builds.user.character.level;
    character1.elementalSkill.Level = builds.user.character.elementalSkillLevel.Level;
    character1.elementalBurst.Level = builds.user.character.elementalBurstLevel.Level;
    character1.normalAttackLevel = builds.user.character.normalAttackLevel;

    character2.level = builds.build.character.level;
    character2.elementalSkill.Level = builds.build.character.elementalSkillLevel.Level;
    character2.elementalBurst.Level = builds.build.character.elementalBurstLevel.Level;
    character2.normalAttackLevel = builds.build.character.normalAttackLevel;
    let userCharacter = new Createcharacter(
        character1,
        weapon1,
        builds.user.artifacts,
    );
    let siteCharacter = new Createcharacter(
        character2,
        weapon2,
        builds.build.artifacts,
    );
    applyBonuses(userCharacter);
    applyBonuses(siteCharacter);
    return { user: userCharacter, build: siteCharacter };
}
function getGrade(score) {
    let grade;
    if (score >= 0 && score < 30) {
        grade = "F";
    }
    else if (score >= 30 && score <= 35) {
        grade = "E";
    }
    else if (score >= 35 && score < 45) {
        grade = "D";
    }
    else if (score >= 45 && score < 55) {
        grade = "C";
    }
    else if (score >= 55 && score < 65) {
        grade = "B";
    }
    else if (score >= 65 && score < 75) {
        grade = "A";
    }
    else if (score >= 75 && score < 85) {
        grade = "S";
    }
    else if (score >= 85 && score <= 100) {
        grade = "S+";
    }
    else if (score >= 101) {
        grade = "God";
    }
    return grade;
}
function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj || typeof obj === 'function') return obj; // Handle primitives and functions
    if (hash.has(obj)) return hash.get(obj); // Handle cyclic references

    let result;
    try {
        result = new obj.constructor(); // Create a new instance of the object's constructor
    } catch (e) {
        result = Object.create(Object.getPrototypeOf(obj)); // Fallback for objects without a constructor
    }

    hash.set(obj, result);

    if (obj instanceof Map) {
        obj.forEach((value, key) => result.set(deepClone(key, hash), deepClone(value, hash)));
    } else if (obj instanceof Set) {
        obj.forEach(value => result.add(deepClone(value, hash)));
    } else if (obj instanceof Array) {
        result = obj.map(item => deepClone(item, hash));
    } else {
        for (let key of Reflect.ownKeys(obj)) {
            result[key] = deepClone(obj[key], hash);
        }
    }

    return result;
}
function applyBonuses(character) {
    let mainstat = character.artifacts[4].Mainstat;
    if (mainstat.Type != "ATK%" || mainstat.Type != "DEF%" || mainstat.Type != "HP%" || mainstat.Type != "Elemental Mastery" || mainstat.Type != "HealingBonus") {
        character.advancedstats.elementalBonuses.forEach(element => {
            if (element.Type == mainstat.Type) {
                element.Value += mainstat.Value;
            }
        });
    }
    else if (mainstat.Type == "HealingBonus") {
        character.advancedstats.healingBonus += mainstat.Value;
    }
    elementalResonance.forEach(resonance => {
        switch (resonance) {
            case "Pyro":
                character.currentBuffs.push({ Type: "ATK%", Value: 25 });
                break;
            case "Hydro":
                break;
            case "Anemo":
                break;
            case "Geo":
                character.currentBuffs.push({ Type: "BonusDMG%", Value: 15 });
                character.currentBuffs.push({ Type: "ResShred", Element: "GeoDMGBonus", Value: 15 });
                break;
            case "Electro":
                break;
            case "Dendro":
                break;
            case "Cryo":
                if (character.element == "CryoCharacter")
                    character.currentBuffs.push({ Type: "CritRate", Value: 15 });
                break;
        }
    });
    character.currentBuffs.push({ Type: character.weapon.subStat.Type, Value: character.weapon.subStat.Value() })
    let sets = [];
    character.artifacts.forEach(artifact => {
        sets.push(artifact.Set);
        if (artifact.Mainstat.Type == "EnergyRecharge")
            character.advancedstats.energyRecharge += artifact.Mainstat.Value;
        else if (artifact.Mainstat.Type == "HealingBonus")
            character.advancedstats.healingBonus += artifact.Mainstat.Value;
        else {
            artifact.Substats.forEach(substat => {
                if (substat.Type == "EnergyRecharge")
                    character.advancedstats.energyRecharge += substat.Value;
            });
        }

    });
    getSetBonus(sets, character);

    character.weapon.passive().forEach(passive => {
        character.currentBuffs.push(passive);
    });
    switch (character.weapon.name) {
        case "Primordial Jade Cutter":
            character.currentBuffs.push({ Type: "ATKflat", Value: character.HP() * 0.012 });
            break;
        case "Staff of Homa":
            character.currentBuffs.push({ Type: "ATKflat", Value: character.HP() * 0.01, Source: "Staff of Homa" });
            break;
        case "Makhaira Aquamarine":
            character.currentBuffs.push({ Type: "ATKflat", Value: (48 / 100) * character.EM() });
            break;
        case "Staff of the Scarlet Sands":
            character.currentBuffs.push({ Type: "ATKflat", Value: (52 / 100) * character.EM() });
            break;
        case "Wandering Evenstar":
            character.currentBuffs.push({ Type: "ATKflat", Value: (48 / 100) * character.EM() });
            break;
        case "Summit Shaper":
            if (!summitShaperBuff) {
                character.currentBuffs.push({ Type: "ATK%", Value: 40, Source: "Summit Shaper" });
                summitShaperBuff = true;
            }
            break;


    }
    character.currentBuffs.push({ Type: character.ascensionstats().Type, Value: character.ascensionstats().Value })
    character.currentBuffs.forEach(buff => {

        switch (buff.Type) {
            case "PyroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "PyroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "HydroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "HydroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "DendroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "DendroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "ElectroDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "ElectroDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "AnemoDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "AnemoDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "CryoDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "CryoDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "GeoDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "GeoDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "PhysicalDMGBonus":
                character.advancedstats.elementalBonuses.forEach(element => {
                    if (element.Type == "PhysicalDMGBonus") {
                        element.Value += buff.Value;
                    }
                })
                break;
            case "ChargedAttack":
                character.ExtraMultiplier.push({ Type: "ChargedAttack", Value: buff.Value });
                break;
            case "NormalAttack":
                character.ExtraMultiplier.push({ Type: "NormalAttack", Value: buff.Value });
                break;
            case "BonusDMG%":
                character.ExtraMultiplier.push({ Type: "BonusDMG%", Value: buff.Value });
                break;
            case "EnergyRecharge":
                character.advancedstats.energyRecharge += buff.Value;
                break;
            case "ElementalDMG":
                character.advancedstats.elementalBonuses.forEach(element => {
                    element.Value += buff.Value;
                });
                break;
            case "HealingBonus":
                character.advancedstats.healingBonus += buff.Value;
                break;
            case "ShieldStrength":
                character.advancedstats.shieldStrength += buff.Value;
                break;



            default:
                break;
        }
    });
    if (character.name == "Neuvillette") {
        for (const buff of character.currentBuffs) {
            if (buff.Type == "Discipline of the Supreme Arbitration") {
                let currentHP = character.HP();
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
    } else if (character.name == "Tighnari") {
        let buff = character.EM() * (0.06 / 100)
        if (buff > 60)
            buff = 60;
        character.currentBuffs.push({ Type: "ChargedAttack", Value: buff });
        character.currentBuffs.push({ Type: "ElementalBurst", Value: buff });

    }
    if (partyHasDeepwoodMemories) {
        character.currentBuffs.push({ Type: "ResShred", Value: 30, Element: "DendroDMGBonus" });
    }
}
function getSetBonus(array, character) {
    let setsDone = [];
    for (let i = 0; i < array.length; i++) {
        let alreadyDone = false;
        let currentSet = array[i];
        setsDone.forEach(set => {
            if (currentSet == set)
                alreadyDone = true;
        });
        if (alreadyDone)
            continue;
        let count = 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] == currentSet) {

                count++;
            }

        }
        if (count >= 4) {
            character.artifactFourPiece = currentSet.replace(/_/g, " ");
            //Check twoPiece and fourPiece is a lust instead of the expected object
            if (artifactSets[array[i]].twoPiece.Type == undefined) {
                artifactSets[array[i]].twoPiece.forEach(buff => {
                    character.currentBuffs.push(buff);
                });
            }
            else {
                character.currentBuffs.push(artifactSets[array[i]].twoPiece);
            }
            if (artifactSets[array[i]].fourPiece != undefined) {
                if (currentSet == "Gladiator's Finale") {
                    if (character.weapon.weaponType == "Sword" || character.weapon.weaponType == "Claymore" || character.weapon.weaponType == "Polearm") {
                        character.currentBuffs.push(artifactSets[array[i]].fourPiece);
                    }
                }
                else if (currentSet == "Wanderer's Troupe") {

                    if (character.weapon.weaponType == "Bow" || character.weapon.weaponType == "Catalyst") {
                        character.currentBuffs.push(artifactSets[array[i]].fourPiece);

                    }
                }
                else if (currentSet == "Blizzard Strayer") {
                    if (character.element == "CryoCharacter") {
                        character.currentBuffs.push(artifactSets[array[i]].fourPiece);
                    }
                } else if (currentSet == "Golden Troupe") {
                    if (character.subDpsType == "Off-field" && role == "Support") {
                        character.currentBuffs.push({ Type: "ElementalSkill", Value: 25, Source: "Golden Troupe" });
                    }
                } else if (currentSet == "Retracing Bolide") {
                    if (hasShield) {
                        let buffs = [
                            { Type: "ChargedAttack", Value: 40 },
                            { Type: "NormalAttack", Value: 40 }
                        ];
                        buffs.forEach(b => {
                            character.currentBuffs.push({ Type: b.Type, Value: b.Value, Source: "Retracing Bolide" });
                        });
                        retracingBolideBuff = true;
                    }
                } else if (currentSet == "Bloodstained Chivalry") {
                    if (character.havePhysicalChargedAttack) {
                        character.currentBuffs.push({ Type: "ChargedAttack", Value: 50, Source: "Bloodstained Chivalry" });
                    }
                }
                else {
                    if (artifactSets[array[i]].fourPiece.Type == undefined) {
                        artifactSets[array[i]].fourPiece.forEach(buff => { character.currentBuffs.push(buff) });
                    }
                    else {
                        if (artifactSets[array[i]].fourPiece.Type == undefined) {
                            artifactSets[array[i]].fourPiece.forEach(buff => {
                                character.currentBuffs.push(buff);
                            });
                        }
                        else {
                            character.currentBuffs.push(artifactSets[array[i]].fourPiece);
                        }
                    }

                }

            }
            break;
        }
        else if (count >= 2) {
            character.artifactTwoPiece.push(currentSet.replace(/_/g, " "));
            if (artifactSets[array[i]].twoPiece.Type == undefined) {
                artifactSets[array[i]].twoPiece.forEach(buff => {
                    character.currentBuffs.push(buff);
                });
            }
            else {
                character.currentBuffs.push(artifactSets[array[i]].twoPiece);
            }
        }
        setsDone.push(currentSet);
    }
}
window.addEventListener("DOMContentLoaded", starterFunction);