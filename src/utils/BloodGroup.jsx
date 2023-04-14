import React from 'react';

function BloodGroup({ id, name, value, label, checked, onChange }) {
  return (
    <div className='flex justify-center items-center gap-2 shadow cursor-pointer transition duration-300 rounded-md p-4 flex-1 text-md font-hold text-primary hover:shadow-md hover:shadow-primary'>
      <input className='hidden' id={id} type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      <label htmlFor={id} className="flex gap-6 items-center cursor-pointer text-xl">
        <span className="w-4 h-4 hidden mr-2 rounded-full border border-primary flex-no-shrink "></span>
        {label}
      </label>
    </div>
  );
}

export default BloodGroup;