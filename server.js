const express = require('express') // NODE FRAMEWORK
const bodyParser = require('body-parser') // TO PARSE POST REQUEST
const cors = require('cors') // ALLOW CROSS ORIGIN REQUESTS
const fs = require('fs');
const cron = require('node-cron');
require('./config/global');
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors())

//response handler
app.use((req, res, next) => {
    const ResponseHandler = require('./config/response_handler')
    res.handler = new ResponseHandler(req, res);
    next()
})

// // for all api security call common function
// app.use( async (req, res, next) => {
   
//     const Authenticator = (new (require('./middleware/authentication'))());
    
// })
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