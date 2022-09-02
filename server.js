const express = require('express')
const cors = require('cors')
const cron = require('node-cron');

const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/product_router.js')
app.use('/api/products', router)

app.get("/",(req,res)=>{
    res.send("It is Me");
})
//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

cron.schedule('*/1 * * * *', () => {
  console.log('running a task every minute');
});