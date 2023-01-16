import styles from './cartItem.module.scss';
import Image from 'next/image';
import PriceValue from '../PriceValue/PriceValue';
import CartItemActions from '../CartItemActions/CartItemActions';
import { SelectedProduct } from '../../types/product';

const CartItem = ({ id, productsNumber, UserId, ProductId, Product }: Omit<SelectedProduct, 'createdAt' | 'updatedAt'>) => {
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
        <CartItemActions productNumber={productsNumber} selectedProductId={id} UserId={UserId} />
    </div>
  )
}

export default CartItem