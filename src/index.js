// модульная структура 
//  нужна для деления js файлов каждый функционал отдельно
// чтобы одинаковые названия не конфликтовали с друг другом разработчики стали иползовать свои области видимости
// пример
/* 
const burgerFunc = () => {
    const burger = 'my menu';
    console.log(burger);
};

burgerFunc();

// но рано или поздно имена функций тоже будут одинаковы
// выход нашелся с ананимными функциями
// пример
(function () {
    const slider = 'best slider';
})();
// или 
(() => {
    const slider = 'best slider';
})(); // способ инкапсуляции
 */
// так как к фалу html прикреплялось огромное количество js файлов был придуман модуль
// модуль законченный независимый фцнкциональный блок
// в мапке modules содержиться модули пример

/* const sliderModule = () => {
    const slider = 'my slider';
    console.log(slider);
};

module.exports = sliderModule; */

// js будет точкой входа он будет принимать все модули и запускать
// нужен сборщик browserify
//  команда для установки в терменале npm install -g browserify
// вторая команда browserify src/index.js -o bundle.js для сборки

/* const burger = require('./modules/burger');
import sliderOne from './modules/slider';
const sliderTwo = require('./modules/badScript');

burger();
sliderOne();
sliderTwo(); */

import burger from './modules/burger';
import sliderOne from './modules/slider';
import sliderTwo from './modules/badScript';

burger();
sliderOne();
sliderTwo();

// инструмент webpack
// то же сборщик только всей документации
// npm init - определяет ваш проект
// далее заполняем package.json (описание вашего проекта) с настройками
// далее последняя команда npm install webpack webpack-cli --save-dev
// теперь два проекта webpack webpack-cli установлены локально
// были созданны папкa node_modules и файл package-lock.json
// команда npm i создаст эти папки по package.json
// чтобы эти файлы не попадали в gitHub нужно создать фаил .gitignore
// кидаем туда
// /node_modules
// package-lock.json
// npx webpack появляется папка dist с main.js
// запускаем браузер и все модули работают
// переделываем package.json вместо "test" вставляем "build": "webpack"
// теперь можем обновлять main.js командой npm run build
// чтобы не набирать эту команду постоянно переделываем package.json
// добавляем настройку "watch": "webpack --watch"
// теперь в конмоли запускаем команду npm run watch
// теперь webpack будет следить за кодом постоянно
// ипользовать export default sliderModule; и import sliderOne from './modules/slider';

// дальнейшая настройка создаем файл webpack.config.js
// в нем
/* 
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'), // папка по умолчанию
    entry: './index.js', // главная точка входа
    output: {
        filename: 'main.js', // название файла
        path: path.resolve(__dirname, 'dist') // корневой каталог и куда будет помещен
    }
}; */

// далее переходим package.json к "build": "webpack" добавляем так "build": "webpack --mode=production"
// а в watch  "webpack --watch --mode=development"

// теперь устанваливаем webpack server вмеcто live server
// команда npm i webpack-dev-server --D ставим на development так как на production не нужна
// нужно настроить проект чтобы он открывался webpack-dev-server
// создаем свойство для настройки в webpack.config.js
// пример
/* 
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'), // папка по умолчанию
    entry: './src/index.js', // главная точка входа
    output: {
        filename: 'main.js', // название файла
        path: path.resolve(__dirname, 'dist') // корневой каталог и куда будет помещен
    },
    devServer: {
        hot: true, // горячая перезагрузка
        static: {
            directory: './dist',
            watch: true // для того чтобы сервер следил за нашими файлами
        }

    }
}; */

// далее перезодим package.json и после watch пишем 
// "start": "webpack serve --mode=development --open"
// перемещаем index.html в папку dist
// и запустим npm run start