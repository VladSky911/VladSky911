// footer-year.js

// Function to dynamically update the copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright'); // Assuming there's an element with id 'copyright'
    copyrightElement.textContent = `© ${currentYear} Your Company Name`; // Replace with your company name
}

// Call the function on page load
window.onload = updateCopyrightYear;