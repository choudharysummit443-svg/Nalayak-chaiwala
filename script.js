let cart = [];


/* ORDER CHAI */

function orderChai() {

    const phone = "919214211171";

    const message =
        "Hello Nalayak Chaiwala! Mujhe chai order karni hai. ☕";

    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}


/* ADD TO CART */

function addToCart(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    showCart();
}


/* UPDATE CART */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    cartCount.textContent = totalItems;


    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>
                    <strong>${item.name}</strong>
                    <br>
                    ₹${item.price} × ${item.quantity}
                </div>

                <div class="quantity">

                    <button onclick="decreaseItem(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button onclick="increaseItem(${index})">
                        +
                    </button>

                </div>

            </div>

        `;

    });


    document.getElementById("cartTotal").textContent =
        "Total: ₹" + total;
}


/* INCREASE */

function increaseItem(index) {

    cart[index].quantity++;

    updateCart();
}


/* DECREASE */

function decreaseItem(index) {

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();
}


/* SHOW CART */

function showCart() {

    document.getElementById("cartPopup").style.display =
        "flex";

}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartPopup").style.display =
        "none";

}


/* SEARCH */

function searchMenu() {

    const search =
        document.getElementById("menuSearch")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".card");


    cards.forEach(card => {

        const name =
            card.getAttribute("data-name");

        if (name.includes(search)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* WHATSAPP CART ORDER */

function orderCart() {

    if (cart.length === 0) {

        alert("Your cart is empty! 🛒");

        return;
    }


    const phone = "919214211171";

    let message =
        "Hello Nalayak Chaiwala! ☕\n\n" +
        "Mera order:\n";


    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        message +=
            item.name +
            " × " +
            item.quantity +
            " = ₹" +
            itemTotal +
            "\n";

    });


    message +=
        "\nTotal = ₹" +
        total +
        "\n\nThank you! ❤️";


    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}


/* CONTACT */

function contactUs() {

    const phone = "919214211171";

    window.open(
        "https://wa.me/" + phone,
        "_blank"
    );

}