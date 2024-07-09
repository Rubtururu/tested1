const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = process.env.PORT || 3000; // Puerto en el que correrá el servidor web, ajustado para GitHub Pages

// Token de acceso del bot de Telegram
const token = '7209539640:AAHiscqStO8mpy8aurPL6bunDFAtFfIy258'; // Reemplaza con el token de tu bot

// Crear instancia del bot de Telegram
const bot = new TelegramBot(token, { polling: true });

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para obtener el nombre de usuario desde el bot de Telegram
app.get('/getUsername', (req, res) => {
    // Obtener el nombre de usuario del bot
    bot.getMe().then(me => {
        res.send(me.username);
    }).catch(err => {
        console.error('Error al obtener información del bot:', err.message);
        res.status(500).send('Error al obtener información del bot');
    });
});

// Iniciar el servidor web
app.listen(port, () => {
    console.log(`Servidor web iniciado en http://localhost:${port}`);
});
