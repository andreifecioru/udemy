const myAccount = {
    name: 'Andrei',
    income: 0,
    expenses: 0
}

const addIncome = function(account, amount) {
    account.income += amount
}

const addExpense = function(account, amount) {
    account.expenses += amount
}

const resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

const getAccountSummary = function(account) {
    let balance = account.income - account.expenses 
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 200)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))