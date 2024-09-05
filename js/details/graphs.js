let role = "";
function circleGraph(user, build) {
    //using chart.js
    let userCtx = document.getElementById('userGraph').getContext('2d');
    let buildCtx = document.getElementById('bestBuildGraph').getContext('2d');
    console.log(user);
    const userData = getData(user,true);
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
    const buildData = getData(build,true);
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
    const userDmg = user.dmg.totalDmg;
    const buildDmg = build.dmg.totalDmg;
    const userData = getData(user);
    const buildData = getData(build);
    let labels = userData.labels;
    let graphData = {
        labels: labels,
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
/**
    * Get the data for the graph
    * @param {Object} build - the build object
    * @param {Boolean} asPercentage - if the data should be in percentage (if left empty, it will be false)
    * @returns {Object} - the data for the graph
 */
function getData(build, asPercentage = false) {
    const colorData = {
        normalattack: {
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
        },
        chargedattack: {
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
        },
        plungingattack: {
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
        },
        elementalSkill: {
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
        },
        elementalburst: {
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
        },
        superconductDMG: {
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
        },
        overloadedDMG: {
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
        },
        electrochargedDMG: {
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
        },
        swirlDMG: {
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
        },
        burningDMG: {
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
        },
        bloomDMG: {
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
        },
        burgeoningDMG: {
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
        },
        hyperbloomDMG: {
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
        },



    };
    const total = build.dmg.totalDmg;
    //Check what dmg source to use
    let data = {labels:[], datasets:[],backgroundColor:[], borderColor:[]};
    if (build.dmg.sources.n) {
        data.datasets.push((asPercentage) ? build.dmg.sources.n/total*100: build.dmg.sources.n);
        data.labels.push('Normal Attack');
        data.backgroundColor.push(colorData.normalattack.backgroundColor);
        data.borderColor.push(colorData.normalattack.borderColor);
    }
    if (build.dmg.sources.c) {
        data.datasets.push((asPercentage) ? build.dmg.sources.c/total*100: build.dmg.sources.c);
        data.labels.push('Charged Attack');
        data.backgroundColor.push(colorData.chargedattack.backgroundColor);
        data.borderColor.push(colorData.chargedattack.borderColor);
    }
    if (build.dmg.sources.p) {
        data.datasets.push((asPercentage) ? build.dmg.sources.p/total*100: build.dmg.sources.p);
        data.labels.push('Plunging Attack');
        data.backgroundColor.push(colorData.plungingattack.backgroundColor);
        data.borderColor.push(colorData.plungingattack.borderColor);
    }
    if (build.dmg.sources.e) {
        data.datasets.push((asPercentage) ? build.dmg.sources.e/total*100: build.dmg.sources.e);
        data.labels.push('Elemental Skill');
        data.backgroundColor.push(colorData.elementalSkill.backgroundColor);
        data.borderColor.push(colorData.elementalSkill.borderColor);
    }
    if (build.dmg.sources.q) {
        data.datasets.push((asPercentage) ? build.dmg.sources.q/total*100: build.dmg.sources.q);
        data.labels.push('Elemental Burst');
        data.backgroundColor.push(colorData.elementalburst.backgroundColor);
        data.borderColor.push(colorData.elementalburst.borderColor);
    }
    if(build.dmg.sources.superconductDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.superconductDMG/total*100: build.dmg.sources.superconductDMG);
        data.labels.push('Superconduct DMG');
        data.backgroundColor.push(colorData.superconductDMG.backgroundColor);
        data.borderColor.push(colorData.superconductDMG.borderColor);

    }
    if(build.dmg.sources.overloadedDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.overloadedDMG/total*100: build.dmg.sources.overloadedDMG);
        data.labels.push('Overloaded DMG');
        data.backgroundColor.push(colorData.overloadedDMG.backgroundColor);
        data.borderColor.push(colorData.overloadedDMG.borderColor);
    }
    if(build.dmg.sources.electrochargedDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.electrochargedDMG/total*100: build.dmg.sources.electrochargedDMG);
        data.labels.push('Electrocharged DMG');
        data.backgroundColor.push(colorData.electrochargedDMG.backgroundColor);
        data.borderColor.push(colorData.electrochargedDMG.borderColor);
    }
    if(build.dmg.sources.bloomDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.bloomDMG/total*100: build.dmg.sources.bloomDMG);
        data.labels.push('Bloom DMG');
        data.backgroundColor.push(colorData.bloomDMG.backgroundColor);
        data.borderColor.push(colorData.bloomDMG.borderColor);
    }
    if(build.dmg.sources.burningDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.burningDMG/total*100: build.dmg.sources.burningDMG);
        data.labels.push('Burning DMG');
        data.backgroundColor.push(colorData.burningDMG.backgroundColor);
        data.borderColor.push(colorData.burningDMG.borderColor);
    }
    if(build.dmg.sources.hyperbloomDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.hyperbloomDMG/total*100: build.dmg.sources.hyperbloomDMG);
        data.labels.push('Hyperbloom DMG');
        data.backgroundColor.push(colorData.hyperbloomDMG.backgroundColor);
        data.borderColor.push(colorData.hyperbloomDMG.borderColor);
    }
    if(build.dmg.sources.burgeoningDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.burgeoningDMG/total*100: build.dmg.sources.burgeoningDMG);
        data.labels.push('Burgeoning DMG');
        data.backgroundColor.push(colorData.burgeoningDMG.backgroundColor);
        data.borderColor.push(colorData.burgeoningDMG.borderColor);
    }
    if(build.dmg.sources.swirlDMG){
        data.datasets.push((asPercentage) ? build.dmg.sources.swirlDMG/total*100: build.dmg.sources.swirlDMG);
        data.labels.push('Swirl DMG');
        data.backgroundColor.push(colorData.swirlDMG.backgroundColor);
        data.borderColor.push(colorData.swirlDMG.borderColor);
    }
    return data;
}
