import React from "react";

export function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">
          Documents.
        </div>
        <h2 className="absolute top-1/2 left-1/2 text-[13vw] -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h2>
      </div>
    </>
  );
}