
let expression = "";

function add(value) {
    expression += value;

    document.getElementById("display").value =
        expression;
}

function clearCalc() {
    expression = "";

    document.getElementById("display").value = "0";
}

function calculate() {
    try {
        if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
            throw new Error("Invalid expression");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        expression = String(result);

        document.getElementById("display").value =
            expression;

    } catch (error) {

        expression = "";

        document.getElementById("display").value =
            "Error";
    }
}
