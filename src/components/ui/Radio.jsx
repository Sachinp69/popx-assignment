const Radio = ({values, name, label,}) => {
  return (
    <div className="text-[14px] flex flex-col gap-[8px] ">
      <p className=" font-medium">{label}</p>
      <div className="flex gap-[12px]">
        {" "}
        {values.map((val) => {
          return (
            <label className="flex gap-[4px]">
              <input type="radio" name={name} value={val.toLowerCase()} />
              {val}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
