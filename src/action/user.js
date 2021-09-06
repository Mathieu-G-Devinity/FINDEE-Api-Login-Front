// assign a redirect link to the state.
// Whenever it changes, the router will switch to this link thanks to a useEffect.
export const REDIRECT = 'REDIRECT';

export const redirectTo = (link) => ({
    type: REDIRECT,
    link,
  });

// Action to log the user
export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = () => ({
  type: LOGIN_USER,
});

// Saving the connected user's data in the state
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (data) => ({
  type: SAVE_USER,
  data,
});

// Email field controlled component
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

// Password field controlled component
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password,
});

// call to api for registering from register form submit
export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = () => ({
  type: REGISTER_USER,
});

// Clears state input fields in the register component
export const SUBMIT_FORM_REGISTER = 'SUBMIT_FORM_REGISTER';

export const submitFormRegister = () => ({
  type: SUBMIT_FORM_REGISTER,
});

export const SAVE_USERS_LIST = 'SAVE_USERS_LIST';

export const saveUsersList = (data) => ({
  type: SAVE_USERS_LIST,
  data,
});

export const GET_USERS_LIST = 'GET_USERS_LIST';

export const getUsersList = () => ({
  type: GET_USERS_LIST,
});