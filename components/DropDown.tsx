import React from 'react';

const Dropdown = () => {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option>Primary</option>
        <option>Secondary</option>
        <option>---</option>
      </select>
    </div>
  );
};
export default Dropdown;
