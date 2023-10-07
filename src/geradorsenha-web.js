const express = require('express');
const app = express();


app.get('/gerarSenha', (req, res) => {
    const tamanho = parseInt(req.query.tamanho) || 6;

    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

    let senha = "";
    const caracteresLength = caracteres.length;

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresLength);
        senha += caracteres.charAt(indiceAleatorio);
    }

    res.json({ senhaGerada: senha });
});



app.listen(3000);