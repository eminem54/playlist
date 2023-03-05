import React, { useEffect, useRef } from 'react';
import styles from './VideoListOrganism.module.scss';
import useVideoListRecoil from '@/hooks-recoil/useVideoListRecoil';
import IconButtonAtom from '@/components/atoms/Button/IconButtonAtom';
import VideoItem from './VideoItem';
import DragLayer from './DragLayer';

const VideoListOrganism = () => {
  const { videoList, isVideoListEmpty } = useVideoListRecoil();
  const containerRef = useRef(null);

  useEffect(() => {
    document.getElementById('zz')?.scrollTo(0, 0);
  }, [videoList]);

  if (isVideoListEmpty()) {
    return <strong>재생목록을 선택해 주세요.</strong>;
  }

  return (
    <>
      <DragLayer />
      <ul className={styles.wrap} ref={containerRef}>
        {videoList.map((videoToken) => (
          <React.Fragment key={videoToken.etag}>
            {videoToken.items?.map(({ id, snippet }) => (
              <VideoItem key={id} id={id} resourceId={snippet.resourceId.videoId} title={snippet.title} order={snippet.position} />
            ))}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default VideoListOrganism;
// const requestVideo = () => {
//   axios
//     .get('https://www.googleapis.com/youtube/v3/search', {
//       headers: {
//         Authorization: 'Bearer ' + accessToken,
//       },
//       params: {
//         part: 'id, snippet',
//         relatedToVideoId: 'UEx2OV8xM2RUeS1xeEJXa25pSm11S1VFRmZDLWYxZ0RsMi4yODlGNEE0NkRGMEEzMEQy',
//       },
//     })
//     .then((response) => {
//       console.log(response);
//     });
// };
