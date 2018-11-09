const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calc__Keys’)
keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
   // Do something
 }
});

//Next, we can use the data-action attribute to determine the type of key that is clicked.
const key = e.target
const action = key.dataset.action
if (!action) {
    console.log('number key!')
}

//If the key has a data-action that is either add, subtract, multiply or divide, we know the key is an operator.

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

//If the key’s data-action is decimal, we know the user clicked on the decimal key.
//Following the same thought process, if the key’s data-action is clear, we know the user clicked on the clear (the one that says AC) key. 
//If the key’s data-action is calculate, we know the user clicked on the equals key.

if (action === 'decimal') {
    console.log('decimal key!')
  }
if (action === 'clear') {
    console.log('clear key!')
  }
if (action === 'calculate') {
    console.log('equal key!')
  }

//The current displayed number
//We can get these two values through the textContent property of the clicked key and .calculator__display , respectively.

const display = document.querySelector('.calculator__display')
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})

if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    }
  }

  //additional cal string

  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
  }

  //To create this effect, we can concatenate . to the displayed number.
if (action === 'decimal') {
    display.textContent = displayedNum + '.'
  }