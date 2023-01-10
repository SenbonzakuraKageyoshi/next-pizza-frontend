import styles from './layout.module.scss';
import Header from '../Header/Header';

interface ILayoutProps {
    children: React.ReactNode
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
        <Header />
        <div className="container">
            { children }
        </div>
    </>
  );
};

export default Layout;