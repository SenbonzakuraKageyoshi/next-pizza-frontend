import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Message } from "../../types/message";
import styles from './orderActions.module.scss';

interface IOrderActionsProps {
    selectedProductsLoaded: boolean,
    isOrder: boolean
}

const OrderActions = React.memo(({ selectedProductsLoaded, isOrder }: IOrderActionsProps) => {
    return (
        <div className={styles.cartActions}>
            <Link href="/" className={styles.orderActionsItem}>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.orderActionsItemIcon}/>
                <span>Вернуться в магазин</span>
            </Link>
            {
            selectedProductsLoaded
            &&
            !isOrder
            ?
            <Link href="/order" className={styles.orderActionsItemOrder}>
                <span>Оформить заказ</span>
                <FontAwesomeIcon icon={faAngleRight} className={styles.orderActionsItemIcon}/>
            </Link>
            :
            null
            }
        </div>
      );
});

export default OrderActions