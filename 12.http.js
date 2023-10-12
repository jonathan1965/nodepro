const http = require('http')

const serve = http.createServer((req,res)=>{
  if (req.url ==="/"){
    res.end('welcome to our home page')
  }
  if(req.url === '/about') {
    res.end('here is our short hi message from about page')
  }

res.end(
    `<h1>Oop!</h1>
    <p>we can not seem to find the page you are looking for</p>
    <a href="/">back home</a>

`)
})

serve.listen(9000)