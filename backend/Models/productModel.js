import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productModel = new Schema({
    fullName:
    {
        type: String,
        required: true
    },
    merchantEmail:
    {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    store:
    {
        type: String,
        enum: ['Beirut', 'Batroun', 'Jbeil'],
        required: true
    },
    productPicture:
    {
        type: String,
        required: true
    }
    ,
}
)

export default mongoose.model('Product', productModel)