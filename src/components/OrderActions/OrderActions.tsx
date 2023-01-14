import React from "react"
import Link from "next/link"
import Image from "next/image"
import back from '../../../public/icons/back.svg'
import forward from '../../../public/icons/forward.svg'
import styles from './orderActions.module.scss';

interface IOrderActions {
    selectedProductsLoaded: boolean
}

const OrderActions = React.memo(({ selectedProductsLoaded }: IOrderActions) => {
    return (
        <div className={styles.cartActions}>
            <Link href="/" className={styles.cartActionsItem}>
                <Image src={back} alt="" width={10} height={28}/>
                <span>Вернуться в магазин</span>
            </Link>
            {
            selectedProductsLoaded
            ?
            <Link href="/order" className={styles.cartActionsItemOrder}>
                <span>Оформить заказ</span>
                <Image src={forward} alt="" width={10} height={28}/>
            </Link>
            :
            null
            }
        </div>
      );
});

export default OrderActions