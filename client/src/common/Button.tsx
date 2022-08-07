import React from "react";

type ButtonType = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonType) => {
  const init = ` w-32 h-12 
    rounded-md shadow-md font-[1.25rem] text-white font-karla font-semibold
    `;

  const { children, className, onClick, disabled, type } = props;
  const [classNameList, setClassNameList] = React.useState(init);

  React.useEffect(() => {
    if (className) {
      setClassNameList(classNameList.concat(` ${className}`));
    }
  }, []);

  return (
    <button
      className={classNameList}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
