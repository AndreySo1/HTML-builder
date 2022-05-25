const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'files-copy'), err => {
//    if (err) console.log('Error for create folder');

//    console.log('Folder create');
   
//    fs.copyFile(path.join(__dirname, 'files', 'test-text.txt'), path.join(__dirname, 'files-copy', 'test-text.txt'), (err) =>{
//       if (err) console.log('Error for copy file');

//       console.log('File copied');
//    }
//    );
// });


let createFolder = async (path) =>{
   return new Promise((resolve, reject) => fs.mkdir(path, err => {
         if(err){
            return reject('Error for create folder');
         }

         console.log('Folder create');
         resolve();
   }))
};

let copyF = async (path , path2) =>{
   return new Promise((resolve, reject) => fs.copyFile(path, path2, (err)=>{
         if(err){
            return reject('Error for copy file');
         }

         console.log('File copied');
         resolve();
   }))
};

createFolder(path.join(__dirname, 'files-copy'))
   .then( () => copyF(path.join(__dirname, 'files', 'test-css.css'), path.join(__dirname, 'files-copy', 'test-css.css')))
   .then( () => copyF(path.join(__dirname, 'files', 'test-image.jpg'), path.join(__dirname, 'files-copy', 'test-image.jpg')))
   .then( () => copyF(path.join(__dirname, 'files', 'test-js.js'), path.join(__dirname, 'files-copy', 'test-js.js')))
   .then( () => copyF(path.join(__dirname, 'files', 'test-text.txt'), path.join(__dirname, 'files-copy', 'test-text.txt')))
   .catch( err => console.log('Erororrrrrr111111'))

