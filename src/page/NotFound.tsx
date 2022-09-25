import React from "react";

function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-slate-400 space-y-3">
      <h1 className="text-8xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-slate-200 px-3 py-1 text-sm rounded text-slate-900">
        Page Not Found
      </div>
    </main>
  );
}

export default NotFound;
