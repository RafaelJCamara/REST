const express = require("express");
const app = express();
const accountRoute = require("./routes/account");

app.use("/account", accountRoute);

app.listen("3000", ()=>{
    console.log("Server listening on port 3000...");
});