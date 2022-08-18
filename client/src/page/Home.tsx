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
import { useMediaQuery } from "../hooks/useMediaQuery";
import List from "../components/toDo/List";
import CreateToDoForm from "../components/toDo/CreateToDoForm";
import DetailPage from "../components/toDo/DetailPage";

const Home = () => {
  const { data } = useGetToDos();
  const [close, setClose] = React.useState(false);
  const [openCreateToDo, setOpenCreateToDo] = React.useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

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
                <button
                  type="button"
                  className="absolute bottom-1 left-2 md:hidden hover:text-gray-600 text-white font-bold border rounded-md px-2"
                  onClick={() => setOpenCreateToDo((state) => !state)}
                >
                  {openCreateToDo ? "make to Do" : "detail to Do"}
                </button>
                <div className="flex flex-row w-full">
                  {matches && (
                    <>
                      <CreateToDoForm />
                      <DetailPage />
                    </>
                  )}
                  {!matches && !openCreateToDo && <DetailPage />}
                  {!matches && openCreateToDo && <CreateToDoForm />}
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
      </Layout>
    </>
  );
};

export default Home;
