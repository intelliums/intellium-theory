function convertAmericanToDecimalOdds(americanOdds) {
    let decimalOdds;
    if (americanOdds > 0) {
        decimalOdds = americanOdds / 100 + 1;
    } else {
        decimalOdds = 100 / Math.abs(americanOdds) + 1;
    }
    return decimalOdds;
}

function calculateExpectedValue(wager, americanOdds, winProbability) {
    // Convert win probability to a decimal
    winProbability = winProbability / 100;

    // Convert American odds to decimal odds
    const decimalOdds = convertAmericanToDecimalOdds(americanOdds);

    // Calculate the fair loss probability
    const lossProbability = 1 - winProbability;

    // Calculate the profit if win
    const profitIfWin = (decimalOdds - 1) * wager;

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