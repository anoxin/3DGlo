const menu = () => {
    const menuBts = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');
    let num = 0;
    let count = 0;
    let idInterval;
    let stop = 2;

    const handleMenu = (event) => {
        
        menu.classList.toggle('active-menu');
        
    };

    menuBts.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();
            let blockId = document.querySelector(event.target.getAttribute('href'));
            count = blockId.getBoundingClientRect().top;
            animation();
            handleMenu();
        });
    });

    const animation = () => {
        
        idInterval = requestAnimationFrame(animation);

        console.log(count);

        if ((stop == 0 || stop == 2) && num < count) {
            num = num + 20;
            document.documentElement.scrollTop = num;
            stop = 0;
        } else if ((stop == 1 || stop == 2) && num > count) {
            num = num - 20;
            stop = 1;
            document.documentElement.scrollTop = num;
            console.log(num);
        } else {
            console.log(count);
            document.documentElement.scrollTop = count;
            cancelAnimationFrame(idInterval);
            // num = 0;
            stop = 2;
        }

    };
    
};

export default menu;

