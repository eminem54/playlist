import ImageCheckBoxAtom from '@/components/atoms/CheckBox/ImageCheckBoxAtom';
import React, { useState, useEffect } from 'react';
import styles from './VideoItem.module.scss';
import { useDrag } from 'react-dnd';
import { DragVideoItemType } from '@/const/type';
import useDragRecoil from '@/hooks-recoil/useCheckedVideoRecoil';
import { getEmptyImage } from 'react-dnd-html5-backend';
import ButtonAtom from '@/components/atoms/Button/ButtonAtom';

type Props = {
  id: string;
  resourceId: string;
  order: number;
  title: string;
};

const VideoItem = ({ id, resourceId, title, order }: Props) => {
  const { checkedVideoCart, setCheckedVideoCart, sortCartByOrder } = useDragRecoil();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [collected, dragRef, preview] = useDrag({
    type: DragVideoItemType.VIDEO,
    item: (item) => {
      if (!checkedVideoCart.find((item) => item.resourceId === resourceId)) {
        return;
      }
      // [ask] 병목 드래그 시작할 때마다 정렬 로직이 돌아가는데, 병목을 줄이고 싶습니다, heap queue 써야할까요? 정렬되었다는 상태를 하나 추가할까요?
      sortCartByOrder();
      return item;
    },
  });

  const handleClickVideo = () => {
    if (!isSelected) {
      setCheckedVideoCart([...checkedVideoCart, { id, resourceId, order, title }]);
    } else {
      setCheckedVideoCart(checkedVideoCart.filter((video) => video.resourceId !== resourceId));
    }
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <li className={styles.item} ref={dragRef}>
      <ImageCheckBoxAtom inputName="VideoCheckbox" id={id} checked={isSelected} handleChange={handleClickVideo} labelClass={styles.label}>
        <>
          <span className={styles.title}>{title}</span>
          <ButtonAtom className={styles.play_btn}>보기</ButtonAtom>
        </>
      </ImageCheckBoxAtom>
    </li>
  );
};

export default VideoItem;
