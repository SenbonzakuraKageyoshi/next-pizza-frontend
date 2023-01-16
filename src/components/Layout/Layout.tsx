import { useEffect } from 'react';
import Header from '../Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { fetchUser } from '../../redux/userSlice/userSlice';
import { user } from '../../redux/selectors';
import { fetchSelectedProducts } from '../../redux/selectedProductsSlice/selectedProductsSlice';

interface ILayoutProps {
    children: React.ReactNode
};

const Layout = ({ children }: ILayoutProps) => {

  const userData = useAppSelector(user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('pizza-app-token');

    if(token && userData.status === 'idle'){
      dispatch(fetchUser(token));
    };
    if(userData.data){
      dispatch(fetchSelectedProducts(userData.data.id))
    }
  }, []);

  useEffect(() => {
    if(userData.data){
      dispatch(fetchSelectedProducts(userData.data.id))
    }
  }, [userData.data]);

  return (
    <>
        <Header />
        <div className="container">
            { children }
        </div>
    </>
  );
};

export default Layout;