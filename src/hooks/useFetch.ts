import {useEffect, useState} from 'react';
import {ClientResponse} from '../interfaces/clientsInterface';

const baseURL = 'http://192.168.1.25:3000/api/v1';

interface Client {
  data: ClientResponse;
  isLoading: boolean;
  hasError: boolean | null;
}

export const useFetch = (url: string) => {
  const [state, setState] = useState<Client>({
    data: {
      id: '',
      createdAt: '',
      deletedAt: null,
      email: '',
      fullName: '',
      phone: '',
      photo: '',
      state: 0,
      updatedAt: null,
      account: {
        balance: '',
        clientId: '',
        createdAt: '',
        credit: '',
        deletedAt: null,
        id: '',
        state: 0,
        updatedAt: null,
      },
      app: {
        appColor: '',
        clientId: '',
        createdAt: '',
        id: '',
        updatedAt: null,
      },
    },
    isLoading: true,
    hasError: null,
  });
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(`${baseURL}${url}`);
    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
