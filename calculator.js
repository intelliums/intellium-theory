function calculateExpectedValue(wager, americanOdds, winProbability) {
    // Convert win probability to a decimal
    winProbability = winProbability / 100;

    // Calculate the fair loss probability
    const lossProbability = 1 - winProbability;

    // Calculate the total return (profit + stake) if win based on American odds
    let totalReturnIfWin;
    if (americanOdds > 0) {
        totalReturnIfWin = wager * (americanOdds / 100 + 1);
    } else {
        totalReturnIfWin = wager * (100 / Math.abs(americanOdds) + 1);
    }

    // Calculate the profit if win (total return - stake)
    const profitIfWin = totalReturnIfWin - wager;

    // Calculate the expected value
    const expectedValue = (winProbability * profitIfWin) - (lossProbability * wager);

    return expectedValue;
}