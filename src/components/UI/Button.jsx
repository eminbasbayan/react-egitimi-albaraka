import './Button.css';

export default function Button({ type = 'primary', size = 'md', children }) {
  return <button className={`btn btn-${type} btn-${size}`}>{children}</button>;
}
