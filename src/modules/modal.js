import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    let count = 0;
    let close = false;
    let idInterval;
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            close = false;
            count = 0;
            modal.style.display = 'block';
            if (screen.width > 768) {
                animation();
            }
  
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
        modal.style.display = 'none';
        }
    });

    const animation = () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              modal.style.opacity = progress;
            }
        });
    };

 



};

export default modal;

