(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),s=e=>{console.log("start");let s=(()=>{let e=(new Date("29 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();s.timeRemaining>0&&(t.textContent=s.hours<10?"0"+s.hours:s.hours,n.textContent=s.minutes<10?"0"+s.minutes:s.minutes,o.textContent=s.seconds<10?"0"+s.seconds:s.seconds),s.timeRemaining<=0&&0==e&&clearInterval(m)};s(!0);let m=setInterval(s,1e3,!1)})()})();