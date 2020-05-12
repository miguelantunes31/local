import * as React from "react";
//import Draggable from './drops/drags';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'
import {useState} from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';


const Box = styled('div')(compose(spacing,palette));

const ola = require("./ola.json");

type AddTodo = (newTodo: string) => void;

  interface TodosProps {
    addTodo: AddTodo;
  }
  

function Todos ({addTodo}:TodosProps )  {


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

export default Todos;