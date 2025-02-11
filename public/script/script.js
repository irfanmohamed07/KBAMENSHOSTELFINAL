function toggleDropdown() {
    var dropdown = document.getElementById('dropdown-menu');
    var isVisible = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';
  
    if (!isVisible) {
        var rect = dropdown.getBoundingClientRect();
        var viewportWidth = window.innerWidth;
  
        if (rect.left) {
            dropdown.style.left = 'auto';
            dropdown.style.right = 0;
        }  
    }
  }

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        
        // Ensure there are slides to display
        if (slides.length === 0) {
            console.error("No slides found!");
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block"; // Show the current slide

        setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }
});
