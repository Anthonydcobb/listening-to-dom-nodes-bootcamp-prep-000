// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

document.addEventListener('keypress', function(event) {
  alert(`${event.key} was pressed`)
})

const input = document.querySelector('input')

input.addEventListener('keydown', function(event) {
  console.log(event.key)
})
