//z1 
const fs = require('fs');
const path = require('path');

// Путь к файлу
const filePath = path.join(__dirname, 'example.txt');

// Чтение файла
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  // Переворачиваем текст
  const reversedText = data.split('').reverse().join('');

  // Запись перевернутого текста обратно в файл
  fs.writeFile(filePath, reversedText, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка при записи файла:', err);
      return;
    }

    console.log('Файл успешно перезаписан в обратном порядке.');
  });
});

//z2
const http = require('http');
const fs = require('fs');
const path = require('path');

// Путь к файлу
const filePath = path.join(__dirname, 'example.txt');

// Создание сервера
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Обработка GET запроса
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Ошибка при чтении файла');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    });
  } else if (req.method === 'POST') {
    // Обработка POST запроса
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      fs.appendFile(filePath, body, err => {
        if (err) {
          res.statusCode = 500;
          res.end('Ошибка при добавлении в файл');
          return;
        }
        res.statusCode = 200;
        res.end('Данные успешно добавлены в файл');
      });
    });
  } else {
    // Другие методы запроса
    res.statusCode = 405;
    res.end('Метод запроса не поддерживается');
  }
});

// Запуск сервера
const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

//z3
