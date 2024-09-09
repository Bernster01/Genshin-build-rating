function selectSupportingElement(element, obj) {
  //Check if the element is already selected
  const selectedElement = obj.classList.contains("selectedElement");
  const selectedContainer = document.getElementById("CurrentlySelectedSupportingElement");
  const unSelectedContainer = document.getElementById("supportingElement");
  
  //If the selected element is clicked
  if (selectedElement) {
    obj.classList.remove("selectedElement");
    //Append the selectedElement to the container
    unSelectedContainer.appendChild(obj);
    supportingElement = "noElement";
    return;
  }
  //If new element is selected
  //Add the selectedElement class to the clicked element
  obj.classList.add("selectedElement");

  supportingElement = element;
  //Append the selectedElement to the container
  selectedContainer.appendChild(obj);
 
  
}

function selectRole(value) {
  value = Number.parseInt(value);
  switch (value) {
    case 1:
      role = "Dps";
      break;
    case 2:
      role = "Support";
      break;
   
  }
}
let elementalResonance = ["", ""];
function selectResonance(element, object) {
 
  if (elementalResonance[0] == element) {
    elementalResonance[0] = "";
    object.classList.remove("elementalResonance");
  }
  else if (elementalResonance[1] == element) {
    elementalResonance[1] = "";
    object.classList.remove("elementalResonance");
  }
  else {
    if (elementalResonance[0] == "" || elementalResonance[1] == "")
      object.classList.add("elementalResonance");
    if (elementalResonance[0] == "") {
      elementalResonance[0] = element;
    } else if (elementalResonance[1] == "") {

      elementalResonance[1] = element;
    }

  }
}