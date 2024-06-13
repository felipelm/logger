const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/api/logs', (req, res) => {
  const { level, message, timestamp, platform } = req.body;
  console.log(`[${timestamp}] [${platform}] [${level}] ${message}`);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Server is running');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
