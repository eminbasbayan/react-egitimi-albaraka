const ProductInput = ({ title, handleChange, type, placeholder, name, value }) => {
  return (
    <label>
      <b>{title}</b>
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </label>
  );
};

export default ProductInput;
