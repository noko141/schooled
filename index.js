const express = require("express");
const app = express();
app.set("viewport", "ejs");
app.use(express.static("public"));
const PORT = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is succesfully running at port: ${PORT}`);
    } else {
        console.log(`Error: couldn't start server at port: ${PORT}`);
    }
});
