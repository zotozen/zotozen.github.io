document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('button');
    const mobileMenu = document.querySelector('.hidden.md\\:hidden');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('faq-active');
        });
    });

    // Page navigation
    const pages = {
        'contact': document.getElementById('contact-page'),
        'store': document.getElementById('store-page'),
        'faq': document.getElementById('faq-page'),
        'art': document.getElementById('art-page')
    };

    function showPage(pageId) {
        // Hide all pages
        Object.values(pages).forEach(page => {
            if (page) page.classList.add('hidden');
        });
        
        // Show selected page
        const selectedPage = pages[pageId];
        if (selectedPage) {
            selectedPage.classList.remove('hidden');
            window.scrollTo(0, 0);
        }
    }

    // Contact form handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Shopping cart functionality
    let cart = [];
    const addToCartButtons = document.querySelectorAll('.product-card button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('span').textContent;
            
            cart.push({
                name: productName,
                price: productPrice
            });
            
            alert(`${productName} added to cart!`);
        });
    });

});
