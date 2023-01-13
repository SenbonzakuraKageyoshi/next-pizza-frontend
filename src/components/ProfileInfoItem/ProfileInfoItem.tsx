import styles from './profileInfoItem.module.scss'

interface IProfileInfoItem {
    name: string,
    value: string
};

const ProfileInfoItem = ({ name, value }: IProfileInfoItem) => {
  return (
    <div className={styles.profileInfoItem}>
        <span className={styles.profileInfoItemName}>{name}</span>
        <div className={styles.profileInfoItemValue}>{value}</div>
    </div>
  );
};

export default ProfileInfoItem;