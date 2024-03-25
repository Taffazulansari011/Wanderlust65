const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    Comment: String,
    rate: {
        min: 1,
        max: 5
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Review", reviewSchema);