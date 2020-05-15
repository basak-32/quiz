const correctAnswers = ['B', 'A', 'B', 'B', 'A'];

const form = document.querySelector('form');
const result = document.querySelector('.result');

const button = document.querySelector('button');
const username = document.querySelector('h3');
const input = document.querySelector('input');
const askInfo = document.querySelector('.askInfo');
const quiz = document.querySelector('.quiz');


button.addEventListener('click', event => {
    username.querySelector('span').textContent = input.value;
    // console.log(username.querySelector('span').textContent);
    username.classList.remove('d-none');
    askInfo.classList.add('d-none');
    quiz.classList.remove('d-none');
})

input.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        username.querySelector('span').textContent = input.value;
        // console.log(username.querySelector('span').textContent);
        username.classList.remove('d-none');
        askInfo.classList.add('d-none');
        quiz.classList.remove('d-none');
    }
})


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userAnswers = [
        form.q1.value, 
        form.q2.value, 
        form.q3.value,
        form.q4.value,
        form.q5.value
    ]

    let score = 0;

    userAnswers.forEach((answer,index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    })

    scrollTo(0, 0);
    
    result.classList.remove('d-none');

    let i = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${i}%`;
        if (i === score) {
            clearInterval(timer);
        } else {
            i++;
        }
    },30);


});


 