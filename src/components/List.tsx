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
    items:any[];
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
    

    
    

    /*deleteTodo =  (id:number) =>  {
        const todos = this.state.items.filter(todo=>{
            return todo.ip !== id
        });
        this.setState({
            todos
        })
      }*/

      
    
      
      

    addTodo = (hi:string)=>{
        //var items2 = [...this.state.items,] 
        //this.state.items.concat()
        /*this.state.items.push(<Draggable id={Math.random()} ><Box bgcolor="pink" p={1} my={0.5}>{hi}</Box></Draggable>)
        this.setState(this.state.items)
        console.log(this.state.items)*/
         //hi.id=Math.random()
         let todos = [...this.state.items, hi];
         this.setState({todos})
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
                        
                            <Todos todos={this.state.items} /*Delete={this.deleteTodo}*//>
                            
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
