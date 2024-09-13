document.querySelector('head').appendChild(document.createElement('style'))
for (let i = 6 ; i >= 1; i--) {
myFunction(document.getElementsByTagName(`h${i}`));//mengambil tag element
}
const div = document.querySelectorAll('div');//mengambil tag element
const span = document.querySelectorAll('span');//mengambil tag element
const para = document.querySelectorAll('p');//mengambil tag element
const href = document.querySelectorAll('a');//mengambil tag element
myFunction(div)
myFunction(para)
myFunction(span)
myFunction(href)

function myFunction(z) {
  for (let i = 0; i < z.length; i++) {
        a(z[i]);//looping element
  }
}
function a(b) {
        c(b.getAttribute('class').split(' '))//memisahkan class
}
function c(d) {
        const sheet = window.document.styleSheets[0]
        d.map((value)=>{
                let v= value.replace(/_/,':').replace(/P$/,'%');
                sheet.insertRule( `.${value}{${v}; }`,sheet.cssRules.length)
        } )//mengambil value
}
