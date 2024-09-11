import axios from 'axios'

const api = axios.create({
    baseURL:"https://tc-acessibilidade-api-production.up.railway.app"
})

export default api;