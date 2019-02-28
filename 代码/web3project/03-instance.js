//获取合约实例，导出去
let Web3 = require('web3')
let HDWalletProvider = require('truffle-hdwallet-provider')

//2. new 一个web3实例
let web3 = new Web3()
//3. 设置网络

let terms = 'scout same naive genius cannon maze differ acquire penalty habit surround ice'
let netIp = 'https://ropsten.infura.io/v3/02cd1e3c295c425597fa105999493baa'

let provider = new HDWalletProvider(terms, netIp)

// web3.setProvider('HTTP://192.168.28.30:7545')
// web3.setProvider('HTTP://127.0.0.1:7545')
web3.setProvider(provider)


let abi = [{
    "constant": true,
    "inputs": [],
    "name": "getValue",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_str", "type": "string"}],
    "name": "setValue",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"name": "_str", "type": "string"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}]
let address = '0xC767d61D2A180362711b23bEd280497A35A84634'


//此处abi已经json对象，不需要进行parse动作
let contractInstance = new web3.eth.Contract(abi, address)

console.log('address :', contractInstance.options.address)

module.exports = contractInstance
