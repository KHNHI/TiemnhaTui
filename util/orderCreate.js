const mongoose = require("mongoose");
const Order = require("../models/order");
const urlConnect = `mongodb+srv://lengocthaovy2435:a1Yn1PIRa9g4QBwi@dataexportcnpm.y2iwlud.mongodb.net/?retryWrites=true&w=majority&appName=DataExportCNPM`;

//Connect to db
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var order = new Order({});

  order.save(function (err) {
    if (err) throw err;
    console.log("Comment successfully saved.");
  });
});