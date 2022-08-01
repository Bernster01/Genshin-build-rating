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
function switchDisplay(target,type){
    if(target.style.display === "none"){
        target.style.display = type;
    }
    else{
        target.style.display = "none";
    }
    
}