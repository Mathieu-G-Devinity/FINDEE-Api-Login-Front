import { connect } from 'react-redux';
import UsersList from 'src/components/UsersList';
import { getUsersList } from 'src/action/user';


const mapStateToProps = (state) => ({
  usersList: state.usersList,
  
});

const mapDispatchToProps = (dispatch) => ({
    displayUsersList: function () {
        dispatch(getUsersList());
      },

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);