import axios from 'axios'
import Exports from 'Exports'

export default axios.create({
    baseURL: Exports().API_PRN,
    timeout: 8000,
})
