import React, {Component} from 'react';
import {Box} from '@material-ui/core';
import Todos from './todos';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Divider from '@material-ui/core/Divider';



class Lista extends Component {

    state= {
        todos: [
            {id: 1, content: 'buy'},
            {id: 2, content: 'nao'},
            {id: 3, content: 'badeus'}
        ]
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
      }

    render () {
    return(
            <div>
                <Todos todos={this.state.todos} 
                deleteTodo={this.deleteTodo} />
            </div>
    );
    }    
}

export default Lista;

