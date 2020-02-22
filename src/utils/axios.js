import axios from 'axios';
import {API_URI} from '../configs';
import AsyncStorage from '@react-native-community/async-storage';

// post data using axios
export const postData = (data, route) => {
  return axios.post(`${API_URI}/${route}`, data);
};

export const getData = route => {
  console.log(route);
  return axios.get(`${API_URI}/${route}`);
};

export const privatePost = async (data, route) => {
  const token = JSON.stringify(await getItemFromAsyncStorage('token'));
  return axios.post(`${API_URI}/${route}`, data, {
    headers: {Authorization: `${token}`},
  });
};

export function getItemFromAsyncStorage(item) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('info')
      .then(info => {
        const data = Object.entries(JSON.parse(info));
        for (let i of data) {
          if (i[0] == item) {
            resolve(i[1]);
          }
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

//log out
export function logout() {
  return AsyncStorage.removeItem('info');
}
