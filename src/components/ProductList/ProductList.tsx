import styles from './productList.module.scss';
import CategoryName from '../CategoryName/CategoryName';
import ProductCard from '../ProductCard/ProductCard';

type IProductListProps = {
  categoryName: string
}

const ProductList = ({ categoryName }: IProductListProps) => {
  return (
    <div className={styles.productListWrapper}>
      <CategoryName value={categoryName}/>
      <ul className={styles.productList}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </div>
  )
}

export default ProductList