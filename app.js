const express=require('express')
require('dotenv').config()
const route= require('./routes/router.profile')
const app=express()
app.use(express.json())
const PORT=process.env.PORT||3000

app.use('/',route)
app.listen(PORT,()=>{
    console.log(`PORT NUMBER ${PORT} Listining!...`);
})
