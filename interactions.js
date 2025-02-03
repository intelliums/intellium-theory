document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
    
    // Simulate content loading
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 600);
        initQuantumInteractions();
        initFAB();
    }, 1500);

    // Input validation
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', (e) => {
            if (e.target.id !== 'odds' && e.target.value < 0) {
                e.target.value = Math.abs(e.target.value);
            }
        });
    });
});

function initQuantumInteractions() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 
                'translateY(-8px) scale(1.03)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = '';
        });
    });
    
    document.querySelector('.glass-container').addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.result-card, .input-field');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x/rect.width}`);
            card.style.setProperty('--mouse-y', `${y/rect.height}`);
        });
    });
}

function initFAB() {
    const fabMenu = document.querySelector('.fab-menu');
    let isActive = false;
    
    fabMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        isActive = !isActive;
        fabMenu.classList.toggle('active', isActive);
    });
    
    document.addEventListener('click', () => {
        if(isActive) {
            fabMenu.classList.remove('active');
            isActive = false;
        }
    });
}

function showInfo(type) {
    const messages = {
        privacy: "Your data is 100% secure and private"
    };
    
    const evDisplay = document.getElementById('expected-value');
    const original = evDisplay.textContent;
    
    evDisplay.textContent = messages[type];
    evDisplay.style.color = '#007AFF';
    
    setTimeout(() => {
        evDisplay.textContent = original;
        evDisplay.style.color = '';
    }, 3000);
}
