let counter = 99999;

const DISPLAY = document.getElementById('display');  //display is called 
const ALERT_EL = document.getElementById('alert'); //alert is called
const ERROR_MSG_OUT_OF_MEMORY = 'Out of memory'; //message is shown if its cross the limit 999999
const ERROR_MSG_INVALID_RANGE = 'Zero is the low limit'; //,essage is shown if it is decremente below 0000
//updateing the Diaplay
function updateDisplay() {
    const numberToString = addPaddingAtStart(counter.toString(), 4, ''); // Convert counter to string and pad with zeros if necessary
    const boxCount = numberToString.length;
    const spanElements = DISPLAY.children;

    // Removeing the the extra box after a decrement
    for (let i = spanElements.length - 1; i >= boxCount; i--) {
        DISPLAY.removeChild(spanElements[i]);
    }

    // Adding a Box after a increment 
    for (let i = 0; i < boxCount; i++) {
        if (i < spanElements.length) {
            spanElements[i].innerText = numberToString[i];
        } else {
            addBox(); // Add a new box if necessary
        }
    }
}


// INcrement Function Created
function increment(){
    const boxCount = DISPLAY.children.length;
    counter++;
    if(counter.toString().length === 5 && boxCount === 4) {     //Showing the length of the box and the boxcount
        addBox();
        
    } else if(counter.toString().length === 6 && boxCount === 5) {  //Showing the length of the box and the boxcount
        addBox();
    }
    else if(counter.toString().length > 6) {        // If the number reached 6 digit then show alert message 
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY;
        return;
    }
    ALERT_EL.innerText = '';
    
    updateDisplay();
}

//Adding a Box Function
function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}
//Decrement Function 
function decrement(){
    if(counter === 0) { //erroe Message if the number reach 0000
        ALERT_EL.innerText = ERROR_MSG_INVALID_RANGE;
        return
    };
    counter--;
    updateDisplay();
}

//reset Function
function reset(){
    counter =0;
    updateDisplay();
}

//addPadding function is used to add a value in a box after increment
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if(remainingSpace > 0) {
        let newString = originalString;
        for(let i=0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}

updateDisplay();    //Calling a Function