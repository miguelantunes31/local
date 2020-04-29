import React, {Component} from 'react';
import Todos from './todos';
import AddTodo from './addForm';
import Droppable from './drops/drops';
import Example from './exemplo';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//const Box = styled('div')(compose(spacing,palette));


function Lista () {

    let todo:any[] | undefined;


    function deleteTodo  (id: number)  {
        const todos = todo?.filter(todo => {
            return todo.id !== id
        })
            return todos
      }

      /*function addTodo  (e: { id: number; })  {
        e.id = Math.random()
        let todos = [todo, e]
            return todos
      } <AddTodo addTodo={addTodo} />*/

      
        
    return<>
        <Box width="55%" bgcolor="grey.300" p={1} my={0.5} >
            <Example/>
        <table>
            
            <tr>
            <th>
                
                <Droppable id="dr1">
                
                    <Container maxWidth="sm">
                    
                        <Typography style={{ backgroundColor: 'grey', height: '50vh', width: '50vh' }}>
                                
                                <Todos todos={todo} eleminar={deleteTodo}></Todos>
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
    </>
    
}

export default Lista;

