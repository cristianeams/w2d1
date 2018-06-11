

function getAndPrintHTMLChunks () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    //set encoding to UTF-8
    response.setEncoding('utf8');

    //invoked when data is received
    //logs each data received in a new line
    response.on('data', function (data) {
      console.log('Chunk of data received. Data: ', data + "\n");
    });

    //callback for when all data has been received
    response.on('end', function() {
      console.log('Response stream complete');
    });

  });

}

 getAndPrintHTMLChunks();