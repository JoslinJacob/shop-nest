
const rules = {
    name: /^[A-Za-z .'-]{2,50}$/,
    id: /^[A-Za-z0-9-]{5,15}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    phone: /^[6-9]\d{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
};

document.querySelectorAll("form[data-validate]").forEach(form => {

    form.addEventListener("submit", function (event) {

        let valid = true;

        form.querySelectorAll("[required]").forEach(input => {

            let fieldValid = input.type === "checkbox"
                ? input.checked
                : input.value.trim() !== "";

            if (input.dataset.rule) {
                fieldValid = rules[input.dataset.rule].test(
                    input.value.trim()
                );
            }

            if (input.id === "confirmPassword") {
                fieldValid =
                    input.value === document.getElementById("password").value;
            }

            input.style.borderColor = fieldValid ? "" : "red";

            if (!fieldValid) {
                valid = false;
            }
        });

        event.preventDefault();

        if (valid) {
            alert("Validation successful! This is a demo form.");
        } else {
            alert("Please check the entered details.");
        }
    });

});
