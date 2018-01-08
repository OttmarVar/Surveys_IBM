const express = require('express')
const app = express()

app.get('/api/hello', (req, res) => {
    res.json({message: "Hello World"})
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})