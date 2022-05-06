const cssAdd = () => {

    const cssStyle = `
    .borderRed{ border: red 2px solid !important;}
    .sk-wandering-cubes {
        width: 4em;
        height: 4em;
        position: relative;
        margin: auto;
      }
      .sk-wandering-cubes .sk-cube {
        background-color: #337ab7;
        width: 1em;
        height: 1em;
        position: absolute;
        top: 0;
        left: 0;
        animation: sk-wandering-cubes 1.8s ease-in-out -1.8s infinite both;
      }
      .sk-wandering-cubes .sk-cube-2 {
        animation-delay: -0.9s;
      }
      @keyframes sk-wandering-cubes {
        0% {
          transform: rotate(0deg);
        }
        25% {
          transform: translateX(2em) rotate(-90deg) scale(0.5);
        }
        50% {
          /* Hack to make FF rotate in the right direction */
          transform: translateX(2em) translateY(2em) rotate(-179deg);
        }
        50.1% {
          transform: translateX(2em) translateY(2em) rotate(-180deg);
        }
        75% {
          transform: translateX(0) translateY(2em) rotate(-270deg) scale(0.5);
        }
        100% {
          transform: rotate(-360deg);
        }
      }`;

    document.querySelector('script').insertAdjacentHTML('afterend', `<style>${cssStyle}</style>`);

};
export default cssAdd;

