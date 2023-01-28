import styles from './cartItem.module.scss';
import Image from 'next/image';
import PriceValue from '../PriceValue/PriceValue';
import CartItemActions from '../CartItemActions/CartItemActions';
import RemoveCartItemButton from '../RemoveCartItemButton/RemoveCartItemButton';
import { removeProduct } from '../../service/service';
import { removeSelectedProduct } from '../../redux/selectedProductsSlice/selectedProductsSlice';
import { SelectedProduct } from '../../types/product';
import { useAppDispatch } from '../../redux/redux-hooks';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState } from 'react';

const CartItem = ({ id, productsNumber, UserId, ProductId, Product }: Omit<SelectedProduct, 'createdAt' | 'updatedAt'>) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onRemoveHandler = () => {
    setIsLoading(true)
    removeProduct(ProductId, UserId)
      .then(() => {
        dispatch(removeSelectedProduct(ProductId));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true)
      })
  }
  
  return (
    <div className={styles.cartItem}>
        <div className={styles.productMainInfo}>
            <Image src={Product.productImage} className={styles.cartProductMiniature} alt="продукт" width={71} height={71}/>
            <div>
                <h1 className={styles.productName}>{Product.productName}</h1>
                <p className={styles.productDescr}>{Product.productDescription}</p>
            </div>
        </div>
        <PriceValue fontSize='24'color='#F7D22D' value={Product.productPrice * productsNumber}/>
        <CartItemActions isLoading={isLoading} setIsLoading={setIsLoading} setIsError={setIsError} productNumber={productsNumber} selectedProductId={id} UserId={UserId} />
        <RemoveCartItemButton onRemoveHandler={onRemoveHandler} disabled={isLoading}/>
        {
        isLoading
        &&
        <div className={styles.actionStatusMessage}>
          <ErrorMessage message='Загрузка...'/>
        </div>
        }
        {
        isError
        &&
        <div className={styles.actionStatusMessage}>
          <ErrorMessage message='Ошибка'/>
        </div>
        }
    </div>
  )
}

export default CartItem