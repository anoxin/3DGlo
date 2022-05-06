import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import check from './modules/check';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import cssAdd from './modules/cssAdd';


document.querySelectorAll('form').forEach((elem) => {
    const formElemId = elem.id;
    elem.setAttribute('novalidate', '');
    sendForm({
        formId: `${formElemId}`,
        someElem: [
            {
                type: 'block',
                id: 'total'
            }
        ]
    });
});

timer('12 may 2022');
menu();
modal();
check();
tabs();
slider();
calc(100);
cssAdd();
