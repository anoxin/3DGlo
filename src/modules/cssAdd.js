const cssAdd = () => {

    const cssStyle = `
    .validate-error{ border: red 2px solid !important;}`;

    document.querySelector('script').insertAdjacentHTML('afterend', `<style>${cssStyle}</style>`);

};
export default cssAdd;

