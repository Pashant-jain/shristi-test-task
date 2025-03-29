import React from 'react';
import AccountNav from '../components/AccountNav';
import { Container } from '@mui/material';
import AccountDetails from '../components/AccountDetails';

const AccountPage = () => {
  console.log('AccountPage Loaded');
  return (
    <>
      <AccountNav />
      <Container maxWidth='lg'>
        <AccountDetails />
      </Container>
    </>
  );
};

export default AccountPage;
