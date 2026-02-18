import express from 'express';

const host = '0.0.0.0'
const porta = 3000;
const server = express(); //ofereçendo ao desenvolvedor um servidor http de modo expresso
//rechear o servidor com funcionalidades


server.get('/', (requisicao,resposta) =>{
    resposta.send(`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="assets/css/styl.css">
                    <title>Document</title>
                </head>
                <body>
                <h1> Primeiro programa usando javascript node e express</h1>
                <h2>Olám seja bem vindo a pagina inicial</h2>
                </body>
             </html>
        `)
});;

server.get('/horaAtual', (requisicao,resposta) =>
{
    const horaAtual = new Date();
    const hora = horaAtual.getHours() + ":" + horaAtual.getMinutes() + ":" + horaAtual.getSeconds();
    resposta.send(`  <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="assets/css/styl.css">
                    <title>Document</title>
                </head>
                <body>
                <h1>Agora são ${hora}</h1>
                </body>
             </html>`

    )
})

server.listen(porta, host, ()=>{
console.log(`Servidor escutando em http://${host}:${porta}`);

});
