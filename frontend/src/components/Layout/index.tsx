import React from 'react';

import Header from 'components/Header';

import styles from './index.scss';

interface PageProps {
  children: React.ReactNode;
}

function Layout({ children }: PageProps) {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Layout;
