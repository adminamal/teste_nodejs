const http= require('http');
const server=http.createServer((req,res)=>{

if((req.url)=="/amal"){

    res.write("hello")
}


res.end()
})
server.listen(3000,()=>{console.log('rrr')})