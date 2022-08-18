import React from "react";
import { AxiosError } from "axios";

interface LabelProps {
  content?: any;
  confirm?: boolean;
}

const ModalContent = (content: LabelProps, confirm: boolean) => {
  const message = confirm
    ? "회원가입에 성공했습니다. 자동으로 로그인합니다."
    : "오류가 발생했습니다.";
  const [errorMessage, setErrorMessage] = React.useState<any>();

  React.useEffect(() => {
    content.content instanceof AxiosError &&
      setErrorMessage(content.content?.response?.data);
  }, []);

  return (
    <div className="h-32 flex justify-center items-center">
      {errorMessage?.details || message}
    </div>
  );
};

export default ModalContent;
