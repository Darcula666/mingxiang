import React from 'react';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.settingsList}>
        <div className={styles.settingsItem}>
          <span>通知设置</span>
          <span className={styles.arrow}>></span>
        </div>
        <div className={styles.settingsItem}>
          <span>背景音乐</span>
          <span className={styles.arrow}>></span>
        </div>
        <div className={styles.settingsItem}>
          <span>隐私设置</span>
          <span className={styles.arrow}>></span>
        </div>
        <div className={styles.settingsItem}>
          <span>关于我们</span>
          <span className={styles.arrow}>></span>
        </div>
      </div>
    </div>
  );
};

export default Settings; 