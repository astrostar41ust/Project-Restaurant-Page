import './style.css';
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";


(function DisplayController() {

    const content = document.querySelector('#content');

    const buttons = document.querySelectorAll('nav button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            content.innerHTML = '';

            const pageId = e.target.id; 

            if(pageId === 'home') {
                createHomePage();
            }
            else if(pageId === 'menu') {
                createMenuPage();
            }
            else if(pageId === 'contact') {
                createContactPage();
            }
        })
    })
    createHomePage();
})();
