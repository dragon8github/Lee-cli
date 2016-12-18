#! E:\nodejs\node
var argv = process.argv;
argv.shift()
argv.shift();
var filePath = __dirname;
var currentPath = process.cwd();

var data = {
  model: argv[0],
  attr:{
  }
}

for(var i = 1; i < argv.length; i++) {
  var arr = argv[i].split(':')
  var k = arr[0];
  var v = arr[1];
  
  data.attr[k] = v
}

console.dir(data)

console.log(argv);
console.log(filePath);
console.log(currentPath);


var fs = require('fs')
var nunjucks = require('nunjucks');

var tpl = fs.readFileSync(filePath + '/tpl/test.tpl').toString()

  var compiledData = nunjucks.renderString(tpl, data);
  
   fs.writeFileSync(currentPath + '/build/test.cat', compiledData)
   
  console.log(compiledData)
  
  