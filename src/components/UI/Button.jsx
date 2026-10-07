import './Button.css';

export default function Button({
  type = 'primary',
  size = 'md',
  children,
  onClick,
}) {
  return (
    <button className={`btn btn-${type} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
}
