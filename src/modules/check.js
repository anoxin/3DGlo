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
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ\s\-]/g, "").trim() ;
            e.target.value = e.target.value.substring(0, 1).toUpperCase() + e.target.value.substring(1).toLowerCase();
            e.target.value = e.target.value.replace(/[\s]+/g, " ");
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