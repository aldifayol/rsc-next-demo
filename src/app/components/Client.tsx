"use client";

export function Client({ children }: any) {
  console.log("is client");
  return (
    <>
      <h1> Client</h1>
      {children}
    </>
  );
}
