import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-d2cb4.firebaseio.com/'
});

export default instance;