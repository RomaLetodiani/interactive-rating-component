import './style.scss';
import thank from '../../assets/images/illustration-thank-you.svg';
type Props = {
  val: number;
};
const ThankState = ({ val }: Props) => {
  return (
    <div className="thank-state">
      <img src={thank} alt="thanks" />
      <h5>You selected {val} out of 5</h5>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankState;
