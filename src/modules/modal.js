const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
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

    closeBtn.addEventListener('click', () => {
        close = true;
        count = 1;
        if (screen.width > 768) {
            animation();
        } else {
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

console.dir(screen.width);
