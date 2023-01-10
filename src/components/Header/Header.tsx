import styles from './header.module.scss';
import Image from 'next/image';
import Navigation from '../Navigation/Navigation';
import logo from '/public/icons/logo.svg';

interface IHeaderProps {}

const Header = ({  }: IHeaderProps) => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.headerContent}>
                <Image src={logo} alt='fib pasta bar' width={80} height={60}/>
                <Navigation />
            </div>
        </div>
    </header>
  )
}

export default Header