//1. 导入合约实例

//2. 读取数据

//3. 写入数据

//4. 读取数据

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


let instance = require('./03-instance')
// const from = '0xd5957914c31E1d785cCC58237d065Dd25C61c4D0'

//异步调用，返回值是一个promise
//2. 读取数据
/*
instance.methods.getValue().call().then(data => {
    console.log('data:', data)

    //3. 写入数据
    instance.methods.setValue('Hello HangTou').send({
        from: from,
        value: 0,
    }).then(res => {
        console.log('res : ', res)

        //4. 读取数据
        instance.methods.getValue().call().then(data => {
            console.log('data2:', data)
        })
    })
})
*/

//web3与区块链交互的返回值都是promise，可以直接使用async/await

let test = async () => {
    try {

        //获取当前区块链对应助记词的账户地址
        let accounts = await web3.eth.getAccounts()
        let from = accounts[0]

        let v1 = await instance.methods.getValue().call({
            from: from,
        })
        console.log('v1:', v1)

        // let res = await instance.methods.setValue('Hello HangTou').send({
        let res = await instance.methods.setValue('Hello ShangHai').send({
            from: from,
            gas : '3000000',
            value: 0,
        })

        console.log('res:', res)

        let v2 = await instance.methods.getValue().call({
            from: from,
            value: 0,
        })

        console.log('v2:', v2)
    } catch (e) {
        console.log(e)
    }
}

test()
