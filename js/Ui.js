function stopPropagation() {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
}

function UpdateArtifact(element, type) {
    if (type === true) {
        if (element.innerHTML === "0") {
            element.innerHTML = "";
        }
    } //Check if fit contains anythign other then numbers
    if (Number.isNaN(Number(element.innerHTML))) {
        element.innerHTML = element.innerHTML.replace(/[^0-9]/g, '');
        setUserFocusForEditableSpan(element);
    }
    //Check for leading zeros
    if (element.innerHTML.length > 1 && element.innerHTML.charAt(0) === "0") {
        element.innerHTML = element.innerHTML.slice(1);
        setUserFocusForEditableSpan(element);
    }
    //Check if value is greater then artifact stat max value
    let artifactType = element.parentElement.childNodes[1].dataset.type;
    let maxValue = mainStatValues[artifactType];
    if (element.innerHTML > maxValue) {
        element.innerHTML = maxValue;

        setUserFocusForEditableSpan(element);
    }

}
function setUserFocusForEditableSpan(element) {
    let range = document.createRange();
    let sel = window.getSelection();
    range.setStart(element.childNodes[0], element.innerHTML.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}
function getArtifactSetList(artifact) {
    let list = "";
    setsList.forEach(element => {
        //Insert a \ before any ' in element to prevent the string from being split
        let safeElement = element.replace(/'/g, "\\'");
        element = safeElement.replace(/ /g, "_");
        list += `<img class="artifactSet"  onclick="selectArtifactSet('${safeElement}',this,'${artifact}')" title="${element}" alt="${element}" src="Assets/Artifacts/${element}_${artifact}.webp" />`
    });
    return list;
}

function getArtifactStatsList(artifact, type) {
    let list = "";
    artifactTypes[artifact][type].forEach(element => {
        list += `<div onclick="selectStatType(this)" data-type="${element}"title="${artifactTypeAtrributes[element].title}"><img src="${artifactTypeAtrributes[element].icon}"/><span>${artifactTypeAtrributes[element].displayName}</span></div>`;
    });
    return list;
}

function selectArtifactSet(element, target, type) {
    //Insert a \ before any ' in element to prevent the string from being split
    element = element.replace(/'/g, "\\'");
    element = element.replace(/ /g, "_");
    let obj = target.parentElement.parentElement;
    obj.style.backgroundImage = `url("Assets/Artifacts/${element}_${type}.webp")`;
    obj.dataset.set = element;
    target.parentElement.style.display = "none";
}

function selectStatType(element) {
    let type = artifactTypeAtrributes[element.dataset.type];

    element.parentElement.parentElement.querySelectorAll(".artifact_icon").forEach(target => {

        target.src = type.icon;
        target.title = type.title;
        target.dataset.type = element.dataset.type;
    });
    element.parentElement.parentElement.querySelectorAll(".artifact_percent").forEach(target => {
        showOrHidePercentIcon(target, element.dataset.type);
    });
    element.parentElement.style.display = "none";
}

function showOrHidePercentIcon(target, type) {
    if (artifactTypeAtrributes[type].percent === true) {
        target.style.display = "inline";
    } else {
        target.style.display = "none";
    }
}

function showHide(targetId) {
    let target = document.getElementById(targetId);
    if (target.style.display === "none") {
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }
}

function addEventlistenerArtifactList(elementId) {
    let element = document.getElementById(elementId);
    //Add event listener to the artifact list that closes the artifact list when the user clicks outside of it

    document.addEventListener("click", function (e) {
        if (element.contains(e.target)) {
            return;
        }
        element.style.display = "none";
        document.removeEventListener("click", arguments.callee);
    });


}

function close(e) {
    e.style.display = "none";
}

const artifactTypeAtrributes = {
    "HP%": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Health.webp",
        displayName: "HP%",
        title: "HP%",
    },
    "HPflat": {
        percent: false,
        icon: "Assets/Icons/Icon_Attribute_Health.webp",
        displayName: "HP",
        title: "Flat HP",
    },
    "ATK%": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Attack.webp",
        displayName: "ATK%",
        title: "ATK%",
    },
    "ATKflat": {
        percent: false,
        icon: "Assets/Icons/Icon_Attribute_Attack.webp",
        displayName: "ATK",
        title: "Flat ATK",
    },
    "DEF%": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Defense.webp",
        displayName: "DEF%",
        title: "DEF%",
    },
    "DEFflat": {
        percent: false,
        icon: "Assets/Icons/Icon_Attribute_Defense.webp",
        displayName: "DEF",
        title: "Flat DEF",
    },
    "CritRate": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Critical_Hit.webp",
        displayName: "Crit Rate",
        title: "Crit Rate",
    },
    "CritDMG": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Critical_Damage.webp",
        displayName: "Crit DMG",
        title: "Crit DMG",
    },
    "HealingBonus": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Healing.webp",
        displayName: "Healing Bonus",
        title: "Healing Bonus",
    },
    "PyroDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Element_Pyro.svg",
        displayName: "PyroDMGBonus",
        title: "PyroDMGBonus",

    },
    "HydroDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Element_Hydro.svg",
        displayName: "HydroDMGBonus",
        title: "HydroDMGBonus",
    },
    "GeoDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Element_Geo.svg",
        displayName: "GeoDMGBonus",
        title: "GeoDMGBonus",
    },
    "AnemoDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Element_Anemo.svg",
        displayName: "AnemoDMGBonus",
        title: "AnemoDMGBonus",
    },
    "ElectroDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Element_Electro.svg",
        displayName: "ElectroDMGBonus",
        title: "ElectroDMGBonus",
    },
    "DendroDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Element_Dendro.svg",
        displayName: "DendroDMGBonus",
        title: "DendroDMGBonus",
    },
    "CryoDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Element_Cryo.svg",
        displayName: "CryoDMGBonus",
        title: "CryoDMGBonus",
    },
    "PhysicalDMGBonus": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Physical.svg",
        displayName: "PhysicalDMGBonus",
        title: "PhysicalDMGBonus",
    },
    "EnergyRecharge": {
        percent: true,
        icon: "Assets/Icons/Icon_Attribute_Energy_Recharge.webp",
        displayName: "Energy Recharge",
        title: "Energy Recharge",
    },
    "ElementalMastery": {
        percent: false,
        icon: "Assets/Icons/Icon_Attribute_Elemental_Mastery.webp",
        displayName: "Elemental Mastery",
        title: "Elemental Mastery",
    }
}
const artifactTypes = {
    "Flower": {
        mainstat: ["HPflat"],
        substats: ["HP%", "ATKflat", "ATK%", "DEFflat", "DEF%", "CritRate", "CritDMG", "EnergyRecharge", "ElementalMastery"]
    },
    "Plume": {
        mainstat: ["ATKflat"],
        substats: ["HPflat", "HP%", "ATK%", "DEFflat", "DEF%", "CritRate", "CritDMG", "EnergyRecharge", "ElementalMastery"]
    },
    "Sands": {
        mainstat: ["HP%", "ATK%", "DEF%", "ElementalMastery", "EnergyRecharge"],
        substats: ["HPflat", "ATKflat", "DEFflat", "CritRate", "CritDMG", "HP%", "ATK%", "DEF%", "ElementalMastery", "EnergyRecharge"]
    },
    "Goblet": {
        mainstat: ["HP%", "ATK%", "DEF%", "ElementalMastery", "PyroDMGBonus", "HydroDMGBonus", "GeoDMGBonus", "AnemoDMGBonus", "ElectroDMGBonus", "DendroDMGBonus", "CryoDMGBonus", "PhysicalDMGBonus"],
        substats: ["HPflat", "HP%", "ATKflat", "ATK%", "DEFflat", "DEF%", "CritRate", "CritDMG", "EnergyRecharge", "ElementalMastery"]
    },
    "Circlet": {
        mainstat: ["CritRate", "CritDMG", "HP%", "ATK%", "DEF%", "ElementalMastery", "HealingBonus"],
        substats: ["HPflat", "HP%", "ATKflat", "ATK%", "DEFflat", "DEF%", "CritRate", "CritDMG", "EnergyRecharge", "ElementalMastery"]
    },
}

function updateArtifactBefore() {
    let artifacts = document.querySelectorAll(".artifact");
    //change the ::before content of the artifact to the element's id
    artifacts.forEach(element => {
        let style = document.createElement('style');
        style.innerHTML = `#${element.id}:before {content: "${capitalizeFirstLetter(element.id)}" !important;}`;
        document.head.appendChild(style);

    });
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
