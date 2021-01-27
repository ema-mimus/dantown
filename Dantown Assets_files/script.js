const url = "https://api.coingecko.com/api/v3/coins/bitcoin";
const current_price = document.querySelector('#current_price')

async function getCurrentPrice() {
  let data = await (await fetch(url)).json();
  let price = data.tickers[2].last
  showPrice(price);
}

function showPrice(price){
    const priceTwoDeci = price.toFixed(2)
    const priceWithComma = numberWithCommas(priceTwoDeci)
    current_price.textContent = `$${priceWithComma}`
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.addEventListener("load", getCurrentPrice);
