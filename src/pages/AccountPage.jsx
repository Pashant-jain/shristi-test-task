import React from 'react';
import AccountNav from '../components/AccountNav';
import AccountTab from '../components/AccountTab';

const AccountPage = () => {
  console.log('AccountPage Loaded');
  return (
    <>
      <AccountNav />
      <div className='container' >

     <AccountTab />
      </div>
    </>
  );
};

export default AccountPage;
