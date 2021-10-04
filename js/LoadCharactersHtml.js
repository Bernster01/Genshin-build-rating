function LoadCharacters(){
    var doc = document.getElementById('CharacterBox');
    for(let index = 0; index < AllCharacters.length; index++) {
        
       let htmlCode = "<div class='Character' title='"+AllCharacters[index].name+"' onmouseup='selectCharacter(this)'> <img src='"+AllCharacters[index].src+"' alt='"+AllCharacters[index].name+"'> <div class='"+AllCharacters[index].element+"'><span>"+AllCharacters[index].name+"</span></div></div>";
        doc.insertAdjacentHTML("beforeend",htmlCode);
      
    }
}



