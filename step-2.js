function getAndPrintHTMLChunks () {
  var https = require('https');
  var dataChunks = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    //set encoding to UTF-8
    response.setEncoding('utf8');

    //invoked when data is received
    //adds every chunk of data to dataChunks var
    response.on('data', function (data) {
      dataChunks += data;
    });

    //callback for when all data has been received
    //logs dataChunks when all data has been received
    response.on('end', function() {
      console.log(dataChunks);
    });

    //error callback
    response.on('error', function(err) {
      console.log(err.stack);
    });
  });
}

 getAndPrintHTMLChunks();