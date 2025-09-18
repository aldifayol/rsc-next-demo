import { bigfileFunc } from "../lib/bigfile";
import { Client } from "../components/Client";
import { Server } from "../components/Server";

type Todo = { id: number; title: string; completed: boolean };

export default async function ServerPage() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data as Todo[]);

  console.log("server component");

  bigfileFunc();

  return (
    <>
      <h1>Server Page</h1>
      <Client>
        <Server />
      </Client>
    </>
  );
}
