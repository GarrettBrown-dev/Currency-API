import CurrencyService from './service/Currency-Services.js';
import $ from 'jQuery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function clearFields() {
  $('#conversion_rates').val("");
  $('.show-errors').text("");
}

function displayCurrencies(converion_rates) {
  $('option value')



// This is how my old project worked. I re-did it like this as I understand this method much better than how we learned. However I wanted to re-do it in a different way to prove to myself I could do it without aid.
// $(document).ready(function () {
//   const select = document.querySelectorAll('select');
//   const input = document.querySelectorAll('input');
//   let html = '';

//   async function getCurrency() {
//     const data = await CurrencyService.Currencies();
//     const arrKeys = Object.keys(data.converion_rates);
//     const rates = data.conversion_rates;

//     arrKeys.map(item => {
//       return html += `<option value=${item}>${item}</option>`;
//     })

//     for (let i = 0; i < select.length; i++) {
//       select[i].innerHTML = html;
//     }

//     function convert(i, j) {
//       input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
//     }

//     input[0].addEventListener('keyup', () => convert(1, 0));

//     input[1].addEventListener('keyup', () => convert(1, 0));

//     select[0].addEventListener('change', () => convert(0, 1));

//     select[0].addEventListener('change', () => convert(0, 1));
//   }
//   getCurrency();
// })