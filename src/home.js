function createHomePage () {
    const content = document.querySelector('#content');
    const headerText = document.createElement('h2')
    const paragraphText = document.createElement('p')

    headerText.textContent = 'Welcome to ShineProdigy Restaurant' 
    paragraphText.textContent = 'This is the best restaurant in milkyway!'

    content.appendChild(headerText);
    content.appendChild(paragraphText);
}


export {createHomePage};