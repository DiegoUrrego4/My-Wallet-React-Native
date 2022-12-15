import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import {useFetch} from './useFetch';
import {useState, useEffect} from 'react';

export const useAppColor = () => {
  const [colorState, setColorState] = useState('');
  const {userData} = useSelector((state: RootState) => state.auth);

  const {email} = userData;
  const {data} = useFetch(`/clients/${email}`);
  const getAppColor = () => {
    const {app: {appColor} = ''} = data;
    setColorState(appColor);
  };
  useEffect(() => {
    getAppColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.app]);

  return {colorState};
};
