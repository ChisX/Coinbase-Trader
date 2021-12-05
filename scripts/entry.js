// DOM Selections
const entry = document.getElementById('entry');
const panel = document.getElementById('panel');
const form  = document.getElementsByClassName('inputGroup')[0];
const cancel = document.getElementById('returnBtn');
const btnBuy = document.getElementById('btnBuy');
const btnSll = document.getElementById('btnSll');
const cryptoCoin = document.getElementById('crypto');
const display = document.getElementById('display');
const baseInp = document.getElementsByClassName('output')[0];
const quotInp = document.getElementsByClassName('input')[0];
const threshold = document.getElementById('threshold');
const container = document.getElementById('modal-container');
const modalbox  = document.getElementById('modal-box');
const checkbox  = document.getElementById('ack');
var trader;

// Settings
let avail = ['BTC','ETH'];
let currentPrice = 1;

// Event Listeners
checkbox.addEventListener('change',() => {
  setTimeout(() => {
    modalbox.style.display = "none";
    checkbox.checked = false;
  },500)
})

form.addEventListener('submit',(event) => {
  event.preventDefault();
  modalbox.style.display = 'block';

  var keys = {
    'aKey': document.getElementById('aKey').value,
    'aSec': document.getElementById('aSec').value
  };
  trader = new coinbase(...Object.values(keys));
  
  entry.classList.add('hidden');
  panel.classList.remove('hidden');

  document.getElementById('info-aKey').value = keys['aKey'];
  document.getElementById('info-aSec').value = keys['aSec'];
})

cancel.addEventListener('click',() => {
  entry.classList.remove('hidden');
  panel.classList.add('hidden');
  document.getElementById('aKey').value = '';
  document.getElementById('aSec').value = '';
})

cryptoCoin.onchange = () => {
  if (cryptoCoin.value != '') {
    trader.client.getAccount(`${cryptoCoin.value}`,(err, account) => {
      trader.client.getBuyPrice({'currency':'USD'},(err, buyPrice) => {
        currentPrice = parseFloat(buyPrice['amount']) ** n;
        display.innerText = `1 ${cryptoCoin.value} = ${currentPrice} USD`;
      });
    })
  }
}

quotInp.onchange = quotInp.onkeyup = () => { baseInp.value = (parseFloat(quotInp.value)/currentPrice).toFixed(5); }
baseInp.onchange = baseInp.onkeyup = () => { quotInp.value = (parseFloat(baseInp.value)*currentPrice).toFixed(5); }

btnBuy.addEventListener('click',() => { trader.buyCrypto(cryptoCoin.value,parseFloat(baseInp.value),threshold.value);  })
btnSll.addEventListener('click',() => { trader.sellCrypto(cryptoCoin.value,parseFloat(baseInp.value),threshold.value); })