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
    if (role == "Support") {
        let supportGraph = barGraphSupport(builds.user, builds.build);
    }
    else {
        document.getElementById("supportGraph_section").style.display = "none";
    }
    // applyBackgrounds(builds);
    document.getElementById("character_name").innerText = builds.user.character.name +" (C"+builds.user.character.constellation+" vs "+"C"+builds.build.character.constellation+")";
    document.getElementById("character_img").src = `${builds.user.character.splashArt}`;
    const character1 = getStats(builds.user);
    const character2 = getStats(builds.build);
    const characters = { user: character1, build: character2 };
    const table = tableBuilder(characters);
    document.getElementById("table_container").insertAdjacentElement("afterbegin", table);
    const userArtifact = artifactBuilder(builds.user, "Your");
    const buildArtifact = artifactBuilder(builds.build, "Our");
    document.getElementById("artifacts").appendChild(userArtifact);
    document.getElementById("artifacts").appendChild(buildArtifact);
    let text = `You got a Score of ${Math.floor(builds.user.buildScore)} resulting in a grade of "${getGrade(builds.user.buildScore)}-tier".`;
    let energyPercent = Math.floor((characters.user.energyRecharge() / builds.user.character.energyOffset) * 100);
    if (energyPercent < 100) {
        text += `\n  Your energy recharge is ${energyPercent}% of the recommended amount of ${builds.user.character.energyOffset}. Your score suffered negatively because of this.`;
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
    // build.weapon.level = convertBuildLevel(build.weapon.level);

    let userIsHigherImg = `<img src="Assets/Icons/arrow-up.svg" style="width: 20px; height: 20px; title="You have higer" alt="Green arrow pointing up">`;
    let buildIsHigherImg = `<img src="Assets/Icons/arrow-down.svg" style="width: 20px; height: 20px;" title="You have lower" alt="Red arrow pointing Down">`;
    const usersLevelIsHigherLowerOrEqual = convertBuildLevel(user.level).Value > convertBuildLevel(build.level).Value ? userIsHigherImg : convertBuildLevel(user.level).Value < convertBuildLevel(build.level).Value ? buildIsHigherImg : "-";
    const usersNormalAttackIsHigherLowerOrEqual = user.normalAttackLevel > build.normalAttackLevel ? userIsHigherImg : user.normalAttackLevel < build.normalAttackLevel ? buildIsHigherImg : "-";
    const usersElementalSkillIsHigherLowerOrEqual = user.elementalSkill.Level > build.elementalSkill.Level ? userIsHigherImg : user.elementalSkill.Level < build.elementalSkill.Level ? buildIsHigherImg : "-";
    const usersElementalBurstIsHigherLowerOrEqual = user.elementalBurst.Level > build.elementalBurst.Level ? userIsHigherImg : user.elementalBurst.Level < build.elementalBurst.Level ? buildIsHigherImg : "-";
    const usersWeaponIsHigherLowerOrEqual = convertBuildLevel(user.weapon.level).Value > convertBuildLevel(build.weapon.level).Value ? userIsHigherImg : convertBuildLevel(user.weapon.level).Value < convertBuildLevel(build.weapon.level).Value ? buildIsHigherImg : "-";
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
            <th>Your C${user.constellation} ${user.name} </th>
            <th> Comparing </th>
            <th>Our C${build.constellation} ${build.name}</th>
            <tr>
                <td>Character Level</td>
                <td>${convertBuildLevel(user.level).Level}</td>
                <td>${usersLevelIsHigherLowerOrEqual}</td>
                <td>${convertBuildLevel(build.level).Level}</td>
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
                <td>${convertBuildLevel(user.weapon.level).Level}</td>
                <td>${usersWeaponIsHigherLowerOrEqual}</td>
                <td>${convertBuildLevel(build.weapon.level).Level}</td>
            </tr>
            <tr>
                <td>HP</td>
                <td>${round(user.HP(), 1)}</td>
                <td>${usersHP}</td>
                <td>${round(build.HP(), 1)}</td>
            </tr>
            <tr>
                <td>ATK</td>
                <td>${round(user.attack(), 1)}</td>
                <td>${usersATK}</td>
                <td>${round(build.attack(), 1)}</td>
            </tr>
            <tr>
                <td>DEF</td>
                <td>${round(user.DEF(), 1)}</td>
                <td>${usersDEF}</td>
                <td>${round(build.DEF(), 1)}</td>
            </tr>
            <tr>
                <td>Crit Rate</td>
                <td>${round(user.critRate(), 1)}%</td>
                <td>${usersCritRate}</td>
                <td>${round(build.critRate(), 1)}%</td>
            </tr>
            <tr>
                <td>Crit Damage</td>
                <td>${round(user.critDMG(), 1)}%</td>
                <td>${usersCritDMG}</td>
                <td>${round(build.critDMG(), 1)}%</td>
            </tr>
            <tr>
                <td>Elemental Mastery</td>
                <td>${round(user.EM(), 1)}</td>
                <td>${usersEM}</td>
                <td>${round(build.EM(), 1)}</td>
            </tr>
            <tr>
                <td>Energy Recharge</td>
                <td>${round(user.advancedstats.energyRecharge, 1)}%</td>
                <td>${usersEnergyRecharge}</td>
                <td>${round(build.advancedstats.energyRecharge, 1)}%</td>
            </tr>
            <tr>
                <td>Healing Bonus</td>
                <td>${round(user.advancedstats.healingBonus, 1)}%</td>
                <td>${usersHealingBonus}</td>
                <td>${round(build.advancedstats.healingBonus, 1)}%</td>
            </tr>
            <tr>
                <td>Shield Strength</td>
                <td>${round(user.advancedstats.shieldStrength, 1)}</td>
                <td>${usersShieldStrength}</td>
                <td>${round(build.advancedstats.shieldStrength, 1)}</td>
            </tr>
            
            <tr>
                <td>Pyro DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[0].Value, 1)}%</td>
                <td>${usersPyroDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[0].Value, 1)}%</td>
            </tr>
            <tr>
                <td>Hydro DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[1].Value, 1)}%</td>
                <td>${usersHydroDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[1].Value, 1)}%</td>
            </tr>
            <tr>
                <td>Dendro DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[2].Value, 1)}%</td>
                <td>${usersDendroDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[2].Value, 1)}%</td>
            </tr>
             <tr>
                <td>Electro DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[3].Value, 1)}%</td>
                <td>${usersElectroDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[3].Value, 1)}%</td>
            </tr>
            <tr>
                <td>Anemo DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[4].Value, 1)}%</td>
                <td>${usersAnemoDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[4].Value, 1)}%</td>
            </tr>
            <tr>
                <td>Cryo DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[5].Value, 1)}%</td>
                <td>${usersCryoDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[5].Value, 1)}%</td>
            </tr>
            <tr>
                <td>Geo DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[6].Value, 1)}%</td>
                <td>${usersGeoDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[6].Value, 1)}%</td>
            </tr>
            <tr>
                <td>Physical DMG Bonus</td>
                <td>${round(user.advancedstats.elementalBonuses[7].Value, 1)}%</td>
                <td>${usersPhysicalDMGBonus}</td>
                <td>${round(build.advancedstats.elementalBonuses[7].Value, 1)}%</td>
            </tr>


        </tbody>
    `;
    table.innerHTML = innerHTML;
    return table;
}
function convertBuildLevel(level) {
    switch (level) {
        case "1b": return { Level: "1/20", Value: 1 };
        case "20b": return { Level: "20/20", Value: 20 };
        case "20a": return { Level: "20/40", Value: 21 };
        case "40b": return { Level: "40/40", Value: 40 };
        case "40a": return { Level: "40/50", Value: 41 };
        case "50b": return { Level: "50/50", Value: 50 };
        case "50a": return { Level: "50/60", Value: 51 };
        case "60b": return { Level: "60/60", Value: 60 };
        case "60a": return { Level: "60/70", Value: 61 };
        case "70b": return { Level: "70/70", Value: 70 };
        case "70a": return { Level: "70/80", Value: 71 };
        case "80b": return { Level: "80/80", Value: 80 };
        case "80a": return { Level: "80/90", Value: 81 };
        case "90b": return { Level: "90/90", Value: 90 };
    }
}
function artifactBuilder(character, type) {
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
										<span id="${artifact.Type}_mainstat_percentIcon">${(shouldHavePercentIcon.includes(artifact.Mainstat.Type)) ? "%" : ""}</span>
									</div>
                                </div>
								<div class="artifact-right">
									<div class="substat" id="${artifact.Type}_substat_1">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[0].Type]}" title="${artifact.Substats[0].Type}" alt="${artifact.Substats[0].Type}"
											id="${artifact.Type}_substat_1_type">
										<span contenteditable="" onclick="UpdateArtifact(this,true)"
											onkeyup="UpdateArtifact(this,false)" onblur="UpdateArtifact(this,false)"
											id="${artifact.Type}_substat_1_value">${artifact.Substats[0].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[0].Type)) ? "%" : ""}</span>
									</div>
									<div class="substat" id="${artifact.Type}_substat_2">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[1].Type]}" title="${artifact.Substats[1].Type}" alt="${artifact.Substats[1].Type}"
											id="goblet_substat_2_type">
										<span id="${artifact.Type}_substat_2_value">${artifact.Substats[1].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[1].Type)) ? "%" : ""}</span>
									</div>
									<div class="substat" id="${artifact.Type}_substat_3">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[2].Type]}" title="${artifact.Substats[2].Type}" alt="${artifact.Substats[2].Type}"
											id="${artifact.Type}_substat_3_type">
										<span id="${artifact.Type}_substat_3_value">${artifact.Substats[2].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[2].Type)) ? "%" : ""}</span>
									</div>
									<div class="substat" id="${artifact.Type}_substat_4">
										<img class="artifact_icon" src="Assets/Icons/${artifactImgTranslation[artifact.Substats[3].Type]}" title="${artifact.Substats[3].Type}" alt="${artifact.Substats[3].Type}"
											id="${artifact.Type}_substat_4_type">
										<span contenteditable="" onclick="UpdateArtifact(this,true)"
											onkeyup="UpdateArtifact(this,false)" onblur="UpdateArtifact(this,false)"
											id="${artifact.Type}_substat_4_value">${artifact.Substats[3].Value}</span>
										<span class="artifact_percent">${(shouldHavePercentIcon.includes(artifact.Substats[3].Type)) ? "%" : ""}</span>
									</div>
								</div>
							</div>
                                    `;
        artifactContainer.insertAdjacentHTML("beforeend", innerHTML);
    }
    return artifactContainer;

}
function getStats(build) {
    let Character = {
        HP: function () {
            return build.character.hp;
        },
        attack: function () {
            return build.character.attack;
        },
        DEF: function () {
            return build.character.def;
        },
        critRate: function () {
            return build.character.critRate;
        },
        critDMG: function () {
            return build.character.critDMG;
        },
        EM: function () {
            return build.character.em;
        },
        energyRecharge: function () {
            return build.character.energyRecharge;
        },
        advancedstats: {
            energyRecharge: build.character.energyRecharge,
            healingBonus: build.character.healingBonus,
            shieldStrength: build.character.shieldStrength,
            elementalBonuses: [
                build.character.pyroDMGBonus,
                build.character.hydroDMGBonus,
                build.character.dendroDMGBonus,
                build.character.electroDMGBonus,
                build.character.anemoDMGBonus,
                build.character.cryoDMGBonus,
                build.character.geoDMGBonus,
                build.character.physicalDMGBonus
            ]
        },
        constellation: build.character.constellation,
        level: build.character.level,
        elementalSkill: {
            Level: build.character.elementalSkillLevel.Level
        },
        elementalBurst: {
            Level: build.character.elementalBurstLevel.Level
        },
        normalAttackLevel: build.character.normalAttackLevel,
        weapon: {
            name: build.weapon.name,
            level: build.weapon.level,
        },
        name: build.character.name,

    }
    return Character;
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