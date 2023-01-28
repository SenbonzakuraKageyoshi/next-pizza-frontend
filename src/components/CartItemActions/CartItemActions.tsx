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
    isLoading: boolean,
    setIsLoading: (arg: boolean) => void,
    setIsError: (arg: boolean) => void
}

const CartItemActions = ({ productNumber, selectedProductId, UserId, isLoading, setIsLoading, setIsError }: ICartItemActionsProps) => {

    const addButtonDisabled: boolean = productNumber === 99 || isLoading ? true : false;
    const removeButtonDisabled: boolean = productNumber === 1 || isLoading ? true : false;

    const dispatch = useAppDispatch();

    const onIncrementHandler = () => {

        setIsError(false);

        setIsLoading(true);
        incrementSelectedProductNumber(UserId, selectedProductId)
            .then(() => {
                dispatch(addSelectedProductNumber(selectedProductId));
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setIsError(true);
            })
    };

    const onDecrementHandler = () => {

        setIsError(false);

        setIsLoading(true);
        decrementSelectedProductNumber(UserId, selectedProductId)
            .then(() => {
                dispatch(removeSelectedProductNumber(selectedProductId));
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setIsError(true);
            })
    };

  return (
    <div className={styles.cartItemActions}>
        <div className={styles.cartItemActionsWrapper}>
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
    </div>
  )
}

export default CartItemActions