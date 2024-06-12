const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlwares = jsonServer.defaults()
const cors = require('cors')

server.use(cors({
    origin: 'http://localhost:4200/',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']

}))

server.use(function(req, res, next){
    setTimeout(next, 10000);
  });

server.use(middlwares)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})