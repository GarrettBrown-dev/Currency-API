import CurrencyService from './service/Currency-Services.js';
import { ExchangeRates } from './service/exchangeRate.js';
import $ from 'jQuery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {

  $('#convert').click(function (event) {
    event.preventDefault();
    let newExchange;
    const inputCurrency = $('#input_currency').val();
    const inputAmount = $('#input_amount').val();
    $('#exchange_amount').html("Exchange Amount: ");
    $('#input_amount').val("");
    CurrencyService.getCurrency()
      .then(function (response) {
        newExchange = new ExchangeRates(inputCurrency, inputAmount, response)
        $('#exchange_amount').append(`${newExchange.exchangeResults(inputCurrency, inputAmount)} ${inputCurrency}`);
      });
  })
});