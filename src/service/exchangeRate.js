export class ExchangeRates {
  constructor(inputCurrency, inputAmount, conversionRateData) {
    this.USD = conversionRateData.conversion_rates.USD,
      this.GBP = conversionRateData.conversion_rates.GBP,
      this.EUR = conversionRateData.conversion_rates.EUR,
      this.SEK = conversionRateData.conversion_rates.SEK,
      this.CNY = conversionRateData.conversion_rates.CNY,
      this.RUB = conversionRateData.conversion_rates.RUB,
      this.inputCurrency = inputCurrency,
      this.inputAmount = inputAmount,
      this.outputAmount = this.exchangeResults(this.inputCurrency, this.inputAmount)
  }

  exchangeResults(inputCurrency, inputAmount) {
    let exchangeAmount = this[inputCurrency];
    let result = exchangeAmount * inputAmount;
    return result;
  }
}