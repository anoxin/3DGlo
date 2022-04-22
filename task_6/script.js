const time = document.getElementById('time');
const weekday = new Date().toLocaleDateString("ru", {weekday: "long"});

let timeOfDay = (myHours) => {
    if ((myHours >= 5) && (myHours < 11)) {
        return 'Доброе утро';
    }
    if ((myHours >= 11) && (myHours < 16)) {
        return 'Добрый день';
    }
    if ((myHours >= 16) && (myHours <= 23)) {
        return 'Добрый вечер';
    }
    if ((myHours >= 0) && (myHours < 5)) {
        return 'Доброй ночи';
    }
};

const getTimeRemaining = (deadline) => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow)/1000;
    let day = Math.floor(timeRemaining/60/60/24);
    
    return day;
};

const updateClock = () => {
    console.log('start');
    let getTime = getTimeRemaining();
    time.textContent = `${timeOfDay(new Date().getHours())}
    Сегодня: ${weekday.toUpperCase()[0]}${weekday.slice(1)}
    Текущее время: ${new Date().toLocaleTimeString("en", {hour: "numeric", minute: "numeric", second: "numeric"})}
    До нового года осталось ${getTimeRemaining(`01 january ${new Date().getFullYear()+1}`)} дней`;
    if (getTime.timeRemaining <= 0) {
        clearInterval(startTimer);            
    }
    
};

let startTimer = setInterval(updateClock, 1000); 

