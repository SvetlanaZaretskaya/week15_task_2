let cities = ["Москва", "Санкт-Петербург", "Сочи", "Пятигорск"];
let temperature = [];

for (let i = 0; i < cities.length; i++) {
    temperature[i] = prompt(`Введите температуру города ${cities[i]}`);
    temperature[i] = Number(temperature[i]); 
};



// let maxTemperature = Math.max.apply(null, temperature);
// console.log(maxTemperature);

// let minTemperature = Math.min.apply(null, temperature);
// console.log(minTemperature);

let parentElement1 = document.getElementById('city1');
let newElement1 = document.createElement('div');
newElement1.textContent = `${temperature[0]} °C`;
parentElement1.append(newElement1);

let parentElement2 = document.getElementById('city2');
let newElement2 = document.createElement('div');
newElement2.textContent = `${temperature[1]} °C`;
parentElement2.append(newElement2);

let parentElement3 = document.getElementById('city3');
let newElement3 = document.createElement('div');
newElement3.textContent = `${temperature[2]} °C`;
parentElement3.append(newElement3);

let parentElement4 = document.getElementById('city4');
let newElement4 = document.createElement('div');
newElement4.textContent = `${temperature[3]} °C`;
parentElement4.append(newElement4);

temperature.sort(function(a, b){
    return a - b;
});


let maxTemperature = temperature[temperature.length - 1];

let parentElement5 = document.getElementById('maxTemp');
let newElement5 = document.createElement('div');
newElement5.textContent = `${maxTemperature} °C`;
parentElement5.append(newElement5);

let minTemperature = temperature[0];

let parentElement6 = document.getElementById('minTemp');
let newElement6 = document.createElement('div');
newElement6.textContent = `${minTemperature} °C`;
parentElement6.append(newElement6);