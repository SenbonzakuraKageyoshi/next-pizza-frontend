import SectionTitle from "../src/components/SectionTitle/SectionTitle"
import { useAppSelector } from "../src/redux/redux-hooks"
import { user, modal } from "../src/redux/selectors"
import OrderInfoItem from "../src/components/OrderInfoItem/OrderInfoItem"
import Loader from "../src/components/Loader/Loader"
import ErrorMessage from "../src/components/ErrorMessage/ErrorMessage"
import { useState } from "react"
import Modal from "../src/components/Modal/Modal"
import TimeComponent from "../src/components/TimeComponent/TimeComponent"
import FinalOrderInfo from "../src/components/FinalOrderInfo/FinalOrderInfo"
import OrderActions from "../src/components/OrderActions/OrderActions"
import styles from '../styles/order.module.scss';

const order = () => {

    const [time, setTime] = useState<string>('Побыстрее')  

    const userData = useAppSelector(user);
    const modalState = useAppSelector(modal);
    
    const userAdress: string = 
    userData.data 
    && 
    userData.data.userCity
    &&
    userData.data.userAdress
    ? 
    `${userData.data.userCity}, ул. ${userData.data.userAdress}, дом ${userData.data.userHouseNumber}, кв. ${userData.data.userApartmentNumber}` 
    :
    'Нет данных'

  return (
    <section className="sectionOrder">
      {
      userData.data && userData.status === 'fulfilled'
      ?
      <>
      <div className={styles.sectionOrderContent}>
          <div className={styles.orderInfo}>
            <SectionTitle value="Заказ на доставку"/>
            <OrderInfoItem name="Имя" value={userData.data.userFirstName}/>
            <OrderInfoItem name="Телефон" value={userData.data.userTelephone}/>
            <OrderInfoItem name="Адрес" value={userAdress} />
            <OrderInfoItem name="Время доставки" value={time} isEditable={true}/>
            <div className={styles.orderActions}>
              <OrderActions selectedProductsLoaded={true}/>
            </div>
          </div>
          <FinalOrderInfo />
      </div>
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