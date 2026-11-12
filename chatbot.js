
function botReply(question) {
    const q = question.toLowerCase();

    if (q.includes("cheapest")) {
        const cheapest = [...products].sort(
            (a, b) => a.price - b.price
        )[0];

        return `${cheapest.name} is the cheapest product at ₹${cheapest.price}.`;
    }

    const budgetMatch = q.match(/(?:under|below)\s*₹?\s*(\d+)/);

    if (budgetMatch) {
        const budget = Number(budgetMatch[1]);

        const matches = products.filter(
            p => p.price <= budget
        );

        if (matches.length === 0) {
            return "Sorry! No products found within that budget.";
        }

        return "Products within your budget:\n" +
            matches.slice(0, 8).map(
                p => `${p.name} - ₹${p.price}`
            ).join("\n");
    }

    const category = products.find(
        p => q.includes(p.category.toLowerCase())
    );

    if (category) {
        const matches = products.filter(
            p => p.category === category.category
        );

        return category.category + ":\n" +
            matches.map(
                p => `${p.name} - ₹${p.price}`
            ).join("\n");
    }

    if (q.includes("dress")) {
        return "Choose Women's Dresses from the category filters to see our dresses.";
    }

    if (q.includes("hello") || q.includes("hi")) {
        return "Hello! Welcome to ShopNest. How can I help you?";
    }

    if (q.includes("rating")) {
        const highest = [...products].sort(
            (a, b) => b.rating - a.rating
        )[0];

        return `${highest.name} has a catalogue rating of ${highest.rating}/5.`;
    }

    return "I can help you find products, categories and prices. Try asking 'Show electronics' or 'Products under 500'.";
}

function addMessage(message, type) {
    const chatBox = document.getElementById("chatBox");

    const div = document.createElement("div");

    div.className = type;
    div.textContent = message;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("userMessage");

    const question = input.value.trim();

    if (question === "") return;

    addMessage(question, "user-message");

    input.value = "";

    addMessage(botReply(question), "bot-message");
}

function askQuestion(question) {
    addMessage(question, "user-message");

    addMessage(botReply(question), "bot-message");
}
