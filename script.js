// Hamburger
const toggleNav = () => {
    const hamburger = document.querySelector('.navbar__hamburger');
    const navLinks = document.querySelector('.navbar__nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    })
}

toggleNav();

// FAQs - Shows FAQ answers on toggle
const questions = document.querySelectorAll('.faqs__question');
console.log(questions);

questions.forEach(question => {
    let answer = question.querySelector('.faq__answer');
    console.log(answer);

    question.addEventListener('click', () => {
        answer.classList.toggle('active');
        console.log('answer clicked')
    })
})



