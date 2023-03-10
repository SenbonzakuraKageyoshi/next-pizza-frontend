import React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation/Navigation';
import logo from '/public/icons/logo.svg';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = React.memo(() => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.headerContent}>
                <Link href="/">
                  <Image src={logo} alt='fib pasta bar' width={80} height={60}/>
                </Link>
                <Navigation />
            </div>
        </div>
    </header>
  )
});

export default Header