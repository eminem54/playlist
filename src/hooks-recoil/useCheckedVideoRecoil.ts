import { atom, useRecoilState } from 'recoil';

type CheckedVideoProps = {
  resourceId: string;
  id: string;
  order: number;
  title: string;
};

const dragItemAtom = atom({
  key: 'dragcart',
  default: new Array<CheckedVideoProps>(),
});

const useCheckedVideoRecoil = () => {
  const [checkedVideoCart, setCheckedVideoCart] = useRecoilState<CheckedVideoProps[]>(dragItemAtom);

  const initialCheckedCart = () => {
    setCheckedVideoCart([]);
  };

  const sortCartByOrder = () => {
    const newArray = [...checkedVideoCart].sort((a, b) => {
      return a.order - b.order;
    });

    setCheckedVideoCart(newArray);
  };

  return { checkedVideoCart, setCheckedVideoCart, initialCheckedCart, sortCartByOrder };
};

export default useCheckedVideoRecoil;
