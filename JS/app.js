const correctAnswers = ['B', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const answer = document.querySelector('.answer')
form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);
    
    let output = 0;
    const timer = setInterval(() => {
        answer.textContent = output + "% of success";
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
    
});