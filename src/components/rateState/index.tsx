import Button from '../UI/button';
import Rating from './rating';
import star from '../../assets/images/icon-star.svg';
import './style.scss';

type Props = {
  setRateState: (val: boolean) => void;
  setVal: (val: number) => void;
  val: number;
};

const RateState = ({ setRateState, val, setVal }: Props) => {
  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setRateState(false);
  };

  const nums = [1, 2, 3, 4, 5];
  return (
    <form className="rate-state" onSubmit={handleFormSubmit}>
      <img src={star} alt="star" />
      <p className="rate-state__title">How did we do?</p>
      <p className="rate-state__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rate-state__rating">
        {nums.map((num) => (
          <Rating key={num} val={val} num={num} setVal={setVal} />
        ))}
      </div>
      <Button className="submit-button" text="Submit" />
    </form>
  );
};

export default RateState;
