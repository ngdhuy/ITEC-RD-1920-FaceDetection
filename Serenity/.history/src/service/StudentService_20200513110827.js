import { getToken } from '../utils/Common'
import axios from 'axios';

class StudentDataService {
  create(data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.post('https://huy.fromlabs.com/api/student',data, { 'headers': { 'Authorization': AuthStr } })
  }
  delete() {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.delete('https://huy.fromlabs.com/api/student/2', { 'headers': { 'Authorization': AuthStr } })
  }  
}

export default new StudentDataService();