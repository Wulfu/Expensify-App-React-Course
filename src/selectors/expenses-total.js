export default (expenses) => {
    let total = 0;
    if (expenses) {
        expenses.map((expense) => {
            total += expense.amount
        })
    }
    return expenses.reduce((total, expense) => total + expense.amount, 0);
};