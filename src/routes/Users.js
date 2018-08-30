import React from 'react';

import UserList from '../components/UserList';

const Users = ({ products }) => {
  return (
    <div style={{margin:'20px'}}>
      <h2>List of User</h2>
      <UserList/>
    </div>
  );
};

export default Users;

