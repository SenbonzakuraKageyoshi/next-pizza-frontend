import ProductList from '../src/components/ProductList/ProductList';
import Loader from '../src/components/Loader/Loader';

const Home = () => {
  return (
    <>
      <ProductList categoryName='Пицца'/>
      <ProductList categoryName='Паста'/>
    </>
  );
};

export default Home;
