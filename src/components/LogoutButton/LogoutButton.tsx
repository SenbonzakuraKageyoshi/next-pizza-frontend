import styles from './logoutButton.module.scss';
import { useAppDispatch } from '../../redux/redux-hooks';
import { logout } from '../../redux/userSlice/userSlice';

const LogoutButton = () => {

    const dispatch = useAppDispatch();

  return (
    <button className={styles.logoutButton} onClick={() => dispatch(logout())}>
        Выйти
    </button>
  )
}

export default LogoutButton