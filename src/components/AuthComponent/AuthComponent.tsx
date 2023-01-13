import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthFormValues } from '../../types/authForm';
import { useAppDispatch } from '../../redux/redux-hooks';
import { fetchLogin, fetchRegister } from '../../redux/userSlice/userSlice';
import { updateToken } from '../../../service/service';
import styles from './authComponent.module.scss';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const AuthComponent = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { register, formState: { errors }, handleSubmit } = useForm<AuthFormValues>({ mode: 'onTouched' });
  
  const dispatch = useAppDispatch();

  const onLoginHanlder = (data: Pick<AuthFormValues, 'userTelephone' | 'userMail' | 'userPassword'>) => {
    dispatch(fetchLogin(data))
      .then((res) => {
        if(res.hasOwnProperty('error')){
          return setErrorMessage('Неверный логин или пароль')
        }
        window.location.href = '/profile'
      })
      .catch((res) => console.log(res))
  };

  const onRegisterHanlder = (data: AuthFormValues) => {
    dispatch(fetchRegister(data))
      .then((res) => {
        if(res.hasOwnProperty('error')){
          return setErrorMessage('Неверный логин или пароль')
        }
        window.location.href = '/profile'
      })
      .catch((data) => setErrorMessage(data.error.message))
  };
  

  if(isLogin){
    return (
      <form action="POST" className={styles.authForm} onSubmit={handleSubmit(onLoginHanlder)}>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="userMail">Почта</label>
                <input {...register('userMail', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="userMail"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['userMail'] && <span>{errors['userMail'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="userTelephone">Номер телефона</label>
              <input {...register('userTelephone', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'},  minLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'}})} type="text" className={styles.authFormInput} name="userTelephone" placeholder='+79999999999'/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['userTelephone'] && <span>{errors['userTelephone'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="userPassword">Пароль</label>
              <input {...register('userPassword', {required: {value: true, message: 'Поле обязательно к заполнению'}, minLength: {value: 6, message: 'Пароль должен содержать минимум 6 символов'}})} type="password" className={styles.authFormInput} name="userPassword"/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['userPassword'] && <span>{errors['userPassword'].message}</span>}</div>
          </div>
          <button className={styles.sendFormButton}>Войти</button>
          {errorMessage && <ErrorMessage message={errorMessage}/>}
          <button className={styles.switchFormType} onClick={() => setIsLogin(false)}>Еще не зарегистрированы? Создайте аккаунт!</button>
      </form>
    );
  }else{
    return(
      <form action="POST" className={styles.authForm} onSubmit={handleSubmit(onRegisterHanlder)}>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="userFirstName">Имя</label>
                <input {...register('userFirstName', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 20, message: 'Имя должно содержать не более 20-ти символов'},  minLength: {value: 2, message: 'Имя должено содержать не менее 2-х символов'}})} type="text" className={styles.authFormInput} name="userFirstName"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['userFirstName'] && <span>{errors['userFirstName'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="userLastName">Фамилия</label>
                <input {...register('userLastName', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 20, message: 'Фамилия должена содержать не болеее 20-ти символов'},  minLength: {value: 2, message: 'Фамилия должна содержать не менее 2-х символов'}})} type="text" className={styles.authFormInput} name="userLastName"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['userLastName'] && <span>{errors['userLastName'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="userMail">Почта</label>
                <input {...register('userMail', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="userMail"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['userMail'] && <span>{errors['userMail'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="userTelephone">Номер телефона</label>
              <input {...register('userTelephone', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'},  minLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'}})} type="text" className={styles.authFormInput} name="userTelephone" placeholder='+79999999999'/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['userTelephone'] && <span>{errors['userTelephone'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="userPassword">Пароль</label>
              <input {...register('userPassword', {required: {value: true, message: 'Поле обязательно к заполнению'}, minLength: {value: 6, message: 'Пароль должен содержать минимум 6 символов'}})} type="password" className={styles.authFormInput} name="userPassword"/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['userPassword'] && <span>{errors['userPassword'].message}</span>}</div>
          </div>
          <button className={styles.sendFormButton}>Зарегистрироваться</button>
          {errorMessage && <ErrorMessage message={errorMessage}/>}
          <button className={styles.switchFormType} onClick={() => setIsLogin(true)}>Уже зарегистрированы? Войдите в аккаунт!</button>
      </form>
    );
  }
}

export default AuthComponent