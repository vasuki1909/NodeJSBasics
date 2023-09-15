const fs = require("fs");
fs.readFile("./starter/txt/start.txt","utf-8", (err, data1) => {
    console.log("hi1")
    fs.readFile(`./starter/txt/${data1}.txt`,"utf-8", (err, data2) => {
        console.log("hi2")
        console.log(data2);
        fs.readFile(`./starter/txt/append.txt`,"utf-8", (err, data3) => {
            console.log("hi3")
            console.log(data3);
        });
    }); 
}); 