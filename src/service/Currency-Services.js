export default class CurrencyService {
  static getCurrency() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      })
  }
}

// Old way. Uses Async functions and awaits.
// static async Currencies() {
//   const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   const res = await fetch(API_URL);
//   const data = await res.json();
//   return data
// }