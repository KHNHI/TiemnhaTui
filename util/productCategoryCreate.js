const mongoose = require("mongoose");
const ProductCategory = require("../models/productCategory");
const urlConnect = `
`;

// Connect to database
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var abc = new ProductCategory({
    name: "Quần",
    childName: ["Quần Dài", "Quần Ngắn", "Quần Thể Thao", "Quần Xì"]
  });

  abc.save(function(err) {
    if (err) throw err;
    console.log("Category successfully saved.");
  });
});