import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.josns.net/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const multer = axios.create({
  baseURL: 'https://api.josns.net/api',
  headers: {
    'Content-Type' : 'multipart/form-data'
  }
})
