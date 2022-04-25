const menu = () => {
    const menuBts = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');
    let BottomBlock = '';
    let num = 0;
    let count = 0;
    let temp = 50;
    let initialNum;
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
            num = document.documentElement.scrollTop;
            initialNum = num;
            BottomBlock = '';
            animation();
            handleMenu();
        });
    });

    const animation = () => {
        
        idInterval = requestAnimationFrame(animation);

        if ( num < (count + initialNum - temp) && (BottomBlock === true || BottomBlock === '')) {
            num = num + temp;
            document.documentElement.scrollTop = num;
            BottomBlock = true;
        } else if (num > (count + initialNum + temp) && (BottomBlock === false || BottomBlock == '')) {
            num = num - temp;
            document.documentElement.scrollTop = num;
            BottomBlock = false;
        } else {
            document.documentElement.scrollTop = count + initialNum;
            cancelAnimationFrame(idInterval);
        }

    };
    
};

export default menu;

