'use strict';


const submit = document.querySelector('.btn');
const radio = document.querySelector('.form__radio');
const check = document.querySelector('.form__check');
let time, mood = '';

radio.addEventListener('click',
    function (e) {
        if (e.target.classList.contains('radio')) {
            const link = e.target;
            time = link.value;
        }
    })

check.addEventListener('click',
    function (e) {
        if (e.target.classList.contains('checkbox')) {
            const link = e.target;
            mood += link.value + ', ';
        }
    })

submit.addEventListener('click', function (e) {
    e.preventDefault();

    ////       Variable initiate
    const fullname = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const number = document.querySelector('#number').value;
    const experience = document.querySelector('#experience').value;
    const place = document.querySelector('.location').value;


    // console.log(fullname, email, number, place, time, mood, experience);

})




