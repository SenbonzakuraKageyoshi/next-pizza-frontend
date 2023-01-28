import styles from './profileActionButton.module.scss';
import { useAppDispatch } from '../../redux/redux-hooks';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

interface IProfileActionButton {
  func: ActionCreatorWithoutPayload,
  text: string
}

const ProfileActionButton = ({ func, text }: IProfileActionButton) => {

    const dispatch = useAppDispatch();

  return (
    <button className={styles.profileActionButton} onClick={() => dispatch(func())}>
        {text}
    </button>
  )
}

export default ProfileActionButton