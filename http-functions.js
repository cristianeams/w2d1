module.exports = function getHTML (options, callback) {
  var host = options[host];
  var path = options[path];
  var https = require('https');
  var dataChunks = '';

  //changes requestOptions to options
  https.get(options, function(response) {

    //set encoding to UTF-8
    response.setEncoding('utf8');

    //invoked when data is received
    //adds every chunk of data to dataChunks var
    response.on('data', function (data) {
      dataChunks += data;
    });

    //callback for when all data has been received
    //logs dataChunks when all data has been received
    //uses callback printHTML to output the result
    response.on('end', function() {
      //renamed functions to callback to match parameter passed. printHTML does not exist in this file
      callback(dataChunks);
    });

    //error callback
    response.on('error', function(err) {
      console.log(err.stack);
    });
  });
};

