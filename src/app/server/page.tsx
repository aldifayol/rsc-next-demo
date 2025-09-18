import { bigfileFunc } from "../lib/bigfile";

type Todo = { id: number; title: string; completed: boolean };

export default async function ServerPage() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data as Todo[]);

  console.log("server component");
  console.log(todos);

  bigfileFunc();

  return (
    <>
      <h1>Server Page</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
