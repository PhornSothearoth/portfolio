import React from "react";

export default function TilteLoading() {
  return (
    <section className="flex justify-center">
      <div role="status" className="animate-pulse max-w-sm ">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  );
}
