// Catch All Initial Variable:
const incomeError = document.getElementById('income-error');
const foodError = document.getElementById('food-error');
const rentError = document.getElementById('rent-error');
const clothesError = document.getElementById('clothes-error');
const expenseError = document.getElementById('expense-error');
const savingError = document.getElementById('saving-error');

// Calculate Total Cost:
document.getElementById('calculate-btn').addEventListener('click', function () {
        incomeError.innerText = '';
        expenseError.innerText = '';
        // Call totalIncome Function to get Total Income:
        const totalIncome = getIncome();
        // Handle Input Error:
        if (totalIncome < 0 || isNaN(totalIncome)) {
                incomeError.innerText = 'Income should be positive number!';
                return;
        }
        // Call getTotalExpenses Function to get Total Expenses:
        const totalExpenses = getTotalExpenses();
        console.log(typeof (totalExpenses));
        if (typeof (totalExpenses) == 'undefined') {
                return;
        }
        if (totalExpenses > totalIncome) {
                expenseError.innerText = 'Expense cannot be more than Income';
                return;
        }
        // Update Balance:
        const updateBalance = totalIncome - totalExpenses;
        // Update Total Expenses Inner Text:
        document.getElementById('expenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = updateBalance;
})

// Get Total Income:
function getIncome() {
        // Get Income Value:
        const incomeInput = document.getElementById('income').value;
        const income = parseFloat(incomeInput);
        return income;
}

// Get Total Expenses:
function getTotalExpenses() {
        const foodInput = document.getElementById('food').value;
        const food = parseFloat(foodInput);

        const rentInput = document.getElementById('rent').value;
        const rent = parseFloat(rentInput);

        const clothesInput = document.getElementById('clothes').value;
        const clothes = parseFloat(clothesInput);

        // Handle Error:
        if (food < 0 || isNaN(food)) {
                foodError.innerText = 'Food should be positive number!';
                return;
        }
        else if (rent < 0 || isNaN(rent)) {
                foodError.innerText = '';
                const rentError = document.getElementById('rent-error');
                rentError.innerText = 'Rent should be positive number!';
                return;
        }
        else if (clothes < 0 || isNaN(clothes)) {
                foodError.innerText = '';
                rentError.innerText = '';
                clothesError.innerText = 'Clothes should be positive number!';
                return;
        }
        rentError.innerText = '';
        clothesError.innerText = '';

        // Added All Expenses:
        const totalExpenses = food + rent + clothes;
        return totalExpenses;
}

// Saving Amount:
document.getElementById('save-btn').addEventListener('click', function () {
        savingError.innerText = "";
        // Call getIncome Function to Get Total Income:
        const totalIncome = getIncome();

        const saveInput = document.getElementById('save-input').value;

        const save = parseFloat(saveInput);
        if (isNaN(save) || save > 100 || save < 0) {
                savingError.innerText = "Enter Positive Value less than 100!"
                return;
        }
        const totalExpenses = getTotalExpenses();
        if (isNaN(totalIncome) || typeof (totalExpenses) == 'undefined') {
                savingError.innerText = "Please Provide Income and Expenses!"
                return;
        }

        // Calculate Saving:
        const savingAmount = (parseFloat(totalIncome) * save) / 100;
        const balanceValue = document.getElementById('balance').innerText;
        const balance = parseFloat(balanceValue);

        if (savingAmount > balance) {
                savingError.innerText = "Saving amount cannot be more the main balance!";
                return;
        }

        // Saving Amount:
        document.getElementById('saving-amount').innerText = savingAmount;

        // Remaining Balance:
        document.getElementById('remaining').innerText = balance - savingAmount;
        console.log(balance);
})