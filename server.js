const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();

app.use(express.urlencoded({extended:true}));


app.get('/', (request, response)=>{
response.sendFile(__dirname+'\\index.html');
});


app.post('/bmi', (request, response) => {
let height = Number(request.body.height)/100;
let weight = Number(request.body.weight);
let bmi = weight/(height*height);
console.log(bmi);
});


const port = 3000

app.listen(port, ()=> {
    console.log(`Server is running ${port}.`);
});