let income = 0;
let expense = 0;

function updateDisplay() {
    const incomeDisplay = document.getElementById("incomeAmount");
    const expenseDisplay = document.getElementById("expenseAmount");
    const profitDisplay = document.getElementById("profitAmount");
    const lossDisplay = document.getElementById("LossAmount");

    incomeDisplay.innerHTML = income;
    expenseDisplay.innerHTML = expense;
    profitDisplay.innerHTML = income - expense;
    lossDisplay.innerHTML = expense - income;
}

function addIncome() {
    const inputAmount = parseFloat(document.getElementById("inputAmount").value);
    if ((inputAmount) && inputAmount > 0) {
        income += inputAmount;
        updateDisplay();
    }
}

function addExpense() {
    const inputAmount = parseFloat(document.getElementById("inputAmount").value);
    if ((inputAmount) && inputAmount > 0) {
        expense += inputAmount;
        updateDisplay();
    }
}
updateDisplay();
