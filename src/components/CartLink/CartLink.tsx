import React from 'react'
import Link from 'next/link';
import { selectedProducts, user } from '../../redux/selectors';
import { useAppSelector, useAppDispatch } from '../../redux/redux-hooks';
import { changeIsOpened } from '../../redux/modalSlice/modal';
import styles from './cartLink.module.scss';

const CartLink = React.memo(() => {

  const selectedProductsData = useAppSelector(selectedProducts);
  const userData = useAppSelector(user);

  const dispatch = useAppDispatch();

  let productsNumber: number = 0;

  if(selectedProductsData.data){
    selectedProductsData.data.forEach((el) => {
      productsNumber += el.productsNumber
    })
  }

  if(userData.data && userData.status === 'fulfilled'){
    return (
      <Link href="/cart" className={styles.cartLink}>
          <span>Корзина</span>
          {
          selectedProductsData.data && selectedProductsData.status === 'fulfilled'
          ?
          <span>({productsNumber})</span>
          :
          <span>(0)</span>
          }
      </Link>
    );
  }else if(!userData.data && userData.status === 'pending'){
    return (
      <Link href="/cart" className={styles.cartLinkLoading}>
          <span>Загрузка</span>
      </Link>
    );
  }else{
    return (
      <button className={styles.cartLink} onClick={() => dispatch(changeIsOpened())}>
          <span>Корзина</span>
          <span>(0)</span>
      </button>
    );
  }
});

export default CartLink