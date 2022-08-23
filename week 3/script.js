calculate = () => {
 let price = document.getElementById('price').value;
 let money = document.getElementById('money').value;
 let liters = (money / price);

 document.getElementById('liters').textContent =  "You got" + " " + liters.toFixed(2) + " " + "liters."

 if (liters < 10){
    document.getElementById('message').textContent = "Oops, guess you'll just have to stay."
 } else {
    document.getElementById('message').textContent = "Good, you can escape now!"
 }
} 