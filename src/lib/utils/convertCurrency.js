export function convertToCurrency(amount) {
    if (isNaN(amount)) {
        return 'Invalid number';
    }

    // Convert the amount to a currency format (e.g., USD)
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    });

    return formatter.format(amount);
}
