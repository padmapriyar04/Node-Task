const path = require('path');

const absolutePath1 = "C:\\Users\\PADMA PRIYA\\OneDrive\\Desktop\\Web development\\react.txt";
const absolutePath2 = "C:\\Users\\PADMA PRIYA\\.atom";

const relativePath = path.relative(absolutePath2, absolutePath1);

console.log('Relative Path:', relativePath);


