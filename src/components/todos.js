import React from 'react';
import Draggable from './drops/drags';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';




const Todos = ( { todos, deleteTodo, id } ) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                
                <List component="nav" key={todo.id}>
                    <Draggable id={todo.id}>
                        <ListItem button >
                        <span >
                            {todo.content}
                        </span>
                        </ListItem>
                    </Draggable>
                </List>
            )
        })
    ) : (
            <p>Sem tarefas</p>
        )

        ///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////


    return(
        
        <div >
            
            {todoList}
        </div>
        
        
    );
}

export default Todos;