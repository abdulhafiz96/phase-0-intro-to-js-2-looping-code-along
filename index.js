// Code your solutions in this file
const messages = [];
const array = [];

function writeCards(array, event) {
for (let i = 0; i < array.length; i++) {
messages.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
}
return messages
}
function countDown(number) {
    let i = number;
    while (i >= 0) {
    console.log(i--)    
    }
    }
    console.log(countDown(10))