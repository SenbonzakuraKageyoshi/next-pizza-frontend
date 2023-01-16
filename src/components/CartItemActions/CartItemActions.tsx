import styles from './cartItemActions.module.scss';
import plus from '../../../public/icons/plus.svg';
import minus from '../../../public/icons/minus.svg';
import remove from '../../../public/icons/remove.svg';
import Image from 'next/image';
import { useAppDispatch } from '../../redux/redux-hooks';
import { incrementSelectedProductNumber, decrementSelectedProductNumber } from '../../service/service';
import { addSelectedProductNumber, removeSelectedProductNumber } from '../../redux/selectedProductsSlice/selectedProductsSlice';

interface ICartItemActionsProps {
    productNumber: number,
    selectedProductId: number,
    UserId: number,
    // incrementProductNumber: (id: string) => void,
    // decrementProductNumber: (id: string) => void,
    // removeProduct: (id: string) => void
}

const CartItemActions = ({ productNumber, selectedProductId, UserId }: ICartItemActionsProps) => {

    const dispatch = useAppDispatch();

    const onIncrementHandler = () => {
        incrementSelectedProductNumber(UserId, selectedProductId)
            .then(() => {
                dispatch(addSelectedProductNumber(selectedProductId))
            })
            .catch((res) => console.log(res))
    };

    const onDecrementHandler = () => {
        decrementSelectedProductNumber(UserId, selectedProductId)
            .then(() => {
                dispatch(removeSelectedProductNumber(selectedProductId))
            })
            .catch((res) => console.log(res))
    };

  return (
    // Заменить SVG на что-то более оптимизированное!!!
    <div className={styles.cartItemActions}>
        <div className={styles.numberActions}>
            <button className={styles.numberActionsItem} onClick={onDecrementHandler}>
                <Image src={minus} alt='-' width={8} height={17}/>
            </button>
            <div className={styles.cartItemNumber}>{productNumber}</div>
            <button className={styles.numberActionsItem} onClick={onIncrementHandler}>
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