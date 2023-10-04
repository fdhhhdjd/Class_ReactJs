import axios from 'axios';

export function getUser(id) {
  return axios.get(`http://localhost:5000/users/${id}`).then((res) => res.data);
}
