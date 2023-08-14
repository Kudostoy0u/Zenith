const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  console.log("recieved")
  const formData = req.body;
  console.log(req.body)
  fs.appendFile('response.txt', Object.keys(formData).map(key => `${key}: ${formData[key]}`).join(' | ') + '\n', err => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Error writing to file');
    }

    console.log('Form data stored successfully:', formData);
    res.status(200).json({ message: 'Form data stored successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});