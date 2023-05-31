import express from 'express'
import datas from './data.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json(datas)
});

app.get('/:id', (req, res) => {
    let result = null
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id == req.params.id) {
            result = datas[i];
            break;
        }
    }

    if (result == null) {
        res.json({
            pesan: "Data tidak ditemukan"
        })
    }
    res.json(datas[req.params.id]);
});

app.listen(port, () => console.log(`Berjalan di port ${port}`));