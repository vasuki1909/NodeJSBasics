const fs = require("fs");
// we can also import like this:
const {readFileSync,writeFileSync} = require("fs");
//Asynchronously reads the entire contents of a file.

fs.readFile("./sample.txt","utf-8", (err, data) => {
    if (err) throw err;
    console.log("async")
    console.log(data);
  }); 
   //if we want syncronous
   console.log("sync")
   const a = readFileSync("./starter/txt/input.txt","utf-8")
   console.log(a)
  console.log("i am printing first")

const writeText= `This is what I know about avaocodo ${a}.\nThank you!`
writeFileSync("./writingFile.txt", writeText)
fs.writeFile("./writingFile2.txt", writeText,(err)=>{if(err)throw err})



 