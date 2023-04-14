import React from 'react';

const InputField = ({type, label, value, onChange, placeholder, required }) => {
  return (
    <div className="input flex flex-1 flex-col p-2 shadow rounded-md">
      <label className="text-primary">
        {label} {required && <sup className="text-red-600">*</sup>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent outline-none text-[#478298] placeholder:text-thin py-1"
        required={required}
      />
    </div>
  );
};

export default InputField;