const http=require('http');

const server = http.createServer((req,res) =>{
    console.log("Server created");

    res.setHeader( 'Content-Type', 'text/html'); //tells what type of content we sending
    switch (req.url) {
    case '/':
        res.statusCode = 200;
        res.end("<h1>Hello World</h1>");
        break;

    case '/home':
        res.statusCode = 200;
        res.end("<h1>Welcome home</h1>");
        break;

    case '/about':
        res.statusCode = 200;
        res.end("<h1>'Welcome to about us'</h1>");
        break;

    case '/node':
        res.statusCode = 200;
        res.end("<h1>Welcome to my node js project</h1>");
        break;

    default:
        res.statusCode = 404;
        res.end("<h1>Error Not Found!</h1>");
}
});

let port = 3000;
server.listen(port, () => {
    console.log("Server is running.");
});


