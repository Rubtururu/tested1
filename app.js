const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000; // Puerto en el que correrá el servidor web

// Token de acceso del bot de Telegram
const token = '7209539640:AAHiscqStO8mpy8aurPL6bunDFAtFfIy258'; // Reemplaza con el token de tu bot

// Crear instancia del bot de Telegram
const bot = new TelegramBot(token, { polling: true });

// Ruta inicial que mostrará el mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('<h1>¡Hola desde Telegram!</h1><p>Esperando respuesta del bot...</p>');

    // Manejar actualizaciones de mensajes
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;

        // Si el mensaje proviene de un usuario
        if (msg.from) {
            const username = msg.from.username;
            res.send(`<h1>¡Hola ${username} desde Telegram!</h1><p>¡Bienvenido!</p>`);
        } else {
            res.send('<h1>¡Hola desde Telegram!</h1><p>No se pudo obtener el nombre de usuario.</p>');
        }
    });
});

// Iniciar el servidor web
app.listen(port, () => {
    console.log(`Servidor web iniciado en http://localhost:${port}`);
});
