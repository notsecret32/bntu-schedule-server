import dotenv from 'dotenv'
import express from 'express'
import { prisma } from './db'

dotenv.config()

const app = express()

async function main() {
	const PORT = process.env.PORT || 3000

	app.listen(PORT, () =>
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
		)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
