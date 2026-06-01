import axios from "axios";

const BASE_URL = 'http://localhost:8080/expence';

export const getAllTransactions = () => axios.get(BASE_URL);
export const addTransaction = (data) => axios.post(BASE_URL, data);
export const deleteTransaction = (id) => axios.delete(`${BASE_URL}/${id}`);