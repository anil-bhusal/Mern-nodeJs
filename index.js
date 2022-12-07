// const arr = [32, 21332, 32, 232] -- sorting in decending
// arr.sort(function(a, b){
//     return b - a
// })
// console.log(arr)

const express = require('express')
const app = express()
const port = 3000

const arr = [123, 12, 34567, 6789, 4, 40]
const users1 = ['hari', 'ram', 'shyam']
// const userCopy = [...users]

app.get('/users', (req, res) => {
    const disp = users1.filter((item, id) => {
        return item !== req.query.filtername
    }) 
    res.json(disp)
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})