import { atom, useRecoilState } from 'recoil';

type DragItemProps = {
  id: string;
  order: number;
  title: string;
};

const dragItemAtom = atom({
  key: 'dragcart',
  default: new Array<DragItemProps>(),
});

const useDragRecoil = () => {
  const [dragItemCart, setDragItemCart] = useRecoilState<DragItemProps[]>(dragItemAtom);

  return { dragItemCart, setDragItemCart };
};

export default useDragRecoil;
