import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <main className={styles.content}>{children}</main>
      <nav className={styles.navBar}>
        <Link to="/" className={`${styles.navItem} ${location.pathname === '/' ? styles.active : ''}`}>
          <span>首页</span>
        </Link>
        <Link to="/courses" className={`${styles.navItem} ${location.pathname === '/courses' ? styles.active : ''}`}>
          <span>课程</span>
        </Link>
        <Link to="/profile" className={`${styles.navItem} ${location.pathname === '/profile' ? styles.active : ''}`}>
          <span>我的</span>
        </Link>
        <Link to="/settings" className={`${styles.navItem} ${location.pathname === '/settings' ? styles.active : ''}`}>
          <span>设置</span>
        </Link>
      </nav>
    </div>
  );
};

export default Layout; 