// =========================
// WHATSAPP ORDER
// =========================

const phone = "919214211171";


// =========================
// CART
// =========================

let cart = [];


// Add item to cart
function addToCart(item, price) {

    const existingItem = cart.find(
        product => product.name === item
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: item,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    // Open cart
    openCart();
}


// Update cart display
function updateCart() {
    const cartCount = document.getElementById("cartCount");
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
cartCount.innerText = totalItems;

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty 🛒
            </p>
        `;

        cartTotal.innerText = "0";
        return;
    }


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price * item.quantity;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div>
                <h4>${item.name}</h4>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>
            </div>


            <div class="quantity-controls">

                <button
                    class="quantity-btn"
                    onclick="decreaseQuantity(${index})">
                    −
                </button>


                <span class="quantity">
                    ${item.quantity}
                </span>


                <button
                    class="quantity-btn"
                    onclick="increaseQuantity(${index})">
                    +
                </button>

            </div>


            <button
                class="remove-item"
                onclick="removeItem(${index})">
                🗑️
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.innerText = total;
}


// Increase quantity
function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// Decrease quantity
function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();
}


// Remove item
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// Open cart
function openCart() {

    const cartPanel =
        document.getElementById("cartPanel");

    cartPanel.classList.add("active");
}


// Close cart
function closeCart() {

    const cartPanel =
        document.getElementById("cartPanel");

    cartPanel.classList.remove("active");
}


// =========================
// WHATSAPP CART ORDER
// =========================

function orderCart() {

    if (cart.length === 0) {

        alert("Your cart is empty 🛒");

        return;
    }


    let message =
        "Hello Nalayak Chaiwala! ☕\n\n" +
        "Mujhe ye order karna hai:\n\n";


    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        message +=
            "• " +
            item.name +
            " × " +
            item.quantity +
            " = ₹" +
            itemTotal +
            "\n";

    });


    message +=
        "\n💰 Total: ₹" +
        total +
        "\n\n" +
        "Thank you! ❤️";


    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}


// =========================
// OLD WHATSAPP BUTTON
// =========================

function orderChai() {

    const message =
        "Hello Nalayak Chaiwala! ☕ " +
        "Mujhe chai order karni hai.";

    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}


// =========================
// OLD ORDER ITEM BUTTON
// =========================

function orderItem(item) {

    const message =
        "Hello Nalayak Chaiwala! ☕ " +
        "Mujhe " +
        item +
        " order karni hai.";

    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}


// =========================
// CONTACT
// =========================

function contactUs() {

    window.open(
        "https://wa.me/" +
        phone,
        "_blank"
    );
}