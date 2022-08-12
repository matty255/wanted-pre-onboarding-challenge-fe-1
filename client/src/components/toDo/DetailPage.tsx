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
      <div className="flex flex-col fixed top-[30%]">
        <h1 className="text-xl ml-2">디테일페이지</h1>
        {!detail && (
          <div className="w-full bg-white p-4 m-2">todo list 상세 확인</div>
        )}
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
