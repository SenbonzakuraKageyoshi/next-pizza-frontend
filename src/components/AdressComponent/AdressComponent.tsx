import styles from './adressComponent.module.scss';
import { useForm } from 'react-hook-form';
import { AdressFormValues } from '../../types/forms';

const AdressComponent = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<AdressFormValues>({ mode: 'onTouched' });

  return (
    <form action="POST" className={styles.adressForm}>
        <div className={styles.adressFormItem}>
            <div>
                <label htmlFor="userCity">Город</label>
                <input {...register('userCity', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="userCity"/>
            </div>
            <div className={styles.adressFormInputErrorMessage}>{errors['userCity'] && <span>{errors['userCity'].message}</span>}</div>
        </div>
        <div className={styles.adressFormItem}>
            <div>
                <label htmlFor="userAdress">Адрес</label>
                <input {...register('userAdress', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="userAdress"/>
            </div>
            <div className={styles.adressFormInputErrorMessage}>{errors['userAdress'] && <span>{errors['userAdress'].message}</span>}</div>
        </div>
        <div className={styles.adressFormItem}>
            <div>
                <label htmlFor="userHouseNumber">Номер дома</label>
                <input {...register('userHouseNumber', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="userHouseNumber"/>
            </div>
            <div className={styles.adressFormInputErrorMessage}>{errors['userHouseNumber'] && <span>{errors['userHouseNumber'].message}</span>}</div>
        </div>
        <div className={styles.adressFormItem}>
            <div>
                <label htmlFor="userApartmentNumber">Номер квартиры</label>
                <input {...register('userApartmentNumber', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="userApartmentNumber"/>
            </div>
            <div className={styles.adressFormInputErrorMessage}>{errors['userApartmentNumber'] && <span>{errors['userApartmentNumber'].message}</span>}</div>
        </div>
        <button className={styles.sendFormButton}>Сохранить</button>
    </form>
  )
}

export default AdressComponent