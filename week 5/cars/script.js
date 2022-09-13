//let listCars = new Array;
let listCars = [];
const liscence = document.querySelector('#liscence');
const maker = document.querySelector('#maker');
const model = document.querySelector('#model');
const owner = document.querySelector('#owner');
const price = document.querySelector('#price');
const color = document.querySelector('#color');
const form = document.querySelector('form');
const button = document.querySelector('#carSearch');
const resetBtn = document.getElementById('reset-btn'); 
const search = document.querySelector('input[name="numSearch"]');

const addCar = (e) => {
    
    e.preventDefault();

    class Car {
        constructor(liscence, maker, model, owner, price, color) {
            this.liscence = liscence;
            this.maker = maker;
            this.model = model;
            this.owner = owner;
            this.price = price;
            this.color = color;
    }
    }
    
    newCar = new Car(liscence.value, maker.value, model.value, owner.value, price.value, color.value);

    listCars.push(newCar);
   
    let html = "<table><tr><th>Licence</th><th>Maker</th><th>Model</th><th>Owner</th><th>Price</th><th>Color</th></tr>";
    
    for (let i = 0; i < listCars.length; i++) {
            let iCar = listCars[i];
            
            html += "<tr>";
            html += "<td>" + iCar.liscence+"</td>";
            html += "<td>" + iCar.maker+"</td>";
            html += "<td>" + iCar.model+"</td>";
            html += "<td>" + iCar.owner+"</td>";
            html += "<td>" + iCar.price+"</td>";
            html += "<td>" + iCar.color+"</td>";
            html += "</tr>";
    
    }                
    html+="</table>";
    document.getElementById("car-table").innerHTML = html;
    form.reset();
}

const searchCar = () => {

    searchResult = `No such car in database, try again!`;

    listCars.forEach(function(car){
       
        if (car.liscence == search.value) {
            searchResult = `Licence number ${car.liscence} is ${car.maker} ${car.model} and it belongs to ${car.owner}.`
        } 
      });

        document.getElementById('output').textContent = searchResult;
}

const resetTable = () => {
    listCars = [];
    
}

form.addEventListener('submit', addCar);

