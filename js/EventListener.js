document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('CharacterContainer');
    var container2 = document.getElementById('Weapons');
    if(!container.contains(e.target)) {
        container.style.visibility = "hidden";
		document.getElementById('SelectCharcter').style.visibility = "visible";
    }
    if(!container2.contains(e.target)) {
      container2.style.visibility = "hidden";
     
  }
});



//By ToddWebDev at https://codepen.io/toddwebdev/pen/yExKoj (slightly modifed)
const slider = document.querySelector('.CharacterBox');
let isDown = false;
let startX;
let scrollLeft;
let update = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  dragging = false;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  dragging = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  dragging = false;
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX)
  slider.scrollLeft = scrollLeft - walk;
  dragging = true;
  
  

  });
function selectSupportingElement(element,obj){
let doc;
let doc2 = document.getElementById("CurrentlySelectedSupportingElement");
if(document.getElementById("CurrentlySelected")!=null){
  doc = document.getElementById("CurrentlySelected");

  doc.style.width = "fit-content";

  doc.style.height = "85px";
  doc.removeAttribute("id");
  obj.parentElement.appendChild(doc);
}


document.getElementById("SelectedSupportingElement").innerText = element;
obj.setAttribute("id","CurrentlySelected");
obj.remove();
doc2.appendChild(obj);
obj.style.width = "92px";
obj.style.height = "130px";
supportingElement = element;
}

function selectRole(value){
  value = Number.parseInt(value);
  switch(value){
    case 0:
      role = "Support";
      break;
    case 1:
      role = "Dps";
      break;
  }
  
}