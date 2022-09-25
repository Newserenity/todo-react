import React from "react";
import IncompleteError from "../../components/IncompleteError";
import LoginMethodButton from "../../components/LoginMethodButton";
import { useNavigate } from "react-router-dom";

function LoginOption() {
  const navigate = useNavigate();

  const joinClicked = () => {
    navigate(`/login/join`);
  };

  const loginClicked = () => {
    navigate(`/login/local`);
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-400">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <IncompleteError></IncompleteError>
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div>
                  <h2 className="text-2xl text-cyan-900 font-bold">
                    소셜계정 또는 이메일로 시작하기
                  </h2>
                </div>
                <div className="mt-8 flex flex-col space-y-3">
                  <LoginMethodButton
                    text="facebook 계정으로 시작하기"
                    isDisable={true}
                  ></LoginMethodButton>
                  <LoginMethodButton
                    text="google 계정으로 시작하기"
                    isDisable={true}
                  ></LoginMethodButton>
                  <LoginMethodButton
                    text="Email 로 시작하기"
                    onClick={joinClicked}
                  ></LoginMethodButton>
                </div>
                <div className="mt-10">
                  <h2 className="text-2xl text-cyan-900 font-bold">
                    이미 계정이 있으신가요?
                  </h2>
                </div>
                <div className="mt-8 grid">
                  <LoginMethodButton
                    text="Email 로 로그인하기"
                    onClick={loginClicked}
                  ></LoginMethodButton>
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl text-cyan-900 font-bold">
                    로그인에 문제가 있나요?
                  </h2>
                </div>
                <div className="mt-8">
                  <p className="text-sm hover:text-cyan-800 hover:cursor-pointer">
                    여기를 클릭해서 문제를 해결합니다
                  </p>
                </div>

                <div className="mt-10 space-y-4 text-gray-600 text-center">
                  <p className="text-sm">
                    Copyright (c) Janglabs.com Allright reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginOption;
