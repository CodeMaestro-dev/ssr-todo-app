import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";
import Toastify from "toastify-js";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, todos } from "@/lib/features/crudOperations";
import { AppDispatch } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispach: any = useDispatch();
  const [todo, setTodo] = useState("");
  const { response } = useSelector(todos);

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (todo == "") {
      showErrorToast("You can't have any empty todo");
      return;
    }
    dispach(createTodo(todo));
    showToast(response);
    setTodo("");
  }

  function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    setTodo(e.target.value);
  }

  function showErrorToast(toastMessage: string): void {
    Toastify({
      text: toastMessage,
      className:
        "fixed z-20 p-4 top-5 right-5 flex gap-3 text-tertiary text-white bg-red-500",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
    }).showToast();
  }

  function showToast(toastMessage: string): void {
    Toastify({
      text: toastMessage,
      className:
        "fixed z-20 p-4 top-5 right-5 flex gap-3 text-tertiary text-white bg-green-500",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
    }).showToast();
  }

  return (
    <div className={`${inter.className} p-10`}>
      <h1 className="text-3xl mb-3">Add Todo</h1>
      <div className="border border-black rounded-md flex items-center justify-center p-5">
        <form
          className="flex flex-col gap-8 w-full md:w-[600px] mt-20"
          onSubmit={handleSubmit}
        >
          <textarea
            name="todo"
            id="todo"
            className="bg-gray-200 rounded-md h-[60px] text-black p-2"
            onChange={handleInputChange}
            value={todo}
          />
          <input
            type="submit"
            value="Create Todo"
            className="uppercase bg-gray-500 p-2 rounded-md text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
