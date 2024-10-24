public class Solution {
    public int MaxProfit(int[] prices) {
        if (prices == null || prices.Length < 2)
            return 0;

        int minPrice = int.MaxValue;
        int maxProfit = 0;

        for (int i = 0; i < prices.Length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                int currentProfit = prices[i] - minPrice;
                maxProfit = Math.Max(maxProfit, currentProfit);
            }
        }

        return maxProfit;
    }
}