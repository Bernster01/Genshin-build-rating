function EvalBuilds(userBuild, currentBestBuild, role) {
    let userScore = 0;
    switch (role) {
        case "Dps":
            userScore = DpsEval(userBuild, currentBestBuild);
            break;
        case "Support":
            userScore = SupportEval(userBuild, currentBestBuild);
            break;
    }


    return userScore;
}
function DpsEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.dmg / currentBestBuild.dmg) * 100);

}
function SupportEval(userBuild, currentBestBuild) {

    if (userBuild.character.supportType2 == null || userBuild.character.supportType2 == undefined) {
        userBuild.character.supportType2 = "null";

    }

    switch (userBuild.character.supportType) {
        case "Healer":
            switch (userBuild.character.supportType2) {
                case "Sub-Dps":
                    return HealerSubDpsEval(userBuild, currentBestBuild);
                case "shield":
                    return HealerShieldEval(userBuild, currentBestBuild);
                default:
                    return HealerEval(userBuild, currentBestBuild);
            }
        case "ATKBooster":
            switch (userBuild.character.supportType2) {
                case "Shield":
                    return BufferShieldEval(userBuild, currentBestBuild);
                case "Sub-dps":
                    return BufferDpsEval(userBuild, currentBestBuild);
                case "Healer":
                    return BufferHealerEval(userBuild, currentBestBuild);
                default:
                    return BufferEval(userBuild, currentBestBuild);
            }

        case "Sub-dps":
            return DpsEval(userBuild, currentBestBuild);
        case "Shield":
            switch (userBuild.character.supportType2) {
                case "Buffer":
                    return ShieldBufferEval(userBuild, currentBestBuild);
                case "Sub-dps":
                    return ShieldDpsEval(userBuild, currentBestBuild);
                case "Healer":
                    return ShieldHealerEval(userBuild, currentBestBuild);
                default:
                    return ShieldEval(userBuild, currentBestBuild);
            }
    }
}


function HealerEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.healing / currentBestBuild.healing) * 100);
}
function HealerSubDpsEval(userBuild, currentBestBuild) {
    let healScore = HealerEval(userBuild, currentBestBuild);
    let dmgScore = DpsEval(userBuild, currentBestBuild);
    return Math.floor((healScore * .75) + (dmgScore * .25));
}
function HealerShieldEval(userBuild, currentBestBuild) {
    let healScore = HealerEval(userBuild, currentBestBuild);
    let shieldScore = ShieldEval(userBuild, currentBestBuild);
    return Math.floor((healScore * .75) + (shieldScore * .25));
}
function BufferEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.buff / currentBestBuild.buff) * 100);
}
function BufferShieldEval(userBuild, currentBestBuild) {
    let bufferScore = BufferEval(userBuild, currentBestBuild);
    let shieldScore = ShieldEval(userBuild, currentBestBuild);
    return Math.floor((bufferScore * .75) + (shieldScore * .25));
}
function BufferDpsEval(userBuild, currentBestBuild) {
    let bufferScore = BufferEval(userBuild, currentBestBuild);
    let dmgScore = DpsEval(userBuild, currentBestBuild);
    return Math.floor((bufferScore * .75) + (dmgScore * .25));
}
function BufferHealerEval(userBuild, currentBestBuild) {
    
    let bufferScore = BufferEval(userBuild, currentBestBuild);
    let healScore = HealerEval(userBuild, currentBestBuild);
    let dmgSore = DpsEval(userBuild, currentBestBuild);
    
    return Math.floor((bufferScore * .75) + (healScore * .15)+ (dmgSore * .10));
}
function ShieldEval(userBuild, currentBestBuild) {
    return Math.floor((userBuild.shield / currentBestBuild.shield) * 100);
}
function ShieldBufferEval(userBuild, currentBestBuild) {
    let shieldScore = ShieldEval(userBuild, currentBestBuild);
    let bufferScore = bufferEval(userBuild, currentBestBuild);
    return Math.floor((shieldScore * .75) + (bufferScore * .25));
}
function ShieldDpsEval(userBuild, currentBestBuild) {
    let shieldScore = shieldEval(userBuild, currentBestBuild);
    let dmgScore = DpsEval(userBuild, currentBestBuild);
    return Math.floor((shieldScore * .75) + (dmgScore * .25));
}
function ShieldHealerEval(userBuild, currentBestBuild) {
    let shieldScore = ShieldEval(userBuild, currentBestBuild);
    let healScore = HealerEval(userBuild, currentBestBuild);
    return Math.floor((shieldScore * .75) + (healScore * .25));
}
