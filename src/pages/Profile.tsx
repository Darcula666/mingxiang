import React from 'react';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.avatar}></div>
        <div className={styles.profileInfo}>
          <h2>用户名</h2>
          <p>冥想爱好者</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.number}>7</div>
          <div className={styles.label}>连续天数</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.number}>12</div>
          <div className={styles.label}>总时长(小时)</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.number}>24</div>
          <div className={styles.label}>完成课程</div>
        </div>
      </div>

      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <span>我的收藏</span>
          <span className={styles.arrow}>></span>
        </div>
        <div className={styles.menuItem}>
          <span>练习记录</span>
          <span className={styles.arrow}>></span>
        </div>
        <div className={styles.menuItem}>
          <span>成就徽章</span>
          <span className={styles.arrow}>></span>
        </div>
      </div>
    </div>
  );
};

export default Profile; 