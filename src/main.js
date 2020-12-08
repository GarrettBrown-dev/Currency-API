import CurrencyService from './service/Currency-Services.js';
import { ExchangeRates } from './service/exchangeRate.js';
import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {

  $('#convert').click(function (event) {
    event.preventDefault();
    let newExchange;
    const inputCurrency = ($('#currency2').val());
    const inputAmount = parseInt($('#input_amount').val());
    $('#exchange_amount').html("Exchange Amount: ");
    $('#input_amount').val("");
    CurrencyService.getCurrency()
      .then(function (response) {
        if (inputAmount < 0 || inputAmount == "") throw "Error! Please enter a valid amount!";
        newExchange = new ExchangeRates(inputCurrency, inputAmount, response);
        $('#exchange_amount').append(`${newExchange.exchangeResults(inputCurrency, inputAmount)} ${inputCurrency}`);
      });
  });
});