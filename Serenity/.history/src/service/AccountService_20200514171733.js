import { getToken } from '../utils/Common'
import axios from 'axios';

class AccountDataService {
  create(data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.post('https://huy.fromlabs.com/api/account/signup',data, { 'headers': { 'Authorization': AuthStr } })
  } 
}

export default new AccountDataService();