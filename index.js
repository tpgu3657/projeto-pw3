const express = require('express');

const app = express();

app.get('/',(req,res)=>{

console.log('rota raiz verbo http get');
res.send('rota raiz de verbo http get');


});

app.get('/teste',(req,res)=>{

    console.log('rota raiz verbo http get');
    res.send('rota raiz de verbo http get');
 

});

app.listen(300,()=>{
    console.log('servidor rodando');
});