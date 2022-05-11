import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import check from './modules/check';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('3 may 2022');
menu();
modal();
check();
tabs();
slider({portfolioContent: "portfolio-content", portfolioDotsClass: "portfolio-dots",
slidesDots: "dot", slidesItem: "portfolio-item", portfolioBtn: "portfolio-btn", arrowLeft: "prev", 
 arrowRight: "next", slideActive: "portfolio-item-active", dotActive: "dot-active"});
