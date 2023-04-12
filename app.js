const express = require("express")
const userRoute = require("./routers/users")

const app = express()

//untuk menerima req body
app.use(express.json())
app.use("/users",userRoute)


app.listen(8080,function(){
    console.log("server berjalan pada port 8080")
})