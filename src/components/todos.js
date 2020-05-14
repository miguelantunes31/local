import * as React from "react";
import Virtualize from './virtalize'
//import Draggable from './drops/drags';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'
import {useState} from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';




const Todos =({todos})=>  {


  const todolist = todos.length ? (
    todos.map(todo=>{
      return (
        <div className="todos" key={todo.id}>
          <span>
            <div>
              {todo.title}
              
            </div>
          </span>
        </div>
      )
    })
  ) : (
    <p className="semTarefas">Sem tarefas</p>
  )



    return(
      <Virtualize lista={todolist} />
    );

}

export default Todos;