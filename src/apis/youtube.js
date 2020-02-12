import {KEY} from './key'
import axios from 'axios'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        regionCode: 'US',
        maxResults: 5,
        key:KEY,
    }
});