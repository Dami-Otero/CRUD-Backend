const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlwares = jsonServer.defaults()
const cors = require('cors')

server.use(cors())

server.use(middlwares)
server.use(router)

server.use(function(req, res, next){
    //setTimeout(next, 10000);
    next()
  });


const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})