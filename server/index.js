const express = require('express');
const app = express();
const path = require('path');

const { getProduct, getAllBlogs, getAllProducts } = require('./models.js');
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/api/blog', function(req,res){
  getAllBlogs((err, results)=> {
    if (err) {res.sendStatus(500);}
    res.status(200).send(results.rows);
  });
});

app.get('/api/products/:id', function(req,res){
  const id = req.params.id;
  if (id === 'all') {
    getAllProducts((err, results)=> {
      if (err) {res.sendStatus(500);}
      res.status(200).send(results.rows);
    });
  } else {
    getProduct(id, (err, results)=> {
      if (err) {res.sendStatus(500);}
      res.status(200).send(results.rows);
    });
  }
});


app.get('/*', function(req, res) {
  console.log(req.url)
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