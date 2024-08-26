let role = "";
function circleGraph(user, build) {
    //using chart.js
    let userCtx = document.getElementById('userGraph').getContext('2d');
    let buildCtx = document.getElementById('bestBuildGraph').getContext('2d');
    console.log(user);
    const userData = {
        normalattack: user.dmg.sources.n ? Math.floor((user.dmg.sources.n/user.dmg.totalDmg)*100) : 0,
        chargedattack: user.dmg.sources.c ? Math.floor((user.dmg.sources.c/user.dmg.totalDmg)*100) : 0,
        plungingattack: user.dmg.sources.p ? Math.floor((user.dmg.sources.p/user.dmg.totalDmg)*100) : 0,
        elementalSkill: user.dmg.sources.e ? Math.floor((user.dmg.sources.e/user.dmg.totalDmg)*100) : 0,
        elementalburst: user.dmg.sources.q ? Math.floor((user.dmg.sources.q/user.dmg.totalDmg)*100) : 0,
    };
    let userGraph = new Chart(userCtx, {
        type: 'pie',
        data: {
            labels: ['Normal Attack', 'Charged Attack', 'Plunging Attack', 'Elemental Skill', 'Elemental Burst'],
            datasets: [{
                label: 'Damage Source Percentage',
                data: [userData.normalattack, userData.chargedattack, userData.plungingattack, userData.elementalSkill, userData.elementalburst],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
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
    const buildData = {
        normalattack: build.dmg.sources.n ? Math.floor((build.dmg.sources.n/build.dmg.totalDmg)*100) : 0,
        chargedattack: build.dmg.sources.c ? Math.floor((build.dmg.sources.c/build.dmg.totalDmg)*100) : 0,
        plungingattack: build.dmg.sources.p ? Math.floor((build.dmg.sources.p/build.dmg.totalDmg)*100) : 0,
        elementalSkill: build.dmg.sources.e ? Math.floor((build.dmg.sources.e/build.dmg.totalDmg)*100) : 0,
        elementalburst: build.dmg.sources.q ? Math.floor((build.dmg.sources.q/build.dmg.totalDmg)*100) : 0,
    };
    let buildGraph = new Chart(buildCtx, {
        type: 'pie',
        data: {
            labels: ['Normal Attack', 'Charged Attack', 'Plunging Attack', 'Elemental Skill', 'Elemental Burst'],
            datasets: [{
                label: 'Damage Source Percentage',
                data: [buildData.normalattack, buildData.chargedattack, buildData.plungingattack, buildData.elementalSkill, buildData.elementalburst],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
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
function barGraphDamage(user, build){
    let graph = document.getElementById('damageGraph').getContext('2d');
    let userDmg = user.dmg.totalDmg;
    let buildDmg = build.dmg.totalDmg;
    let labels = ["Total Damage","Normal Attack","Charged Attack","Plunging Attack","Elemental Skill","Elemental Burst"];
    let userData = [userDmg, user.dmg.sources.n, user.dmg.sources.c, user.dmg.sources.p, user.dmg.sources.e, user.dmg.sources.q];
    let buildData = [buildDmg, build.dmg.sources.n, build.dmg.sources.c, build.dmg.sources.p, build.dmg.sources.e, build.dmg.sources.q];
    let graphData = {
        labels: labels,
        datasets: [
            {
                label: "You",
                data: userData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: "Our build",
                data: buildData,
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

