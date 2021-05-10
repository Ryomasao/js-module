import jsCjs from 'js-cjs'

const bodyText = jsCjs();

document.getElementById('body').innerHTML = `
 ${bodyText}
`
// for debug
console.log(bodyText)
