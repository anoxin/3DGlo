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

const getDateRemaining = (deadline) => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow)/1000;
    let day = Math.floor(timeRemaining/60/60/24);
    
    return day;
};


const correctsWordEndings = (num, array) => { 
    switch (true) {
      case +((num += '').substr(-2)) > 10  &&  
      +((num += '').substr(-2)) <= 20 : 
      return num  + ' ' + array[2];
      case num % 10 === 0: return num  + ' ' + array[2];
      case num % 10 === 1: return num  + ' ' + array[0];
      case num % 10 < 5: return num  + ' ' + array[1];
      default: return num  + ' ' + array[2];
    }
  };

const updateClock = () => {
    let getDate = getDateRemaining();
    time.innerHTML = `${timeOfDay(new Date().getHours())} <br>
    Сегодня: ${weekday.toUpperCase()[0]}${weekday.slice(1)} <br>
    Текущее время: ${new Date().toLocaleTimeString("en", {hour: "numeric", minute: "numeric", second: "numeric"})} <br>
    До нового года осталось ${
    correctsWordEndings(getDateRemaining(`01 january ${new Date().getFullYear()+1}`), ['день', 'дня', 'дней'])}`;

    if (getDate.timeRemaining <= 0) {
        clearInterval(startTimer);            
    }
    
};

let startTimer = setInterval(updateClock, 1000); 

