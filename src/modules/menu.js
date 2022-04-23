const menu = () => {
    const menuBts = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');
    let thisBottomBlock = 'not known';
    let num = 0;
    let count = 0;
    let idInterval;


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

        if ((thisBottomBlock == 'not known' || thisBottomBlock == 'yes') && num < count) {
            num = num + 20;
            document.documentElement.scrollTop = num;
            thisBottomBlock = 'yes';
        } else if ((thisBottomBlock == 'not known' || thisBottomBlock == 'no') && num > count) {
            num = num - 20;
            thisBottomBlock = 'no';
            document.documentElement.scrollTop = num;
            console.log(num);
        } else {
            console.log(count);
            document.documentElement.scrollTop = count;
            cancelAnimationFrame(idInterval);
            thisBottomBlock = 'not known';
        }

    };
    
};

export default menu;

