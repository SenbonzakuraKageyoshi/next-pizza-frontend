import styles from './priceValue.module.scss';

interface IPriceValue {
    fontSize?: string,
    color?: string
    value: string
};

const PriceValue = ({ value, fontSize, color }: IPriceValue) => {
  return (
    <div className={styles.productPrice} style={{fontSize, color}}>{value} ₽</div>
  )
}

export default PriceValue