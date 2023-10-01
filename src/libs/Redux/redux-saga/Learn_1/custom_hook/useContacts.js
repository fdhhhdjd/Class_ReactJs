import { useDispatch, useSelector } from 'react-redux';

const useContacts = () => {
  const dispatch = useDispatch();
  const { contacts: data, loading, error } = useSelector((state) => state.data);

  return { dispatch, data, loading, error };
};

export default useContacts;
