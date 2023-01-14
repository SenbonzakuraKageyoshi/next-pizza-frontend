import styles from './cartItem.module.scss';
import Image from 'next/image';
import productMiniature from '../../../public/product-miniature.png'
import PriceValue from '../PriceValue/PriceValue';
import CartItemActions from '../CartItemActions/CartItemActions';

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
        <div className={styles.productMainInfo}>
            <Image src={productMiniature} className={styles.cartProductMiniature} alt="продукт" width={71} height={71}/>
            <div>
                <h1 className={styles.productName}>С креветками и трюфелями</h1>
                <p className={styles.productDescr}>Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г</p>
            </div>
        </div>
        <PriceValue fontSize='24'color='#F7D22D' value='120'/>
        <CartItemActions />
    </div>
  )
}

export default CartItem