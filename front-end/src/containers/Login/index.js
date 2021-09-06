import { connect } from 'react-redux';
import Login from 'src/components/Login';
import {
  changeEmail, changePassword, loginUser,
} from '../../action/user';

const mapStateToProps = (state) => ({

  pseudo: state.email,
  password: state.password,
  isLogged: state.logged,

});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },
  changePassword: function (password) {
    dispatch(changePassword(password));
  },
  handleLogin: function () {
    dispatch(loginUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);