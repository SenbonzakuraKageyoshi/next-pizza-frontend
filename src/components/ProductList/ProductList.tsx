import styles from './productList.module.scss';
import CategoryName from '../CategoryName/CategoryName';
import ProductCard from '../ProductCard/ProductCard';
import { nanoid } from 'nanoid';
import { Product } from '../../types/product';

type IProductListProps = {
  categoryName: string
  data: Product[];
}

const ProductList = ({ categoryName, data }: IProductListProps) => {
  return (
    <div className={styles.productListWrapper}>
      <CategoryName value={categoryName}/>
      <ul className={styles.productList}>
        {data.map((el) => (
          <ProductCard 
            key={nanoid()} 
            id={el.id}
            productName={el.productName} 
            productDescription={el.productDescription}
            productImage={el.productImage}
            productPrice={el.productPrice}
          />
        ))}
      </ul>
    </div>
  )
}

export default ProductList