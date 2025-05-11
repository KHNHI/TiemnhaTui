const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: "Một sản phẩm từ Bros"
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: [String],
    required: true
  },
  productType: {
    main: String,
    sub: String
  },
  color: {
    type: [String],
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  materials: {
    type: [String],
    required: true
  },
  
tags: { 
    type: [String], 
    required: false 
},
pattern: { 
    type: [String], 
    required: false },
dateAdded: { type: Date, default: Date.now },
isSale: {
  status: { type: Boolean, default: false },
  percent: { type: Number, default: 0 },
  end: { type: Date }
},
ofSellers: {
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  name: String
},
labels: { type: String, default: "Shiro" },
buyCounts: { type: Number, default: 0 },
viewCounts: { type: Number, default: 0 },
rating: {
  byUser: String,
  content: String,
  star: Number
},
index: { type: Number, default: 0 }

});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
