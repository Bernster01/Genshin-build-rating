
function EvalBuilds(userBuild, currentBestBuild, role) {
    let userScore = 0;

    switch (role) {
        case "Dps":
            userScore = dpsEval(userBuild, currentBestBuild);
            break;
        case "Support":
            userScore = supportEval(userBuild, currentBestBuild);
            break;
    }
    //Check if userbuild has energyrecharge for the offset deduct % of score depending on how much is missing
    if (userBuild.character.energyRecharge < userBuild.character.energyOffset && userBuild.character.energyOffset <=100) {
        let percentMissing = userBuild.character.energyRecharge / userBuild.character.energyOffset;
        if (percentMissing > .4) {
            percentMissing = .4;
        }
        userScore = Math.floor(userScore * (1 - (percentMissing)));
    }
    
    return userScore;
}
function dpsEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.dmg / currentBestBuild.dmg.totalDmg) * 100);

}
function supportEval(userBuild, currentBestBuild) {

    if (userBuild.character.supportType2 == null || userBuild.character.supportType2 == undefined) {
        userBuild.character.supportType2 = "null";

    }
    let healer_score = healerEval(userBuild, currentBestBuild);
    let buffer_score = bufferEval(userBuild, currentBestBuild);
    let shield_score = shieldEval(userBuild, currentBestBuild);
    let dps_score = dpsEval(userBuild, currentBestBuild);
    //max score is 200
    if (healer_score > 200) {
        healer_score = 200;
    }
    if (buffer_score > 200) {
        buffer_score = 200;
    }
    if (shield_score > 200) {
        shield_score = 200;
    }
    if (dps_score > 200) {
        dps_score = 200;
    }
    let healer_weight = 0;
    let buffer_weight = 0;
    let shield_weight = 0;
    let dps_weight = 0;
    //Main weight is 50% of the score
    switch (userBuild.character.supportType) {
        case "Healer":
            healer_weight += 0.5;
            break;
        case "Buffer":
            buffer_weight += 0.5;
            break;
        case "Shield":
            shield_weight += 0.5;
            break;
        default:
            dps_weight += 0.5;
            break;
    
    }
    //Sub weight1 is 20% of the score
    switch (userBuild.character.supportType2) {
        case "Healer":
            healer_weight += 0.2;
            break;
        case "Buffer":
            buffer_weight += 0.2;
            break;
        case "Shield":
            shield_weight += 0.2;
            break;
        default:
            dps_weight += 0.2;
            break;
    }
    //Dps weight is 10% of the score
    dps_weight += 0.10;
    //Remaining weight is 20% of the score
    let remaining_weight = 1 - (healer_weight + buffer_weight + shield_weight + dps_weight);
    let divider = 0;
    const weights = [healer_weight, buffer_weight, shield_weight, dps_weight];
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] == 0) {
            divider++;
        }
    }
    if(healer_weight == 0){
        healer_weight = remaining_weight/divider;
    }
    if(buffer_weight == 0){
        buffer_weight = remaining_weight/divider;
    }
    if(shield_weight == 0){
        shield_weight = remaining_weight/divider;
    }
    if(dps_weight == 0){
        dps_weight = remaining_weight/divider;
    }
    healer_weight = Math.round(healer_weight * 1000)/1000;
    buffer_weight = Math.round(buffer_weight * 1000)/1000;
    shield_weight = Math.round(shield_weight * 1000)/1000;
    dps_weight = Math.round(dps_weight * 1000)/1000;
    const newWeights = [healer_weight, buffer_weight, shield_weight, dps_weight];
    let avg_score = Math.floor((healer_score * healer_weight) + (buffer_score * buffer_weight) + (shield_score * shield_weight) + (dps_score * dps_weight));

  
    

    

    // console.log(avg_score, healer_score, buffer_score, shield_score, dps_score,userBuild.character.energyRecharge() < userBuild.character.energyOffset);
    // let userScore = avg_score;
    // if (userBuild.character.energyRecharge() < userBuild.character.energyOffset) {
    //     let percentMissing = userBuild.character.energyRecharge() / userBuild.character.energyOffset;
    //     if (percentMissing > .2) {
    //         percentMissing = .2;
    //     }
        
    //     userScore = Math.floor(userScore * (1 - (percentMissing)));
       
    // }
    // if(userScore >100){
    //     numberOfBuilds++;
    //     console.log("Found a better build: ", numberOfBuilds);
    //     console.log(newWeights);
    //     // console.log("Healer: ", healer_score, "Buffer: ", buffer_score, "Shield: ", shield_score, "Dps: ", dps_score);
    //  }
    return avg_score;
    // switch (userBuild.character.supportType) {
    //     case "Healer":
    //         switch (userBuild.character.supportType2) {
    //             case "Sub-Dps":
    //                 return healerSubDpsEval(userBuild, currentBestBuild);
    //             case "shield":
    //                 return healerShieldEval(userBuild, currentBestBuild);
    //             default:
    //                 return healerSubDpsEval(userBuild, currentBestBuild);
    //         }
    //     case "Buffer":
    //         switch (userBuild.character.supportType2) {
    //             case "Shield":
    //                 return bufferShieldEval(userBuild, currentBestBuild);
    //             case "Sub-dps":
    //                 return bufferDpsEval(userBuild, currentBestBuild);
    //             case "Healer":
    //                 return bufferHealerEval(userBuild, currentBestBuild);
    //             default:
    //                 return bufferDpsEval(userBuild, currentBestBuild);
    //         }

    //     case "Sub-dps":
    //         return dpsEval(userBuild, currentBestBuild);
    //     case "Shield":
    //         switch (userBuild.character.supportType2) {
    //             case "Buffer":
    //                 return shieldBufferEval(userBuild, currentBestBuild);
    //             case "Sub-dps":
    //                 return shieldDpsEval(userBuild, currentBestBuild);
    //             case "Healer":
    //                 return shieldHealerEval(userBuild, currentBestBuild);
    //             default:
    //                 return shieldDpsEval(userBuild, currentBestBuild);
    //         }
    //     case "ElementalBuffer":
    //         switch (userBuild.character.supportType2) {
    //             case "Sub-dps":
    //                 return bufferDpsEval(userBuild, currentBestBuild);
    //             case "Healer":
    //                 return bufferHealerEval(userBuild, currentBestBuild);
    //             case "Shield":
    //                 return bufferShieldEval(userBuild, currentBestBuild);
    //             default:
    //                 return bufferDpsEval(userBuild, currentBestBuild);
    //         }
    //     }
}


function healerEval(userBuild, currentBestBuild) {
    if (userBuild.healing == 0) {
        return 100;
    }
    let buildHealing = currentBestBuild.supportValues.healing;
    if (buildHealing == 0) {
        buildHealing = 1;
    }
    return Math.floor((userBuild.healing / buildHealing) * 100);
}
function healerSubDpsEval(userBuild, currentBestBuild) {
    let healScore = healerEval(userBuild, currentBestBuild);
    let dmgScore = dpsEval(userBuild, currentBestBuild);
    if(healScore == 0){
        return dmgScore;
    }
    return Math.floor((healScore * 0.6) + (dmgScore * 0.4));
}
// function healerShieldEval(userBuild, currentBestBuild) {
//     let healScore = healerEval(userBuild, currentBestBuild);
//     let shieldScore = shieldEval(userBuild, currentBestBuild);
//     return Math.floor((healScore) + (shieldScore));
// }
function bufferEval(userBuild, currentBestBuild) {
    if (userBuild.buff == 0) {
        return 100;
    }
    let buildBuff = currentBestBuild.supportValues.buff;
    if (buildBuff == 0) {
        buildBuff = 1;
    }
    return Math.floor((userBuild.buff / buildBuff) * 100);
}
// function bufferShieldEval(userBuild, currentBestBuild) {
//     let bufferScore = bufferEval(userBuild, currentBestBuild);
//     let shieldScore = shieldEval(userBuild, currentBestBuild);
//     return Math.floor((bufferScore) + (shieldScore));
// }
function bufferDpsEval(userBuild, currentBestBuild) {
    let bufferScore = bufferEval(userBuild, currentBestBuild);
    let dmgScore = dpsEval(userBuild, currentBestBuild);
    if(bufferScore == 0){
        return dmgScore;
    }
    return Math.floor((bufferScore * 0.6) + (dmgScore * 0.4));
}
// function bufferHealerEval(userBuild, currentBestBuild) {

//     let bufferScore = bufferEval(userBuild, currentBestBuild);
//     let healScore = healerEval(userBuild, currentBestBuild);
//     let dmgSore = dpsEval(userBuild, currentBestBuild);

//     return Math.floor((bufferScore) + (dmgSore));
// }
function shieldEval(userBuild, currentBestBuild) {
    if (userBuild.shield == 0) {
        return 100;
    }
    let buildShield = currentBestBuild.supportValues.shield;
    if (buildShield == 0) {
        buildShield = 1;
    }

    return Math.floor((userBuild.shield / buildShield) * 100);
}
// function shieldBufferEval(userBuild, currentBestBuild) {
//     let shieldScore = shieldEval(userBuild, currentBestBuild);
//     let bufferScore = bufferEval(userBuild, currentBestBuild);
//     return Math.floor((shieldScore) + (bufferScore));
// }
function shieldDpsEval(userBuild, currentBestBuild) {
    let shieldScore = shieldEval(userBuild, currentBestBuild);
    let dmgScore = dpsEval(userBuild, currentBestBuild);
    if(shieldScore == 0){
        return dmgScore;
    }
    return Math.floor((shieldScore * 0.6) + (dmgScore * 0.4));
}
// function shieldHealerEval(userBuild, currentBestBuild) {
//     let shieldScore = shieldEval(userBuild, currentBestBuild);
//     let healScore = healerEval(userBuild, currentBestBuild);
//     return Math.floor((shieldScore) + (healScore));
// }
