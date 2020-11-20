export default class CurrencyService {

  // Old way. Uses Async functions and awaits.
  // static async Currencies() {
  //   const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  //   const res = await fetch(API_URL);
  //   const data = await res.json();
  //   return data
  // }
}
