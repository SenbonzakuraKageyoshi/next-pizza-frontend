import SectionTitle from "../src/components/SectionTitle/SectionTitle"
import { useEffect } from "react"
import CartItem from "../src/components/CartItem/CartItem"
import OrderActions from "../src/components/OrderActions/OrderActions"
import { useAppSelector } from "../src/redux/redux-hooks"
import styles from '../styles/cart.module.scss'
import { selectedProducts, user } from "../src/redux/selectors"
import Loader from "../src/components/Loader/Loader"
import CartTotalPrice from "../src/components/CartTotalPrice/CartTotalPrice"
import { nanoid } from "nanoid"
import { checkAuth } from "../src/utils/checkAuth"

const cart = () => {

  const selectedProductsData = useAppSelector(selectedProducts);
  const userData = useAppSelector(user);

  useEffect(() => {
    checkAuth(userData)
  }, [userData.data])

  const selectedProductIsNotEmpty = selectedProductsData.data?.length

  return (
    <section className="section-cart">
      <div className="container-sm">
        <SectionTitle value="Корзина"/>
        {
        selectedProductsData.data && selectedProductsData.status === 'fulfilled' && selectedProductIsNotEmpty
        ?
        <ul className={styles.cartList}>
          {selectedProductsData.data.map((el) => (
            <CartItem key={nanoid()} id={el.id} ProductId={el.ProductId} productsNumber={el.productsNumber} UserId={el.UserId} Product={el.Product}/>
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
        {
        !selectedProductsData.data && selectedProductsData.status === 'pending'
        ?
        <Loader />
        :
        selectedProductsData.data && selectedProductsData.status === 'fulfilled' && selectedProductIsNotEmpty
        ?
        <CartTotalPrice selectedProducts={selectedProductsData.data}/>
        :
        null
        }
        <OrderActions selectedProductsLoaded={selectedProductIsNotEmpty ? true : false}/>
      </div>
    </section>
  ) 
}

export default cart