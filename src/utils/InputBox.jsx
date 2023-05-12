const InputBox = ({
  type,
  label,
  name,
  value,
  setValue,
  defaultValue,
  readOnly,
  required,
  className,
  maxValue
}) => {
  return (
    <div className={`flex flex-col w-full my-2`}>
      <label htmlFor={name} className=' capitalize px-1 tracking-wide'>{label}</label>
      <input
        className={`outline-none w-full  px-4 py-3 rounded-lg`}
        type={type}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={setValue}
        readOnly={readOnly}
        maxLength={maxValue}
        required={required}
      />
    </div>
  );
};

export default InputBox;
