function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to handle form submission (for demonstration purposes)
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Form submitted');
        });
    });

    // Example cart functionality
    const removeButtons = document.querySelectorAll('.cart-item button');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.cart-item').remove();
            alert('Item removed');
        });
    });
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.product-grid button').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.product-unique-1, .product-unique-2, .product-unique-3, .product-unique-4, .product-unique-5, .product-unique-6');
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.replace('Price: $', ''));

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        window.open('RICECART.html', '_blank');
    });
});
