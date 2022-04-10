function generateCharacterCard(character, score) {
    let element = { Type: "", Value: "" };
    let gradient = "";
    switch (character.element) {
        case "GeoCharacter":
            character.advancedstats.elementalBonuses.forEach(bonus => {
                if (bonus.Type == "GeoDMGBonus") {
                    element = { Type: "GeoDMGBonus", Value: bonus.Value }
                }
            });
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #f4c030)";
            break;
        case "CryoCharacter":
            character.advancedstats.elementalBonuses.forEach(bonus => {
                if (bonus.Type == "CryoDMGBonus") {
                    element = { Type: "CryoDMGBonus", Value: bonus.Value }
                }
            });
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #86f9eb)";
            break;
        case "PyroCharacter":
            character.advancedstats.elementalBonuses.forEach(bonus => {
                if (bonus.Type == "PyroDMGBonus") {
                    element = { Type: "PyroDMGBonus", Value: bonus.Value }
                }
            });
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #ba1010)";
            break;
        case "HydroCharacter":
            character.advancedstats.elementalBonuses.forEach(bonus => {
                if (bonus.Type == "HydroDMGBonus") {
                    element = { Type: "HydroDMGBonus", Value: bonus.Value }
                }
            });
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #131baa)";
            break;
        case "ElectroCharacter":
            character.advancedstats.elementalBonuses.forEach(bonus => {
                if (bonus.Type == "ElectroDMGBonus") {
                    element = { Type: "ElectroDMGBonus", Value: bonus.Value }
                }
            });
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #6a2f8e)";
            break;
        case "AnemoCharacter":
            character.advancedstats.elementalBonuses.forEach(bonus => {
                if (bonus.Type == "AnemoDMGBonus") {
                    element = { Type: "AnemoDMGBonus", Value: bonus.Value }
                }
            });
            gradient = "linear-gradient(90deg, #C1BDB3 40%, #51ff95)";
            break;
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
	background-image: url('../${character.card}');
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
                <h2 style="border:none;">Date: ${Date().toString()}</h2>
            </div>
            <div class="result-splash-top-info-part">
                <h1 id="result-splash-name" style="margin:0;">${character.name}</h1>
                <span id="result-splash-score" style="font-size:32pt;">${score}/100</span>
            </div>
            <div class="result-splash-top-info-part">
            </div>
        </div>
        <div class="character-book">
            <div class="character-card">
                <div class="character-card-info">
                    <div class="character-card-info-group">
                        <div class="character-card-info-up-left character-card-info-part"
                            id="character-card-info-up-left" 
                            style="display: flex;
                            align-items: center;
                            width: 100%;">
                            <img src="${character.weapon.src}" style="width:100%;" />
                        </div>
                        <div class="character-card-info-up-right character-card-info-part">
                            <div class="character-card-stats" id="character-card-stat-hp">
                                <h4>Health:</h4>
                                <span>${character.HP()}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-attack">
                                <h4>Attack:</h4>
                                <span>${character.attack()}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-def">
                                <h4>Defense:</h4>
                                <span>${character.DEF()}</span>
                            </div>
                        </div>
                    </div>
                    <div class="character-card-info-group">

                        <div class="character-card-info-down-left character-card-info-part">
                            <div class="character-card-stats" id="character-card-stat-energyrecharge">
                                <h4>Energy Recharge:</h4>
                                <span>${character.advancedstats.energyRecharge}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-critrate">
                                <h4>Crite Rate:</h4>
                                <span>${character.critRate()}%</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-critdmg">
                                <h4>Crit DMG:</h4>
                                <span>${character.critDMG()}%</span>
                            </div>

                        </div>
                        <div class="character-card-info-down-right character-card-info-part">
                            <div class="character-card-stats" id="character-card-stat-elementalbonus">
                                <h4>${element.Type}:</h4>
                                <span>${element.Value}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-elementalbonus">
                                <h4>Shield Strength:</h4>
                                <span>${character.advancedstats.shieldStrength}</span>
                            </div>
                            <div class="character-card-stats" id="character-card-stat-elementalbonus">
                                <h4>Healing Bonus:</h4>
                                <span>${character.advancedstats.healingBonus}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="character-card-info" id="character-card-artifact-info" 
                style="display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-left: -1rem;">
                    <div class="character-card-artifact-container">
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Artifacts/Circlet.png" />
                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span>main-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                            </div>
                        </div>
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Artifacts/Flower.png" />
                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span>main-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                            </div>
                        </div>
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Artifacts/Plume.png" />
                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span>main-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="character-card-artifact-container">
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Artifacts/Sands.png" />
                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span>main-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                            </div>
                        </div>
                        <div class="character-card-artifact-wrapper">
                            <div class="character-card-artifact">
                                <img src="Artifacts/Goblet.png" />
                            </div>
                            <div class="character-card-artifact-info-group">
                                <div class="character-card-artifact-info">
                                    <span>main-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
                                </div>
                                <div class="character-card-artifact-info">
                                    <span>sub-stat: </span>
                                    <span>Info</span>
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