// Selecteurs

//document.querySelector('#contact').style.background = "yellow";

//const baliseHTML = document.querySelector('#contact');

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

/*questionContainer.addEventListener("click", () => {
    questionContainer.style.background = 'red';
});*/

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', () => {
    console.log('click');
});

btn2.addEventListener('click', () => {
    console.log('click');
});



/*const scriptEpfl = document.getElementById("epfl");
const scriptUtp = document.getElementById("Utp");
const descriptio = document.getElementById('description');
const logoEpfl = document.querySelectorAll("#LogoEpfl");

console.log(logoEpfl);

logoEpfl[0].addEventListener('click', (() => {
    descriptio.textContent = "This project has been awarded the Innovation Award during the EPFL Tech4Dev Summer School program and the Sustainable Award during the edition of 2021 of Changemakers EPFL program, sponsored by the Ecole Polythechnique Fédérale de Lausanne and Logitech."
}));*/

//console.log(logoEpfl)