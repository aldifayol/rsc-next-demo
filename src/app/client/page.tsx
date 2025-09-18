"use client";

import { useEffect, useState } from "react";

type Todo = { id: number; title: string; completed: boolean };

export default function ClientPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTodos([]);
    setError(false);

    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/todos", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setTodos(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
    // console.log(todos);

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <h1> Client Page </h1>
      <p>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </p>
    </>
  );
}
