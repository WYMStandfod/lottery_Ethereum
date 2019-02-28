//导入solc编译器
let solc = require('solc') //0.4.25

let fs = require('fs')

//读取合约
let sourceCode = fs.readFileSync('./contracts/SimpleStorage.sol', 'utf-8')

let output = solc.compile(sourceCode, 1)

// console.log('output :', output)
//{age : 17, name : 'lily', address : 'sz'}

// console.log('abi :', output['contracts'][':SimpleStorage']['interface'])

module.exports = output['contracts'][':SimpleStorage']

