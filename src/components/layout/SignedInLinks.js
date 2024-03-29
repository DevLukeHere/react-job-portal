import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return ( 
    <ul className="right">
      <li><a>Job Applications</a></li>
      <li><a>{props.profile.firstname}</a></li>
      <li><a onClick={props.signOut}>Sign Out</a></li>
    </ul>
   );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
 
export default connect(null, mapDispatchToProps) (SignedInLinks);