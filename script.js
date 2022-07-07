const idAdvice = document.querySelector('.title')
const advice = document.querySelector('.text')
const goBtn = document.querySelector('.btn')
 
function getAPI() {
  fetch('https://api.adviceslip.com/advice')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.slip)
    idAdvice.innerHTML = `Advice №${data.slip.id}`
    advice.innerHTML = `"${data.slip.advice}"`
  })
}

getAPI();

goBtn.addEventListener("click", function() {
  getAPI();
})