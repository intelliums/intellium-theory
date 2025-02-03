function calculateProfitIfWin(wager, americanOdds) {
    if (americanOdds > 0) {
        return (americanOdds / 100) * wager;
    } else {
        return (100 / Math.abs(americanOdds)) * wager;
    }
}

function calculateExpectedValue(wager, americanOdds, winProbability) {
    const winProb = winProbability / 100;
    const lossProb = 1 - winProb;
    const profit = calculateProfitIfWin(wager, americanOdds);
    return (winProb * profit) - (lossProb * wager);
}

function updateExpectedValue() {
    const wager = parseFloat(document.getElementById('wager').value);
    const odds = parseFloat(document.getElementById('odds').value);
    const wp = parseFloat(document.getElementById('win-probability').value);
    const ev = calculateExpectedValue(wager, odds, wp);
    document.getElementById('expected-value').textContent = `$${ev.toFixed(2)}`;
}

document.getElementById('wager').addEventListener('input', updateExpectedValue);
document.getElementById('odds').addEventListener('input', updateExpectedValue);
document.getElementById('win-probability').addEventListener('input', updateExpectedValue);
document.addEventListener('DOMContentLoaded', updateExpectedValue);
