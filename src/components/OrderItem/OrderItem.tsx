import styles from './orderItem.module.scss';
import Image from 'next/image';
import { SelectedProduct } from '../../types/product';

interface IOrderItemProps {
  orderedProduct: SelectedProduct
}

const OrderItem = ({ orderedProduct }: IOrderItemProps) => {
  return (
    <div className={styles.orderItem}>
        <Image src="http://localhost:5000/static/products/product1.png" width={150} height={150} alt="product image"/>
        <div className={styles.orderItemInfo}>
          <h1 className={styles.orderItemName}>{orderedProduct.Product.productName}</h1>
          <div className={styles.orderItemInfoItem}><span>Количество:</span> {orderedProduct.productsNumber}</div>
          <div className={styles.orderItemInfoItem}><span>Цена за 1 позицию:</span> {orderedProduct.Product.productPrice}</div>
          <div className={styles.orderItemInfoItem}><span>Игоговая цена:</span> {orderedProduct.Product.productPrice * orderedProduct.productsNumber}</div>
        </div>
    </div>
  )
}

export default OrderItem