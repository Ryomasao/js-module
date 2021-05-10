import jsCjs from 'js-cjs'

const bodyText = jsCjs();

if(typeof window !== 'undefined') {
  document.getElementById('app').innerHTML = `
   <h1>
    Yes!! ${bodyText}
   </h1>
  `
}
// for debug
console.log(bodyText)
