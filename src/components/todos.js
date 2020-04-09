import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';




const Todos = ( { todos, deleteTodo } ) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <List component="nav" key={todo.id}>
                    <ListItem button onClick={()=>{deleteTodo(todo.id)}}>
                    <span >
                        {todo.content}
                    </span>
                    </ListItem>
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