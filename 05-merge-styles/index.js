const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

fs.writeFile(
   path.join(__dirname, 'project-dist', 'bundle.css'),
   '/*Start*/',
   (err) => {
       if (err) throw err;
       console.log('Файл был создан');
   }
);

fs.readdir(path.join(__dirname, 'styles'), 'utf8', (err, data) => {
   if (err) throw err;
 
   data.forEach(element => {
      let elem = path.parse(element);
      let ext = elem.ext;
      let name = elem.base;
      if (ext == '.css'){
         fs.readFile(
            path.join(__dirname, 'styles', name),
            'utf-8',
            (err, dataElem) => {
                if (err) throw err;
                fs.appendFile(
                  path.join(__dirname, 'project-dist', 'bundle.css'),
                  dataElem,
                  err => {
                      if (err) throw err;
                      console.log('Файл был дополнен');
                  }
              );
            }
        );   

      } else{
         return;
      }
   });

   
   
})
