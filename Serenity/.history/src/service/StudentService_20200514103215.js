import { getToken } from '../utils/Common'
import axios from 'axios';
const MAIL_SERVICE_URL = "https://huy.fromlabs.com/";
class StudentDataService {
  create(data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.post(`${MAIL_SERVICE_URL}/api/student`,data, { 'headers': { 'Authorization': AuthStr } })
  }
  delete(id) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.delete(`${MAIL_SERVICE_URL}/api/student/$id`, { 'headers': { 'Authorization': AuthStr } })
  }  
}

export default new StudentDataService();