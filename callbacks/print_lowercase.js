var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());

  /* Write your code here! */

}

getHTML(requestOptions, printLowerCase);