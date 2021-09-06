import { connect } from 'react-redux';
import Register from 'src/components/Register';
import {
  changeEmail, changePassword, registerUser,
} from '../../action/user';

const mapStateToProps = (state) => ({

  pseudo: state.email,
  password: state.password,

});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: function (email) {
    dispatch(changeEmail(email));
  },
  changePassword: function (password) {
    dispatch(changePassword(password));
  },
  handleRegister: function () {
    dispatch(registerUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);