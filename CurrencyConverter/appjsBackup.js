var firstCurrency = document.getElementById('select1');
var secondCurrency = document.getElementById('select2');
var amountInput = document.getElementById('input-currency');

// currency objects
var myRates = {
    USD : {
        Usd: 1,
        Eur: .85, 
        Jpy: 106.59, 
        Gbp: .76, 
        Aud: 1.4, 
        Cad: 1.33, 
        Chf: .92, 
        Cny: 6.95, 
        Hkd: 7.75, 
        Nzd: 1.52, 
        Sek: 8.74, 
        Krw: 1184.37
    },        
    EUR : {
        Eur: 1,
        Usd: 1.18, 
        Jpy: 125.35, 
        Gbp: .9, 
        Aud: 1.64, 
        Cad: 1.56, 
        Chf: 1.07, 
        Cny: 8.17, 
        Hkd: 9.11, 
        Nzd: 1.78, 
        Sek: 10.27, 
        Krw: 1392.67
    },        
    JPY : {
        Jpy: 1,
        Usd: .00938, 
        Eur: .0079, 
        Gbp: .00717, 
        Aud: .013, 
        Cad: .01, 
        Chf: .00859, 
        Cny: .065, 
        Hkd: .07, 
        Nzd: .01, 
        Sek: .08, 
        Krw: 11.11
    },        
    GBP : {
        Gbp: 1,
        Usd: 1.308, 
        Eur: 1.11, 
        Jpy: 139.47, 
        Aud: 1.83, 
        Cad: 1.73, 
        Chf: 1.19, 
        Cny: 9.08, 
        Hkd: 10.14, 
        Nzd: 1.98, 
        Sek: 11.43, 
        Krw: 1549.78
    },        
    AUD : {
        Aud: 1,
        Usd: .716, 
        Eur: .61, 
        Jpy: 76.31, 
        Gbp: .55, 
        Cad: .95, 
        Chf: .65, 
        Cny: 4.97, 
        Hkd: 5.55, 
        Nzd: 1.08, 
        Sek: 6.25, 
        Krw: 847.96
    },        
    CAD : {
        Cad: 1,
        Usd: .75, 
        Eur: .64, 
        Jpy: 80.27, 
        Gbp: .57, 
        Aud: 1.05, 
        Chf: .68, 
        Cny: 5.23, 
        Hkd: 5.84, 
        Nzd: 1.14, 
        Sek: 6.58, 
        Krw: 892.01
    },        
    CHF : {
        Chf: 1,
        Usd: 1.09, 
        Eur: .93, 
        Jpy: 116.378, 
        Gbp: .83, 
        Aud: 1.52, 
        Cad: 1.45, 
        Cny: 7.58, 
        Hkd: 8.46, 
        Nzd: 1.66, 
        Sek: 9.54, 
        Krw: 1293.12
    },        
    CNY : {
        Cny: 1,
        Usd: .14, 
        Eur: .12, 
        Jpy: 15.35, 
        Gbp: .11, 
        Aud: .2, 
        Cad: .19, 
        Chf: .13, 
        Hkd: 1.11, 
        Nzd: .22, 
        Sek: 1.26, 
        Krw: 170.5
    },        
    HKD : {
        Hkd: 1,
        Usd: .13, 
        Eur: .11, 
        Jpy: 13.75, 
        Gbp: .09, 
        Aud: .18, 
        Cad: .17, 
        Chf: .12, 
        Cny: .89, 
        Nzd: .19, 
        Sek: 1.13, 
        Krw: 152.82
    },        
    NZD : {
        Nzd: 1,
        Usd: .66, 
        Eur: .56, 
        Jpy: 70.22, 
        Gbp: .5, 
        Aud: .92, 
        Cad: .87, 
        Chf: .6, 
        Cny: 4.57, 
        Hkd: 5.11, 
        Sek: 5.76, 
        Krw: 780.3
    },        
    SEK : {
        Sek: 1,
        Usd: .11, 
        Eur: .09, 
        Jpy: 12.19, 
        Gbp: .08, 
        Aud: .16, 
        Cad: .15, 
        Chf: .1, 
        Cny: .79, 
        Hkd: .88, 
        Nzd: .17, 
        Krw: 135.56
    },        
    KRW : {
        Krw: 1,
        Usd: .00084, 
        Eur: .00071, 
        Jpy: .089, 
        Gbp: .00064, 
        Aud: .00117, 
        Cad: .00112, 
        Chf: .00077, 
        Cny: .00586, 
        Hkd: .00654, 
        Nzd: .00128, 
        Sek: .00737
    }
}






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

// new calculate button for mobile
document.getElementById('btn-id2').addEventListener('click', calculateResults);

// Calculate results
function calculateResults() {
    var select1 = document.getElementById("select1");
    var select2 = document.getElementById("select2");
    var inputCurrencyValue = inputCurrency();
    var selectedFromCurrency = selectFromSelect();
    var selectedToCurrency = selectToSelect();
    var amnt = document.getElementById("to-currency");;
    
    if(myRates[select1.value] && myRates[select1.value][select2.value]){
        amnt = amountInput.value * myRates[select1.value][select2.value];
    }
    document.getElementById('to-currency').innerHTML=amnt.toFixed(2);

    console.log('inputCurrencyValue is ' + inputCurrencyValue);
    console.log('From = ' + selectedFromCurrency);
    console.log('myRates[select1.value] = ' + myRates[select1.value]);
    console.log('To = ' + selectedToCurrency);
    console.log('myRates[select1.value][select2.value] = ' + myRates[select1.value][select2.value]);    
    console.log('Amnt result = ' + amnt);
}
