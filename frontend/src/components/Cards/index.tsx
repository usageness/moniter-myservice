import { useContext, useEffect } from 'react';

import { ServerContext } from 'store/serverContext';

import styles from './index.scss';

function Cards() {
  const serverDataObject = useContext(ServerContext);

  useEffect(() => {
    if (!serverDataObject) return;

    const { serverData, setServerStatus } = serverDataObject;

    if (serverData.length > 0) return;

    fetch('http://host.teamcrazyperformance.com:7611/status/all')
      .then(response => response.json())
      .then(result => {
        setServerStatus(result.services);
      });
  }, []);

  if (!serverDataObject) {
    return <>잠시만 기다려주세요...</>;
  }

  const { serverData } = serverDataObject;

  return (
    <div className={styles.container}>
      {serverData.map(({ name, statusCode }) => (
        <div className={styles.cardContainer} key={name}>
          <h3>{name}</h3>
          <div className={styles.statusContainer}>
            <p>{statusCode === 200 ? '✅' : '⛔'}</p>
            <p>{statusCode}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
