let changeLogInfo;
let currentNumberOfChanges = 1;
let maxChanges = false;
async function insertChangesToChangelog() {
    const changeLog = document.getElementById('changelog');
    const json = await fetch('./data/changes.json').then(response => response.json());
    json.reverse();
    changeLogInfo = json;
    //reverse the array so the latest changes are on top
    updateChangelog();

}
function updateChangelog(numberOfChanges = 5) {
    const changeLog = document.getElementById('changelog');
    changeLog.innerHTML = '';
    for (let i = 0; i < numberOfChanges; i++) {
        if (i >= changeLogInfo.length) {
            maxChanges = true;
            break
        };
        const change = changeLogInfo[i];
        const changeElement = document.createElement('div');
        changeElement.className = 'change';
        changeElement.innerHTML = `<h3>${change.date}</h3><p>Version: ${change.version}</p><h4>What's changed?</h4><p>${change.description}</p>`;
        changeLog.appendChild(changeElement);
        currentNumberOfChanges++;
    }
    if (maxChanges) {
        const noMoreChanges = document.createElement('p');
        noMoreChanges.innerHTML = 'No more changes to show';
        changeLog.appendChild(noMoreChanges);
    } else {
        const seeMoreBtn = document.createElement('button');
        seeMoreBtn.innerHTML = 'See more changes';
        seeMoreBtn.className = 'seeMoreBtn';
        seeMoreBtn.addEventListener('click', function () {
            updateChangelog(currentNumberOfChanges + 5);
            this.style.display = 'none';
        });
        changeLog.appendChild(seeMoreBtn);
    }
}
insertChangesToChangelog();