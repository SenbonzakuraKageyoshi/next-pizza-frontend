import styles from './finalOrderItem.module.scss';

interface IFinalOrderItemProps {
    name: string,
    price: number,
    number: number
}

const FinalOrderItem = ({ name, price, number }: IFinalOrderItemProps) => {
  return (
    <li className={styles.finalOrderItem}>
        <div className={styles.finalOrderItemInfo}>
            {name} за {price} ₽ x{number}
        </div>
        <div className={styles.finalOrderItemPrice}>
            {price * number} ₽
        </div>
    </li>
  )
}

export default FinalOrderItem