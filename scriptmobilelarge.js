// define the elements I will be grabbing from html file
const carouselImages = document.querySelector('.carousel-images')
const carouselButtons = document.querySelectorAll('button');
const numberOfImages = document.querySelectorAll('.carousel-images div').length;

// on refresh, imageIndex represents the images, and it starts at 1
let imageIndex = 1;
// on refresh, wait for button to be pressed to begin translate
let translateX = 0;
// let imageSizes = 1280;

// add clicking functionality to button and implement .forEach for button to toggle through pictures
    carouselButtons.forEach(button => {
        button.addEventListener('click', (buttonSelect) => {
            if (buttonSelect.target.id === 'previous') {
                // if image carousel is not at starting position, go to previous image
                if (imageIndex !== 1) {
                imageIndex--;
                translateX += 580;
                }
            } 
            // if image carousel is not at the end, go to next image
            else {
                if (imageIndex !== numberOfImages) {
                    imageIndex++;
                    translateX -= 580;
                }
            }
        // translate pictures when button is pressed
          carouselImages.style.transform = `translateX(${translateX}px)`;
        })
    });