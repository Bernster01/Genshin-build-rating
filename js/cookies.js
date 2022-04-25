function save(cardData) {
    console.log(cardData);
    let date = cardData.Date;
    let score = cardData.Score;
    let character = cardData.Character.name;
    let level = cardData.Character.level;
    let weapon = cardData.Character.weapon.name;
    let weaponLevel = cardData.Character.weapon.level;
    let resonance = cardData.Resonances[0] + "/" + cardData.Resonances[1];
    let supportingElement = cardData.SupportingElement;
    let artifact1 = `s${cardData.Character.artifacts[0].Set}_${cardData.Character.artifacts[0].Mainstat.Type}_${cardData.Character.artifacts[0].Mainstat.Value}_${cardData.Character.artifacts[0].Substats[0].Type}_${cardData.Character.artifacts[0].Substats[0].Value}_${cardData.Character.artifacts[0].Substats[1].Type}_${cardData.Character.artifacts[0].Substats[1].Value}_${cardData.Character.artifacts[0].Substats[2].Type}_${cardData.Character.artifacts[0].Substats[2].Value}_${cardData.Character.artifacts[0].Substats[3].Type}_${cardData.Character.artifacts[0].Substats[3].Value}_`;
    let artifact2 = `s${cardData.Character.artifacts[1].Set}_${cardData.Character.artifacts[1].Mainstat.Type}_${cardData.Character.artifacts[1].Mainstat.Value}_${cardData.Character.artifacts[1].Substats[0].Type}_${cardData.Character.artifacts[1].Substats[0].Value}_${cardData.Character.artifacts[1].Substats[1].Type}_${cardData.Character.artifacts[1].Substats[1].Value}_${cardData.Character.artifacts[1].Substats[2].Type}_${cardData.Character.artifacts[1].Substats[2].Value}_${cardData.Character.artifacts[1].Substats[3].Type}_${cardData.Character.artifacts[1].Substats[3].Value}_`;
    let artifact3 = `s${cardData.Character.artifacts[2].Set}_${cardData.Character.artifacts[2].Mainstat.Type}_${cardData.Character.artifacts[2].Mainstat.Value}_${cardData.Character.artifacts[2].Substats[0].Type}_${cardData.Character.artifacts[2].Substats[0].Value}_${cardData.Character.artifacts[2].Substats[1].Type}_${cardData.Character.artifacts[2].Substats[1].Value}_${cardData.Character.artifacts[2].Substats[2].Type}_${cardData.Character.artifacts[2].Substats[2].Value}_${cardData.Character.artifacts[2].Substats[3].Type}_${cardData.Character.artifacts[2].Substats[3].Value}_`;
    let artifact4 = `s${cardData.Character.artifacts[3].Set}_${cardData.Character.artifacts[3].Mainstat.Type}_${cardData.Character.artifacts[3].Mainstat.Value}_${cardData.Character.artifacts[3].Substats[0].Type}_${cardData.Character.artifacts[3].Substats[0].Value}_${cardData.Character.artifacts[3].Substats[1].Type}_${cardData.Character.artifacts[3].Substats[1].Value}_${cardData.Character.artifacts[3].Substats[2].Type}_${cardData.Character.artifacts[3].Substats[2].Value}_${cardData.Character.artifacts[3].Substats[3].Type}_${cardData.Character.artifacts[3].Substats[3].Value}_`;
    let artifact5 = `s${cardData.Character.artifacts[4].Set}_${cardData.Character.artifacts[4].Mainstat.Type}_${cardData.Character.artifacts[4].Mainstat.Value}_${cardData.Character.artifacts[4].Substats[0].Type}_${cardData.Character.artifacts[4].Substats[0].Value}_${cardData.Character.artifacts[4].Substats[1].Type}_${cardData.Character.artifacts[4].Substats[1].Value}_${cardData.Character.artifacts[4].Substats[2].Type}_${cardData.Character.artifacts[4].Substats[2].Value}_${cardData.Character.artifacts[4].Substats[3].Type}_${cardData.Character.artifacts[4].Substats[3].Value}_`;
    let talent_1 = cardData.Character.normalAttackLevel;
    let talent_2 = cardData.Character.elementalSkill.Level;
    let talent_3 = cardData.Character.elementalBurst.Level;
    let role = cardData.Role;
    console.log(role);
    let card = `n:${character},d:${date},s:${score},l:${level},w:${weapon},wL:${weaponLevel},r:${resonance},e:${supportingElement},a1:${artifact1},a2:${artifact2},a3:${artifact3},a4:${artifact4},a5:${artifact5},t1:${talent_1},t2:${talent_2},t3:${talent_3},rl:${role},`;
    let cookieExist = false;
    let count = 0;
    do {
        count++;
        if (cookieExists("card_" + count) != undefined) {
            cookieExist = true;
        }
        else {
            cookieExist = false;
        }
    }
    while (cookieExist)
    document.cookie = "card_" + count + "=" + card + "; path=/";
    document.getElementById("saved-characters-cards-wrapper").innerHTML = "";
    generateCharacterCardsFromCookies();
    let doc = document.getElementById("result-container");
			doc.style.transform = "translate(-50%,50%) scale(0.1)";
			setTimeout(function () {
				doc.style.display = "none";
			}, 500);
}
function cookieExists(name) {
    return (document.cookie.match('(^|; )' + name + '=([^;]*)') || 0)[2]
}
function getNumberOfCardCookies() {
    let count = 0;
    let cookies = 0;
    let cookieExist = false;
    do {
        count++;
        if (cookieExists("card_" + count) != undefined) {
            cookieExist = true;
            cookies++;

        }
        else {
            cookieExist = false;
        }
    }
    while (cookieExist)
    return cookies;
}

function getCookies(cname) {
    let arr = document.cookie.split(";");
    let cookies = [];
    for (let i = 0; i < arr.length; i++) {
        let c = arr[i].trim();
        if (c.split("=")[0].indexOf(cname) == 0) {
            cookies.push(c);
        }

    }
    return cookies;
}


function getCardCookies() {
    let cookies = getCookies("card_");
    let decodeData = [];
    for (let i = 0; i < cookies.length; i++) {
        decodeData.push({
            cookie: cookies[i].split("=")[0],
            name: cookies[i].split("=")[1].split("n:")[1].split(",")[0],
            date: cookies[i].split("=")[1].split("d:")[1].split(",")[0],
            score: cookies[i].split("=")[1].split("s:")[1].split(",")[0],
            level: cookies[i].split("=")[1].split("l:")[1].split(",")[0],
            weapon: cookies[i].split("=")[1].split("w:")[1].split(",")[0],
            weaponLevel: cookies[i].split("=")[1].split("wL:")[1].split(",")[0],
            resonance: cookies[i].split("=")[1].split("r:")[1].split(",")[0],
            supportingElement: cookies[i].split("=")[1].split("e:")[1].split(",")[0],
            role: cookies[i].split("=")[1].split("rl:")[1].split(",")[0],
            artifacts: [
                {
                    Type: "Circlet",
                    Set: cookies[i].split("=")[1].split("a1:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[1],
                        Value: Number.parseFloat(cookies[i].split("=")[1].split("a1:")[1].split("_")[2])
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[3],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a1:")[1].split("_")[4])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[5],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a1:")[1].split("_")[6])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[7],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a1:")[1].split("_")[8])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[9],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a1:")[1].split("_")[10])
                        }
                    ]
                },
                {
                    Type: "Flower",
                    Set: cookies[i].split("=")[1].split("a2:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[1],
                        Value: Number.parseFloat(cookies[i].split("=")[1].split("a2:")[1].split("_")[2])
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[3],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a2:")[1].split("_")[4])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[5],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a2:")[1].split("_")[6])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[7],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a2:")[1].split("_")[8])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[9],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a2:")[1].split("_")[10])
                        }
                    ]
                },
                {
                    Type: "Plume",
                    Set: cookies[i].split("=")[1].split("a3:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[1],
                        Value: Number.parseFloat(cookies[i].split("=")[1].split("a3:")[1].split("_")[2])
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[3],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a3:")[1].split("_")[4])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[5],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a3:")[1].split("_")[6])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[7],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a3:")[1].split("_")[8])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[9],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a3:")[1].split("_")[10])
                        }
                    ]
                },
                {
                    Type: "Sands",
                    Set: cookies[i].split("=")[1].split("a4:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[1],
                        Value: Number.parseFloat(cookies[i].split("=")[1].split("a4:")[1].split("_")[2])
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[3],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a4:")[1].split("_")[4])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[5],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a4:")[1].split("_")[6])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[7],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a4:")[1].split("_")[8])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[9],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a4:")[1].split("_")[10])
                        }
                    ]
                },
                {
                    Type: "Goblet",
                    Set: cookies[i].split("=")[1].split("a5:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[1],
                        Value: Number.parseFloat(cookies[i].split("=")[1].split("a5:")[1].split("_")[2])
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[3],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a5:")[1].split("_")[4])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[5],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a5:")[1].split("_")[6])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[7],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a5:")[1].split("_")[8])
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[9],
                            Value: Number.parseFloat(cookies[i].split("=")[1].split("a5:")[1].split("_")[10])
                        }
                    ]
                }
            ],
            talents: {
                normalAttackLevel: cookies[i].split("=")[1].split("t1:")[1].split(",")[0],
                elementalSkill: cookies[i].split("=")[1].split("t2:")[1].split(",")[0],
                elementalBurst: cookies[i].split("=")[1].split("t3:")[1].split(",")[0]
            }
        });
    }





    return decodeData;
}
function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    setTimeout(function () { location.reload(); }, 1000);
}
function saveArtifactCookie(){
    let artifact = [{
        Type: "Circlet",
        Set: document.getElementById("Circlet_set").value,
        Mainstat: {
            Type: document.getElementById("Circlet_mainstat").value,
            Value: Number.parseFloat(document.getElementById("Circlet_mainstat_value").value)
        },
        Substats: [
            {
                Type: document.getElementById("Circlet_substat_1").value,
                Value: Number.parseFloat(document.getElementById("Circlet_substat_1_value").value)
            },
            {
                Type: document.getElementById("Circlet_substat_2").value,
                Value: Number.parseFloat(document.getElementById("Circlet_substat_2_value").value)
            },
            {
                Type: document.getElementById("Circlet_substat_3").value,
                Value: Number.parseFloat(document.getElementById("Circlet_substat_3_value").value)
            },
            {
                Type: document.getElementById("Circlet_substat_4").value,
                Value: Number.parseFloat(document.getElementById("Circlet_substat_4_value").value)
            }
        ]
    },
    {
        Type: "Flower",
        Set: document.getElementById("Flower_set").value,
        Mainstat: {
            Type: document.getElementById("Flower_mainstat").value,
            Value: Number.parseFloat(document.getElementById("Flower_mainstat_value").value)
        },
        Substats: [
            {
                Type: document.getElementById("Flower_substat_1").value,
                Value: Number.parseFloat(document.getElementById("Flower_substat_1_value").value)
            },
            {
                Type: document.getElementById("Flower_substat_2").value,
                Value: Number.parseFloat(document.getElementById("Flower_substat_2_value").value)
            },
            {
                Type: document.getElementById("Flower_substat_3").value,
                Value: Number.parseFloat(document.getElementById("Flower_substat_3_value").value)
            },
            {
                Type: document.getElementById("Flower_substat_4").value,
                Value: Number.parseFloat(document.getElementById("Flower_substat_4_value").value)
            }
        ]
    },
    {
        Type: "Plume",
        Set: document.getElementById("Plume_set").value,
        Mainstat: {
            Type: document.getElementById("Plume_mainstat").value,
            Value: Number.parseFloat(document.getElementById("Plume_mainstat_value").value)
        },
        Substats: [
            {
                Type: document.getElementById("Plume_substat_1").value,
                Value: Number.parseFloat(document.getElementById("Plume_substat_1_value").value)
            },
            {
                Type: document.getElementById("Plume_substat_2").value,
                Value: Number.parseFloat(document.getElementById("Plume_substat_2_value").value)
            },
            {
                Type: document.getElementById("Plume_substat_3").value,
                Value: Number.parseFloat(document.getElementById("Plume_substat_3_value").value)
            },
            {
                Type: document.getElementById("Plume_substat_4").value,
                Value: Number.parseFloat(document.getElementById("Plume_substat_4_value").value)
            }
        ]
    },
    {
        Type: "Sands",
        Set: document.getElementById("Sands_set").value,
        Mainstat: {
            Type: document.getElementById("Sands_mainstat").value,
            Value: Number.parseFloat(document.getElementById("Sands_mainstat_value").value)
        },
        Substats: [
            {
                Type: document.getElementById("Sands_substat_1").value,
                Value: Number.parseFloat(document.getElementById("Sands_substat_1_value").value)
            },
            {
                Type: document.getElementById("Sands_substat_2").value,
                Value: Number.parseFloat(document.getElementById("Sands_substat_2_value").value)
            },
            {
                Type: document.getElementById("Sands_substat_3").value,
                Value: Number.parseFloat(document.getElementById("Sands_substat_3_value").value)
            },
            {
                Type: document.getElementById("Sands_substat_4").value,
                Value: Number.parseFloat(document.getElementById("Sands_substat_4_value").value)
            }
        ]
    },
    {
        Type: "Goblet",
        Set: document.getElementById("Goblet_set").value,
        Mainstat: {
            Type: document.getElementById("Goblet_mainstat").value,
            Value: Number.parseFloat(document.getElementById("Goblet_mainstat_value").value)
        },
        Substats: [
            {
                Type: document.getElementById("Goblet_substat_1").value,
                Value: Number.parseFloat(document.getElementById("Goblet_substat_1_value").value)
            },
            {
                Type: document.getElementById("Goblet_substat_2").value,
                Value: Number.parseFloat(document.getElementById("Goblet_substat_2_value").value)
            },
            {
                Type: document.getElementById("Goblet_substat_3").value,
                Value: Number.parseFloat(document.getElementById("Goblet_substat_3_value").value)
            },
            {
                Type: document.getElementById("Goblet_substat_4").value,
                Value: Number.parseFloat(document.getElementById("Goblet_substat_4_value").value)
            }
        ]
    }
    ]
    console.log(artifact);
    let artifact_string = JSON.stringify(artifact);
    document.cookie = "artifact=" + artifact_string+";";
}
function loadArtifactCookie(){
    let artifact_string = document.cookie.split("artifact=")[1].split(";")[0];
    if(artifact_string != undefined){
        console.log(artifact_string);
        let artifact = JSON.parse(artifact_string);
        giveArtifactValues(artifact);
    }

}
function giveArtifactValues(artifact){
        document.getElementById("Circlet_set").value = artifact[0].Set;
        document.getElementById("Circlet").src = "Artifacts/"+artifact[0].Set+" Circlet.webp";
        document.getElementById("Circlet_mainstat").value = artifact[0].Mainstat.Type;
        document.getElementById("Circlet_mainstat_value").value = artifact[0].Mainstat.Value;
        document.getElementById("Circlet_substat_1").value = artifact[0].Substats[0].Type;
        document.getElementById("Circlet_substat_1_value").value = artifact[0].Substats[0].Value;
        document.getElementById("Circlet_substat_2").value = artifact[0].Substats[1].Type;
        document.getElementById("Circlet_substat_2_value").value = artifact[0].Substats[1].Value;
        document.getElementById("Circlet_substat_3").value = artifact[0].Substats[2].Type;
        document.getElementById("Circlet_substat_3_value").value = artifact[0].Substats[2].Value;
        document.getElementById("Circlet_substat_4").value = artifact[0].Substats[3].Type;
        document.getElementById("Circlet_substat_4_value").value = artifact[0].Substats[3].Value;
        document.getElementById("Flower_set").value = artifact[1].Set;
        document.getElementById("Flower").src = "Artifacts/"+artifact[1].Set+" Flower.webp";
        document.getElementById("Flower_mainstat").value = artifact[1].Mainstat.Type;
        document.getElementById("Flower_mainstat_value").value = artifact[1].Mainstat.Value;
        document.getElementById("Flower_substat_1").value = artifact[1].Substats[0].Type;
        document.getElementById("Flower_substat_1_value").value = artifact[1].Substats[0].Value;
        document.getElementById("Flower_substat_2").value = artifact[1].Substats[1].Type;
        document.getElementById("Flower_substat_2_value").value = artifact[1].Substats[1].Value;
        document.getElementById("Flower_substat_3").value = artifact[1].Substats[2].Type;
        document.getElementById("Flower_substat_3_value").value = artifact[1].Substats[2].Value;
        document.getElementById("Flower_substat_4").value = artifact[1].Substats[3].Type;
        document.getElementById("Flower_substat_4_value").value = artifact[1].Substats[3].Value;
        document.getElementById("Plume_set").value = artifact[2].Set;
        document.getElementById("Plume").src = "Artifacts/"+artifact[2].Set+" Plume.webp";
        document.getElementById("Plume_mainstat").value = artifact[2].Mainstat.Type;
        document.getElementById("Plume_mainstat_value").value = artifact[2].Mainstat.Value;
        document.getElementById("Plume_substat_1").value = artifact[2].Substats[0].Type;
        document.getElementById("Plume_substat_1_value").value = artifact[2].Substats[0].Value;
        document.getElementById("Plume_substat_2").value = artifact[2].Substats[1].Type;
        document.getElementById("Plume_substat_2_value").value = artifact[2].Substats[1].Value;
        document.getElementById("Plume_substat_3").value = artifact[2].Substats[2].Type;
        document.getElementById("Plume_substat_3_value").value = artifact[2].Substats[2].Value;
        document.getElementById("Plume_substat_4").value = artifact[2].Substats[3].Type;
        document.getElementById("Plume_substat_4_value").value = artifact[2].Substats[3].Value;
        document.getElementById("Sands_set").value = artifact[3].Set;
        document.getElementById("Sands").src = "Artifacts/"+artifact[3].Set+" Sands.webp";
        document.getElementById("Sands_mainstat").value = artifact[3].Mainstat.Type;
        document.getElementById("Sands_mainstat_value").value = artifact[3].Mainstat.Value;
        document.getElementById("Sands_substat_1").value = artifact[3].Substats[0].Type;
        document.getElementById("Sands_substat_1_value").value = artifact[3].Substats[0].Value;
        document.getElementById("Sands_substat_2").value = artifact[3].Substats[1].Type;
        document.getElementById("Sands_substat_2_value").value = artifact[3].Substats[1].Value;
        document.getElementById("Sands_substat_3").value = artifact[3].Substats[2].Type;
        document.getElementById("Sands_substat_3_value").value = artifact[3].Substats[2].Value;
        document.getElementById("Sands_substat_4").value = artifact[3].Substats[3].Type;
        document.getElementById("Sands_substat_4_value").value = artifact[3].Substats[3].Value;
        document.getElementById("Goblet_set").value = artifact[4].Set;
        document.getElementById("Goblet").src = "Artifacts/"+artifact[4].Set+" Goblet.webp";
        document.getElementById("Goblet_mainstat").value = artifact[4].Mainstat.Type;
        document.getElementById("Goblet_mainstat_value").value = artifact[4].Mainstat.Value;
        document.getElementById("Goblet_substat_1").value = artifact[4].Substats[0].Type;
        document.getElementById("Goblet_substat_1_value").value = artifact[4].Substats[0].Value;
        document.getElementById("Goblet_substat_2").value = artifact[4].Substats[1].Type;
        document.getElementById("Goblet_substat_2_value").value = artifact[4].Substats[1].Value;
        document.getElementById("Goblet_substat_3").value = artifact[4].Substats[2].Type;
        document.getElementById("Goblet_substat_3_value").value = artifact[4].Substats[2].Value;
        document.getElementById("Goblet_substat_4").value = artifact[4].Substats[3].Type;
        document.getElementById("Goblet_substat_4_value").value = artifact[4].Substats[3].Value;
}