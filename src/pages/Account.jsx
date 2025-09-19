import  Card  from "../components/ui/Card";

export const Account = () => {
  return (
    <div className=" flex flex-col gap-[18px] text-neutral-600">
      <div className="tracking-tight font-semibold text-[20px] px-[18px] py-[24px] shadow bg-white">
        Account Settings
      </div>

      <Card
        img="https://cdn.iconscout.com/icon/free/png-256/free-react-icon-svg-download-png-282599.png"
        name="Sachin Patel"
        email="abc@gmail.com"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};
