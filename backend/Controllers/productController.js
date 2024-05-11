import  Product from "../Models/productModel.js";



export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
    try {
      const { fullName, merchantEmail, store } = req.body;
      const productPicture = req.file.path; 
      const product = new Product({
        fullName,
        merchantEmail,
        store,
        productPicture
      });
  
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const reOrder = async (req, res) => {
    const items = req.body;
    let sortedItems = [];
    let remainingItems = [...items];

    let currentItem = remainingItems.find(item => !remainingItems.some(otherItem => otherItem.first_id === item.second_id));

    while (currentItem) {
        sortedItems.push(currentItem);
        remainingItems = remainingItems.filter(item => item !== currentItem); 
        currentItem = remainingItems.find(item => item.first_id === sortedItems[sortedItems.length - 1].second_id);
    }
    res.status(200).json(result);
  };