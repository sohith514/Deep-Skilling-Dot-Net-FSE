class FinancialForecast {

    public static double predictFutureValue(double currentValue, double growthRate, int years) {

        if (years == 0) {
            return currentValue;
        }

        return predictFutureValue(
                currentValue * (1 + growthRate / 100),
                growthRate,
                years - 1
        );
    }

    public static void main(String[] args) {

        double currentRevenue = 500000;
        double annualGrowthRate = 8;
        int forecastYears = 5;

        double futureValue = predictFutureValue(
                currentRevenue,
                annualGrowthRate,
                forecastYears
        );

        System.out.println("Current Revenue : ₹" + currentRevenue);
        System.out.println("Growth Rate     : " + annualGrowthRate + "%");
        System.out.println("Forecast Period : " + forecastYears + " Years");
        System.out.printf("Predicted Revenue: ₹%.2f%n", futureValue);
    }
}