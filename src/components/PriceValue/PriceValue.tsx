import styles from './priceValue.module.scss';

interface IPriceValue {
    fontSize?: string,
    color?: string
    value: number
};

const PriceValue = ({ value, fontSize, color }: IPriceValue) => {
  return (
    <div className={styles.productPrice} style={{fontSize, color}}>{value} ₽</div>
  )
}

export default PriceValue