const mongoose = require("mongoose");
const comment = require("../models/comment");
const urlConnect = `mongodb+srv://lengocthaovy2435:a1Yn1PIRa9g4QBwi@dataexportcnpm.y2iwlud.mongodb.net/?retryWrites=true&w=majority&appName=DataExportCNPM`;

//Connect to db
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var newComment = new comment({
    title: "gud vler",
    name: "guest1",
    content: "so gud",
    star: 5,
    productID: "5df485878e98d6333450f7b6"
  });

  newComment.save(function (err) {
    if (err) throw err;
    console.log("Comment successfully saved.");
  });
});