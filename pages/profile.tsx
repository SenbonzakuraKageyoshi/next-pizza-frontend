import { useAppSelector } from '../src/redux/redux-hooks';
import { user } from '../src/redux/selectors';
import { useEffect } from 'react';
import Loader from '../src/components/Loader/Loader';
import ProfileInfoItem from '../src/components/ProfileInfoItem/ProfileInfoItem';
import LogoutButton from '../src/components/LogoutButton/LogoutButton';
import SectionTitle from '../src/components/SectionTitle/SectionTitle';
import { checkAuth } from '../src/utils/checkAuth';

const profile = () => {

  const userData = useAppSelector(user);

  useEffect(() => {
    checkAuth(userData)
  }, [userData.data])

  return (
    <section className="sectionProfile">
      <SectionTitle value='Личные данные'/>
      {
      userData.data && userData.status === 'fulfilled'
      ?
      <>
      <ProfileInfoItem name='Имя' value={userData.data.userFirstName}/>
      <ProfileInfoItem name='Фамилия' value={userData.data.userLastName}/>
      <ProfileInfoItem name='Почта' value={userData.data.userMail}/>
      <ProfileInfoItem name='Телефон' value={userData.data.userTelephone}/>
      <LogoutButton />
      </>
      :
      <Loader />
      }
    </section>
  )
}

export default profile