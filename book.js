// server.js (Node.js + Express)
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json()); // Для парсинга JSON данных

// Обработка POST-запроса для записи данных
app.post('/save_booking', (req, res) => {
    const { date, time, plot, userTag } = req.body;

    // Формируем строку для записи в файл
    const bookingData = `Дата: ${date}, Время: ${time}, Сюжет: ${plot}, Тег пользователя: ${userTag}\n`;

    // Записываем данные в файл bookings.txt
    fs.appendFile('bookings.txt', bookingData, (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            return res.status(500).json({ message: 'Ошибка записи данных.' });
        }
        res.status(200).json({ message: 'Данные успешно записаны.' });
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
