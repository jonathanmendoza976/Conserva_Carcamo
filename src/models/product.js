import {Schema, model} from 'mongoose'

const ProductSchema = Schema({
  name: {
    type: String, 
    required: true, 
    unique: true, 
    trim: true
  },
  description: {
    type: String, 
    required: true, 
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  images: {
    type: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'Products',
  versionKey: 'CONSERVAS_CARCAMO'
})

export default model('Product', ProductSchema)