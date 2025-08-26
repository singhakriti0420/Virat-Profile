// js for toggle menu
var MenuItems = document.getElementsByID("MenuItems");
MenuItems.style.maxheight = "0px";

function menutoggle() {
  if (MenuItems.style.maxheight == "0px") {
    MenuItems.style.maxheight == "200px"
  }
  else
  {
    MenuItems.style.maxheight == "0px"
  }
}


    // account page

// Show Welcome Popup on Page Load
window.onload = function() {
  document.getElementById("welcomePopup").style.display = "flex";
};

// Close Welcome Popup
function closePopup() {
  document.getElementById("welcomePopup").style.display = "none";
}

// Toggle Between Login and Register Forms
function toggleForms() {
  let regForm = document.getElementById("registerForm");
  let loginForm = document.getElementById("loginForm");

  if (regForm.style.display === "none") {
      regForm.style.display = "block";
      loginForm.style.display = "none";
  } else {
      regForm.style.display = "none";
      loginForm.style.display = "block";
  }
}

// Register Function
function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (name === "" || email === "" || password === "") {
      alert("All fields are required!");
      return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  let existingUser = users.find(user => user.email === email);
  if (existingUser) {
      alert("Email already registered! Please login.");
      return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! You can now log in.");
  toggleForms();
}

// Login Function
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
      alert("Please enter both email and password!");
      return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(user => user.email === email && user.password === password);

  if (user) {
      alert(`Welcome back, ${user.name}!`);
  } else {
      alert("Invalid email or password. Please try again.");
  }
}

                // about page   


// Animated Text Effect
const text = "We promise to deliver excellence in every aluminum profile we craft!";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("animatedText").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}

window.onload = typeText;

                //  cart page

// Load cart & wishlist from localStorage
document.addEventListener("DOMContentLoaded", function () {
  displayCart();
  displayWishlist();
});

// Sample products (Can be dynamically fetched)
const products = [
  { id: 1, name: "Sliding Window - Kitchen", price: 5000 },
  { id: 2, name: "Sliding Window - Hall", price: 7000 },
  { id: 3, name: "Wardrobe", price: 12000 }
];

// Add to Cart
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find(p => p.id === productId);
  if (product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
  }
}

// Display Cart
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cartList");
  let cartTotal = document.getElementById("cartTotal");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((product, index) => {
      let li = document.createElement("li");
      li.innerHTML = `${product.name} - ₹${product.price} 
          <button onclick="removeFromCart(${index})">Remove</button>`;
      cartList.appendChild(li);
      total += product.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

// Remove from Cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Clear Cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

// Add to Wishlist
function addToWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let product = products.find(p => p.id === productId);
  if (product) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${product.name} added to wishlist!`);
  }
}

// Display Wishlist
function displayWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let wishlistContainer = document.getElementById("wishlist");
  wishlistContainer.innerHTML = "";

  wishlist.forEach((product, index) => {
      let li = document.createElement("li");
      li.innerHTML = `${product.name} 
          <button onclick="removeFromWishlist(${index})">Remove</button>`;
      wishlistContainer.appendChild(li);
  });
}

// Remove from Wishlist
function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  displayWishlist();
}
   

                // Payment page
  
// Load cart & wishlist from localStorage
document.addEventListener("DOMContentLoaded", function () {
  displayCart();
  displayWishlist();
});

// Sample products (Can be dynamically fetched)
const product = [
  { id: 1, name: "Sliding Window - Kitchen", price: 5000 },
  { id: 2, name: "Sliding Window - Hall", price: 7000 },
  { id: 3, name: "Wardrobe", price: 12000 }
];

// Add to Cart
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find(p => p.id === productId);
  if (product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
  }
}

// Display Cart
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cartList");
  let cartTotal = document.getElementById("cartTotal");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((product, index) => {
      let li = document.createElement("li");
      li.innerHTML = `${product.name} - ₹${product.price} 
          <button onclick="removeFromCart(${index})">Remove</button>`;
      cartList.appendChild(li);
      total += product.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

// Remove from Cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Clear Cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

// Add to Wishlist
function addToWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let product = products.find(p => p.id === productId);
  if (product) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${product.name} added to wishlist!`);
  }
}

// Display Wishlist
function displayWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let wishlistContainer = document.getElementById("wishlist");
  wishlistContainer.innerHTML = "";

  wishlist.forEach((product, index) => {
      let li = document.createElement("li");
      li.innerHTML = `${product.name} 
          <button onclick="removeFromWishlist(${index})">Remove</button>`;
      wishlistContainer.appendChild(li);
  });
}

// Remove from Wishlist
function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  displayWishlist();
}
