const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    cliente: String,
    domicilio: String,
    referencia: String,
    img: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Cliente', productSchema);