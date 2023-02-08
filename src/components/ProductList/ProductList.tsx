import styles from './productList.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductCard from '../ProductCard/ProductCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { nanoid } from 'nanoid';
import { Product } from '../../types/product';

type IProductListProps = {
  categoryName: string
  data: Product[];
}

const ProductList = ({ categoryName, data }: IProductListProps) => {
  return (
    <div className={styles.productListWrapper}>
      <SectionTitle value={categoryName}/>
      {
      data && data.length
      ?
      <ul className={styles.productList}>
        {
        data.map((el) => (
          <ProductCard 
            key={nanoid()} 
            id={el.id}
            productName={el.productName} 
            productDescription={el.productDescription}
            productImage={el.productImage}
            productPrice={el.productPrice}
          />
        ))
        }
      </ul>
      :
      <ErrorMessage message="Товары отсутствуют"/>
      }
    </div>
  )
}

export default ProductList