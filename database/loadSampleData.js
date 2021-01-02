const db = require('./index.js');
const path = require('path');


const query = `COPY blog(title, description,images) FROM '${path.join(__dirname, 'blogData.csv')}' DELIMITER ',' CSV HEADER;`
const query2 = `COPY products(title, price, description,images) FROM '${path.join(__dirname, 'productsData.csv')}' DELIMITER ',' CSV HEADER;`

db.query(query, (err, res) =>{
  if (err) {
    console.error(err);
    return;
  }
  console.log('Successful insertion of blog posts');
});

db.query(query2, (err, res) =>{
  if (err) {
    console.error(err);
    return;
  }
  console.log('Successful insertion of products');
  db.end();
});
