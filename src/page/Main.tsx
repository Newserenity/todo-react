import React from "react";

function Main() {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-400">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-9/12 lg:w-8/12 xl:w-7/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-12">
                <h2 className="text-5xl text-cyan-900 font-bold">
                  My Todolist
                </h2>
                <p className="block text-grey-darker textlg font-bold mt-4">
                  할 일 N개 남음
                </p>

                <div className="mb-4 mt-4 flex flex-row content-center items-center text-center rounded-2xl border-solid border-2 border-gray-500">
                  <input
                    className="appearance-none w-full py-2 px-3 text-slate-900 rounded-2xl"
                    placeholder="고양이 밥주기"
                    value="빨래 널기"
                  />
                  <div className="flex flex-row text-sm px-2">
                    <div className="p-2 select-none hover:cursor-pointer bg-gray-300">
                      TODO
                    </div>
                    <div className="p-2 select-none hover:cursor-pointer">
                      DOING
                    </div>
                    <div className="p-2 select-none hover:cursor-pointer">
                      DONE
                    </div>
                  </div>
                </div>

                <div className="mb-4 mt-4 flex flex-row content-center items-center text-center rounded-2xl border-solid border-2 border-gray-500">
                  <input
                    className="appearance-none w-full py-2 px-3 text-slate-900 rounded-2xl"
                    placeholder="고양이 밥주기"
                    value="시금치 사기"
                  />
                  <div className="flex flex-row text-sm px-2">
                    <div className="p-2 select-none hover:cursor-pointer">
                      TODO
                    </div>
                    <div className="p-2 select-none hover:cursor-pointer">
                      DOING
                    </div>
                    <div className="p-2 select-none hover:cursor-pointer bg-gray-300">
                      DONE
                    </div>
                  </div>
                </div>
                <div className="mb-4 mt-4 flex flex-row content-center items-center text-center rounded-2xl border-dotted border-4">
                  <input
                    className="appearance-none w-full py-2 px-3 text-gray-400 rounded-2xl"
                    placeholder="고양이 밥주기"
                  />
                  <div className="flex flex-row text-sm px-2">
                    <div className="p-2 select-none hover:cursor-pointer ">
                      TODO
                    </div>
                    <div className="p-2 select-none hover:cursor-pointer ">
                      DOING
                    </div>
                    <div className="p-2 select-none hover:cursor-pointer ">
                      DONE
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 m-10 rounded-full bg-gray-200 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 m-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
