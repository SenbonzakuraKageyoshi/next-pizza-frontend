import styles from './cartItemActions.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../redux/redux-hooks';
import { incrementSelectedProductNumber, decrementSelectedProductNumber } from '../../service/service';
import { addSelectedProductNumber, removeSelectedProductNumber } from '../../redux/selectedProductsSlice/selectedProductsSlice';

interface ICartItemActionsProps {
    productNumber: number,
    selectedProductId: number,
    UserId: number,
}

const CartItemActions = ({ productNumber, selectedProductId, UserId }: ICartItemActionsProps) => {

    const addButtonDisabled: boolean = productNumber === 99 ? true : false;
    const removeButtonDisabled: boolean = productNumber === 1 ? true : false;

    const dispatch = useAppDispatch();

    const onIncrementHandler = () => {
        incrementSelectedProductNumber(UserId, selectedProductId)
            .then(() => {
                dispatch(addSelectedProductNumber(selectedProductId))
            })
            .catch((res) => console.log(res))
            // сделать обработку
    };

    const onDecrementHandler = () => {
        decrementSelectedProductNumber(UserId, selectedProductId)
            .then(() => {
                dispatch(removeSelectedProductNumber(selectedProductId))
            })
            .catch((res) => console.log(res))
            // сделать обработку
    };

  return (
    <div className={styles.cartItemActions}>
        <div className={styles.numberActions}>
            <button className={styles.numberActionsItem} disabled={removeButtonDisabled} onClick={onDecrementHandler}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className={styles.cartItemNumber}>{productNumber}</div>
            <button className={styles.numberActionsItem} disabled={addButtonDisabled} onClick={onIncrementHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
  )
}

export default CartItemActions