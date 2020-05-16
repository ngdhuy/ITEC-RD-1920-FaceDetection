import { getToken } from '../utils/Common'
import axios from 'axios';

class CourseDataService {
  create(data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.post('https://huy.fromlabs.com/api/course',data, { 'headers': { 'Authorization': AuthStr } })
  }
  delete(id) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.delete('https://huy.fromlabs.com/api/course',+id, { 'headers': { 'Authorization': AuthStr } })
  } 
  edit(id) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.put('https://huy.fromlabs.com/api/course/'+id, { 'headers': { 'Authorization': AuthStr } })
  }  
  getbyid(id) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.get('https://huy.fromlabs.com/api/course/'+id, { 'headers': { 'Authorization': AuthStr } })
  }  
  update(id,data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.put('https://huy.fromlabs.com/api/course/'+id,data ,{ 'headers': { 'Authorization': AuthStr } })
  }  
}

export default new CourseDataService();