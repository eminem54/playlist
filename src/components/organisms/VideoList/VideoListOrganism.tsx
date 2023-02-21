import React from 'react';
import styles from './VideoListOrganism.module.scss';
import useVideoListRecoil from '@/hooks-recoil/useVideoListRecoil';
import IconButtonAtom from '@/components/atoms/Button/IconButtonAtom';
import VideoItem from './VideoItem';
import DragLayer from './DragLayer';

const VideoListOrganism = () => {
  const { videoList, isVideoListEmpty } = useVideoListRecoil();

  if (isVideoListEmpty()) {
    return (
      <strong>
        재생목록을 선택해 주세요.
        <IconButtonAtom src="/images/common/icon_checkbox_on.svg">hello</IconButtonAtom>
      </strong>
    );
  }

  return (
    <>
      <DragLayer />
      <ul className={styles.wrap}>
        {videoList.map((videoToken) => (
          <React.Fragment key={videoToken.etag}>
            {videoToken.items?.map((video) => (
              <>
                <VideoItem key={video.id} id={video.id} title={video.snippet.title} order={video.snippet.position} />
              </>
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
