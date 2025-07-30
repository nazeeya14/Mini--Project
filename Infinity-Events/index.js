// (Optional) Add JavaScript for carousel functionality, 
// smooth scrolling, or other dynamic behavior.

// Example: Automatic carousel scrolling (basic)
const carousel = document.querySelector('.image-carousel');
let scrollAmount = 0;

setInterval(() => {
  scrollAmount += carousel.offsetWidth; // Scroll one image width
  carousel.scroll({
    left: scrollAmount,
    behavior: 'smooth' // For smooth transition
  });

  // Reset scrollAmount to loop the carousel
  if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
    scrollAmount = 0;
  }
}, 3000); // Change image every 3 seconds
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    const heartIcon = item.querySelector('.heart-icon');
    const likeCount = item.querySelector('.like-count');
    let likes = 0;

    heartIcon.addEventListener('click', () => {
        heartIcon.classList.toggle('liked'); // Toggle liked class

        if (heartIcon.classList.contains('liked')) {
            likes++;
        } else {
            likes--;
        }

        likeCount.textContent = likes; // Update like count
    });
});



// script.js

const priceItems = document.querySelectorAll('.price-item');

priceItems.forEach(item => {
    const button = item.querySelector('button');

    button.addEventListener('click', () => {
        // Handle "Check Out" button click here
        // You can redirect to a checkout page, display a message, etc.

        // Example: Display an alert message
        

        // Or, redirect to a URL:
        // window.location.href = "checkout.html"; // Replace with your checkout URL
    });
});

