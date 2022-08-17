import React from "react";
import { AxiosError } from "axios";

interface LabelProps {
  content: Error | AxiosError;
}

const ModalContent = (content: LabelProps) => {
  const message = "오류가 발생했습니다.";
  const [errorMessage, setErrorMessage] = React.useState<any>();
  //   console.log(errorMessage);
  React.useEffect(() => {
    content.content instanceof AxiosError &&
      setErrorMessage(content.content?.response?.data);
  }, []);

  return <div>{errorMessage?.details || message}</div>;
};

export default ModalContent;
