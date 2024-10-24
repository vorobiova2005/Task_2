/**
 * Calculates the maximum profit that can be obtained by buying and selling a single stock.
 * 
 * @param prices - An array of stock prices, where prices[i] is the price of the stock on day i.
 * @returns The maximum profit that can be obtained by buying and selling a single stock.
 */
function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
}
/**
 * Alternative solution that calculates the maximum profit using two pointers approach.
 * 
 * @param prices - An array of stock prices, where prices[i] is the price of the stock on day i.
 * @returns The maximum profit that can be obtained by buying and selling a single stock.
 */
function maxProfitAlternative(prices: number[]): number {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
        right++;
    }
    
    return maxProfit;
}
