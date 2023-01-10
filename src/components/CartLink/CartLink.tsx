import styles from './cartLink.module.scss';
import Link from 'next/link';

interface ICartLinkProps {
    
}

const CartLink = ({  }: ICartLinkProps) => {
  return (
    <Link href="/cart" className={styles.cartLink}>
        <span>Корзина</span>
        <span>1</span>
    </Link>
  )
}

export default CartLink