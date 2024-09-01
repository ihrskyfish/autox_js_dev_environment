const fs = require('fs');
const path = require('path');

function persistFirstArg(func, filePath) {
  return function(...args) {
    const firstArg = args[0];
    fs.writeFileSync(filePath, JSON.stringify(firstArg), 'utf8');
    return func(...args);
  };
}

// 示例函数
function exampleFunction(arg1, arg2) {
  console.log('arg1:', arg1);
  console.log('arg2:', arg2);
  return arg1 + arg2;
}

// 包装后的函数
const wrappedFunction = persistFirstArg(exampleFunction, path.join(__dirname, 'firstArg.json'));

// 调用包装后的函数
wrappedFunction('Hello', 'World');