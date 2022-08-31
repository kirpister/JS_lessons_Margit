const form = document.querySelector('form');
const customer = document.querySelector('#customerName');
const customerName = document.getElementById('customerName').value;
const age = document.querySelector('#customerAge');
const customerHealth = document.querySelectorAll('[name="health"]');
const customerHabits = document.querySelectorAll('[name="habits"]');

const getQuote = (event) => {

    event.preventDefault();
    
    let customerName = customer.value;
    let customerAge = age.value;
    let healthResult = [];
    let habitsResult =[];
    let quote = 0;
    let coef = 0;
    let result = '';

    
    if (customerAge < 18) {
        coef = 0;
    }
    else if (customerAge <= 25) {
        coef = 0.1;
    }
    else if (customerAge <= 35) {
        coef = 0.3;
    }
    else if (customerAge <= 45) {
        coef = 0.6;
    }
    else if (customerAge <= 55) {
        coef = 1;
    }
    else if (customerAge <= 65) {
        coef = 1.5;
    }
    else { 
        coef = 2.1;
    }

    

customerHealth.forEach((item) => {
    if (item.checked) {
        healthResult.push(item.value);
        coef = coef + 0.01;
    }
});

//THIS IS NOT WORKING

customerHabits.forEach((item) => {
    if (item.checked) {
        habitsResult.push(item.value);
    
        if (item.value == 'daily exercise'){
            coef = coef - 0.05;
        }
        else {
            coef = coef + 0.05;
        }

    }
});

 console.log(habitsResult);
 console.log(coef);

quote = 500 + coef * 500;

document.querySelector('#quote').textContent = `Hello ${customerName}.  Your quote is ${quote}.`;

form.reset();
};

form.addEventListener('submit', getQuote);