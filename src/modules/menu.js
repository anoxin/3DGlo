const menu = () => {
    const menuBts = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');

    const handleMenu = () => {

        menu.classList.toggle('active-menu');
    };

    menuBts.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
};


export default menu;