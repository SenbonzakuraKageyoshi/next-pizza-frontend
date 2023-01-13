import styles from '../styles/profile.module.scss';
import { useAppSelector } from '../src/redux/redux-hooks';
import { user } from '../src/redux/selectors';
import { useEffect } from 'react';
import Loader from '../src/components/Loader/Loader';
import ProfileInfoItem from '../src/components/ProfileInfoItem/ProfileInfoItem';

const profile = () => {

  const userData = useAppSelector(user);

  useEffect(() => {
    if(!userData.data && userData.status === 'rejected'){
        window.location.href = '/'
    }
  }, [userData.data])

  return (
    <section className="sectionProfile">
      <h1 className={styles.profileTitle}>Личные данные</h1>
      {
      userData.data && userData.status === 'fulfilled'
      ?
      <>
      <ProfileInfoItem name='Имя' value={userData.data.userFirstName}/>
      <ProfileInfoItem name='Фамилия' value={userData.data.userLastName}/>
      <ProfileInfoItem name='Почта' value={userData.data.userMail}/>
      <ProfileInfoItem name='Телефон' value={userData.data.userTelephone}/>
      </>
      :
      <Loader />
      }
    </section>
  )
}

export default profile