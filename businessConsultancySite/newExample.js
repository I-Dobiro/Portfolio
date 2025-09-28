const contactForm = document.getElementById("contactForm")
const emailInput = document.getElementById("emailInput")
const thankyouMessage = document.getElementById("thankyouMessage")

function showThankyouMessage() {
    thankyouMessage.classList.add("visible")
}

function hideThankyouMessage() {
    thankyouMessage.classList.remove("visible")
}

function registerEmail(event) {
    event.preventDefault()

    const email = emailInput.value
    fetch('https://formspree.io/f/mvojarqv', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName,
            role,
            companyName,
            email,
        })
    })

    contactForm.reset()
    showThankyouMessage()
    setTimeout(hideThankyouMessage, 3000)
}

contactForm.addEventListener("submit", registerEmail);







document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});