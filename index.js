#!/usr/bin/env node

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  const path = req.url;

  const render = (file) => {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      console.log(file);
      res.writeHead('200', { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  };
  if (path === '/') {
    render('front/index.html');
  } else if (path === '/about') {
    render('front/about.html');
  } else if (path === '/contact-me') {
    render('front/contact-me.html');
  } else {
    render('front/404.html');
  }
});
server.listen(port, hostname, () => {
  console.log(`the server is running on ${hostname}:${port}`);
});
