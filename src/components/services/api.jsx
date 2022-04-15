import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8000/"
});

if (get_token()) {
    api.defaults.headers.common['Authorization'] = `Bearer ${get_token()}`;
}


function get_token() {
    return sessionStorage.getItem('auth_token');
}
export function is_logged_in() {
    const token = api.defaults.headers.common['Authorization'];
    return !!token
}

export default api;
