import {FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE} from './actionTypes'; 
import axios from 'axios';


// let initialState = {
//     loading: false,
//     data: [],
//     error: ''
// }
// action creators are pure functions that return an action object
export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (data) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: data
    }
}

export const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

// how to make api request in redux: 

export const fetchPosts = ()  =>{
     return  (dispatch) =>{
            dispatch(fetchPostRequest()) 
            axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
            .then(response => {
                console.log(response.data)
                dispatch(fetchPostSuccess(response.data))
            })
            .catch(error => dispatch(fetchPostFailure(error.message)))
     }
}




// dispatch(fetchPosts())

// useEffect(() => {
//     dispatch(fetchPostRequest()) 
//     axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//     .then(response => fetchPostSuccess(response.data))
//     .catch(error => fetchPostFailure(error.message))
// })


// dispatch({type: actioName, payload: data})

// dispatch({type: FETCH_POST_REQUEST})

