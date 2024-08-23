let currentCardData = null;
function generateCharacterCard(character, score, supportingElement, role, resonances, createData, date) {
    if (createData) {
        currentCardData = {
            Character: character,
            Score: score,
            SupportingElement: supportingElement,
            Role: role,
            Resonances: resonances,
            Date: Date().toString()
        };

    }

    if (date == undefined) {
        date = Date().toString();
    }

    let elementResult = getElement(character);
    let element = elementResult.element;
    let gradient = elementResult.gradient;
    let grade = getGrade(score);
    let resonanceHTMLCode = getResonance(resonances);
    let importedArtifacts = getArtifacts(character.artifacts);

    let artifacts = {
        Circlet: importedArtifacts[0],
        Flower: importedArtifacts[1],
        Plume: importedArtifacts[2],
        Sands: importedArtifacts[3],
        Goblet: importedArtifacts[4]
    }
    
    let supportingElementHtmlCode = (supportingElement != null && supportingElement != "null") ? `<img src="../Elements/${supportingElement}.png" alt="${supportingElement}">` : "<span>No on field element</span>";
    if (!createData) {
        
    }
    let card = `<div id="result-splash-container" 
    style="border: #323031 solid 0.2rem;
	border-radius: 2rem;
	background: ${gradient};
	width: 1900px;
	height: 950px;
	align-self: center;">
    <div id="result-splash-wrapper" 
    style="display: flex;
	flex-direction: column;
	align-items: left;
	width: 100%;
	height: 100%;
	background-image: url('${character.card}');
	background-size: contain;
	background-repeat: no-repeat;
	background-position-x: right;
	background-position-y: bottom;">
        <div id="result-splash-top-info" style="width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;">
            <div class="result-splash-top-info-part" 
            style="width: 33.33%;
            display: flex;
            flex-direction: column;
            align-items: center;">
                <h1 id="result-splash-name" style="margin:0;">Genshin Helper</h1>
                <h2 style="border:none; margin: -1rem 0rem 0rem 0rem;">Rate my build</h2>
                <h4 style="border:none;">Date: ${date}</h4>
            </div>
            <div class="result-splash-top-info-part">
                <h1 id="result-splash-name" style="margin:0;">${character.name}</h1>
                <span id="result-splash-score" style="font-size:32pt;">Grade: ${grade} tier</span>
                <span id="result-splash-score" style="font-size:14pt; margin-top: -1rem;">Score: ${score}/100</span>
            </div>
            <div class="result-splash-top-info-part">
            </div>
            
        </div>
        <div class="character-book">
            <div class="character-card">
                <div class="character-card-info" style="flex-direction:row;">
                    <div>
                    <div style="display: flex;
                    align-content: flex-start;
                    align-items: flex-start;
                    justify-content: center;
                    font-size:32pt;">
                    <span style="margin:0;">Role:&nbsp</span>
                    <span style="margin:0;">${role}</span>

                    </div>
                    <div class="character-card-info-group" style="margin-top:0;">
                        <div class="character-card-info-up-left character-card-info-part"
                            id="character-card-info-up-left" 
                            style="display: flex;
                            align-items: center;
                            width: 100%;">
                            <img src="Assets/${character.weapon.src}" style="width:100%;" />
                        </div>
                        <div class="character-card-info-up-right character-card-info-part">
                            <div class="character-card-stats" id="character-card-stat-hp">
                                <h4>Health:</h4>
                                <span>${Math.round(character.HP())}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-attack">
                                <h4>Attack:</h4>
                                <span>${Math.round(character.attack())}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-def">
                                <h4>Defense:</h4>
                                <span>${Math.round(character.DEF())}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-elementalMastery">
                            <h4>Elemental Mastery:</h4>
                            <span>${Math.round(character.EM())}</span>
                        </div>
                        </div>
                    </div>
                    <div class="character-card-info-group">

                        <div class="character-card-info-down-left character-card-info-part">
                            <div class="character-card-stats" id="character-card-stat-energyrecharge">
                                <h4>Energy Recharge:</h4>
                                <span>${Math.round(character.advancedstats.energyRecharge * 10) / 10}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-critrate">
                                <h4>Crite Rate:</h4>
                                <span>${Math.round(character.critRate() * 10) / 10}%</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-critdmg">
                                <h4>Crit DMG:</h4>
                                <span>${Math.round(character.critDMG() * 10) / 10}%</span>
                            </div>

                        </div>
                        <div class="character-card-info-down-right character-card-info-part">
                            <div class="character-card-stats" id="character-card-stat-elementalbonus">
                                <h4>${element.Type}:</h4>
                                <span>${Math.round(element.Value * 10) / 10}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-elementalbonus">
                                <h4>Shield Strength:</h4>
                                <span>${Math.round(character.advancedstats.shieldStrength * 10) / 10}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-elementalbonus">
                                <h4>Healing Bonus:</h4>
                                <span>${Math.round(character.advancedstats.healingBonus * 10) / 10}</span>
                            </div>
                        </div>
                    </div>
                    
                    
                    </div>
                    <div style="padding-top: 2.1rem;">
                        <span>Resonance:</span>
                        <div style="    display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        height: 70%;">
                            ${resonanceHTMLCode}
                        </div>
                    </div>
                </div>
                <div class="character-card-info" id="character-card-artifact-info" 
                style="display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-left: -1rem;">
                <div style="display: flex;
                justify-content: flex-start;
                width: 80%;">
                    <span>On field element:&nbsp</span>
                    ${supportingElementHtmlCode}
                </div>
                <div style="display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;">
                    <div class="character-card-artifact-container">
                        <div class="character-card-artifact-wrapper">
                            <div style="width:100%">
                                <h3 style="    margin-top: 0;text-align: center;">Talents</h3>
                                <p>Basic Attack: lvl ${character.normalAttackLevel}</p>
                                <p>Elemental Skill: lvl ${character.elementalSkill.Level}</p>
                                <p>Elemetal Burst: lvl ${character.elementalBurst.Level}</p>
                            </div>
                        </div>
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Assets/Artifacts/${artifacts.Circlet.Set.replace(/ /g, "_")}_${artifacts.Circlet.Type}.webp" />

                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span class="character-card-artifact-mainstat">${artifacts.Circlet.Mainstat.Type}: </span>
                                    <span class="character-card-artifact-mainstat">${artifacts.Circlet.Mainstat.Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Circlet.Substats[0].Type}: </span>
                                    <span>${artifacts.Circlet.Substats[0].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Circlet.Substats[1].Type}: </span>
                                    <span>${artifacts.Circlet.Substats[1].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Circlet.Substats[2].Type}: </span>
                                    <span>${artifacts.Circlet.Substats[2].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Circlet.Substats[3].Type}: </span>
                                    <span>${artifacts.Circlet.Substats[3].Value}</span>
                                </div>
                            </div>
                        </div>
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Assets/Artifacts/${artifacts.Flower.Set.replace(/ /g, "_")}_${artifacts.Flower.Type}.webp" />

                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span class="character-card-artifact-mainstat">${artifacts.Flower.Mainstat.Type}: </span>
                                    <span class="character-card-artifact-mainstat">${artifacts.Flower.Mainstat.Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Flower.Substats[0].Type}: </span>
                                    <span>${artifacts.Flower.Substats[0].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Flower.Substats[1].Type}: </span>
                                    <span>${artifacts.Flower.Substats[1].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Flower.Substats[2].Type}: </span>
                                    <span>${artifacts.Flower.Substats[2].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Flower.Substats[3].Type}: </span>
                                    <span>${artifacts.Flower.Substats[3].Value}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="character-card-artifact-container">
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Assets/Artifacts/${artifacts.Plume.Set.replace(/ /g, "_")}_${artifacts.Plume.Type}.webp" />

                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span class="character-card-artifact-mainstat">${artifacts.Plume.Mainstat.Type}: </span>
                                    <span class="character-card-artifact-mainstat">${artifacts.Plume.Mainstat.Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Plume.Substats[0].Type}: </span>
                                    <span>${artifacts.Plume.Substats[0].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Plume.Substats[1].Type}: </span>
                                    <span>${artifacts.Plume.Substats[1].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Plume.Substats[2].Type}: </span>
                                    <span>${artifacts.Plume.Substats[2].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Plume.Substats[3].Type}: </span>
                                    <span>${artifacts.Plume.Substats[3].Value}</span>
                                </div>
                            </div>
                        </div>
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Assets/Artifacts/${artifacts.Sands.Set.replace(/ /g, "_")}_${artifacts.Sands.Type}.webp" />

                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span class="character-card-artifact-mainstat">${artifacts.Sands.Mainstat.Type}: </span>
                                    <span class="character-card-artifact-mainstat">${artifacts.Sands.Mainstat.Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Sands.Substats[0].Type}: </span>
                                    <span>${artifacts.Sands.Substats[0].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Sands.Substats[1].Type}: </span>
                                    <span>${artifacts.Sands.Substats[1].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Sands.Substats[2].Type}: </span>
                                    <span>${artifacts.Sands.Substats[2].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Sands.Substats[3].Type}: </span>
                                    <span>${artifacts.Sands.Substats[3].Value}</span>
                                </div>
                            </div>
                        </div>
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Assets/Artifacts/${artifacts.Goblet.Set.replace(/ /g, "_")}_${artifacts.Goblet.Type}.webp" />

                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span class="character-card-artifact-mainstat">${artifacts.Goblet.Mainstat.Type}: </span>
                                    <span class="character-card-artifact-mainstat">${artifacts.Goblet.Mainstat.Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Goblet.Substats[0].Type}: </span>
                                    <span>${artifacts.Goblet.Substats[0].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Goblet.Substats[1].Type}: </span>
                                    <span>${artifacts.Goblet.Substats[1].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Goblet.Substats[2].Type}: </span>
                                    <span>${artifacts.Goblet.Substats[2].Value}</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>${artifacts.Goblet.Substats[3].Type}: </span>
                                    <span>${artifacts.Goblet.Substats[3].Value}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




</div>`;
    let css = `
.character-card {
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
}

.character-book {
	width: 65%;
	height: 100%;
	background-image: url("../Assets/Book_Background.png");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	margin-bottom: 2rem;
}

.character-card-info {
	display: flex;
	flex-direction: column;
	/* border: #323031 solid 0.2rem;
	border-radius: 2rem;
	background-color: rgba(193,189,179,0.75); */
	width: 100%;
	max-width: 540px;
	margin: 2rem;
	font-size: 11pt;
}

.character-card-info-part {
	margin-left: 2rem;
	margin-top: 1.5rem;
	border: #5F5B6B solid 0.2rem;
	border-radius: 2rem;
	width: 100%;
	padding: 0.5rem;
}

.character-card-info-group {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 1rem;
}

.character-card-img {
	height: 100%;
	max-height: 400px;
}

.character-card-artifact-wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	border: #5F5B6B solid 0.2rem;
	border-radius: 2rem;
	padding: 1rem;
	margin: 0.25rem;
}

.character-card-artifact {
	width: 75px;
	display: flex;
	margin: 0.5rem;
}

.character-card-artifact img {
	width: 100%;
	border: #817c90 solid 0.2rem;
	border-radius: 2rem;
}

`;
    return { card, css };
}
function getElement(character) {
    let element = getMostElement(character.advancedstats.elementalBonuses);
    let gradient;
    switch (character.element) {
        case "GeoCharacter":
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #f4c030)";
            break;
        case "CryoCharacter":
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #86f9eb)";
            break;
        case "PyroCharacter":
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #ba1010)";
            break;
        case "HydroCharacter":
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #131baa)";
            break;
        case "ElectroCharacter":
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #6a2f8e)";
            break;
        case "AnemoCharacter":
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #51ff95)";
            break;
        case "DendroCharacter":
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #1f7b1f)";
            break;
    }

    return { element, gradient };
}
function getMostElement(elementalBonuses) {
    let element = "";
    let max = 0;
    for (let i = 0; i < elementalBonuses.length; i++) {
        if (elementalBonuses[i].Value > max) {
            max = elementalBonuses[i].Value;
            element = elementalBonuses[i].Type;
        }
    }
    if (element === "") {
        element = "No Elemental Bonus";
    }
   
    return { Type: element, Value: max };
}
function getArtifacts(artifacts) {
    let artifactList = {
        "Circlet": {},
        "Flower": {},
        "Plume": {},
        "Sands": {},
        "Goblet": {},
    };
    artifacts.forEach(artifact => {
        artifactList[artifact.Type] = artifact;
    });
    return artifactList;
}
function getResonance(resonances) {
    let htmlCode = "";
    let resonancesList = [];
    
    if (resonances[0] != "" || resonances[1] != "") {
        for (let key in resonances) {
            resonancesList.push(resonances[key].toLowerCase());
            if (resonances[key] != "") {
                htmlCode += `<img src="Elements/${resonancesList[key]}.png" alt="${resonancesList[key]}">`;
            }
        }
    }
    
    return htmlCode;
}
function getGrade(score) {
    let grade;
    if (score >= 0 && score <= 30) {
        grade = "F";
    }
    else if (score >= 31 && score <= 40) {
        grade = "E";
    }
    else if (score >= 41 && score <= 50) {
        grade = "D";
    }
    else if (score >= 51 && score <= 60) {
        grade = "C";
    }
    else if (score >= 61 && score <= 70) {
        grade = "B";
    }
    else if (score >= 71 && score <= 80) {
        grade = "A";
    }
    else if (score >= 81 && score <= 90) {
        grade = "S";
    }
    else if (score >= 91 && score <= 100) {
        grade = "S+";
    }
    else if (score >= 101) {
        grade = "God";
    }
    return grade;
}
function switchCharacterCardContainer() {
    if (characterCardContainerIsOpen) {
        characterCardContainerIsOpen = false;
        let characterCardContainer = document.getElementById("saved-characters-cards-container");
        let characterCardWrapper = document.getElementById("saved-characters-cards-wrapper");
        characterCardContainer.style.transform = "translateY(88%)";
        characterCardWrapper.style.boxShadow = " 0px 0px 0px 0px"
    } else {
        characterCardContainerIsOpen = true;
        let characterCardContainer = document.getElementById("saved-characters-cards-container");
        let characterCardWrapper = document.getElementById("saved-characters-cards-wrapper");

        characterCardContainer.style.transform = "translateY(0)";
        characterCardWrapper.style.boxShadow = " 8px 0px 64px 4px"
    }

}
function generateCharacterCardsFromCookies() {
    let fromCookies = getCardCookies();

    let code = [];
    for (let i = 0; i < fromCookies.length; i++) {
        let baseCharacter = _.cloneDeep(AllCharacters[fromCookies[i].name]);
        let baseWeapon = _.cloneDeep(AllWeapons[fromCookies[i].weapon]);
        baseCharacter.level = fromCookies[i].level;
        baseWeapon.level = fromCookies[i].weaponLevel;
        baseCharacter.normalAttackLevel = fromCookies[i].talents.normalAttackLevel;
        baseCharacter.elementalSkill.Level = fromCookies[i].talents.elementalSkill;
        baseCharacter.elementalBurst.Level = fromCookies[i].talents.elementalBurst;

        let character = new Createcharacter(baseCharacter, baseWeapon, fromCookies[i].artifacts);
        applyBonuses(character);
        let resonances = ["", ""];
        let split = fromCookies[i].resonance.split("/");

        resonances[0] = split[0] === undefined ? "" : split[0];
        resonances[1] = split[1] === undefined ? "" : split[1];
        
        code.push({ htmlCode: generateCharacterCard(character, fromCookies[i].score, fromCookies[i].supportingElement, fromCookies[i].role, resonances, false, fromCookies[i].date), cookie: fromCookies[i].cookie });
    }
    placeCharacterCards(code);
    return "Success";
}
function placeCharacterCards(code) {

    let container = document.getElementById("saved-characters-cards-wrapper");
    code.forEach(card => {
        let htmlCode = `<div id="${card.cookie}"class="saved-character-card-container"><div class="saved-character-card"><div class="transform-card"  onclick="showBigger(this)">${card.htmlCode.card}</div></div>
        <div><button class="delete-character-card" onclick="deleteCharacterCard('${card.cookie}')"><i class="fa-solid fa-trash-can"></i></button></div></div>`;

        container.insertAdjacentHTML("beforeend", htmlCode);
    })
}

function deleteCharacterCard(name, bool) {
    if (bool) {
        deleteCookie(name);
        let doc = document.getElementById(name);
        let doc2 = document.getElementById("delete-character-card-prompt-container");
        doc.style.transition = "all 0.4s";
        doc.style.transform = "scale(0.001)";
        doc2.innerHTML = "";
        setTimeout(() => {
            doc.remove();
        }, 500);
    }
    else {

        let doc = document.getElementById("delete-character-card-prompt-container");
        
        if (doc.innerHTML == "") {
            let html = `<div class="prompt-container">		
                            <div class="delete-character-card-prompt-wrapper">
                                <div class="delete-character-card-prompt">
                                    <p>Are you sure you want to delete the character card?</p>
                                    <div class="delete-character-card-prompt-btns">
                                        <button class="generic-btn" onclick="deleteCharacterCard('${name}',true)">Yes</button>
                                        <button class="generic-btn" onclick="closeDeleteCharacterCardPrompt()">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            doc.innerHTML = html;
        }
    }
}
function closeDeleteCharacterCardPrompt() {
    let doc = document.getElementById("delete-character-card-prompt-container");
    doc.innerHTML = "";
}
function showBigger(element) {
    let doc = document.getElementById("result-container2");
    let doc2 = document.getElementById("result-container-container2");
    doc2.innerHTML = "";
    doc2.insertAdjacentHTML("beforeend", element.innerHTML);
    doc.style.display = "Flex";
    setTimeout(function () {
        doc.style.transform = "translate(-50%,-50%) scale(1)";
    }, 100);
}
function closeCharacterCard2() {
    let doc = document.getElementById("result-container2");
    let doc2 = document.getElementById("result-container-container2");
    doc.style.transform = "translate(-50%,50%) scale(0.1)";
    setTimeout(function () {
        doc.style.display = "none";
        doc2.innerHTML = "";

    }, 500);
}