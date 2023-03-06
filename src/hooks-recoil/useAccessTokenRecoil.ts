import { atom } from 'recoil';
import { useRecoilState } from 'recoil';

const accessTokenAtom = atom({
  key: 'accessToken',
  default: '',
});

const useAccessTokenRecoil = () => {
  const [accessToken, setAccessToken] = useRecoilState<string>(accessTokenAtom);

  const isEmptyToken = () => {
    return !accessToken;
  };

  return {
    accessToken,
    setAccessToken,
    isEmptyToken,
  };
};

export default useAccessTokenRecoil;
