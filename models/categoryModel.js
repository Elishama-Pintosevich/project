const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
  name: String,
  name_url: String,
  info: String,
  img_url: String,
},{timestamps:true})
exports.CategoryModel = mongoose.model("categories", schema)

exports.validateCategory = (_reqBody) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    name_url: Joi.string().min(2).max(100).required(),
    info: Joi.string().min(2).max(400).required(),
    img_url: Joi.string().min(2).max(400).required(),
  })
  return joiSchema.validate(_reqBody)
}