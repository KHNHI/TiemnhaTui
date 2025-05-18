const mongoose = require("mongoose");
const label = require("../models/label");
const urlConnect = `mongodb+srv://lengocthaovy2435:a1Yn1PIRa9g4QBwi@dataexportcnpm.y2iwlud.mongodb.net/?retryWrites=true&w=majority&appName=DataExportCNPM`;

// Connect to database
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var abc = new label({
    list: [
      "Shiro",
      "Mob",
      "Crepp",
      "Zara",
      "Levis",
      "Gucci",
      "Dolce & Gabbana",
      "Others"
    ]
  });

  abc.save(function (err) {
    if (err) throw err;
    console.log("Category successfully saved.");
  });
});