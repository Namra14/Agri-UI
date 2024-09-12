let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const maxScroll = 500; // Set your maximum scroll value here (adjust based on your design)

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Limit scrolling to a maximum value
    if (value > maxScroll) {
        value = maxScroll;
    }

    // Apply parallax effect only up to the maximum scroll value
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});
