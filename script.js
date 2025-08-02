// Define functions and variables at the top
let bunsDiv = document.querySelector(".buns");
let pattiesDiv = document.querySelector(".patties");
let condimentsDiv = document.querySelector(".condiments");
let meatDiv = document.querySelector(".meat");
let greensDiv = document.querySelector(".greens");
let extrasDiv = document.querySelector(".extras");

const buns = ["Sesame~","Whole Wheat~","Gluten-Free~","Brioche","Chili Cheddar","Black Charcoal~","Oat~"];
const patties = ["Beef","Chicken","Veggie~","Lamb","Impossible~","Turkey","Spicy Chorizo","Portobello Mushroom~"];
const meat = ["Bacon","Ham","Prosciutto","Pulled Pork","Fried Chicken Strips","Chili Beef"];
const greens = ["Lettuce~","Spinach~","Arugula~","Tomato~","Red Onion~","Cucumber Slices~","Bell Peppers~"];
const condiments = ["Ketchup~","Mustard~","Mayo","Spicy Mustard~","Chipotle Sauce","BBQ Sauce","Sriracha~","Truffle Aioli"];
const extras = ["Caramelized Onions~","Grilled Zucchini~","Coleslaw","Onion Rings","Mozzarella Sticks","Jalapeño Poppers","Cheese","Fried Egg","Pickled Jalapeños~"];
// Create elements for each ingredient and append them to the respective divs

buns.forEach(value=>{
  const currentElement = document.createElement("div");
  currentElement.innerHTML = value;
  currentElement.classList.add("ingredient");
  bunsDiv.appendChild(currentElement);
})

patties.forEach(value=>{
  const currentElement = document.createElement("div");
  currentElement.innerHTML = value;
  currentElement.classList.add("ingredient");
  pattiesDiv.appendChild(currentElement);
})

condiments.forEach(value=>{
  const currentElement = document.createElement("div");
  currentElement.innerHTML = value;
  currentElement.classList.add("ingredient");
  condimentsDiv.appendChild(currentElement);
});

meat.forEach(value=>{
  const currentElement = document.createElement("div");
  currentElement.innerHTML = value;
  currentElement.classList.add("ingredient");
  meatDiv.appendChild(currentElement);
});

greens.forEach(value=>{
  const currentElement = document.createElement("div");
  currentElement.innerHTML = value;
  currentElement.classList.add("ingredient");
  greensDiv.appendChild(currentElement);
});

extras.forEach(value=>{
  const currentElement = document.createElement("div");
  currentElement.innerHTML = value;
  currentElement.classList.add("ingredient");
  extrasDiv.appendChild(currentElement);
});

function setupIngredientAlerts() {
  const allIngredients = document.querySelectorAll(".ingredient");

  allIngredients.forEach(ingredient => {
    ingredient.addEventListener("click", () => {
      const name = ingredient.textContent;
      if (name.includes("~")) {
        alert(`You clicked: ${name.replace("~", "")}! Note: ${name.replace("~", "")} is vegan!`);
        console.log(`veganIng.${name.replace("~", "")}`);
      } else {
        alert(`You clicked: ${name}`);
        console.log(`nonVeganIng.${name}`);
      }
      // Optionally, you can add more functionality here, like adding the ingredient to a burger
    });
  });
}

// Call this function after creating and appending all ingredient elements
setupIngredientAlerts();

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