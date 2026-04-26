import mongoose, {Schema} from 'mongoose';
import { ProductSize } from '../libs/enums/product.enum';
import { ProductVolume } from '../libs/enums/product.enum';
import { ProductCollection } from '../libs/enums/product.enum';
import { ProductStatus } from '../libs/enums/product.enum';

const productSchema = new Schema ({

    productStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
    },
    
    productCollection: {
        type: String,
        enum: ProductCollection,
        required: true,
    },
    
    productName: {
        type: String,
        required: true,
    },

    productPrice: {
        type: Number,
        required: true,
    },

    productSize: {
        type: [String],
        default: [],
    },
    
    productLeftCount: {
        type: Number,
        required: true,
    },

    productDesc: {
        type: String,     
    },
    productImages: {
        type: [String],
        default: [],
    },

    productViews: {
        type: Number,
        default: 0,
    },
}, 
{ timestamps: true} //createdAt & updatedAt
);
productSchema.index(
    {productName: 1, productSize: 1},
    {unique: true}
);
export default mongoose.model('Product', productSchema);