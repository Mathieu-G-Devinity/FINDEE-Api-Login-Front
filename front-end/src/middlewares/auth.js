import { LOGIN_USER, redirectTo, submitFormRegister, REGISTER_USER, GET_USERS_LIST, saveUsersList } from 'src/action/user';
import api from 'src/api';
import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_USER :
        const { email, password } = store.getState();
        api    
        .post('/login', { email, password })
            .then(
            (response) => {
              //we are setting the header Authorization key by putting the TOKEN sent by the API
                api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                //Then we take the TOKEN and put it in our localStorage, so the TOKEN is now available for all our pages
                localStorage.setItem('token', response.data.token);
                //We redirect to the road /users
                store.dispatch(redirectTo('/users'));
            },
            )
            .catch((error) => {
              console.log(error);
            })
            
            next(action);
            break;
    
            case REGISTER_USER: {
                const {
                  password,
                  email,
                } = store.getState(); // sending "payloads" from our state to the API
                const config = {
                    method: 'post',
                    url: 'http://localhost:3001/register',
                    headers: { },
                    data : { email, password }
                  };
                axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data));
                store.dispatch(submitFormRegister()); // A function that erase our input fields
                store.dispatch(redirectTo('/login')); 
                })
                .catch(function (error) {
                console.log(error);
                });
           
            next(action);
            break;}
            
            case GET_USERS_LIST: {

                const config = {
                  method: 'get',
                  url: 'http://localhost:3001/users',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`// Sending the TOKEN so our API can check if it's equal to the TOKEN that what sent before
                  }
                };
                
                axios(config)
                .then(function (response) {
                  // console.log("REPONSE DE L'API", response.data);
                  // console.log("REPONSE RECUE", response);
                  store.dispatch(saveUsersList(response.data));
                })
                .catch(function (error) {
                  console.log(error);
                });
                
            next(action);
            break;

            }       
            default:
                next(action);
    };
};

export default authMiddleware;
