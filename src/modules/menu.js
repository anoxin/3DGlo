const menu = () => {
    const menuBts = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = Array.prototype.slice.call(menu.querySelectorAll('ul > li > a')).
    concat(Array.prototype.slice.call(document.querySelectorAll('main > a[href="#service-block"]')));
 
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
            if (event.target == document.querySelector('img[src="images/scroll.svg"]')) {
                blockId = document.querySelector('#service-block');
            }
            count = blockId.getBoundingClientRect().top;
            num = document.documentElement.scrollTop;
            initialNum = num;
            BottomBlock = '';
            animation();
            if (event.target !== document.querySelector('img[src="images/scroll.svg"]')) {
                handleMenu();
            }
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

