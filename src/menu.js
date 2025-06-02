
function createMenuPage () {
    const content = document.querySelector('#content');
    const headerText = document.createElement('h2');
    const menuList = document.createElement('ul');

    headerText.textContent = 'Our Menu';

    const menuItems = [
        'Pizza - $15',
        'Burger - $12',
        'Pasta - $14',
        'Salad - $10'
    ];

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    content.appendChild(headerText);
    content.appendChild(menuList);
}

export {createMenuPage};