import styles from './productCard.module.scss';
import Image from 'next/image';
import ProductButton from '../ProductButton/ProductButton';
import { Product } from '../../types/product';

const ProductCard = ({ id, productName, productDescription, productImage, productPrice }: Omit<Product, 'productCategory' | 'createdAt' | 'updatedAt'>) => {
  return (
    <li className={styles.productCard}>
        <Image src={productImage} alt='pizza' width={253} height={253} className={styles.productImage}/>
        <h1 className={styles.productName}>{productName}</h1>
        <p className={styles.productDescr}>{productDescription}</p>
        <div className={styles.productCardFooter}>
          <span className={styles.productPrice}>Цена: {productPrice} ₽</span>
          <ProductButton ProductId={id} />
        </div>
    </li>
  )
}

export default ProductCard