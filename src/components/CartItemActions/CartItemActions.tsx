import styles from './cartItemActions.module.scss';
import plus from '../../../public/icons/plus.svg';
import minus from '../../../public/icons/minus.svg';
import remove from '../../../public/icons/remove.svg';
import Image from 'next/image';

// interface ICartItemActions {
//     productNumber: number,
//     incrementProductNumber: (id: string) => void,
//     decrementProductNumber: (id: string) => void,
//     removeProduct: (id: string) => void
// }

const CartItemActions = () => {
  return (
    <div className={styles.cartItemActions}>
        <div className={styles.numberActions}>
            <button className={styles.numberActionsItem}>
                <Image src={minus} alt='-' width={8} height={17}/>
            </button>
            <div className={styles.cartItemNumber}>1</div>
            <button className={styles.numberActionsItem}>
                <Image src={plus} alt='+' width={8} height={17}/>
            </button>
        </div>
        <button className={styles.removeCartItem}>
            <Image src={remove} alt="удалить" width={27} height={27}/>
        </button>
    </div>
  )
}

export default CartItemActions