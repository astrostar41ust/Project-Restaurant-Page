function createContactPage () {
    const content = document.querySelector('#content');
    const headerText = document.createElement('h2');
    const addressText = document.createElement('p');
    const phoneText = document.createElement('p');
    const emailText = document.createElement('p');

    headerText.textContent = 'Contact Us';
    addressText.textContent = '123 Restaurant Street, Food City, FC 12345';
    phoneText.textContent = 'Phone: (555) 123-4567';
    emailText.textContent = 'Email: info@shineprodigy.com';

    content.appendChild(headerText);
    content.appendChild(addressText);
    content.appendChild(phoneText);
    content.appendChild(emailText);
}

export { createContactPage };
