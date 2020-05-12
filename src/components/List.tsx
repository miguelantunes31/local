import * as React from "react";
import Todos from './todos';
import AddTodo from './addForm';
import Droppable from './drops/drops';
import Draggable from './drops/drags';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import Virtualize from './virtalize'

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { render } from '@testing-library/react';


//const ola = require("./ola.json");


//const Box = styled('div')(compose(spacing,palette));


  
  interface State {
    items: any[string];
  }

  interface ola{
    key:number, 
    index: number, 
    isScrolling:boolean, 
    isVisible:boolean, 
    style:any, 
  }



export default class Lista extends React.PureComponent<{}, State,ola> {
    constructor(props: {}) {
      super(props);
      this.state = { items: [] };
    }
    
    
    

    /*deleteTodo  ()  {
        const todos = this.state.items?.filter(this.state.items) => {
            return todo.id !== id
        })
            return todos
      }*/

      
    
      
      

    addTodo = (hi:string)=>{
        this.state.items.push(<Draggable id={Math.random()} ><Box bgcolor="pink" p={1} my={0.5}><div>{hi}</div></Box></Draggable>)
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
                                <Virtualize lista={this.state.items}/>
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
