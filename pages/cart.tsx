import SectionTitle from "../src/components/SectionTitle/SectionTitle"
import { useEffect } from "react"
import CartItem from "../src/components/CartItem/CartItem"
import OrderActions from "../src/components/OrderActions/OrderActions"
import { useAppDispatch, useAppSelector } from "../src/redux/redux-hooks"
import { fetchSelectedProducts } from "../src/redux/selectedProductsSlice/selectedProductsSlice"
import styles from '../styles/cart.module.scss'
import { selectedProducts, user } from "../src/redux/selectors"
import Loader from "../src/components/Loader/Loader"
import { nanoid } from "nanoid"

const cart = () => {

  const dispatch = useAppDispatch();
  const selectedProductsData = useAppSelector(selectedProducts);
  const userData = useAppSelector(user);

  useEffect(() => {
    if(!userData.data && userData.status === 'rejected' || !localStorage.getItem('pizza-app-token')){
      window.location.href = '/'
    }
    if(userData.data){
      dispatch(fetchSelectedProducts(userData.data.id))
    }
  }, [userData.data])

  console.log(selectedProductsData.data);

  const selectedProductIsNotEmpty = selectedProductsData.data?.length

  return (
    // сделать кейс на пустую корзину
    <section className="section-cart">
      <div className="container-sm">
        <SectionTitle value="Корзина"/>
        {
        selectedProductsData.data && selectedProductsData.status === 'fulfilled' && selectedProductIsNotEmpty
        ?
        <ul className={styles.cartList}>
          {selectedProductsData.data.map((el) => (
            <CartItem key={nanoid()} id={el.id} productsNumber={el.productsNumber} UserId={el.UserId} Product={el.Product}/>
          ))}
        </ul>
        :
        !selectedProductsData.data && selectedProductsData.status === 'pending'
        ?
        <Loader />
        :
        !selectedProductsData.data && selectedProductsData.status === 'rejected'
        ?
        <div className="error-message">Не удалось получить продукты в корзине</div>
        :
        selectedProductsData.data && selectedProductsData.status === 'fulfilled' && !selectedProductIsNotEmpty
        ?
        <div className="error-message">Корзина пуста</div>
        :
        null
        }
        <OrderActions selectedProductsLoaded={selectedProductIsNotEmpty ? true : false}/>
      </div>
    </section>
  ) 
}

export default cart