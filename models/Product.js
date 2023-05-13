const { Schema, model } = require('mongoose');

const clienteSchema = new Schema({
    product: String,
    relleno: String,
    tamano1: String,
    tamano2: String,
    tamano3: String,
    details: String,
    estado: Boolean,
    img: String,
    date: {
        type: Date,
        default: Date.now
    } 
}, {
    timestamps: true
});

module.exports = model('Product', clienteSchema);