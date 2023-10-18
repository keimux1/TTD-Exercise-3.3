let taxableIncome = (n) => {
    let tax;
    if (n < 12000) {
        tax = 0;
    } else if (12000 < n && n < 36000) {
        tax = n - (n * 0.2);
    } else {
        tax = (n - (n * 0.4)) + (n - (n * 0.2));
    }
    return tax;
};


module.exports = taxableIncome;