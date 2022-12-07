// sorting in ascending or decending
// const a = [23, 11, 3456, 78, 9]
// const b = a.sort((a, b) => {
//     return a - b || b - a
// })
// console.log(b)

const express = require('express')
const app = express()
const port = 3000

// app.get('/users', (req, res) => {
// //   res.send('Hello World!')
// //   console.log('Hello World!')
// console.log(req)
// //   console.log(req.query.order)
//   res.json({
//     msg: 'sorted in ' + req.query.order
//   })
// })

const arr = [100, 89, 400, 2, 45656]
const arruser = ['ram', 'hari', 'bibek', 'shyam', 'anil']
app.get('/number', (req, res) => {
    
    // req.query.order === 'asc' ?
    //     res.json({
    //        list: arr.sort(function(a, b) {
    //            return a - b
    //         })
    //         // sortedArr : arruser.sort()    
    //       }) 
    // :
    //     res.json({
    //         list : arr.sort(function(a, b){
    //             return b - a
    //         })
            
    //     })

    const sortList = arr.sort((a, b) => {
        return req.query.order === 'asc' ? a - b : b - a
    })
    res.json({list: sortList})     
})


app.get('/users', (req, res) => {
    const sortUsers = arruser.filter((item, id) => {
        return item !== req.query.filtername
    })
    res.json({list: sortUsers})     
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})