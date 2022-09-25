import React from "react";

export default function IncompleteError() {
  const date = new Date();
  date.toUTCString();

  return (
    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40 my-10">
      <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
        <div className="rounded-xl bg-white shadow-xl">
          <div className="p-3">
            <div>
              <h2 className="text-red-400">SYSTEM ALERT</h2>
              <p className="text-sm">
                현재 소셜로그인 기능은 사용할 수 없습니다
              </p>
              <p className="text-sm">TimeStamp : {date.toUTCString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
