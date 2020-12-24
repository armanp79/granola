const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
const port = 3000;
app.listen(port, ()=>{
  console.log('Listening on port', port);
})