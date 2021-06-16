var firstCurrency = document.getElementById('select1');
var secondCurrency = document.getElementById('select2');
var amountInput = document.getElementById('input-currency');
var toAmount;
// currency objects


// Get selected select
function selectFromSelect() {
    var d = document.getElementById('select1');
    var displayFromSelected = d.options[d.selectedIndex].text;
    var fromValue = d.value;
    document.getElementById('selectFrom').innerHTML=displayFromSelected;
    return fromValue;
}

function selectToSelect() {
    var d = document.getElementById('select2');
    var displayToSelected = d.options[d.selectedIndex].text;
    var toValue = d.value;
    document.getElementById('selectTo').innerHTML=displayToSelected;
    return toValue;
}

// get and display input
function inputCurrency() {
    var i = document.getElementById('input-currency');
    var displayInput = i.value;
    var inputToNum = parseFloat(displayInput);
    console.log('Input is ' + inputToNum);
    console.log(typeof inputToNum);
    document.getElementById('from-currency').innerHTML=inputToNum.toFixed(2);
    return inputToNum;
}

//listen to submit

document.getElementById('btn-id').addEventListener('click', calculateResults);
document.getElementById('btnSwitch').addEventListener('click', switchResults);

// new calculate button for mobile
document.getElementById('btn-id2').addEventListener('click', calculateResults);

// Calculate results
function calculateResults() {
    var inputCurrencyValue = inputCurrency();
    var selectedFromCurrency = selectFromSelect();
    var selectedToCurrency = selectToSelect();

    fetch(`https://api.exchangerate-api.com/v4/latest/${selectedFromCurrency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[selectedToCurrency];
		// rateEl.innerText = `1 ${selectedFromCurrency} = ${rate} ${selectedToCurrency}`
        var toAmount = (inputCurrencyValue * rate).toFixed(2);
        document.getElementById('to-currency').innerHTML=toAmount;
        document.getElementById('rate').innerHTML=rate.toFixed(2);
        console.log('rate = ' + rate);
	})
    

    console.log('inputCurrencyValue is ' + inputCurrencyValue);
    console.log('From = ' + selectedFromCurrency);
    console.log('To = ' + selectedToCurrency);    
    console.log('toAmount = ' + toAmount);

}

function switchResults() {
    const temp = firstCurrency.value;
	firstCurrency.value = secondCurrency.value;
	secondCurrency.value = temp;
	calculateResults();
}