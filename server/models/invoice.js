const mongoose = require ('mongoose');
const { Schema } = mongoose;

const InvoiceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);