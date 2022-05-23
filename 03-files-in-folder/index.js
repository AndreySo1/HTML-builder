const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), 'utf8', (err, data) => {
   if (err) throw err;
 
   console.log(data);
   data.forEach(element => {
      let elemOb = path.parse(element);
      console.log(`${elemOb.name} - ${elemOb.ext} - `);
   });

 });