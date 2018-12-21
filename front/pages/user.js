import React from 'react';
import SingleUser from '../components/users/SingleUser';

const User = props => {
  return <div>
      <SingleUser id={props.query.id} />
    </div>;
};

export default User;
