// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countSpan = document.getElementById('count');
    const errorDiv = document.getElementById('error');
    const clearButton = document.getElementById('clear');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');

    let count = 1;

    function updateDisplay() {
        countSpan.innerText = count;
        if (count === 0) {
            clearButton.style.display = 'none';
            decrementButton.disabled = true;
            errorDiv.style.display = 'block';
        } else {
            clearButton.style.display = 'block';
            decrementButton.disabled = false;
            errorDiv.style.display = 'none';
        }
    }

    incrementButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
        }
        updateDisplay();
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });

    // Initialize display on load
    updateDisplay();
});
