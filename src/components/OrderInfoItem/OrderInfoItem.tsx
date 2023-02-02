import styles from './orderInfoItem.module.scss';
import { useAppDispatch } from '../../redux/redux-hooks';
import { changeIsOpened } from '../../redux/modalSlice/modal';

interface IOrderInfoItemProps {
  name: string,
  value: string,
  isEditable?: boolean
}

const OrderInfoItem = ({ name, value, isEditable }: IOrderInfoItemProps) => {

  const dispatch = useAppDispatch();

  return (
    <div className={styles.orderInfoItem}>
      <div className={styles.orderInfoItemName}>{name}</div>
      <div className={styles.orderInfoItemValue}>{value} {isEditable && <button className={styles.orderInfoItemEditButton} onClick={() => dispatch(changeIsOpened())}>Изменить</button>}</div>
    </div>
  )
}

export default OrderInfoItem