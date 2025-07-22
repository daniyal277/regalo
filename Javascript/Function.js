document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarItems = document.querySelector('.NavbarItems');

    if (mobileMenuBtn && navbarItems) {
        mobileMenuBtn.addEventListener('click', function () {
            navbarItems.classList.toggle('active');
        });
    }

    // Product filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productContainers = document.querySelectorAll('.product-container');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category').toLowerCase();

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category')?.toLowerCase();
                if (category === 'all' || cardCategory === category) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });

            productContainers.forEach(container => {
                const visibleCards = container.querySelectorAll('.product-card:not([style*="display: none"])');
                container.style.display = visibleCards.length > 0 ? 'flex' : 'none';
                container.offsetHeight;
            });
        });
    });

    // Quantity adjustment functionality
    const quantityInput = document.querySelector('.qty-box input');
    const decreaseBtn = document.querySelector('.qty-box button:first-child');
    const increaseBtn = document.querySelector('.qty-box button:last-child');

    if (quantityInput && decreaseBtn && increaseBtn) {
        decreaseBtn.addEventListener('click', function () {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });

        increaseBtn.addEventListener('click', function () {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
    }

    // Add to Cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            const quantity = document.querySelector('.qty-box input').value;
            alert(`Added ${quantity} Casio F-91W-1 to cart!`);
        });
    }
});