import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

const RenderIf = ({ loading, error, data, children }) => {
    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>;
    }

    if (error) {
        return <Typography color="error" align="center">{error}</Typography>;
    }

    if (data) {
        return children;
    }

    return null;
};

export default RenderIf;