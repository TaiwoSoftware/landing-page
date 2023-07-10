const openBtn = document.querySelector('#open');
const closeBtn  = document.querySelector('#close');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const inputs = document.querySelectorAll('input');
const validation = document.querySelector('#validation');
const logIn = document.querySelector('#logIn');
const loginForm = document.querySelector('#loginForm');
const closed = document.querySelector('#closed');


// signIn
let openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
 };

let closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};

openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

// End of Sign up

// Beginning of log in page
let openLoginPage = () => {
    loginForm.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

let closeLoginPage = () => {
    loginForm.classList.add('hidden');
    overlay.classList.add('hidden');
};

logIn.addEventListener('click', openLoginPage);
closed.addEventListener('click',closeLoginPage);

validation.addEventListener('click', () => {
    for (const element of inputs) {
        if (element.value === '') {
            element.style.border = '1px solid red';
        }
    };
});