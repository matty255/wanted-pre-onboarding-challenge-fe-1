import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import Layout from "../components/layout/Layout";
import { useGetToDos } from "../api/querys";
import * as el from "../common";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { useThrottle } from "../hooks/useThrottle";
import { ReactComponent as Arrow } from "../static/image/arrow.svg";
import { ErrorBoundary } from "react-error-boundary";
import { useModal } from "../hooks/useModal";
import { Modal } from "../common/Modal";

const List = React.lazy(() => import("../components/toDo/List"));
const CreateToDoForm = React.lazy(
  () => import("../components/toDo/CreateToDoForm")
);
const DetailPage = React.lazy(() => import("../components/toDo/DetailPage"));

const Home = () => {
  const { data } = useGetToDos();
  const [close, setClose] = React.useState(false);

  const handleTopSideBar = () => {
    if (window.scrollY < 120) {
      return setClose(false);
    }
  };
  const Throttle = useThrottle(handleTopSideBar, 700);

  React.useEffect(() => {
    window.addEventListener("scroll", handleTopSideBar);
    return () => {
      window.removeEventListener("scroll", Throttle);
    };
  }, []);

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
                <el.HiddenBox close={close}>
                  <div className="flex flex-row w-full">
                    <CreateToDoForm />
                    <DetailPage />
                  </div>

                  <button
                    className="mt-5 -mb-10 flex justify-center items-center mx-auto w-8 hover:fill-yellow-300 active:fill-yellow-500 active:scale-110"
                    onClick={() =>
                      window.scrollY > 120 && setClose((state) => !state)
                    }
                  >
                    <Arrow />
                  </button>
                </el.HiddenBox>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </React.Suspense>
        <React.Suspense fallback={<el.Spinner />}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary }) => (
                  <el.Spinner onClick={() => resetErrorBoundary()} />
                )}
              >
                <div className="flex p-10">
                  {data?.data && <List {...data} />}
                </div>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </React.Suspense>
      </Layout>
    </>
  );
};

export default Home;
