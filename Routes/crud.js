const express=require('express')
const app=express.Router()
const {getAllData,insertData,updateData,deleteData,getIdByData}=require('../Controllers/itemsController')

// select all items
app.get('/',getAllData)
app.post('/users',insertData)
app.put('/data',updateData)
app.delete('/remove',deleteData)
app.get('/getDataByID',getIdByData)




module.exports=app;