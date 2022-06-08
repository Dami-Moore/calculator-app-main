const radioButtonOne = document.getElementById('one');
const radioButtonTwo = document.getElementById('two');
const radioButtonThree = document.getElementById('three');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const labels = document.querySelector('.labels');
const radioButtonBackground = document.querySelector('.actual-btns');
const numberContainer = document.querySelector('.number-container');
const inputScreen = document.querySelector('.input-screen');
const smallerButtons = document.getElementsByClassName('button');
const sameColor = document.getElementsByClassName('resetdel');
const diffColor = document.querySelector('.equals');
const numbers = document.getElementsByClassName('number');
const input = document.getElementById('text-input');
const operators = document.getElementsByClassName('operator');

// Toggler events
radioButtonOne.addEventListener('click', () => {
        removeSecond();
        removeThird();
        addFirst();
})

radioButtonTwo.addEventListener('click', () => {
        removeFirst();
        removeThird();
        addSecond();
}) 

radioButtonThree.addEventListener('click', () => {
        removeFirst();
        removeSecond();
        addThird();
})

//Toggler Functions

//removes the first theme
function removeFirst() {
    body.classList.remove('first-main-background');
    h1.classList.remove('first-h1');
    p.classList.remove('first-theme-paragraph');
    labels.classList.remove('first-label');
    radioButtonBackground.classList.remove('first-actual-btns');
    numberContainer.classList.remove('first-num-container-color');
    inputScreen.classList.remove('first-input-screen-bg-color');

    for(const buttons of smallerButtons) {
        buttons.classList.remove('same-size-btn');
    }
    
    for(const reset of sameColor) {
        reset.classList.remove('same-color');
    }
   
    diffColor.classList.remove('diff-color');
   
}

//adds the first theme

function addFirst() {
    body.classList.add('first-main-background');
    h1.classList.add('first-h1');
    p.classList.add('first-theme-paragraph');
    labels.classList.add('first-label');
    radioButtonBackground.classList.add('first-actual-btns');
    numberContainer.classList.add('first-num-container-color');
    inputScreen.classList.add('first-input-screen-bg-color');

    for(const buttons of smallerButtons) {
        buttons.classList.add('same-size-btn');
    }
    
    for(const reset of sameColor) {
        reset.classList.add('same-color');
    }
   
    diffColor.classList.add('diff-color');
}

//removes second theme
function removeSecond() {
    body.classList.remove('second-main-background');
    h1.classList.remove('second-h1');
    p.classList.remove('second-theme-paragraph');
    labels.classList.remove('second-label');
    radioButtonBackground.classList.remove('second-actual-btns');
    numberContainer.classList.remove('second-num-container-color');
    inputScreen.classList.remove('second-input-screen-bg-color');
     for(const buttons of smallerButtons) {
        buttons.classList.remove('same-size-btn-2');
    }
    
    for(const reset of sameColor) {
        reset.classList.remove('same-color-2');
    }
   
    diffColor.classList.remove('diff-color-2');
}


//adds second theme
function addSecond() {
    body.classList.add('second-main-background');
    h1.classList.add('second-h1');
    p.classList.add('second-theme-paragraph');
    labels.classList.add('second-label');
    radioButtonBackground.classList.add('second-actual-btns');
    numberContainer.classList.add('second-num-container-color');
    inputScreen.classList.add('second-input-screen-bg-color');
    for(const buttons of smallerButtons) {
        buttons.classList.add('same-size-btn-2');
    }
    
    for(const reset of sameColor) {
        reset.classList.add('same-color-2');
    }
   
    diffColor.classList.add('diff-color-2');
}

// removes third theme
function removeThird() {
    body.classList.remove('third-main-background');
    h1.classList.remove('third-h1');
    p.classList.remove('third-theme-paragraph');
    labels.classList.remove('third-label');
    radioButtonBackground.classList.remove('third-actual-btns');
    numberContainer.classList.remove('third-num-container-color');
    inputScreen.classList.remove('third-input-screen-bg-color');
    for(const buttons of smallerButtons) {
        buttons.classList.remove('same-size-btn-3');
    }
    
    for(const reset of sameColor) {
        reset.classList.remove('same-color-3');
    }
   
    diffColor.classList.remove('diff-color-3');
}

//adds third theme
function addThird() {
    body.classList.add('third-main-background');
    h1.classList.add('third-h1');
    p.classList.add('third-theme-paragraph');
    labels.classList.add('third-label');
    radioButtonBackground.classList.add('third-actual-btns');
    numberContainer.classList.add('third-num-container-color');
    inputScreen.classList.add('third-input-screen-bg-color');
    for(const buttons of smallerButtons) {
        buttons.classList.add('same-size-btn-3');
    }
    
    for(const reset of sameColor) {
        reset.classList.add('same-color-3');
    }
   
    diffColor.classList.add('diff-color-3');
}



//functionality of calculator

//declaring the values to be used for calculation;
let currentValue = '';
let previousValue = '';
let operation = '';

//this adds the values to the input screen
for(const number of numbers) {
    number.addEventListener('click', () => {
        addValue(number.innerHTML); 
    })
}


//for the delete and reset buttons
for(const type of sameColor) {
    type.addEventListener('click', () => {
        if (type.innerHTML.toUpperCase() === 'DEL') {
            currentValue = currentValue.slice(0, -1);
            updateToScreen();
        } 
        
        if(type.innerHTML.toUpperCase() === 'RESET') {
            currentValue = '';
            updateToScreen();
            previousValue = '';
            operation = '';
        }
    })
}

//for the operators
for (const operator of operators) {
   operator.addEventListener('click', () => {
       assignNumbers(operator.innerHTML);
   })
}

//for the equals button
diffColor.addEventListener('click', () => {
    calculate();
})



//the function that adds the numbers to the input screen
function addValue(value) {
    if(value === '.') {
        if(input.value.includes('.')) {
            return;
        }

        currentValue = currentValue + value;

    } else if(currentValue === '0') {
        currentValue = value;
    } else {
        currentValue = currentValue + value;
    }

    updateToScreen();
}


//this function adds the commas indicating thousands, hundred thousands or millions
//also ensures the digits don't exceed Tens of millions
function updateToScreen() {
    input.value = currentValue.slice(0, 11);
        const newArr = input.value.split('');

        for(const comma of newArr) {
            if(comma === ',') {
                if(input.value.length < 5) {
                    newArr.splice(newArr.indexOf(comma), 1);
                    input.value = newArr.join('');
                }
                newArr.splice(newArr.indexOf(comma), 1);
                
            }
        }
               
        if(newArr.includes('.')) {
            for(let i = newArr.indexOf('.') - 3; i >= 1; i -= 3) {
                newArr.splice(i, 0, ',');
                input.value = newArr.join('');
            }
        } else {
            for(let i = newArr.length - 3; i >= 1; i -= 3) {
                newArr.splice(i, 0, ',');
                input.value = newArr.join('');
              } 
        }     
}

//this guy stores the operation, currentValue and previousValue
function assignNumbers(operator) {
    if(currentValue === '') {
        return;
    }

    if(previousValue !== '') {
        calculate();
    }
    operation = operator;
    previousValue = currentValue;
    currentValue = '';
}

//this guy calculates and updates the result on the input screen
function calculate() {
    let result;
    const previous = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if(operation === '+') {
        result = previous + current;
    } else if(operation === '-') {
        result = previous - current;
    } else if(operation === '/') {
        result = previous / current;
    } else if(operation === '*') {
        result = previous * current;
    } else {
        return;
    }


    if(result.toString().length > 11 && !(result.toString().includes('.'))) {
        currentValue = 'Err'
        updateToScreen();
    } else {
        currentValue = result.toString();
        updateToScreen();
    }
    
    previousValue = '';
    operation = '';
}

//makes sure the user can't use the keyboard.
document.addEventListener('keypress', (e) => {
    e.preventDefault();
})