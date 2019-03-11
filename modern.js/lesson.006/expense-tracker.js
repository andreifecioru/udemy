const account = {
  name: "Andrei Fecioru",
  expenses: [],
  income: [],

  addExpense: function(description, amount) {
    this.addAccountEntry(this.expenses, description, amount);
  },

  addIncome: function(description, amount) {
    this.addAccountEntry(this.income, description, amount);
  },

  getAccountSummary: function() {
    const totalExpenses = this.sumAccountEntries(this.expenses);
    const totalIncome = this.sumAccountEntries(this.income);
    const balance = totalIncome - totalExpenses;

    return (
      `${this.name} has a balance of $${balance}.\n` +
      `\t- $${totalIncome} in income.\n` +
      `\t- $${totalExpenses} in expenses.`
    );
  },

  // ---------------[ HELPERS ]------------------
  addAccountEntry: function(target, description, amount) {
    target.push({
      description: description,
      amount: amount
    });
  },

  sumAccountEntries: function(target) {
    return target
      .map(function(entry) {
        return entry.amount;
      })
      .reduce(function(sum, amount) {
        return sum + amount;
      }, 0);
  }
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 3);
account.addIncome("Salary", 1000)
console.log(account.getAccountSummary());
