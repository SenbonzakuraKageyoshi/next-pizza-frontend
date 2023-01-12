import ProductList from '../src/components/ProductList/ProductList';
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next'
import { client } from '../service/service';
import { Product } from '../src/types/product';
import Modal from '../src/components/Modal/Modal';
import AuthComponent from '../src/components/AuthComponent/AuthComponent';
import { modal } from '../src/redux/selectors';
import { useAppSelector } from '../src/redux/redux-hooks';

export const getServerSideProps: GetServerSideProps<{ data: Product[] }> = async () => {
  const { data } = await client.get<Product[]>('/products/get-products?productCategory=pizza&limit=8');

  return {
    props: {
      data,
    },
  }
};

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const modalState = useAppSelector(modal);

  return (
    <>
      <ProductList categoryName='Пицца' data={data}/>
      {
      modalState 
      &&
      <Modal>
        <AuthComponent />
      </Modal>
      }
    </>
  );
};

export default Home;
