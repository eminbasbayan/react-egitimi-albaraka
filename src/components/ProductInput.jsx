const ProductInput = ({ title, handleChange, type, placeholder }) => {
  return (
    <label>
      <b>{title}</b>
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
};

export default ProductInput;
