// Typewriter effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Usage: add data-typing attribute to element
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('[data-typing]');
    if (typingElement) {
        const text = typingElement.getAttribute('data-typing');
        typeWriter(typingElement, text, 80);
    }
});