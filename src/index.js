import generateHome from './generateHome';
import generateOrder from './generateOrder';
import generateContact from './generateContact';

// Load page content
generateHome(); 

// Clear home page content
function clearHome() {
    content.style.display = "none";
    mainContent.innerHTML = ""; 
}

const content = document.querySelector('#Header');
const mainContent = document.querySelector('#Main');
const homeBtn = document.querySelector('#home-btn');
const orderBtn = document.querySelector('#order-btn');
const contactBtn = document.querySelector('#contact-btn');

homeBtn.addEventListener('click', () => {
    clearHome();
    content.style.display = "block";
    content.style.left = "5%";
})

orderBtn.addEventListener('click', () => {
    clearHome();
    generateOrder();
})

contactBtn.addEventListener('click', () => {
    clearHome();
    generateContact();
})