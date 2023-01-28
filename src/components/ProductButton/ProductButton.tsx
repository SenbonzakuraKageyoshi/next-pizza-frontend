import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { changeIsOpened } from '../../redux/modalSlice/modal';
import { user } from '../../redux/selectors';
import { selectProduct } from '../../service/service';
import { fetchSelectedProducts } from '../../redux/selectedProductsSlice/selectedProductsSlice';
import { useState } from 'react';
import styles from './productButton.module.scss';

interface IProductButtonProps {
  ProductId: number,
};

const ProductButton = ({ ProductId }: IProductButtonProps) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const userData = useAppSelector(user);

  const onClickHandler = () => {
    if(userData.data){
      setIsLoading(true);
      
      selectProduct(ProductId, userData.data.id).then(() => {
        dispatch(fetchSelectedProducts(userData.data!.id))
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false))
      }).catch(() => setIsLoading(true))
    }
  };

  const buttonText = isLoading ? 'Загрузка...' : 'В корзину';

  return (
    
    userData.data && userData.status === 'fulfilled'
    ?
    <button className={styles.productButton} onClick={onClickHandler} disabled={isLoading}>
        {buttonText}
    </button>
    :
    !userData.data && userData.status === 'pending'
    ?
    <button className={styles.productButton} disabled={isLoading}>
        {buttonText}
    </button>
    :
    <button className={styles.productButton} onClick={() => dispatch(changeIsOpened())} disabled={isLoading}>
        {buttonText}
    </button>
  );
};

export default ProductButton