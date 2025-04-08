import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.welcomeSection}>
        <h1>早安，开始你的冥想之旅</h1>
        <p>今天是你坚持冥想的第7天</p>
      </div>

      <div className={styles.meditationCard}>
        <h3>今日推荐：呼吸练习</h3>
        <p>5分钟的基础呼吸练习，帮助你平静心情</p>
        <button className={styles.playButton}>开始冥想</button>
      </div>

      <div className={styles.meditationCard}>
        <h3>最近练习</h3>
        <p>继续你上次的冥想课程</p>
        <button className={styles.playButton}>继续练习</button>
      </div>
    </div>
  );
};

export default Home; 