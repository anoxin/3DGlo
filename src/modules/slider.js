
const slider = ({portfolioContent, portfolioDotsClass,
slidesDots, slidesItem, portfolioBtn, arrowLeft, 
 arrowRight, slideActive = "portfolio-item-active", dotActive = "dot-active"}) => {

    const sliderBlock = document.querySelector(`.${portfolioContent}`);
    const slides = document.querySelectorAll(`.${slidesItem}`);
    const portfolioDots = document.querySelector(`.${portfolioDotsClass}`);
    const sliderArr = [portfolioContent, portfolioDotsClass, 
    slidesItem, portfolioBtn, arrowLeft, 
     arrowRight, slideActive];
    let finishSlide = false;

    sliderArr.forEach((item) => {
        if (!document.querySelector(`.${item}`)) {
            finishSlide = true;
        } 

    });

    if (finishSlide) {
        document.querySelector('.portfolio-content').addEventListener('click', (e) => {
            e.preventDefault();
        });
        return;
    }
    
    const timeInterval = 2000;
    let currentSlide = 0;
    let dotIndex = 0;
    let interval;

    portfolioDots.innerHTML = '<li></li>';
    portfolioDots.querySelector('li').classList.add(slidesDots);

    slides.forEach(function () {
        if (dotIndex > 0) {
            portfolioDots.append(portfolioDots.querySelector('li').cloneNode(true));
        }        
        dotIndex++;
    });

    portfolioDots.querySelectorAll('li')[0].classList.add(dotActive);
    const dots = portfolioDots.querySelectorAll('li');

    const prevSlide = (elems, index, strClass) => {
            elems[index].classList.remove(strClass);
        };
        const nextSlide = (elems, index, strClass) => {
            elems[index].classList.add(strClass);
        };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, slideActive);
        prevSlide(dots, currentSlide, dotActive);
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, slideActive);
        nextSlide(dots, currentSlide, dotActive);//

    };
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches(`.${slidesDots}, .${portfolioBtn}`)) {
            return;
        }

        prevSlide(slides, currentSlide, slideActive);
        prevSlide(dots, currentSlide, dotActive);

        if (e.target.matches(`.${arrowRight}`)) {
            currentSlide++;
        } else if (e.target.matches(`.${arrowLeft}`)) {
            currentSlide--;
        } else if (e.target.classList.contains(slidesDots)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, slideActive);
        nextSlide(dots, currentSlide, dotActive);
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`.${slidesDots}, .${portfolioBtn}`)) {
            stopSlide();
        }
        }, true);

        sliderBlock.addEventListener('mouseleave', (e) => {
            if (e.target.matches(`.${slidesDots}, .${portfolioBtn}`)) {
            startSlide(timeInterval);
            }
        }, true);

    startSlide(timeInterval);

};


export default slider;