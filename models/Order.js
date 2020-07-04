const {Schema, model} = require("mongoose");

const schema = new Schema ({
    items: {
        type: Array,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    date: {
        type: Array,
        required: true
    },
    price: {
        type: Array,
        required: true
    },
    picture: {
        type: Array,
        required: true 
    },
    value: {
        type: Array,
        required: true
    },
    delivery: {
        type: String
    },
    payment: {
        type: String
    }
})

module.exports = model("Order", schema);