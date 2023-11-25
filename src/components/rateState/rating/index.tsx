import './style.scss';

type Props = {
  num: number;
  val: number;
  setVal: (val: number) => void;
};

const Rating = ({ num, val, setVal }: Props) => {
  return (
    <button
      type="button"
      className={`${val === num ? 'active' : ''}`}
      onClick={() => setVal(num)}
    >
      {num}
    </button>
  );
};

export default Rating;
