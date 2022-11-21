//  1

let br = document.getElementById('down');
br.addEventListener('click',go);    

function go() {
  let heightWindow = window.innerHeight;
  window.scrollBy(0, 500)
}

//  2

let scrollbar = document.getElementById('scrollbar')

function go() {
    // Check if body height is higher than window height
    if (document.body.scrollHeight > document.body.offsetHeight) {
        alert("Vertical Scrollbar!");
    }
    
    // Check if body width is higher than window width
    if (document.body.scrollWidth > document.body.offsetWidth) {
        alert("Horizontal Scrollbar!");
    }
};

scrollbar.addEventListener('click',go)

// 3

const getBtn1 = document.getElementById('summbtn')

getBtn1.addEventListener('click', () => {
    const getForm = document.getElementById('form')

    let sum = 0;
// считают сумму складывая все инпуты через цикл for
    for (let i = 0; i < getForm.elements.length; i += 1) {
        sum += Number(getForm.elements[i].value);
    }
    // вывод суммы чисел из инпуты
    console.log(sum);
});


// 4

var countriesSelect = document.querySelector('#countries-select');
var citiesSelect = document.querySelector('#cities-select');

var data = {
  Россия: ['1', '2', '3'],
  Беларусь: ['1', '2', '3'],
  Украина: ['1', '2', '3'],
}

var countries = Object.keys(data);

for (var i = 0; i < countries.length; i++) {
  countriesSelect.add(new Option(countries[i]));
}

var defaultCities = data[countries[0]];
for (var i = 0; i < defaultCities.length; i++) {
  citiesSelect.add(new Option(defaultCities[i]));
}

countriesSelect.addEventListener('change', function() {
  var cities = data[this.value];
  citiesSelect.length = 0;
  
  for (var i = 0; i < cities.length; i++) {
    citiesSelect.add(new Option(cities[i]));
  }
});


// 5

let four = document.getElementById('exfive')
let li = document.createElement('li')
four.append(li)

// 6


// 7

var elems = document.getElementsByTagName('a');
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener('mouseover', func);
}

function func() {
  this.innerHTML = this.innerHTML + ' (' + this.href + ')';
}

7
var elems = document.getElementsByTagName('p');
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', func);
}

function func() {
  this.innerHTML = this.innerHTML * this.innerHTML;
}

// 8

var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function updateDisplay(val) {
    document.getElementById("num").innerHTML = val;
}

// 9

const getUl1 = document.querySelector('.cho');
const getBtn2 = document.querySelector('.nichoblin');

getBtn1.addEventListener('click', funcsec);
getUl1.addEventListener('click',funcfirst);

function funcfirst(event) {
    event.target.innerHTML = '${event.target.innerHTML}!';
};

function funcsec() {
    const createLi = document.createElement('li');
    createLi.innerHTML = 'Пункт';
    getUl1.appendChild(createLi);
};
