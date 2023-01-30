import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';
import { AdressFormValues } from '../../types/forms';
import { user } from '../../redux/selectors';
import { useAppSelector, useAppDispatch } from '../../redux/redux-hooks';
import { updateUser } from '../../service/service';
import { fetchUser } from '../../redux/userSlice/userSlice';
import { useState } from 'react';
import styles from '../../../styles/forms.module.scss';

const AdressComponent = () => {

    const [errorMessage, setErrorMessage] = useState<string>('');

    const userData = useAppSelector(user);
    const dispatch = useAppDispatch();

    const { register, formState: { errors }, handleSubmit } = useForm<AdressFormValues>({ mode: 'onTouched' });

    const onSubmitHandler = (data: AdressFormValues) => {
        if(userData.data){
            updateUser({...userData.data, ...data})
                .then(() => {
                    dispatch(fetchUser(userData.data!.token))
                    setErrorMessage('Данные профиля успешно изменены!')
                })
                .catch(() => setErrorMessage('Ошибка обновления данных профиля'))
        }
    };

  return (
    <form action="POST" className={styles.adressForm} onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userCity">Город</label>
                <input {...register('userCity', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userCity"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userCity'] && <span>{errors['userCity'].message}</span>}</div>
        </div>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userAdress">Адрес</label>
                <input {...register('userAdress', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userAdress"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userAdress'] && <span>{errors['userAdress'].message}</span>}</div>
        </div>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userHouseNumber">Номер дома</label>
                <input {...register('userHouseNumber', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userHouseNumber"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userHouseNumber'] && <span>{errors['userHouseNumber'].message}</span>}</div>
        </div>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userApartmentNumber">Номер квартиры</label>
                <input {...register('userApartmentNumber', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userApartmentNumber"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userApartmentNumber'] && <span>{errors['userApartmentNumber'].message}</span>}</div>
        </div>
        <button className={styles.sendFormButton}>Сохранить</button>
        {errorMessage && <ErrorMessage message={errorMessage}/>}
    </form>
  )
}

export default AdressComponent