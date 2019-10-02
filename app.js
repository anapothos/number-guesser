//iniliaze dom elements

const goButton = document.getElementById ('button');
const amountLevel = document.getElementById ('amount');
let amount = 4; 

goButton.addEventListener ('click', () => {
    amount = amount + 4; 

});