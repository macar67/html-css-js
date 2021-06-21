// ASSESSMENT:
// There is a text input in index.html which you will use
// Write a program such that:
// When we start typing inside the input,
// it will console.log the text only if we didn't type anything in the last 500ms
// You can find an example of the solution working in question3.gif
// Don't forget to add this file with script tag into index.html

// Hint: google 'debouncing'

// SOLUTION:

let inputArea=document.getElementById('a_text');

function debounce(func, timeout = 500){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function showInput(){
  console.log(inputArea.value);
}
const processChange = debounce(() => showInput());
