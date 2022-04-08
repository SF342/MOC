import {API_TODO, API_TODODELETE} from '../types';
import axios from 'axios';

const API_URL = 'http://10.0.2.2:4001/moc';

// export const getFavoriteList = (user_id) => dispatch => {
//   axios
//     .get(API_URL + '/' + user_id)
//     .then(response => {
//       if (response.data.length !== 0){
//         dispatch({type: API_TODO, payload: response.data});
//         console.log("test")
//         console.log(response.data)
//         return response.data;
//       }
//     })
//     .catch(err => {
//       console.log(err)
//       alert('Get data Fav error');
//     });
// };

export const addFavoriteList =
   (
    user_id,
    pid,
    pname
  ) =>
  (dispatch) => {
    axios
      .post(API_URL, {
        _id : user_id,
        product_id : pid,
        product_name : pname
      })
      .then(response => {
        dispatch({type: API_TODO, payload: []});
        return response.data;
      })
      .catch(err => {
        console.log("Add fail")
      });
  };

export const updateTaskList =
  (
    _id,
    date,
    priority,
    taskDetail,
    taskDate,
    taskDatetaskDate,
    timestamp,
    topic,
    urlPhoto,
  ) =>
  dispatch => {
      
    axios
      .put(API_URL, {
        _id,
        date,
        priority,
        taskDetail,
        taskDate,
        taskDatetaskDate,
        timestamp,
        topic,
        urlPhoto:urlPhoto,
      })
      .then(response => {
        dispatch({type: API_TODODELETE, payload: []})
        console.log(response.data);

        return response.data;
      })
      .catch(err => {
        console.log("Update fail")
        console.log(err)
      });
  };

  export const achiveTask = _id => dispatch => {
    axios
      .put(API_URL, {
        _id,
        achive: true
      })
      .then(response => {
        dispatch({type: API_TODODELETE, payload: []})
        console.log(response.data);

        return response.data;
      })
      .catch(err => {
        console.log("Update fail")
        console.log(err)
      });
  };


export const deleteTask = _id => dispatch => {
  axios
    .delete(API_URL + '/' + _id)
    .then( 
      dispatch({type: API_TODO, payload: []})
    )
    .catch(err => {
      console.log("Delete fail")

    });
};
