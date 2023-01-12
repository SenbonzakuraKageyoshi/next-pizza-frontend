import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './authComponent.module.scss';

type AuthFormValues = {
  firstName: string,
  lastName: string,
  mail: string,
  telephone: string,
  password: string
};


const AuthComponent = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const { register, formState: { errors }, handleSubmit } = useForm<AuthFormValues>({ mode: 'onTouched' });


  const onLoginHanlder = () => {

  };
  

  if(isLogin){
    return (
      <form action="POST" className={styles.authForm} onSubmit={handleSubmit(onLoginHanlder)}>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="mail">Почта</label>
                <input {...register('mail', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="mail"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['mail'] && <span>{errors['mail'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="telephone">Номер телефона</label>
              <input {...register('telephone', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'},  minLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'}})} type="text" className={styles.authFormInput} name="telephone" placeholder='+79999999999'/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['telephone'] && <span>{errors['telephone'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="password">Пароль</label>
              <input {...register('password', {required: {value: true, message: 'Поле обязательно к заполнению'}, minLength: {value: 6, message: 'Пароль должен содержать минимум 6 символов'}})} type="password" className={styles.authFormInput} name="password"/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['password'] && <span>{errors['password'].message}</span>}</div>
          </div>
          <button className={styles.sendFormButton}>Войти</button>
          <button className={styles.switchFormType} onClick={() => setIsLogin(false)}>Еще не зарегистрированы? Создайте аккаунт!</button>
      </form>
    );
  }else{
    return(
      <form action="POST" className={styles.authForm}>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="firstName">Имя</label>
                <input {...register('firstName', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 20, message: 'Имя должно содержать не более 20-ти символов'},  minLength: {value: 2, message: 'Имя должено содержать не менее 2-х символов'}})} type="text" className={styles.authFormInput} name="firstName"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['firstName'] && <span>{errors['firstName'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="lastName">Фамилия</label>
                <input {...register('lastName', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 20, message: 'Фамилия должена содержать не болеее 20-ти символов'},  minLength: {value: 2, message: 'Фамилия должна содержать не менее 2-х символов'}})} type="text" className={styles.authFormInput} name="lastName"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['lastName'] && <span>{errors['lastName'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
              <div>
                <label htmlFor="mail">Почта</label>
                <input {...register('mail', {required: {value: true, message: 'Поле обязательно к заполнению'}})} type="text" className={styles.authFormInput} name="mail"/>
              </div>
              <div className={styles.authFormInputErrorMessage}>{errors['mail'] && <span>{errors['mail'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="telephone">Номер телефона</label>
              <input {...register('telephone', {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'},  minLength: {value: 12, message: 'Номер должен содержать 12 символов, включая "+"'}})} type="text" className={styles.authFormInput} name="telephone" placeholder='+79999999999'/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['telephone'] && <span>{errors['telephone'].message}</span>}</div>
          </div>
          <div className={styles.authFormItem}>
            <div>
              <label htmlFor="password">Пароль</label>
              <input {...register('password', {required: {value: true, message: 'Поле обязательно к заполнению'}, minLength: {value: 6, message: 'Пароль должен содержать минимум 6 символов'}})} type="password" className={styles.authFormInput} name="password"/>
            </div>
            <div className={styles.authFormInputErrorMessage}>{errors['password'] && <span>{errors['password'].message}</span>}</div>
          </div>
          <button className={styles.sendFormButton}>Зарегистрироваться</button>
          <button className={styles.switchFormType} onClick={() => setIsLogin(true)}>Уже зарегистрированы? Войдите в аккаунт!</button>
      </form>
    );
  }
}

export default AuthComponent