import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(cookieParser())
app.use(
	cors({
		credentials: true,
	}),
)

const server = http.createServer(app)
server.listen(3000, () => {
	console.log('Server running on http://localhost:3000/')
})

server.on('error', (error: Error) => {
	console.error(error)
})
