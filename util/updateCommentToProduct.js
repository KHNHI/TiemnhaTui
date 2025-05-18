const mongoose = require("mongoose");
const comment = require("../models/comment");
const Product = require("../models/product");
const urlConnect = `mongodb+srv://lengocthaovy2435:a1Yn1PIRa9g4QBwi@dataexportcnpm.y2iwlud.mongodb.net/?retryWrites=true&w=majority&appName=DataExportCNPM`;

//Connect to db
mongoose.connect(
  urlConnect,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    console.log("Connect to update!!");
    Product.find({}, (err, res) => {
      console.log(res);
    });
  }
);