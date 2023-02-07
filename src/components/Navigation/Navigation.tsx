import CartLink from '../CartLink/CartLink';
import styles from './navigation.module.scss';
import { useAppSelector, useAppDispatch } from '../../redux/redux-hooks';
import { user } from '../../redux/selectors';
import { changeIsOpened } from '../../redux/modalSlice/modal';
import Link from 'next/link';

const Navigation = () => {

  const userData = useAppSelector(user);
  
  const dispatch = useAppDispatch();

  return (
    <nav className={styles.navigation}>
      {
        userData.data && userData.status === 'fulfilled'
        ?
        <>
        <Link href="/profile" className={styles.navigationLink}>Профиль</Link>
        <Link href="/orders" className={styles.navigationLink}>Заказы</Link>
        </>
        :
        !userData.data && userData.status === 'pending'
        ?
        <div className={styles.navigationLink}>Загрузка...</div>
        :
        <button className={styles.navigationLink} onClick={() => dispatch(changeIsOpened())}>Войти</button>
      }
        <CartLink />
    </nav>
  )
}

export default Navigation