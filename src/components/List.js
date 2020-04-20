import React, {Component} from 'react';
import Todos from './todos';
import AddTodo from './addForm';
import PropTypes from 'prop-types';
import Draggle from './drops/drags';
import Droppable from './drops/drops';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import Draggable from './drops/drags';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Box = styled('div')(compose(spacing,palette));


class Lista extends Component {

    state= {
        todos: [
            
        ]
    }
    
    /*deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
      }*/

      addTodo = (e) => {
        e.id = Math.random()
        let todos = [...this.state.todos, e]
        this.setState({
            todos
        })
      }


      
    render () {
    return(
        <Box color="black" bgcolor="lightgrey" p={1}>
        <table>
            
            <tr>
            <th>
                
                <Droppable id="dr1">
                    <Container maxWidth="sm">
                        <Typography style={{ backgroundColor: 'grey', height: '50vh', width: '50vh' }}>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos}/>
                        </Typography>
                        
                    </Container>
                </Droppable>
            </th>
            <th>
                <Droppable id="dr2">
                    <Container maxWidth="sm">
                        <Typography style={{ backgroundColor: 'grey', height: '50vh', width: '50vh' }} />
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

