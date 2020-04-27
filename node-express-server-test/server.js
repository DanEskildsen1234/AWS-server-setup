const express = require("express")
const app = express()

app.use(express.static('public'))

// method 1 (public files)
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/staticallyservedhtml.html")
})

// method 2 (server side)
const fs = require('fs')
const ssrPage = fs.readFileSync("public/ssrhtml.html", "utf8")

app.get("/ssr", (req, res) => {
    return res.send(ssrPage)
})


app.listen(80, err => {
    if(err){console.log(err); return}
    console.log("Server listening")
})
