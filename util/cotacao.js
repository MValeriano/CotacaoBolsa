const request = require('request');

const apí_token = 'UnWKQPMQtxr0pby8OejtkO1B6H90YjVXuvqYK0aPTRaQc3JkLEgcruGDtUDC'

const cotacao = (symbol,callback) =>{
const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${apí_token}`

//VALE5.SA BBAS3.SA PETR4.SA

    const dados = request({url:url,json:true},(err,{ body : {data:[{symbol, name, price}]} } ) =>{
        const data = {
            symbol,
            name,
            price
        }

        callback(data);

    })
}

module.exports = {
    cotacao
}