const validate  = (formElements) => {
    const inputsText = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputsEmail = document.querySelectorAll('input[type="email"]');
    const inputsPhone = document.querySelectorAll('input[type="tel"]');
    let num = (+(formElements[0].form.id).substring(4)-1);

    let success = true;

    


    if (/[^а-яёА-ЯЁ\s]/.test(inputsText[num].value) || inputsText[num].value == '') {
        success = false;     
    }
    if (/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/.test(inputsEmail[num].value) || inputsEmail[num].value == '') {
        success = false;     
    }
    if (/[^0-9\(\)\-\+]/.test(inputsPhone[num].value) || inputsPhone[num].value == '') {
        success = false;     
    }
    
    if (formElements.length !== 3) {
        if (/[^а-яёА-ЯЁ0-9\s\-\.\,\!\:\;\?\"\(\)]/.test(inputMessage.value) || inputMessage.value == '') {
            success = false;     
        }
    }



    return success;
};

export { validate  };
