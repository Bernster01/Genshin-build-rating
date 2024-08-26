
function searchCharacters(input) {
    const search = input.toLowerCase();
    const characters = document.querySelectorAll(".Character");
    let numberOfCharacters = 0;
    characters.forEach(function (element) {
        const name = element.title.toLowerCase();

        if (name.includes(search)) {
            element.style.display = "block";
            numberOfCharacters++;
        } else {
            element.style.display = "none";
        }
    });
    if (numberOfCharacters === 0) {
        document.getElementById("noResults").style.display = "block";
    } else {
        document.getElementById("noResults").style.display = "none";
    }
}
function searchWeapons(input) {
    const search = input.toLowerCase();
    const weapons = document.querySelectorAll(".Weapons");
    let numberOfWeapons = 0;
    weapons.forEach(function (element) {
        const name = element.title.toLowerCase();

        if (name.includes(search)) {
            element.style.display = "block";
            numberOfWeapons++;
        } else {
            element.style.display = "none";
        }
    });
    if(document.getElementById("noWeaponResults") === null){
        let html = `	<span id="noWeaponResults">Hm... seems nothing matched</span>`;
        document.getElementById("weaponIcons").insertAdjacentHTML("beforeend", html);
    }
    if (numberOfWeapons === 0) {
        document.getElementById("noWeaponResults").style.display = "block";
    } else {
        document.getElementById("noWeaponResults").style.display = "none";
    }
}
function switchDisplay(target, type) {
    if (target.style.display === "none") {
        target.style.display = type;
    }
    else {
        target.style.display = "none";
    }

}

function starterFunction() {
    document.getElementById("roleInput").addEventListener("change", function () {
        selectRole(this.value);
    });
    document.getElementById("endEarlyBtn").addEventListener("click", function () {
        endEarly = true;
    });
    document.getElementById("hasDeepwoodInParty").addEventListener("change", function () {
        if (this.checked) {
            partyHasDeepwoodMemories = true;
        }
        else {
            partyHasDeepwoodMemories = false;
        }
    }); 
    document.getElementById("partyGivesShield").addEventListener("change", function () {
        if (this.checked) {
            hasShield = true;
        }
        else {
            hasShield = false;
        }
    });
    // validateAllCharacters();
    updateArtifactBefore();
    //Add event listener to the card that scales the card to fit screen
    window.addEventListener("resize", function () {
        let container = document.getElementById("result-container");
        if (container != null || container != undefined) {
            let windowWidth = window.innerWidth;
            if(windowWidth < 1920){

            
            container.style.transform = `scale(${windowWidth / 1920})`;
            }
            else
            {
                container.style.transform = "scale(1)";
            }
        }
    });
    //Get JSON from ../data/currentBestBuild.json
    fetch("../data/currentBestBuild.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // bestBuild = data;
        });
}
function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj || typeof obj === 'function') return obj; // Handle primitives and functions
    if (hash.has(obj)) return hash.get(obj); // Handle cyclic references

    let result;
    try {
        result = new obj.constructor(); // Create a new instance of the object's constructor
    } catch (e) {
        result = Object.create(Object.getPrototypeOf(obj)); // Fallback for objects without a constructor
    }

    hash.set(obj, result);

    if (obj instanceof Map) {
        obj.forEach((value, key) => result.set(deepClone(key, hash), deepClone(value, hash)));
    } else if (obj instanceof Set) {
        obj.forEach(value => result.add(deepClone(value, hash)));
    } else if (obj instanceof Array) {
        result = obj.map(item => deepClone(item, hash));
    } else {
        for (let key of Reflect.ownKeys(obj)) {
            result[key] = deepClone(obj[key], hash);
        }
    }

    return result;
}

document.addEventListener("DOMContentLoaded", starterFunction);