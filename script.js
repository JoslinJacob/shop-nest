
/* =========================================================
   SHOPNEST - COMPLETE SHOPPING APPLICATION
   40 PRODUCTS | LOCAL IMAGES | CART | CHECKOUT
   PAYMENT | ORDER HISTORY | PRINT RECEIPT | ASSISTANT
   ========================================================= */


/* =========================================================
   1. PRODUCT DATABASE - 40 PRODUCTS
   ========================================================= */

const products = [
    {id:1,name:"Wireless Earbuds",category:"Electronics",price:999,description:"Stylish wireless earbuds with a compact and lightweight design.",reviews:[{name:"Aarav",rating:5,comment:"Nice design and easy to carry."},{name:"Priya",rating:4,comment:"Good sound quality."}]},
    {id:2,name:"Women's Kurta",category:"Fashion",price:799,description:"A beautiful and comfortable kurta suitable for everyday occasions.",reviews:[{name:"Sneha",rating:5,comment:"Beautiful design."},{name:"Ananya",rating:4,comment:"Comfortable and stylish."}]},
    {id:3,name:"Smart Watch",category:"Electronics",price:1499,description:"A modern smart watch with a stylish appearance.",reviews:[{name:"Rahul",rating:5,comment:"Attractive design."},{name:"Meera",rating:4,comment:"Looks good."}]},
    {id:4,name:"Hair Clips Set",category:"Hair Accessories",price:149,description:"A colourful hair clips set suitable for everyday styling.",reviews:[{name:"Diya",rating:5,comment:"Cute clips."},{name:"Isha",rating:4,comment:"Lovely colours."}]},
    {id:5,name:"Stylish Hair Band",category:"Hair Accessories",price:199,description:"A stylish hair band for everyday hairstyles.",reviews:[{name:"Kavya",rating:5,comment:"Very pretty."},{name:"Nisha",rating:4,comment:"Simple and attractive."}]},
    {id:6,name:"Hair Claw Clip",category:"Hair Accessories",price:99,description:"A simple and practical hair claw clip.",reviews:[{name:"Riya",rating:5,comment:"Cute and useful."},{name:"Tanya",rating:4,comment:"Budget friendly."}]},
    {id:7,name:"Bluetooth Speaker",category:"Electronics",price:1299,description:"Enjoy music with this portable Bluetooth speaker.",reviews:[]},
    {id:8,name:"Headphones",category:"Electronics",price:899,description:"Comfortable headphones suitable for music and online classes.",reviews:[]},
    {id:9,name:"Power Bank",category:"Electronics",price:1199,description:"A portable power bank for charging electronic devices.",reviews:[]},
    {id:10,name:"Wireless Mouse",category:"Electronics",price:499,description:"A convenient wireless mouse for everyday computer use.",reviews:[]},
    {id:11,name:"Laptop Stand",category:"Electronics",price:699,description:"A practical laptop stand for comfortable working and studying.",reviews:[]},
    {id:12,name:"USB Keyboard",category:"Electronics",price:599,description:"A simple keyboard suitable for study and office work.",reviews:[]},
    {id:13,name:"Floral Summer Dress",category:"Fashion",price:899,description:"A beautiful floral dress suitable for casual outings.",reviews:[]},
    {id:14,name:"Denim Jacket",category:"Fashion",price:1499,description:"A stylish denim jacket for everyday fashion.",reviews:[]},
    {id:15,name:"Women's Handbag",category:"Fashion",price:999,description:"A fashionable handbag for carrying everyday essentials.",reviews:[]},
    {id:16,name:"Casual T-Shirt",category:"Fashion",price:499,description:"A comfortable casual T-shirt for daily wear.",reviews:[]},
    {id:17,name:"Traditional Saree",category:"Fashion",price:1799,description:"An elegant traditional outfit for special occasions.",reviews:[]},
    {id:18,name:"Pearl Hair Clips",category:"Hair Accessories",price:129,description:"Elegant pearl-style clips for beautiful hairstyles.",reviews:[]},
    {id:19,name:"Floral Hair Band",category:"Hair Accessories",price:159,description:"A floral-inspired accessory for everyday styling.",reviews:[]},
    {id:20,name:"Butterfly Hair Clips",category:"Hair Accessories",price:99,description:"Cute decorative clips for different hairstyles.",reviews:[]},
    {id:21,name:"Scrunchie Set",category:"Hair Accessories",price:149,description:"A set of colourful scrunchies for everyday use.",reviews:[]},
    {id:22,name:"Hair Pins Set",category:"Hair Accessories",price:79,description:"Simple decorative hair pins to keep hairstyles neat.",reviews:[]},
    {id:23,name:"Men's Wallet",category:"Men's Accessories",price:499,description:"A practical wallet for carrying cards and cash.",reviews:[]},
    {id:24,name:"Men's Belt",category:"Men's Accessories",price:399,description:"A stylish belt suitable for casual and formal outfits.",reviews:[]},
    {id:25,name:"Men's Sunglasses",category:"Men's Accessories",price:599,description:"Modern sunglasses for everyday outdoor use.",reviews:[]},
    {id:26,name:"Men's Watch",category:"Men's Accessories",price:1299,description:"A stylish watch for everyday occasions.",reviews:[]},
    {id:27,name:"Handmade Greeting Card",category:"Craft Items",price:99,description:"A creative greeting card for special occasions.",reviews:[]},
    {id:28,name:"DIY Craft Kit",category:"Craft Items",price:299,description:"A creative craft kit for fun DIY activities.",reviews:[]},
    {id:29,name:"Decorative Photo Frame",category:"Craft Items",price:249,description:"A decorative frame for displaying favourite memories.",reviews:[]},
    {id:30,name:"Art Supplies Set",category:"Craft Items",price:349,description:"A useful art supplies set for creative projects.",reviews:[]},
    {id:31,name:"Electric Kettle",category:"Home Appliances",price:999,description:"A convenient electric kettle for everyday use.",reviews:[]},
    {id:32,name:"Table Lamp",category:"Home Appliances",price:599,description:"A useful table lamp for reading and studying.",reviews:[]},
    {id:33,name:"Mini Mixer Grinder",category:"Home Appliances",price:1499,description:"A compact mixer grinder for kitchen use.",reviews:[]},
    {id:34,name:"Room Heater",category:"Home Appliances",price:1999,description:"A home appliance designed for indoor comfort.",reviews:[]},
    {id:35,name:"Casual Sneakers",category:"Footwear",price:1299,description:"Comfortable sneakers suitable for everyday wear.",reviews:[]},
    {id:36,name:"Women's Sandals",category:"Footwear",price:699,description:"Stylish sandals for casual occasions.",reviews:[]},
    {id:37,name:"Sports Shoes",category:"Footwear",price:1499,description:"Sports shoes suitable for walking and exercise.",reviews:[]},
    {id:38,name:"Casual Slippers",category:"Footwear",price:299,description:"Lightweight slippers for everyday comfort.",reviews:[]},
    {id:39,name:"Face Wash",category:"Beauty Products",price:199,description:"A skincare product for everyday face cleansing.",reviews:[]},
    {id:40,name:"Lip Balm",category:"Beauty Products",price:99,description:"A handy lip balm for everyday lip care.",reviews:[]}
];


/* =========================================================
   2. LOCAL PRODUCT IMAGES
   ========================================================= */

products.forEach(product => {
    const number = String(product.id).padStart(2,"0");
    product.image = `images/product-${number}.jpg`;
    product.specifications = [
        "Category: " + product.category,
        "Product: " + product.name,
        "Everyday use",
        "Price: ₹" + product.price
    ];
});


/* =========================================================
   3. LOAD AND SAVE DATA
   ========================================================= */

function readStorage(key, fallback) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value === null ? fallback : value;
    } catch {
        return fallback;
    }
}

let cart = readStorage("smartcartCart", []);
let orders = readStorage("shopNestOrders", []);

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];

function saveCart() {
    localStorage.setItem("smartcartCart",JSON.stringify(cart));
}

function saveOrders() {
    localStorage.setItem("shopNestOrders",JSON.stringify(orders));
}

function loadReviews() {
    const saved = readStorage("smartcartReviews",{});

    products.forEach(product => {
        if (Array.isArray(saved[product.id])) {
            product.reviews.push(...saved[product.id]);
        }
    });
}

function saveReviews() {
    const saved = {};

    products.forEach(product => {
        saved[product.id] = product.reviews.filter(
            review => review.isCustomer
        );
    });

    localStorage.setItem("smartcartReviews",JSON.stringify(saved));
}


/* =========================================================
   4. RATINGS
   ========================================================= */

function getAverageRating(product) {
    if (!product.reviews.length) return 0;

    const total = product.reviews.reduce(
        (sum,review) => sum + Number(review.rating),0
    );

    return total / product.reviews.length;
}

function getStars(rating) {
    const rounded = Math.round(rating);
    return "★".repeat(rounded) + "☆".repeat(5-rounded);
}


/* =========================================================
   5. PRODUCT DISPLAY
   ========================================================= */

let selectedCategory = "All";

function displayProducts(items = products) {
    const container = document.getElementById("productList");
    if (!container) return;

    container.innerHTML = "";

    if (!items.length) {
        container.textContent = "No matching products found.";
        return;
    }

    items.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";
        image.onerror = function() {
            this.onerror = null;
            this.alt = "Image unavailable: " + product.name;
        };
        image.onclick = () => viewProduct(product.id);

        const info = document.createElement("div");
        info.className = "product-info";

        const name = document.createElement("h3");
        name.textContent = product.name;
        name.onclick = () => viewProduct(product.id);

        const category = document.createElement("p");
        category.className = "category";
        category.textContent = product.category;

        const rating = document.createElement("div");
        rating.className = "rating-line";
        rating.textContent =
            getStars(getAverageRating(product)) + " " +
            getAverageRating(product).toFixed(1) +
            " (" + product.reviews.length + " reviews)";

        const description = document.createElement("p");
        description.className = "description";
        description.textContent = product.description;

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = "₹" + product.price;

        const view = document.createElement("button");
        view.className = "view-btn";
        view.textContent = "View Product";
        view.onclick = () => viewProduct(product.id);

        const add = document.createElement("button");
        add.className = "add-btn";
        add.textContent = "Add to Cart";
        add.onclick = () => addToCart(product.id);

        info.append(name,category,rating,description,price,view,add);
        card.append(image,info);
        container.appendChild(card);
    });
}

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
}


/* =========================================================
   6. SEARCH AND CATEGORY FILTER
   ========================================================= */

function filterProducts(category,button) {
    selectedCategory = category;

    document.querySelectorAll(".filters button").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) button.classList.add("active");

    updateProducts();
}

function updateProducts() {
    const input = document.getElementById("searchInput");
    const search = input ? input.value.toLowerCase().trim() : "";

    const filtered = products.filter(product => {
        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const searchMatch =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search);

        return categoryMatch && searchMatch;
    });

    displayProducts(filtered);
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input",updateProducts);
}

function scrollToProducts() {
    document.getElementById("products")?.scrollIntoView({
        behavior:"smooth"
    });
}


/* =========================================================
   7. PRODUCT DETAILS AND REVIEWS
   ========================================================= */

function displayProductDetails() {
    const container = document.getElementById("productDetails");
    if (!container) return;

    const id = Number(
        new URLSearchParams(window.location.search).get("id")
    );

    const product = products.find(p => p.id === id);

    if (!product) {
        container.textContent = "Product not found.";
        return;
    }

    container.innerHTML = "";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.className = "detail-image";
    image.onerror = function() {
        this.onerror = null;
        this.alt = "Image unavailable";
    };

    const info = document.createElement("div");
    info.className = "detail-info";

    const name = document.createElement("h1");
    name.textContent = product.name;

    const category = document.createElement("p");
    category.textContent = product.category;

    const rating = document.createElement("p");
    rating.textContent =
        getStars(getAverageRating(product)) + " " +
        getAverageRating(product).toFixed(1) +
        "/5 (" + product.reviews.length + " reviews)";

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("h2");
    price.textContent = "₹" + product.price;

    const specs = document.createElement("div");
    specs.innerHTML = "<h3>Product Information</h3>";

    product.specifications.forEach(item => {
        const p = document.createElement("p");
        p.textContent = "✓ " + item;
        specs.appendChild(p);
    });

    const add = document.createElement("button");
    add.className = "add-btn";
    add.textContent = "Add to Cart";
    add.onclick = () => addToCart(product.id);

    info.append(name,category,rating,description,price,specs,add);
    container.append(image,info);

    displayCustomerReviews(product);
}

function displayCustomerReviews(product) {
    const summary = document.getElementById("reviewSummary");
    const list = document.getElementById("reviewList");

    if (!summary || !list) return;

    summary.innerHTML = `
        <h3>${getAverageRating(product).toFixed(1)} / 5</h3>
        <div class="stars">${getStars(getAverageRating(product))}</div>
        <p>${product.reviews.length} customer reviews</p>
    `;

    list.innerHTML = "";

    if (!product.reviews.length) {
        list.textContent = "No customer reviews yet.";
        return;
    }

    product.reviews.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card";

        const name = document.createElement("h4");
        name.textContent = review.name;

        const stars = document.createElement("p");
        stars.className = "stars";
        stars.textContent = getStars(review.rating);

        const comment = document.createElement("p");
        comment.textContent = review.comment;

        card.append(name,stars,comment);
        list.appendChild(card);
    });
}

function submitProductReview() {
    const id = Number(
        new URLSearchParams(window.location.search).get("id")
    );

    const product = products.find(p => p.id === id);
    if (!product) return;

    const name = document.getElementById("reviewerName")?.value.trim();
    const rating = Number(document.getElementById("reviewRating")?.value);
    const comment = document.getElementById("reviewComment")?.value.trim();

    if (!name || !comment || rating < 1 || rating > 5) {
        alert("Please enter your name, rating and review.");
        return;
    }

    product.reviews.push({
        name,
        rating,
        comment,
        isCustomer:true
    });

    saveReviews();
    displayProductDetails();

    document.getElementById("reviewerName").value = "";
    document.getElementById("reviewComment").value = "";

    alert("Your review has been submitted!");
}


/* =========================================================
   8. CART FUNCTIONS
   ========================================================= */

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id:product.id,
            name:product.name,
            price:product.price,
            quantity:1
        });
    }

    saveCart();
    displayCart();

    alert(product.name + " added to cart!");
}

function displayCart() {
    const container = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");
    const countElement = document.getElementById("cartCount");

    if (!container || !totalElement || !countElement) return;

    container.innerHTML = "";

    let total = 0;
    let count = 0;

    if (!cart.length) {
        container.textContent = "Your cart is empty.";
    }

    cart.forEach(item => {
        const amount = item.price * item.quantity;
        total += amount;
        count += item.quantity;

        const row = document.createElement("div");
        row.className = "cart-item";

        const label = document.createElement("span");
        label.textContent =
            `${item.name} × ${item.quantity} — ₹${amount}`;

        const minus = document.createElement("button");
        minus.textContent = "−";
        minus.onclick = () => changeQuantity(item.id,-1);

        const qty = document.createElement("span");
        qty.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.onclick = () => changeQuantity(item.id,1);

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.onclick = () => removeFromCart(item.id);

        row.append(label,minus,qty,plus,remove);
        container.appendChild(row);
    });

    countElement.textContent = count;
    totalElement.textContent = "Total: ₹" + total;

    updateCheckoutTotal();
}

function changeQuantity(id,amount) {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        saveCart();
        displayCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    displayCart();
}

function clearCart() {
    if (!cart.length) return;

    if (!confirm("Are you sure you want to clear your cart?")) return;

    cart = [];
    saveCart();
    displayCart();
}

function openCart() {
    document.getElementById("cartSection")?.scrollIntoView({
        behavior:"smooth"
    });
}


/* =========================================================
   9. CREATE CHECKOUT AND ORDER HISTORY INTERFACE
   ========================================================= */

function addShopNestStyles() {
    if (document.getElementById("shopNestExtraStyles")) return;

    const style = document.createElement("style");
    style.id = "shopNestExtraStyles";

    style.textContent = `
        .sn-section {
            max-width:1000px;
            margin:30px auto;
            padding:25px;
            background:white;
            border-radius:12px;
            box-shadow:0 3px 12px rgba(0,0,0,.08);
            color:#172033;
        }

        .sn-section h2 {
            text-align:center;
            margin-bottom:20px;
        }

        .sn-form input:not([type=radio]),
        .sn-form textarea {
            width:100%;
            box-sizing:border-box;
            padding:12px;
            margin:9px 0;
            border:1px solid #ccd2dc;
            border-radius:7px;
            font:inherit;
        }

        .sn-form textarea {
            min-height:85px;
            resize:vertical;
        }

        .sn-payment-options {
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:12px;
            margin:15px 0;
        }

        .sn-payment-options label {
            display:block;
            border:1px solid #ccd2dc;
            padding:15px;
            border-radius:8px;
            cursor:pointer;
        }

        .sn-payment-options label:has(input:checked) {
            border:2px solid #1769aa;
            background:#edf6ff;
        }

        .sn-payment-details {
            display:none;
            background:#f2f5fa;
            padding:12px;
            border-radius:8px;
            margin:12px 0;
        }

        .sn-payment-details.show {
            display:block;
        }

        .sn-primary {
            background:#1769aa;
            color:white;
            border:0;
            border-radius:7px;
            padding:13px 20px;
            cursor:pointer;
            font-weight:bold;
        }

        .sn-primary:hover {
            background:#104d80;
        }

        .sn-full {
            width:100%;
        }

        .sn-order-card {
            border:1px solid #dce1e8;
            border-radius:9px;
            padding:16px;
            margin:14px 0;
        }

        .sn-order-card button {
            margin:5px;
        }

        .sn-receipt {
            display:none;
            background:white;
            color:#172033;
            max-width:800px;
            margin:25px auto;
            padding:25px;
            border:1px solid #ddd;
        }

        .sn-receipt.show {
            display:block;
        }

        .sn-receipt table {
            width:100%;
            border-collapse:collapse;
            margin:20px 0;
        }

        .sn-receipt th,
        .sn-receipt td {
            border-bottom:1px solid #ddd;
            padding:10px 5px;
            text-align:left;
        }

        .sn-receipt .amount {
            text-align:right;
        }

        @media(max-width:650px) {
            .sn-payment-options {
                grid-template-columns:1fr;
            }

            .sn-section {
                margin:15px;
                padding:15px;
            }
        }

        @media print {
            body * {
                visibility:hidden !important;
            }

            #snReceipt,
            #snReceipt * {
                visibility:visible !important;
            }

            #snReceipt {
                display:block !important;
                position:absolute;
                top:0;
                left:0;
                width:100%;
                max-width:none;
                margin:0;
                border:0;
                box-shadow:none;
            }

            #snReceipt button {
                display:none !important;
            }
        }
    `;

    document.head.appendChild(style);
}


function createCheckoutInterface() {
    if (document.getElementById("snCheckout")) return;

    const cartSection = document.getElementById("cartSection");

    const checkout = document.createElement("section");
    checkout.id = "snCheckout";
    checkout.className = "sn-section";

    checkout.innerHTML = `
        <h2>Checkout</h2>

        <form id="snCheckoutForm" class="sn-form">

            <h3>Customer Details</h3>

            <input id="snName" type="text"
                placeholder="Full Name" required>

            <input id="snPhone" type="tel"
                placeholder="10-digit Phone Number"
                pattern="[0-9]{10}" maxlength="10" required>

            <textarea id="snAddress"
                placeholder="Delivery Address" required></textarea>

            <h3>Choose Payment Method</h3>

            <div class="sn-payment-options">

                <label>
                    <input type="radio" name="snPayment"
                        value="UPI" required>
                    📱 UPI Payment
                </label>

                <label>
                    <input type="radio" name="snPayment"
                        value="Credit/Debit Card">
                    💳 Credit / Debit Card
                </label>

                <label>
                    <input type="radio" name="snPayment"
                        value="Cash on Delivery">
                    💵 Cash on Delivery
                </label>

            </div>

            <div id="snUPI" class="sn-payment-details">
                <h4>Demo UPI Details</h4>
                <input id="snUPIId" type="text"
                    placeholder="Example: demo@bank">
            </div>

            <div id="snCard" class="sn-payment-details">
                <h4>Demo Card Details</h4>
                <input id="snCardName" type="text"
                    placeholder="Name on Card">

                <input id="snCardNumber" type="text"
                    inputmode="numeric"
                    maxlength="19"
                    placeholder="Card Number">

                <input id="snCardExpiry" type="month">

                <input id="snCardCVV" type="password"
                    inputmode="numeric"
                    maxlength="4"
                    placeholder="CVV">
            </div>

            <h3 id="snCheckoutTotal">Total: ₹0</h3>

            <p>
                Demo checkout only. No real payment will be processed.
            </p>

            <button class="sn-primary sn-full" type="submit">
                Place Order
            </button>

        </form>
    `;

    const history = document.createElement("section");
    history.id = "snOrderHistory";
    history.className = "sn-section";

    history.innerHTML = `
        <h2>My Orders</h2>
        <div id="snOrderList">No orders placed yet.</div>
    `;

    const receipt = document.createElement("section");
    receipt.id = "snReceipt";
    receipt.className = "sn-receipt";

    receipt.innerHTML = `
        <div id="snReceiptContent"></div>
        <button class="sn-primary" onclick="printReceipt()">
            Print Receipt
        </button>
    `;

    if (cartSection) {
        cartSection.insertAdjacentElement("afterend",checkout);
    } else {
        document.body.appendChild(checkout);
    }

    checkout.insertAdjacentElement("afterend",history);
    history.insertAdjacentElement("afterend",receipt);

    const checkoutButton = document.createElement("button");
    checkoutButton.type = "button";
    checkoutButton.className = "sn-primary";
    checkoutButton.textContent = "Proceed to Checkout";
    checkoutButton.style.margin = "15px";
    checkoutButton.onclick = goToCheckout;

    if (cartSection) {
        cartSection.appendChild(checkoutButton);
    }

    document.querySelectorAll('input[name="snPayment"]').forEach(input => {
        input.addEventListener("change",showPaymentFields);
    });

    document.getElementById("snCheckoutForm")
        .addEventListener("submit",placeOrder);
}


function showPaymentFields() {
    const selected = document.querySelector(
        'input[name="snPayment"]:checked'
    );

    document.getElementById("snUPI").classList.remove("show");
    document.getElementById("snCard").classList.remove("show");

    if (!selected) return;

    if (selected.value === "UPI") {
        document.getElementById("snUPI").classList.add("show");
    }

    if (selected.value === "Credit/Debit Card") {
        document.getElementById("snCard").classList.add("show");
    }
}


/* =========================================================
   10. CHECKOUT FUNCTIONS
   ========================================================= */

function updateCheckoutTotal() {
    const element = document.getElementById("snCheckoutTotal");
    if (!element) return;

    const total = cart.reduce(
        (sum,item) => sum + item.price * item.quantity,0
    );

    element.textContent = "Total: ₹" + total;
}

function goToCheckout() {
    if (!cart.length) {
        alert("Your cart is empty. Add products first.");
        return;
    }

    updateCheckoutTotal();

    document.getElementById("snCheckout")?.scrollIntoView({
        behavior:"smooth"
    });
}

function validateDemoPayment(method) {
    if (method === "UPI") {
        const upi = document.getElementById("snUPIId").value.trim();

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upi)) {
            alert("Enter a demo UPI ID, for example demo@bank.");
            return false;
        }
    }

    if (method === "Credit/Debit Card") {
        const name = document.getElementById("snCardName").value.trim();
        const number = document.getElementById("snCardNumber").value.replace(/\s/g,"");
        const expiry = document.getElementById("snCardExpiry").value;
        const cvv = document.getElementById("snCardCVV").value.trim();

        if (!name || !/^[0-9]{12,19}$/.test(number) ||
            !expiry || !/^[0-9]{3,4}$/.test(cvv)) {
            alert("Enter valid demo card details.");
            return false;
        }

        const expiryDate = new Date(expiry + "-01T00:00:00");
        const now = new Date();
        now.setDate(1);
        now.setHours(0,0,0,0);

        if (expiryDate < now) {
            alert("The card expiry date has passed.");
            return false;
        }
    }

    return true;
}


/* =========================================================
   11. PLACE ORDER
   ========================================================= */

function placeOrder(event) {
    event.preventDefault();

    if (!cart.length) {
        alert("Your cart is empty.");
        return;
    }

    const name = document.getElementById("snName").value.trim();
    const phone = document.getElementById("snPhone").value.trim();
    const address = document.getElementById("snAddress").value.trim();

    const selected = document.querySelector(
        'input[name="snPayment"]:checked'
    );

    if (!name || !phone || !address || !selected) {
        alert("Please complete all customer and payment details.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    if (!validateDemoPayment(selected.value)) return;

    const total = cart.reduce(
        (sum,item) => sum + item.price * item.quantity,0
    );

    const order = {
        id:"SN" + Date.now(),
        customer:name,
        phone:phone,
        address:address,
        payment:selected.value,
        items:cart.map(item => ({
            id:item.id,
            name:item.name,
            price:item.price,
            quantity:item.quantity
        })),
        total:total,
        date:new Date().toLocaleString(),
        status:"Order Placed"
    };

    orders.push(order);
    saveOrders();

    cart = [];
    saveCart();
    displayCart();

    document.getElementById("snCheckoutForm").reset();
    document.getElementById("snUPI").classList.remove("show");
    document.getElementById("snCard").classList.remove("show");

    displayOrderHistory();
    showReceipt(order);

    alert(
        "Your demo order has been placed successfully!\n" +
        "Order ID: " + order.id
    );

    document.getElementById("snReceipt").scrollIntoView({
        behavior:"smooth"
    });
}


/* =========================================================
   12. ORDER HISTORY
   ========================================================= */

function displayOrderHistory() {
    const container = document.getElementById("snOrderList");
    if (!container) return;

    container.innerHTML = "";

    if (!orders.length) {
        container.textContent = "No orders placed yet.";
        return;
    }

    [...orders].reverse().forEach(order => {
        const card = document.createElement("div");
        card.className = "sn-order-card";

        const title = document.createElement("h3");
        title.textContent = "Order ID: " + order.id;

        const date = document.createElement("p");
        date.textContent = "Date: " + order.date;

        const total = document.createElement("p");
        total.textContent = "Total: ₹" + order.total;

        const payment = document.createElement("p");
        payment.textContent = "Payment: " + order.payment;

        const status = document.createElement("p");
        status.textContent = "Status: " + order.status;

        const view = document.createElement("button");
        view.className = "sn-primary";
        view.textContent = "View Receipt";
        view.onclick = () => {
            showReceipt(order);
            document.getElementById("snReceipt").scrollIntoView({
                behavior:"smooth"
            });
        };

        card.append(title,date,total,payment,status,view);
        container.appendChild(card);
    });
}


/* =========================================================
   13. RECEIPT GENERATION
   ========================================================= */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g,char => ({
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#39;"
    })[char]);
}

function showReceipt(order) {
    const section = document.getElementById("snReceipt");
    const content = document.getElementById("snReceiptContent");

    if (!section || !content) return;

    const rows = order.items.map(item => `
        <tr>
            <td>${escapeHTML(item.name)}</td>
            <td>${item.quantity}</td>
            <td>₹${item.price}</td>
            <td>₹${item.price * item.quantity}</td>
        </tr>
    `).join("");

    content.innerHTML = `
        <h2 style="text-align:center;">🛍️ ShopNest</h2>

        <p style="text-align:center;">
            Shop Smart. Shop Easy. ShopNest.
        </p>

        <hr>

        <h3>Order Receipt</h3>

        <p><strong>Order ID:</strong> ${escapeHTML(order.id)}</p>
        <p><strong>Customer:</strong> ${escapeHTML(order.customer)}</p>
        <p><strong>Phone:</strong> ${escapeHTML(order.phone)}</p>
        <p><strong>Address:</strong> ${escapeHTML(order.address)}</p>
        <p><strong>Date:</strong> ${escapeHTML(order.date)}</p>
        <p><strong>Payment:</strong> ${escapeHTML(order.payment)}</p>
        <p><strong>Status:</strong> ${escapeHTML(order.status)}</p>

        <hr>

        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>

        <h3 style="text-align:right;">
            Grand Total: ₹${order.total}
        </h3>

        <hr>

        <p style="text-align:center;">
            Thank you for shopping with ShopNest!
        </p>

        <p style="text-align:center;font-size:12px;">
            Demo receipt only. No actual payment was processed.
        </p>
    `;

    section.classList.add("show");
}

function printReceipt() {
    const receipt = document.getElementById("snReceipt");

    if (!receipt || !receipt.classList.contains("show")) {
        alert("Please select an order receipt first.");
        return;
    }

    window.print();
}


/* =========================================================
   14. SHOPPING ASSISTANT
   ========================================================= */

const chatBox = document.getElementById("chatBox");
const userMessage = document.getElementById("userMessage");

function addChatMessage(message,sender) {
    if (!chatBox) return;

    const div = document.createElement("div");
    div.className = sender === "user" ? "user-message" : "bot-message";
    div.textContent = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getCategory(text) {
    if (/kurta|dress|clothes|fashion|outfit|saree|jacket|t-shirt/.test(text))
        return "Fashion";
    if (/hair|clip|band|claw|scrunchie|pin/.test(text))
        return "Hair Accessories";
    if (/electronic|gadget|earbud|headphone|watch|speaker|mouse|keyboard|power bank|laptop/.test(text))
        return "Electronics";
    if (/wallet|belt|sunglasses/.test(text))
        return "Men's Accessories";
    if (/craft|greeting card|photo frame|art supplies/.test(text))
        return "Craft Items";
    if (/kettle|lamp|mixer|heater/.test(text))
        return "Home Appliances";
    if (/shoe|sneaker|sandal|slipper/.test(text))
        return "Footwear";
    if (/beauty|face wash|lip balm|makeup/.test(text))
        return "Beauty Products";
    return null;
}

function getAssistantReply(question) {
    const text = question.toLowerCase().trim();

    if (/^(hi|hello|hey)[!.\s]*$/.test(text))
        return "Hello! Welcome to ShopNest. What would you like to shop for?";

    if (/thank|thanks/.test(text))
        return "You're welcome! Happy shopping!";

    if (/who are you|what can you do|help me/.test(text))
        return "I'm your ShopNest shopping assistant. I can recommend products, compare prices and find products within your budget.";

    if (/cart|my order|total amount/.test(text)) {
        if (!cart.length) return "Your shopping cart is empty.";

        const total = cart.reduce(
            (sum,item) => sum + item.price * item.quantity,0
        );

        return cart.map(item =>
            `${item.name} × ${item.quantity} — ₹${item.price * item.quantity}`
        ).join("\n") + "\nTotal: ₹" + total;
    }

    if (/delivery|shipping/.test(text))
        return "Live delivery tracking is not available in this demonstration.";

    if (/payment|pay|checkout/.test(text))
        return "ShopNest has UPI, Credit/Debit Card and Cash on Delivery demo payment options. No actual payment is processed.";

    if (/order history|previous orders/.test(text))
        return orders.length
            ? "You have placed " + orders.length + " demo order(s). Visit My Orders to view them."
            : "You have not placed any orders yet.";

    const category = getCategory(text);

    const budgetMatch = text.match(
        /(?:under|below|less than|within|upto|up to|max|maximum)\s*(?:rs\.?|₹|inr)?\s*(\d+)/i
    );

    const budget = budgetMatch ? Number(budgetMatch[1]) : null;

    let items = [...products];

    if (category) {
        items = items.filter(p => p.category === category);
    }

    if (budget !== null) {
        items = items.filter(p => p.price <= budget);
    }

    if (/cheapest|lowest price/.test(text)) {
        items.sort((a,b) => a.price-b.price);
        return items.length
            ? `The cheapest matching product is ${items[0].name} at ₹${items[0].price}.`
            : "No matching products found.";
    }

    if (/highest rated|best rated|top rated/.test(text)) {
        items.sort((a,b) => getAverageRating(b)-getAverageRating(a));
        return items.length
            ? `${items[0].name} has the highest rating of ${getAverageRating(items[0]).toFixed(1)}/5.`
            : "No matching products found.";
    }

    if (/suggest|recommend|show|find|need|want|buy|budget|under|below|cheap|affordable/.test(text)) {
        items.sort((a,b) => a.price-b.price);

        return items.length
            ? "Here are my recommendations:\n\n" +
              items.slice(0,8).map(p =>
                `${p.name} — ₹${p.price}`
              ).join("\n")
            : "No products match that category and budget.";
    }

    const matched = products.filter(p =>
        text.includes(p.name.toLowerCase())
    );

    if (matched.length) {
        return matched.map(p =>
            `${p.name} — ₹${p.price}\n${p.description}`
        ).join("\n\n");
    }

    return "I can help you find products, compare prices, check ratings and suggest products within your budget. Try asking: Show hair accessories under ₹200.";
}

function sendMessage() {
    if (!userMessage || !chatBox) return;

    const question = userMessage.value.trim();
    if (!question) return;

    addChatMessage(question,"user");
    userMessage.value = "";

    setTimeout(() => {
        addChatMessage(getAssistantReply(question),"bot");
    },300);
}

function askQuestion(question) {
    if (!userMessage) return;
    userMessage.value = question;
    sendMessage();
}

if (userMessage) {
    userMessage.addEventListener("keydown",event => {
        if (event.key === "Enter") sendMessage();
    });
}


/* =========================================================
   15. INITIALIZE SHOPNEST
   ========================================================= */

loadReviews();

addShopNestStyles();

displayProducts();
displayProductDetails();
displayCart();

createCheckoutInterface();
displayOrderHistory();

console.log("ShopNest loaded successfully.");
console.log("Total products:",products.length);
console.log("Local product images:",products[0].image);
console.log("Saved orders:",orders.length);
