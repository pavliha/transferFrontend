Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        let val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
    }, {});
}
Array.prototype.remove = function (target) {
    this.splice(this.indexOf(target), 1);
    return this;
};


window.calculateExpensesAmount = function(expenses) {
    let sum = 0;
    for (const expense of expenses)
        sum = expense.amount + sum
    return sum
}