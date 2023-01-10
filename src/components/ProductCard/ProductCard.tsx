import styles from './productCard.module.scss';
import Image from 'next/image';
import ProductButton from '../ProductButton/ProductButton';
import product from '/public/products/product.png';

type iProductCardProps = {}

const ProductCard = ({  }: iProductCardProps) => {
  return (
    <li className={styles.productCard}>
        <Image src={product} alt='pizza' width={253} height={253} className={styles.productImage}/>
        <h1 className={styles.productName}>С креветками и трюфелями</h1>
        <p className={styles.productDescr}>Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г</p>
        <div className={styles.productCardFooter}>
          <span className={styles.productPrice}>от 600 ₽</span>
          <ProductButton />
        </div>
    </li>
  )
}

export default ProductCard