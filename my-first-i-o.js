var fs = require('fs'),
    num_lines = fs.readFileSync(process.argv[2]).toString().split("\n").length;
console.log(num_lines);