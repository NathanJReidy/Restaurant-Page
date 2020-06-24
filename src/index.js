import generateHome from './generateHome';
import generateOrder from './generateOrder';
import generateContact from './generateContact';

// Load page content
generateHome(); 

// Clear home page content
function clearHome() {
    content.style.display = "none";
}

const content = document.querySelector('#Header');
const homeBtn = document.querySelector('#home-btn');
const orderBtn = document.querySelector('#order-btn');
const contactBtn = document.querySelector('#contact-btn');

homeBtn.addEventListener('click', () => {
    clearHome();
    generateHome();
})

orderBtn.addEventListener('click', () => {
    clearHome();
    //generateMenu();
})

contactBtn.addEventListener('click', () => {
    clearHome();
    generateContact();
})