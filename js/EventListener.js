document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('CharacterContainer');
    if (!container.contains(e.target)) {
        container.style.visibility = "hidden";
		document.getElementById('SelectCharcter').style.visibility = "visible";
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
 
  
