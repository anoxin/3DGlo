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
        idInterval = requestAnimationFrame(animation);
        if (close == false && count < 1) {
            count = count + 0.05;
            modal.style.opacity = count;
        }
        else if (close == true && count > 0) {
            count = count - 0.05;
            modal.style.opacity = count;
        } else {
            if (close == true && count < 0) {
                modal.style.display = 'none';
            }
            cancelAnimationFrame(idInterval);
        }

    };

};

export default modal;

