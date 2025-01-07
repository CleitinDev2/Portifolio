let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
let testimonialInterval;

function changeTestimonial() {
    testimonials[currentTestimonialIndex].classList.remove('active');
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    testimonials[currentTestimonialIndex].classList.add('active');
}

function startTestimonialLoop() {
    testimonialInterval = setInterval(changeTestimonial, 5000);
}

document.querySelector('.testimonials-container').addEventListener('mouseover', function() {
    clearInterval(testimonialInterval);
});

document.querySelector('.testimonials-container').addEventListener('mouseout', function() {
    startTestimonialLoop();
});

window.onload = startTestimonialLoop;

function showDescription(tech) {
    const allDescriptions = document.querySelectorAll('.tech-description');
    allDescriptions.forEach(description => {
        description.classList.remove('active');
    });

    const description = document.getElementById('tech-' + tech);
    if (description) {
        description.classList.add('active');
    }
}