// expample for  axios

import axios from 'axios';
import {useState} from 'react';
export default ({url, method, body, onSuccess}) => {
    const [errors, setErrors] = useState('');

    const sendRequest = async () => {
        try {
            setErrors(null)
            const response = await axios[method](url, body);
            if(onSuccess) {
                onSuccess(response.data); //may be useful at some time
            }
            return response.data;
        } catch (err) {
            console.log(err.response.errors) // setup according to backend
            setErrors(err.response.errors)
        }
    };

    return {sendRequest, errors}
}