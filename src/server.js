const express = require('express')
const app = express()
const port = 8080

app.get("/api/blog/list", (req, res)=>{
    let result = [
        {name: 'Tom', content: 'what a nice girl', age: 15},
        {name: 'Jack', content: 'what a good day', age: 20}
    ]
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//todo connect to DB