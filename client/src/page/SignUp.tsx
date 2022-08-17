import React from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/signUp/Form";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import * as el from "../common";
import { useModal } from "../hooks/useModal";
import { Modal } from "../common/Modal";
import { AxiosError } from "axios";
const SignUp = () => {
  const { isShown, toggle } = useModal();
  React.useEffect(() => {
    toggle();
  }, [QueryErrorResetBoundary]);
  return (
    <>
      <Layout>
        <React.Suspense fallback={<el.Spinner />}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ error, resetErrorBoundary }) => (
                  <Modal
                    isShown={isShown}
                    hide={toggle}
                    modalContent={<el.ModalContent content={error} />}
                    contentText={"확인"}
                    callback={() => resetErrorBoundary()}
                  />
                )}
              >
                <Form />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </React.Suspense>
      </Layout>
    </>
  );
};

export default SignUp;
