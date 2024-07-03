document.addEventListener("DOMContentLoaded", function() {
    const countElement = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const addToCartButton = document.getElementById('add-to-cart');
    
    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        countElement.textContent = count;
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countElement.textContent = count;
        }
    });

    addToCartButton.addEventListener('click', () => {
        alert(`Added ${count} item(s) to cart.`);
    });
});

