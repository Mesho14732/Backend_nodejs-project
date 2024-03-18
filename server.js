const http =require (`http`);
const HOSTNAME = `localhost`
const PORT= 5000

function requestHandler(req, res){
    console.log(req);
    res.writeHead(200)
    res.write(`My name is Armang Meshak Sale`);
    res.end();
}

const server =http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, ()=>{
    console.log (`server is running on http://${HOSTNAME}:${PORT}`);
})