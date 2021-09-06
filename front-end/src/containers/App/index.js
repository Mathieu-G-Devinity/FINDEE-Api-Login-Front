import { connect } from 'react-redux';
import App from 'src/components/App';
import { getUsersList } from 'src/action/user';

const mapStateToProps = (state) => ({
  redirectLink: state.redirectLink,
  usersList: statusbar.usersList
});

const mapDispatchToProps = (dispatch) => ({
  displayUsersList: function () {
    dispatch(getUsersList()); // get the users form database
  },
}
);

export default connect(mapStateToProps, mapDispatchToProps)(App);