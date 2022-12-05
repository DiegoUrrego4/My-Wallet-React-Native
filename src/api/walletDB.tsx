import axios from 'axios';

const walletDB = axios.create({
  baseURL: 'http://186.114.234.196:3000/api/v1',
  params: {},
});

export default walletDB;
