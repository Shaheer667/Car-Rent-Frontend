import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
});

export const getCars= async(data)=>api.post('/api/getCars')
export const getCar= async(data)=>api.post('/api/getCar', data)
export const reservation= async(data)=>api.post('/api/reservation',data)