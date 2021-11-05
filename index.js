const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
        {
                name: 'Bob',
                email:'bob@gmail.com'
        },
        {
                name: 'alice',
                email:'alice@gmail.com'
        },
        {
                name: 'jake',
                email:'jake@yahoo.com'
        },
        {
                name: 'Jane',
                email:'Jane@yahoo.com'
        }])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
