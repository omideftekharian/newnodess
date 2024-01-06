const http = require('http');
const PORT = process.env.PORT || 3030;


function rep(req,res){
    res.Write("Hello")
    res.end()
}

const server = http.createServer (rep)

function log(){
    console.log(`server started on port ${PORT}`)
}
server.listen(PORT,log)