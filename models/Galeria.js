const { Schema, model } = require('mongoose');

const galeriaSchema = new Schema({
    category: String,
    galeria: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Galeria', galeriaSchema);