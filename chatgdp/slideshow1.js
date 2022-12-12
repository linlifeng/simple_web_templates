// Set the initial display styles for the slides
var slides = document.querySelectorAll(".slide");
for (var i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// Set the initial slide index to 0 (the first slide)
var slideIndex = 0;

// Show the first slide
slides[slideIndex].style.display = "block";

// Define a function to advance the slide show to the next slide
function nextSlide() {
  // Hide the current slide
  slides[slideIndex].style.display = "none";

  // Increment the slide index
  slideIndex++;

  // If the slide index is greater than the total number of slides, reset it to 0
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Show the next slide
  slides[slideIndex].style.display = "block";
}

// Define a function to move the slide show to the previous slide
function prevSlide() {
  // Hide the current slide
  slides[slideIndex].style.display = "none";

  // Decrement the slide index
  slideIndex--;

  // If the slide index is less than 0, set it to the last slide in the slide show
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Show the previous slide
  slides[slideIndex].style.display = "block";
}

// Define a function to start the slide show
function startSlideshow() {
  // Set the interval to call the "nextSlide" function every 5 seconds
  setInterval(nextSlide, 5000);
}

// Start the slide show
startSlideshow();

