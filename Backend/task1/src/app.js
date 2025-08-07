import express from 'express'
const app=express()

app.use(express.urlencoded())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/login',(req,res)=>{
    res.send("Enter your credentials")
})

app.get('/purchase',(req,res)=>{
    res.send("Purchase Page!")
})
export default app