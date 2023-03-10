import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useForm } from 'react-hook-form';
import { AdressFormValues } from '../../types/forms';
import { user } from '../../redux/selectors';
import { useAppSelector, useAppDispatch } from '../../redux/redux-hooks';
import { updateUser } from '../../service/service';
import { fetchUser } from '../../redux/userSlice/userSlice';
import { useState } from 'react';
import styles from '../../../styles/forms.module.scss';
import Loader from '../Loader/Loader';

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
    userData.data && userData.status === 'fulfilled'
    ?
    <form action="POST" className={styles.adressForm} onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userCity">Город</label>
                <input defaultValue={userData.data.userCity} {...register('userCity', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userCity"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userCity'] && <span>{errors['userCity'].message}</span>}</div>
        </div>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userAdress">Адрес</label>
                <input defaultValue={userData.data.userAdress} {...register('userAdress', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userAdress"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userAdress'] && <span>{errors['userAdress'].message}</span>}</div>
        </div>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userHouseNumber">Номер дома</label>
                <input defaultValue={userData.data.userHouseNumber} {...register('userHouseNumber', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userHouseNumber"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userHouseNumber'] && <span>{errors['userHouseNumber'].message}</span>}</div>
        </div>
        <div className={styles.formItem}>
            <div>
                <label htmlFor="userApartmentNumber">Номер квартиры</label>
                <input defaultValue={userData.data.userApartmentNumber} {...register('userApartmentNumber', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.formInput} name="userApartmentNumber"/>
            </div>
            <div className={styles.formInputErrorMessage}>{errors['userApartmentNumber'] && <span>{errors['userApartmentNumber'].message}</span>}</div>
        </div>
        <button className={styles.sendFormButton}>Сохранить</button>
        {errorMessage && <ErrorMessage message={errorMessage}/>}
    </form>
    :
    !userData.data && userData.status === 'pending'
    ?
    <Loader />
    :
    !userData.data && userData.status === 'rejected'
    ?
    <ErrorMessage message='Ошибка получения данных о пользователе'/>
    :
    null
  )
}

export default AdressComponent