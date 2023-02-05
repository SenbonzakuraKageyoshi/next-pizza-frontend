import styles from './finalOrderInfo.module.scss';
import FinalOrderItem from '../FinalOrderItem/FinalOrderItem';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CartTotalPrice from '../CartTotalPrice/CartTotalPrice';
import { SelectedProduct } from '../../types/product';

interface IFinalOrderInfoProps {
    selectedProducts: SelectedProduct[]
}

const FinalOrderInfo = ({ selectedProducts }: IFinalOrderInfoProps) => {
  return (
   <div className={styles.finalOrderInfo}>
    {
    selectedProducts
    ?
    selectedProducts.length
    ?
    <>
    <h1 className={styles.finalOrderInfoTitle}>Состав заказа</h1>
    <ul className={styles.finalOrderInfoList}>
        {selectedProducts.map((el) => (
            <FinalOrderItem name={el.Product.productName} price={el.Product.productPrice} number={el.productsNumber}/>
        ))}
    </ul>
    <div className={styles.finalOrderTotalPrice}>
        <CartTotalPrice selectedProducts={selectedProducts}/>
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
    null
    }
   </div>
  )
}

export default FinalOrderInfo