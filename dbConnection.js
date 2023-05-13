const mongoose = require("mongoose");

function dbConnection() {
  mongoose.connect(
    "mongodb+srv://admin:hkFgl5qEDNGMYFFF@kanban-server.xahkpwh.mongodb.net/",
    {useNewUrlParser: true}
  )
    .then(() => console.log("Mongo DB Connected!"))
    .catch(error => console.log(error));
}

mongoose.set("strictQuery", false);

module.exports = dbConnection;
