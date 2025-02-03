document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const checkoutItems = document.getElementById('checkout-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const checkoutForm = document.getElementById('checkout-form');

    // Populate checkout items
    function displayCheckoutItems() {
        checkoutItems.innerHTML = '';
        let subtotal = 0;

        for (const [id, item] of Object.entries(cart)) {
            subtotal += item.price * item.quantity;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item flex justify-between items-center p-3 border-b';
            itemElement.innerHTML = `
                <div class="flex-1">
                    <h3 class="font-medium">${item.name}</h3>
                    <p class="text-sm text-gray-600">Quantity: ${item.quantity}</p>
                </div>
                <div class="text-right">
                    <p class="font-medium">Rs ${item.price * item.quantity}</p>
                    <p class="text-sm text-gray-600">Rs ${item.price} each</p>
                </div>
            `;
            checkoutItems.appendChild(itemElement);
        }

        // Update totals
        subtotalElement.textContent = `Rs ${subtotal}`;
        totalElement.textContent = `Rs ${subtotal + 100}`; // Adding shipping cost
    }

    // Handle form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(checkoutForm);
        const orderData = {
            customer: {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                city: formData.get('city'),
                postalCode: formData.get('postalCode')
            },
            items: cart,
            total: parseFloat(totalElement.textContent.replace('Rs ', '')),
            orderDate: new Date().toISOString()
        };

        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Clear cart
        localStorage.removeItem('cart');

        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Order Placed Successfully!',
            text: 'Thank you for your purchase. Your order has been confirmed.',
            showConfirmButton: true,
            confirmButtonText: 'Continue Shopping',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'product.html';
            }
        });
    });

    // Initialize checkout page
    displayCheckoutItems();
});