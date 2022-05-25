const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), 'utf8', (err, data) => {
   if (err) throw err;
 
   //console.log(data);
   data.forEach(element => {
      
      let elem =element;
      let elemPath= path.join(__dirname, 'secret-folder', elem);
 
      fs.stat(elemPath, 'utf-8',  (error, stats) => {
         
         let elemOb = path.parse(element);
         let ext= elemOb.ext;
         
         if(stats.size == 0){
            ext = 'Folder';
         }

         console.log(`${elemOb.name} - ${ext} - ${stats.size ? stats.size/1000+'kb' : 'Folder'} `);
      });

   });

 });