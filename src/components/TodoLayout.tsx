"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { Todos } from "@/types/TodosTypes";
import Addfx from "@/lib/CRUD_fx/addTodos";
import { TrashIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import delTodos from "@/lib/CRUD_fx/delTodos";
export const dynamic = "force-dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import updateTodos from "@/lib/CRUD_fx/updateTodos";

export default function TodoLayout({ Data }: { Data: Todos[] }) {
  const router = useRouter();
  let [value, setValue] = useState("");
  let [updateValue, setUpdateValue] = useState("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
        <CardDescription>Add, Read, Update and Delete Todos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Do Home Work..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            variant="secondary"
            className="shrink-0"
            onClick={handleAddTodo}
          >
            Add Todos
          </Button>
        </div>
        <Separator className="my-4" />
        <ScrollArea className="h-72 rounded-md border p-2">
          <div className="space-y-4">
            <h4 className="text-sm font-medium"></h4>
            {Data.map((todo) => (
              // <div key={todo.id}>{todo.Todo}</div>
              <div className="grid gap-6" key={todo.id}>
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <div></div>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {todo.Todo}
                      </p>
                    </div>
                  </div>
                  <Select defaultValue="edit">
                    {/* <SelectTrigger className="ml-auto w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can edit</SelectItem>
                    <SelectItem value="view">Can view</SelectItem>
                  </SelectContent> */}
                    <div className="flex gap-2">
                      <DialogDemo todo={todo} />
                      {/* Delete Todo button */}
                      <Button
                        variant={"destructive"}
                        onClick={() => handleDelTodo(todo.id)}
                      >
                        <TrashIcon />
                      </Button>
                    </div>
                  </Select>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );

  function handleAddTodo() {
    console.log(value);
    Addfx(value).then(() => router.refresh());
    setValue("");
  }
  function handleDelTodo(id: string) {
    delTodos(id).then(() => router.refresh());
  }
  function handleUpdate(id: string, value: string) {
    
    console.log(id);
    updateTodos(id, value).then(() => router.refresh());
  }
  function DialogDemo({ todo }: { todo: any }) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <UpdateIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update todo</DialogTitle>
            <DialogDescription>
              Chanding Todo: <strong>{todo.Todo}</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                New Todo
              </Label>
              <Input
                id="name"
                onChange={(e) => (updateValue = e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => handleUpdate(todo.id, updateValue)}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
}
