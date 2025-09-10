// Get references to the form, email input field, and thank you message element
const contactForm = document.getElementById("contactForm")
const emailInput = document.getElementById("emailInput")
const thankyouMessage = document.getElementById("thankyouMessage")

// Function to show the thank you message by adding a CSS class
function showThankyouMessage() {
    thankyouMessage.classList.add("visible")
}

// Function to hide the thank you message by removing the CSS class
function hideThankyouMessage() {
    thankyouMessage.classList.remove("visible")
}

// Function to handle form submission
function registerEmail(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault()

    // Get the email address entered by the user
    const email = emailInput.value

    // Send the email to the server using a POST request
    fetch('https://formspree.io/f/mvojarqv', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email // Send email as JSON
        })
    })

    // Clear the form input fields
    contactForm.reset()

    // Show thank you message
    showThankyouMessage()

    // Hide thank you message after 3 seconds (3000 milliseconds)
    setTimeout(hideThankyouMessage, 3000)
}

// Add an event listener to handle form submission
contactForm.addEventListener("submit", registerEmail)

