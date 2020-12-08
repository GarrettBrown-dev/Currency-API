export class ExchangeRates {
  constructor(inputCurrency, inputAmount, exchangeRateObject) {
    this.USD = exchangeRateObject.conversion_rates.USD,
    this.GBP = exchangeRateObject.conversion_rates.GBP,
    this.EUR = exchangeRateObject.conversion_rates.EUR,
    this.SEK = exchangeRateObject.conversion_rates.SEK,
    this.CNY = exchangeRateObject.conversion_rates.CNY,
    this.RUB = exchangeRateObject.conversion_rates.RUB,
    this.inputCurrency = inputCurrency,
    this.inputAmount = inputAmount,
    this.outputAmount = this.exchangeResults(this.inputCurrency, this.inputAmount);
  }

  exchangeResults(inputCurrency, inputAmount) {
    let exchangeAmount = this[inputCurrency];
    let result = exchangeAmount * inputAmount;
    return result;
  }
}