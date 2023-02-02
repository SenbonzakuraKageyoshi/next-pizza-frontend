import Loader from '../src/components/Loader/Loader';
import ProfileInfoItem from '../src/components/ProfileInfoItem/ProfileInfoItem';
import ProfileActionButton from '../src/components/ProfileActionButton/ProfileActionButton';
import SectionTitle from '../src/components/SectionTitle/SectionTitle';
import AdressComponent from '../src/components/AdressComponent/AdressComponent';
import Modal from '../src/components/Modal/Modal';
import ErrorMessage from '../src/components/ErrorMessage/ErrorMessage';
import { useAppSelector } from '../src/redux/redux-hooks';
import { user, modal } from '../src/redux/selectors';
import { useEffect } from 'react';
import { checkAuth } from '../src/utils/checkAuth';
import { logout } from '../src/redux/userSlice/userSlice';
import { changeIsOpened } from '../src/redux/modalSlice/modal';
import styles from '../styles/profile.module.scss';

const profile = () => {

  const userData = useAppSelector(user);
  const modalState = useAppSelector(modal);

  useEffect(() => {
    checkAuth(userData)
  }, [userData.data])

  const userDataItems =
  [
    {id: 1, name: 'Имя', value: 'userFirstName'},
    {id: 2, name: 'Фамилия', value: 'userLastName'},
    {id: 3, name: 'Почта', value: 'userMail'},
    {id: 4, name: 'Телефон', value: 'userTelephone'},
  ] as const;

  const userAdressItems =
  [
    {id: 1, name: 'Город', value: 'userCity'},
    {id: 2, name: 'Адрес', value: 'userAdress'},
    {id: 3, name: '№ дома', value: 'userHouseNumber'},
    {id: 4, name: '№ квартиры', value: 'userApartmentNumber'},
  ] as const;

  return (
    <section className="sectionProfile">
      {
      userData.data && userData.status === 'fulfilled'
      ?
      <div className={styles.sectionProfileContent}>
        <div className={styles.sectionProfileItem}>
          <SectionTitle value='Личные данные'/>
            {userDataItems.map((el) => (
              userData.data 
              &&
              <ProfileInfoItem key={el.id} name={el.name} value={userData.data[`${el.value}`]}/>
            ))}
          <ProfileActionButton func={logout} text="Выйти"/>
        </div>
        <div className={styles.sectionProfileItem}>
          <SectionTitle value='Адрес доставки'/>
            {userAdressItems.map((el) => (
              userData.data 
              &&
              <ProfileInfoItem key={el.id} name={el.name} value={userData.data[`${el.value}`]}/>
            ))}
            <ProfileActionButton func={changeIsOpened} text="Изменить"/>
        </div>
      </div>
      :
      !userData.data && userData.status === 'pending'
      ?
      <Loader />
      :
      !userData.data && userData.status === 'rejected'
      ?
      <ErrorMessage message='Ошибка загрузки данных'/>
      :
      null
      }
      {
      modalState
      &&
      <Modal header='Адрес доставки'>
        <AdressComponent />
      </Modal>
      }
    </section>
  )
}

export default profile