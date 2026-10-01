const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express! Running under PM2.');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/crash', (req, res) => {
  process.exit(1);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
