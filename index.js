const renderResult = document.querySelector('#render-result');
const buttonOne = document.querySelector('#one')

console.log(renderResult, buttonOne)

buttonOne.addEventListener('click', () =>
{
    renderResult.textContent = '1'
})

