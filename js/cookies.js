function save(cardData){
console.log(cardData.Character.artifacts[0]);
let date = cardData.Date;
let score = cardData.Score;
let character = cardData.Character.name;
let level = cardData.Character.level;
let weapon = cardData.Character.weapon.name;
let weaponLevel = cardData.Character.weapon.level;
let resonance = cardData.Character.Resonance;
let supportingElement = cardData.Character.SupportingElement;
let artifact1 = `s${cardData.Character.artifacts[0].Set}_${cardData.Character.artifacts[0].Mainstat.Type}_${cardData.Character.artifacts[0].Mainstat.Value}_${cardData.Character.artifacts[0].Substats[0].Type}_${cardData.Character.artifacts[0].Substats[0].Value}_${cardData.Character.artifacts[0].Substats[1].Type}_${cardData.Character.artifacts[0].Substats[1].Value}_${cardData.Character.artifacts[0].Substats[2].Type}_${cardData.Character.artifacts[0].Substats[2].Value}_${cardData.Character.artifacts[0].Substats[3].Type}_${cardData.Character.artifacts[0].Substats[3].Value}`;
let artifact2 = `s${cardData.Character.artifacts[1].Set}_${cardData.Character.artifacts[1].Mainstat.Type}_${cardData.Character.artifacts[1].Mainstat.Value}_${cardData.Character.artifacts[1].Substats[0].Type}_${cardData.Character.artifacts[1].Substats[0].Value}_${cardData.Character.artifacts[1].Substats[1].Type}_${cardData.Character.artifacts[1].Substats[1].Value}_${cardData.Character.artifacts[1].Substats[2].Type}_${cardData.Character.artifacts[1].Substats[2].Value}_${cardData.Character.artifacts[1].Substats[3].Type}_${cardData.Character.artifacts[1].Substats[3].Value}`;
let artifact3 = `s${cardData.Character.artifacts[2].Set}_${cardData.Character.artifacts[2].Mainstat.Type}_${cardData.Character.artifacts[2].Mainstat.Value}_${cardData.Character.artifacts[2].Substats[0].Type}_${cardData.Character.artifacts[2].Substats[0].Value}_${cardData.Character.artifacts[2].Substats[1].Type}_${cardData.Character.artifacts[2].Substats[1].Value}_${cardData.Character.artifacts[2].Substats[2].Type}_${cardData.Character.artifacts[2].Substats[2].Value}_${cardData.Character.artifacts[2].Substats[3].Type}_${cardData.Character.artifacts[2].Substats[3].Value}`;
let artifact4 = `s${cardData.Character.artifacts[3].Set}_${cardData.Character.artifacts[3].Mainstat.Type}_${cardData.Character.artifacts[3].Mainstat.Value}_${cardData.Character.artifacts[3].Substats[0].Type}_${cardData.Character.artifacts[3].Substats[0].Value}_${cardData.Character.artifacts[3].Substats[1].Type}_${cardData.Character.artifacts[3].Substats[1].Value}_${cardData.Character.artifacts[3].Substats[2].Type}_${cardData.Character.artifacts[3].Substats[2].Value}_${cardData.Character.artifacts[3].Substats[3].Type}_${cardData.Character.artifacts[3].Substats[3].Value}`;
let artifact5 = `s${cardData.Character.artifacts[4].Set}_${cardData.Character.artifacts[4].Mainstat.Type}_${cardData.Character.artifacts[4].Mainstat.Value}_${cardData.Character.artifacts[4].Substats[0].Type}_${cardData.Character.artifacts[4].Substats[0].Value}_${cardData.Character.artifacts[4].Substats[1].Type}_${cardData.Character.artifacts[4].Substats[1].Value}_${cardData.Character.artifacts[4].Substats[2].Type}_${cardData.Character.artifacts[4].Substats[2].Value}_${cardData.Character.artifacts[4].Substats[3].Type}_${cardData.Character.artifacts[4].Substats[3].Value}`;
let talent_1 = cardData.Character.normalAttackLevel;
let talent_2 = cardData.Character.elementalSkill.Level;
let talent_3 = cardData.Character.elementalBurst.Level;
let card = `n:${character},d:${date},s:${score},l:${level},w:${weapon},wL:${weaponLevel},r:${resonance},e:${supportingElement},a1:${artifact1},a2:${artifact2},a3:${artifact3},a4:${artifact4},a5:${artifact5},t1:${talent_1},t2:${talent_2},t3:${talent_3}`;
let cookieExist = false;
let count = 0;
do{
    count++;
    if(cookieExists("card_"+count) != undefined){
        cookieExist = true;
    }
    else{
        cookieExist = false;
    }
}
while(cookieExist)
document.cookie = "card_"+count+"="+card+"; path=/";
}
function cookieExists(name) {
    return (document.cookie.match('(^|; )' + name + '=([^;]*)')||0)[2]
}
function getNumberOfCardCookies() {
    let count = 0;
    let cookies = 0;
    let cookieExist = false;
    do{
        count++;
        if(cookieExists("card_"+count) != undefined){
            cookieExist = true;
            cookies++;
            
        }
        else{
            cookieExist = false;
        }
    }
    while(cookieExist)
    return cookies;
}

function getCookies(cname) {
        let arr = document.cookie.split(";");
        let cookies = [];
        for(let i = 0; i < arr.length; i++){
        let c = arr[i].trim();
        if(c.split("=")[0].indexOf(cname) == 0){
            cookies.push(c);
        }
        
    }
    return cookies;
}


function getCardCookies(){
    let cookies = getCookies("card_");
    let decodeData = [];
    for(let i = 0; i < cookies.length; i++){
        decodeData.push({
            name: cookies[i].split("=")[1].split("n:")[1].split(",")[0],
            date: cookies[i].split("=")[1].split("d:")[1].split(",")[0],
            score: cookies[i].split("=")[1].split("s:")[1].split(",")[0],
            level: cookies[i].split("=")[1].split("l:")[1].split(",")[0],
            weapon: cookies[i].split("=")[1].split("w:")[1].split(",")[0],
            weaponLevel: cookies[i].split("=")[1].split("wL:")[1].split(",")[0],
            resonance: cookies[i].split("=")[1].split("r:")[1].split(",")[0],
            supportingElement: cookies[i].split("=")[1].split("e:")[1].split(",")[0],
            artifacts : [
                {
                    Set: cookies[i].split("=")[1].split("a1:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[1],
                        Value: cookies[i].split("=")[1].split("a1:")[1].split("_")[2]
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[3],
                            Value: cookies[i].split("=")[1].split("a1:")[1].split("_")[4]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[5],
                            Value: cookies[i].split("=")[1].split("a1:")[1].split("_")[6]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[7],
                            Value: cookies[i].split("=")[1].split("a1:")[1].split("_")[8]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a1:")[1].split("_")[9],
                            Value: cookies[i].split("=")[1].split("a1:")[1].split("_")[10]
                        }
                    ]
                },
                {
                    Set: cookies[i].split("=")[1].split("a2:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[1],
                        Value: cookies[i].split("=")[1].split("a2:")[1].split("_")[2]
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[3],
                            Value: cookies[i].split("=")[1].split("a2:")[1].split("_")[4]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[5],
                            Value: cookies[i].split("=")[1].split("a2:")[1].split("_")[6]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[7],
                            Value: cookies[i].split("=")[1].split("a2:")[1].split("_")[8]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a2:")[1].split("_")[9],
                            Value: cookies[i].split("=")[1].split("a2:")[1].split("_")[10]
                        }
                    ]
                },
                {
                    Set: cookies[i].split("=")[1].split("a3:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[1],
                        Value: cookies[i].split("=")[1].split("a3:")[1].split("_")[2]
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[3],
                            Value: cookies[i].split("=")[1].split("a3:")[1].split("_")[4]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[5],
                            Value: cookies[i].split("=")[1].split("a3:")[1].split("_")[6]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[7],
                            Value: cookies[i].split("=")[1].split("a3:")[1].split("_")[8]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a3:")[1].split("_")[9],
                            Value: cookies[i].split("=")[1].split("a3:")[1].split("_")[10]
                        }
                    ]
                },
                {
                    Set: cookies[i].split("=")[1].split("a4:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[1],
                        Value: cookies[i].split("=")[1].split("a4:")[1].split("_")[2]
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[3],
                            Value: cookies[i].split("=")[1].split("a4:")[1].split("_")[4]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[5],
                            Value: cookies[i].split("=")[1].split("a4:")[1].split("_")[6]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[7],
                            Value: cookies[i].split("=")[1].split("a4:")[1].split("_")[8]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a4:")[1].split("_")[9],
                            Value: cookies[i].split("=")[1].split("a4:")[1].split("_")[10]
                        }
                    ]
                },
                {
                    Set: cookies[i].split("=")[1].split("a5:s")[1].split("_")[0],
                    Mainstat: {
                        Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[1],
                        Value: cookies[i].split("=")[1].split("a5:")[1].split("_")[2]
                    },
                    Substats: [
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[3],
                            Value: cookies[i].split("=")[1].split("a5:")[1].split("_")[4]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[5],
                            Value: cookies[i].split("=")[1].split("a5:")[1].split("_")[6]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[7],
                            Value: cookies[i].split("=")[1].split("a5:")[1].split("_")[8]
                        },
                        {
                            Type: cookies[i].split("=")[1].split("a5:")[1].split("_")[9],
                            Value: cookies[i].split("=")[1].split("a5:")[1].split("_")[10]
                        }
                    ]
                }    
            ],
            talents : {
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
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    setTimeout(function(){location.reload();}, 1000);
}