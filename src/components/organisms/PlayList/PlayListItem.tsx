import React, { useState } from 'react';
import styles from './PlayListItem.module.scss';
import ButtonAtom from '@/components/atoms/Button/ButtonAtom';
import useAccessTokenRecoil from '@/hooks-recoil/useAccessTokenRecoil';
import useVideoListRecoil from '@/hooks-recoil/useVideoListRecoil';
import axios from 'axios';
import clsx from 'clsx';
import { useDrop } from 'react-dnd';
import { DragVideoItemType } from '@/const/type';

type Props = {
  id: string;
  title: string;
  isSelected: boolean;
  setSelectedListId: React.Dispatch<React.SetStateAction<string>>;
};

const PlayListItem = ({ id, title, isSelected, setSelectedListId }: Props) => {
  const { accessToken } = useAccessTokenRecoil();
  const { setVideoList } = useVideoListRecoil();

  const [{ isOver, canDrop }, drag] = useDrop({
    accept: DragVideoItemType.VIDEO,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const handleClickListButton = (id: string) => {
    axios
      .get('https://www.googleapis.com/youtube/v3/playlistItems', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
        params: {
          maxResults: 50,
          playlistId: id,
          part: 'id, snippet',
        },
      })
      .then((response) => {
        setVideoList([response.data]);
        console.log(response, 'playList handler');
      });
  };

  const handleClickBtn = () => {
    if (!isSelected) {
      handleClickListButton(id);
    }
    setSelectedListId(id);
  };

  return (
    <li ref={drag}>
      <ButtonAtom className={clsx(styles.btn, { [styles.pressed]: isSelected, [styles.drop_over]: isOver })} onClick={handleClickBtn}>
        {title}
      </ButtonAtom>
    </li>
  );
};

export default PlayListItem;
