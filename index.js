const express = require('express')
const app = express()
const port = 3000

app.get('/my-app', (req, res) => {
    res.send('Xin chào anh em nha!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})