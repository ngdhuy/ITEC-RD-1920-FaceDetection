import { getToken } from '../utils/Common'
import axios from 'axios';

class AccountDataService {
  create(data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.post('https://huy.fromlabs.com/api/account/signup',data, { 'headers': { 'Authorization': AuthStr } })
  } 
  delete(id) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.delete('https://huy.fromlabs.com/api/account/'+id, { 'headers': { 'Authorization': AuthStr } })
  }  
  edit(id) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.put('https://huy.fromlabs.com/api/account/'+id, { 'headers': { 'Authorization': AuthStr } })
  }  
  getbyid(id) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.get('https://huy.fromlabs.com/api/account/'+id, { 'headers': { 'Authorization': AuthStr } })
  }  
  update(id,data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.put('https://huy.fromlabs.com/api/account/'+id,data ,{ 'headers': { 'Authorization': AuthStr } })
  }  
}

export default new AccountDataService();