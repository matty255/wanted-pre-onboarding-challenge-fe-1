import React from "react";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { toDoDetail } from "../../store/global";
import { useRecoilState } from "recoil";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGetToDoById } from "../../api/querys";
import * as el from "../../common";
import { formatDistanceToNow } from "date-fns";

const DetailPage = () => {
  const { search } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const idState = searchParams.get("id") || "";
  const [id, setId] = React.useState("");
  const { data, isFetching, isLoading } = useGetToDoById(id);

  React.useEffect(() => {
    setId(idState);
  }, [data, search]);

  return (
    <>
      <div className="w-1/2">
        <DateBox>
          <el.Text className="text-lg md:text-2xl ml-3 dark:text-white self-end">
            What To Do!
          </el.Text>

          <div className="flex flex-col items-end dark:text-white">
            <el.Text className="text-sm">
              created :{" "}
              {!isFetching && data && idState && id
                ? formatDistanceToNow(new Date(data?.data.data.createdAt), {
                    addSuffix: true,
                    includeSeconds: true,
                  })
                : "생성한 날짜"}
            </el.Text>

            <el.Text className="text-sm">
              updated :{" "}
              {!isFetching && data && idState && id
                ? formatDistanceToNow(new Date(data?.data.data.updatedAt), {
                    addSuffix: true,
                    includeSeconds: true,
                  })
                : "수정한 날짜"}
            </el.Text>
          </div>
        </DateBox>

        <div className="w-full bg-white p-4 m-2 overflow-y-scroll h-32">
          {isFetching ? (
            <el.Text variant="text">처리중...</el.Text>
          ) : (
            <>
              <el.Text variant="title">{data?.data.data.title}</el.Text>
              <el.Text variant="text">{data?.data.data.content}</el.Text>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPage;

const DateBox = tw.div`flex flex-col md:flex-row md:justify-between`;
