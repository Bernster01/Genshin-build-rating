function searchCharacters(input){
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
    if(numberOfCharacters === 0){
        document.getElementById("noResults").style.display = "block";
    }else{
        document.getElementById("noResults").style.display = "none";
    }
}
function searchWeapons(input){
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
    if(numberOfWeapons === 0){
        document.getElementById("noResults").style.display = "block";
    }else{
        document.getElementById("noResults").style.display = "none";
    }
}
function switchDisplay(target,type){
    if(target.style.display === "none"){
        target.style.display = type;
    }
    else{
        target.style.display = "none";
    }
    
}

function starterFunction(){
    document.getElementById("roleInput").addEventListener("change", function(){
        selectRole(this.value);
    });
    document.getElementById("endEarlyBtn").addEventListener("click", function(){
        endEarly=true;
    });
    validateAllCharacters();
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
document.addEventListener("DOMContentLoaded", starterFunction );