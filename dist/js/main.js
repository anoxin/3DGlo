(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),c=e=>{console.log("start");let c=(()=>{let e=(new Date("29 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();c.timeRemaining>0&&(t.textContent=c.hours<10?"0"+c.hours:c.hours,n.textContent=c.minutes<10?"0"+c.minutes:c.minutes,l.textContent=c.seconds<10?"0"+c.seconds:c.seconds),c.timeRemaining<=0&&0==e&&clearInterval(o)};c(!0);let o=setInterval(c,1e3,!1)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=Array.prototype.slice.call(t.querySelectorAll("ul > li > a")).concat(Array.prototype.slice.call(document.querySelectorAll('main > a[href="#service-block"]')));let c,o,r="",a=0,u=0;const i=e=>{t.classList.toggle("active-menu")};e.addEventListener("click",i),n.addEventListener("click",i),l.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();let t=document.querySelector(e.target.getAttribute("href"));e.target==document.querySelector('img[src="images/scroll.svg"]')&&(t=document.querySelector("#service-block")),u=t.getBoundingClientRect().top,a=document.documentElement.scrollTop,c=a,r="",s(),e.target!==document.querySelector('img[src="images/scroll.svg"]')&&i()}))}));const s=()=>{o=requestAnimationFrame(s),a<u+c-50&&(!0===r||""===r)?(a+=50,document.documentElement.scrollTop=a,r=!0):a>u+c+50&&(!1===r||""==r)?(a-=50,document.documentElement.scrollTop=a,r=!1):(document.documentElement.scrollTop=u+c,cancelAnimationFrame(o))}})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");let l,c=0,o=!1;t.forEach((t=>{t.addEventListener("click",(()=>{o=!1,c=0,e.style.display="block",screen.width>768&&r()}))})),n.addEventListener("click",(()=>{o=!0,c=1,screen.width>768?r():e.style.display="none"}));const r=()=>{l=requestAnimationFrame(r),0==o&&c<1?(c+=.05,e.style.opacity=c):1==o&&c>0?(c-=.05,e.style.opacity=c):(1==o&&c<0&&(e.style.display="none"),cancelAnimationFrame(l))}})(),(()=>{const e=document.querySelectorAll('.calc-block > input[type="text"]'),t=document.querySelectorAll('input[placeholder="Ваше имя"]'),n=document.querySelector('input[placeholder="Ваше сообщение"]'),l=document.querySelectorAll('input[type="email"]'),c=document.querySelectorAll('input[type="tel"]');e.forEach((function(e){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),t.forEach((function(e){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ\s\-]/,"")}))})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яёА-ЯЁ\s\-]/,"")})),l.forEach((function(e){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/,"")}))})),c.forEach((function(e){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-\+]/,"")}))}))})()})();