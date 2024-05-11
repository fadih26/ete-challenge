import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct,reOrder } from '../controllers/productController.js';
import { validateProduct } from '../Middlewares/productValidation.js';
import  upload  from '../Middlewares/uploadImage.js';

const router = express.Router();

router.get('/list', getAllProducts);
router.post('/create', upload.single('productPicture'), validateProduct, createProduct);
router.put('/update/:id', upload.single('productPicture'), validateProduct, updateProduct);
router.delete('/delete/:id', deleteProduct);
// Algorith API
router.post('/reorder',  reOrder);


export default router;

