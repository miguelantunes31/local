import React, {Component} from 'react';
import Todos from './todos';
import AddTodo from './addForm';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';

const Box = styled('div')(compose(spacing,palette));


class Lista extends Component {

    state= {
        todos: [
            
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

      addTodo = (todo) => {
        todo.id = Math.random()
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
      }

      caixa= () => {
        const ola = () => {
            return(
            <Box
        color="black" bgcolor="darkgrey" p={1}>
        <div>
            <Todos todos={this.state.todos} 
                deleteTodo={this.deleteTodo} 
            />
            <AddTodo addTodo={this.addTodo} />
        </div>
        </Box>
            );}
      }
      

    render () {
    return(
        <Box
        color="black" bgcolor="darkgrey" p={1}>
        <div>
            <Todos todos={this.state.todos} 
                deleteTodo={this.deleteTodo} 
            />
            <AddTodo addTodo={this.addTodo} />
        </div>
        </Box>
    );
    }    
}

export default Lista;

