const express = require('express');
const path = require('path');

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/front/index.html`));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(`${__dirname}/front/about.html`));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(`${__dirname}/front/contact-mehtml`));
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(`${__dirname}/front/404.html`));
});

app.listen(PORT, () => console.log(`Server is running and listening on ${PORT}`));
