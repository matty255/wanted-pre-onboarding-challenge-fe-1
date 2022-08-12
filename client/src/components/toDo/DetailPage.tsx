import React, { useEffect } from "react";
import { toDoDetail } from "../../store/global";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { getToDoById } from "../../api/querys";
import { Text } from "../../common/Text";
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
      <div className="w-1/2">
        <Text className="ml-3">What To Do!</Text>
        {!detail && (
          <div className="w-full bg-white p-4 m-2">todo list 상세 확인</div>
        )}
        {detail?.data && (
          <div className="w-full bg-white p-4 m-2">
            <Text variant="title">{detail?.data.title}</Text>
            <Text variant="text">{detail?.data.content}</Text>
            {/* <p>{data.createdAt?.toString()}</p>
            <p>{data.updatedAt?.toString()}</p> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
