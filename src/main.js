import CurrencyService from './service/Currency-Services.js';
import $ from 'jQuery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  const select = document.querySelectorAll('select');
  const input = document.querySelectorAll('input');
  let html = '';

  async function getCurrency() {
    const data = await CurrencyService.getCurrency();
    const arrKeys = Object.keys(data.converion_rates);
    const rates = data.conversion_rates;

  }