import {setup} from 'axios';

const api = setup({
    baseUrl: "https://jsonplaceholder.typicode.com",
    cache: {
        maxAge: 15 * 60 * 1000
    },
});

export default api;