//make btn interactive
//initialize the count as 0
//listen to clicks on the increment button
//increment the count var when the button is clicked
//change the count-el in html to reflect the new count
 

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //pass in argument
let count = 0

console.log(saveEl)

function increment(){
    console.log("The button was clicked")
    count += 1
    countEl.textContent = count
} 

function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr
  console.log(count)
  countEl.textContent = 0
  count = 0
} 

console.log('Lets count people who joined the race!')

