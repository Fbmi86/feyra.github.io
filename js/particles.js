// Particle background effect
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${left}%;
            bottom: -10px;
            animation: float-up ${duration}s linear infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
        `;
        
        container.appendChild(particle);
    }
}

// Add keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-110vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', createParticles);