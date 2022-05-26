import app from './app.js'

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
  console.log(`Running on ${port}`)
})

// app.listen(process.env.PORT, ()=>{
//   console.log(`Running on ${process.env.PORT}`)
// })