import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true 
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     phrases: {
//         type: [String],
//         default: []
//     },
    
//     dict: [{
//         problem_word:{
//             type: String
//         },
//         solution_word: {
//             type: String
//         }
        
//     }]
// })

// const User = mongoose.model("User", userSchema);

// export default User;