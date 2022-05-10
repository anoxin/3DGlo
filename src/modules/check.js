const check = () => {
    const inputs = document.querySelectorAll('.calc-block > input[type="text"]');
    const inputsText = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputsEmail = document.querySelectorAll('input[type="email"]');
    const inputsPhone = document.querySelectorAll('input[type="tel"]');
   

    
    inputs.forEach(function(item) {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "");
        });
    });

    inputsText.forEach(function(item) {
        item.addEventListener('blur', (e) => {
            let newArr = [];

            // e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ\s\-]/g, "").trim();
            // e.target.value = e.target.value.replace(/[\s]+[\-]+[\s]+/g, "").trim();
            // // e.target.value = e.target.value.replace(/^[\-]+/g, "").trim();
            // // e.target.value = e.target.value.replace(/[\-]+$/g, "").trim();
            // e.target.value = e.target.value.substring(0, 1).toUpperCase() + e.target.value.substring(1).toLowerCase();
            // e.target.value = e.target.value.replace(/[\s]+/g, " ");

            // const testName = /([а-яёА-ЯЁ]+)/g;

            // e.target.value = e.target.value.replace(testName, (str, $1, $2, $3) => {
            //     return  `${$1}`;

                
            // });

            let textArr = e.target.value.match(/[а-яёА-ЯЁ]+\s*\-?/g);
            textArr.forEach((elem) => {
                elem = elem.replace(/^[\-]\-+/g, "");
                elem = elem.substring(0, 1).toUpperCase() + elem.substring(1).toLowerCase();
                newArr.push(elem);
            });
            e.target.value = newArr.join('');




        });
    });

    inputMessage.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ\s\-]/g, "").trim();
        e.target.value = e.target.value.replace(/[\s]+/g, " ");
    });

    inputsEmail.forEach(function(item) {
        item.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, "");
        });
    });

    inputsPhone.forEach(function(item) {
        item.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/g, "");
        });

    });

};

export default check;