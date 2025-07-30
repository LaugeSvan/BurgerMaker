// Define functions and variables at the top
function getBurgerId() {
    var loadBurgerId = prompt("Please enter the ID of the burger you want to load:");
    console.log("ID to load:", loadBurgerId);
}

let keyBuffer = [];

document.addEventListener('keydown', function(event) {
    // Only add printable characters
    if (event.key.length === 1) {
        keyBuffer.push(event.key);
    }
    // Keep buffer at reasonable length
    if (keyBuffer.length > 20) keyBuffer.shift();

    // Check for the desired word (case-insensitive)
    if (keyBuffer.join('').toLowerCase().includes('admin'.toLowerCase())) {
        keyBuffer = [];
        window.location.href = 'admin.html'; // Redirect to desired page
    }
});