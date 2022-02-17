const incomeError = document.getElementById('income-error');
const foodError = document.getElementById('food-error');
const rentError = document.getElementById('rent-error');
const clothesError = document.getElementById('clothes-error');
// Calculate Total Cost:
document.getElementById('calculate-btn').addEventListener('click', function () {
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
        // Update Balance:
        const updateBalance = totalIncome - totalExpenses;
        document.getElementById('balance').innerText = updateBalance;
        incomeError.innerText = '';
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

        // Update Total Expenses Inner Text:
        document.getElementById('expenses').innerText = totalExpenses;
        return totalExpenses;
}

// Saving Amount:
document.getElementById('save-btn').addEventListener('click', function () {
        // Call getIncome Function to Get Total Income:
        const totalIncome = getIncome();

        const saveInput = document.getElementById('save-input').value;
        const save = parseFloat(saveInput);

        // Calculate Saving:
        const savingAmount = (parseFloat(totalIncome) * save) / 100;
        document.getElementById('saving-amount').innerText = savingAmount;

        // Remaining Balance:
        const balanceValue = document.getElementById('balance').innerText;
        const balance = parseFloat(balanceValue);
        document.getElementById('remaining').innerText = balance - savingAmount;
        console.log(balance);
})