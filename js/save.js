function save(cardData){
console.log(cardData);
let date = cardData.Date;
let score = cardData.Score;
let character = cardData.Character.name;
let level = cardData.Character.level;
let weapon = cardData.Character.weapon.name;
let weaponLevel = cardData.Character.weapon.level;
let resonance = cardData.Character.Resonance;
let supportingElement = cardData.Character.SupportingElement;
let artifact1 = `s:${cardData.Character.artifacts[0].Set}# m:${cardData.Character.artifacts[0].Mainstat.Type} ${cardData.Character.artifacts[0].Mainstat.Value} s:${cardData.Character.artifacts[0].Substats[0].Type} ${cardData.Character.artifacts[0].Substats[0].Value} s:${cardData.Character.artifacts[0].Substats[1].Type} ${cardData.Character.artifacts[0].Substats[1].Value} s:${cardData.Character.artifacts[0].Substats[2].Type} ${cardData.Character.artifacts[0].Substats[2].Value} s:${cardData.Character.artifacts[0].Substats[3].Type} ${cardData.Character.artifacts[0].Substats[3].Value}`;
let artifact2 = `s:${cardData.Character.artifacts[1].Set}# m:${cardData.Character.artifacts[1].Mainstat.Type} ${cardData.Character.artifacts[1].Mainstat.Value} s:${cardData.Character.artifacts[1].Substats[0].Type} ${cardData.Character.artifacts[1].Substats[0].Value} s:${cardData.Character.artifacts[1].Substats[1].Type} ${cardData.Character.artifacts[1].Substats[1].Value} s:${cardData.Character.artifacts[1].Substats[2].Type} ${cardData.Character.artifacts[1].Substats[2].Value} s:${cardData.Character.artifacts[1].Substats[3].Type} ${cardData.Character.artifacts[1].Substats[3].Value}`;
let artifact3 = `s:${cardData.Character.artifacts[2].Set}# m:${cardData.Character.artifacts[2].Mainstat.Type} ${cardData.Character.artifacts[2].Mainstat.Value} s:${cardData.Character.artifacts[2].Substats[0].Type} ${cardData.Character.artifacts[2].Substats[0].Value} s:${cardData.Character.artifacts[2].Substats[1].Type} ${cardData.Character.artifacts[2].Substats[1].Value} s:${cardData.Character.artifacts[2].Substats[2].Type} ${cardData.Character.artifacts[2].Substats[2].Value} s:${cardData.Character.artifacts[2].Substats[3].Type} ${cardData.Character.artifacts[2].Substats[3].Value}`;
let artifact4 = `s:${cardData.Character.artifacts[3].Set}# m:${cardData.Character.artifacts[3].Mainstat.Type} ${cardData.Character.artifacts[3].Mainstat.Value} s:${cardData.Character.artifacts[3].Substats[0].Type} ${cardData.Character.artifacts[3].Substats[0].Value} s:${cardData.Character.artifacts[3].Substats[1].Type} ${cardData.Character.artifacts[3].Substats[1].Value} s:${cardData.Character.artifacts[3].Substats[2].Type} ${cardData.Character.artifacts[3].Substats[2].Value} s:${cardData.Character.artifacts[3].Substats[3].Type} ${cardData.Character.artifacts[3].Substats[3].Value}`;
let artifact5 = `s:${cardData.Character.artifacts[4].Set}# m:${cardData.Character.artifacts[4].Mainstat.Type} ${cardData.Character.artifacts[4].Mainstat.Value} s:${cardData.Character.artifacts[4].Substats[0].Type} ${cardData.Character.artifacts[4].Substats[0].Value} s:${cardData.Character.artifacts[4].Substats[1].Type} ${cardData.Character.artifacts[4].Substats[1].Value} s:${cardData.Character.artifacts[4].Substats[2].Type} ${cardData.Character.artifacts[4].Substats[2].Value} s:${cardData.Character.artifacts[4].Substats[3].Type} ${cardData.Character.artifacts[4].Substats[3].Value}`;
let talent_1 = cardData.Character.normalAttackLevel;
let talent_2 = cardData.Character.elementalSkill.Level;
let talent_3 = cardData.Character.elementalBurst.Level;
document.cookie = character+"_card_name="+character+"; path=/";
document.cookie = character+"_card_date="+date+"; path=/";
document.cookie = character+"_card_score="+score+"; path=/";
document.cookie = character+"_card_level="+level+"; path=/";
document.cookie = character+"_card_weapon="+weapon+"; path=/";
document.cookie = character+"_card_weapon_level="+weaponLevel+"; path=/";
document.cookie = character+"_card_resonance="+resonance+"; path=/";
document.cookie = character+"_card_supportingElement="+supportingElement+"; path=/";
document.cookie = character+"_card_artifact1="+artifact1+"; path=/";
document.cookie = character+"_card_artifact2="+artifact2+"; path=/";
document.cookie = character+"_card_artifact3="+artifact3+"; path=/";
document.cookie = character+"_card_artifact4="+artifact4+"; path=/";
document.cookie = character+"_card_artifact5="+artifact5+"; path=/";
document.cookie = character+"_card_talent_1="+talent_1+"; path=/";
document.cookie = character+"_card_talent_2="+talent_2+"; path=/";
document.cookie = character+"_card_talent_3="+talent_3+"; path=/";
}

function load(character){
    let cardData = {
        "Date": document.cookie.split(character+"_card_date=")[1].split(";")[0],
        "Score": document.cookie.split(character+"_card_score=")[1].split(";")[0],
        "Character": {
            "name": document.cookie.split(character+"_card_name=")[1].split(";")[0],
            "level": document.cookie.split(character+"_card_level=")[1].split(";")[0],
            "weapon": document.cookie.split(character+"_card_weapon=")[1].split(";")[0],
            "weaponLevel": document.cookie.split(character+"_card_weapon_level=")[1].split(";")[0],
            "artifacts": [
                {
                    "Set": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[1].split("#")[0],
                    "Mainstat": {
                        "Type": document.cookie.split(character+"_card_artifact1=")[1].split("m:")[1].split(" ")[0],
                        "Value": document.cookie.split(character+"_card_artifact1=")[1].split("m:")[1].split(" ")[1]
                    },
                    "Substats": [
                        {
                            "Type": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[2].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[2].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[3].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[3].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[4].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[4].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[5].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact1=")[1].split("s:")[5].split(" ")[1]
                        }
                    ]
                },
                {
                    "Set": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[1].split("#")[0],
                    "Mainstat": {
                        "Type": document.cookie.split(character+"_card_artifact2=")[1].split("m:")[1].split(" ")[0],
                        "Value": document.cookie.split(character+"_card_artifact2=")[1].split("m:")[1].split(" ")[1]
                    },
                    "Substats": [
                        {
                            "Type": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[2].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[2].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[3].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[3].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[4].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[4].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[5].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact2=")[1].split("s:")[5].split(" ")[1]
                        }
                    ]
                },
                {
                    "Set": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[1].split("#")[0],
                    "Mainstat": {
                        "Type": document.cookie.split(character+"_card_artifact3=")[1].split("m:")[1].split(" ")[0],
                        "Value": document.cookie.split(character+"_card_artifact3=")[1].split("m:")[1].split(" ")[1]
                    },
                    "Substats": [
                        {
                            "Type": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[2].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[2].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[3].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[3].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[4].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[4].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[5].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact3=")[1].split("s:")[5].split(" ")[1]
                        }
                    ]
                },
                {
                    "Set": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[1].split("#")[0],
                    "Mainstat": {
                        "Type": document.cookie.split(character+"_card_artifact4=")[1].split("m:")[1].split(" ")[0],
                        "Value": document.cookie.split(character+"_card_artifact4=")[1].split("m:")[1].split(" ")[1]
                    },
                    "Substats": [
                        {
                            "Type": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[2].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[2].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[3].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[3].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[4].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[4].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[5].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact4=")[1].split("s:")[5].split(" ")[1]
                        }
                    ]
                },
                {
                    "Set": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[1].split("#")[0],
                    "Mainstat": {
                        "Type": document.cookie.split(character+"_card_artifact5=")[1].split("m:")[1].split(" ")[0],
                        "Value": document.cookie.split(character+"_card_artifact5=")[1].split("m:")[1].split(" ")[1]
                    },
                    "Substats": [
                        {
                            "Type": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[2].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[2].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[3].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[3].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[4].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[4].split(" ")[1]
                        },
                        {
                            "Type": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[5].split(" ")[0],
                            "Value": document.cookie.split(character+"_card_artifact5=")[1].split("s:")[5].split(" ")[1]
                        }
                    ]
                }
            ]
        },
        
        "resonance": document.cookie.split(character+"_card_resonance=")[1].split(";")[0],
        "supportingElement": document.cookie.split(character+"_card_supportingElement=")[1].split(";")[0],

            
    };
    return cardData;
}
function deleteAllCookies() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    setTimeout(function(){location.reload();}, 1000);
}