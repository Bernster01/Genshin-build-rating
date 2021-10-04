
function CreateCharacter(name, src, element) {
    this.name = name;
    this.src = src;
    this.element = element;
    return this;
}
let Amber = {
name: "Amber",
src: "Characters/Amber.png",
element: "PyroCharacter"
}
let Ayaka ={
name: "Ayaka",
src: "Characters/Ayaka.png",
element: "CryoCharacter"
}
const AllCharacters = [
    Amber, Ayaka
];
function LoadCharacters(){
    var doc = document.getElementById('CharacterBox');
    console.log(doc);
    console.log(AllCharacters);
    for(let index = 0; index < AllCharacters.length; index++) {
        
       var htmlCode = "<div class='Character' title='"+AllCharacters[index].name+"' onmouseup='selectCharacter(this)'> <img src='"+AllCharacters[index].src+"' alt='"+AllCharacters[index].name+"'> <div class='"+AllCharacters[index].element+"'><span>"+AllCharacters[index].name+"</span></div></div>";
        doc.insertAdjacentHTML("beforeend",htmlCode);
      
    }
}



