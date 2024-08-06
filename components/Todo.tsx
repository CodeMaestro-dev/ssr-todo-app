import React from "react";

interface TodoProps {
  todo: string;
  id: string;
  handleEdit: any;
  handleDelete: any;
}

const Todo: React.FC<TodoProps> = ({ todo, id, handleEdit, handleDelete }) => {
  return (
    <li
      id={id}
      className="border rounded-md w-full h-full p-5 bg-gray-300 flex flex-col justify-between gap-2"
    >
      <p>{todo}</p>
      <div>
        <span>Actions:</span>
        <button
          className="ml-2 p-1 bg-blue-500 text-white rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="ml-2 p-1 bg-red-500 text-white rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
