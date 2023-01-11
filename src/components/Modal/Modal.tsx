import styles from './modal.module.scss';
import closeModal  from '../../../public/icons/close-modal.svg';
import Image from 'next/image';

interface IModalProps {
    children: React.ReactNode
}

const Modal = ({ children }: IModalProps) => {
  return (
    <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
            <header className={styles.modalHeader}>
                <span>Вход на сайт</span>
                <Image src={closeModal} alt="close" width={40} height={40}/>
            </header>
            {children}
        </div>
    </div>
  )
}

export default Modal