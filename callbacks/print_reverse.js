var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var array;

function printReverse (html) {
  // console.log(html.reverse());




  array = html.split("");
  array.reverse();
  html = array.join('');

  console.log(html)

  /* Write your code here! */

}

getHTML(requestOptions, printReverse);