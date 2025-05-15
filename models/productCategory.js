const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// const productCategory = require("./productCategory");
// const productCategory = require("./productCategory");

const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // tương tự code, là trường con (aothun, aohoodie, ...)
  // tương tự name , là trường con mà viết hoa có dấu ...
  childName: {
    type: [String],
    required: true
  }
});
// thể loại sản phẩm
//xử lý commit
const productCategory = mongoose.model(
  "productCategory",
  productCategorySchema
);
module.exports = productCategory;
