import './style.scss';

type Props = {
  text: string;
  className: string;
};

const Button = ({ text, className }: Props) => {
  return <button className={`${className} btn`}>{text}</button>;
};

export default Button;
