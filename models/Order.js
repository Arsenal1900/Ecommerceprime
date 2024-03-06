const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    userId: {
        type: String,
        required: true,
        },
    products:[
        {
            productId: {
                type: String,
                required: true,
                },
            quantity: {
                type: Number,
                required: true,
                default:1
                },
        }
    ],
    amount: {
        type: Number,
        required: true,
        default:0
        },
    address: Object,
    status:{type: String, default:"pending"}
},{
    timestamps: true
})

const orderModel = mongoose.model('Order', orderSchema)
module.exports = orderModel
