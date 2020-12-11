export default class CurrencyService {
  static getCurrency() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        alert("Failed to fetch values from API.");
        throw new Error(error);
      });
  }
}