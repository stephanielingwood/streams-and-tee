var fs = require('fs');
var fileName = (process.argv[2]).toString();
var toFile = fs.createWriteStream(fileName);

process.stdin.on("data", function(chunk){
  process.stdout.write(chunk);
  toFile.write(chunk);
});
