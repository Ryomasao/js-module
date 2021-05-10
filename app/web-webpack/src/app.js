import jsCjs from 'js-cjs/src/main'

const bodyText = jsCjs();

document.getElementById('body').innerHTML = `
 ${bodyText}
`
// for debug
console.log(bodyText)
