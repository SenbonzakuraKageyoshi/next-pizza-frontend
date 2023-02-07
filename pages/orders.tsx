import { useState, useEffect } from "react";
import { Order } from "../src/types/order";
import { getOrders } from "../src/service/service";
import { useAppSelector } from "../src/redux/redux-hooks";
import { user } from "../src/redux/selectors";
import OrderItem from "../src/components/OrderItem/OrderItem";
import SectionTitle from "../src/components/SectionTitle/SectionTitle";
import Loader from "../src/components/Loader/Loader";
import ErrorMessage from "../src/components/ErrorMessage/ErrorMessage";
import { nanoid } from "nanoid";
import { SelectedProduct } from "../src/types/product";
import styles from '../styles/orders.module.scss';

const orders = () => {

    const userData = useAppSelector(user);

    const [orders, setOrders] = useState<null | Order[]>(null);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        if(userData.data){
            getOrders({UserId: userData.data.id})
            .then((data) => setOrders(data))
            .catch(() => setIsError(true))
        }
    }, [userData.data])

  return (
    <section className="sectionOrders">
        <SectionTitle value="Ваши заказы"/>
        {
        orders && orders.length
        ?
        orders.map((el) => (
          <ul className={styles.ordersList} key={nanoid()}>
            {JSON.parse(el.orderData).map((i: SelectedProduct) => (
              <OrderItem orderedProduct={i} key={nanoid()}/>
            ))}
          </ul>
        ))
        :
        !orders && !isError
        ?
        <Loader />
        :
        orders && !orders.length
        ?
        <ErrorMessage message="У Вас нет заказов"/>
        :
        null
        }
    </section>
  )
}

export default orders