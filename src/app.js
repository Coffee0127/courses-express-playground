const express = require('express')
const app = express()
const port = 3000

app.get('/courses', (req, res) => {
  res.status(200)
    .send({
      '1': {
        name: 'Calculus',
        credit: 3,
        description: 'The mathematical study of continuous change.'
      },
      '2': {
        name: 'Object Oriented Programming',
        credit: 4,
        description: 'A programming paradigm based on the concept of "objects", which can contain data and code.'
      }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
