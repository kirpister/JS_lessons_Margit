const order = () => {

    const size = document.querySelector('input[name="size"]:checked').value;
    let price = 0;

    if (size === "kids") {
        price = 7.50;
    }
    if (size === "small") {
        price = 10.50;
    }
    if (size === "medium") {
        price = 12.50;
    }
    if (size === "large") {
        price = 15.50;
    } 

    let customerName = document.getElementById('customer').value;
    let topping = document.querySelectorAll('input[name="topping"]:checked');
    let textToWrite ='';
    let numOfToppings = 0;

    for (let i in topping){
        if (topping[i].checked) {
            textToWrite = textToWrite + ", " + topping[i].value;
            numOfToppings++;
        }
    } 

    if (numOfToppings > 4) {
        price = price + 0.50 * (numOfToppings - 4);
    }
    //console.log(textToWrite, numOfToppings, price);

    let deliveryMethod = document.querySelector('#delivery');
    //console.log(deliveryMethod.selectedIndex);

    if (deliveryMethod.selectedIndex === 0) {
        price = price + 5;
    }
    //console.log(textToWrite, numOfToppings, price);
    document.getElementById('price').textContent = `Hello ${customerName}. Your pizza size is ${size} and your toppings are ${textToWrite}. Your chosen delivery method is ${deliveryMethod.value}. Your total price is: ${price} euros`;
} 