const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

process.on('exit', (data) => {
      //stdout.write(`Bye ${data}`);
      stdout.write(`Bye, see you later`);
    } 
);

console.log('Hello, What is your name?');
//stdin.on('data', ....)
rl.on('line', (data)=>{
   let dataStr = data.toString();
   if(dataStr == 'exit'){
      //process.exit(dataStr);
      process.exit();     
    };

   fs.access(path.join(__dirname, 'name.txt'), function(error){
      if (error) {
          console.log("File be create");
          
         fs.writeFile(
            path.join(__dirname, 'name.txt'),
            `${dataStr}\n`,
            (err) => {
               if (err) throw err;
               stdout.write(`Hello ${dataStr}, your name write in file \n`);
                }
         )
      } 

      if(!error) {
         fs.appendFile(
            path.join(__dirname, 'name.txt'),
            `${dataStr}\n`,
            (err) => {
               if (err) throw err;
               stdout.write(`Hello ${dataStr}, your name write in file \n`);
                }
         )
      }
   });

})




