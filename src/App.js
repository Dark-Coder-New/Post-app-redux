import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {fetchPosts} from "./redux/actions/postActions";



const App = () => {


// const obj = useSelector(state => state)
// let {loading, data, error} = obj;
   const loading = useSelector(state => state.loading)
   const data = useSelector(state => state.data)
   const error = useSelector(state => state.error)

   console.log(loading, data, error)

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("useEffect called")
        dispatch(fetchPosts())
    },[])

    return(
        <div>
              {
                data.length>0 &&(
                    data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    )
                ))
              }
        </div>
    )
} 

export default App;

















// useEffect(()=>{
//      dispatch(fetchPostRequest())

//      axios.get('https://jsonplaceholder.typicode.com/posts')

//      .then(res => dispatch(fetchPostSuccess(value)))

//       .catch(err => dispatch(fetchPostFailure(err.message)))
// })
