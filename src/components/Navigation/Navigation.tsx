import Link from 'next/link';
import CartLink from '../CartLink/CartLink';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
        <Link href="/auth" className={styles.navigationLink}>Войти</Link>
        <CartLink />
    </nav>
  )
}

export default Navigation