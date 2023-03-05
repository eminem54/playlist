import React from 'react';
import useDragRecoil from '@/hooks-recoil/useCheckedVideoRecoil';
import styles from './DragLayoutTemplate.module.scss';
import ImgAtom from '@/components/atoms/Img/ImgAtom';

const DragLayoutTemplate = () => {
  const { checkedVideoCart } = useDragRecoil();
  return (
    <div className={styles.wrap}>
      {checkedVideoCart.map(({ id, title }) => (
        <div key={`draglayer-${id}`} className={styles.btn}>
          <ImgAtom src="/images/common/icon_checkbox_on.svg" width={20} height={20} className={styles.icon} />
          {title}
        </div>
      ))}
    </div>
  );
};

export default DragLayoutTemplate;
