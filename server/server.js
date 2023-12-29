const express = require("express");
const app = express();
const path = require("path")
const cors = require('cors')
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

app.use(cors())

app.use(express.json())

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");
const theaterRoute = require("./routes/theatersRoute");
const bookingsRoute = require("./routes/bookingsRoute")

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theaters", theaterRoute);
app.use("/api/bookings",bookingsRoute);

const port = process.env.PORT || 5000;

__dirname = path.resolve();


// render deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  }



app.listen(port, () => {
console.log(`Nodejs server running on port ${port}`); 
})


console.log(process.env.mongo_url)
