const express = require('express')
const app = express()

app.get("/blog/list", (req, res)=>{
    res.send()
})

app.listen(8088, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})