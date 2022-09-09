const express = require('express') // NODE FRAMEWORK
const bodyParser = require('body-parser') // TO PARSE POST REQUEST
const cors = require('cors') // ALLOW CROSS ORIGIN REQUESTS
const fs = require('fs');
const cron = require('node-cron');

const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
try {
const appRoutes = require('./routes')
appRoutes(app)
} catch (error) {
console.log("Route Crash -> ", error)
}
// const router = require('./routes/product_router.js')
// app.use('/api/products', router)

// app.get("/",(req,res)=>{
//     res.send("It is Me");
// })
//port

const PORT = process.env.PORT || 8000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

// cron.schedule('*/1 * * * *', () => {
//   console.log('running a task every minute');
// });