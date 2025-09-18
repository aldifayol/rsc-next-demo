type Todo = { id: number; title: string; completed: boolean };

export async function Server() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data as Todo[]);

  return <h1>Server</h1>;
}
