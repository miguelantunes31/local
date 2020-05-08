import * as React from "react";
import Todos from './todos';
import AddTodo from './addForm';
import Droppable from './drops/drops';
import Draggable from './drops/drags';
import Example from './exemplo';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { render } from '@testing-library/react';

const ola = require("./ola.json");


//const Box = styled('div')(compose(spacing,palette));


  
  interface State {
    items: any[string];
  }



export default class Lista extends React.PureComponent<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = { items: [] };
    }
    
    
    

    /*function deleteTodo  (id: number)  {
        const todos = todo?.filter(todo => {
            return todo.id !== id
        })
            return todos    <AddTodo addTodo={addTodo} />
      }*/



      
      
      

    addTodo = (hi:string)=>{
        this.state.items.push(<Draggable id={Math.random()} ><div>{hi}</div></Draggable>)
        this.setState(this.state.items)
        console.log(this.state.items)
    }
      
    render() {
          
    return<>
        <Box width="55%" bgcolor="grey.300" p={1} my={0.5} >
            
        <table>
            
            <tr>
            <th>
                
                <Droppable id="dr1">
                
                    <Container maxWidth="sm">
                    
                        <Typography style={{ backgroundColor: 'grey', height: '50vh', width: '50vh' }}>
                        <Todos addTodo={this.addTodo} ></Todos>
                            <div>
                                
                                    {this.state.items}
                                
                            </div>
                            
                            
                           
                 
                        </Typography>
                        
                    </Container>
                    
                </Droppable>
            </th>
            <th>
                <Droppable id="dr1">
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



}
