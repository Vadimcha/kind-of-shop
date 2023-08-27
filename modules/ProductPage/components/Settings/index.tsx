import React from 'react';
import { IProduct } from '@/models/IProduct';
import styles from './settings.module.scss';

const Settings = ({ product }: {product: IProduct}) => {
  return (
    <div className={styles.settings}>
      Some settings
    </div>
  );
};

export default Settings;