import * as React from "react";
import Virtualize from './virtalize'
//import Draggable from './drops/drags';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, Divider} from '@material-ui/core'
import {useState} from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import { TodoItem } from "./List";


interface Props {
  todos:TodoItem[]
}

const Todos =({todos}:Props)=>  {


  const todolist = 
    todos.map((todo,index)=>{
      return (
        <Divider className="todos" key={index+todo.title} >
          {todo}
        </Divider>
      )
    })
  


    return(
      <Virtualize lista={todolist} />
    );

}

export default Todos;


/*

todos.map(todo=>{
      return (
        <div className="todos" /*key={todo.id} >
        <span>
        <div>
          {todo}
          
        </div>
      </span>
    </div>



*/