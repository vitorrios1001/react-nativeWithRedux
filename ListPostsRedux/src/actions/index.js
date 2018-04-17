import axios from 'axios';

const REQUEST_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => {

    const request = axios.get(`${REQUEST_URL}/posts`);
        
    return {
        type: 'FETCH_POSTS',
        payload: request
    };   
};

export const fetchPost = (id) => {
    const request = axios.get(`${REQUEST_URL}/posts/${id}`);

    return {
        type: 'FETCH_POST',
        payload: request
    }
}

