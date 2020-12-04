import express from 'express'
const port=process.env.PORT || 3000
const app=express()

app.get('/',(req,res)=>{
console.log('App is working')
})


app.listen(port,()=>{
    console.log("RUNNING ON PORT 3000")
})
