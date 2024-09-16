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
    if (userBuild.character.energyRecharge() < userBuild.character.energyOffset) {
        let percentMissing = userBuild.character.energyRecharge() / userBuild.character.energyOffset;
        if (percentMissing > .2) {
            percentMissing = .2;
        }
        userScore = Math.floor(userScore * (1-(percentMissing)));
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

    switch (userBuild.character.supportType) {
        case "Healer":
            switch (userBuild.character.supportType2) {
                case "Sub-Dps":
                    return healerSubDpsEval(userBuild, currentBestBuild);
                case "shield":
                    return healerShieldEval(userBuild, currentBestBuild);
                default:
                    return healerEval(userBuild, currentBestBuild);
            }
        case "ATKBooster":
            switch (userBuild.character.supportType2) {
                case "Shield":
                    return bufferShieldEval(userBuild, currentBestBuild);
                case "Sub-dps":
                    return bufferDpsEval(userBuild, currentBestBuild);
                case "Healer":
                    return bufferHealerEval(userBuild, currentBestBuild);
                default:
                    return bufferEval(userBuild, currentBestBuild);
            }

        case "Sub-dps":
            return dpsEval(userBuild, currentBestBuild);
        case "Shield":
            switch (userBuild.character.supportType2) {
                case "Buffer":
                    return shieldBufferEval(userBuild, currentBestBuild);
                case "Sub-dps":
                    return shieldDpsEval(userBuild, currentBestBuild);
                case "Healer":
                    return shieldHealerEval(userBuild, currentBestBuild);
                default:
                    return shieldEval(userBuild, currentBestBuild);
            }
        case "ElementalBuffer":
            switch (userBuild.character.supportType2) {
                case "Sub-dps":
                    return bufferDpsEval(userBuild, currentBestBuild);
                case "Healer":
                    return bufferHealerEval(userBuild, currentBestBuild);
                case "Shield":
                    return bufferShieldEval(userBuild, currentBestBuild);
                default:
                    return bufferEval(userBuild, currentBestBuild);
            }
        }
}


function healerEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.healing / currentBestBuild.supportValues.healing) * 100);
}
function healerSubDpsEval(userBuild, currentBestBuild) {
    let healScore = healerEval(userBuild, currentBestBuild);
    let dmgScore = dpsEval(userBuild, currentBestBuild);
    return Math.floor((healScore * .75) + (dmgScore * .25));
}
function healerShieldEval(userBuild, currentBestBuild) {
    let healScore = healerEval(userBuild, currentBestBuild);
    let shieldScore = shieldEval(userBuild, currentBestBuild);
    return Math.floor((healScore * .75) + (shieldScore * .25));
}
function bufferEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.buff / currentBestBuild.supportValues.buff) * 100);
}
function bufferShieldEval(userBuild, currentBestBuild) {
    let bufferScore = bufferEval(userBuild, currentBestBuild);
    let shieldScore = shieldEval(userBuild, currentBestBuild);
    return Math.floor((bufferScore * .75) + (shieldScore * .25));
}
function bufferDpsEval(userBuild, currentBestBuild) {
    let bufferScore = bufferEval(userBuild, currentBestBuild);
    let dmgScore = dpsEval(userBuild, currentBestBuild);
    return Math.floor((bufferScore * .75) + (dmgScore * .25));
}
function bufferHealerEval(userBuild, currentBestBuild) {

    let bufferScore = bufferEval(userBuild, currentBestBuild);
    let healScore = healerEval(userBuild, currentBestBuild);
    let dmgSore = dpsEval(userBuild, currentBestBuild);

    return Math.floor((bufferScore * .75) + (healScore * .15) + (dmgSore * .10));
}
function shieldEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.shield / currentBestBuild.supportValues.shield) * 100);
}
function shieldBufferEval(userBuild, currentBestBuild) {
    let shieldScore = shieldEval(userBuild, currentBestBuild);
    let bufferScore = bufferEval(userBuild, currentBestBuild);
    return Math.floor((shieldScore * .75) + (bufferScore * .25));
}
function shieldDpsEval(userBuild, currentBestBuild) {
    let shieldScore = shieldEval(userBuild, currentBestBuild);
    let dmgScore = dpsEval(userBuild, currentBestBuild);
    return Math.floor((shieldScore * .75) + (dmgScore * .25));
}
function shieldHealerEval(userBuild, currentBestBuild) {
    let shieldScore = shieldEval(userBuild, currentBestBuild);
    let healScore = healerEval(userBuild, currentBestBuild);
    return Math.floor((shieldScore * .75) + (healScore * .25));
}
