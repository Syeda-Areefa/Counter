// set initial count
var count = 0;

//select value and buttons 
var value = document.querySelector('#value');
var btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
  var styles= e.currentTarget.classList;

  //value decrease
  if (styles.contains('decrease')){
    count--;
  }

  // increse value
  else if (styles.contains('increase')){
    count++;
  }

  //reset
  else {
    count = 0;
  }

//   changes color
  if (count > 0) {
    value.style.color = 'green';
  }
  if (count < 0) {
    value.style.color = 'red';
  }
  if (count === 0) {
    value.style.color = "#222";
  }
  value.textContent = count;

    })
});
