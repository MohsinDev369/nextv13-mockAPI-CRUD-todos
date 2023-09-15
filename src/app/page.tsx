import TodoLayout from "@/components/TodoLayout";

import getTodos from "@/lib/CRUD_fx/getTodos";

export default async function Home() {
  let Todos = await getTodos();
  return (
    <div className="flex justify-center items-center">
      <TodoLayout Data={Todos} />
    </div>
  );
}
