import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, IconButton, Input } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import useApi from '../../hooks/useApi';
import RenderIf from '../../components/Render/render';
import { toast } from 'react-toastify';
import Styles from './Products.module.css'


const baseURL = 'http://localhost:3000/'; // Base URL for images
const storeOptions = ['Beirut', 'Batroun', 'Jbeil'];

function Product() {
  const { data: products, error, loading, apiCall } = useApi();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [file, setFile] = useState(null); // State to hold the uploaded file

  useEffect(() => {
    apiCall({ url: '/product/list', method: 'get' });
  }, []);

  const handleOpen = (product = {}) => {
    setSelectedProduct(product);
    setIsEditMode(!!product._id);
    setOpen(true);
    setFile(null);
  };

  const handleClose = () => {
    setSelectedProduct({});
    setOpen(false);
    setFile(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('fullName', selectedProduct.fullName);
    formData.append('merchantEmail', selectedProduct.merchantEmail);
    formData.append('store', selectedProduct.store);
    if (file) {
      formData.append('productPicture', file);
    }

    const endpoint = isEditMode ? `/product/update/${selectedProduct._id}` : '/product/create';
    await apiCall({ url: endpoint, method: isEditMode ? 'put' : 'post', data: formData, headers: { 'Content-Type': 'multipart/form-data' } });
    isEditMode ? toast.success('Product edited successfully!') : toast.success('Product added successfully!');
    handleClose();
    apiCall({ url: '/product/list', method: 'get' });
  };

  const handleDelete = async (id) => {
    await apiCall({ url: `/product/delete/${id}`, method: 'delete' });
    toast.success('Product deleted successfully!');
    apiCall({ url: '/product/list', method: 'get' });
  };

  const columns = [
    { field: 'fullName', headerName: 'Full Name', width: 150 },
    { field: 'merchantEmail', headerName: 'Merchant Email', width: 200 },
    { field: 'store', headerName: 'Store', width: 130 },
    {
      field: 'productPicture', headerName: 'Picture', width: 160, renderCell: (params) => (
        <img src={`${baseURL}${params.value}`} alt="Product" style={{ height: '50px', width: 'auto' }} />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleOpen(params.row)}><EditIcon /></IconButton>
          <IconButton onClick={() => handleDelete(params.row._id)}><CloseIcon /></IconButton>
        </>
      ),
    },
  ];

  return (
    <RenderIf loading={loading} error={error} data={products}>
      <div style={{ height: 400, width: '88%', margin: '80px auto' }}>
        <Button className={Styles.button} onClick={() => handleOpen()}>Add Product</Button>
        <DataGrid
          className={Styles.dataGrid}
          rows={products || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row._id}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{isEditMode ? 'Edit Product' : 'Add Product'}</DialogTitle>
          <DialogContent>
            <TextField margin="dense" label="Full Name" fullWidth name="fullName" value={selectedProduct.fullName || ''} onChange={handleChange} />
            <TextField margin="dense" label="Merchant Email" fullWidth name="merchantEmail" value={selectedProduct.merchantEmail || ''} onChange={handleChange} />
            <TextField
              select
              label="Store"
              fullWidth
              name="store"
              value={selectedProduct.store || ''}
              onChange={handleChange}
            >
              {storeOptions.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
            <Input type="file" onChange={handleFileChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>{isEditMode ? 'Update' : 'Add'}</Button>
          </DialogActions>
        </Dialog>
      </div>
    </RenderIf>
  );
}

export default Product;