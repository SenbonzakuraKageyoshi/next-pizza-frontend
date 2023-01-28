import styles from './modal.module.scss';
import closeModal  from '../../../public/icons/close-modal.svg';
import Image from 'next/image';
import { useAppDispatch } from '../../redux/redux-hooks';
import { changeIsOpened } from '../../redux/modalSlice/modal';

interface IModalProps {
    children: React.ReactNode
    header: string,
};

const Modal = ({ children, header }: IModalProps) => {

  const dispatch = useAppDispatch();

  return (
    <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
            <header className={styles.modalHeader}>
                <span>{ header }</span>
                <button>
                  <Image src={closeModal} alt="close" width={40} height={40} onClick={() => dispatch(changeIsOpened())}/>
                </button>
            </header>
            { children }
        </div>
    </div>
  )
}

export default Modal