import { animate } from "./helpers";

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;
        let sum = 0;
        let numbInterval;

        const numbAnimate = () => {
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    sum = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
                    if (sum > totalValue) {
                        totalValue += 50;
                    }
                    total.textContent = totalValue;
                }
            });
        };

        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            numbAnimate();
        } else {
            totalValue = 0;
        }

    };
    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
                if (e.target.value != '') {
                    countCalc();
                }
            
            }
        });
    
    };

export default calc;