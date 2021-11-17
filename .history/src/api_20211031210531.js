import axios from 'axios'
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyCvXvL0WpzzWlNi8xLKyHGEKFvWM69-NTU',
   },
})

export default request
