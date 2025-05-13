function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ product, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product + " added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.product} - $${item.price}</p>`;
        total += item.price;
    });

    document.getElementById("total").innerText = total.toFixed(2);
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Auto-load cart if cart.html is open
if (window.location.pathname.includes("cart.html")) {
    loadCart();
}
