let pageElements = Array.from(document.querySelectorAll('.scroll-animation'))
let smallerElements = Array.from(document.querySelectorAll('.scroll-headers'))

window.addEventListener('scroll', scanElements)

window.addEventListener('scroll', scanElementsAgain)

function scanElementsAgain(){
    smallerElements.forEach(element => {
        if(isVisible(element)){
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })
}

function scanElements(){

    pageElements.forEach(element => {
        if(isVisible(element)){
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })
}

function isVisible(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -300;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}