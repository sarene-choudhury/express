const express = require('express')
const app = express()

let f = function (req, res) {
        res.send('Hello World')
    }

app.get('/', f)

app.use(express.json())

//Question #1
app.get('/add', (req, res) => {
    console.log(req.body)
    res.send("Sum  is " + req.body.array.reduce((acc, val) => acc  +  val, 0))
})

//Question #2
app.get('/product', (req, res) => {
    console.log(req.body)
    res.send("Product is " + req.body.array.reduce((acc, val) => acc  *  val, 1))
})

//Question #3
app.get('/evens', (req, res) => {
    console.log(req.body)
    res.send("Evens are " + req.body.array.filter(x => x % 2 == 0))
})

//Question #4
app.get('/min', (req, res) => {
    console.log(req.body)
    res.send("Min is " + Math.min(...req.body.array))
})

//Question #4
app.get('/max', (req, res) => {
    console.log(req.body)
    res.send("Max is " + Math.max(...req.body.array))
})

//Question #5
app.get('/sort', (req, res) => {
    console.log(req.body)
    ascending = req.body.ascending
    if (ascending == true){
        req.body.array.sort(function(a, b){return b-a});
    }
    else{
        req.body.array.sort(function(a, b){return a-b}); 
    }
    res.send("Sorted array: " + req.body.array)
})

//Question #6
app.get('/target', (req, res) => {
    for(x = 0; x < req.body.array.length; x++){
        for(y = 1; y < req.body.array.length; y++){
            if ((req.body.array[x] + req.body.array[y]) == req.body.target) res.send(true);
        }
    }
    res.send(false);
})

console.log("Hey it's working")
app.listen(3000) 

