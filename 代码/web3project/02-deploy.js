let {bytecode, interface} = require('./01-compile')
//1. 引入web3
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

const account = '0xd5957914c31E1d785cCC58237d065Dd25C61c4D0'

console.log('version :', web3.version)
// console.log(web3.currentProvider)

//1. 拼接合约数据 interface
let contract = new web3.eth.Contract(JSON.parse(interface))

//2. 拼接bytecode
// contract.deploy({
//     data: bytecode, //合约的bytecode
//     arguments: ['HelloWorld'] //给构造函数传递参数，使用数组
// }).send({
//     from: account,
//     gas: '3000000', //不要用默认值，一定要写大一些， 要使用单引号
//     //gasPrice: '1',
// }).then(instance => {
//     console.log('address :', instance.options.address)
// })


let deploy = async () => {
    //1. 现获取所有的账户
    let accounts = await web3.eth.getAccounts()
    console.log('accounts :', accounts)


    //2. 执行部署
    let instance = await contract.deploy({
        data: bytecode, //合约的bytecode
        arguments: ['HelloWorld'] //给构造函数传递参数，使用数组
    }).send({
        from: accounts[0],
        gas: '3000000', //不要用默认值，一定要写大一些， 要使用单引号
        //gasPrice: '1',
    })

    console.log('instance address :', instance.options.address)

}


deploy()
