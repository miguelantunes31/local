import React, {Component,useState} from 'react'

type AddTodo = (newTodo: string) => void;

  interface TodosProps {
    addTodo: AddTodo;
  }

function AddTodo ({addTodo}:TodosProps )  {
    const [newTodo,setNewTodo] = useState("");
        
    


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
      };

      const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");

      };



    return(
        
        <div>
            <form>
                <input type="text" value={newTodo} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>
                    Add Todo
                </button>
            </form>
        </div>
    );

}

export default AddTodo; 


