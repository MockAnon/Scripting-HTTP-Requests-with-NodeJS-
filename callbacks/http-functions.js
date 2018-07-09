


module.exports = function getHTML (options, callback) {

    var https = require('https');
    /* Your code here */


  https.get(options, function (response) {

    let newData = '';

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');


    response.on('data', function (data) {

      newData = data;
      // console.log("NewData", newData);
      // callback(newData);


    });

      response.on('end', function() {
      // console.log('Response stream complete.', newData);
      callback(newData);
    });

  });

};

// getHTML(requestOptions, printHTML);
