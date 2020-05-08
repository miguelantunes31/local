import Lista from './components/List';
import { useState, useEffect } from 'react';
import * as React from "react";

import Example from './components/exemplo';

import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'

import Box from '@material-ui/core/Box';


import { makeStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';

const BBox = styled('div')(compose(spacing,palette));

const ola = require("./components/ola.json");

interface List {
  title: any;
}

interface State {
  lista: List[];
}




export default class App extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { lista: ola.Lists };
  }

  
  adiciona = ()=> {
      console.log(ola.Lists)

    if(ola.Lists[0]==null){
      ola.Lists[0]=(<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 1</h2></Box><Lista/><br/></div>)
      this.setState(ola.Lists)

    }else if(ola.Lists[1]==null){
      ola.Lists[1]=(<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 2</h2></Box><Lista/><br/></div>)
      this.setState(ola.Lists)
    
      }else if(ola.Lists[2]==null){
        ola.Lists[2]=(<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 3</h2></Box><Lista/><br/></div>)
        this.setState(ola.Lists)

      }else if(ola.Lists[3]==null){
        ola.Lists[3]=(<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 4</h2></Box><Lista/><br/></div>)
        this.setState(ola.Lists)

      }else if(ola.Lists[4]==null){
        ola.Lists[4]=(<div><Box width="5%" bgcolor="grey.300" p={1} my={0.3} ><h2>Lista 5</h2></Box><Lista/><br/></div>)
        this.setState(ola.Lists)
      }else{
        alert("sem espaço para novas listas")
      }
  }


   olaaa:string|any="333";
  
  

  escolheLista =  () =>  {
    this.olaaa=prompt("Qual lista deseja remover?")
    var olaa = parseInt(this.olaaa)
    
    ola.Lists[olaa-1]=null;
    this.setState(ola.Lists)
  }



render(){
    return <>
        <div className="App">
           <BBox
            color="Blue" bgcolor="lightBlue" p={1}
          >
            <table>
                <td>
                  <form >
                      <Button variant="outlined" color="secondary" onClick={this.adiciona}>
                          Nova Lista
                      </Button>
                  </form>
                </td>
                <td>
                  <Button variant="contained" color="secondary" onClick={this.escolheLista}>
                    Apagar Lista
                  </Button>
                </td>
            </table>
          </BBox>
          <br/>
          <div>{this.state.lista}</div>
          <br/>
  
        </div>
      </>
}
}