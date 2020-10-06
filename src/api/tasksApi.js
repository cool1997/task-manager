import * as axios from 'axios'


const instance = axios.create({
  baseURL: `https://test.megapolis-it.ru/api/list`,
  timeout: 1000 * 5,
  origin: 'http://localhost:3000',
});


export const tasksApi = {
  getTasks() {
    return instance.get(`/`)
  },
  
  createTask(title) {
    return instance.post(`/`, {title})
  },

  changeTask(id, title) {
    return instance.post(`/${id}`, {title})
  },

  deleteTask(id) {
    return instance.delete(`/${id}`)
  },
}