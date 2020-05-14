import React, { Component, useState } from "react";
import { TextField, Button } from "@material-ui/core";

type AddTodo = (newTodo: string) => void;

interface TodosProps {
  addTodo: AddTodo;
}

function AddForm({ addTodo }: TodosProps) {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <TextField value={newTodo} onChange={handleChange} />
      <Button onClick={handleSubmit}>Add Todo</Button>
    </div>
  );
}

export default AddForm;
