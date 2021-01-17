const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);

const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema(
  {
    featured: {
      type: Boolean,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    cost: {
      type: Currency,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Promotion", promotionSchema);
