const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`successfully connect at http://localhost:${port}`)
})

////

app.get('/test', (req, res) => {
  res.status(200).send({ status: 200, message: 'ok' });
});


app.get('/time', (req, res) => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const timeString = `${hours}:${minutes}`;
    
      res.status(200).send({ status: 200, message: timeString });
    });
    
