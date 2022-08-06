const { Schema, model} = require('mongoose');

const PaymentSchema = new Schema({ 
    refId: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        upperCase: true,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        trim: true,
        upperCase: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
 
}
, { timestamps: true,
    versionKey: false });


module.exports = model('Payment', PaymentSchema);