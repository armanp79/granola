const db = require('../database/index.js');

exports.getAllBlogs = (callback) => {
  db.query('select * from blog;', (error, results)=>{
    if (error) {
      console.log('error getting all blog posts from database');
      callback(error);
    } else {
      callback(null, results);
    }
  });

};

exports.getAllProducts = (callback) => {
  db.query('select * from products;', (error, results)=>{
    if (error) {
      console.log('error getting all products from database');
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

exports.getProduct = (id, callback) => {
  db.query(`select * from products where productid = ${id};`, (error, results)=>{
    if (error) {
      console.log(`error getting product with id ${id} from database`);
      callback(error);
    } else {
      callback(null, results);
    }
  });
}

