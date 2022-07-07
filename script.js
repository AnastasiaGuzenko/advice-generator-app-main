const idAdvice = document.querySelector('.title')
const advice = document.querySelector('.text')
const goBtn = document.querySelector('.btn')
const API = 'https://api.adviceslip.com/advice'
 
function getAPI(API) {
  fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.slip)
    idAdvice.innerHTML = `Advice №${data.slip.id}`
    advice.innerHTML = `"${data.slip.advice}"`
  })
}

getAPI(API);

goBtn.addEventListener("click", function() {
  getAPI(API);
})