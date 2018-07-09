function getHTML (options, callback) {

  /* Add your code here */


  var https = require('https');



  https.get(options, function (response) {

    let newData = '';

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');


    response.on('data', function (data) {

      newData = data;
      // console.log("NewData", newData);
      callback(newData);


    });

      response.on('end', function() {
      // console.log('Response stream complete.', newData);
      callback(newData);
    });

  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};



getHTML(requestOptions, printHTML);
