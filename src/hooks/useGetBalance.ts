import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';

export const useGetBalance = () => {
  const [state, setState] = useState({
    balance: '0',
    idOutcome: '',
    credit: '50000000',
  });
  // const [accountIdOutcome, setAccountIdOutcome] = useState('');
  const {userData} = useSelector((stateR: RootState) => stateR.auth);
  const getAccountBalance = async () => {
    try {
      const {email} = userData;
      const resp = await fetch(
        `http://192.168.1.25:3000/api/v1/clients/${email}`,
      );
      const data = await resp.json();
      const {
        account: {balance, id: idOutcome, credit},
      } = data;
      setState({balance, idOutcome, credit});
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    getAccountBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return {
    balance: state.balance,
    idOutcome: state.idOutcome,
    credit: state.credit,
  };
};
