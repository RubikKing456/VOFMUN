// Countdown timer
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const targetDate = new Date('2025-12-07T08:00:00'); // Set your conference date here
    const now = new Date();
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (diff <= 0) {
        countdownElement.textContent = "Conference has begun!";
    } else {
        countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000); // update every second

// Mobile menu toggle 
const mobileMenuButton = document.querySelector('.md\\:hidden'); 
const mobileMenu = document.querySelector('.mobile-menu'); 

if (mobileMenuButton && mobileMenu) { 
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active'); 
    }); 
}