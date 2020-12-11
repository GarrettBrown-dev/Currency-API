# _Currency-Exchanger_

#### _A currency exchanging application. 11/20/2020_

#### By _**Garrett Brown**_

## Description

_This is intended as a proof of knowledge for week 6 at Epicodus. It shows knowledge of API's and its uses through the use of a currency exchange API._

## User stories:
* _A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won._
* _Users should be able to convert U.S. currency into at least 5 other types of currency._
* _If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is._
* _If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist._

## Specs:
* _1.) Import assets properly from API -> displays all available currencies the API has stored._
* _2.) User inputs number and chooses a currency -> calculates and displays properly._
* _3.) User can change their currency to convert to after first calculation -> Also holds value when changed._

## Setup/Installation Requirements:

* _Head over to https://www.exchangerate-api.com_
* _Get a free (or paid) key by inputting your email when prompted._
* _Place your new API key in all spots where "API *underscore* Key" is used, as well as create a new .env file with the following line of code:_ API_KEY=your-api-key-goes-here
* _Be sure to run npm install and npm run start to ensure you have the necessary files!_

## Known Bugs:

_No known bugs!_

## Support and Contact Details:

_Any issues? Suggestions? Let me know via email! gman9mm@live.com. Contributions are always appreciated!_

## Technologies Used

_Node.js_
_Jest_
_HTML_
_CSS_
_Javascript_
_ExchangeRate.API_


## License

*Copyright (c) [2020] [Garrett Brown]*

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.