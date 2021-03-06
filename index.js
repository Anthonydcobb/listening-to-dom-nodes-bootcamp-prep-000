// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});



const input = document.querySelector('input')

input.addEventListener('keydown', function(event) {
  if (event.key === "g" || console.log(event.key)) {
    return event.preventDefault()
  }
})

let divs = document.querySelectorAll('div')

function bubble(e) {
  console.log(`${this.firstChild.nodeValue.trim()} bubbled` )
}

function capture(e) {
  console.log(`${this.firstChild.nodeValue.trim()} captured`)
}

divs.forEach(function(div) {
  div.addEventListener('click', bubble)
})

divs.forEach(function(div) {
  div.addEventListener('click', capture, true)
})
