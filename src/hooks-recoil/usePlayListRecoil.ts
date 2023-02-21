import { atom, useRecoilState } from 'recoil';
import { PlayListProps } from '@/const/type';

const playListsAtom = atom<Array<PlayListProps>>({
  key: 'playlist',
  default: new Array<PlayListProps>(),
});

const usePlayListRecoil = () => {
  const [playList, setPlayList] = useRecoilState<Array<PlayListProps>>(playListsAtom);

  const isPlayListsEmpty = () => {
    return playList.length === 0;
  };

  return {
    playList,
    setPlayList,
    isPlayListsEmpty,
  };
};

export default usePlayListRecoil;
