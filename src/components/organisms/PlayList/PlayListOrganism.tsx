import React, { useState } from 'react';
import styles from './PlayListOrganism.module.scss';
import usePlayListRecoil from '@/hooks-recoil/usePlayListRecoil';
import PlayListItem from './PlayListItem';

const PlayListOrganism = () => {
  const { playList } = usePlayListRecoil();

  const [selectedListId, setSelectedListId] = useState<string>('');
  return (
    <ul className={styles.wrap}>
      {playList.map((listItem) => (
        <PlayListItem
          key={listItem.id}
          id={listItem.id}
          title={listItem.snippet.title}
          isSelected={listItem.id === selectedListId}
          setSelectedListId={setSelectedListId}
        />
      ))}
    </ul>
  );
};

export default PlayListOrganism;
