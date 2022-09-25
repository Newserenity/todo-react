import React from "react";

interface propsType {
  text: string;
  isDisable?: boolean;
  onClick?: any;
}

function LoginMethodButton(props: propsType) {
  return (
    <button
      className="group h-12 px-6 border-2 bg-slate-200 rounded-full"
      onClick={props.onClick}
    >
      <div className="relative flex items-center space-x-4 justify-center">
        {/* <img
          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
          className="absolute left-0 w-5"
          alt="google logo"
        /> */}
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm sm:text-base">
          {props.text}
        </span>
      </div>
    </button>
  );
}

export default LoginMethodButton;
