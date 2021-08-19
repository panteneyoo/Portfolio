import React from 'react'
import Head from 'next/head';
import globalStyles from '../../styles/styles.module.scss';
import styles from './pageheader.module.scss';

export const PageHeader = ({ pageTitle, title, subtitleOne, subtitleTwo }) => {
  return (
    <div className={styles.pageHeaderWrapper}>
      <Head>
        <title>{ pageTitle }</title>
      </Head>
      <div className={styles.animate__fadeIn}>
        <h1 className={`${globalStyles.headerStyle} ${styles.title}`}>
          { title }
        </h1>
        </div>
      { subtitleOne && (
        <div className={styles.animate__fadeInLeft}>
          <h3 className={`${globalStyles.subtitleStyle} `}>{ subtitleOne }</h3>
        </div>
      )}
      { subtitleTwo && (
        <div className={styles.animate__delay}>
          <h3 className={`${globalStyles.subtitleStyle} ${styles.secondSubtitle}`}>{ subtitleTwo }</h3>
        </div>
      )}
    </div>
  )
}

export default PageHeader;