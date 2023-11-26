const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const pathToDataBase = path.resolve(__dirname, 'db.json')
const router = jsonServer.router(pathToDataBase)

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального api
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800)
  })
  next()
})

const { users, posts } = JSON.parse(fs.readFileSync(pathToDataBase, 'UTF-8'))
server.post('/login', (req, res) => {
  try {
    const { email, password } = req.body
    const userFromBd = users.find(
      (user) => user.email === email && user.password === password
    )

    if (userFromBd) {
      return res.json(userFromBd)
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

server.get('/posts', (req, res) => {
  try {
    return posts.length ? res.json(posts) : res.status(403).json({ message: 'posts not found' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

server.use(router)

// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' })
  }

  next()
})

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port')
})
