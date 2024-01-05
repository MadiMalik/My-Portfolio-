// Register GSAP plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Window load event for fading out the loading overlay
window.addEventListener('load', () => {
    gsap.to("#loading-overlay", { duration: 1, opacity: 0, display: 'none' });
});



// Animate banner-left section
const bannerLeft = document.querySelector(".banner-left");
if (bannerLeft) {
    gsap.from(bannerLeft, {
        duration: 1,
        x: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: bannerLeft,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}



// Error handling
try {
    // Place all your animation logic here
} catch (error) {
    console.error("Animation error:", error);
}

// DOMContentLoaded event for animations that depend on the DOM being fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Banner Left Section Animations
    gsap.from('.banner-left .header-span', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power1.out'
    });

    // H1 Element Animation
    gsap.from('.banner-left .main-header', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power1.out',
        delay: 0.3
    });

    // Paragraph Element Animation
    gsap.from('.banner-left .subheading', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power1.out',
        delay: 0.6
    });

    // Button Elements Animation
    gsap.from('.banner-left .banner-buttons a', {
        duration: 0.8,
        x: (index) => index === 0 ? -50 : 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power1.out',
        delay: 0.9
    });
});
