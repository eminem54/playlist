import { atom, useRecoilState } from 'recoil';
import { VideoListPartProps } from '@/const/type';

const videoListAtom = atom<Array<VideoListPartProps>>({
  key: 'videolist',
  default: new Array<VideoListPartProps>(),
});

const useVideoListRecoil = () => {
  const [videoList, setVideoList] = useRecoilState(videoListAtom);

  const isVideoListEmpty = () => {
    return videoList.length === 0;
  };

  return { videoList, setVideoList, isVideoListEmpty };
};

export default useVideoListRecoil;
