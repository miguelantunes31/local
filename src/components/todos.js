import React from 'react';
import Draggable from './drops/drags';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';

const Box = styled('div')(compose(spacing,palette));




const Todos = ( { todos, deleteTodo, id } ) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                
                <List component="nav" key={todo.id}>
                    <Draggable id={todo.id}>
                    <Box color="white" bgcolor="black" p={1}>
                        <ListItem button >
                        <table width="100%" >
                            <tr>
                                <td>
                            {todo.content}  
                            </td>
                            <td align="right">
                                <Button variant="outlined" color="secondary" onClick={() => {deleteTodo(todo.id)}} >
                                    <DeleteIcon/>
                                </Button>
                              </td>
                              </tr>
                        </table>
                        </ListItem>
                        </Box>
                    </Draggable>
                </List>
            )
        })
    ) : (
            <p>Sem tarefas</p>
        )


    return(
        
        <div >
            
            {todoList}
        </div>
        
        
    );
}

export default Todos;