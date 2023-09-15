const http = require("http")
const fs = require("fs")
const PORT = 8000

const home = fs.readFileSync("./index.html", "utf-8")
const server = http.createServer((req, res)=>{
    const pathname = req.url;
    if(pathname=== "/" )
        res.end(home)
    else if(pathname==="/about")
        res.end("About page")
    else if(pathname==="/contact")
        res.end("Contact page")
    else if(pathname==="/service")
        res.end("Service page")
    else{ 
    res.writeHead(404,) //for status code
    res.end("Page not found!")
    }
    
})

// listen to incoming request from the client
//Starting the server
server.listen(PORT,'localhost', ()=>{
    console.log("Server has been started")
})