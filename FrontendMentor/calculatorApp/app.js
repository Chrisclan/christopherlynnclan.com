

//Change Themes

//get theme toggle slider element
var slider = document.getElementById("myRange");
var sectionTop = document.getElementById('topSection');
var myScreen = document.getElementById('inputTextArea');
var myKeypad = document.getElementById('keypad');

var deleteButton = document.getElementById('deleteBtn');
var resetButton = document.getElementById('resetBtn');
var calculateButton = document.getElementById('calculateBtn');
var key7 = document.getElementById('key7');
var key8 = document.getElementById('key8');
var key9 = document.getElementById('key9');
var key4 = document.getElementById('key4');
var key5 = document.getElementById('key5');
var key6 = document.getElementById('key6');
var keyPlus = document.getElementById('keyPlus');
var key1 = document.getElementById('key1');
var key2 = document.getElementById('key2');
var key3 = document.getElementById('key3');
var keyMinus = document.getElementById('keyMinus');
var keyDecimal = document.getElementById('keyDecimal');
var key0 = document.getElementById('key0');
var keyDivide = document.getElementById('keyDivide');
var keyMultiply = document.getElementById('keyMultiply');

var thumb = {"1":"thumb1","2":"thumb2","3":"thumb3"};
var theme = {"1":"theme1","2":"theme2","3":"theme3"};

slider.oninput = function() { 
    //change color of thumb 
    slider.className = 'slider ' + thumb[this.value] + ' ' + theme[this.value];
    //change background-color of body
    document.body.className = theme[this.value];
    //change color of top section
    sectionTop.className = 'topSection ' + theme[this.value];
    //change background-color and color of screen
    myScreen.className = theme[this.value];
    //change background-color of keypad
    keypad.className = theme[this.value];
    
    // change background-color and color and shadow of buttons
    key7.className = theme[this.value];
    key8.className = theme[this.value];
    key9.className = theme[this.value];
    key4.className = theme[this.value];
    key5.className = theme[this.value];
    key6.className = theme[this.value];
    key1.className = theme[this.value];
    key2.className = theme[this.value];
    key3.className = theme[this.value];
    key0.className = theme[this.value];
    keyPlus.className = theme[this.value];
    keyMinus.className = theme[this.value];
    keyDecimal.className = theme[this.value];
    keyDivide.className = theme[this.value];
    keyMultiply.className = theme[this.value];


    //change background-color and color and shadow of delete button
    deleteButton.className = theme[this.value];
    //change background-color and color and shadow of reset button
    resetButton.className = theme[this.value];
    //change background-color and color and shadow of calculate button
    calculateButton.className = theme[this.value];
}



function showClickResult(result){
    form.screenDisplay.value=form.screenDisplay.value+result;
}

function clearScreen() {
    form.screenDisplay.value='';
}

function deleteLastNumber () {
    var str = form.screenDisplay.value;
    str = str.slice(0, -1);
    console.log(str);
    form.screenDisplay.value=str;
}

function calcResult () {
    form.screenDisplay.value=eval(form.screenDisplay.value)
}