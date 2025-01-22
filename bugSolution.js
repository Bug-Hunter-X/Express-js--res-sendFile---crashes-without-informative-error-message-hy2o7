const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    if (err) {
      // Handle the error gracefully
      console.error(err);
      res.status(404).send('<h1>404 - File Not Found</h1>');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});