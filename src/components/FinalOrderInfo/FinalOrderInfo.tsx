import styles from './finalOrderInfo.module.scss';
import FinalOrderItem from '../FinalOrderItem/FinalOrderItem';
import { useAppSelector } from '../../redux/redux-hooks';
import { selectedProducts } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CartTotalPrice from '../CartTotalPrice/CartTotalPrice';


const FinalOrderInfo = () => {

    const selectedProductsData = useAppSelector(selectedProducts);

  return (
   <div className={styles.finalOrderInfo}>
    {
    selectedProductsData.data && selectedProductsData.status === 'fulfilled'
    ?
    selectedProductsData.data.length
    ?
    <>
    <h1 className={styles.finalOrderInfoTitle}>Состав заказа</h1>
    <ul className={styles.finalOrderInfoList}>
        {selectedProductsData.data.map((el) => (
            <FinalOrderItem name={el.Product.productName} price={el.Product.productPrice} number={el.productsNumber}/>
        ))}
    </ul>
    <div className={styles.finalOrderTotalPrice}>
        <CartTotalPrice selectedProducts={selectedProductsData.data}/>
    </div>
    <div className={styles.deliveryMessage}>
        Бесплатная доставка
    </div>
    </>
    :
    <div className={styles.finalOrderInfoEmpty}>
        <ErrorMessage message="Ваш заказ пуст"/>
    </div>
    :
    !selectedProductsData.data && selectedProductsData.status === 'pending'
    ?
    <Loader />
    :
    !selectedProductsData.data && selectedProductsData.status === 'rejected'
    ?
    <ErrorMessage message='Не удалось получить данные заказа, перезагрузите страницу'/>
    :
    null
    }
   </div>
  )
}

export default FinalOrderInfo