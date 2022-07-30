import React from "react";

type ButtonType = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = (props: ButtonType) => {
  const init = `bg-engall-blue w-[13.75rem] h-[3.125rem] 
    rounded-md shadow-md font-[1.25rem] text-white font-karla font-semibold
    disabled:bg-gray-200`;

  const { children, className, onClick, disabled } = props;
  const [classNameList, setClassNameList] = React.useState(init);

  React.useEffect(() => {
    if (className) {
      setClassNameList(classNameList.concat(` ${className}`));
    }
  }, []);

  return (
    <button className={classNameList} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
