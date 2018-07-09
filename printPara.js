
module.exports = {

function getAndPrintHTML (options) {

  console.log("site 01: ", options.path[0]);
  console.log("site 02: ", options.host[0]);
  // console.log(options[1]);

var https = require('https');



  /* Add your code here */


https.get(options, function (response) {

  let newData = '';

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');


  response.on('data', function (data) {

    newData = data;
    console.log("NewData", newData);


  });

    response.on('end', function() {
    console.log('Response stream complete.', newData);
  });

});

}
}


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions);