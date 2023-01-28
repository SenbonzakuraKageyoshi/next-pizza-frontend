import styles from './cartTotalPrice.module.scss';
import { SelectedProduct } from '../../types/product';

interface ICartTotalPriceProps {
    selectedProducts: SelectedProduct[]
}

const CartTotalPrice = ({ selectedProducts }: ICartTotalPriceProps) => {

    const totalPrice = selectedProducts.reduce((total, el) => total + (el.Product.productPrice * el.productsNumber), 0)

  return (
    <div className={styles.cartTotalPrice}>
        Сумма заказа: <span className={styles.cartTotalPriceValue}>{totalPrice} ₽</span>
    </div>
  )
}

export default CartTotalPrice