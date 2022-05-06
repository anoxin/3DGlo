import { validate } from "./validate";

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
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


        formData.forEach((val, key) => {
            if (val !== '') {
                formBody[key] = val;
            }
            
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
            statusBlock.textContent = loadText;
            form.append(statusBlock);
            if (document.querySelectorAll('#form3 > div').length == 4) {
                document.querySelectorAll('#form3 > div')[3].style.color = 'white';
            }
            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = '';
                });
                setTimeout(() => {statusBlock.remove();}, 3000);
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
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

    function maskPhone(selector, masked = '+7 (___) ___-__-__') {
        const elems = document.querySelectorAll(selector);
    
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
    
        }
    
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
        
    }

    maskPhone('input[name="user_phone"]');

};

export default sendForm;