'use client';

import React, { useEffect } from 'react';
import styles from './HomeTemplate.module.scss';
import axios from 'axios';
import NavBarOrganism from '@/components/organisms/NavBar/NavBarOrganism';
import useAccessTokenRecoil from '@/hooks-recoil/useAccessTokenRecoil';
import usePlayListRecoil from '@/hooks-recoil/usePlayListRecoil';
import PlayListOrganism from '@/components/organisms/PlayList/PlayListOrganism';
import VideoListOrganism from '@/components/organisms/VideoList/VideoListOrganism';

const HomeTemplate = () => {
  const { isEmptyToken, accessToken } = useAccessTokenRecoil();
  const { playList, setPlayList, isPlayListsEmpty } = usePlayListRecoil();

  useEffect(() => {
    console.log(playList, 'home');
    if (!isEmptyToken() && playList.length === 0) {
      axios
        .get('https://www.googleapis.com/youtube/v3/playlists', {
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
          params: {
            mine: true,
            maxResults: 50,
            part: 'snippet',
          },
        })
        .then((response) => {
          // [ask]: response.data.item 안에 key값이 PlayListProps로 지정한 key값 보다 많아요. 괜찮은가요?
          // 안 쓸것 같은 데이터는 빼고 set 해주는게 맞을까요?
          setPlayList(response.data.items);
          console.log(playList, 'home useEffect');
        });
    }
  }, [isEmptyToken, accessToken, playList, setPlayList]);

  return (
    <div className={styles.wrap}>
      <NavBarOrganism />
      {!isEmptyToken() && !isPlayListsEmpty() && <PlayListOrganism />}
      <VideoListOrganism />
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Wxxqvg0QsAg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};

export default HomeTemplate;
