const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('hello express')
})

app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('hello ajax')
})

app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('hello ajax post')
})

app.get('/server-json', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        name: 'aaa',
        age: 12,
    }
    let str = JSON.stringify(data)
    response.send(str)
})

app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    setTimeout(() => {
        response.send('延时响应')
    }, 3000);
})

app.get('/user', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('hello axios ajax')
})

app.listen(8000, () => {
    console.log('express already start...')
})