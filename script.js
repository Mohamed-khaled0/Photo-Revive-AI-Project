document.getElementById('burger-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});



document.getElementById('scrollToUpload').addEventListener('click', function() {
    document.getElementById('upload-section').scrollIntoView({
        behavior: 'smooth'
    });
});


// Add this script to handle the toggle functionality:
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const showMoreButton = document.getElementById('show-more');
    const moreFaqs = document.getElementById('more-faqs');
    
    // Initially show only the first 5 FAQ items
    faqItems.forEach((item, index) => {
        if (index >= 5) {
            item.classList.add('hidden');
        }
    });

    // Toggle functionality for FAQ questions
    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        questionButton.addEventListener('click', () => {
            const isVisible = !answerDiv.classList.contains('hidden');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.classList.add('hidden');
                answer.previousElementSibling.querySelector('.faq-icon').classList.remove('rotate-180');
            });

            // Open the clicked answer if it was not already open
            if (!isVisible) {
                answerDiv.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });

    // Show More button functionality
    showMoreButton.addEventListener('click', () => {
        if (moreFaqs.classList.contains('hidden')) {
            moreFaqs.classList.remove('hidden');
            showMoreButton.textContent = 'Show Less';
        } else {
            moreFaqs.classList.add('hidden');
            showMoreButton.textContent = 'Show More';
        }
    });
});
// Get the button element
const scrollToTopButton = document.getElementById('scroll-to-top');

// Show or hide the button depending on scroll position
window.addEventListener('scroll', function() {
    // Show the button if the user scrolls down 100 pixels or more
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        // Hide the button if near the top of the page
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});