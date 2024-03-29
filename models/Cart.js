const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
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
    ]
},{
    timestamps: true
})

const cartModel = mongoose.model('Cart', cartSchema)
module.exports = cartModel
