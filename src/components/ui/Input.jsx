const Input = ({ label, placeholder, type, required = false, onChange,}) => {
  return (
    <div className="relative w-full">
      <label className="absolute text-[12px] top-0 left-5 font-semibold -translate-y-1/2 bg-base px-[4px] text-primary ">
        {label}
        {/* <span className="absolute top-0 left-0 text-red-600 text-[16px]"> */}
        {required && <span className="text-red-500">*</span>}
        {/* </span> */}
      </label>
      <input
        onChange={onChange}
        required={required}
        className="border border-neutral-400 rounded-md p-[8px] w-full"
        placeholder={placeholder}
        type={type}
      ></input>
    </div>
  );
};

export default Input;