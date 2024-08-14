function selectSupportingElement(element, obj, type) {
  if (type) {
    let doc = document.getElementById('supportingElement');

    let doc2 = document.getElementById("SelectedSupportingElement").innerText = "";
    obj.removeAttribute("id");
    obj.style.width = "fit-content";
    supportingElement = null;
    obj.style.height = "85px";
    obj.setAttribute("onclick", "selectSupportingElement('" + element + "',this,false)");
    obj.remove();
    doc.appendChild(obj);


  } else {
    let doc;
    let doc2 = document.getElementById("CurrentlySelectedSupportingElement");
    if (document.getElementById("CurrentlySelected") != null) {
      doc = document.getElementById("CurrentlySelected");

      doc.style.width = "fit-content";

      doc.setAttribute("onclick", "selectSupportingElement('" + element + "',this,false)");
      doc.style.height = "85px";
      doc.removeAttribute("id");
      obj.parentElement.appendChild(doc);
    }


    document.getElementById("SelectedSupportingElement").innerText = element;
    obj.setAttribute("id", "CurrentlySelected");
    obj.setAttribute("onclick", "selectSupportingElement('" + element + "',this,true)");
    obj.remove();
    doc2.appendChild(obj);
    obj.style.width = "92px";
    obj.style.height = "130px";
    supportingElement = element;
  }
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