const { Schema, model } = require('mongoose');

const pedidoSchema = new Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },
    tamano: String,
    price: Number,
    amount: Number,
    dedicatoria: String,
    tematica: String,
    details: String,
    modeloFoto: String,
    total: Number,
    fechaEntrega: String,
    horaEntrega: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Pedido', pedidoSchema);