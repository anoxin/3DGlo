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
            let lastSivol = ' ';
            let textArr = e.target.value.match(/[а-яёА-ЯЁ]+\s*\-?/g);
            const checkName = () => {
                textArr.forEach((elem) => {
                    elem = elem.replace(/[\s]+\-/g, "-");
                    elem = elem.replace(/[\s]+/g, " ");
                    if (lastSivol == ' ') {
                        elem = elem.substring(0, 1).toUpperCase() + elem.substring(1).toLowerCase();
                    } else {
                        elem = elem.toLowerCase();
                    }
                    newArr.push(elem);
                    lastSivol = elem.slice(-1);
                });
                e.target.value = newArr.join('');
                e.target.value = e.target.value.replace(/[\-]+$/g, "").trim();

            };
            if (textArr != null) {
                checkName();
            } else {
                e.target.value = '';
            }
  
        });
    });

    inputMessage.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ\s\-]/g, "").trim();
        e.target.value = e.target.value.replace(/[\s]+/g, " ");
        e.target.value = e.target.value.replace(/^[\-]+/g, "").trim();
        e.target.value = e.target.value.replace(/[\-]+$/g, "").trim();
        e.target.value = e.target.value.substring(0, 1).toUpperCase() + e.target.value.substring(1).toLowerCase()
    });

    inputsEmail.forEach(function(item) {
        item.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, "");
            e.target.value = e.target.value.replace(/^[\-]+/g, "").trim();
            e.target.value = e.target.value.replace(/[\-]+$/g, "").trim();
            e.target.value = e.target.value.replace(/(\-*\_*\.*\!*\~*\**\'*)/g, (str, $1) => {
                return  `${$1.slice(-1)}`;       
            });
            e.target.value = e.target.value.replace(/(\@*)/g, (str, $1) => {
                return  `${$1.slice(-1)}`;       
            });

        });
    });

    inputsPhone.forEach(function(item) {
        item.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/g, "");
            e.target.value = e.target.value.replace(/^[\-]+/g, "").trim();
            e.target.value = e.target.value.replace(/[\-]+$/g, "").trim();
            e.target.value = e.target.value.replace(/([\(\)\-\+])+/g, (str, $1) => {
                return  `${$1.slice(-1)}`;       
            });
        });

    });

};

export default check;