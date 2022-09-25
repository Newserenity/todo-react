import React, { useState } from "react";
import { signIn } from "../../apis/authApis";

function LocalSignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailEmpty, setEmailEmpty] = useState<boolean>(false);
  const [passwordEmpty, setPasswordEmpty] = useState<boolean>(false);

  function signInHandler(): void {
    if (email === " " || email === null) {
      setEmailEmpty(true);
    } else {
      setEmailEmpty(false);
    }

    if (password === " " || password === null) {
      setPasswordEmpty(true);
    } else {
      setPasswordEmpty(false);
    }

    if (emailEmpty === true || passwordEmpty === true) {
      console.log("backend OK");
      signIn(email, password);
    }
  }

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-400">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <h2 className="text-2xl text-cyan-900 font-bold">로그인</h2>

                <div className="my-6">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                    placeholder="name@email.com"
                    type="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                  {emailEmpty ? (
                    <p className="text-red-400 text-xs italic">
                      Email 필드는 필수입니다
                    </p>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                    id="password"
                    type="password"
                    placeholder="******************"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                  {passwordEmpty ? (
                    <p className="text-red-400 text-xs italic">
                      Password 필드는 필수입니다
                    </p>
                  ) : null}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={signInHandler}
                  >
                    로그인
                  </button>
                  <p className="inline-block align-baseline font-bold text-sm text-blue-400 hover:cursor-pointer hover:text-blue-500">
                    로그인에 문제가 있나요?
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

export default LocalSignIn;
