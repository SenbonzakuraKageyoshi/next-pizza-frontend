import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { changeIsOpened } from '../../redux/modalSlice/modal';
import { user } from '../../redux/selectors';
import { selectProduct } from '../../service/service';
import styles from './productButton.module.scss';

interface IProductButtonProps {
  ProductId: number,
};

const ProductButton = ({ ProductId }: IProductButtonProps) => {

  const dispatch = useAppDispatch();
  const userData = useAppSelector(user);

  const onClickHandler = () => {
    if(userData.data){
      selectProduct(ProductId, userData.data.id)
    }
  };

  return (
    
    userData.data && userData.status === 'fulfilled'
    ?
    <button className={styles.productButton} onClick={onClickHandler}>
        В корзину
    </button>
    :
    !userData.data && userData.status === 'pending'
    ?
    <button className={styles.productButton}>
        В корзину
    </button>
    :
    <button className={styles.productButton} onClick={() => dispatch(changeIsOpened())}>
        В корзину
    </button>
  );
};

export default ProductButton