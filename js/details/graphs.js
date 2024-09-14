let role = "";
function circleGraph(user, build) {
    //using chart.js
    let userCtx = document.getElementById('userGraph').getContext('2d');
    let buildCtx = document.getElementById('bestBuildGraph').getContext('2d');
    console.log(user);
    const userData = getData(user, true);
    let userGraph = new Chart(userCtx, {
        type: 'pie',
        data: {
            labels: userData.labels,
            datasets: [{
                label: 'Damage Source Percentage',
                data: userData.datasets,

                backgroundColor: userData.backgroundColor,
                borderColor: userData.borderColor,
                borderWidth: 2,
                hoverOffset: 35,
                hoverBorderColor: 'rgba(0,0,0,1)',
                hoverBorderWidth: 5,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Your Build'
            }
        }
    });
    const buildData = getData(build, true);
    let buildGraph = new Chart(buildCtx, {
        type: 'pie',
        data: {
            labels: buildData.labels,
            datasets: [{
                label: 'Damage Source Percentage',
                data: buildData.datasets,

                backgroundColor: buildData.backgroundColor,
                borderColor: buildData.borderColor,
                borderWidth: 2,
                hoverOffset: 35,
                hoverBorderColor: 'rgba(0,0,0,1)',
                hoverBorderWidth: 5,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Best Build'
            }
        }
    });

    return { userGraph, buildGraph };
}
function barGraphDamage(user, build) {
    const graph = document.getElementById('damageGraph').getContext('2d');
    let userDmg = [user.dmg.totalDmg];
    let buildDmg = [build.dmg.totalDmg];
    const userData = getData(user);
    const buildData = getData(build);
    let labels = ["Total Damage"];
    labels = labels.concat(userData.labels);
    userDmg = userDmg.concat(userData.datasets);
    buildDmg = buildDmg.concat(buildData.datasets);
    let graphData = {
        labels: labels,
        datasets: [
            {
                label: "You",
                data: userDmg,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: "Our build",
                data: buildDmg,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
    let dmgGraph = new Chart(graph, {
        type: 'bar',
        data: graphData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    return dmgGraph;
}
function barGraphSupport(user, build) {
    const graph = document.getElementById('supportGraph').getContext('2d');
    let userData = getSupportData(user);
    let buildData = getSupportData(build);
    console.log(userData);
    let graphData = {
        labels: userData.labels,
        datasets: [
            {
                label: "You",
                data: userData.datasets,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: "Our build",
                data: buildData.datasets,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
    let supportGraph = new Chart(graph, {
        type: 'bar',
        data: graphData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    return supportGraph;
}
/**
    * Get the data for the graph
    * @param {Object} build - the build object
    * @param {Boolean} asPercentage - if the data should be in percentage (if left empty, it will be false)
    * @returns {Object} - the data for the graph
 */
function getData(build, asPercentage = false) {
    const colorData = {
        normalattack: {
            backgroundColor: 'rgba(217, 217, 217, 0.5)',
            borderColor: 'rgb(217, 217, 217)',
        },
        chargedattack: {
            backgroundColor: 'rgba(230, 230, 0, 0.5)',
            borderColor: 'rgb(230, 230, 0)',
        },
        plungingattack: {
            backgroundColor: 'rgba(153, 204, 255, 0.5)',
            borderColor: 'rgb(153, 204, 255)',
        },
        elementalSkill: {
            backgroundColor: 'rgb(255, 153, 204, 0.5)',
            borderColor: 'rgb(255, 153, 204)',
        },
        elementalburst: {
            backgroundColor: 'rgb(255, 204, 153, 0.5)',
            borderColor: 'rgb(255, 204, 153)',
        },
        superconductDMG: {
            backgroundColor: 'rgba(153, 153, 255, 0.5)',
            borderColor: 'rgb(153, 153, 255)',
        },
        overloadDMG: {
            backgroundColor: 'rgba(255, 0, 102, 0.5)',
            borderColor: 'rgb(255, 0, 102)',
        },
        electrochargedDMG: {
            backgroundColor: 'rgba(92, 0, 230, 0.5)',
            borderColor: 'rgb(92, 0, 230)',
        },
        swirlDMG: {
            backgroundColor: 'rgb(128, 255, 191, 0.5)',
            borderColor: 'rgb(128, 255, 191)',
        },
        burningDMG: {
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgb(255, 0, 0)',
        },
        bloomDMG: {
            backgroundColor: 'rgb(0, 204, 102, 0.5)',
            borderColor: 'rgb(0, 204, 102)',
        },
        burgeoningDMG: {
            backgroundColor: 'rgba(153, 51, 0, 0.5)',
            borderColor: 'rgb(153, 51, 0)',
        },
        hyperbloomDMG: {
            backgroundColor: 'rgba(153, 51, 153, 0.5)',
            borderColor: 'rgb(153, 51, 153)',
        },



    };
    const total = build.dmg.totalDmg;
    //Check what dmg source to use
    let data = { labels: [], datasets: [], backgroundColor: [], borderColor: [] };
    if (build.dmg.sources.n) {
        data.datasets.push((asPercentage) ? build.dmg.sources.n / total * 100 : build.dmg.sources.n);
        data.labels.push('Normal Attack');
        data.backgroundColor.push(colorData.normalattack.backgroundColor);
        data.borderColor.push(colorData.normalattack.borderColor);
    }
    if (build.dmg.sources.c) {
        data.datasets.push((asPercentage) ? build.dmg.sources.c / total * 100 : build.dmg.sources.c);
        data.labels.push('Charged Attack');
        data.backgroundColor.push(colorData.chargedattack.backgroundColor);
        data.borderColor.push(colorData.chargedattack.borderColor);
    }
    if (build.dmg.sources.p) {
        data.datasets.push((asPercentage) ? build.dmg.sources.p / total * 100 : build.dmg.sources.p);
        data.labels.push('Plunging Attack');
        data.backgroundColor.push(colorData.plungingattack.backgroundColor);
        data.borderColor.push(colorData.plungingattack.borderColor);
    }
    if (build.dmg.sources.e) {
        data.datasets.push((asPercentage) ? build.dmg.sources.e / total * 100 : build.dmg.sources.e);
        data.labels.push('Elemental Skill');
        data.backgroundColor.push(colorData.elementalSkill.backgroundColor);
        data.borderColor.push(colorData.elementalSkill.borderColor);
    }
    if (build.dmg.sources.q) {
        data.datasets.push((asPercentage) ? build.dmg.sources.q / total * 100 : build.dmg.sources.q);
        data.labels.push('Elemental Burst');
        data.backgroundColor.push(colorData.elementalburst.backgroundColor);
        data.borderColor.push(colorData.elementalburst.borderColor);
    }
    if (build.dmg.sources.superconductDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.superconductDMG / total * 100 : build.dmg.sources.superconductDMG);
        data.labels.push('Superconduct DMG');
        data.backgroundColor.push(colorData.superconductDMG.backgroundColor);
        data.borderColor.push(colorData.superconductDMG.borderColor);

    }
    if (build.dmg.sources.overloadDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.overloadDMG / total * 100 : build.dmg.sources.overloadDMG);
        data.labels.push('Overload DMG');
        data.backgroundColor.push(colorData.overloadDMG.backgroundColor);
        data.borderColor.push(colorData.overloadDMG.borderColor);
    }
    if (build.dmg.sources.electrochargedDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.electrochargedDMG / total * 100 : build.dmg.sources.electrochargedDMG);
        data.labels.push('Electrocharged DMG');
        data.backgroundColor.push(colorData.electrochargedDMG.backgroundColor);
        data.borderColor.push(colorData.electrochargedDMG.borderColor);
    }
    if (build.dmg.sources.bloomDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.bloomDMG / total * 100 : build.dmg.sources.bloomDMG);
        data.labels.push('Bloom DMG');
        data.backgroundColor.push(colorData.bloomDMG.backgroundColor);
        data.borderColor.push(colorData.bloomDMG.borderColor);
    }
    if (build.dmg.sources.burningDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.burningDMG / total * 100 : build.dmg.sources.burningDMG);
        data.labels.push('Burning DMG');
        data.backgroundColor.push(colorData.burningDMG.backgroundColor);
        data.borderColor.push(colorData.burningDMG.borderColor);
    }
    if (build.dmg.sources.hyperbloomDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.hyperbloomDMG / total * 100 : build.dmg.sources.hyperbloomDMG);
        data.labels.push('Hyperbloom DMG');
        data.backgroundColor.push(colorData.hyperbloomDMG.backgroundColor);
        data.borderColor.push(colorData.hyperbloomDMG.borderColor);
    }
    if (build.dmg.sources.burgeoningDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.burgeoningDMG / total * 100 : build.dmg.sources.burgeoningDMG);
        data.labels.push('Burgeoning DMG');
        data.backgroundColor.push(colorData.burgeoningDMG.backgroundColor);
        data.borderColor.push(colorData.burgeoningDMG.borderColor);
    }
    if (build.dmg.sources.swirlDMG) {
        data.datasets.push((asPercentage) ? build.dmg.sources.swirlDMG / total * 100 : build.dmg.sources.swirlDMG);
        data.labels.push('Swirl DMG');
        data.backgroundColor.push(colorData.swirlDMG.backgroundColor);
        data.borderColor.push(colorData.swirlDMG.borderColor);
    }
    return data;
}

function getSupportData(build){
    //Check supportValues.healing .shield and .buff
    let data = { labels: [], datasets: [], backgroundColor: [], borderColor: [] };
    if (build.supportValues.healing) {
        data.datasets.push(build.supportValues.healing);
        data.labels.push('Healing');
        data.backgroundColor.push('rgba(255, 99, 132, 0.5)');
        data.borderColor.push('rgb(255, 99, 132)');
    }
    if (build.supportValues.shield) {
        data.datasets.push(build.supportValues.shield);
        data.labels.push('Shield');
        data.backgroundColor.push('rgba(230, 230, 0, 0.5)');
        data.borderColor.push('rgb(230, 230, 0)');
    }
    if (build.supportValues.buff) {
        data.datasets.push(build.supportValues.buff);
        data.labels.push('Buff');
        data.backgroundColor.push('rgba(153, 204, 255, 0.5)');
        data.borderColor.push('rgb(153, 204, 255)');
    }
    return data;
}
