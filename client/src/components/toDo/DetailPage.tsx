import React, { useEffect } from "react";
import { toDoDetail } from "../../store/global";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { getToDoById } from "../../api/querys";
import * as el from "../../common";
import { formatDistanceToNow } from "date-fns";

const Detail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [detail, setDetail] = useRecoilState(toDoDetail);
  const { mutateAsync, isLoading, isError, error } = getToDoById();

  useEffect(() => {
    id !== undefined &&
      mutateAsync(id).then((response) => setDetail(response.data));
  }, [location]);

  return (
    <>
      <div className="w-1/2">
        <el.Text className="ml-3">What To Do!</el.Text>
        {!detail && (
          <div className="w-full bg-white p-4 m-2">todo list 상세 확인</div>
        )}
        {detail?.data && (
          <div className="w-full bg-white p-4 m-2">
            <el.Text variant="title">{detail?.data.title}</el.Text>
            <el.Text variant="text">{detail?.data.content}</el.Text>
            <p>
              {formatDistanceToNow(new Date(detail?.data.createdAt), {
                addSuffix: true,
                includeSeconds: true,
              })}
            </p>

            <p>
              {formatDistanceToNow(new Date(detail?.data.updatedAt), {
                addSuffix: true,
                includeSeconds: true,
              })}
            </p>
          </div>
        )}
      </div>
      {isLoading && <el.Spinner />}
    </>
  );
};

export default Detail;
