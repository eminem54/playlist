import React, { useState } from 'react';
import styles from './PlayListItem.module.scss';
import ButtonAtom from '@/components/atoms/Button/ButtonAtom';
import useAccessTokenRecoil from '@/hooks-recoil/useAccessTokenRecoil';
import useVideoListRecoil from '@/hooks-recoil/useVideoListRecoil';
import clsx from 'clsx';
import { useDrop } from 'react-dnd';
import { DragVideoItemType } from '@/const/type';
import useDragRecoil from '@/hooks-recoil/useCheckedVideoRecoil';
import { requestPlayListItems, insertVideoToPlaylist, deletePlaylistVideo } from '@/api/youtube';

type Props = {
  id: string;
  title: string;
  isSelected: boolean;
  setSelectedListId: React.Dispatch<React.SetStateAction<string>>;
};

const PlayListItem = ({ id, title, isSelected, setSelectedListId }: Props) => {
  const { accessToken } = useAccessTokenRecoil();
  const { videoList, setVideoList } = useVideoListRecoil();
  const { checkedVideoCart, initialCheckedCart } = useDragRecoil();

  const [{ isOver }, drag] = useDrop({
    accept: DragVideoItemType.VIDEO,
    drop: async (item, monitor) => {
      const deletedIdArray: String[] = [];

      for (const dropItem of checkedVideoCart) {
        await insertVideoToPlaylist(id, dropItem.resourceId, accessToken);
        const response = await deletePlaylistVideo(dropItem.id, accessToken);
        if (response.status === 204) {
          deletedIdArray.push(dropItem.id);
        }
      }

      const newVideoList = videoList.map((list) => {
        const newItems = list.items.filter(({ id }) => !deletedIdArray.includes(id));
        return { ...list, items: newItems };
      });
      setVideoList(newVideoList);
      initialCheckedCart();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleClickBtn = async () => {
    if (!isSelected) {
      const responseItems = await requestPlayListItems(id, accessToken);
      console.log(responseItems, 100);
      setVideoList([responseItems]);
      setSelectedListId(id);
      initialCheckedCart();
    }
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
