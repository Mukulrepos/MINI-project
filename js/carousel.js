// Adjust the carousel interval speed
const carousel = document.querySelector('#carouselExampleCaptions');
const bootstrapCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000, // Speed in milliseconds (3000 ms = 3 seconds)
    wrap: true      // Loop the slides
});

// Adjust the carousel slide height based on window resize
function adjustCarouselHeight() {
    const carouselItems = document.querySelectorAll('#carouselExampleCaptions .carousel-item');
    carouselItems.forEach(item => {
        item.style.height = `${window.innerHeight * 0.6}px`; // 60% of window height
    });
}

window.addEventListener('resize', adjustCarouselHeight);
adjustCarouselHeight();
