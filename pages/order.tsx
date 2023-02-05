import SectionTitle from "../src/components/SectionTitle/SectionTitle"
import { useAppSelector, useAppDispatch } from "../src/redux/redux-hooks"
import { clearSelectedProducts } from "../src/redux/selectedProductsSlice/selectedProductsSlice"
import { user, modal, selectedProducts } from "../src/redux/selectors"
import OrderInfoItem from "../src/components/OrderInfoItem/OrderInfoItem"
import Loader from "../src/components/Loader/Loader"
import ErrorMessage from "../src/components/ErrorMessage/ErrorMessage"
import { useState } from "react"
import Modal from "../src/components/Modal/Modal"
import TimeComponent from "../src/components/TimeComponent/TimeComponent"
import FinalOrderInfo from "../src/components/FinalOrderInfo/FinalOrderInfo"
import OrderActions from "../src/components/OrderActions/OrderActions"
import { payOrder, removeAllProducts } from "../src/service/service"
import styles from '../styles/order.module.scss';

const order = () => {

    const [time, setTime] = useState<string>('Побыстрее'); 
    const [payIsLoading, setPayIsLoading] = useState<boolean>(false); 
    const [isPayed, setIsPayed] = useState<boolean>(false);

    const userData = useAppSelector(user);
    const modalState = useAppSelector(modal);
    const selectedProductsData = useAppSelector(selectedProducts);

    const dispatch = useAppDispatch();
    
    const userAdress: string = 
    userData.data 
    && 
    userData.data.userCity
    &&
    userData.data.userAdress
    ? 
    `${userData.data.userCity}, ул. ${userData.data.userAdress}, дом ${userData.data.userHouseNumber}, кв. ${userData.data.userApartmentNumber}` 
    :
    'Нет данных';

    const createOrder = () => {
      if(userData.data){
        setPayIsLoading(true)
        payOrder({UserId: userData.data.id, orderData: JSON.stringify(selectedProductsData.data)})
        .then(() => {
          if(userData.data){
            removeAllProducts(userData.data.id)
            .then(() => {
              setPayIsLoading(false);
              setIsPayed(true);
              dispatch(clearSelectedProducts());
            });
          }
        })
      }
    }

  return (
    <section className="sectionOrder">
      {
      userData.data && userData.status === 'fulfilled'
      ?
      <>
      {
      isPayed
      ?
      <SectionTitle value="Ваш заказ был создан! Спасибо, что заказываете пиццу у нас!"/>
      :
      <div className={styles.sectionOrderContent}>
          {
          payIsLoading
          ?
          <Loader />
          :
          <div className={styles.orderInfo}>
            <SectionTitle value="Заказ на доставку"/>
            <OrderInfoItem name="Имя" value={userData.data.userFirstName}/>
            <OrderInfoItem name="Телефон" value={userData.data.userTelephone}/>
            <OrderInfoItem name="Адрес" value={userAdress} />
            <OrderInfoItem name="Время доставки" value={time} isEditable={true}/>
            <div className={styles.orderActions}>
              <OrderActions selectedProductsLoaded={true} isOrder={true}/>
              <button className={styles.createOrderButton} onClick={createOrder}>Оформить заказ</button>
            </div>
          </div>
          }
          {
          selectedProductsData.data && selectedProductsData.status === 'fulfilled'
          ?
          <FinalOrderInfo selectedProducts={selectedProductsData.data}/>
          :
          !selectedProductsData.data && selectedProductsData.status === 'pending' 
          ?
          <Loader />
          :
          !selectedProductsData.data && selectedProductsData.status === 'rejected' 
          ?
          <ErrorMessage message="Ошибка получения данных о заказе"/>
          :
          null
          }
      </div>
      }
      </>
      :
      !userData.data && userData.status === 'pending'
      ?
      <Loader />
      :
      !userData.data && userData.status === 'rejected'
      ?
      <ErrorMessage message="Ошибка загрузки данные, перезагрузите страницу"/>
      :
      null
      }
      {
      modalState
      &&
      <Modal header="Время доставки">
        <TimeComponent setTime={setTime} time={time}/>
      </Modal>
      }
    </section>
  )
}

export default order