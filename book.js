// server.js (Node.js + Express)
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json()); // ��� �������� JSON ������

// ��������� POST-������� ��� ������ ������
app.post('/save_booking', (req, res) => {
    const { date, time, plot, userTag } = req.body;

    // ��������� ������ ��� ������ � ����
    const bookingData = `����: ${date}, �����: ${time}, �����: ${plot}, ��� ������������: ${userTag}\n`;

    // ���������� ������ � ���� bookings.txt
    fs.appendFile('bookings.txt', bookingData, (err) => {
        if (err) {
            console.error('������ ������ � ����:', err);
            return res.status(500).json({ message: '������ ������ ������.' });
        }
        res.status(200).json({ message: '������ ������� ��������.' });
    });
});

app.listen(port, () => {
    console.log(`������ ������� �� http://localhost:${port}`);
});
