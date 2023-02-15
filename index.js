const renderResult = document.querySelector('#render-result');
const buttons = document.querySelectorAll('button')
const lastCalc = document.querySelector('#last-calc');

let previousValue;
let actualValue;
let operation;

const operations = {
    soma: () => {

    }
}

const previousContent = {}

console.log(renderResult, buttons)


buttons.forEach(button => {
  button.addEventListener('click', ({target}) =>{      
    if(button.dataset.number){
      renderResult.textContent += target.dataset.number
      return
    } 

    if(button.id == 'C'){
      renderResult.textContent = '';
      return
    }

    if(button.id == 'plus'){
      previousValue = Number(renderResult.textContent)
      operation = 'plus'
      renderResult.textContent = ''
      lastCalc.textContent = `${previousValue} + `
      return
    }

    if(button.id == 'equals'){  
        if(operation == 'plus'){
            actualValue = Number(renderResult.textContent)
            let newValue = previousValue + actualValue;
            renderResult.textContent = newValue
            lastCalc.textContent += `${actualValue}`
            return;
        }
    }
    })
    

})