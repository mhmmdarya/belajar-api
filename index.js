import express from 'express'
import barangRouter from './routes/barangRouter.js'
const app = express()
const port = 3000

app.use(express.json())

app.use('/barang', barangRouter)
app.listen(port, () => console.log(`Berjalan di port ${port}`));