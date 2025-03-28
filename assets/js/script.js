// Get slider elements
const prevButton = document.querySelector('.control_prev');
const nextButton = document.querySelector('.control_next');
const sliderList = document.querySelector('.header-slider ul');

// Get the total number of images in the slider
const images = document.querySelectorAll('.header-slider ul li');
let currentIndex = 0;

// Function to go to the next slide
function goToNextSlide() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

// Function to go to the previous slide
function goToPreviousSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateSlider();
}

// Update the slider view by changing the transform property
function updateSlider() {
    const offset = -currentIndex * 100; // Calculate the offset for the current slide
    sliderList.style.transform = `translateX(${offset}%)`;
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPreviousSlide);
