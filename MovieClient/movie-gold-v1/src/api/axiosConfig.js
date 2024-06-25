import axios from 'axios';

export default axios.create({
    baseURL:"https://9eca-105-156-27-244.ngrok-free.app",
    headers: {"ngrok-skip-browser-warning": "true"} 
});