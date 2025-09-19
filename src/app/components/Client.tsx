"use client";

type Todo = { id: number; title: string; completed: boolean };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Client({ children }: any) {
  console.log("is client");
  return (
    <>
      <h1> Client</h1>
      {children}
    </>
  );
}
