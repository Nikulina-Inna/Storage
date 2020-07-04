const {Schema, model} = require("mongoose");

const schema = new Schema ({
    itemClass: {
        type: String,
        required: true,
    },
    subClass: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    picture: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    newItem: {
        type: String,
        required: true
    }
})

module.exports = model("Item", schema);