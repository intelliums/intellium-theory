function calculateProfitIfWin(wager, americanOdds) {
    if (americanOdds > 0) {
        return (americanOdds / 100) * wager;
    } else {
        return (100 / Math.abs(americanOdds)) * wager;
    }
}

function calculateExpectedValue(wager, americanOdds, winProbability) {
    // Convert win probability to a decimal
    winProbability = winProbability / 100;

    // Calculate the fair loss probability
    const lossProbability = 1 - winProbability;

    // Calculate the profit if win based on American odds
    const profitIfWin = calculateProfitIfWin(wager, americanOdds);

    // Calculate the expected value
    const expectedValue = (winProbability * profitIfWin) - (lossProbability * wager);

    return expectedValue;
}

// Function to update the displayed expected value
function updateExpectedValue() {
    const wager = parseFloat(document.getElementById('wager').value);
    const americanOdds = parseFloat(document.getElementById('odds').value);
    const winProbability = parseFloat(document.getElementById('win-probability').value);
    const ev = calculateExpectedValue(wager, americanOdds, winProbability);
    document.getElementById('expected-value').textContent = `$${ev.toFixed(2)}`;
}

// Event listeners for input changes
document.getElementById('wager').addEventListener('input', updateExpectedValue);
document.getElementById('odds').addEventListener('input', updateExpectedValue);
document.getElementById('win-probability').addEventListener('input', updateExpectedValue);

// Initial update on page load
document.addEventListener('DOMContentLoaded', updateExpectedValue);