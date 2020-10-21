import axios from 'axios';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAzMjkzMzQ0LCJleHAiOjE2MDU4ODUzNDR9.EohsueDq5VT1TvBYn23A7xiLj1zM7BVIyGEuVRfkX8A';
const $axios = axios.create({
    baseURL: 'https://api.pentasi.net/',
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAzMjkzMzQ0LCJleHAiOjE2MDU4ODUzNDR9.EohsueDq5VT1TvBYn23A7xiLj1zM7BVIyGEuVRfkX8A`,
    },
});
// $axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default $axios;