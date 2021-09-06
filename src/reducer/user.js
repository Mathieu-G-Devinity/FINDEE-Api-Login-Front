import { SAVE_USER, CHANGE_PASSWORD, CHANGE_EMAIL, SUBMIT_FORM_REGISTER, REDIRECT, SAVE_USERS_LIST } from 'src/action/user';

const initialState = {
    email: "",
    password: "",
    redirectLink: "",
    usersList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch  (action.type) {
    case SAVE_USER:
      return {
        ...state,
        email: '',
        password: '',
      };
    case CHANGE_PASSWORD:
    return {
        ...state,
        password: action.password,
    };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SUBMIT_FORM_REGISTER:
    return {
        ...state,
        email: '',
        password: '',
    };
    case REDIRECT:
    return {
        ...state,
        redirectLink: action.link,
    };
    case SAVE_USERS_LIST:
      return {
        ...state,
        usersList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
