// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get all carousel items
    const carouselItems = document.querySelectorAll(".carousel-item");

    // Initialize index for tracking the current slide
    let currentIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        // Hide the current slide
        carouselItems[currentIndex].classList.remove("active");

        // Move to the next slide (loop back to the first slide if at the end)
        currentIndex = (currentIndex + 1) % carouselItems.length;

        // Show the next slide
        carouselItems[currentIndex].classList.add("active");
    }

    // Automatically advance to the next slide every 5 seconds (adjust as needed)
    setInterval(showNextSlide, 5000);
});