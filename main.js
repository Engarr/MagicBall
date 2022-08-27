const ball = document.querySelector('img');
let answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const questionInput = document.querySelector('.question');
let answers = [
	'Tak!',
	`Nie :(`,
	`Nie chcesz znać odpowiedzi :P`,
	`Domyśl się :)`,
	`Może...`,
];

const animation = () => {
	ball.classList.add('shake-animation');
	setTimeout(answerQuestion, 1000);
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5);
	answer.innerHTML = `<span>Odpowiedź: </span>${answers[number]}`;
};

const answerQuestion = () => {
	ball.classList.remove('shake-animation');
	if (questionInput.value === '') {
		error.textContent = 'Musisz zadać pytanie';
		answer.textContent = '';
	} else if (questionInput.value.includes('?') === false) {
		error.textContent = `Pytanie musi zawierać "?"`;
		answer.textContent = '';
	} else {
		error.textContent = '';
		generateAnswer();
	}
};

ball.addEventListener('click', animation);
