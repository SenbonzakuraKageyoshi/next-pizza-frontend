import SectionTitle from "../src/components/SectionTitle/SectionTitle"
import CartItem from "../src/components/CartItem/CartItem"
import styles from '../styles/cart.module.scss'
import Link from "next/link"
import Image from "next/image"
import back from '../public/icons/back.svg';
import forward from '../public/icons/forward.svg';

const cart = () => {
  return (
    // сделать кейс на пустую корзину
    <section className="section-cart">
      <div className="container-sm">
        <SectionTitle value="Корзина"/>
        <ul className={styles.cartList}>
          <CartItem />
          <CartItem />
        </ul>
        <div className={styles.cartActions}>
          <Link href="/" className={styles.cartActionsItem}>
              <Image src={back} alt="" width={10} height={28}/>
              <span>Вернуться в магазин</span>
          </Link>
          <Link href="/order" className={styles.cartActionsItem}>
              <span>Оформить заказ</span>
              <Image src={forward} alt="" width={10} height={28}/>
          </Link>
        </div>
      </div>
    </section>
  ) 
}

export default cart