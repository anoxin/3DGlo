const validate  = (formElements) => {
    let success = true;
    
    formElements.forEach((elem) => {
        elem.setAttribute('required', '');
        elem.addEventListener('input', (e) => {
            checkValidate();
        });

        const checkValidate = () => {
            if (elem.name == "user_name" && (/[^а-яёА-ЯЁ\s]/g.test(elem.value) || /^[\s]+/.test(elem.value) || elem.value == '' || elem.value.length < 2 )) {
                success = false;
                elem.classList.add('validate-error'); 
                elem.value = elem.value.replace(/[^а-яёА-ЯЁ\s]/g, "");
            } else if (elem.name == "user_name") {
                elem.classList.remove('validate-error');
            }
            if (elem.name == "user_email" && (/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/.test(elem.value) || elem.value == '' ||
             !/[a-zA-Z0-9\-\_\.\!\~\*\']{2,30}[\@][a-zA-Z0-9\-\_\!\~\*\']{2,30}[/.][a-zA-Z0-9\-\_\.\!\~\*\']{2,10}/.test(elem.value) )) {
                success = false; 
                elem.classList.add('validate-error');
                elem.value = elem.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/, ""); 
            } else if (elem.name == "user_email") {
                elem.classList.remove('validate-error');
            }
            if (elem.name == "user_phone" && elem.value.length < 18) {
                success = false; 
                elem.classList.add('validate-error');    
            } else if (elem.name == "user_phone") {
                elem.classList.remove('validate-error');
            }
            if (formElements.length !== 3) {
                if (elem.name == "user_message" && (/[^а-яёА-ЯЁ0-9\s\-\.\,\!\:\;\?\"\(\)]/g.test(elem.value))) {
                    success = false;  
                    elem.classList.add('validate-error');
                    elem.value = elem.value.replace(/[^а-яёА-ЯЁ\s]/g, "");    
                }
            } else if (elem.name == "user_message") {
                elem.classList.remove('validate-error');
            }

        };

        checkValidate();

    });


    return success;
};

export { validate  };
