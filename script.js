const correctAnswers = ['B', 'A', 'B', 'B', 'A'];

const form = document.querySelector('form');
const result = document.querySelector('.result');

const button = document.querySelector('button');
const username = document.querySelector('h3');
const input = document.querySelector('input');
const askInfo = document.querySelector('.askInfo');
const quiz = document.querySelector('.quiz');
const submitButton = document.querySelector('.submitButton');
const thanking = document.querySelector('.thanking');
const reviewButton = document.querySelector('.reviewButton');

// console.log(form.children[0].children[0].children[1].children[1].classList);
// form
// .children[0]
// .children[0]
// .children[1]
// .children[1]
// .classList
// .add('text-danger');




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




    // let wrongAnswers = [];
    // let j = 0;
    // for (let i = 0; i < 5; i++) {
    //     if (userAnswers[i] !== correctAnswers[i]) {
    //         wrongAnswers[j++] += userAnswers[i];
    //     }
    // }

    // console.log(wrongAnswers);


    let score = 0;
    let wrongAnswers = [];
    let x = 0;

    userAnswers.forEach((answer,index) => {
        if (answer === correctAnswers[index]) {
            score += 20;

            if (answer === 'A') {
                x = 1;
            } else {
                x = 2;
            }
            form
            .children[0]
            .children[index]
            .children[x]
            .children[1]
            .classList
            .add('text-success');
        } else {
            wrongAnswers.push(answer);

            if (answer === 'A') {
                x = 1;
            } else {
                x = 2;
            }
            form
            .children[0]
            .children[index]
            .children[x]
            .children[1]
            .classList
            .add('text-danger');
        }
    });
    // console.log(wrongAnswers);

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

    submitButton.classList.add('d-none');
    reviewButton.classList.remove('d-none');


    reviewButton.addEventListener('click', () => {
        thanking.classList.remove('d-none');
        quiz.classList.add('d-none');
    });


});


 