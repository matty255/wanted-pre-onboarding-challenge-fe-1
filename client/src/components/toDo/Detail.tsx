import React, { useEffect } from "react";
import { toDoDetail } from "../../store/global";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { getToDoById } from "../../api/querys";
const Detail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [detail, setDetail] = useRecoilState(toDoDetail);

  const detailToDo = getToDoById();
  useEffect(() => {
    id !== undefined &&
      detailToDo.mutateAsync(id).then((response) => setDetail(response.data));
  }, [location]);
  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-xl ml-2">디테일페이지</h1>
        {!detail && <p>todo list 상세 확인</p>}
        {detail?.data && (
          <div className="w-full bg-white p-4 m-2">
            <p>{detail?.data.title}</p>
            <p>{detail?.data.content}</p>
            {/* <p>{data.createdAt?.toString()}</p>
            <p>{data.updatedAt?.toString()}</p> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
