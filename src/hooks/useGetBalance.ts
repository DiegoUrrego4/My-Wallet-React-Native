import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
// import {Come} from '../interfaces/accountInterface';

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
        account: {balance, id: idOutcome},
      } = data;
      setState({...state, balance, idOutcome});
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const getAccountCredit = async () => {
    try {
      const {email} = userData;
      const resp = await fetch(
        `http://192.168.1.25:3000/api/v1/clients/${email}`,
      );
      const data = await resp.json();
      const {
        account: {credit, id: idOutcome},
      } = data;
      console.log('CREDIT :>> ', credit);
      setState({...state, credit, idOutcome});
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const createMovement = async (form: any) => {
    try {
      await fetch('http://192.168.1.25:3000/api/v1/movements', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // resetForm();
      // resetUserForm();
      setState(prevState => ({
        ...prevState,
        balance: (Number(state.balance) - Number(form.amount)).toString(),
      }));
    } catch (error: any) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    getAccountBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.balance]);

  useEffect(() => {
    getAccountCredit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.credit]);

  return {
    balance: state.balance,
    idOutcome: state.idOutcome,
    credit: state.credit,
    createMovement,
  };
};
