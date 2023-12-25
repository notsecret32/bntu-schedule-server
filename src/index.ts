import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req: express.Request, res: express.Response) => {
	res.json({ response: req.url })
})

app.listen(PORT, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
