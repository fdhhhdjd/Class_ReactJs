import React from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { BASE_URL } from '../..';

const MutationPage = () => {
  const createUser = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/add`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      // Xử lý lỗi nếu có
      throw new Error('Error creating user: ' + error.message);
    }
  };

  const { isLoading, isError, mutate, error } = useMutation(createUser, {
    // Xử lý khi mutation bắt đầu
    onMutate: async (variables) => {
      if (isLoading) {
        return <h3>Loading....</h3>;
      }
    },
    onSuccess: () => {
      console.log('Success');
    },
    onError: (error) => {
      console.log('Error', error);
    },
  });

  const handleCreateUser = async () => {
    try {
      await mutate({
        firstName: 'tai',
        lastName: 'heo',
        age: 23,
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <>
      <button onClick={handleCreateUser}>Create User</button>
      {isLoading && <p>Creating user...</p>}
      {isError && <p>Error creating user: {error.message}</p>}
    </>
  );
};

export default MutationPage;
