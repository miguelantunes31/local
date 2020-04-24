import React, {Component} from 'react';
import Todos from './todos';
import AddTodo from './addForm';
import Droppable from './drops/drops';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//const Box = styled('div')(compose(spacing,palette));


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

      addTodo = (e) => {
        e.id = Math.random()
        let todos = [...this.state.todos, e]
        this.setState({
            todos
        })
      }


      
    render () {
    return(
        <Box width="55%" bgcolor="grey.300" p={1} my={0.5} >
            
        <table>
            
            <tr>
            <th>
                
                <Droppable id="dr1">
                
                    <Container maxWidth="sm">
                    
                        <Typography style={{ backgroundColor: 'grey', height: '50vh', width: '50vh' }}>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
                        </Typography>
                    </Container>
                    
                </Droppable>
            </th>
            <th>
                <Droppable id="dr2">
                    <Container maxWidth="sm">
                        <Typography style={{ backgroundColor: 'grey', height: '50vh', width: '50vh' }} >
                        </Typography>
                    </Container>
                </Droppable>   
            </th>
            </tr>
            
        </table>
        </Box>
    );
    }
}

export default Lista;

