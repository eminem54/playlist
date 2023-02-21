import ImageCheckBoxAtom from '@/components/atoms/CheckBox/ImageCheckBoxAtom';
import React, { useState, useEffect } from 'react';
import styles from './VideoItem.module.scss';
import { useDrag } from 'react-dnd';
import { DragVideoItemType } from '@/const/type';
import useDragRecoil from '@/hooks-recoil/useDragRecoil';
import { getEmptyImage } from 'react-dnd-html5-backend';
import ButtonAtom from '@/components/atoms/Button/ButtonAtom';

type Props = {
  id: string;
  order: number;
  title: string;
};

const VideoItem = ({ id, title, order }: Props) => {
  const { dragItemCart, setDragItemCart } = useDragRecoil();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [collected, dragRef, preview] = useDrag({
    type: DragVideoItemType.VIDEO,
    end: (item, monitor) => {
      setDragItemCart([]);
    },
  });

  const handleClickVideo = () => {
    if (!isSelected) {
      setDragItemCart([...dragItemCart, { id, order, title }]);
    } else {
      setDragItemCart(dragItemCart.filter((video) => video.id !== id));
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
