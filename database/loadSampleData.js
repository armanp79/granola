const db = require('./index.js');
const path = require('path');


const query = `COPY blog(title, description,images) FROM '${path.join(__dirname, 'blogData.csv')}' DELIMITER ',' CSV HEADER;`

db.query(query, (err, res) =>{
    if (err) {
      console.error(err);
      return;
    }
    console.log('Successful insertion');
    db.end();
  });
