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


    

    /*todoList = this.state.items.length ? (
        this.todoList.map((todos) => {
            return(
                <List component="nav" /*key={todoList.id}>
                    <table /*id={this.state.todos.id}>
                    <Box color="white" bgcolor="black" p={1}>
                        <ListItem button >
                        <table >
                            <tr>
                                <td>
                            {todos}  
                            </td>
                            <td align="right">
                                <Button variant="outlined" color="secondary" /*onClick={() => {eleminar(todo.id)}} >
                                    <DeleteIcon/>
                                </Button>
                              </td>
                              </tr>
                        </table>
                        </ListItem>
                        </Box>
                    </table>
                </List>
            )
        })
    ) : (
            <p>Sem tarefas</p>


            
        )*/

        /*var numbers = [1, 4, 9]; 
        var roots = numbers.map(Math.sqrt); 
        console.log("roots is : " + roots );*/

        



    const [newTodo,setNewTodo] = useState("");
        
    


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
      };

      const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
        //console.log(ola.ola)
      };


    //const items = this.state.items;
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