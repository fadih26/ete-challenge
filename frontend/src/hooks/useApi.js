import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const useApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiCall = async ({ url, method, data: bodyData = null }) => {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await axiosInstance({
                url,
                method,
                data: bodyData
            });
            setData(response.data);
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred";
            setError(errorMessage);
            toast.error(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, apiCall };
};

export default useApi;