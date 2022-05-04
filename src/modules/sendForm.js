import { validate } from "./validate";

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadAnimation = `<section>
    <div class="sk-wandering-cubes">
      <div class="sk-cube sk-cube-1"></div>
      <div class="sk-cube sk-cube-2"></div>
    </div>
  </section>`;

    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';


        const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.innerHTML = loadAnimation;
        form.append(statusBlock);

        if (document.querySelectorAll('#form3 > div').length == 4) {
            document.querySelectorAll('#form3 > div')[3].style.color = 'white';
        }

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {

            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = '';
                });
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
        } else {
            alert('Данные не валидны!!!');
        }

    };

    try {     
        if(!form) {
            throw new Error('Верните форму на место, пожаааалуйста))');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm(); 
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;

