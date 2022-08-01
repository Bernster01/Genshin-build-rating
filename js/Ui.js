
const artifactSlider = document.getElementById("dragableArtifacts");
let mouseStartArtifactSliderX = 0;

artifactSlider.addEventListener("mousedown", function (e) {
    artifactSlider.classList.add("active");
    artifactSlider.style.cursor = "grabbing";
    const artifactContainer = document.getElementById("artifactContainer");
    mouseStartArtifactSliderX = e.clientX
});
artifactSlider.addEventListener("mouseup", function (e) {
    artifactSlider.classList.remove("active");
    artifactSlider.style.cursor = "grab";
    moveArtifactsSliderToClosestArtifact();
});
artifactSlider.addEventListener("mouseleave", function (e) {
    artifactSlider.classList.remove("active");
    artifactSlider.style.cursor = "grab";
    
    moveArtifactsSliderToClosestArtifact();
});
artifactSlider.addEventListener("mousemove", function (event) {
    
    
    if (artifactSlider.classList.contains("active")) {
        event.preventDefault();
        const artifactContainer = document.getElementById("artifactContainer");
        const artifactSliderLeft = artifactSlider.getBoundingClientRect().left - artifactContainer.getBoundingClientRect().left;
        const mouseX = event.clientX;
        //move artifact slider while inside the artifact container bounds taking into account the starting position of the mouse relative to the artifact container and the artifact slider
        artifactSlider.style.left = artifactSliderLeft+(mouseX - mouseStartArtifactSliderX) + "px";
        
        mouseStartArtifactSliderX = mouseX;

        artifactSlider.childNodes.forEach(function (element) {
            //if is div
            if (element.nodeName === "DIV") {
                setYOffset(element, artifactContainer);
            }
        });

    }
});
let yOffsetParam = 0.0075;
function setYOffset(element, container){
    let y = yOffset(element, container);
    element.style.marginTop = -y + "px";
    element.style.opacity = getOpacityFromYOffset(y);
    element.style.boxShadow = getBoxShadowFromYOffset(y);
}
function yOffset(element, container) {
let distance = Math.abs(getDistanceFromMiddle(element,container));
// return Math.pow(distance,2) * yOffsetParam;
return Math.sqrt(distance/yOffsetParam);
}
function getOpacityFromYOffset(y) {
    //return a value between 0 and 1 for opacity based on y offset from the middle of the artifact container
    return 1 - y / (artifactContainer.clientHeight *1.5);

}
function getBoxShadowFromYOffset(y) {
    let size = 10/y;
    return `0px  ${size}rem ${size}rem 0px rgba(0,0,0,0.5)`;

}
function getDistanceFromMiddle(element,container){
    const elementX = (element.getBoundingClientRect().left - container.getBoundingClientRect().left) + element.clientWidth / 2;
    const distance = elementX - container.clientWidth / 2;
    return distance;
}
function getElementXrelativeToArtifactContainer(element) {
    const artifactContainer = document.getElementById("artifactContainer");
    const elementX = (element.getBoundingClientRect().left - artifactContainer.getBoundingClientRect().left) + element.clientWidth / 2;
    return elementX;
}
function findArtifactsClosestToMiddleOfContainer() {
    const artifactContainer = document.getElementById("artifactContainer");
    const artifacts = document.querySelectorAll(".artifact");
    let closestArtifact = {artifact:undefined, distance: 0};
    artifacts.forEach(function (element) {
        const elementX = getElementXrelativeToArtifactContainer(element);
   
        const distance = Math.abs(elementX - artifactContainer.clientWidth / 2);
        if (closestArtifact.artifact === undefined) {
            closestArtifact.artifact = element;
            closestArtifact.distance = distance;
        } else {
            if (distance < closestArtifact.distance) {
                closestArtifact.artifact = element;
                closestArtifact.distance = distance;
            }
        }
    });
    
    return closestArtifact;
}
let artifactAnimation = undefined;
let artifactAnimationWait = undefined;
function moveArtifactsSliderToClosestArtifact() {
    const closestArtifact = findArtifactsClosestToMiddleOfContainer();
    const artifactSlider = document.getElementById("dragableArtifacts");
    const artifactContainer = document.getElementById("artifactContainer");
    let artifactX = getClientLeftRelativeToContainer(closestArtifact.artifact, artifactSlider);
    //move artifact slider so that the artifact is centered in the artifact container
    let targetValue = artifactSlider.clientWidth - artifactX
    //move to the targetValue as a smooth animation for 1s vanilla js
    let currentValue = parseFloat(artifactSlider.style.left);
    //Remove the current setInterval if it exists¨
    
    clearInterval(artifactAnimation);
    clearTimeout(artifactAnimationWait);
    
    artifactAnimationWait= setTimeout(function () {
        artifactAnimation = setInterval(function () {
        currentValue += (targetValue - currentValue) / 5;
        artifactSlider.style.left = currentValue + "px";
        artifactSlider.childNodes.forEach(function (element) {
            //if is div
            if (element.nodeName === "DIV") {
                setYOffset(element, artifactContainer);
            }
        });
        if (Math.abs(targetValue - currentValue) < 1) {
            clearInterval(artifactAnimation);

        }
    }, 10);
    }, 250);

}
function getClientLeftRelativeToContainer(element, container) {
    const elementX = (element.getBoundingClientRect().left - container.getBoundingClientRect().left) + element.clientWidth / 2;
    return elementX;
}
