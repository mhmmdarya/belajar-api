import express from "express"
import Barang from "../models/barang.js"
import JenisBarang from "../models/jenisBarang.js"
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data = await Barang.findAll()
        res.status(200).json({
            datas: data,
            pesan: 'Berhasil mendapatkan data'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            pesan: 'Gagal mendapatkan data'
        })
    }
})

router.get('/jenis', async (req, res) => {
    try {
        const list = await JenisBarang.findAll()
        res.status(200).json({
            datas: list,
            pesan: 'Berhasil'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            pesan: 'Gagal mendapatkan data'
        })
    }
})

export default router