// document.getElementById('conteo').innerText = 10
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("conteo")

console.log(countEl)
console.log(saveEl)

let count = 0

function increment() {

    count = count + 1 // count += 1
    countEl.textContent = count
}

function save() {
    let newVar = count + " - "
    saveEl.textContent += newVar

    console.log(count)
}