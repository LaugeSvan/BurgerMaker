// Define functions and variables at the top
function getBurgerId() {
    var loadBurgerId = prompt("!WIP! Please enter the ID of the burger you want to load:");
    console.log("ID to load:", loadBurgerId);
}

function saveBurger() {
    alert("This feature is not implemented yet. Please check back later!");
    console.log("Save function called, but not implemented.");
}

let keyBuffer = [];

console.log("Is user on mobile? " + window.matchMedia("(max-width: 999px)").matches);
// Check if the viewport is less than 1000 pixels wide
if (window.matchMedia("(max-width: 999px)").matches) {
    alert("You are on a mobile device. In the maker, no mobile support is in mind. Please use a desktop browser for the best experience.");
    document.addEventListener("DOMContentLoaded", function() {
        const mobileDiv = document.querySelector(".mobile-cred");
        if (mobileDiv) {
            mobileDiv.style.display = "block";
        }
    });
}

document.addEventListener('keydown', function(event) {
    // Only add printable characters
    if (event.key.length === 1) {
        keyBuffer.push(event.key);
    }
    // Keep buffer at reasonable length
    if (keyBuffer.length > 20) keyBuffer.shift();

    // Check for the desired word (case-insensitive)
    if (keyBuffer.join('').toLowerCase().includes('credits'.toLowerCase())) {
        keyBuffer = [];
        window.location.href = '/credits/'; // Redirect to desired page
    }
});