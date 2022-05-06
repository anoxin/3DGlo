const validate  = (formElements) => {
    let success = true;
    
    formElements.forEach((elem) => {
        elem.setAttribute('required', '');
        elem.addEventListener('input', (e) => {
            e.target.classList.remove('borderRed');
        });

        if (elem.name == "user_name" && (/[^а-яёА-ЯЁ\s]/g.test(elem.value) || elem.value == '' || elem.value.length < 2 )) {
            success = false;
            elem.classList.add('borderRed'); 
            elem.value = elem.value.replace(/[^а-яёА-ЯЁ\s]/g, "");
        }
        if (elem.name == "user_email" && (/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/.test(elem.value) || elem.value == '' ||
         !/[a-zA-Z0-9\-\_\.\!\~\*\']{2,30}[\@][a-zA-Z0-9\-\_\!\~\*\']{2,30}[/.][a-zA-Z0-9\-\_\.\!\~\*\']{2,10}/.test(elem.value) )) {
            success = false; 
            elem.classList.add('borderRed');
            elem.value = elem.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/, ""); 
        }
        if (elem.name == "user_phone" && elem.value.length < 18) {
            success = false; 
            elem.classList.add('borderRed');    
        }
        if (formElements.length !== 3) {
            if (elem.name == "user_message" && (/[^а-яёА-ЯЁ0-9\s\-\.\,\!\:\;\?\"\(\)]/g.test(elem.value))) {
                success = false;  
                elem.classList.add('borderRed');
                elem.value = elem.value.replace(/[^а-яёА-ЯЁ\s]/g, "");    
            }
        }

    });


    return success;
};

export { validate  };
